const addButton = document.getElementById('add');
const subButton = document.getElementById('sub');
const mulButton = document.getElementById('mul');
const divButton = document.getElementById('div');
const powButton = document.getElementById('pow');
const equalButton = document.getElementById('equal');

const numButton1 = document.getElementById('one');
const numButton2 = document.getElementById('two');
const numButton3 = document.getElementById('three');
const numButton4 = document.getElementById('four');
const numButton5 = document.getElementById('five');
const numButton6 = document.getElementById('six');
const numButton7 = document.getElementById('seven');
const numButton8 = document.getElementById('eight');
const numButton9 = document.getElementById('nine');
const numButton0 = document.getElementById('zero');

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

numButton0.addEventListener('click', () => {
    display.innerHTML += numButton0.innerHTML;
});

numButton1.addEventListener('click', () => {
    display.innerHTML += numButton1.innerHTML;
});

numButton2.addEventListener('click', () => {
    display.innerHTML += numButton2.innerHTML;
});

numButton3.addEventListener('click', () => {
    display.innerHTML += numButton3.innerHTML;
});

numButton4.addEventListener('click', () => {
    display.innerHTML += numButton4.innerHTML;
});

numButton5.addEventListener('click', () => {
    display.innerHTML += numButton5.innerHTML;
});

numButton6.addEventListener('click', () => {
    display.innerHTML += numButton6.innerHTML;
});

numButton7.addEventListener('click', () => {
    display.innerHTML += numButton7.innerHTML;
});

numButton8.addEventListener('click', () => {
    display.innerHTML += numButton8.innerHTML;
});

numButton9.addEventListener('click', () => {
    display.innerHTML += numButton9.innerHTML;
});

clearButton.addEventListener('click', () => {
    display.innerHTML = "";
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

equalButton.addEventListener('click', () => {
    console.log(`store before = ${store}`);
    console.log(`op = ${op}`);
    console.log(`new entry = ${display.innerHTML}`)
    store = operate(store, op, display.innerHTML);
    console.log(`store after = ${store}`);
    display.innerHTML = store;
});