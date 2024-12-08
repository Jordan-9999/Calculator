const add = (a, b) => a + b; 

const subtract = (a, b) => a - b;

const multiply = (a, b) =>  a * b;

const division = (a, b) => a / b;

let numberA = "";

let operator = "";

let numberB = "";


const operate = (a, operator, b) => operator(a, b);

const storeValues = function(){
    let splitUpDisplay = display.value.split(" ").map(Number);
    numberA = splitUpDisplay[0];
    numberB = splitUpDisplay[2];  

    if(numberA !== undefined){enableOperators()};
    if(numberB !== undefined){equalsButton.disabled = false;};
};

const enableOperators = function(){
    plusButton.disabled = false;
    minusButton.disabled = false;
    multiplyButton.disabled = false;
    divideButton.disabled = false;
};
const disableOperators = function(){
    plusButton.disabled = true;
    minusButton.disabled = true;
    multiplyButton.disabled = true;
    divideButton.disabled = true;
    equalsButton.disabled = true;
};

let display = document.querySelector("#display");

const button0 = document.querySelector("#button0");
button0.addEventListener("click", function(){  
    display.value += button0.value;
    storeValues();
});
const button1 = document.querySelector("#button1");
button1.addEventListener("click", function(){ 
    display.value += button1.value;
    storeValues();
});
const button2 = document.querySelector("#button2");
button2.addEventListener("click", function(){  
    display.value += button2.value;
    storeValues();
});
const button3 = document.querySelector("#button3");
button3.addEventListener("click", function(){  
    display.value += button3.value;
    storeValues();
});
const button4 = document.querySelector("#button4");
button4.addEventListener("click", function(){  
    display.value += button4.value;
    storeValues();
});
const button5 = document.querySelector("#button5");
button5.addEventListener("click", function(){  
    display.value += button5.value;
    storeValues();
});
const button6 = document.querySelector("#button6");
button6.addEventListener("click", function(){  
    display.value += button6.value;
    storeValues();
});
const button7 = document.querySelector("#button7");
button7.addEventListener("click", function(){  
    display.value += button7.value;
    storeValues();
});
const button8 = document.querySelector("#button8");
button8.addEventListener("click", function(){  
    display.value += button8.value;
    storeValues();
});
const button9 = document.querySelector("#button9");
button9.addEventListener("click", function(){  
    display.value += button9.value;
    storeValues();
});


const plusButton = document.querySelector("#plus-button");
plusButton.addEventListener("click", function(){
    if(numberB === undefined){
         operator = add;
         display.value += " + ";
         disableOperators();
        }
    else{
        display.value = operate(numberA, operator, numberB);
        operator = add;
        display.value += " + ";
        disableOperators();
    };
});

const minusButton = document.querySelector("#minus-button");
minusButton.addEventListener("click", function(){
    if(numberB === undefined){
        operator = subtract;
        display.value += " - ";
        disableOperators();}
   else{
       display.value = operate(numberA, operator, numberB);
       operator = subtract;
       display.value += " - ";
       disableOperators();
   };
});

const multiplyButton = document.querySelector("#multiply-button");
multiplyButton.addEventListener("click", function(){
    if(numberB === undefined){
        operator = multiply;
        display.value += " x ";
        disableOperators();}
   else{
       display.value = operate(numberA, operator, numberB);
       operator = multiply;
       display.value += " x ";
       disableOperators();
   };
});

const divideButton = document.querySelector("#divide-button");
divideButton.addEventListener("click", function(){
    if(numberB === undefined){
        operator = division;
        display.value += " % ";
        disableOperators();}
   else{
       display.value = operate(numberA, operator, numberB);
       operator = division;
       display.value += " % ";
       disableOperators();
   };
});

const equalsButton = document.querySelector("#equals-button");
equalsButton.addEventListener("click", function(){
    display.value = operate(numberA, operator, numberB);
    equalsButton.disabled = true;
});

const buttonClear = document.querySelector("#button-clear");
buttonClear.addEventListener("click", function() {
    display.value = "";
    numberA = "";
    numberB = "";
    operator = "";
    disableOperators();
});