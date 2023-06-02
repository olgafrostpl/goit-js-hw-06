// 1

const categoriesRef = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesRef.length}`);

categoriesRef.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});

// 2

// let categoriesRef = document.querySelectorAll(".item");
// console.log(`Number of categories: ${categoriesRef.length}`);

// categoriesRef.forEach((category, index) => {
//   console.log(`Category: ${category.querySelector("h2").textContent}`);
//   console.log(`Elements: ${category.querySelectorAll("li").length}`);
// });
