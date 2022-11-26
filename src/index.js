import readlineSync from 'readline-sync';

const playGame = (rule, makeQuestion) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  const maxCountRounds = 3;
  for (let i = 1; i <= maxCountRounds; i += 1) {
    const [correctAnswer, numbersForQuest] = makeQuestion();
    console.log(`Question: ${numbersForQuest}`);
    const answerPerson = readlineSync.question('Your answer: ');
    if (answerPerson === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answerPerson}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playGame;
