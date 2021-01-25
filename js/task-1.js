// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4
const categoriesRef = document.querySelector('#categories');
const itemsRef = categoriesRef.querySelectorAll('.item');

const arrayCategories = Array.from(itemsRef);
let totalCountCategories = 0;

arrayCategories.reduce((acc, item) => { totalCountCategories += 1 }, 0);

console.log(`Колличество категорий: ${totalCountCategories}`);
// console.log(`Колличество категорий: ${itemsRef.length}`);

const categoryElements = itemsRef.forEach(itemRef => {
    console.log(`Категория: ${itemRef.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${itemRef.lastElementChild.children.length}`);
});