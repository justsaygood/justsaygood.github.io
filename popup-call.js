let popupCall = document.querySelector('.popup__call');
let closePopupCallBtn = popupCall.querySelector('.button-close');

document.querySelectorAll('.button--call').forEach(item => {
    item.addEventListener('click', event => {
        popupCall.classList.add('popup__call--active');
    })
})

closePopupCallBtn.addEventListener('click', function () {
  popupCall.classList.remove('popup__call--active');
  document.body.classList.remove('body--disabled');
 });
