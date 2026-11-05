/* EQUIPER · Área do cliente — camada de dados e utilitários
   Funciona em dois modos:
   - MODO DEMONSTRAÇÃO (config.js vazio): dados de exemplo salvos no navegador
   - SUPABASE (config.js preenchido): login real e banco protegido por RLS */
(function () {
  const CFG = window.EQUIPER_CFG || {};
  const DEMO = !CFG.supabaseUrl || !CFG.supabaseKey;
  // tipo do link de e-mail (convite ou recuperação de senha) antes do Supabase limpar a URL
  const LINK_TIPO = new URLSearchParams((location.hash || '').slice(1)).get('type');
  const sb = !DEMO && window.supabase ? window.supabase.createClient(CFG.supabaseUrl, CFG.supabaseKey) : null;

  // ---------- utilitários ----------
  const iso = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  const hoje = () => iso(new Date());
  const addDias = (s, n) => { const d = new Date(s + 'T12:00:00'); d.setDate(d.getDate() + n); return iso(d); };
  const addMeses = (s, n) => { const d = new Date(s + 'T12:00:00'); d.setMonth(d.getMonth() + Number(n || 0)); return iso(d); };
  const fmt = iso => iso ? iso.slice(8, 10) + '/' + iso.slice(5, 7) + '/' + iso.slice(0, 4) : '—';
  const diasAte = iso => Math.round((new Date(iso + 'T12:00:00') - new Date(hoje() + 'T12:00:00')) / 864e5);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const uid = () => (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2));

  const STATUS = {
    agendada: 'Agendada', em_andamento: 'Em andamento', concluida: 'Concluída',
    cancelada: 'Cancelada', atrasada: 'Atrasada'
  };
  const statusDe = m => (m.status === 'agendada' && m.data_prevista < hoje()) ? 'atrasada' : m.status;
  const badge = st => `<span class="badge b-${st}">${STATUS[st] || st}</span>`;

  // resumo de um equipamento a partir das manutenções dele
  function resumoEquip(eq, manuts) {
    const ms = manuts.filter(m => m.equipamento_id === eq.id);
    const feitas = ms.filter(m => m.status === 'concluida').sort((a, b) => (b.data_realizada || b.data_prevista).localeCompare(a.data_realizada || a.data_prevista));
    const abertas = ms.filter(m => m.status === 'agendada' || m.status === 'em_andamento').sort((a, b) => a.data_prevista.localeCompare(b.data_prevista));
    const ultima = feitas[0] || null, proxima = abertas[0] || null;
    let estado = 'sem', rotulo = 'Sem visita agendada';
    if (abertas.some(m => statusDe(m) === 'atrasada')) { estado = 'atrasada'; rotulo = 'Manutenção atrasada'; }
    else if (abertas.some(m => m.status === 'em_andamento')) { estado = 'em_andamento'; rotulo = 'Em manutenção'; }
    else if (proxima) { estado = 'emdia'; rotulo = 'Em dia'; }
    // ciclo: quanto do intervalo entre a última e a próxima visita já passou
    let ciclo = null;
    if (proxima) {
      const ini = ultima ? (ultima.data_realizada || ultima.data_prevista) : addMeses(proxima.data_prevista, -(eq.periodicidade_meses || 6));
      const tot = diasAte(proxima.data_prevista) - diasAte(ini);
      ciclo = tot > 0 ? Math.max(0, Math.min(1, -diasAte(ini) / tot)) : 1;
    }
    const hist = ms.slice().sort((a, b) => (b.data_realizada || b.data_prevista).localeCompare(a.data_realizada || a.data_prevista));
    return { ultima, proxima, estado, rotulo, ciclo, hist };
  }

  // ---------- modo demonstração ----------
  const DEMO_USERS = { 'cliente@demo.com': 'demo123', 'equipe@demo.com': 'demo123' };
  const DEMO_EQUIPE = ['equipe@demo.com'];
  function seed() {
    const t = hoje();
    const c1 = uid(), c2 = uid();
    const e = Array.from({ length: 6 }, uid);
    const M = (eq, prev, st, real, tec, serv, obs) => ({ id: uid(), equipamento_id: eq, data_prevista: prev, data_realizada: real || null, status: st, tecnico: tec || '', servicos: serv || '', observacoes: obs || '' });
    return {
      clientes: [
        { id: c1, nome: 'Condomínio Vale Imperial', email: 'cliente@demo.com', telefone: '(24) 99999-0000', endereco: 'Estrada União e Indústria, 1000 – Itaipava, Petrópolis – RJ' },
        { id: c2, nome: 'Residência Araras', email: 'araras@demo.com', telefone: '(24) 98888-0000', endereco: 'Araras, Petrópolis – RJ' }
      ],
      equipamentos: [
        { id: e[0], cliente_id: c1, tipo: 'Pressurizador', marca: 'Grundfos', modelo: 'Hydro Multi-E 2 CME 5-4', local: 'Casa de bombas – subsolo', numero_serie: 'GF-98231', periodicidade_meses: 6, instalado_em: addMeses(t, -30) },
        { id: e[1], cliente_id: c1, tipo: 'Aquecedor a gás', marca: 'Rinnai', modelo: 'REU-E33 FEH', local: 'Central de aquecimento – cobertura', numero_serie: 'RN-55120', periodicidade_meses: 12, instalado_em: addMeses(t, -26) },
        { id: e[2], cliente_id: c1, tipo: 'Filtragem de piscina', marca: 'Jacuzzi', modelo: 'Filtro 19TP + bomba 1 cv', local: 'Casa de máquinas da piscina', numero_serie: '', periodicidade_meses: 3, instalado_em: addMeses(t, -20) },
        { id: e[3], cliente_id: c1, tipo: 'Gerador de vapor (sauna)', marca: 'Tholz', modelo: 'MBX 12 kW', local: 'Sauna – área de lazer', numero_serie: 'TZ-7781', periodicidade_meses: 6, instalado_em: addMeses(t, -14) },
        { id: e[4], cliente_id: c2, tipo: 'Bomba de calor (piscina)', marca: 'Solis', modelo: '', local: 'Área técnica', numero_serie: '', periodicidade_meses: 6, instalado_em: addMeses(t, -10) },
        { id: e[5], cliente_id: c2, tipo: 'Pressurizador', marca: 'Grundfos', modelo: 'Scala2', local: 'Abrigo de bombas', numero_serie: '', periodicidade_meses: 12, instalado_em: addMeses(t, -15) }
      ],
      manutencoes: [
        M(e[0], addMeses(t, -12), 'concluida', addMeses(t, -12), 'Carlos', 'Verificação de pressão de pré-carga do vaso, limpeza do filtro de sucção, teste de partida das bombas.', 'Equipamento em bom estado.'),
        M(e[0], addMeses(t, -6), 'concluida', addDias(addMeses(t, -6), 2), 'Carlos', 'Revisão semestral. Substituição do pressostato.', 'Recomendada troca do vaso de expansão na próxima visita.'),
        M(e[0], addDias(t, 18), 'agendada', null, 'Carlos', 'Revisão semestral + troca do vaso de expansão.'),
        M(e[1], addMeses(t, -12), 'concluida', addMeses(t, -12), 'Rafael', 'Limpeza do queimador, verificação de exaustão e teste de estanqueidade.', 'Laudo emitido.'),
        M(e[1], addDias(t, -9), 'agendada', null, 'Rafael', 'Revisão anual Rinnai.'),
        M(e[2], addMeses(t, -3), 'concluida', addMeses(t, -3), 'Carlos', 'Retrolavagem, troca de areia filtrante, revisão do pré-filtro.'),
        M(e[2], t, 'em_andamento', null, 'Carlos', 'Revisão trimestral: selo mecânico da bomba em substituição.'),
        M(e[3], addMeses(t, -6), 'concluida', addMeses(t, -6), 'Rafael', 'Descalcificação do gerador, teste de resistências e sensor.'),
        M(e[3], addDias(t, 45), 'agendada', null, 'Rafael', 'Revisão semestral.'),
        M(e[4], addDias(t, 5), 'agendada', null, 'Carlos', 'Revisão semestral.'),
        M(e[5], addDias(t, -3), 'agendada', null, 'Rafael', 'Revisão anual.')
      ]
    };
  }
  let mem = null;
  const demoDb = () => {
    if (mem) return mem;
    try { const s = localStorage.getItem('equiper-demo-v1'); if (s) mem = JSON.parse(s); } catch (e) { }
    return mem || (mem = seed());
  };
  const demoSave = () => { try { localStorage.setItem('equiper-demo-v1', JSON.stringify(mem)); } catch (e) { } };
  let demoSessao = null;
  try { demoSessao = sessionStorage.getItem('equiper-demo-sessao'); } catch (e) { }
  const demoEhEquipe = () => DEMO_EQUIPE.includes(demoSessao);
  const copia = l => l.map(x => Object.assign({}, x));
  const demoMeusClientes = () => copia(demoDb().clientes).filter(c => demoEhEquipe() || c.email.toLowerCase() === demoSessao);

  // ---------- API ----------
  const erro = e => { if (e) throw new Error(e.message || String(e)); };
  const API = {
    demo: DEMO,
    linkTipo: LINK_TIPO,
    async login(email, senha) {
      email = email.trim().toLowerCase();
      if (DEMO) {
        if (DEMO_USERS[email] !== senha) throw new Error('E-mail ou senha incorretos.');
        demoSessao = email; try { sessionStorage.setItem('equiper-demo-sessao', email); } catch (e) { }
        return { email };
      }
      const { data, error } = await sb.auth.signInWithPassword({ email, password: senha });
      if (error) throw new Error(error.message.includes('Invalid') ? 'E-mail ou senha incorretos.' : error.message);
      return data.user;
    },
    async sair() {
      if (DEMO) { demoSessao = null; try { sessionStorage.removeItem('equiper-demo-sessao'); } catch (e) { } return; }
      await sb.auth.signOut();
    },
    async sessao() {
      if (DEMO) return demoSessao ? { email: demoSessao } : null;
      const { data } = await sb.auth.getSession();
      return data.session ? data.session.user : null;
    },
    async recuperarSenha(email) {
      if (DEMO) return;
      const { error } = await sb.auth.resetPasswordForEmail(email.trim(), { redirectTo: location.origin + location.pathname });
      erro(error);
    },
    async novaSenha(senha) {
      if (DEMO) return;
      const { error } = await sb.auth.updateUser({ password: senha });
      erro(error);
    },
    async ehEquipe() {
      if (DEMO) return demoEhEquipe();
      const { data, error } = await sb.rpc('is_equipe'); erro(error); return !!data;
    },
    async clientes() {
      if (DEMO) return demoMeusClientes().slice().sort((a, b) => a.nome.localeCompare(b.nome));
      const { data, error } = await sb.from('clientes').select('*').order('nome'); erro(error); return data;
    },
    async equipamentos(clienteIds) {
      if (DEMO) { const ids = clienteIds || demoMeusClientes().map(c => c.id); return copia(demoDb().equipamentos.filter(e => ids.includes(e.cliente_id))); }
      let q = sb.from('equipamentos').select('*').order('tipo');
      if (clienteIds) q = q.in('cliente_id', clienteIds);
      const { data, error } = await q; erro(error); return data;
    },
    async manutencoes(equipIds) {
      if (DEMO) {
        const ids = equipIds || API._demoEquipIds();
        return copia(demoDb().manutencoes.filter(m => ids.includes(m.equipamento_id)));
      }
      let q = sb.from('manutencoes').select('*').order('data_prevista', { ascending: false });
      if (equipIds) q = q.in('equipamento_id', equipIds);
      const { data, error } = await q; erro(error); return data;
    },
    _demoEquipIds() { const cs = demoMeusClientes().map(c => c.id); return demoDb().equipamentos.filter(e => cs.includes(e.cliente_id)).map(e => e.id); },
    async salvar(tabela, obj) {
      obj = Object.assign({}, obj);
      Object.keys(obj).forEach(k => { if (obj[k] === '') obj[k] = null; });
      if (DEMO) {
        if (!demoEhEquipe()) throw new Error('Sem permissão.');
        const lista = demoDb()[tabela];
        if (obj.id) { const i = lista.findIndex(x => x.id === obj.id); lista[i] = Object.assign({}, lista[i], obj); demoSave(); return Object.assign({}, lista[i]); }
        obj.id = uid(); lista.push(obj); demoSave(); return Object.assign({}, obj);
      }
      const id = obj.id; delete obj.id;
      const q = id ? sb.from(tabela).update(obj).eq('id', id) : sb.from(tabela).insert(obj);
      const { data, error } = await q.select().single(); erro(error); return data;
    },
    async excluir(tabela, id) {
      if (DEMO) {
        if (!demoEhEquipe()) throw new Error('Sem permissão.');
        const d = demoDb();
        if (tabela === 'clientes') { const eqs = d.equipamentos.filter(e => e.cliente_id === id).map(e => e.id); d.manutencoes = d.manutencoes.filter(m => !eqs.includes(m.equipamento_id)); d.equipamentos = d.equipamentos.filter(e => e.cliente_id !== id); }
        if (tabela === 'equipamentos') d.manutencoes = d.manutencoes.filter(m => m.equipamento_id !== id);
        d[tabela] = d[tabela].filter(x => x.id !== id); demoSave(); return;
      }
      const { error } = await sb.from(tabela).delete().eq('id', id); erro(error);
    },
    resetDemo() { mem = seed(); demoSave(); }
  };

  if (!DEMO && !sb) console.error('Biblioteca do Supabase não carregou.');
  window.EQ = { API, hoje, addDias, addMeses, fmt, diasAte, esc, STATUS, statusDe, badge, resumoEquip, sb };
})();
