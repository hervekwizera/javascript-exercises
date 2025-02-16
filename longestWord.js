function longestWord(sentence) {
    let word = sentence.split(' ');
    return word.reduce((longest,current)=>current.length>longest.length?current:longest, '');
}
let example = 'The goal is to achieve enlightenment (nirvana) by overcoming suffering and desire'
console.log(longestWord(example));
//#######addition of fuction that can replace that longest word in sentence with #########

function replace(ex) {
    let toArray = ex.split(' ');
    for (let i = 0; i < toArray.length; i++) {
         if (toArray[i] === longestWord(example)) {
            toArray[i] ='**********';
            return toArray.join(' ');
         }
         
    }

}
console.log(replace(example));

