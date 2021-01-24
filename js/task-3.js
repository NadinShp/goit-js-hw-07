// Напиши скрипт для создания галлереи изображений по массиву данных.
// В HTML есть список ul#gallery.
// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

import images from "./images.js";
const galleryRef = document.querySelector('#gallery');

const createGallary = images.map(image => {
    const galleryList = document.createElement('li');
    galleryList.insertAdjacentHTML('beforeend', '<img>');
    const img = galleryList.firstElementChild;
    img.classList.add('img');
    img.alt = image.alt;
    img.src = image.url;
    return galleryList;
});
galleryRef.append(...createGallary);