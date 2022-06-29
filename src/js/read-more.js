export let readMoreButton = document.querySelector('.text__button');
export let text = document.querySelector('.text');

  readMoreButton.addEventListener('click', ShowAllText);
  function ShowAllText () {
    text.classList.toggle('text--open');
    readMoreButton.classList.toggle('text__button--open');

    if (text.classList.contains('text--open')){
      readMoreButton.textContent = 'Скрыть';
      readMoreButton.classList.add('text__button--open');
    } else {
      readMoreButton.textContent = 'Читать дальше';
      readMoreButton.classList.remove('text__button--open');
    }
  }
