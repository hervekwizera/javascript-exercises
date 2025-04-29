function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

console.log(capitalizeWords("hello world!")); // "Hello World!"
//################################
// alternative way
function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .reduce((acc, word) => acc + (acc ? ' ' : '') + word.charAt(0).toUpperCase() + word.slice(1), '');
}

console.log(capitalizeWords("hello world!")); // "Hello World!"
