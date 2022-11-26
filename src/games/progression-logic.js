import playGame from '../index.js';
import getRandomNumber from '../utils/getRandomNumber.js';

const makeProgression = (lengthProgression, startProgression, stepProgression) => {
  const progressions = [];
  for (let i = 1; i <= lengthProgression; i += 1) {
    const actualNumber = startProgression + ((i - 1) * stepProgression);
    progressions.push(actualNumber);
  }
  return progressions;
};

const makeQuestion = () => {
  const startProgression = getRandomNumber(15);
  const stepProgression = getRandomNumber(5);
  const lengthProgression = 10;
  const progressions = makeProgression(lengthProgression, startProgression, stepProgression);
  const missedNumber = getRandomNumber(lengthProgression - 1, 0);
  const correctAnswer = progressions[missedNumber];
  progressions[missedNumber] = '..';
  const question = progressions.join(' ');
  return [`${correctAnswer}`, question];
};

const runProgressionGame = () => {
  const rule = 'What number is missing in the progression?';
  playGame(rule, makeQuestion);
};

export default runProgressionGame;
