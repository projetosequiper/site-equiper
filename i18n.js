// Tradução do site: PT (original no HTML), EN, FR, IT, ES.
// Cada linha: [português, inglês, francês, italiano, espanhol].
// Para traduzir um texto novo, adicione uma linha com o texto em português exatamente como está na página.
(function () {
const LANGS = ['pt', 'en', 'fr', 'it', 'es'];
const HTML_LANG = { pt: 'pt-BR', en: 'en', fr: 'fr', it: 'it', es: 'es' };
const D = [
// cabeçalho e menu
["Equiper Engenharia – Projetos e Instalações", "Equiper Engenharia – Building Services Design and Installation", "Equiper Engenharia – Projets et Installations", "Equiper Engenharia – Progettazione e Impianti", "Equiper Engenharia – Proyectos e Instalaciones"],
["De Petrópolis para o mundo", "From Petrópolis to the world", "De Petrópolis au monde entier", "Da Petrópolis al mondo", "De Petrópolis al mundo"],
["Idioma", "Language", "Langue", "Lingua", "Idioma"],
["Equiper Engenharia – início", "Equiper Engenharia – home", "Equiper Engenharia – accueil", "Equiper Engenharia – home", "Equiper Engenharia – inicio"],
["Projetos", "Projects", "Projets", "Progetti", "Proyectos"],
["Equipamentos", "Equipment", "Équipements", "Apparecchiature", "Equipos"],
["Portfólio", "Portfolio", "Portfolio", "Portfolio", "Portafolio"],
["Atuação", "Coverage", "Zones", "Zone", "Cobertura"],
["Sobre", "About", "À propos", "Chi siamo", "Nosotros"],
["Contato", "Contact", "Contact", "Contatti", "Contacto"],
["Área do cliente", "Client area", "Espace client", "Area clienti", "Área del cliente"],
["Solicitar orçamento", "Request a quote", "Demander un devis", "Richiedi un preventivo", "Solicitar presupuesto"],
["Solicitar orçamento →", "Request a quote →", "Demander un devis →", "Richiedi un preventivo →", "Solicitar presupuesto →"],
["Abrir menu", "Open menu", "Ouvrir le menu", "Apri il menu", "Abrir menú"],
// hero
["Engenharia de instalações · desde 2004", "Building services engineering · since 2004", "Ingénierie des installations · depuis 2004", "Ingegneria impiantistica · dal 2004", "Ingeniería de instalaciones · desde 2004"],
["Do projeto em BIM ao equipamento <em>funcionando</em>.", "From BIM design to equipment <em>up and running</em>.", "Du projet BIM à l'équipement <em>en service</em>.", "Dal progetto BIM all'impianto <em>funzionante</em>.", "Del proyecto BIM al equipo <em>funcionando</em>."],
["Projetamos as instalações da sua edificação e fornecemos, instalamos e mantemos os equipamentos que fazem tudo funcionar: piscinas, saunas, pressurização, aquecimento e bombeamento.",
 "We design your building's services and supply, install and maintain the equipment that keeps everything running: pools, saunas, pressure boosting, water heating and pumping.",
 "Nous concevons les installations de votre bâtiment et fournissons, installons et entretenons les équipements qui font tout fonctionner : piscines, saunas, surpression, chauffage de l'eau et pompage.",
 "Progettiamo gli impianti del vostro edificio e forniamo, installiamo e manuteniamo le apparecchiature che fanno funzionare tutto: piscine, saune, pressurizzazione, riscaldamento dell'acqua e pompaggio.",
 "Proyectamos las instalaciones de su edificación y suministramos, instalamos y mantenemos los equipos que hacen que todo funcione: piscinas, saunas, presurización, calentamiento de agua y bombeo."],
["Ver portfólio", "View portfolio", "Voir le portfolio", "Vedi il portfolio", "Ver portafolio"],
["Esquema vertical ilustrativo de água fria e quente", "Illustrative vertical diagram of cold and hot water", "Schéma vertical illustratif d'eau froide et chaude", "Schema verticale illustrativo di acqua fredda e calda", "Esquema vertical ilustrativo de agua fría y caliente"],
["COB.", "ROOF", "TOIT", "COP.", "CUB."],
["PAV. 02", "FLOOR 02", "ÉTAGE 02", "PIANO 02", "PISO 02"],
["PAV. 01", "FLOOR 01", "ÉTAGE 01", "PIANO 01", "PISO 01"],
["TÉRREO", "GROUND", "RDC", "PIANO TERRA", "PLANTA BAJA"],
["RES. SUPERIOR", "UPPER TANK", "RÉSERVOIR HAUT", "SERBATOIO SUP.", "DEPÓSITO SUP."],
["PRESSURIZADOR", "BOOSTER PUMP", "SURPRESSEUR", "PRESSURIZZATORE", "PRESURIZADOR"],
["3 PAVIMENTOS", "3 FLOORS", "3 NIVEAUX", "3 PIANI", "3 PISOS"],
["LEGENDA", "LEGEND", "LÉGENDE", "LEGENDA", "LEYENDA"],
["ÁGUA FRIA", "COLD WATER", "EAU FROIDE", "ACQUA FREDDA", "AGUA FRÍA"],
["ÁGUA QUENTE", "HOT WATER", "EAU CHAUDE", "ACQUA CALDA", "AGUA CALIENTE"],
["DESENHO", "DRAWING", "DESSIN", "DISEGNO", "PLANO"],
["Esquema vertical AF/AQ", "Vertical riser CW/HW", "Schéma vertical EF/EC", "Schema verticale AF/AC", "Esquema vertical AF/AC"],
["ESCALA", "SCALE", "ÉCHELLE", "SCALA", "ESCALA"],
["S/ ESC.", "NTS", "SANS ÉCH.", "N.S.", "S/ ESC."],
["FOLHA", "SHEET", "FEUILLE", "FOGLIO", "HOJA"],
// números
["10.000", "10,000", "10 000", "10.000", "10.000"],
["2.000", "2,000", "2 000", "2.000", "2.000"],
["projetos desde 2004", "projects since 2004", "projets depuis 2004", "progetti dal 2004", "proyectos desde 2004"],
["clientes atendidos", "clients served", "clients servis", "clienti serviti", "clientes atendidos"],
["estados brasileiros com projetos", "Brazilian states with projects", "États brésiliens avec des projets", "stati brasiliani con progetti", "estados brasileños con proyectos"],
["em Revit desde 2018", "in Revit since 2018", "sur Revit depuis 2018", "in Revit dal 2018", "en Revit desde 2018"],
// projetos
["Projetos de instalações completos e compatibilizados", "Complete, coordinated building services designs", "Projets d'installations complets et coordonnés", "Progetti impiantistici completi e coordinati", "Proyectos de instalaciones completos y compatibilizados"],
["Do esgoto ao SPDA, todas as disciplinas no mesmo modelo, com memorial de cálculo e documentação técnica.",
 "From drainage to lightning protection, every discipline in a single model, with design calculations and technical documentation.",
 "Des eaux usées au paratonnerre, toutes les disciplines dans une même maquette, avec note de calcul et documentation technique.",
 "Dagli scarichi alla protezione contro i fulmini, tutte le discipline in un unico modello, con relazione di calcolo e documentazione tecnica.",
 "Del saneamiento al pararrayos, todas las disciplinas en un mismo modelo, con memoria de cálculo y documentación técnica."],
["Água fria e quente", "Cold and hot water", "Eau froide et chaude", "Acqua fredda e calda", "Agua fría y caliente"],
["Esgoto sanitário", "Sanitary drainage", "Eaux usées", "Scarichi sanitari", "Saneamiento"],
["Águas pluviais", "Rainwater", "Eaux pluviales", "Acque meteoriche", "Aguas pluviales"],
["Gás", "Gas", "Gaz", "Gas", "Gas"],
["Elétrica", "Electrical", "Électricité", "Impianto elettrico", "Electricidad"],
["Proteção contra descargas atmosféricas", "Lightning protection", "Protection contre la foudre", "Protezione contro i fulmini", "Protección contra descargas atmosféricas"],
["Telefonia e dados", "Telephone and data", "Téléphonie et données", "Telefonia e dati", "Telefonía y datos"],
["Piscinas, saunas, pressurização e aquecimento", "Pools, saunas, pressure boosting and heating", "Piscines, saunas, surpression et chauffage", "Piscine, saune, pressurizzazione e riscaldamento", "Piscinas, saunas, presurización y calentamiento"],
["MODELO BIM · REVIT", "BIM MODEL · REVIT", "MAQUETTE BIM · REVIT", "MODELLO BIM · REVIT", "MODELO BIM · REVIT"],
["COMPATIBILIZAÇÃO", "COORDINATION", "COORDINATION", "COORDINAMENTO", "COMPATIBILIZACIÓN"],
["Modelo BIM de residência com redes de instalações e piscina", "BIM model of a residence with building services and pool", "Maquette BIM d'une résidence avec réseaux d'installations et piscine", "Modello BIM di una residenza con impianti e piscina", "Modelo BIM de residencia con redes de instalaciones y piscina"],
["Compatibilização", "Coordination", "Coordination", "Coordinamento", "Compatibilización"],
["Interferências resolvidas antes da obra.", "Clashes resolved before construction.", "Conflits résolus avant le chantier.", "Interferenze risolte prima del cantiere.", "Interferencias resueltas antes de la obra."],
["Quantitativos", "Quantity take-off", "Métrés", "Computi", "Mediciones"],
["Materiais extraídos do modelo com precisão.", "Materials accurately extracted from the model.", "Matériaux extraits de la maquette avec précision.", "Materiali estratti dal modello con precisione.", "Materiales extraídos del modelo con precisión."],
["Menos retrabalho", "Less rework", "Moins de reprises", "Meno rifacimenti", "Menos retrabajo"],
["Obra mais rápida e previsível.", "Faster, more predictable construction.", "Chantier plus rapide et prévisible.", "Cantiere più rapido e prevedibile.", "Obra más rápida y previsible."],
["ART · RT HABILITADO", "LICENSED ENGINEER", "INGÉNIEUR HABILITÉ", "TECNICO ABILITATO", "RESPONSABLE TÉCNICO"],
["Cada projeto é entregue com memorial de cálculo e documentação técnica assinada por responsável técnico habilitado.",
 "Every project is delivered with design calculations and technical documentation signed by a licensed engineer.",
 "Chaque projet est livré avec note de calcul et documentation technique signée par un ingénieur habilité.",
 "Ogni progetto è consegnato con relazione di calcolo e documentazione tecnica firmata da un tecnico abilitato.",
 "Cada proyecto se entrega con memoria de cálculo y documentación técnica firmada por un responsable técnico habilitado."],
// equipamentos
["Equipamentos e instalação", "Equipment and installation", "Équipements et installation", "Apparecchiature e installazione", "Equipos e instalación"],
["Fornecemos, instalamos e mantemos", "We supply, install and maintain", "Nous fournissons, installons et entretenons", "Forniamo, installiamo e manuteniamo", "Suministramos, instalamos y mantenemos"],
["Nossa execução é a venda e a instalação dos equipamentos, com montagem, automação e assistência técnica.",
 "On site, we sell and install equipment, including assembly, automation and technical service.",
 "Sur le terrain, nous vendons et installons les équipements, avec montage, automatisation et service technique.",
 "In cantiere vendiamo e installiamo le apparecchiature, con montaggio, automazione e assistenza tecnica.",
 "En obra, vendemos e instalamos los equipos, con montaje, automatización y asistencia técnica."],
["Piscinas", "Pools", "Piscines", "Piscine", "Piscinas"],
["Filtração, bombas, bicos de retorno e hidromassagem, aquecimento e automação.", "Filtration, pumps, return and massage jets, heating and automation.", "Filtration, pompes, buses de refoulement et d'hydromassage, chauffage et automatisation.", "Filtrazione, pompe, bocchette di mandata e idromassaggio, riscaldamento e automazione.", "Filtración, bombas, boquillas de retorno e hidromasaje, calentamiento y automatización."],
["Saunas", "Saunas", "Saunas", "Saune", "Saunas"],
["Saunas secas e a vapor, com automação de temperatura e uso.", "Dry and steam saunas, with temperature and usage automation.", "Saunas secs et hammams, avec automatisation de la température et de l'utilisation.", "Saune secche e bagni turchi, con automazione di temperatura e utilizzo.", "Saunas secas y de vapor, con automatización de temperatura y uso."],
["Pressurização", "Pressure boosting", "Surpression", "Pressurizzazione", "Presurización"],
["Sistemas pressurizadores para pressão adequada em toda a edificação.", "Booster systems for proper water pressure throughout the building.", "Systèmes de surpression pour une pression adéquate dans tout le bâtiment.", "Sistemi di pressurizzazione per una pressione adeguata in tutto l'edificio.", "Sistemas de presurización para una presión adecuada en toda la edificación."],
["Aquecimento de água", "Water heating", "Chauffage de l'eau", "Riscaldamento dell'acqua", "Calentamiento de agua"],
["Boilers com apoio a gás, aquecimento solar e sistemas de conforto.", "Storage water heaters with gas backup, solar heating and comfort systems.", "Ballons avec appoint gaz, chauffage solaire et systèmes de confort.", "Bollitori con integrazione a gas, solare termico e sistemi di comfort.", "Acumuladores con apoyo a gas, calentamiento solar y sistemas de confort."],
["Bombeamento", "Pumping", "Pompage", "Pompaggio", "Bombeo"],
["Bombas de recalque, de drenagem e outros sistemas de bombeamento.", "Lift pumps, drainage pumps and other pumping systems.", "Pompes de relevage, de drainage et autres systèmes de pompage.", "Pompe di sollevamento, di drenaggio e altri sistemi di pompaggio.", "Bombas de impulsión, de drenaje y otros sistemas de bombeo."],
["NOTA: A Equiper não executa obra civil. Nossa execução é focada em equipamentos.", "NOTE: Equiper does not carry out civil works. Our on-site work focuses on equipment.", "NOTE : Equiper ne réalise pas de génie civil. Notre intervention se concentre sur les équipements.", "NOTA: Equiper non esegue opere edili. Il nostro lavoro in cantiere è dedicato alle apparecchiature.", "NOTA: Equiper no ejecuta obra civil. Nuestro trabajo se centra en los equipos."],
["Assistência técnica autorizada Grundfos e Rinnai", "Authorized Grundfos and Rinnai service", "Service technique agréé Grundfos et Rinnai", "Assistenza tecnica autorizzata Grundfos e Rinnai", "Servicio técnico autorizado Grundfos y Rinnai"],
["Ponto de Serviço Grundfos (PSG) para manutenção e reparo de bombas com laudo técnico, e assistência técnica Rinnai para aquecedores.",
 "Grundfos Service Point (PSG) for pump maintenance and repair with technical reports, and Rinnai service for water heaters.",
 "Point de Service Grundfos (PSG) pour l'entretien et la réparation de pompes avec rapport technique, et service technique Rinnai pour chauffe-eau.",
 "Punto di Assistenza Grundfos (PSG) per manutenzione e riparazione di pompe con perizia tecnica, e assistenza tecnica Rinnai per scaldabagni.",
 "Punto de Servicio Grundfos (PSG) para mantenimiento y reparación de bombas con informe técnico, y servicio técnico Rinnai para calentadores."],
["Agendar manutenção", "Book maintenance", "Planifier un entretien", "Prenota la manutenzione", "Agendar mantenimiento"],
["Assistência técnica autorizada", "Authorized service", "Service technique agréé", "Assistenza tecnica autorizzata", "Servicio técnico autorizado"],
["Marcas com que trabalhamos", "Brands we work with", "Marques avec lesquelles nous travaillons", "Marchi con cui lavoriamo", "Marcas con las que trabajamos"],
// processo
["Como trabalhamos", "How we work", "Notre méthode", "Come lavoriamo", "Cómo trabajamos"],
["Acompanhamos você do início ao fim", "We're with you from start to finish", "Nous vous accompagnons du début à la fin", "Vi seguiamo dall'inizio alla fine", "Le acompañamos de principio a fin"],
["Orçamentos claros e prazos definidos em todas as etapas.", "Clear quotes and defined deadlines at every stage.", "Devis clairs et délais définis à chaque étape.", "Preventivi chiari e tempi definiti in ogni fase.", "Presupuestos claros y plazos definidos en todas las etapas."],
["Reunião inicial", "Kick-off meeting", "Réunion initiale", "Riunione iniziale", "Reunión inicial"],
["Entendemos a necessidade e o escopo.", "We understand your needs and the scope.", "Nous comprenons le besoin et le périmètre.", "Comprendiamo esigenze e obiettivi.", "Entendemos la necesidad y el alcance."],
["Visita técnica", "Site visit", "Visite technique", "Sopralluogo", "Visita técnica"],
["Levantamento no local da edificação.", "On-site survey of the building.", "Relevé sur le site du bâtiment.", "Rilievo sul posto dell'edificio.", "Relevamiento en el sitio de la edificación."],
["Projeto BIM", "BIM design", "Projet BIM", "Progetto BIM", "Proyecto BIM"],
["Modelagem e compatibilização em Revit.", "Modeling and coordination in Revit.", "Modélisation et coordination sur Revit.", "Modellazione e coordinamento in Revit.", "Modelado y compatibilización en Revit."],
["Orçamento", "Quote", "Devis", "Preventivo", "Presupuesto"],
["Proposta detalhada com prazos.", "Detailed proposal with timelines.", "Proposition détaillée avec délais.", "Proposta dettagliata con tempistiche.", "Propuesta detallada con plazos."],
["Instalação", "Installation", "Installation", "Installazione", "Instalación"],
["Fornecimento, montagem e automação.", "Supply, assembly and automation.", "Fourniture, montage et automatisation.", "Fornitura, montaggio e automazione.", "Suministro, montaje y automatización."],
["Comissionamento", "Commissioning", "Mise en service", "Collaudo", "Puesta en marcha"],
["Testes, entrega e assistência técnica.", "Testing, handover and technical service.", "Essais, livraison et service technique.", "Test, consegna e assistenza tecnica.", "Pruebas, entrega y asistencia técnica."],
// portfólio
["Trabalhos realizados", "Completed work", "Réalisations", "Lavori realizzati", "Trabajos realizados"],
["Projetos em BIM e instalações de aquecimento, piscinas e casas de máquinas. Clique em um trabalho para ver as imagens.",
 "BIM designs and installations of heating, pools and plant rooms. Click a project to see the images.",
 "Projets BIM et installations de chauffage, piscines et locaux techniques. Cliquez sur une réalisation pour voir les images.",
 "Progetti BIM e installazioni di riscaldamento, piscine e locali tecnici. Clicca su un lavoro per vedere le immagini.",
 "Proyectos BIM e instalaciones de calentamiento, piscinas y salas de máquinas. Haga clic en un trabajo para ver las imágenes."],
["Todos", "All", "Tous", "Tutti", "Todos"],
["Projetos BIM", "BIM designs", "Projets BIM", "Progetti BIM", "Proyectos BIM"],
["Instalações", "Installations", "Installations", "Installazioni", "Instalaciones"],
["Aquecimento", "Heating", "Chauffage", "Riscaldamento", "Calentamiento"],
["Ver todos os {n} trabalhos", "View all {n} projects", "Voir les {n} réalisations", "Vedi tutti i {n} lavori", "Ver los {n} trabajos"],
["Mostrar menos", "Show less", "Voir moins", "Mostra meno", "Mostrar menos"],
["{n} imagens", "{n} images", "{n} images", "{n} immagini", "{n} imágenes"],
["Projeto", "Design", "Projet", "Progetto", "Proyecto"],
["Piscina", "Pool", "Piscine", "Piscina", "Piscina"],
["Projeto 3D", "3D design", "Projet 3D", "Progetto 3D", "Proyecto 3D"],
["Automação", "Automation", "Automatisation", "Automazione", "Automatización"],
["Montagem Equiper", "Assembled by Equiper", "Montage Equiper", "Montaggio Equiper", "Montaje Equiper"],
["Cobertura Leblon", "Leblon Penthouse", "Penthouse Leblon", "Attico Leblon", "Ático Leblon"],
["Residência Leblon", "Leblon Residence", "Résidence Leblon", "Residenza Leblon", "Residencia Leblon"],
["Residência", "Residence", "Résidence", "Residenza", "Residencia"],
["Piscina na serra", "Mountain pool", "Piscine en montagne", "Piscina in montagna", "Piscina en la sierra"],
["Pousada Bonfim", "Bonfim Inn", "Auberge Bonfim", "Locanda Bonfim", "Posada Bonfim"],
["Residência Joá", "Joá Residence", "Résidence Joá", "Residenza Joá", "Residencia Joá"],
["Residência Barra da Tijuca", "Barra da Tijuca Residence", "Résidence Barra da Tijuca", "Residenza Barra da Tijuca", "Residencia Barra da Tijuca"],
["Piscina, aquecimento e área técnica", "Pool, heating and plant area", "Piscine, chauffage et local technique", "Piscina, riscaldamento e area tecnica", "Piscina, calentamiento y área técnica"],
["Central de aquecimento", "Heating plant", "Centrale de chauffage", "Centrale termica", "Central de calentamiento"],
["Piscina entre palmeiras", "Pool among palm trees", "Piscine entre les palmiers", "Piscina tra le palme", "Piscina entre palmeras"],
["Pressurização residencial", "Residential pressure boosting", "Surpression résidentielle", "Pressurizzazione residenziale", "Presurización residencial"],
["Quadros de comando", "Control panels", "Armoires de commande", "Quadri di comando", "Tableros de control"],
["Residência modelada em Revit", "Residence modeled in Revit", "Résidence modélisée sur Revit", "Residenza modellata in Revit", "Residencia modelada en Revit"],
["Piscina com calhas", "Pool with overflow gutters", "Piscine à goulottes", "Piscina con canalette", "Piscina con canaletas"],
["Casa de máquinas e automação", "Plant room and automation", "Local technique et automatisation", "Locale tecnico e automazione", "Sala de máquinas y automatización"],
["Piscina à beira-mar", "Seaside pool", "Piscine en bord de mer", "Piscina sul mare", "Piscina frente al mar"],
["Aquecimento com boiler, quatro coletores solares e bomba de calor, pressurização e filtragem. Casa de máquinas da piscina com aquecedores a gás modelada em BIM.",
 "Heating with a storage tank, four solar collectors and a heat pump, plus pressure boosting and filtration. Pool plant room with gas heaters modeled in BIM.",
 "Chauffage par ballon, quatre capteurs solaires et pompe à chaleur, surpression et filtration. Local technique de la piscine avec chauffe-eau à gaz modélisé en BIM.",
 "Riscaldamento con bollitore, quattro collettori solari e pompa di calore, pressurizzazione e filtrazione. Locale tecnico della piscina con caldaie a gas modellato in BIM.",
 "Calentamiento con acumulador, cuatro colectores solares y bomba de calor, presurización y filtración. Sala de máquinas de la piscina con calentadores a gas modelada en BIM."],
["Casa de máquinas com filtro e bombas da piscina, pressurizador, filtros de água e central de boilers Solis com painel de automação.",
 "Plant room with pool filter and pumps, booster, water filters and a bank of Solis storage heaters with automation panel.",
 "Local technique avec filtre et pompes de piscine, surpresseur, filtres à eau et centrale de ballons Solis avec tableau d'automatisation.",
 "Locale tecnico con filtro e pompe della piscina, pressurizzatore, filtri dell'acqua e centrale di bollitori Solis con quadro di automazione.",
 "Sala de máquinas con filtro y bombas de la piscina, presurizador, filtros de agua y central de acumuladores Solis con panel de automatización."],
["Área técnica com dois boilers de 500 L, pressurização de água fria e de descarga, tanques hidropneumáticos e cisternas de água potável e de reúso.",
 "Plant area with two 500 L storage heaters, cold-water and flushing pressure boosting, pressure tanks, and cisterns for drinking and reused water.",
 "Local technique avec deux ballons de 500 L, surpression d'eau froide et de chasse, réservoirs hydropneumatiques et citernes d'eau potable et de réutilisation.",
 "Area tecnica con due bollitori da 500 L, pressurizzazione dell'acqua fredda e degli scarichi, autoclavi e cisterne di acqua potabile e di recupero.",
 "Área técnica con dos acumuladores de 500 L, presurización de agua fría y de descarga, tanques hidroneumáticos y cisternas de agua potable y de reúso."],
["Piscina de grande porte e casa de máquinas com filtração, bombas e aquecimento.", "Large pool and plant room with filtration, pumps and heating.", "Grande piscine et local technique avec filtration, pompes et chauffage.", "Piscina di grandi dimensioni e locale tecnico con filtrazione, pompe e riscaldamento.", "Piscina de gran tamaño y sala de máquinas con filtración, bombas y calentamiento."],
["Projeto de aquecimento com três áreas técnicas: boilers, reservatórios e tubulações modelados em BIM.", "Heating design with three plant areas: storage heaters, tanks and piping modeled in BIM.", "Projet de chauffage avec trois locaux techniques : ballons, réservoirs et tuyauteries modélisés en BIM.", "Progetto di riscaldamento con tre aree tecniche: bollitori, serbatoi e tubazioni modellati in BIM.", "Proyecto de calentamiento con tres áreas técnicas: acumuladores, depósitos y tuberías modelados en BIM."],
["Casa de máquinas da piscina com filtro, aquecedor, bombas e automação.", "Pool plant room with filter, heater, pumps and automation.", "Local technique de la piscine avec filtre, chauffage, pompes et automatisation.", "Locale tecnico della piscina con filtro, riscaldatore, pompe e automazione.", "Sala de máquinas de la piscina con filtro, calentador, bombas y automatización."],
["Central de aquecimento na cobertura com boiler, coletores solares e reservatórios.", "Rooftop heating plant with storage heater, solar collectors and tanks.", "Centrale de chauffage en toiture avec ballon, capteurs solaires et réservoirs.", "Centrale termica in copertura con bollitore, collettori solari e serbatoi.", "Central de calentamiento en la azotea con acumulador, colectores solares y depósitos."],
["Piscina, central de boilers Solis com casa de máquinas e projeto 3D da área técnica com reservatórios.", "Pool, a bank of Solis storage heaters with plant room, and 3D design of the plant area with tanks.", "Piscine, centrale de ballons Solis avec local technique et projet 3D du local avec réservoirs.", "Piscina, centrale di bollitori Solis con locale tecnico e progetto 3D dell'area tecnica con serbatoi.", "Piscina, central de acumuladores Solis con sala de máquinas y proyecto 3D del área técnica con depósitos."],
["Dois boilers Solis com bombas de recirculação, vasos de expansão e painel de controle.", "Two Solis storage heaters with recirculation pumps, expansion vessels and control panel.", "Deux ballons Solis avec pompes de recirculation, vases d'expansion et tableau de commande.", "Due bollitori Solis con pompe di ricircolo, vasi di espansione e quadro di controllo.", "Dos acumuladores Solis con bombas de recirculación, vasos de expansión y panel de control."],
["Piscina de borda contínua e casa de máquinas com filtros, bombas e registros identificados.", "Infinity-edge pool and plant room with labeled filters, pumps and valves.", "Piscine à débordement et local technique avec filtres, pompes et vannes identifiés.", "Piscina a sfioro e locale tecnico con filtri, pompe e valvole identificati.", "Piscina de borde infinito y sala de máquinas con filtros, bombas y válvulas identificados."],
["Pressurizadores, bombas e quadros de comando com barrilete identificado.", "Boosters, pumps and control panels with a labeled distribution manifold.", "Surpresseurs, pompes et armoires de commande avec collecteur identifié.", "Pressurizzatori, pompe e quadri di comando con collettore identificato.", "Presurizadores, bombas y tableros de control con colector identificado."],
["Quadros para controle de aquecimento solar, a gás e de conforto, com termostatos digitais e seleção automático/manual.", "Panels for controlling solar, gas and comfort heating, with digital thermostats and auto/manual selection.", "Armoires pour la commande du chauffage solaire, gaz et de confort, avec thermostats numériques et sélection auto/manuel.", "Quadri per il controllo del riscaldamento solare, a gas e di comfort, con termostati digitali e selezione automatico/manuale.", "Tableros para el control de calentamiento solar, a gas y de confort, con termostatos digitales y selección automático/manual."],
["Redes de instalações e piscina compatibilizadas com a arquitetura.", "Building services and pool coordinated with the architecture.", "Réseaux d'installations et piscine coordonnés avec l'architecture.", "Reti impiantistiche e piscina coordinate con l'architettura.", "Redes de instalaciones y piscina compatibilizadas con la arquitectura."],
["Modelagem da piscina, das calhas e da casa de máquinas com toda a tubulação.", "Model of the pool, gutters and plant room with all the piping.", "Modélisation de la piscine, des goulottes et du local technique avec toute la tuyauterie.", "Modellazione della piscina, delle canalette e del locale tecnico con tutte le tubazioni.", "Modelado de la piscina, las canaletas y la sala de máquinas con toda la tubería."],
["Filtro, conjunto de bombas, quadro de comando e válvula motorizada de aquecimento.", "Filter, pump set, control panel and motorized heating valve.", "Filtre, groupe de pompes, armoire de commande et vanne motorisée de chauffage.", "Filtro, gruppo pompe, quadro di comando e valvola motorizzata per il riscaldamento.", "Filtro, conjunto de bombas, tablero de control y válvula motorizada de calentamiento."],
["Equipamentos de filtração e recirculação para área de lazer.", "Filtration and recirculation equipment for a leisure area.", "Équipements de filtration et de recirculation pour espace de loisirs.", "Apparecchiature di filtrazione e ricircolo per area relax.", "Equipos de filtración y recirculación para área de ocio."],
// público
["Quem atendemos", "Who we serve", "Nos clients", "Chi serviamo", "A quién atendemos"],
["Soluções para cada tipo de edificação", "Solutions for every type of building", "Des solutions pour chaque type de bâtiment", "Soluzioni per ogni tipo di edificio", "Soluciones para cada tipo de edificación"],
["TIPO A", "TYPE A", "TYPE A", "TIPO A", "TIPO A"],
["TIPO B", "TYPE B", "TYPE B", "TIPO B", "TIPO B"],
["TIPO C", "TYPE C", "TYPE C", "TIPO C", "TIPO C"],
["Residências", "Homes", "Résidences", "Residenze", "Residencias"],
["Piscina, sauna, aquecimento e pressurização projetados e instalados sob medida.", "Pools, saunas, heating and pressure boosting designed and installed to measure.", "Piscine, sauna, chauffage et surpression conçus et installés sur mesure.", "Piscina, sauna, riscaldamento e pressurizzazione progettati e installati su misura.", "Piscina, sauna, calentamiento y presurización proyectados e instalados a medida."],
["Condomínios", "Residential buildings", "Copropriétés", "Condomini", "Condominios"],
["Projetos completos, pressurização, bombeamento e manutenção das áreas comuns.", "Complete designs, pressure boosting, pumping and maintenance of common areas.", "Projets complets, surpression, pompage et entretien des parties communes.", "Progetti completi, pressurizzazione, pompaggio e manutenzione delle aree comuni.", "Proyectos completos, presurización, bombeo y mantenimiento de las áreas comunes."],
["Empreendimentos comerciais", "Commercial developments", "Projets commerciaux", "Edifici commerciali", "Emprendimientos comerciales"],
["Instalações compatibilizadas em BIM e equipamentos com assistência técnica.", "BIM-coordinated building services and equipment with technical service.", "Installations coordonnées en BIM et équipements avec service technique.", "Impianti coordinati in BIM e apparecchiature con assistenza tecnica.", "Instalaciones compatibilizadas en BIM y equipos con asistencia técnica."],
// atuação
["Área de atuação", "Where we work", "Zone d'intervention", "Area di attività", "Área de actuación"],
["Nossa base fica em Corrêas, Petrópolis. Daqui atendemos a região serrana, a capital, Niterói, a Região dos Lagos e a Costa Verde. Nossos projetos já chegaram a 16 estados brasileiros, e desenvolvemos projetos em BIM para qualquer lugar do mundo.",
 "Our base is in Corrêas, Petrópolis. From here we serve the mountain region, the city of Rio de Janeiro, Niterói, the Lakes Region and the Costa Verde. Our designs have reached 16 Brazilian states, and we develop BIM projects for anywhere in the world.",
 "Notre base se trouve à Corrêas, Petrópolis. De là, nous intervenons dans la région montagneuse, à Rio de Janeiro, Niterói, dans la Région des Lacs et sur la Costa Verde. Nos projets ont déjà atteint 16 États brésiliens, et nous réalisons des projets BIM pour le monde entier.",
 "La nostra sede è a Corrêas, Petrópolis. Da qui serviamo la regione montana, la città di Rio de Janeiro, Niterói, la Regione dei Laghi e la Costa Verde. I nostri progetti hanno già raggiunto 16 stati brasiliani e sviluppiamo progetti BIM per qualsiasi parte del mondo.",
 "Nuestra base está en Corrêas, Petrópolis. Desde aquí atendemos la región serrana, la ciudad de Río de Janeiro, Niterói, la Región de los Lagos y la Costa Verde. Nuestros proyectos ya llegaron a 16 estados brasileños, y desarrollamos proyectos BIM para cualquier lugar del mundo."],
["BASE · SEDE", "BASE · HEADQUARTERS", "BASE · SIÈGE", "BASE · SEDE", "BASE · SEDE"],
["Regiões atendidas", "Regions served", "Régions desservies", "Regioni servite", "Regiones atendidas"],
["Petrópolis e região serrana", "Petrópolis and mountain region", "Petrópolis et région montagneuse", "Petrópolis e regione montana", "Petrópolis y región serrana"],
["Base de operação", "Operations base", "Base opérationnelle", "Base operativa", "Base de operaciones"],
["Toda a cidade", "The whole city", "Toute la ville", "Tutta la città", "Toda la ciudad"],
["Atendimento completo", "Full service", "Service complet", "Servizio completo", "Atención completa"],
["Região dos Lagos", "Lakes Region", "Région des Lacs", "Regione dei Laghi", "Región de los Lagos"],
["Litoral leste fluminense", "Eastern coast of Rio state", "Côte est de l'État de Rio", "Costa orientale dello stato di Rio", "Litoral este del estado de Río"],
["Angra dos Reis e Mangaratiba", "Angra dos Reis and Mangaratiba", "Angra dos Reis et Mangaratiba", "Angra dos Reis e Mangaratiba", "Angra dos Reis y Mangaratiba"],
["Brasil e exterior", "Brazil and abroad", "Brésil et étranger", "Brasile ed estero", "Brasil y el exterior"],
["Projetos em BIM para qualquer lugar do mundo", "BIM designs for anywhere in the world", "Projets BIM pour le monde entier", "Progetti BIM per qualsiasi parte del mondo", "Proyectos BIM para cualquier lugar del mundo"],
// sobre
["Nossa história", "Our story", "Notre histoire", "La nostra storia", "Nuestra historia"],
["Sobre a Equiper", "About Equiper", "À propos d'Equiper", "Chi è Equiper", "Sobre Equiper"],
["fundada em", "founded on", "fondée le", "fondata il", "fundada el"],
["17 de novembro", "November 17", "17 novembre", "17 novembre", "17 de noviembre"],
["Somos uma empresa de engenharia especializada em projetos de instalações prediais e no fornecimento e instalação de equipamentos.",
 "We are an engineering firm specializing in building services design and in the supply and installation of equipment.",
 "Nous sommes un bureau d'ingénierie spécialisé dans la conception des installations du bâtiment et dans la fourniture et l'installation d'équipements.",
 "Siamo una società di ingegneria specializzata nella progettazione di impianti per edifici e nella fornitura e installazione di apparecchiature.",
 "Somos una empresa de ingeniería especializada en proyectos de instalaciones prediales y en el suministro e instalación de equipos."],
["A Equiper nasceu em Petrópolis, pelas mãos do engenheiro Marcelo Ratto. Vindo da automação industrial, ele passou a atuar com projetos de instalações residenciais e comerciais a convite de amigos de uma empresa de engenharia, que enfrentavam uma série de problemas nos projetos. Levou para esse novo mercado conceitos e ferramentas do dia a dia da indústria e, com eles, melhorou a forma de projetar. O resultado deu certo, e o escritório próprio veio em seguida.",
 "Equiper was born in Petrópolis, founded by engineer Marcelo Ratto. Coming from industrial automation, he began designing residential and commercial building services at the invitation of friends at an engineering firm who were facing a series of problems with their designs. He brought concepts and tools from everyday industrial practice to this new market and used them to improve the way designs were done. It worked, and his own office soon followed.",
 "Equiper est née à Petrópolis, fondée par l'ingénieur Marcelo Ratto. Venu de l'automatisation industrielle, il a commencé à concevoir des installations résidentielles et commerciales à l'invitation d'amis d'un bureau d'ingénierie, confrontés à une série de problèmes dans leurs projets. Il a apporté à ce nouveau marché des concepts et des outils du quotidien de l'industrie et, grâce à eux, a amélioré la façon de concevoir. Le résultat a été concluant, et son propre bureau a suivi.",
 "Equiper è nata a Petrópolis per mano dell'ingegnere Marcelo Ratto. Proveniente dall'automazione industriale, iniziò a occuparsi di progettazione impiantistica residenziale e commerciale su invito di amici di una società di ingegneria che affrontavano una serie di problemi nei loro progetti. Portò in questo nuovo mercato concetti e strumenti della quotidianità industriale e, con essi, migliorò il modo di progettare. Il risultato funzionò, e subito dopo arrivò lo studio proprio.",
 "Equiper nació en Petrópolis de la mano del ingeniero Marcelo Ratto. Procedente de la automatización industrial, comenzó a trabajar en proyectos de instalaciones residenciales y comerciales por invitación de amigos de una empresa de ingeniería que enfrentaban una serie de problemas en sus proyectos. Llevó a este nuevo mercado conceptos y herramientas del día a día de la industria y, con ellos, mejoró la forma de proyectar. El resultado funcionó, y la oficina propia llegó poco después."],
["Com o tempo, o trabalho nos levou às casas de alto padrão, e nelas víamos sempre os mesmos problemas: falhas de conceito na forma de projetar, que se repetiam de maneira crônica. Trazendo critério técnico e muita engenharia, passamos a entregar projetos melhores, e o mercado reconheceu isso.",
 "Over time, our work took us to high-end homes, where we kept seeing the same problems: conceptual flaws in the way they were designed, repeated over and over. By bringing technical rigor and solid engineering, we began delivering better designs, and the market recognized it.",
 "Avec le temps, notre travail nous a menés vers les résidences haut de gamme, où nous retrouvions toujours les mêmes problèmes : des erreurs de conception qui se répétaient de manière chronique. En apportant rigueur technique et beaucoup d'ingénierie, nous avons commencé à livrer de meilleurs projets, et le marché l'a reconnu.",
 "Con il tempo, il lavoro ci ha portato nelle case di alto livello, dove vedevamo sempre gli stessi problemi: errori concettuali nel modo di progettare, che si ripetevano in modo cronico. Con rigore tecnico e tanta ingegneria abbiamo iniziato a consegnare progetti migliori, e il mercato lo ha riconosciuto.",
 "Con el tiempo, el trabajo nos llevó a las casas de alto nivel, y en ellas veíamos siempre los mismos problemas: fallas de concepto en la forma de proyectar, que se repetían de manera crónica. Aportando criterio técnico y mucha ingeniería, empezamos a entregar mejores proyectos, y el mercado lo reconoció."],
["Mas projeto bom só funciona se for executado como foi pensado. Muitas vezes, por motivos comerciais, o que era instalado não era exatamente o que tinha sido especificado, e os problemas apareciam. Foi assim que decidimos fornecer e instalar nós mesmos os equipamentos, para que o projeto e a instalação fossem uma coisa só. Sabemos que não existe equipamento perfeito, por isso escolhemos sempre a melhor opção e o melhor custo-benefício para cada situação, cada momento e cada cliente.",
 "But a good design only works if it is built the way it was conceived. Often, for commercial reasons, what was installed was not exactly what had been specified, and problems followed. That is why we decided to supply and install the equipment ourselves, so that design and installation would be one and the same. We know there is no perfect equipment, so we always choose the best option and the best value for each situation, each moment and each client.",
 "Mais un bon projet ne fonctionne que s'il est exécuté tel qu'il a été pensé. Souvent, pour des raisons commerciales, ce qui était installé n'était pas exactement ce qui avait été spécifié, et les problèmes apparaissaient. C'est ainsi que nous avons décidé de fournir et d'installer nous-mêmes les équipements, pour que projet et installation ne fassent qu'un. Nous savons qu'il n'existe pas d'équipement parfait : nous choisissons donc toujours la meilleure option et le meilleur rapport qualité-prix pour chaque situation, chaque moment et chaque client.",
 "Ma un buon progetto funziona solo se viene eseguito come è stato pensato. Spesso, per motivi commerciali, ciò che veniva installato non era esattamente ciò che era stato specificato, e i problemi comparivano. Così abbiamo deciso di fornire e installare noi stessi le apparecchiature, perché progetto e installazione fossero una cosa sola. Sappiamo che non esiste l'apparecchiatura perfetta, per questo scegliamo sempre l'opzione migliore e il miglior rapporto qualità-prezzo per ogni situazione, ogni momento e ogni cliente.",
 "Pero un buen proyecto solo funciona si se ejecuta tal como fue pensado. Muchas veces, por motivos comerciales, lo que se instalaba no era exactamente lo especificado, y los problemas aparecían. Así decidimos suministrar e instalar nosotros mismos los equipos, para que el proyecto y la instalación fueran una sola cosa. Sabemos que no existe el equipo perfecto; por eso elegimos siempre la mejor opción y la mejor relación calidad-precio para cada situación, cada momento y cada cliente."],
["Há cerca de cinco anos, a sociedade foi ampliada, e hoje a Equiper é conduzida por uma equipe de engenheiros e arquitetos. Atendemos principalmente o estado do Rio de Janeiro, mas temos clientes em todo o Brasil. Seguimos com o mesmo propósito do começo: resolver na origem os problemas que a engenharia mal resolvida cria.",
 "About five years ago the partnership grew, and today Equiper is led by a team of engineers and architects. We mainly serve the state of Rio de Janeiro, but we have clients all over Brazil. We keep the same purpose we started with: solving at the source the problems that poorly resolved engineering creates.",
 "Il y a environ cinq ans, l'association s'est élargie, et aujourd'hui Equiper est dirigée par une équipe d'ingénieurs et d'architectes. Nous intervenons principalement dans l'État de Rio de Janeiro, mais nous avons des clients dans tout le Brésil. Nous gardons la même mission qu'au début : résoudre à la source les problèmes créés par une ingénierie mal pensée.",
 "Circa cinque anni fa la società si è ampliata e oggi Equiper è guidata da un team di ingegneri e architetti. Operiamo principalmente nello stato di Rio de Janeiro, ma abbiamo clienti in tutto il Brasile. Manteniamo lo stesso obiettivo degli inizi: risolvere all'origine i problemi creati da un'ingegneria mal risolta.",
 "Hace unos cinco años la sociedad se amplió, y hoy Equiper está dirigida por un equipo de ingenieros y arquitectos. Atendemos principalmente el estado de Río de Janeiro, pero tenemos clientes en todo Brasil. Mantenemos el mismo propósito del comienzo: resolver en el origen los problemas que crea la ingeniería mal resuelta."],
["Fundação da Equiper", "Equiper is founded", "Fondation d'Equiper", "Fondazione di Equiper", "Fundación de Equiper"],
["Início das atividades em projetos de instalações prediais.", "Start of operations in building services design.", "Début des activités en conception d'installations du bâtiment.", "Inizio delle attività nella progettazione impiantistica.", "Inicio de actividades en proyectos de instalaciones prediales."],
["Início da frente de fornecimento e instalação de equipamentos.", "Launch of the equipment supply and installation division.", "Lancement de l'activité de fourniture et d'installation d'équipements.", "Avvio dell'attività di fornitura e installazione di apparecchiature.", "Inicio del área de suministro e instalación de equipos."],
["Assistência técnica Grundfos e Rinnai", "Grundfos and Rinnai service", "Service technique Grundfos et Rinnai", "Assistenza tecnica Grundfos e Rinnai", "Servicio técnico Grundfos y Rinnai"],
["Credenciamento como Ponto de Serviço Grundfos e assistência técnica Rinnai.", "Accredited as a Grundfos Service Point and Rinnai service center.", "Accréditation comme Point de Service Grundfos et service technique Rinnai.", "Accreditamento come Punto di Assistenza Grundfos e assistenza tecnica Rinnai.", "Acreditación como Punto de Servicio Grundfos y servicio técnico Rinnai."],
["Projetos em BIM", "BIM design", "Projets en BIM", "Progetti in BIM", "Proyectos en BIM"],
["Os projetos passam a ser desenvolvidos em Revit, com modelagem 3D e compatibilização.", "Projects are now developed in Revit, with 3D modeling and coordination.", "Les projets sont désormais développés sur Revit, avec modélisation 3D et coordination.", "I progetti iniziano a essere sviluppati in Revit, con modellazione 3D e coordinamento.", "Los proyectos pasan a desarrollarse en Revit, con modelado 3D y compatibilización."],
["HOJE", "TODAY", "AUJOURD'HUI", "OGGI", "HOY"],
["10.000+ projetos e 2.000+ clientes", "10,000+ projects and 2,000+ clients", "10 000+ projets et 2 000+ clients", "10.000+ progetti e 2.000+ clienti", "10.000+ proyectos y 2.000+ clientes"],
["Projetos em 16 estados brasileiros e instalações em todo o estado do Rio.", "Designs in 16 Brazilian states and installations throughout Rio de Janeiro state.", "Projets dans 16 États brésiliens et installations dans tout l'État de Rio.", "Progetti in 16 stati brasiliani e installazioni in tutto lo stato di Rio.", "Proyectos en 16 estados brasileños e instalaciones en todo el estado de Río."],
["Marca Equiper", "Equiper logo", "Logo Equiper", "Logo Equiper", "Logo Equiper"],
["Responsabilidade técnica", "Technical responsibility", "Responsabilité technique", "Responsabilità tecnica", "Responsabilidad técnica"],
["Projetos assinados por responsável técnico habilitado.", "Designs signed by a licensed engineer.", "Projets signés par un ingénieur habilité.", "Progetti firmati da un tecnico abilitato.", "Proyectos firmados por un responsable técnico habilitado."],
["Precisão", "Precision", "Précision", "Precisione", "Precisión"],
["Modelagem 3D, memorial de cálculo e quantitativos confiáveis.", "3D modeling, design calculations and reliable quantities.", "Modélisation 3D, note de calcul et métrés fiables.", "Modellazione 3D, relazione di calcolo e computi affidabili.", "Modelado 3D, memoria de cálculo y mediciones confiables."],
["Transparência", "Transparency", "Transparence", "Trasparenza", "Transparencia"],
["Orçamentos claros e prazos definidos.", "Clear quotes and defined deadlines.", "Devis clairs et délais définis.", "Preventivi chiari e tempi definiti.", "Presupuestos claros y plazos definidos."],
["Acompanhamento", "Follow-through", "Accompagnement", "Affiancamento", "Acompañamiento"],
["Da reunião inicial ao comissionamento.", "From kick-off meeting to commissioning.", "De la réunion initiale à la mise en service.", "Dalla riunione iniziale al collaudo.", "De la reunión inicial a la puesta en marcha."],
// contato
["Vamos conversar sobre o seu projeto", "Let's talk about your project", "Parlons de votre projet", "Parliamo del vostro progetto", "Hablemos de su proyecto"],
["Conte o que você precisa e retornamos com uma proposta.", "Tell us what you need and we'll get back to you with a proposal.", "Dites-nous ce dont vous avez besoin et nous reviendrons vers vous avec une proposition.", "Diteci di cosa avete bisogno e vi risponderemo con una proposta.", "Cuéntenos qué necesita y le responderemos con una propuesta."],
["Telefone", "Phone", "Téléphone", "Telefono", "Teléfono"],
["(24) 2221-6789", "+55 24 2221-6789", "+55 24 2221-6789", "+55 24 2221-6789", "+55 24 2221-6789"],
["Também no WhatsApp →", "Also on WhatsApp →", "Aussi sur WhatsApp →", "Anche su WhatsApp →", "También por WhatsApp →"],
["Orçamentos de projetos de instalações", "Quotes for building services designs", "Devis pour projets d'installations", "Preventivi per progetti impiantistici", "Presupuestos de proyectos de instalaciones"],
["Equipamentos, manutenção e assuntos gerais", "Equipment, maintenance and general inquiries", "Équipements, entretien et questions générales", "Apparecchiature, manutenzione e richieste generali", "Equipos, mantenimiento y consultas generales"],
["Endereço", "Address", "Adresse", "Indirizzo", "Dirección"],
["Mapa – Equiper Engenharia", "Map – Equiper Engenharia", "Carte – Equiper Engenharia", "Mappa – Equiper Engenharia", "Mapa – Equiper Engenharia"],
["Nome", "Name", "Nom", "Nome", "Nombre"],
["Seu nome", "Your name", "Votre nom", "Il vostro nome", "Su nombre"],
["E-mail", "Email", "E-mail", "E-mail", "Correo electrónico"],
["voce@email.com", "you@email.com", "vous@email.com", "voi@email.com", "usted@email.com"],
["Serviço", "Service", "Service", "Servizio", "Servicio"],
["Projeto de instalações", "Building services design", "Projet d'installations", "Progetto impiantistico", "Proyecto de instalaciones"],
["Sauna", "Sauna", "Sauna", "Sauna", "Sauna"],
["Manutenção de bombas (Grundfos)", "Pump maintenance (Grundfos)", "Entretien de pompes (Grundfos)", "Manutenzione pompe (Grundfos)", "Mantenimiento de bombas (Grundfos)"],
["Assistência de aquecedores (Rinnai)", "Water heater service (Rinnai)", "Service chauffe-eau (Rinnai)", "Assistenza scaldabagni (Rinnai)", "Servicio de calentadores (Rinnai)"],
["Outro assunto", "Other", "Autre sujet", "Altro", "Otro asunto"],
["Imóvel", "Property", "Bien", "Immobile", "Inmueble"],
["Condomínio", "Residential building", "Copropriété", "Condominio", "Condominio"],
["Comercial", "Commercial", "Commercial", "Commerciale", "Comercial"],
["Mensagem", "Message", "Message", "Messaggio", "Mensaje"],
["Descreva rapidamente o que você precisa", "Briefly describe what you need", "Décrivez brièvement votre besoin", "Descrivete brevemente di cosa avete bisogno", "Describa brevemente lo que necesita"],
["Será enviado para:", "Will be sent to:", "Sera envoyé à :", "Sarà inviato a:", "Se enviará a:"],
["Enviar solicitação →", "Send request →", "Envoyer la demande →", "Invia richiesta →", "Enviar solicitud →"],
// rodapé e galeria
["Empresa", "Company", "Entreprise", "Azienda", "Empresa"],
["Projetos e Instalações", "Design and Installation", "Projets et Installations", "Progettazione e Impianti", "Proyectos e Instalaciones"],
["E-mails", "Emails", "E-mails", "E-mail", "Correos"],
["Desde", "Since", "Depuis", "Dal", "Desde"],
["FOLHA 01/01 · REV. 00", "SHEET 01/01 · REV. 00", "FEUILLE 01/01 · RÉV. 00", "FOGLIO 01/01 · REV. 00", "HOJA 01/01 · REV. 00"],
["Falar com a Equiper no WhatsApp", "Chat with Equiper on WhatsApp", "Écrire à Equiper sur WhatsApp", "Scrivi a Equiper su WhatsApp", "Hablar con Equiper por WhatsApp"],
["Galeria do trabalho", "Project gallery", "Galerie de la réalisation", "Galleria del lavoro", "Galería del trabajo"],
["Fechar", "Close", "Fermer", "Chiudi", "Cerrar"],
["Anterior", "Previous", "Précédent", "Precedente", "Anterior"],
["Próxima", "Next", "Suivant", "Successiva", "Siguiente"],
];

const norm = s => s.replace(/\s+/g, ' ').trim();
const MAP = {};
LANGS.forEach((l, i) => { if (i) { MAP[l] = {}; D.forEach(r => { MAP[l][norm(r[0])] = r[i]; }); } });

let lang = 'pt';
window.T = function (s, vars) {
  let r = lang === 'pt' ? s : (MAP[lang][norm(s)] ?? s);
  if (vars) for (const k in vars) r = r.split('{' + k + '}').join(vars[k]);
  return r;
};

// guarda os textos originais (em português) da página
const fora = n => n.parentElement && n.parentElement.closest('script,style,[data-noi18n],[data-i18n-html]');
const textos = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
for (let n; (n = walker.nextNode());) if (n.nodeValue.trim() && !fora(n)) textos.push({ n, o: n.nodeValue });
const ATR = ['placeholder', 'alt', 'aria-label', 'title'];
const atributos = [];
document.querySelectorAll(ATR.map(a => '[' + a + ']').join(',')).forEach(el => {
  if (el.closest('#langs button')) return;
  ATR.forEach(a => { if (el.hasAttribute(a)) atributos.push({ el, a, o: el.getAttribute(a) }); });
});
const htmls = [...document.querySelectorAll('[data-i18n-html]')].map(el => ({ el, o: el.innerHTML }));
const titulo = document.title;

function aplicar(l) {
  lang = LANGS.includes(l) ? l : 'pt';
  document.documentElement.lang = HTML_LANG[lang];
  textos.forEach(({ n, o }) => {
    const ini = o.match(/^\s*/)[0], fim = o.match(/\s*$/)[0];
    n.nodeValue = lang === 'pt' ? o : ini + T(o) + fim;
  });
  atributos.forEach(({ el, a, o }) => el.setAttribute(a, T(o)));
  htmls.forEach(({ el, o }) => { el.innerHTML = T(o); });
  document.title = T(titulo);
  document.querySelectorAll('#langs button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === lang));
  try { localStorage.setItem('eq-lang', lang); } catch (e) {}
  document.dispatchEvent(new Event('langchange'));
}

document.querySelectorAll('#langs button').forEach(b => b.addEventListener('click', () => aplicar(b.dataset.lang)));

// idioma inicial: ?lang=xx na URL, depois a última escolha, depois o idioma do navegador
let ini = new URLSearchParams(location.search).get('lang');
if (!LANGS.includes(ini)) { try { ini = localStorage.getItem('eq-lang'); } catch (e) { ini = null; } }
if (!LANGS.includes(ini)) {
  ini = 'pt';
  for (const nl of (navigator.languages || [navigator.language || ''])) {
    const c = String(nl).slice(0, 2).toLowerCase();
    if (LANGS.includes(c)) { ini = c; break; }
  }
}
lang = ini;
if (ini === 'pt') document.querySelectorAll('#langs button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === 'pt'));
else {
  // o restante da página ainda não montou o portfólio; aplica agora e o portfólio usa T() ao montar
  document.documentElement.lang = HTML_LANG[ini];
  textos.forEach(({ n, o }) => { const a = o.match(/^\s*/)[0], z = o.match(/\s*$/)[0]; n.nodeValue = a + T(o) + z; });
  atributos.forEach(({ el, a, o }) => el.setAttribute(a, T(o)));
  htmls.forEach(({ el, o }) => { el.innerHTML = T(o); });
  document.title = T(titulo);
  document.querySelectorAll('#langs button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === ini));
}
})();
