//very easy 
var num1 = 10
var num2 = 5

console.log(`the difference between ${num1} and ${num2} is ${num1 - num2}`);

//easy
var name1 = "Ivana";

var name2 = "Thompson";

var nameLength1 = name1.length;
var nameLength2 = name2.length;
var difference = Math.abs (nameLength2 - nameLength1);

console.log(`The name ${name1} is shorter than ${name2} by ${difference} character`);


//medium challenge
 let userText = prompt ("Please insert a word")
 if (userText === userText.toUpperCase()){
     console.log(` ${userText} Please stop shouting `);
 } else if (userText === userText.toLowerCase()){
     console.log(`${userText} Please stop whispering` );
 } else console.log(`${userText} Try Again`)

// hard challenge
// addition
function addition(a, b) {
console.log(a + b)
}
addition(5, 5);

// subtraction
function subtraction(a, b) {
    console.log(a - b)
}
subtraction(10, 5);

//division
function division(a, b) {
    console.log(a / b)
}
division(15, 3);

// multiplication
function multiplication(a, b) {
    console.log(a * b)
} 
multiplication(12, 12)

// very hard Challenge
let firstNum = prompt(" Insert 1st number! ");

let operator = prompt(" Pick Operation (+ , - , * , /) ");

let secondNum = prompt(" Insert 2nd number! ");
let result;
if (operator === '+') {
    result = firstNum + secondNum;
}
else if (operator === '-') {
    result = firstNum - secondNum;
}
else if (operator === '*') {
    result = firstNum * secondNum;
}
else (operator === '/'); {
    result = firstNum / secondNum;
}
console.log(`${firstNum} ${operator} ${secondNum} = ${result}`);





