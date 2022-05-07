const numberOfCategoriesEl = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${numberOfCategoriesEl.length}`);

const categoryElementsEl = [...numberOfCategoriesEl]
  .map(
    categories => `Category: ${categories.firstElementChild.textContent}
Elements: ${categories.children[1].children.length}
`)
  .join("\n");
console.log(categoryElementsEl);