const sumAll = function (number1, number2) {
  if (
    typeof number1 !== "number" ||
    typeof number2 !== "number" ||
    number1 < 0 ||
    number2 < 0
  ) {
    return "ERROR";
  }

  let smallerNumber;
  let largerNumber;
  if (number1 < number2) {
    smallerNumber = number1;
    largerNumber = number2;
  } else {
    smallerNumber = number2;
    largerNumber = number1;
  }

  let result = smallerNumber;
  for (let i = smallerNumber + 1; i <= largerNumber; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
