let sideMenu = document.querySelector('.side-wrap');
let openSideMenuButton = document.querySelector('.menu__button--burger');
let closeSideMenuButton = sideMenu.querySelector('.button--burger');
let overlay = document.querySelector('.additional-wrapper');

 openSideMenuButton.addEventListener('click', function () {
    sideMenu.classList.add('side-wrap--show');
    document.body.classList.add('body--disabled');

});

closeSideMenuButton.addEventListener('click', function () {
    sideMenu.classList.remove('side-wrap--show');
    document.body.classList.remove('body--disabled');

})

overlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  sideMenu.classList.remove('side-wrap--show');
  document.body.classList.remove('body--disabled');
  document.querySelector('.side-wrap').addEventListener('click', function(e) {
    e.stopPropagation();
  })
})

export {sideMenu, openSideMenuButton, closeSideMenuButton, overlay};
