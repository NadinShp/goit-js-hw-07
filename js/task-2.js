const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().
const ingredientsRef = document.querySelector('#ingredients');

const ingredientsList = ingredients.map(ingredient => {
  const createdTag = document.createElement('li');
  createdTag.textContent = ingredient;
  createdTag.classList.add('ingredients-list');
  return createdTag;
});
ingredientsRef.append(...ingredientsList);
