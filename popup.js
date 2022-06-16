let popupFeedback = document.querySelector('.popup__feedback');
let closePopupFeedbackBtn = popupFeedback.querySelector('.button-close');

document.querySelectorAll('.button--chat').forEach(item => {
    item.addEventListener('click', event => {
        popupFeedback.classList.add('popup__feedback--active');
        document.body.classList.add('body--disabled');
    })
});

closePopupFeedbackBtn.addEventListener('click', function () {
    popupFeedback.classList.remove('popup__feedback--active');
    document.body.classList.remove('body--disabled');
})
