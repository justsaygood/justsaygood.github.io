const showAllListBtn = document.querySelector('.button-all__brands');
let showListImg = document.querySelector('.icon-more');
let brandList = document.querySelector('.brands');


   showAllListBtn.addEventListener('click', function () {
     brandList.classList.add('brands--open');
     this.textContent = this.textContent === 'Показать все' ? 'Скрыть' : 'Показать все';
   })

 export {showAllListBtn, showListImg, brandList};
