import { Button } from 'react-bootstrap'

function CalcButton({value, buttonValue, setButtonValue, isAnswered, setIsAnswered, operatorClicked, setOperatorClicked}) {

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
    if (isAnswered && typeof(value) === 'number') {
      setButtonValue(value.toString());
      setIsAnswered(false);
      setOperatorClicked(false);
      return;
    }
    if (buttonValue[0] === '0') {
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
        operators.includes(value) ? operatorClicked : false
      }
    >
      {value}
    </Button>
  );
}

export default CalcButton