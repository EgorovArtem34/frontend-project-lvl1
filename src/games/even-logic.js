import playGame from '../index.js';
import getRandomNumber from '../utils/getRandomNumber.js';

const isEven = (number) => {
  const result = (number % 2 === 0) ? 'yes' : 'no';
  return result;
};

const makeQuestion = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question);
  return [correctAnswer, question];
};

const runEvenGame = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(rule, makeQuestion);
};

export default runEvenGame;
