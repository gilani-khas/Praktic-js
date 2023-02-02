//1

/*let man = {
  name: "Gilani",
  surname: "Khasmukhadzhiev",
  age: 24,
  heidht: "174 cm",
  login: "Gilani001",
  password: "1234",
  summa: 25000,
  address: {
    country: "Russia",
    republic: "Chechen Republic",
    district: "Grozny District",
    village: "Tolstoy Yurt",
    street: "District",
    home: 3,
  },
};
console.log(man);

//2
let text = prompt("Введите пароль");
if (text === man.password) {
  console.log(
    `Добро пожаловать ${man.name} ${man.surname}. Ваш логин ${man.login}`
  );
} else {
  console.log(`Указанный пароль ${text} не верен. Попробуйте еще раз`);
}
*/

//1
let a = ["Lorem", 123, true, "ipsum"];

a.unshift(254, "Gilani", 589);

console.log(a);
console.log(a.length);
console.log(a[0]);
console.log(a[a.length - 1]);

//2
let em = ["Gilani", 24, "Abdullah", 562, true];

em.unshift(245, 598);
em.push(687, "Khas", 35, "Djabrail");
em.pop();
em.splice(8, 9);
em.shift();

console.log(em);

//3
let number = [1, 3, 5, 7, 9];
number[0] *= 2;
number[1] *= 2;
number[2] *= 2;
number[3] *= 2;
number[4] *= 2;

number.splice(2, 1);
number.splice(0, 2, "четные числа");
console.log(number);
