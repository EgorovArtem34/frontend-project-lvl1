import playGame from '../index.js';
import getRandomNumber from '../utils/getRandomNumber.js';

const makeProgression = (lengthProgression, startProgression, stepProgression) => {
  const progression = [];
  for (let i = 1; i <= lengthProgression; i += 1) {
    const actualNumber = startProgression + ((i - 1) * stepProgression);
    progression.push(actualNumber);
  }
  return progression;
};

const makeQuestion = () => {
  const startProgression = getRandomNumber(15);
  const stepProgression = getRandomNumber(5);
  const lengthProgression = 10;
  const progression = makeProgression(lengthProgression, startProgression, stepProgression);
  const missedIndex = getRandomNumber(lengthProgression - 1, 0);
  const correctAnswer = progression[missedIndex];
  progression[missedIndex] = '..';
  const question = progression.join(' ');
  return [`${correctAnswer}`, question];
};

const runProgressionGame = () => {
  const rule = 'What number is missing in the progression?';
  playGame(rule, makeQuestion);
};

export default runProgressionGame;
