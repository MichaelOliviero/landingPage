class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText
        this.currentOperandText = currentOperandText
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') { this.compute() }

        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
        case '+':
            computation = prev + current
            break
        case '-':
            computation = prev - current
            break
        case 'x':
            computation = prev * current
            break
        case '÷':
            computation = prev / current
            break
        default:
            return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
          integerDisplay = ''
        } else {
          integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
          return `${integerDisplay}.${decimalDigits}`
        } else {
          return integerDisplay
        }
      }

    updateDisplay() {
        this.currentOperandText.innerText = this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) {
        this.previousOperandText.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else {
        this.previousOperandText.innerText = ''
      }
    }
}

const numberButtons = document.querySelectorAll('[dataNumber]');
const operationButtons = document.querySelectorAll('[dataOperation]');
const equalsButton = document.querySelector('[dataEquals]');
const deleteButton = document.querySelector('[dataDelete]');
const clearButton = document.querySelector('[dataClear]');
const previousOperandText = document.querySelector('[dataPreviousOperand]');
const currentOperandText = document.querySelector('[dataCurrentOperand]');

const calc = new Calculator(previousOperandText, currentOperandText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.appendNumber(button.innerText)
        calc.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.chooseOperation(button.innerText)
        calc.updateDisplay()
    })
})
  
equalsButton.addEventListener('click', button => {
    calc.compute()
    calc.updateDisplay()
})
  
clearButton.addEventListener('click', button => {
    calc.clear()
    calc.updateDisplay()
})
  
deleteButton.addEventListener('click', button => {
    calc.delete()
    calc.updateDisplay()
})