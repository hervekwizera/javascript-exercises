function sumArray(arr) {
return arr.reduce((sum,num) => sum + num, 0);
}
let arr1 = [1,2,3,4,5]
console.log('the sum of all number in arr1 : ',sumArray(arr1));

