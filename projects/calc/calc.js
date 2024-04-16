document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display')
    const buttons = document.querySelectorAll('.btn')
    const clearButton = document.getElementById('clear')
    const equalsButton = document.getElementById('equals')
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.innerHTML
        const currentDisplayValue = display.value
        const lastChar = currentDisplayValue[currentDisplayValue.length - 1]
  
        // Проверяем, является ли последний символ оператором
        const isLastCharOperator = ['+', '-', '*', '/'].includes(lastChar)
        // Проверяем, является ли вводимый символ оператором
        const isValueOperator = ['+', '-', '*', '/'].includes(value)
  
        // Если последний символ и вводимый символ являются операторами, заменяем последний символ
        if (isLastCharOperator && isValueOperator) {
          display.value = currentDisplayValue.slice(0, -1) + value
        } else {
          display.value += value
        }
      })
    })
  
    clearButton.addEventListener('click', () => {
        display.value = ''
    })
  
    equalsButton.addEventListener('click', () => {
      try {
        display.value = eval(display.value)
      } catch (error) {
        display.value = `Ошибка в выражении: ${error.message}`
      }
    })
  })
  