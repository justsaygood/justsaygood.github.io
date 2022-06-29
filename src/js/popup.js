export const popupFeedback = document.querySelector('.popup--feedback');
export let closePopupFeedbackBtn = popupFeedback.querySelector('.button-close');
export let overlayPopup = document.querySelector('.popup--feedback--active');

document.querySelectorAll('.button--chat').forEach(item => {
    item.addEventListener('click', event => {
      popupFeedback.classList.add('popup--feedback--active');
      document.body.classList.add('body--disabled');
    })
})

closePopupFeedbackBtn.addEventListener('click', function () {
    popupFeedback.classList.remove('popup--feedback--active');
    document.body.classList.remove('body--disabled');
})

popupFeedback.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupFeedback.classList.remove('popup--feedback--active');
  document.body.classList.remove('body--disabled');
  document.querySelector('.popup__body').addEventListener('click', function(e) {
    e.stopPropagation();
  })
})

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    popupFeedback.classList.remove('popup--feedback--active');
    document.body.classList.remove('body--disabled');
  }
})
