let sideMenu = document.querySelector('.side-wrap');
let openSideMenuButton = document.querySelector('.menu__button--burger');
let closeSideMenuButton = sideMenu.querySelector('.button--burger');

openSideMenuButton.addEventListener('click', function () {
    sideMenu.classList.add('side-wrap--show');

    let pagePos = window.scrollY;
      document.body.classList.add('body--disabled');
      document.setAttribute('data-scroll', pagePos);
});

closeSideMenuButton.addEventListener('click', function () {
    sideMenu.classList.remove('side-wrap--show');

    let pos = parseInt(document.body.getAttribute('data-scroll'));
    document.body.classList.remove('body--disabled');
    document.setAttribute('data-scroll', '');
    window.scrollTo(0, pos);
});

