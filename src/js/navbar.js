const BTN_CLOSE_MENU = document.getElementById('btn-close-mobile-menu');
const HEADER_MOBILE = document.getElementById('header-top-mobile');
const BTN_OPEN_MENU = document.getElementById('btn-open-mobile-menu');
const MOBILE_MENU = document.getElementById('menu');

BTN_CLOSE_MENU.addEventListener('click', function () {
    MOBILE_MENU.classList.remove('active');
    HEADER_MOBILE.hidden = true;
});

BTN_OPEN_MENU.addEventListener('click', function () {
    MOBILE_MENU.classList.add('active');
    HEADER_MOBILE.hidden = false;
});
