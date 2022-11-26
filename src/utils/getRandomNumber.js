const getRandomNumber = (maxRandomNumber = 100) => {
  const randomNum = Math.floor(Math.random() * maxRandomNumber) + 1;
  return randomNum;
};

export default getRandomNumber;
