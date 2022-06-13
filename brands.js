new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    slidesPerView: 'auto',
    slidesPerGroup: 1,
    watchOverflow: true,
    breakpoints: {
        768: {
            slidesPerView: Infinity,
        }
    }
});


let showAllListBtn = document.querySelector('.button-all__brands');
let showListImg = document.querySelector('.icon-more');
let brandList = document.querySelector('.brands');

 function showAllBrandList(heightBlock, img, text) {
     brandList.style.height = heightBlock;
     showListImg.src = img;
     showAllListBtn.textContent = text;
 }
 showAllListBtn.addEventListener('click', function () {
     if (brandList.style.height !== '100%') {
         showAllBrandList('100%', 'image/icon-close.svg', 'Скрыть');
     } else {
         showAllBrandList('160px', 'image/icon.svg', 'Показать все');
     }
 });