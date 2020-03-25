const addButton = document.getElementById('add');
const subButton = document.getElementById('sub');
const mulButton = document.getElementById('mul');
const divButton = document.getElementById('div');
const powButton = document.getElementById('pow');
const equalButton = document.getElementById('equal');

const numButtons = document.querySelectorAll('.num-keys');

const clearButton = document.getElementById('c');
const allClearButton = document.getElementById('ac');
const display = document.getElementById('display');

let store = 0;
let op = '';
let runningCalc = document.getElementById("running-calc");

function add(a, b) {
    return (parseInt(a) + parseInt(b));
}

function subtract(a, b) {
    return (parseInt(a) - parseInt(b));
}

function multiply(a, b) {
    return (parseInt(a) * parseInt(b));
}

function divide(a, b) {
    return (parseInt(a) / parseInt(b));
}

function power(a, b) {
    return (parseInt(a) ** parseInt(b));
}

function operate(a, op, b) {
    if (op == '+')
        return add(a, b);
    else if (op == '-')
        return subtract(a, b);
    else if (op == '*')
        return multiply(a, b);
    else if (op == '/')
        return divide(a, b);
    else if (op == '^')
        return power(a, b);
}

function appendNum(button) {
    display.innerHTML += button.innerHTML;
}

numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        appendNum(button);
    });
});

allClearButton.addEventListener('click', () => {
    display.innerHTML = "";
    store = 0;
    runningCalc.innerHTML = "";
})

addButton.addEventListener('click', () => {
    if (op == '') op = '+';
    console.log(`store before = ${store}`);
    console.log(`op = ${op}`);
    console.log(`new entry = ${display.innerHTML}`)
    store = operate(store, op, display.innerHTML);
    console.log(`store after = ${store}`);
    op = '+';
    runningCalc.innerHTML += `${display.innerHTML}+`;
    display.innerHTML = "";
});

subButton.addEventListener('click', () => {
    if (op == '') op = '+';
    console.log(`store before = ${store}`);
    console.log(`op = ${op}`);
    console.log(`new entry = ${display.innerHTML}`)
    store = operate(store, op, display.innerHTML);
    console.log(`store after = ${store}`);
    op = '-';
    runningCalc.innerHTML += `${display.innerHTML}-`;
    display.innerHTML = "";
});

mulButton.addEventListener('click', () => {
    if (op == '') op = '+';
    console.log(`store before = ${store}`);
    console.log(`op = ${op}`);
    console.log(`new entry = ${display.innerHTML}`)
    store = operate(store, op, display.innerHTML);
    console.log(`store after = ${store}`);
    op = '*';
    runningCalc.innerHTML += `${display.innerHTML}*`;
    display.innerHTML = "";
});

divButton.addEventListener('click', () => {
    if (op == '') op = '+';
    console.log(`store before = ${store}`);
    console.log(`op = ${op}`);
    console.log(`new entry = ${display.innerHTML}`)
    store = operate(store, op, display.innerHTML);
    console.log(`store after = ${store}`);
    op = '/';
    runningCalc.innerHTML += `${display.innerHTML}/`;
    display.innerHTML = "";
});

powButton.addEventListener('click', () => {
    if (op == '') op = '+';
    console.log(`store before = ${store}`);
    console.log(`op = ${op}`);
    console.log(`new entry = ${display.innerHTML}`)
    store = operate(store, op, display.innerHTML);
    console.log(`store after = ${store}`);
    op = '^';
    runningCalc.innerHTML += `${display.innerHTML}^`;
    display.innerHTML = "";
});


equalButton.addEventListener('click', () => {
    console.log(`store before = ${store}`);
    console.log(`op = ${op}`);
    console.log(`new entry = ${display.innerHTML}`)
    store = operate(store, op, display.innerHTML);
    console.log(`store after = ${store}`);
    runningCalc.innerHTML = '';
    display.innerHTML = store;
    store = 0;
});