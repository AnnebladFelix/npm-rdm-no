function getRandomNumber(lowest, highest) {
  // Ensure the lowest value is less than the highest value
  if (lowest > highest) {
    [lowest, highest] = [highest, lowest]; // Swap the values
  }

  // Calculate the range
  const range = highest - lowest + 1;

  // Generate a random number within the range
  const randomNumber = Math.floor(Math.random() * range) + lowest;

  return randomNumber;
}

module.exports = getRandomNumber
