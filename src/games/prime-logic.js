import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isPrime = (number) => {
  let result = 'yes';
  for (let i = 2, max = Math.sqrt(number); i <= max; i += 1) {
    if (number % i === 0) {
      result = 'no';
    }
  }
  return result;
};

const gameSettings = () => {
  const number = getRandomNumber();
  const correctAnswer = isPrime(number);
  const numbersForQuest = number;
  return [correctAnswer, numbersForQuest];
};

const primeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(rules, gameSettings);
};

export default primeGame;
