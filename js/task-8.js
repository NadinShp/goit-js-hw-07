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

const inputFromUserRef = document.querySelector('#controls > input');
const buttonOfCreateRef = document.querySelector('button[data-action="render"]');
const buttonOfDestroyRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

let userNumber = 0;

inputFromUserRef.addEventListener('change', event => {
  userNumber = Number(event.target.value);
});
const createBoxes = userNumber => {
  console.log(userNumber);
  let i = 0;
  while (i < userNumber) {
    const createdDiv = document.createElement('div');
    createdDiv.style.height = '30px';
    createdDiv.style.width = '30px';
    createdDiv.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    boxesRef.appendChild(createdDiv);
    i += 1;
  };
};

buttonOfCreateRef.addEventListener('click', createBoxes);

