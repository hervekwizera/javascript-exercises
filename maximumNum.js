function maxNum(arr) {
    let largest = arr.reduce((max,num)=>
        (num > max ? num:max),arr[0]);
    return largest;
}

let arr1 = [1,2,3,4,5,28,34,17,13,14]

console.log(maxNum(arr1));

// #################################second way######################################

function large(arr) {
  return Math.max(...arr);
}
console.log('the largest number in array',large(arr1));
