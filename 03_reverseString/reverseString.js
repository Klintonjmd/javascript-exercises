const reverseString = function (input) {
  let res = "";
  for (let i = input.length; i > -1; i--) {
    res += input.charAt(i);
  }
  return res;
};

// Do not edit below this line
module.exports = reverseString;
