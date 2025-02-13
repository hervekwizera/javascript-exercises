function removeDuplicate(arr){
    return [...new Set(arr)];
}
let arr = [1,2,3,3,4,5,5,7,8,8];
console.log(removeDuplicate(arr));
