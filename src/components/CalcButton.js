import { Button } from 'react-bootstrap'

function CalcButton({value, buttonValue, setButtonValue, isAnswered, setIsAnswered, operatorClicked, setOperatorClicked, decimalClicked, setDecimalClicked}) {

  // I need to make these functional
  const buttonsToFix = ['(', ')', 'M']

  const operators = ['-', '+', '*', '/']
  let stringyAnswer;

  function calculate() {
    let operator;
    let answer;
    for (let char of buttonValue) {
      if (operators.includes(char)) {
        operator = char;
      }
    }
    let nums = buttonValue.join('').split(operator);
    switch(operator) {
      case '+':
        answer = +nums[0] + +nums[1];
        break;
      case '-':
        answer = +nums[0] - +nums[1];
        break;
      case '*':
        answer = +nums[0] * +nums[1];
        break;
      case '/':
        answer = +nums[0] / +nums[1];
        break;
      default:
        answer = 'Error';
    }
    stringyAnswer = answer.toString().split('');
    setButtonValue(stringyAnswer);
  }

  function handleClick() {
    if (isAnswered && (typeof(value) === 'number' || value === '.')) {
      setButtonValue(value.toString());
      setIsAnswered(false);
      setOperatorClicked(false);
      return;
    }
    if (value === '.') {
      setButtonValue([...buttonValue, value]);
      setDecimalClicked(true);
    }
    if (buttonValue[0] === '0' && buttonValue.length <=1) {
      if (typeof(value) !== 'number') {
        return;
      }
      setButtonValue(value.toString());
    } else if (value === 'C') {
      window.location.reload();
    } else if (operators.includes(value)) {
      setButtonValue([...buttonValue, value.toString()]);
      setOperatorClicked(true);
    } else if (value === '=') {
      calculate();
      setIsAnswered(true);
      setDecimalClicked(false);
    } else {
      setButtonValue([...buttonValue, value.toString()]);
    }
  }
  return (
    <Button 
      className='button'
      variant={
        typeof(value) === 'number' ? 'primary'
        : value === 'C' || value === '=' ? 'danger'
        : 'success'
      }
      size='lg'
      onClick={() => handleClick()}
      disabled={
        operators.includes(value) ? operatorClicked
        : value === '.' ? decimalClicked 
        : buttonsToFix.includes(value) ? true
        : false
      }
    >
      {value}
    </Button>
  );
}

export default CalcButton