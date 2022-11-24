import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameSettings = () => {
  const startProgression = getRandomNumber(15);
  const stepProgression = getRandomNumber(5);
  const lengthProgression = 10;
  const MissedNumber = getRandomNumber(lengthProgression);
  const progressions = [];
  let correctAnswer = '';
  for (let i = 1; i <= lengthProgression; i += 1) {
    const actualNumber = startProgression + ((i - 1) * stepProgression);
    if (i === MissedNumber) {
      progressions.push('..');
      correctAnswer = `${actualNumber}`;
    } else {
      progressions.push(actualNumber);
    }
  }
  const result = progressions.join(' ');
  const numbersForQuest = `${result}`;
  return [correctAnswer, numbersForQuest];
};

const progressionGame = () => {
  const rules = 'What number is missing in the progression?';
  playGame(rules, gameSettings);
};

export default progressionGame;
