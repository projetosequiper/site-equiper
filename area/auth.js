/* Telas de login, recuperação e definição de senha (compartilhadas) */
(function () {
  const { API, esc } = window.EQ;

  window.EQ.iniciar = async function (o) {
    const raiz = document.getElementById('login');
    const user = document.getElementById('user');
    const aviso = document.getElementById('demo');
    if (API.demo && aviso) {
      aviso.hidden = false;
      aviso.innerHTML = `Modo demonstração — dados de exemplo. Entre com <b>${esc(o.demoEmail)}</b> e senha <b>demo123</b>.`;
    }
    const card = html => { raiz.innerHTML = `<div class="card-login">${html}</div>`; raiz.hidden = false; };
    const msg = (t, tipo) => t ? `<div class="msg ${tipo || 'err'}">${esc(t)}</div>` : '';
    const ocupado = (btn, sim) => { btn.disabled = sim; };

    function telaLogin(m, tipo) {
      card(`<div class="code">${esc(o.codigo)}</div><h1>${esc(o.titulo)}</h1><p>${esc(o.subtitulo)}</p>${msg(m, tipo)}
        <form id="f-login">
          <div class="field"><label for="l-email">E-mail</label><input id="l-email" type="email" autocomplete="username" required value="${API.demo ? esc(o.demoEmail) : ''}"></div>
          <div class="field"><label for="l-senha">Senha</label><input id="l-senha" type="password" autocomplete="current-password" required></div>
          <button class="btn btn-red" style="width:100%" type="submit">Entrar →</button>
        </form>
        <div class="row"><button class="link" type="button" id="esqueci">Esqueci minha senha</button><a href="index.html" class="muted">← Voltar ao site</a></div>`);
      document.getElementById('f-login').onsubmit = async ev => {
        ev.preventDefault(); const b = ev.submitter; ocupado(b, true);
        try { const u = await API.login(document.getElementById('l-email').value, document.getElementById('l-senha').value); entrar(u); }
        catch (e) { telaLogin(e.message); }
      };
      document.getElementById('esqueci').onclick = telaEsqueci;
      document.getElementById(API.demo ? 'l-senha' : 'l-email').focus();
    }

    function telaEsqueci() {
      card(`<div class="code">RECUPERAR ACESSO</div><h1>Esqueci minha senha</h1><p>Informe seu e-mail. Enviaremos um link para você criar uma nova senha.</p>
        <form id="f-esq"><div class="field"><label for="r-email">E-mail</label><input id="r-email" type="email" required></div>
        <button class="btn btn-dark" style="width:100%" type="submit">Enviar link</button></form>
        <div class="row"><button class="link" type="button" id="voltar">← Voltar ao login</button></div>`);
      document.getElementById('voltar').onclick = () => telaLogin();
      document.getElementById('f-esq').onsubmit = async ev => {
        ev.preventDefault(); ocupado(ev.submitter, true);
        try {
          await API.recuperarSenha(document.getElementById('r-email').value);
          telaLogin(API.demo ? 'No modo demonstração nenhum e-mail é enviado.' : 'Se o e-mail estiver cadastrado, você vai receber o link em instantes.', 'ok');
        } catch (e) { telaLogin(e.message); }
      };
    }

    function telaNovaSenha(u, m) {
      card(`<div class="code">PRIMEIRO ACESSO</div><h1>Crie sua senha</h1><p>${esc(u.email)}</p>${msg(m)}
        <form id="f-nova">
          <div class="field"><label for="n1">Nova senha</label><input id="n1" type="password" minlength="8" autocomplete="new-password" required></div>
          <div class="field"><label for="n2">Repita a senha</label><input id="n2" type="password" minlength="8" autocomplete="new-password" required></div>
          <button class="btn btn-red" style="width:100%" type="submit">Salvar e entrar →</button>
        </form>`);
      document.getElementById('f-nova').onsubmit = async ev => {
        ev.preventDefault();
        const a = document.getElementById('n1').value, b = document.getElementById('n2').value;
        if (a !== b) return telaNovaSenha(u, 'As senhas não conferem.');
        ocupado(ev.submitter, true);
        try { await API.novaSenha(a); history.replaceState(null, '', location.pathname); entrar(u); }
        catch (e) { telaNovaSenha(u, e.message); }
      };
    }

    function entrar(u) {
      raiz.hidden = true; raiz.innerHTML = '';
      if (user) {
        user.hidden = false;
        user.querySelector('.email').textContent = u.email;
        user.querySelector('#sair').onclick = async () => { await API.sair(); location.href = location.pathname; };
      }
      o.aoEntrar(u);
    }

    // link de convite / recuperação vindo por e-mail
    if (!API.demo && (API.linkTipo === 'recovery' || API.linkTipo === 'invite')) {
      await new Promise(r => setTimeout(r, 400));
      const u = await API.sessao();
      if (u) return telaNovaSenha(u);
    }
    const u = await API.sessao();
    u ? entrar(u) : telaLogin();
  };
})();
