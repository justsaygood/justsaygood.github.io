const showAllListBtn = document.querySelector('.button-all__brands');
const showListImg = document.querySelector('.icon-more');
const brandList = document.querySelector('.brands');


   showAllListBtn.addEventListener('click', function () {
     if (showAllListBtn.textContent === 'Показать все') {
       brandList.classList.add('brands--open');
       showAllListBtn.textContent = 'Скрыть';
       showListImg.classList.add('icon-more--reverse');
     } else if (showAllListBtn.textContent === 'Скрыть') {
       brandList.classList.remove('brands--open');
       showAllListBtn.textContent = 'Показать все';
       showListImg.classList.remove('icon-more--reverse');
     }
   })

export {showAllListBtn, showListImg, brandList};
