var display = document.querySelector('#display');
function press(numbers) {
    if (display.textContent === "0") {
    display.textContent = numbers;
    }else{
        display.textContent += numbers;
    }
}

function clr() {
    display.innerHTML = '0';
}
function setOP(Operators) {
    display.textContent += Operators;
    
}
function calculate() {
    display.textContent = eval(display.textContent);
}
