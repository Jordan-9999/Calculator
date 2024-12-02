const add = (a, b) => a + b; 

const subtract = (a, b) => a - b;

const multiply = (a, b) =>  a * b;

const division = (a, b) => a / b;

let numberA;

let operator;

let numberB;


const operate = (a, operator, b) => operator(a, b);




let display = document.querySelector("#display");

const button0 = document.querySelector("#button0");
button0.addEventListener("click", function(){  
    display.value += button0.value;
    console.log(display.value);
});
const button1 = document.querySelector("#button1");
button1.addEventListener("click", function(){ 
    display.value += button1.value;
    numberA = display.value;
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

const plusButton = document.querySelector("#plus-button");
plusButton.addEventListener("click", function(){
    operator = add;
    display.value += " + ";
});

const minusButton = document.querySelector("#minus-button");
minusButton.addEventListener("click", function(){
    operator = subtract;
    display.value += " - ";
});

const multiplyButton = document.querySelector("#multiply-button");
multiplyButton.addEventListener("click", function(){
    operator = multiply;
    display.value += " x ";
});

const divideButton = document.querySelector("#divide-button");
divideButton.addEventListener("click", function(){
    operator = division;
    display.value += " % ";
});

const equalsButton = document.querySelector("#equals-button");
equalsButton.addEventListener("click", function(){
let splitUpDisplay = display.value.split(" ").map(Number);
numberA = splitUpDisplay[0] ;
numberB = splitUpDisplay[2];

display.value = operate(numberA, operator, numberB);
});