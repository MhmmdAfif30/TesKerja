function findLongestWord(sentence) {
    const words = sentence.split(' ');

    let maxLength = 0;
    let longestWord = '';

    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
            longestWord = word;
        }
    }

    return longestWord;
}

const sentence = "Berikut Ini Merupakan Hasil Pengerjaan Backend Test";
const longestWord = findLongestWord(sentence);
console.log(longestWord);
