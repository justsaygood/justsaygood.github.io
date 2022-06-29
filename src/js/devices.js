export let showAllList = document.querySelector('.button-all__devices');
export let showImg = document.querySelector('.icon-more');
export let devicesList = document.querySelector('.devices');

export function showAllDevicesList(heightBlock, text, img) {
    devicesList.style.height = heightBlock;
    showAllList.textContent = text;
    showImg.src = img;
}

showAllList.addEventListener('click', function () {
    if (devicesList.style.height !== '100%') {
        showAllDevicesList('100%', 'Скрыть', './img/icon-close.svg');
    } else {
        showAllDevicesList('200px', 'Показать все', './img/icon.svg');
    }
})
