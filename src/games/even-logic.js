import playGame from '../index.js';
import getRandomNumber from '../utils/getRandomNumber.js';

const isEven = (number) => {
  const result = (number % 2 === 0) ? 'yes' : 'no';
  return result;
};

const makeQuestion = () => {
  const number = getRandomNumber();
  const correctAnswer = isEven(number);
  const question = number;
  return [correctAnswer, question];
};

const runEvenGame = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(rule, makeQuestion);
};

export default runEvenGame;
