import playGame from '../index.js';
import getRandomNumber from '../utils/getRandomNumber.js';

const makeQuestion = () => {
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
  const question = `${result}`;
  return [correctAnswer, question];
};

const progressionGame = () => {
  const rule = 'What number is missing in the progression?';
  playGame(rule, makeQuestion);
};

export default progressionGame;
