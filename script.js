const add = (a, b) => a + b; 

const subtract = (a, b) => a - b;

const multiply = (a, b) =>  a * b;

const division = (a, b) => a / b;

let numberA = "";

let operator = "";

let numberB = "";



let numButton = document.querySelectorAll(".num-button");
let operatorButton = document.querySelectorAll(".operator-button");
let display = document.querySelector("#display");





const errorMessageFunc = function(){
    disableNumButtons();
    disableOperators();
    backButton.disabled = true;
    decimalButton.disabled = true;
    return display.value = "Whoa! You can't do that!"
};

const operate = (a, operator, b) => parseFloat(operator(a, b).toFixed(8));




const storeValues = function(){
    let splitUpDisplay = display.value.split(/[+\-x÷]/).map(Number);
    numberA = splitUpDisplay[0];
    numberB = splitUpDisplay[1];  

    if(numberA !== undefined){enableOperators()};
    if(numberB !== undefined){equalsButton.disabled = false}; 
};

const enableOperators = function(){
    operatorButton.forEach(button => button.disabled = false);
};
const disableOperators = function(){
    operatorButton.forEach(button => button.disabled = true);
    equalsButton.disabled = true;
    enableDecimal();
};
const enableNumButtons = function(){
    numButton.forEach(button => button.disabled = false);
    };
const disableNumButtons = function(){
numButton.forEach(button => button.disabled = true);
};
const enableDecimal = function(){
decimalButton.disabled = false
};


numButton.forEach(button => {
    button.addEventListener("click", ()=> {
        display.value += button.value;
        storeValues();});
});

const decimalButton = document.querySelector("#decimal-button");
      decimalButton.addEventListener("click", (event)=> { 
    if(numberA === ""){display.value += 0};
      display.value += decimalButton.value;
      storeValues();
      decimalButton.disabled = true;
    });
    


const plusButton = document.querySelector("#plus-button");
plusButton.addEventListener("click", function(){
    if(numberB === undefined){
         operator = add;
         display.value += "+";
         disableOperators();
         numberA = "";
        }
        else if(numberB === 0 && operator === division){
            errorMessageFunc();
        }
    else{
        display.value = operate(numberA, operator, numberB);
        if(numberA.toString().includes(".")){decimalButton.disabled = true};
        operator = add;
        display.value += "+";
        disableOperators();
        numberA = "";
    };
});

const minusButton = document.querySelector("#minus-button");
minusButton.addEventListener("click", function(){
    if(numberB === undefined){
        operator = subtract;
        display.value += "-";
        disableOperators();
        numberA = "";
        }
        else if(numberB === 0 && operator === division){
            errorMessageFunc();
        }
   else{
       display.value = operate(numberA, operator, numberB);
       if(numberA.toString().includes(".")){decimalButton.disabled = true};
       operator = subtract;
       display.value += "-";
       disableOperators();
       numberA = "";
   };
});

const multiplyButton = document.querySelector("#multiply-button");
multiplyButton.addEventListener("click", function(){
    if(numberB === undefined){
        operator = multiply;
        display.value += "x";
        disableOperators();
        numberA = "";
        }
        else if(numberB === 0 && operator === division){
            errorMessageFunc();
        }
   else{
       display.value = operate(numberA, operator, numberB);
       if(numberA.toString().includes(".")){decimalButton.disabled = true};
       operator = multiply;
       display.value += "x";
       disableOperators();
       numberA = "";
   };
});

const divideButton = document.querySelector("#divide-button");
divideButton.addEventListener("click", function(){
    if(numberB === undefined){
        operator = division;
        display.value += "÷";
        disableOperators();
        numberA = "";
    }
        else if(numberB === 0 && operator === division){
            errorMessageFunc();
        }
   else{
       display.value = operate(numberA, operator, numberB);
       if(numberA.toString().includes(".")){decimalButton.disabled = true};
       operator = division;
       display.value += "÷";
       disableOperators();
       numberA = "";
   };
});

const equalsButton = document.querySelector("#equals-button");
equalsButton.addEventListener("click", function(){
    if(numberB === 0 && operator === division){
        errorMessageFunc()}
    else{
    display.value = operate(numberA, operator, numberB);
    storeValues(); 
    if(numberA.toString().includes(".")){decimalButton.disabled = true}
    else{decimalButton.disabled = false};
    equalsButton.disabled = true;
}
});

const backButton = document.querySelector("#back-button");
backButton.addEventListener("click", function(){
let lastNum;
const removeLast = function(arr){lastNum = arr.pop();return arr};
let newDisplay = removeLast([...display.value]);
display.value = newDisplay.join("");
storeValues();
if(display.value[display.value.length -1] == display.value.match(/[+\-x÷undefined]/)){
 disableOperators()};
if(display.value.includes(".") && display.value.match(/[+\-x÷]/) === null){
 decimalButton.disabled = true};
if(lastNum == "."){decimalButton.disabled = false};
if(display.value == "" || display.value[display.value.length -1] == display.value.match(/[+\-x÷]/)){
    numberA = ""};
});


const buttonClear = document.querySelector("#button-clear");
buttonClear.addEventListener("click", function() {
    display.value = "";
    numberA = "";
    numberB = "";
    operator = "";
    disableOperators();
    enableNumButtons();
    backButton.disabled = false;
});

