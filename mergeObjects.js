function mergeObjects(arr) {
    return arr.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}

console.log(mergeObjects([{ a: 1 }, { b: 2 }, { c: 3 }])); 
// { a: 1, b: 2, c: 3 }
