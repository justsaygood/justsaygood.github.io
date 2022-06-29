export let popupCall = document.querySelector('.popup--call');
export let closePopupCallBtn = popupCall.querySelector('.button-close');

document.querySelectorAll('.button--call').forEach(item => {
    item.addEventListener('click', event => {
        popupCall.classList.add('popup--call--active');
        document.body.classList.add('body--disabled');
    })
});

closePopupCallBtn.addEventListener('click', function () {
      popupCall.classList.remove('popup--call--active');
      document.body.classList.remove('body--disabled');
 });

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    popupCall.classList.remove('popup--call--active');
    document.body.classList.remove('body--disabled');
  }
})

popupCall.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupCall.classList.remove('popup--call--active');
  document.body.classList.remove('body--disabled');
  document.querySelector('.popup__body').addEventListener('click', function(e) {
    e.stopPropagation();
  })
})
