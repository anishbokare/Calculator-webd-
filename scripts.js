const calculatorScreen = document.getElementById('calculator-screen');
const calculatorKeys = document.querySelectorAll('.calculator-keys button');

let result = '';
let operator = '';
let prevOperator = '';

calculatorKeys.forEach((button) => {
  button.addEventListener('click', (e) => {
    const keyValue = e.target.textContent;
    switch (keyValue) {
      case 'del':
        result = result.slice(0, -1);
        calculatorScreen.value = result;
        break;
      case 'clear':
        result = '';
        calculatorScreen.value = '';
        break;
      case 'ans':
        // todo: implement ans functionality
        break;
      case '=':
      case 'ENTER':
        try {
          result = eval(result);
          calculatorScreen.value = result;
        } catch (e) {
          calculatorScreen.value = 'Error';
        }
        break;
      case '+':
      case '-':
      case '×':
      case '÷':
      case '%':
        operator = keyValue;
        prevOperator = operator;
        result += ` ${keyValue} `;
        calculatorScreen.value = result;
        break;
      default:
        result += keyValue;
        calculatorScreen.value = result;
    }
  });
});
