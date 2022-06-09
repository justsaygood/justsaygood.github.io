let showAllList = document.querySelector('.button-all__devices');
let showImg = document.querySelector('.icon-more');
// блок brands
let devicesList = document.querySelector('.devices');

// разворачивает и сворачивает список брендов brandList
function showAllDevicesList(heightBlock, img, text) {
    devicesList.style.height = heightBlock; // меняем высоту
    showImg.src = img; // для смены картинки
    showAllList.textContent = text; // меняем текст в кнопке
}
showAllList.addEventListener('click', function () {
    if (devicesList.style.height !== '100%') {
        showAllDevicesList('100%', 'image/icon-close.svg', 'Скрыть');
    } else {
        showAllDevicesList('200px', 'image/icon.svg', 'Показать все');
    }
});