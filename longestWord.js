function longestWord(sentence) {
    let word = sentence.split(' ');
    return word.reduce((longest,current)=>current.length>longest.length?current:longest, '');
}
let example = ' The goal is to achieve enlightenment (nirvana) by overcoming suffering and desire'
console.log(longestWord(example));
