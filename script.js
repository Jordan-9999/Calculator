const add = (a, b) => a + b; 

const subtract = (a, b) => a - b;

const multiply = (a, b) =>  a * b;

const division = (a, b) => a / b;

let numberA;

let operator;

let numberB;

//console.log(add(4, 2));
//console.log(subtract(4, 2));
//console.log(multiply(4, 2));
//console.log(division(4, 2));


const operate = (a, operator, b) => operator(a, b);
    
    
    
console.log(operate(5, multiply, 3));