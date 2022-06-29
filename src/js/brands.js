export const showAllListBtn = document.querySelector('.button-all__brands');
export let showListImg = document.querySelector('.icon-more');
export let brandList = document.querySelector('.brands');

   showAllListBtn.addEventListener('click', ShowAllBrands);
function ShowAllBrands() {
  brandList.classList.toggle('brands--open');
  showListImg.classList.toggle('icon-more--reverse');

  if (brandList.classList.contains('brands--open')){
    showAllListBtn.textContent = 'Скрыть';
    showListImg.classList.add('icon-more--reverse');
  } else {
    showAllListBtn.textContent = 'Показать все';
    showListImg.classList.remove('icon-more--reverse');
  }
}
