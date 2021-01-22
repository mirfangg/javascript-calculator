let trailingResult = 0;
let operationOptions = ['divide', 'multiply', 'subtract', 'add'];
let workingOperation = "";

function updateValue(input) {
    let display = document.querySelector("#display");

    if (display.innerHTML === "0" && operationOptions.indexOf(input) === -1) {
        if (input === "decimal") {
            display.innerHTML = "0.";
        } else if (input === "negative-value") {
            if (display.innerHTML.indexOf("-1") === -1) {
                display.innerHTML = "-" + display.innerHTML
            } else if (display.innerHTML.indexOf("-1" > -1)) {
                display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
            }
        } else {
            display.innerHTML = input;
        }
    } else if (operationOptions.indexOf(input) >= 0) {

        if (trailingResult === display.innerHTML) {
            // Operand button pressed twice exeception
            workingOperation = input;
        } else if (workingOperation === "") {
            // Dealing without an operand
            workingOperation = input;
            trailingResult = display.innerHTML;

            display.innerHTML = 0;
        } else {
            // Dealing with a set operand
            trailingResult = calculate(trailingResult, display.innerHTML, workingOperation);

            display.innerHTML = 0;
            workingOperation = input;
        }
    } else if (input === "equals") {
        display.innerHTML = calculate(trailingResult, display.innerHTML, workingOperation);
        trailingResult = 0;
        workingOperation = "";

    } else if (input === "decimal") {
        // console.log('decimal clicked');
        if (display.innerHTML.indexOf(".") === -1) {
            display.innerHTML += ".";
        }
        // console.log("decimal skipped because decimal already in number.");
    } else if (input === "negative-value") {
        // console.log("negative-value selected");
        if (display.innerHTML.indexOf("-1") === -1) {
            display.innerHTML = "-" + display.innerHTML
        } else if (display.innerHTML.indexOf("-1" > -1)) {
            display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
        }
    } else {
        display.innerHTML += input;
    }
}

function clearValue() {
    let display = document.querySelector("#display");
    trailingResult = 0;
    display.innerHTML = 0;
}

function calculate(firstNum, secondNum, operation) {
    let result;
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    switch (operation) {
        case "add":
            result = firstNum + secondNum;
            break;
        case "subtract":
            result = firstNum - secondNum;
            break;
        case "multiply":
            result = firstNum * secondNum;
            break;
        case "divide":
            result = firstNum / secondNum;
            break;
        default:
            console.log("Error calculation");
    }
    return result.toString();
}