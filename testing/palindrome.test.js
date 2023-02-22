const palindromeChecker = require("../palindrome");

describe("Palindrome Checker", () => {
  test("is a function", () => {
    expect(typeof palindromeChecker).toBe("function");
  });
    
  test("returns a boolean", () => {
    expect(typeof palindromeChecker('racecar')).toBe("boolean");
    expect(typeof palindromeChecker('test')).toBe("boolean");
  });
    
  test("returns true if argument is a palindrome", () => {
    expect(palindromeChecker('racecar')).toBe(true);
    expect(palindromeChecker('A Man a Plan a Canal Panama')).toBe(true);
  });
    
  test("returns true if argument is a palindrome", () => {
    expect(palindromeChecker('racecar')).toBe(true);
    expect(palindromeChecker('A Man a Plan a Canal Panama')).toBe(true);
  });
    
  test("returns false if argument is not a palindrome", () => {
    expect(palindromeChecker('racecars')).toBe(false);
    expect(palindromeChecker('hello world')).toBe(false);
  });
});
