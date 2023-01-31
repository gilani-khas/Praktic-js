//1
let man = {
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
