const getRandomNumber = (number = 100) => {
  const randomNum = Math.floor(Math.random() * number) + 1;
  return randomNum;
};

export default getRandomNumber;
