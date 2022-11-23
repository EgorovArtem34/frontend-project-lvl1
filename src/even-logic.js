import readlineSync from 'readline-sync';

const getRandomNumber = () => {
  const randomNum = Math.floor(Math.random() * 999) + 1;
  return randomNum;
};
const isEven = (number) => {
  const result = (number % 2 === 0) ? 'yes' : 'no';
  return result;
};

function playRound() {
  const number = getRandomNumber();
  console.log(`Question: ${number}`);
  const answerPerson = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(number);
  if (answerPerson === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answerPerson}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
}

const playGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const result = playRound();
    if (!result) {
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playGame;
