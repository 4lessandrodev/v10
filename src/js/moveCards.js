//'use strict';
const elementSlider = document.getElementById('projects__cards');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');
let currentPosition = 0;

function moveCards(elementSlider, _direction) {

    let max = elementSlider.scrollWidth - elementSlider.offsetWidth;

    if (_direction === "left" && currentPosition < max) {
        currentPosition += elementSlider.offsetWidth;
        elementSlider.scroll({
            left: currentPosition,
            behavior: 'smooth'
        });
    } else if(_direction === "right") {
        currentPosition -= elementSlider.offsetWidth;
        elementSlider.scroll({
            left: currentPosition,
            behavior: 'smooth'
        });
    }

    currentPosition = (currentPosition < 0) ? 0 : currentPosition;
    currentPosition = (currentPosition > max) ? max : currentPosition;

}


leftButton.addEventListener('click', function () {
    moveCards(elementSlider, 'right');
});

rightButton.addEventListener('click', function () {
    moveCards(elementSlider, 'left');
});