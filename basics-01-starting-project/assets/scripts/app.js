let defaultAnswer = 0;
let currentAnswer = defaultAnswer;
let logEntries = [];

function getUserInputNumber(){
    return parseInt(userInput.value);
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
    const enteredValue = getUserInputNumber();
    const initialValue = currentAnswer;
    currentAnswer += enteredValue;
    outputResult(currentAnswer, outputResultDescription(initialValue, '+', getUserInputNumber()))
    writeToLog(initialValue, enteredValue, 'ADD', currentAnswer);
}
function subtract (){
    const enteredValue = getUserInputNumber();
    const initialValue = currentAnswer;
    currentAnswer = currentAnswer - getUserInputNumber();
    outputResult(currentAnswer, outputResultDescription(initialValue, '-', getUserInputNumber()))
    writeToLog(initialValue,enteredValue, 'SUB', currentAnswer);
}
function multiply (){
    const enteredValue = getUserInputNumber();
    const initialValue = currentAnswer;
    currentAnswer = currentAnswer * getUserInputNumber();
    outputResult(currentAnswer, outputResultDescription(initialValue, '*', getUserInputNumber()))
    writeToLog(initialValue,enteredValue, 'MUL', currentAnswer);
}
function divide (){
    const enteredValue = getUserInputNumber();
    const initialValue = currentAnswer;
    currentAnswer = currentAnswer / getUserInputNumber();
    outputResult(currentAnswer, outputResultDescription(initialValue, '/', getUserInputNumber()))
    writeToLog(initialValue,enteredValue, 'DIV', currentAnswer);
}
addBtn.addEventListener('click',add)
subtractBtn.addEventListener('click',subtract)
multiplyBtn.addEventListener('click',multiply)
divideBtn.addEventListener('click',divide)

