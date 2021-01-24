// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputTextRef = document.querySelector('#name-input');
const outputTextRef = document.querySelector('#name-output');

inputTextRef.addEventListener('input', event => {
     event.target.value === '' ? outputTextRef.textContent = "незнакомец" : outputTextRef.textContent = event.target.value;
});
