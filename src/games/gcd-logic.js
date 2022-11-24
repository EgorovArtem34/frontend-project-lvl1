import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const getCorrectAnswer = (number1, number2) => {
  const maxNumber = Math.max(number1, number2);
  let result = 1;
  for (let i = maxNumber; i >= 1; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      result = i;
      return result;
    }
  }
  return result;
};

const gameSettings = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const correctAnswer = `${getCorrectAnswer(number1, number2)}`;
  const numbersForQuest = `${number1} ${number2}`;
  return [correctAnswer, numbersForQuest];
};

const gcdGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  playGame(rules, gameSettings);
};

export default gcdGame;
