const sumAll = function (n1, n2) {
  let sum = 0;
  if (n1 < n2 && n1 > 0 && Number.isInteger(n1) && Number.isInteger(n2)) {
    for (let i = n1; i <= n2; i++) {
      sum += i;
    }
  } else if (
    n2 < n1 &&
    n2 > 0 &&
    Number.isInteger(n1) &&
    Number.isInteger(n2)
  ) {
    for (let i = n2; i <= n1; i++) {
      sum += i;
    }
  } else return "ERROR"; // Should probably deal with this at the start. i.e. if not integers that are positive then return error.
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
