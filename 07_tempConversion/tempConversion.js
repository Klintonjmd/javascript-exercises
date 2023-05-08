const convertToCelsius = function (temperature) {
  let celsius = Math.round((temperature - 32) * (5 / 9) * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function (temperature) {
  let fahrenheit = Math.round((temperature * (9 / 5) + 32) * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
