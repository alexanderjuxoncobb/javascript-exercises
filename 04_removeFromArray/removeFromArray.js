const removeFromArray = function (array, ...args) {
  for (const arg of args) {
    const indices = [];
    array.forEach((item, index) => {
      if (arg === item) {
        indices.push(index);
      }
    });
    let indexCount = 0;
    for (index of indices) {
      array.splice(index - indexCount, 1);
      indexCount++;
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;


// Better would have been  array.forEach((item) => {
    // push every element into the new array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
    // if (!args.includes(item)) {
    //   newArray.push(item);
    // }
