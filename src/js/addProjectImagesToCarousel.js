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
        description:'<p class="paragrafo__sem_espaco">Texto detalhando um pouco mais sobre o projeto, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat porro aspernatur ab veritatis iusto quibusdam assumenda officiis tenetur sit suscipit incidunt, odio totam ad earum dolorum nihil sequi sint praesentium.</p> <p class="paragrafo__sem_espaco">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Repellat porro aspernatur ab veritatis iusto quibusdam assumenda officiis tenetur sit suscipit incidunt, odio totam ad earum dolorum nihil sequi sint praesentium.</p>',
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
        name:'Média e Baixa Tensão',
        title: 'Projeto de Média e Baixa Tensão',
        description:'<p class="paragrafo__sem_espaco">Texto detalhando um pouco mais sobre o projeto, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat porro aspernatur ab veritatis iusto quibusdam assumenda officiis tenetur sit suscipit incidunt, odio totam ad earum dolorum nihil sequi sint praesentium.</p> <p class="paragrafo__sem_espaco">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Repellat porro aspernatur ab veritatis iusto quibusdam assumenda officiis tenetur sit suscipit incidunt, odio totam ad earum dolorum nihil sequi sint praesentium.</p>',
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
        name:'Média e Baixa Tensão',
        title: 'Projeto de Média e Baixa Tensão',
        description:'<p class="paragrafo__sem_espaco">Texto detalhando um pouco mais sobre o projeto, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat porro aspernatur ab veritatis iusto quibusdam assumenda officiis tenetur sit suscipit incidunt, odio totam ad earum dolorum nihil sequi sint praesentium.</p> <p class="paragrafo__sem_espaco">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Repellat porro aspernatur ab veritatis iusto quibusdam assumenda officiis tenetur sit suscipit incidunt, odio totam ad earum dolorum nihil sequi sint praesentium.</p>',
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
        name:'Elétrico',
        title: 'Projeto Elétrico',
        description:'<p class="paragrafo__sem_espaco">Texto detalhando um pouco mais sobre o projeto, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat porro aspernatur ab veritatis iusto quibusdam assumenda officiis tenetur sit suscipit incidunt, odio totam ad earum dolorum nihil sequi sint praesentium.</p> <p class="paragrafo__sem_espaco">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Repellat porro aspernatur ab veritatis iusto quibusdam assumenda officiis tenetur sit suscipit incidunt, odio totam ad earum dolorum nihil sequi sint praesentium.</p>',
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