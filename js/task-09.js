function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor);

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на
// button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
const bodyEl = document.querySelector("body");

const colorEl = document.querySelector(".color");

const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", (e) => {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  colorEl.textContent = getRandomHexColor();
});
