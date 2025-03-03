function hasUniqueChars(str) {
    let charMap = {}; // Store character occurrences

    for (let char of str) {
        if (charMap[char]) return false; // If already exists, return false
        charMap[char] = true; // Mark character as seen
    }

    return true; // All characters are unique
}

// Test cases
console.log(hasUniqueChars("abcdef"));  // true
console.log(hasUniqueChars("hello"));   // false
console.log(hasUniqueChars("123456"));  // true
console.log(hasUniqueChars("aA"));      // true
console.log(hasUniqueChars("aba"));     // false
