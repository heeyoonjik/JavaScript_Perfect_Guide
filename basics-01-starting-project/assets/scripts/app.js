let defaultAnswer = 0;
let currentAnswer = defaultAnswer;
let logEntries = [];

function getUserInputNumber(){
    return parseInt(userInput.value);
}

function getResult(InputOperator){
    const enteredValue = getUserInputNumber();
    if(!enteredValue){
        return;
    }
    const initialValue = currentAnswer;
    var operator;
    if(InputOperator === 'ADD'){
        operator = '+';
        currentAnswer += enteredValue;
    }else if(InputOperator === 'SUB'){
        operator = '-';
        currentAnswer -= enteredValue;
    }else if(InputOperator === 'MUL'){
        operator = '*';
        currentAnswer *= enteredValue;
    }else{
        operator = '/';
        currentAnswer /= enteredValue;
    }
    outputResult(currentAnswer, outputResultDescription(initialValue, operator, getUserInputNumber()))
    writeToLog(initialValue, enteredValue, inputNumber, currentAnswer);

}

function writeToLog(prevValue, inputValue,operator, result ){
    const entry = {
        prevValue : prevValue,
        inputValue : inputValue,
        operator : operator,
        result : result
    }
    logEntries.push(entry);
    console.log(logEntries);
}

function outputResultDescription(currentAnswer, operator, inputNumber){
    return `${currentAnswer} ${operator} ${inputNumber}`
}

function add (){
    getResult('ADD');
}
function subtract (){
    getResult('SUB');
}
function multiply (){
    getResult('MUL');
}
function divide (){
    getResult('DIV');
}
addBtn.addEventListener('click',add)
subtractBtn.addEventListener('click',subtract)
multiplyBtn.addEventListener('click',multiply)
divideBtn.addEventListener('click',divide)

