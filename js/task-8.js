// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

//Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const buttonOfCreateRef = document.querySelector('button[data-action="render"]');
const buttonOfDestroyRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

buttonOfCreateRef.addEventListener('click', getAmount);
buttonOfDestroyRef.addEventListener('click', destroyBoxes);
function getAmount() {
  const amount = +document.querySelector('#controls > input').value;
  createBoxes(amount);
}
function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  let i = 0;
  while (i < amount) {
    const createdDiv = document.createElement('div');
    let size = basicSize + i * 10;
    createdDiv.style.height = `${size}px`;
    createdDiv.style.width = `${size}px`;
    createdDiv.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    fragment.appendChild(createdDiv);
    i += 1;
  }
  boxesRef.appendChild(fragment);
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}
