function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(10)); // false
