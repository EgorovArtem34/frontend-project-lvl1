import readlineSync from 'readline-sync';
export const sayHello = () => {
    let userName = readlineSync.question('May I have your name? ');
    return console.log(`Hello, ${userName}!`);
};
