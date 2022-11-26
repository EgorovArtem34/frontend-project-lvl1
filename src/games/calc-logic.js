import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const randomNumber = getRandomNumber(3) - 1;
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

const gameSettings = () => {
  const number1 = getRandomNumber(10);
  const number2 = getRandomNumber(10);
  const operation = getRandomOperation();
  const correctAnswer = `${getCorrectAnswer(number1, number2, operation)}`;
  const numbersForQuest = `${number1} ${operation} ${number2}`;
  return [correctAnswer, numbersForQuest];
};

const calcGame = () => {
  const rule = 'What is the result of the expression?';
  playGame(rule, gameSettings);
};

export default calcGame;
