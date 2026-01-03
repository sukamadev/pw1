document.getElementById('ano').textContent = new Date().getFullYear();

const contentArea = document.getElementById('contentArea');

const btnAngola = document.getElementById('btnAngola');
const btnPortugal = document.getElementById('btnPortugal');
const btnFormacao = document.getElementById('btnFormacao');
const btnTrabalhando = document.getElementById('btnTrabalhando');
const btnNaopronto = document.getElementById('btnNaopronto');
const btnEmBreve = document.getElementById('btnEmBreve');


const formacaoHTML = `
  <div class="col-12 col-lg-10">
    <div class="service-card">
    <h3>Inscrição no Centro de Formação Profissional Twofold</h3>
    <p>Twofold é centro de formação que oferece cursos de longa duração que te permitirá solicitar visto de formação proficional e, posteriormente solicitar autorização de residência em Portugal.</p>
    <hr>
    <div class="row g-3">
        <div class="col-md-12">
        <div class="p-3 h-100 d-flex flex-column justify-content-between">
            <div>
              <h5 style="text-align:center"><strong>Fazer Inscrição com Desconto</strong></h5>
              <p style="text-align: justify";>Clica em fazer inscrição para ser redirecionado ao site do centro para escolher o seu curso e fazer inscrição. Os pagamentos podem ser feitos por cartão ou transferência (IBAN).</p> 
              <p style="text-align: justify">Use o cupom <strong>TWF-SUKAMASARMENTO15</strong> para ter desconto de 15,00 Euros.</p> 
              <hr>
            </div>
        <div class="mt-3">
          <a href="https://twofold.pt/cursos-profissionalizantes/?coupon=TWF-SUKAMASARMENTO15" target="_blank" class="btn btn-primary w-100">Fazer Inscrição</a>
        </div>
    </div>
  </div>`;

const angolaHTML = `
  <div class="col-12 col-lg-10">
    <div class="service-card">
      <h3>Serviços de Apoio a Solicitantes de Visto</h3>
      <p>Estes serviços são destinados a solicitantes de vistos que não possuem condições de contratar uma agência de viagem e que precisam de orientação para dar sequência à preparação de processo de pedido de visto para Portugal ou Brasil.</p>
      <hr>
      <div class="row g-3">
        <div class="col-md-6">
          <div class="p-3 h-100 d-flex flex-column justify-content-between">
            <div>
              <h5 style="text-align:center"><strong>Mentoria particular</strong></h5>
              <p style="text-align: justify";>Nessa mentoria, acompanhamos o seu processo, esclarecendo dúvidas e dando sugestões, com encontros online em datas e horários a combinar. <strong>Inclui reservas de voo e hotel e auxílio no preenchimento do formulário de visto</strong>.</p> <p style="text-align: justify"><strong>Quando começa</strong>: após a contratação. Entraremos em contato para agendar o primeiro encontro.</p> <p style="text-align: justify"><strong>Quando termina</strong>: depois que você dá entrada no pedido de visto.</p>
              <hr>
              <p class="mb-0"><span class="price">Custo:</span> 50.000 Kz | 50 € | 300 R$</p>
            </div>
            <div class="mt-3">
              <a href="https://tally.so/r/MeKJzE" target="_blank" class="btn btn-primary w-100">Contratar Mentoria</a>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="p-3 h-100 d-flex flex-column justify-content-between">
            <div>
              <h5 style="text-align:center"><strong>Reservas e Formulário</strong></h5>
              <p style="text-align: justify">Com base nas informações da sua viagem, faremos as suas reservas e preencheremos o formulário corretamente.</p> <p style="text-align: justify"><strong>Quando começa</strong>: após a contratação. Entraremos em contato para solicitar os teus dados.</p> <p style="text-align: justify"><strong>Quando termina</strong>: depois que você conferir que está tudo certo conforme solicitado.</p>
              <hr>
              <p class="mb-0"><span class="price">Custo:</span> 10.000 Kz | 10 € | 50 R$</p>
            </div>
            <div class="mt-3">
              <a href="https://tally.so/r/PdjX6x" target="_blank" class="btn btn-primary w-100">Contratar Serviço</a>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="p-3 h-100 d-flex flex-column justify-content-between">
            <div>
              <h5 style="text-align:center"><strong>Consultoria Particular</strong></h5>
              <p style="text-align: justify">Um único encontro online onde você poderá aprender tudo que precisa para montar o seu processo de pedido de visto sozinho, sem precisar contratar uma agência de viagem. Vai poder tirar todas as suas dúvidas sobre processos de visto de Portugal e Brasil.</p> 
              <p style="text-align: justify"><strong>Quando começa</strong>: após a contratação, entraremos em contato para agendar a reunião, dependendo da sua agenda e da minha.</p> 
              <p style="text-align: justify"><strong>Quando termina</strong>: depois da reunião. O encontro online acontece uma única vez (1h - 2h).</p>
              <hr>
              <p class="mb-0"><span class="price">Custo:</span> 10.000 Kz | 10 € | 50 R$</p>
            </div>
            <div class="mt-3">
              <a href="https://tally.so/r/QKKNrX" target="_blank" class="btn btn-primary w-100">Contratar Serviço</a>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="p-3 h-100 d-flex flex-column justify-content-between">
            <div>
              <h5 style="text-align:center"><strong>Agendamento do Passaporte Angolano</strong></h5>
              <p style="text-align: justify">Neste serviço, você vai receber um acompanhamento para criar a sua conta no site da SME, preencher o formulário do passaporte, submeter os documentos solicitados e fazer o agendamento para solicitar o seu passaporte.</p> 
              <p style="text-align: justify"><strong>Obs:</strong> não inclui o custo do passaporte.</p> 
              <p style="text-align: justify"><strong>Quando começa</strong>: depois da confirmação contratação.</p>
              <p style="text-align: justify"><strong>Quando termina</strong>: depois que o agendamento estiver feito.</p>
              <hr>
              <p class="mb-0"><span class="price">Custo:</span> 10.000 Kz | 10 € | 50 R$</p>
            </div>
            <div class="mt-3">
              <a href="https://tally.so/r/5BBllE" target="_blank" class="btn btn-primary w-100">Contratar Serviço</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>`;

