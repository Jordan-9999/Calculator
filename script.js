const add = (a, b) => a + b; 

const subtract = (a, b) => a - b;

const multiply = (a, b) =>  a * b;

const division = (a, b) => a / b;

let numberA = "";

let operator;

let numberB;

//console.log(add(4, 2));
//console.log(subtract(4, 2));
//console.log(multiply(4, 2));
//console.log(division(4, 2));


const operate = (a, operator, b) => operator(a, b);
    
console.log(operate(5, multiply, 3));

let display = document.querySelector("#display");
//display.value = 6;



const button0 = document.querySelector("#button0");
button0.addEventListener("click", function(){  
    display.value += button0.value;
    numberA = display.value
});

const button1 = document.querySelector("#button1");
button1.addEventListener("click", function(){  
    display.value += button1.value;
    numberA = display.value
});
const button2 = document.querySelector("#button2");
button2.addEventListener("click", function(){  
    display.value += button2.value;
    numberA = display.value
});
const button3 = document.querySelector("#button3");
button3.addEventListener("click", function(){  
    display.value += button3.value;
    numberA = display.value
});
const button4 = document.querySelector("#button4");
button4.addEventListener("click", function(){  
    display.value += button4.value;
    numberA = display.value
});
const button5 = document.querySelector("#button5");
button5.addEventListener("click", function(){  
    display.value += button5.value;
    numberA = display.value
});
const button6 = document.querySelector("#button6");
button6.addEventListener("click", function(){  
    display.value += button6.value;
    numberA = display.value
});
const button7 = document.querySelector("#button7");
button7.addEventListener("click", function(){  
    display.value += button7.value;
    numberA = display.value
});
const button8 = document.querySelector("#button8");
button8.addEventListener("click", function(){  
    display.value += button8.value;
    numberA = display.value
});
const button9 = document.querySelector("#button9");
button9.addEventListener("click", function(){  
    display.value += button9.value;
    numberA = display.value
});
const buttonClear = document.querySelector("#button-clear");
buttonClear.addEventListener("click", function() {
    display.value = "";
});

