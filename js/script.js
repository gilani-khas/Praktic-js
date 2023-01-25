//Создал константу
const MY_CONST = "55";

if (MY_CONST < 10) {
  console.log("Константа меньше 10");
} else {
  console.log("Константа больше 10");
}

//Создал переменные
let a = 2;
let b = 9;

if (a < b) {
  console.log("code");
} else if (a > b) {
  console.log("nocode");
} else {
  console.log("error");
}

let dataLogin = "Ali";
let dataPas = "1234";

let login = prompt("login");
let password = prompt("password");

if (dataLogin === login && dataPas === password) {
  console.log("welcome");
} else {
  console.log("Error");
}

//Добавил switch, case
let code = "html";

switch (code) {
  case "html":
    console.log("html");
    break;
  case "css":
    console.log("css");
    break;
  case "scss":
    console.log("scss");
    break;
  case "js":
    console.log("js");
    break;
  case "react":
    console.log("react");
    break;
}

let codes = "js";

switch (codes) {
  case "html":
    console.log("html");
    break;
  case "css":
    console.log("css");
    break;
  case "scss":
    console.log("scss");
    break;
  case "js":
    console.log("js");
    break;
  case "react":
    console.log("react");
    break;
}
