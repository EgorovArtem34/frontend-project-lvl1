import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isEven = (number) => {
  const result = (number % 2 === 0) ? 'yes' : 'no';
  return result;
};

const makeQuestion = () => {
  const number = getRandomNumber();
  const correctAnswer = isEven(number);
  const numbersForQuest = number;
  return [correctAnswer, numbersForQuest];
};

const evenGame = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(rule, makeQuestion);
};

export default evenGame;
