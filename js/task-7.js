// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const fontSizeControlRef = document.querySelector('#font-size-control');
const textChangedRef = document.querySelector('#text');

fontSizeControlRef.addEventListener('input', event => {
    const currentPosition = (event.target.value);
    const fontSizeValue = currentPosition + 'px';
    textChangedRef.style.fontSize = fontSizeValue;
});
