import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isEven = (number) => {
  const result = (number % 2 === 0) ? 'yes' : 'no';
  return result;
};

const gameSettings = () => {
  const number = getRandomNumber();
  const correctAnswer = isEven(number);
  const numbersForQuest = number;
  return [correctAnswer, numbersForQuest];
};

const evenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(rules, gameSettings);
};

export default evenGame;
