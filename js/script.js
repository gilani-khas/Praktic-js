// //1

// /*let man = {
//   name: "Gilani",
//   surname: "Khasmukhadzhiev",
//   age: 24,
//   heidht: "174 cm",
//   login: "Gilani001",
//   password: "1234",
//   summa: 25000,
//   address: {
//     country: "Russia",
//     republic: "Chechen Republic",
//     district: "Grozny District",
//     village: "Tolstoy Yurt",
//     street: "District",
//     home: 3,
//   },
// };
// console.log(man);

// //2
// let text = prompt("Введите пароль");
// if (text === man.password) {
//   console.log(
//     `Добро пожаловать ${man.name} ${man.surname}. Ваш логин ${man.login}`
//   );
// } else {
//   console.log(`Указанный пароль ${text} не верен. Попробуйте еще раз`);
// }
// */

// //1
// let a = ["Lorem", 123, true, "ipsum"];

// a.unshift(254, "Gilani", 589);

// console.log(a);
// console.log(a.length);
// console.log(a[0]);
// console.log(a[a.length - 1]);

// //2
// let em = ["Gilani", 24, "Abdullah", 562, true];

// em.unshift(245, 598);
// em.push(687, "Khas", 35, "Djabrail");
// em.pop();
// em.splice(8, 9);
// em.shift();

// console.log(em);

// //3
// let number = [1, 3, 5, 7, 9];
// number[0] *= 2;
// number[1] *= 2;
// number[2] *= 2;
// number[3] *= 2;
// number[4] *= 2;

// number.splice(2, 1);
// number.splice(0, 2, "четные числа");
// console.log(number);

//1
let odd = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];

odd.forEach((item, index, arr) => {
  if (item % 2 !== 0) {
    console.log(item);
  } else {
  }
});

//2
let text = [
  "lorem ipsum",
  "javascript",
  "php",
  "css",
  "react",
  "git",
  "html",
  "mysq",
];

text.forEach((item, index, text) => {
  if (item.length <= 4) {
    console.log(item);
  }
});

//3
let arr = [1, -3, 5, 6, -7, 8, 9, -11];
let arr2 = arr.filter((item, index, arr2) => {
  return item < 0;
});
console.log(arr2);

//4
let even = odd.filter((item, index, even) => {
  return item % 2 === 0;
});
console.log(even);

//5
let tetx2 = text.filter((item, index, text2) => {
  return item.length !== 3;
});
console.log(tetx2);

//6
let nev = [5, 6, 7, 8, 9];
nev.map((item, index, nev) => {
  console.log(Math.pow(item, 2));
});

//7
let mass = [
  {
    a: 10,
    b: 5,
  },
  {
    a: 20,
    b: 22,
  },
  {
    a: 131,
    b: 55,
  },
];
let mass2 = mass.map((item, index) => {
  return item.a + item.b;
});
console.log(mass2);

//8
let arrObj = [-13, 0, 12, 1662, -0.32, -102, -2];
let negativArr = arrObj.filter((item) => {
  return item < 0;
});
let negative = negativArr.reduce((sum, item) => {
  return sum + item;
}, 0);
console.log(negative);

//9

let newText = [
  {
    x: 10,
    y: "lorem",
  },
  {
    x: 21,
    y: "lorem",
  },
  {
    x: -17,
    y: "lorem",
  },
  {
    x: 156,
    y: "lorem",
  },
];

let summa = newText.reduce((sum, item) => {
  return item.x + sum;
}, 0);
console.log(summa);
