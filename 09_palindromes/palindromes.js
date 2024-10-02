const palindromes = function (str) {
  let cleanStr = str
    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g, "")
    .toLowerCase();
  console.log(cleanStr);
  console.log(cleanStr.split("").reverse().join(""));
  console.log(cleanStr.split("").reverse().join("") === cleanStr);
  return cleanStr.split("").reverse().join("") === cleanStr;
};

// Do not edit below this line
module.exports = palindromes;
