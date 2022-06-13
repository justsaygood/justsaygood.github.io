let showAllList = document.querySelector('.button-all__devices');
let showImg = document.querySelector('.icon-more');
let devicesList = document.querySelector('.devices');

function showAllDevicesList(heightBlock, img, text) {
    devicesList.style.height = heightBlock;
    showImg.src = img;
    showAllList.textContent = text;
}
showAllList.addEventListener('click', function () {
    if (devicesList.style.height !== '100%') {
        showAllDevicesList('100%', 'image/icon-close.svg', 'Скрыть');
    } else {
        showAllDevicesList('200px', 'image/icon.svg', 'Показать все');
    }
});