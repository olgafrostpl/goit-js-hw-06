function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input
// і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити,
// колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>,
// скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію
// getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

// const formEl = document.querySelector("input", createBoxes)
// createBoxes(amount) = {}

const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");
const handleCreateBtn = document.querySelector("button[data-create]");
const handleDestroyteBtn = document.querySelector("button[data-destroy]");

let amount = 0;

function createBoxes(amount) {
  let size = 30;
  let markup = "";
  for (let i = 0; i < amount; i += 1) {
    markup += `<div 
    style="width: ${size}px; 
    height: ${size}px; 
    background-color: ${getRandomHexColor()};">
    </div>`;
    size += 10;
  }
  boxesEl.insertAdjacentHTML("beforeend", markup);
}
function destroyBoxes() {
  boxesEl.innerHTML = "";
}

inputEl.addEventListener("input", (event) => {
  amount = event.target.value;
});

handleCreateBtn.addEventListener("click", () => {
  if (inputEl.value !== "" && inputEl.value > 1 && inputEl.value < 100) {
    createBoxes(amount);
  } else {
    alert("Enter your number in the range between 1 and 100");
  }
});

handleDestroyteBtn.addEventListener("click", () => {
  destroyBoxes();
  inputEl.value = "";
});
