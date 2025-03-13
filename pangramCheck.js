function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return [...alphabet].every(letter => sentence.toLowerCase().includes(letter));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
console.log(isPangram("Hello world")); // false
