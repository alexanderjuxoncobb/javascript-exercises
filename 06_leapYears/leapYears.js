const leapYears = function (year) {
  if (!(year % 4)) {
    if (!(year % 100) && year % 400) {
      return false;
    }
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;

// could have done if (!(year%4) && ((year%100) || !(year%400)))
// === if is divisble by 4 and isn't divisible by 100 or, if it is (since OR continues to find a truthy and if it is then it's falsey), then it's also divisble by 400)
