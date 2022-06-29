export let sideMenu = document.querySelector('.side-wrap');
export let openSideMenuButton = document.querySelector('.menu__button--burger');
export let closeSideMenuButton = sideMenu.querySelector('.button--burger');

 openSideMenuButton.addEventListener('click', function () {
    sideMenu.classList.add('side-wrap--show');
    document.body.classList.add('body--disabled');

});

closeSideMenuButton.addEventListener('click', function () {
    sideMenu.classList.remove('side-wrap--show');
    document.body.classList.remove('body--disabled');

})

sideMenu.addEventListener('click', function (evt) {
  evt.preventDefault();
  sideMenu.classList.remove('side-wrap--show');
  document.body.classList.remove('body--disabled');
  document.querySelector('.side-content').addEventListener('click', function(e) {
    e.stopPropagation();
  })
})

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    sideMenu.classList.remove('side-wrap--show');
    document.body.classList.remove('body--disabled');
  }
})
