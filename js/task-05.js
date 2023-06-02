// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його
// поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputEl = document.querySelector("#name-input");
console.dir(inputEl);

const outputEl = document.querySelector("#name-output");
console.dir(outputEl.textContent);

inputEl.addEventListener("input", (e) => {
  outputEl.textContent = e.target.value;
});
