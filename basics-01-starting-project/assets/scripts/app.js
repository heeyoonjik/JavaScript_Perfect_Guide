let defaultAnswer = 0;
let currentAnswer = defaultAnswer;
currentAnswer = (currentAnswer + 10) * 3 / 2 -1;

function add (a, b){
    result = a+b;
    alert(result);
}

add(1,2);

let calculationDescription = `(${currentAnswer} + 10) * 3 / 2 -1`;
outputResult(currentAnswer, calculationDescription);