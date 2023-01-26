/* //№1
 const MY_CONST = "55"
 if (MY_CONST < 10) {
   console.log("Константа меньше 10");
 } else {
   console.log("Константа больше 10");
 
 //№2
 let a = 2;
 let b = 9
 if (a < b) {
   console.log("code");
 } else if (a > b) {
   console.log("nocode");
 } else {
   console.log("error");
 
 let code = "html"
 switch (code) {
   case "html":
     console.log("html");
     break
   case "css":
     console.log("css");
     break
   case "scss":
     console.log("scss");
     break
   case "js":
     console.log("js");
     break
   case "react":
     console.log("react");
     break;
 
 //№3
 let x = 10;
 let y = 7
 if (x > y) {
   console.log("x больше чем y");
 } else {
   console.log("x меньше чем y");
 
 //№4
 let num = prompt(`введите число`);
 let even_or_Odd = num % 2;
 if (even_or_Odd === 0) {
   console.log(`Число ${num} четное`);
 } else if (even_or_Odd === 1) {
   console.log(`Число ${num} не четное`);
 
 //№5
 let f = prompt("Введите число");
 let g = prompt("Введите число");
 let c = prompt("Введите число")
 if (true) {
   console.log(Math.max(f, b, c));
   alert(Math.max(f, b, c));
 }
*/

//№1
const a = 2;
func(25);

function func(a) {
  if (a > 10) {
    console.log("Константа больше 10");
  } else if (a < 10) {
    console.log("Константа меньше 10");
  } else {
    console.log(error);
  }
}

//№2
showMessage();

function showMessage() {
  alert("Привет, Мир");
  console.log("Привет, Мир");
}

//№3

cons();
function cons() {
  console.log("JavaScript");
}

//№4

let text = "Gilani";
if (text === "Lorem") {
  console.log("У вас ошибка в тексте");
} else if (text) {
  console.log(`Содержимое переменной: ${text}`);
}
