//вывел в консоль число PI
Math;
console.log(Math.PI);

//вывел в модальное окно и в консоль дату
let now = new Date(1999, 02, 0, 18, 30, 0);
alert(now);
console.log(now);

// Примеры
let a = 1;
let b = 3;
let c = " волков";

console.log(a + (b + c));

//Можно сделать ещё так

let d = "1";
let g = 3;
let f = " волков";

console.log(d + g + f);

//Переменные name, adress, phone
let name = prompt("Студент");
let adress = prompt("Адресс");
let phone = prompt("Номер телефона");

console.log(
  `Меня зовут ${name}, я живу в городе ${adress}, мой номер телефона ${phone}`
);

//Добавил константы
const sad = {
  name: "Gilani",
};
sad.name = "Gilani";
console.log(sad);
//Изменение константы на прямую невозможно.

//Обмен валюты
const RUB = 68.25;
const USD = 1;
const summaRUB = 1000;

const exchangeRate = RUB / USD;
console.log(`${RUB} Российский рубль = ${USD} долларов США`);

const exchange = summaRUB / RUB;
console.log(`За ${summaRUB} рублей: ${exchange} долларов США`);