const portugalHTML = `
  <div class="col-12 col-lg-10">
    <div class="service-card">
      <h3>Serviços para quem está em Portugal</h3>
      <p>Ajudamos estrangeiros e residentes em Portugal a tratar documentos, residência, negócios e muito mais.</p>
      <hr>
      <ul class="list-unstyled mb-3">
        <li><strong>NIF</strong> — 80€ a 200€</li>
        <li><strong>NISS</strong> — 200€ a 250€</li>
        <li><strong>Número de Utente (SNS)</strong> — 50€</li>
        <li><strong>Residência em Portugal</strong></li>
        <li><strong>Reconhecimento de Escolaridade</strong></li>
        <li><strong>Abertura de Empresa</strong></li>
        <li><strong>Apoio a Microfinanciamento</strong></li>
        <li><strong>Fiscalidade e Contabilidade</strong></li>
        <li><strong>Reconhecimento de Qualificações Estrangeiras
        </strong></li>
        <li><strong>Assessoria de Carreira e Inserção Profissional
        </strong></li>
        <li><strong>Abertura de Conta Bancária e Serviços Financeiros</strong></li>
      </ul>
      <p class="small text-muted">Pagamento inicial de <strong>10€</strong>, que será incluso no orçamento final do serviço.</p>
      <a href="https://tally.so/r/Bz4QG1" target="_blank" class="btn btn-primary w-100">Contratar (depósito inicial 10€)</a>
    </div>
  </div>`;

  const trabalhandoHTML = `
  <div class="col-12 col-lg-10">
    <div class="service-card">
      <h3>Ainda estamos trabalhando nisso.</h3>
    </div>
  </div>`;

  const naoprontoHTML = `
  <div class="col-12 col-lg-10">
    <div class="service-card">
      <h3>Disponível em breve.</h3>
    </div>
  </div>`;

  const embreveHTML = `
  <div class="col-12 col-lg-10">
    <div class="service-card">
      <h3>Estamos dando o nosso melhor para trazer a melhor informação para você brevemente.</h3>
    </div>
  </div>`;

  function smoothScrollTo(targetY, duration = 800) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function animateScroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(0, startY + distance * progress);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}


