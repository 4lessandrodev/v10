const CAROUSEL = document.getElementById('carousel-inner');
const SELECTED_PROJECT_TITLE = document.getElementById('project_title');
const SELECTED_PROJECT_DESCRIPTION = document.getElementById('project_description');
const CARDS_DESKTOP = document.getElementById('projects__cards');
const CARDS_MOBILE = document.getElementById('cards-mobile');

const projects = [
    {
        id: 1,
        name:'Energia Solar',
        title: 'Projeto Energia Solar',
        description:'<p class="paragrafo__sem_espaco">A energia solar proporciona economia financeira mensal considerável  para sua residência, empresa, indústria , fazendas e ademais, além da contribuição com o meio ambiente, preservando o planeta utilizando de uma energia renovável. </p>',
        images: [
            'project-miniature_01.png',
            'project-miniature_03.png',
            'project-miniature_05.png',
            'project-miniature_06.png',
            'project-miniature_07.png',
            'project-miniature_08.png',
            'project-miniature_09.png',
            'project-miniature_10.png',
            'project-miniature_11.png',
            'project-miniature_12.png',
            'project-miniature_13.png',
            'project-miniature_14.png',
            'project-miniature_15.png',
            'project-miniature_16.png',
        ],
    },
    {
        id: 2,
        name:'Redes elétricas de Média e Baixa tensão',
        title: 'Projeto de Média e Baixa Tensão',
        description:'<p class="paragrafo__sem_espaco">Temos mais  de 1.000,00 KM de redes de média tensão projetadas e executadas. Redes utilizadas para distribuição de energia elétrica, para os consumidores finais.</p> <p class="paragrafo__sem_espaco">Projetamos e executamos redes elétricas de média e baixa tensão.</p>',
        images: [
            'project-miniature_17.png',
            'project-miniature_18.png',
            'project-miniature_19.png',
            'project-miniature_20.png',
            'project-miniature_21.png',
            'project-miniature_22.png'
        ],
    },
    {
        id: 3,
        name:'Transformadores e Subestação',
        title: 'Projeto de Média e Baixa Tensão',
        description:'<p class="paragrafo__sem_espaco">Com vasto acervo técnico, fazemos projetos e execuções de subestações. Com conhecimento de todas as normativas técnicas aplicáveis, fornecemos o material e mão de obra com excelente custo/benefício. </p>',
        images: [
            'project-miniature_23.png',
            'project-miniature_24.png',
            'project-miniature_25.png',
            'project-miniature_26.png',
            'project-miniature_27.png',
            'project-miniature_28.png'
        ],
    },
    {
        id: 4,
        name:'Sistemas Elétricos Prediais e Industriais  ',
        title: 'Projeto Sistemas Elétricos Prediais e Industriais',
        description:'<p class="paragrafo__sem_espaco">Com profunda experiência entre projetos e execuções de sistemas de baixa tensão, sendo eles prediais e industriais, realizamos as obras com excelência.</p>',
        images: [
            'project-miniature_29.png',
            'project-miniature_30.png',
            'project-miniature_31.png',
            'project-miniature_32.png',
            'project-miniature_33.png'
        ],
    },
    {
        id: 5,
        name:'SPDA (Sistemas de Proteção Contra Descargas Atmosféricas)',
        title: 'Projeto SPDA (Sistemas de Proteção Contra Descargas Atmosféricas)',
        description:'<p class="paragrafo__sem_espaco">O sistemas de proteção contra descarga atmosférica, é importantíssimo para a proteção de suas instalações. Em determinados estabelecimentos e locais são itens obrigatórios, garantindo a segurança de vidas e patrimônios.</p>',
        images: [
            'project-miniature_29.png',
            'project-miniature_30.png',
            'project-miniature_31.png',
            'project-miniature_32.png',
            'project-miniature_33.png'
        ],
    },
    {
        id: 6,
        name:'Eficiência Energética Industrial',
        title: 'Projeto Eficiência Energética Industrial',
        description:'<p class="paragrafo__sem_espaco">Realizamos projetos TURN-KEY, no qual realizamos uma análise completa de sua fatura junto com suas instalações, verificando os itens a serem corrigidos além de instalações de equipamentos para melhorar a eficiência do consumo de energia elétrica de sua indústria, fábrica ou empresa.</p>',
        images: [
            'project-miniature_29.png',
            'project-miniature_30.png',
            'project-miniature_31.png',
            'project-miniature_32.png',
            'project-miniature_33.png'
        ],
    },
    {
        id: 7,
        name:'Projetos e Laudos técnicos',
        title: 'Projeto Projetos e Laudos técnicos',
        description:'<p class="paragrafo__sem_espaco">Realizamos projetos elétricos em geral de média e baixa tensão.</p><p class="paragrafo__sem_espaco">Entregamos laudos técnicos de instalações elétricas, SPDA ,aterramentos, instalações industriais além de outras. Com equipamentos de aferição de ponta, garantimos a qualidade de nossos laudos.</p>',
        images: [
            'project-miniature_29.png',
            'project-miniature_30.png',
            'project-miniature_31.png',
            'project-miniature_32.png',
            'project-miniature_33.png'
        ],
    }
];

//Encontrar na lista de projetos qual projeto foi clicado
function selectProject(id) {
    if (typeof id === 'undefined' || typeof id === null || !id) {
        return false;
    }
    id = parseInt(id);
    const project = projects.find((proj) => proj.id === id);
    atribuirValoresNoHTML(project);
}


//Atribuir os valores do projeto na pagina html
function atribuirValoresNoHTML(project) {
    let imagesToHTML = '';
    
    if (!project) {
        return false;
    }
    
    SELECTED_PROJECT_TITLE.innerText = project.title;
    SELECTED_PROJECT_DESCRIPTION.innerHTML = project.description;
    
    project.images.map((image, index) => {
        if (index === 0) {
            imagesToHTML += `
            <div class="carousel-item active" >
            <img src="./src/images/projects/miniatura-420/${image}" class="d-block w-100" alt="imagem">
            </div>`;
        } else {
            imagesToHTML += `
            <div class="carousel-item" >
            <img src="./src/images/projects/miniatura-420/${image}" class="d-block w-100" alt="imagem">
            </div>`;
        }
    });
    window.scrollTo({ top: 700, behavior: 'smooth' });
    CAROUSEL.innerHTML = imagesToHTML;
}


//Criar cards no html para cada projeto cadastrado
function addCardsOnHTML() {
    
    let cardsDesktop = '';
    let cardsMobile = '';
    
    projects.map((project, index) => {
        
        cardsDesktop += `
        <div class="card card-project" onclick="selectProject(${index + 1})">
        <img src="./src/images/projects/miniatura-420/${project.images[0]}" class="card-img-top" alt="imagem">
        <div class="card-body">
        <h5 class="card-title">${project.name}</h5>
        </div>
        </div>`; 
        if (index === 0) {
            cardsMobile += `
            <div class="carousel-item active" onclick="selectProject(${index + 1})">
            <img src="./src/images/projects/miniatura-420/${project.images[0]}" class="d-block w-100" alt="slide">
            </div>
            `;
        } else {
            cardsMobile += `
            <div class="carousel-item" onclick="selectProject(${index + 1})">
            <img src="./src/images/projects/miniatura-420/${project.images[0]}" class="d-block w-100" alt="slide">
            </div>
            `; 
        }
        
    });
    CARDS_DESKTOP.innerHTML = cardsDesktop;
    CARDS_MOBILE.innerHTML = cardsMobile;
}


addCardsOnHTML();
selectProject(1); 