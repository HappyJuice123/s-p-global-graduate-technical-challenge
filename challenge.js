function getCharacterFrequency(str) {
  const upperCasedStrNoSpaces = str.split(" ").join("").toUpperCase();

  const characterFrequency = {};

  let result = "";

  for (i = 0; i < upperCasedStrNoSpaces.length; i++) {
    if (!characterFrequency[upperCasedStrNoSpaces[i]]) {
      characterFrequency[upperCasedStrNoSpaces[i]] = 1;
    } else {
      characterFrequency[upperCasedStrNoSpaces[i]]++;
    }
  }

  for (const letter in characterFrequency) {
    if (letter !== upperCasedStrNoSpaces[0]) {
      result += ", ";
    }

    result += `${letter} : ${characterFrequency[letter]}`;
  }

  console.log(characterFrequency);

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

    if (parenthesisCount < 0) {
      return "invalid";
    }
  }
  return "valid";
}

module.exports = { getCharacterFrequency, validatePairs };