function showContent(html) {
  if (contentArea) {
    contentArea.innerHTML = html;

    const target =
      document.querySelector('main').offsetTop + 130;

    smoothScrollTo(target, 3000); // duração da transição (ms)
  }
}




// === BOTÕES (somente ativar se existirem na página) ===
if (btnAngola) {
  btnAngola.addEventListener('click', () => {
  showContent(angolaHTML);
  setActiveButton(btnAngola);
});
}

if (btnPortugal) {
  btnPortugal.addEventListener('click', () => {
  showContent(portugalHTML);
  setActiveButton(btnPortugal);
});
}

if (btnFormacao) {
  btnFormacao.addEventListener('click', () => {
  showContent(formacaoHTML);
  setActiveButton(btnFormacao);
});
}

if (btnTrabalhando) {
  btnTrabalhando.addEventListener('click', () => showContent(trabalhandoHTML));
}

if (btnNaopronto) {
  btnNaopronto.addEventListener('click', () => showContent(naoprontoHTML));
}

if (btnEmBreve) {
  btnEmBreve.addEventListener('click', () => showContent(embreveHTML));
}

// Conteúdo padrão ao carregar a página

const serviceButtons = [btnFormacao, btnAngola, btnPortugal];

function setActiveButton(activeBtn) {
  serviceButtons.forEach(btn => {
    if (!btn) return;
    btn.classList.remove('service-active');
    btn.classList.add('service-inactive');
  });

  if (activeBtn) {
    activeBtn.classList.remove('service-inactive');
    activeBtn.classList.add('service-active');
  }
}

// Conteúdo padrão APENAS na página index.html
if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
  showContent(angolaHTML);
  setActiveButton(btnAngola);
}


// Javascript do Curso

document.getElementById('ano').textContent = new Date().getFullYear();

