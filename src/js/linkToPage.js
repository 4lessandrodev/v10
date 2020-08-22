const CARDS_PROJECTS = document.querySelectorAll('.card-project');
const MENUS = document.querySelectorAll('.nav-item .nav-link');
const DIRETORIO = (location.hostname === 'alessandrolmenezes.github.io')? '/v10': '';

//criar link dinâmica para direcionar para a pagina correta 
//no github antes do hostname tem a pasta do diretório
// ...> /v10/index
function changeHref() {
    if (location.hostname === 'alessandrolmenezes.github.io') {
        for (const opcao of MENUS) {
            opcao.href = DIRETORIO + opcao.href;
        }
    }
}

function goToProjects () {
    location.pathname = DIRETORIO + '/projects.html';
}

changeHref();

for (const card of CARDS_PROJECTS) {
    card.addEventListener('click', goToProjects);
}