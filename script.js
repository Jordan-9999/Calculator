const add = (a, b) => a + b; 

const subtract = (a, b) => a - b;

const multiply = (a, b) =>  a * b;

const division = (a, b) => a / b;

let numberA = "";

let operator = "";

let numberB = "";

const errorMessageFunc = function(){
    disableNumButtons();
    disableOperators();
    return display.value = "Whoa! You can't do that!"
};


const operate = (a, operator, b) => numberB == 0 && operator == division ? errorMessageFunc() :
parseFloat(operator(a, b).toFixed(8));



const storeValues = function(){
    let splitUpDisplay = display.value.split(" ").map(Number);
    numberA = splitUpDisplay[0];
    numberB = splitUpDisplay[2];  

    if(numberA !== undefined){enableOperators()};
    if(numberB !== undefined){equalsButton.disabled = false}; 
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

const disableNumButtons = function(){
    button0.disabled = true;
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
    button5.disabled = true;
    button6.disabled = true;
    button7.disabled = true;
    button8.disabled = true;
    button9.disabled = true;
};
const enableNumButtons = function(){
    button0.disabled = false;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
}





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
        else if(numberB === 0 && operator === division){
            errorMessageFunc();
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
        disableOperators();
        }
        else if(numberB === 0 && operator === division){
            errorMessageFunc();
        }
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
        else if(numberB === 0 && operator === division){
            errorMessageFunc();
        }
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
        else if(numberB === 0 && operator === division){
            errorMessageFunc();
        }
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
    enableNumButtons();
});

