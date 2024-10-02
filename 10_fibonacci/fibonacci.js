const fibonacci = function (n) {
  n = Number(n);
  if (n === 0) return 0;
  if (n < 0) return "OOPS";
  let fib = [1, 1];

  if (n >= 2) {
    let i = 2;
    while (i <= n) {
      //   first = fib[-2]; Can't have negative indexing on array unles syou use .at()
      first = fib.at(-2);
      second = fib.at(-1);
      fib.push(first + second);
      i++;
    }
  }
  return fib[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
