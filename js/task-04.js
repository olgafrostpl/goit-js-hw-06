// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати
// його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй
// її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
const decrementEl = document.querySelector("[data-action=decrement]");
console.log(decrementEl);

const incrementEl = document.querySelector("[data-action=increment]");
console.log(incrementEl);

const counterValue = document.querySelector("#value");
console.log(counterValue);

var spanValue = 0;

decrementEl.addEventListener("click", (e) => {
  spanValue -= 1;
  counterValue.textContent = spanValue;
});

incrementEl.addEventListener("click", (e) => {
  spanValue += 1;
  counterValue.textContent = spanValue;
});