const lessons = [
  { 
    title:" - Introdução", 
    video:"https://www.youtube.com/embed/DPSHto_0hyg", 
    description:`
      <p>Visão geral do que você vai aprender.</p>
      <p>Não se esqueça que você pode contar com a nossa assessoria, caso precise.</p>
      <p>Para contratar, clique em Serviços no canto superior direito desta página.</p>
    `
  },
  { 
    title:"1. Passaporte", 
    video:"https://www.youtube.com/embed/le47FZ3iyvM", 
    description:`
      <p>Nesta aula, você vai aprender como fazer um agendamento para solicitar passaporte.</p>

      <p>Para acessar o site da SME,
      <a href="https://sme.ao/ao/" target="_blank" >clique aqui</a>.</p>
      
      <p>
        Se sentir que ainda precisa de ajuda para fazer agendamento do passaporte depois de assistir esta aula, 
        você pode contratar a Comunidade Migratória para te auxiliar a fazê-lo.
      </p>

      <p>Contrate na página inicial, na área de Assessoria e Mentoria, ou <a href="index.html">clique aqui</a>.</p>

      
    ` 
  },
  { 
    title:"2. País de destino", 
    video:"https://www.youtube.com/embed/NOZ5mokrnmM", 
    description:`
      <p>O intuito desta aula é ajudar você a decidir se vale a pena imigrar para Portugal. 
      Vamos falar de algumas vantagens e desvantagens do país de destino.</p>
    
      <p>
        Lembre que se precisar de um acompanhamento particular no seu processo, 
        você pode contratar a Mentoria Particular da CM, onde um especialista te auxilia a proceder com o seu processo de pedido de visto, sem a necessidade de contratar uma agência de viagem.
      </p>

      <p>Contrate na página inicial, na área de Assessoria e Mentoria, ou <a href="index.html">clique aqui</a>.</p>

    `
  },
  { 
    title:"3. Tipos de visto", 
    video:"https://www.youtube.com/embed/IW-nV8z0Kpc", 
    description:`
      <p>Neste vídeo, você vai aprender o essencial sobre a maioria dos vistos que Portugal oferece para melhor poder decidir qual o visto que melhor se enquadra ao seu perfil e o objetivo da viagem.</p>

      <p>Quer que eu acompanhe o seu processo de forma particular? Ainda precisa de ajuda para decidir qual é o melhor visto para si?</p>

      <p>Contrate a minha mentoria na página inicial, na área de Assessoria e Mentoria, ou <a href="index.html">clique aqui</a>.</p>
    `
  },
  { 
    title:"3.1. Visto de turismo (Schengen)", 
    video:"https://www.youtube.com/embed/syyJl2aNBOw", 
    description:`
      <p style="text-align: justify">
        Neste vídeo você vai aprender tudo o que precisa saber sobre a preparação de um processo de pedido de visto Schengen para que você possa fazer tudo sozinho, sem a necessidade de contratar uma agência de viagem. Se ainda assim você sentir que precisa de ajuda, não hesite em contratar a minha mentoria particular, onde eu te acompanho no seu processo de pedido de visto, esclarecendo dúvidas e dando sugestões.
      </p>

      <p>Contrate na página inicial, na área de Assessoria e Mentoria, ou <a href="index.html">clique aqui</a>.</p>
      
      <h5>Documentos do solicitante:<h5>
      <ul>
        <li>Passaporte;</li>
        <li>Fotografia tipo passe;</li>        
        <li><a href="https://www.vfsglobal.com/one-pager/portugal/angola/portuguese/pdf/schengen-visa-form.pdf" target="blank">Formulário;<a></li>      
        <li>Reserva de voo (ida e volta);</li>      
        <li>Comprovante de alojamento;</li>     
        <li>Seguro de viagem;</li>        
        <li>Comprovação de meios de subsistência:</li>              
        <li>Declaração de serviço;</li>       
        <li>Extrato bancário dos 3 últimos meses.</li>             
      </ul>

      <h5>Documentos do financiador - Angola:</h5>
      <ul>
        <li>Cópia do BI;</li>
        <li><a href="https://www.vfsglobal.com/one-pager/portugal/angola/portuguese/pdf/term-of-responsibility-romanian.pdf" target="blank">Termo de responsabilidade Schengen</a>;</li>
        <li>Extrato dos 3 últimos meses;</li>
        <li>Declaração de serviço;</li>
      </ul>

      <h5>Documentos do financiador Portugal:</h5>
      <ul>
        <li>Cópia do título de residência;</li>
        <li><a href="https://www.vfsglobal.com/one-pager/portugal/angola/portuguese/pdf/term-of-responsibility-romanian.pdf" target="blank">Termo de responsabilidade Schengen</a>;</li>
        <li>Extrato dos 3 últimos meses;</li>
        <li>Declaração de serviço;</li>
        <li>Declaração do IRS;</li>
        <li>Comprovante de residência (conta de água ou luz em nome dele);</li>
        <li>Últimas 3 folhas de salário (opcional).</li>
      </ul>

      <p><a href="declaracoes.pdf" target="blank">Exemplares de declaração de serviço</a></p>

      <p><a href="https://www.vfsglobal.com/one-pager/portugal/angola/portuguese/pdf/checklist-cg-atualizacao-2025.pdf" target="blank">Checklist completo e detalhado</a></p>
    `
  },
  { 
    title:"3.2. Visto de estudante (ensino superior)", 
    video:"https://www.youtube.com/embed/tgbNymZ7vqY", 
    description:"Universidades.", 
    disabled: true 
  },
  { 
    title:"3.3. Visto de estudante (formação profissional)", 
    video:"https://www.youtube.com/embed/k3UuFj6i5pA", 
    description:"Trabalhadores remotos.", 
    disabled: true 
  },
  { 
    title:"3.4. Visto de trabalho", 
    video:"https://www.youtube.com/embed/ScMzIvxBSi4", 
    description:"Checklist obrigatório.", 
    disabled: true 
  },
  { 
    title:"3.5. Visto de procura de trabalho", 
    video:"https://www.youtube.com/embed/tgbNymZ7vqY", 
    description:"Planos aceitos.", 
    disabled: true 
  },
  { 
    title:"3.6. Visto de saúde", 
    video:"https://www.youtube.com/embed/k3UuFj6i5pA", 
    description:"Como marcar.", 
    disabled: true 
  },
  { 
    title:"3.7 Visto de nômade digital", 
    video:"https://www.youtube.com/embed/ScMzIvxBSi4", 
    description:"Primeiros passos.", 
    disabled: true 
  },
  { 
    title:"3.8. Visto para familiares de portugueses", 
    video:"https://www.youtube.com/embed/tgbNymZ7vqY", 
    description:"Número fiscal.", 
    disabled: true 
  },
  { 
    title:"3.9. Menores de idade", 
    video:"https://www.youtube.com/embed/tgbNymZ7vqY", 
    description:"Número fiscal.", 
    disabled: true 
  },
  { 
    title:"4. Preparação financeira", 
    video:"https://www.youtube.com/embed/k3UuFj6i5pA", 
    description:"Segurança social.", 
    disabled: true 
  },
  { 
    title:"5. Agendamento", 
    video:"https://www.youtube.com/embed/ScMzIvxBSi4", 
    description:"SNS.", 
    disabled: true 
  },
  { 
    title:"6. Documentação", 
    video:"https://www.youtube.com/embed/k3UuFj6i5pA", 
    description:"Renovações.", 
    disabled: true 
  },
  { 
    title:"7. Submeter o pedido de visto", 
    video:"https://www.youtube.com/embed/tgbNymZ7vqY", 
    description:"Como alugar legalmente.", 
    disabled: true 
  },
  { 
    title:"8. Acompanhamento do pedido submetido", 
    video:"https://www.youtube.com/embed/ScMzIvxBSi4", 
    description:"Áreas com demanda.", 
    disabled: true 
  },
  { 
    title:"9. Levantamento", 
    video:"https://www.youtube.com/embed/k3UuFj6i5pA", 
    description:"Reagrupamento familiar.", 
    disabled: true 
  },
];

