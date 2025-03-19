function arrayIntersection(...arrays) {
    return arrays.reduce((acc, arr) => acc.filter(el => arr.includes(el)));
}

console.log(arrayIntersection([1, 2, 3, 4], [2, 3, 5], [2, 3, 6])); // [2, 3]
