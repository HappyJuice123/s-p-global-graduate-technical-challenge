function letterCount(str) {
  const upperCasedStr = str.toUpperCase();

  const letterFrequency = {};

  let result = "";

  for (i = 0; i < upperCasedStr.length; i++) {
    if (!letterFrequency[upperCasedStr[i]]) {
      letterFrequency[upperCasedStr[i]] = 1;
    } else {
      letterFrequency[upperCasedStr[i]]++;
    }
  }

  for (const letter in letterFrequency) {
    if (letter !== upperCasedStr[0]) {
      result += ", ";
    }

    result += `${letter} : ${letterFrequency[letter]}`;
  }

  return result;
}

function validatePairs(str) {
  let parenthesisCount = 0;

  for (i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      parenthesisCount++;
    } else if (str[i] === ")") {
      parenthesisCount--;
    }

    console.log(str, str[i], parenthesisCount);

    if (parenthesisCount < 0) {
      return "invalid";
    }
  }
  return "valid";
}

module.exports = { letterCount, validatePairs };
