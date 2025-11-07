// document.getElementById("profile-name").textContent =
//   "Welcome again , Sophia Benette";

// document.getElementById("logout-button").onclick = function () {

//   const userLog = document.getElementById("parent-wrapper");
//   userLog.style.display = "none";

//   document.getElementById("logout-button").textContent = "Sign in";

// };

// const usernaame = document.getElementById("profile-name");
// usernaame.style.color = "red";

// External script

console.log("Data siphoning complete 🤣 Gatchaaaa !!");
// alert("welcome to my site");

// moklj      dularaization => of breaking code into smaller parts(modules)

let salutation = (name) => {
    console.log(`hello there ${name}`);
}

salutation("Abel");

function add(a, b) {
  return a * b;
}
console.log(add(2, 3));
// we use the function name to call the function

let numberCounter = function (limit) {
  for (let i = 0; i <= limit; i++) {
    console.log(i);
  }
};

let result1 = add(5, 7);
console.log(result1);

let result2 = add(10, 15);
console.log(result2);

let result3 = add(20, 30);
console.log(result3);

let b = 78;
let c = 90;
let result4 = add(b, c);
console.log(`When you add ${b} and ${c} you get ${result4}`);

let x = 3;

if (x > 5) {
  console.log("x is greater than 5");
}

if (x === 10) {
  console.log("x is exactly 10");
} else {
  console.log("x is not 10");
}

function bedtime(age){

  const childAge = Number(age);

  if (childAge <= 5) {
    console.log("7pm is bedtime");
  } else if (childAge <= 12) {
    console.log("9pm is bedtime");
  } else {
    console.log("11pm is bedtime");
  }
}

bedtime(3)
bedtime(6)
bedtime(5)
bedtime(10)
bedtime(15)

function daysOfWeek(dayNumber) {

 const dayNum = Number(dayNumber);

 switch(dayNum) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("Invalid day");
  }
}

daysOfWeek(1);
daysOfWeek(4);
daysOfWeek(7);
daysOfWeek(9);

//program flow loops
// as long as a conditio evaluates to true  while loop will run

let i =  0;

// while(i < 5){
//     console.log(i);
//     // i++;
// }

// while(true){
//   console.log(i);
//   i++;

//   if (i > 1) break;
// }

let j = 0;

do {
  console.log(j);
  j++;
}while(j < 5);

// for loop

for(let k = 0; k < 5; k++){
    console.log(k);
}

//for in and for of loops

let fruits = ["mango", "banana", "orange"];

for(let index in fruits){
    console.log(index);
    console.log(fruits[index]);
}

for(let fruit of fruits){
    console.log(fruit);
}

for (let a = 1; a <= 5; a++) {
  // if (a === 3) continue;
  // console.log(a);
  if (a === 4) break;
  console.log(a);
}

let car = {
  make: "Benz",
  model: "S-class",
  color: "black",
  year: 2025,
  seats : 4,
  start: function(){
    console.log("Welcome sir, S-class ready!");
  }
}

console.log(car);
car.start();

for(let key in car){
    console.log(key);
    console.log(car[key]);
}

let arrayOfCars = ["BMW", "Audi", "Benz", "Lexus"];
let arrayofbuses = ["Volvo", "Scania", "Tata"];

arrayOfCars = arrayOfCars.concat(arrayofbuses);
console.log(arrayOfCars);

arrayOfCars = [...arrayOfCars, ...arrayofbuses];
console.log(arrayOfCars);