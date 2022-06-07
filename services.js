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


let showAllListBtn = document.querySelector('.button__all-list');
 let showListImg = document.querySelector('.icon-more');
// блок brands
 let brandList = document.querySelector('.brands-list');

// разворачивает и сворачивает список брендов brandList
 function showAllBrandList(heightBlock, img, text) {
     brandList.style.height = heightBlock; // меняем высоту
     showListImg.src = img; // для смены картинки
     showAllListBtn.textContent = text; // меняем текст в кнопке
 }
 showAllListBtn.addEventListener('click', function () {
     if (brandList.style.height !== '100%') {
         showAllBrandList('100%', 'image/icon-close.svg', 'Скрыть');
     } else {
         showAllBrandList('160px', 'image/icon.svg', 'Показать все');
     }
 });