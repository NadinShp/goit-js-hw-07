// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const currentCounterValueRef = document.querySelector('#value');
const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');

const incrementCounter = () => {
    counterValue += 1;
    currentCounterValueRef.textContent = counterValue;
};
const decrementCounter = () => {
        counterValue -= 1;
    currentCounterValueRef.textContent = counterValue;
}

let counterValue = 0;
decrementRef.addEventListener('click', decrementCounter);
incrementRef.addEventListener('click', incrementCounter);
