function reverseAlphabet(str) {
  const letters = str.replace(/\d+/g, "");

  const reversedLetters = letters.split("").reverse().join("");

  const number = str.match(/\d+/g) ? str.match(/\d+/g).join("") : "";

  return reversedLetters + number;
}

const result = reverseAlphabet("NEGIE1");
console.log(result);
