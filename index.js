class Calculator {
    constructor(previousValue, currentValue){
        this.previousValue = currentValue;
        this.currentValue = previousValue;
    }

    clear() {
        this.currentValue = "";
        this.previousValue = "";
        this.operation = undefined;
    }

    delete() {

    }

    //allow only one ".", then show the number/symbol
    appendNumber() {
        if (number === "." && this.currentValue.includes(".")) {
            return this.currentValue = this.currentValue.toString() + number.toString();
        }
    }

    chooseOperation() {

    }

    compute() {

    }

    updateDisplay() {
        this.currentValue.innerText = this.currentValue;
    }
}

//for all the number
const numberButtons = document.querySelectorAll("[data-number]"); 
//for all the operation
const dataOperation = document.querySelectorAll("[data-operation]");
//for symbols
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousValue = document.querySelector("[data-previous]");
const currentValue = document.querySelector("[data-current]");

const calculator = new Calculator(previousValue, currentValue);

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})