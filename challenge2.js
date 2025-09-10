function speedDetector(speed) {
  speed = Number(speed); //In case of a string input, converts it to a number

  const speedLimit = 70;
  const kmPerDemerit = 5;

  if (isNaN(speed) || speed < 0) {
    return "Invalid input. Please enter a valid speed.";
  } else if (speed <= speedLimit) {
    return "Ok";
  } else {
    const points = Math.floor((speed - speedLimit) / kmPerDemerit);
    return points > 12 ? "License suspended" : `Points: ${points}`;
  }
}

console.log(speedDetector(65));   // Ok
console.log(speedDetector(80));   // Points: 2
console.log(speedDetector(135));  // License suspended
console.log(speedDetector("90")); // Points: 4