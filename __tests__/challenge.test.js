const { getCharacterFrequency, validatePairs } = require("../challenge");

describe("getCharacterFrequency", () => {
  test("should return an empty string when passed an empty string", () => {
    expect(getCharacterFrequency("")).toBe("");
  });
  test("should return a string with the character frequencies when passed a capital letter", () => {
    expect(getCharacterFrequency("A")).toBe("A : 1");
  });
  test("should return a string with all the letters capitalised and frequency when passed a string with one lowercase letter", () => {
    expect(getCharacterFrequency("a")).toBe("A : 1");
  });
  test("should return a string with all the letters capitalised and frequency when passed a string with two different lowercase letter", () => {
    expect(getCharacterFrequency("ab")).toBe("A : 1, B : 1");
  });
  test("should return a string with all the letters capitalised and frequency when passed a string with two of the same letter, with one as an uppercase letter", () => {
    expect(getCharacterFrequency("Aa")).toBe("A : 2");
  });
  test('should return a string with all the letters capitalised and frequency when passed a string of "Hello"', () => {
    expect(getCharacterFrequency("Hello")).toBe("H : 1, E : 1, L : 2, O : 1");
  });
  test("should return a string with all the characters frequency when passed a string a number", () => {
    expect(getCharacterFrequency("1")).toBe("1 : 1");
  });
  test("should return a string with all the characters frequency ignoring spaces when passed a string with letters and spaces", () => {
    expect(getCharacterFrequency("hey you")).toBe(
      "H : 1, E : 1, Y : 2, O : 1, U : 1"
    );
  });
  test("should return a string with all the character frequencies ignoring spaces when passed a string of alphanumeric chracters with spaces", () => {
    expect(getCharacterFrequency("1 hi 2")).toBe("1 : 1, 2 : 1, H : 1, I : 1");
  });
});

describe("validatePairs", () => {
  test("should return invalid when passed a string with no parentheses", () => {
    expect(validatePairs("")).toBe("invalid");
  });
  test("should return valid when passed a string of a single balanced pair of parenthesis", () => {
    expect(validatePairs("()")).toBe("valid");
  });
  test("should return invalid when passed a string of a one type of parenthesis", () => {
    expect(validatePairs("(")).toBe("invalid");
  });
  test("should return invalid when passed a string of a single unbalanced pair of parenthesis", () => {
    expect(validatePairs(")(")).toBe("invalid");
  });
  test("should return valid when passed a string of a nested balanced paired of parentheses", () => {
    expect(validatePairs("(())")).toBe("valid");
  });
  test("should return invalid when passed a string of a nested unbalanced paired of parentheses", () => {
    expect(validatePairs("(()()))")).toBe("invalid");
  });
  test("should return valid when passed a string of two non nested balanced paired of parentheses", () => {
    expect(validatePairs("()()")).toBe("valid");
  });
  test("should return valid when passed a string of nested balanced pairs and a non nested balanced pair of parentheses", () => {
    expect(validatePairs("((()))()")).toBe("valid");
  });
  test("should return invalid when passed a string of nested balanced pairs and non nested unbalanced pair of parentheses", () => {
    expect(validatePairs("((())))(")).toBe("invalid");
  });
  test("should return valid when passed a string of balanced pairs of parentheses mixed with characters", () => {
    expect(validatePairs("(a)")).toBe("valid");
  });
  test("should return invalid when passed a string of unbalanced pairs of parentheses mixed with characters", () => {
    expect(validatePairs("()a)")).toBe("invalid");
  });
});
