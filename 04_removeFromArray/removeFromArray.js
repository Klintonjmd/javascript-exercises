const removeFromArray = function (array, ...args) {
  //initialize the result array
  let newArray = [];

  //for each loop over the input array, checking if the value is in args
  //if not, we put the value in the result array
  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
