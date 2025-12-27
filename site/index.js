import * as dice from "./dice.js";

console.log("Hello world");

const targetNumberSpan = document.getElementById('target-number');

for (let i = 1; i <= 20; i++) {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'target-number';
    input.required = true;
    label.appendChild(input);
    label.appendChild(document.createTextNode(i));
    targetNumberSpan.appendChild(label);
}
