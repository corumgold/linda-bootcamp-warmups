function palindromeChecker(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
    return true;
  }
}

console.log(palindromeChecker("racecar")); // true
console.log(palindromeChecker("Stanley")); // false
console.log(palindromeChecker("Abba")); // true
console.log(palindromeChecker("a man a plan a canal panama")); // true
console.log(palindromeChecker("a man a plan a canal panama")); // true
