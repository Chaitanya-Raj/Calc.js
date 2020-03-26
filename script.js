const opButtons = document.querySelectorAll('.op-keys');
const equalButton = document.getElementById('equal');

const numButtons = document.querySelectorAll('.num-keys');

const deleteButton = document.getElementById('del');
const allClearButton = document.getElementById('ac');

const display = document.getElementById('display');
const runningCalc = document.getElementById("running-calc");

function compute() {
    let computation;
    let prev = parseFloat(runningCalc.innerText);
    let current = parseFloat(display.innerText);
    if (isNaN(prev) || isNaN(current)) return;
    switch (op) {
        case "+":
            computation = prev + current;
            break;
        case "-":
            computation = prev - current;
            break;
        case "*":
            computation = prev * current;
            break;
        case "/":
            computation = prev / current;
            break;
        case "^":
            computation = prev ** current;
            break;
        default:
            return;
    }
    display.innerText = computation;
    op = undefined;
    runningCalc.innerText = "";
}

numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.innerText);
        console.log(display.innerText);
        if (button.innerText === "." && display.innerText.includes("."))
            return;
        display.innerText += button.innerText;
    });
});

let op;

opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (display.innerText === "") return;
        if (runningCalc.innerText !== "") {
            compute();
        }
        op = button.innerText;
        runningCalc.innerText = display.innerText;
        display.innerText = "";
        if (op != null) {
            runningCalc.innerText = `${runningCalc.innerText} ${op}`;
        }
    });
});

equalButton.addEventListener('click', () => {
    compute();
});

allClearButton.addEventListener('click', () => {
    display.innerText = "";
    runningCalc.innerText = "";
    op = undefined;
});

deleteButton.addEventListener('click', () => {
    display.innerText = display.innerText.slice(0, -1);
});
