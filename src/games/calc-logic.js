import playGame from '../index.js';
import getRandomNumber from '../utils/getRandomNumber.js';

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const operationLength = operations.length - 1;
  const randomNumber = getRandomNumber(operationLength, 0);
  const result = operations[randomNumber];
  return result;
};

const getCorrectAnswer = (number1, number2, operation) => {
  let result = 0;
  if (operation === '+') {
    result = number1 + number2;
  } else if (operation === '-') {
    result = number1 - number2;
  } else {
    result = number1 * number2;
  }
  return result;
};

const makeQuestion = () => {
  const number1 = getRandomNumber(10);
  const number2 = getRandomNumber(10);
  const operation = getRandomOperation();
  const correctAnswer = `${getCorrectAnswer(number1, number2, operation)}`;
  const question = `${number1} ${operation} ${number2}`;
  return [correctAnswer, question];
};

const calcGame = () => {
  const rule = 'What is the result of the expression?';
  playGame(rule, makeQuestion);
};

export default calcGame;
