function secondaryLargestNum(arr) {
 let uniqueSorted = [... new Set(arr)].sort((a,b)=>b-a);
 return  uniqueSorted.length > 1 ? uniqueSorted[1] : null ;
}
let arr =[2,5,1,7,9,0,4]
let sl = secondaryLargestNum(arr)
console.log(sl);
