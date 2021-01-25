// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputValidDataRef = document.querySelector('#validation-input');
const requairedCount = Number(inputValidDataRef.dataset.length);

inputValidDataRef.addEventListener('change', event => {
    const currentCountData = event.target.value;

    if (currentCountData.length === requairedCount) {
        inputValidDataRef.classList.add('valid');
        inputValidDataRef.classList.remove('invalid');
    }
    else {
        inputValidDataRef.classList.add('invalid');
        inputValidDataRef.classList.remove('valid');
    }
});

