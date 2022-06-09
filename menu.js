let sideMenu = document.querySelector('.side-wrap');
let openSideMenuButton = document.querySelector('.menu__button--burger');
let closeSideMenuButton = sideMenu.querySelector('.button--burger');

openSideMenuButton.addEventListener('click', function () {
    sideMenu.classList.add('side-wrap--show');
});
closeSideMenuButton.addEventListener('click', function () {
    sideMenu.classList.remove('side-wrap--show');
});