const menu = document.getElementById("lessonMenu");

lessons.forEach((lesson, i) => {
  const link = document.createElement("a");
  link.textContent = lesson.title;
  link.id = "lesson-" + i;

  if (lesson.disabled) {
    // AULA DESATIVADA
    link.classList.add("disabled");
    link.style.pointerEvents = "none";
    link.style.opacity = "0.5";
  } else {
    // AULA NORMAL
    link.href = "#";
    link.onclick = () => loadLesson(i);
  }

  menu.appendChild(link);
});

function getNextAvailableLesson(index) {
  for (let i = index + 1; i < lessons.length; i++) {
    if (!lessons[i].disabled) return i;
  }
  return null;
}

function getPrevAvailableLesson(index) {
  for (let i = index - 1; i >= 0; i--) {
    if (!lessons[i].disabled) return i;
  }
  return null;
}

let currentLesson = 0;

function loadLesson(i) {
  currentLesson = i;

  document.getElementById("lessonTitle").textContent = lessons[i].title;
  document.getElementById("lessonVideo").src = lessons[i].video;

  // AQUI ESTÁ A FLEXIBILIDADE 🔥
  document.getElementById("lessonDescription").innerHTML = lessons[i].description;

  document.querySelectorAll("#lessonMenu a").forEach(a => a.classList.remove("active"));
  document.getElementById("lesson-" + i).classList.add("active");

  const prev = getPrevAvailableLesson(i);
  const next = getNextAvailableLesson(i);

  document.getElementById("prevLesson").disabled = prev === null;
  document.getElementById("nextLesson").disabled = next === null;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById("prevLesson").onclick = () => {
  const prev = getPrevAvailableLesson(currentLesson);
  if (prev !== null) loadLesson(prev);
};

document.getElementById("nextLesson").onclick = () => {
  const next = getNextAvailableLesson(currentLesson);
  if (next !== null) loadLesson(next);
};

// carrega a primeira aula habilitada (caso a 0 esteja desabilitada)
const firstEnabled = lessons.findIndex(l => !l.disabled);
loadLesson(firstEnabled === -1 ? 0 : firstEnabled);
