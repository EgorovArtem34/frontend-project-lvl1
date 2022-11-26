import playGame from '../index.js';
import getRandomNumber from '../utils/getRandomNumber.js';

const getCorrectAnswer = (number1, number2) => {
  const minNumber = Math.min(number1, number2);
  const leastCommonDivisor = 1;
  for (let i = minNumber; i >= 1; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      return i;
    }
  }
  return leastCommonDivisor;
};

const makeQuestion = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const correctAnswer = `${getCorrectAnswer(number1, number2)}`;
  const question = `${number1} ${number2}`;
  return [correctAnswer, question];
};

const runGcdGame = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  playGame(rule, makeQuestion);
};

export default runGcdGame;
