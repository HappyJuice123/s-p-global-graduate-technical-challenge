const { letterCount, validatePairs } = require("../challenge");

describe("letterCount", () => {
  test("should return an empty string when passed an empty string", () => {
    expect(letterCount("")).toBe("");
  });
  test("should return a string with the letter and count when passed a capital letter", () => {
    expect(letterCount("A")).toBe("A : 1");
  });
  test("should return a string with all the letters capitalised and count when passed a string with one lowercase letter", () => {
    expect(letterCount("a")).toBe("A : 1");
  });
  test("should return a string with all the letters capitalised and count when passed a string with two different lowercase letter", () => {
    expect(letterCount("ab")).toBe("A : 1, B : 1");
  });
  test("should return a string with all the letters capitalised and count when passed a string with two of the same letter, with one as an uppercase letter", () => {
    expect(letterCount("Aa")).toBe("A : 2");
  });
  test('should return a string with all the letters capitalised and count when passed a string of "Hello"', () => {
    expect(letterCount("Hello")).toBe("H : 1, E : 1, L : 2, O : 1");
  });
  test('should return a string with all the letters capitalised and count when passed a string of "Abracadabra"', () => {
    expect(letterCount("Abracadabra")).toBe(
      "A : 5, B : 2, R : 2, C : 1, D : 1"
    );
  });
});

describe("validatePairs", () => {
  test("should return valid when passed a string of a single balanced pair of parenthesis", () => {
    expect(validatePairs("()")).toBe("valid");
  });
  test("should return invalid when passed a string of a single unbalanced pair of parenthesis", () => {
    expect(validatePairs(")(")).toBe("invalid");
  });
  test("should return valid when passed a string of a nested balanced paired of parentheses", () => {
    expect(validatePairs("(())")).toBe("valid");
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
});
