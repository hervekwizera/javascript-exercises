function objectToArray(obj) {
    return Object.entries(obj);
}

console.log(objectToArray({ name: "John", age: 25 })); 
// [["name", "John"], ["age", 25]]
