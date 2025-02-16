//*******count down using recursive function******* */
function countDown(num){
   if (num<0){
    console.log('done');
    return 'finished';
   }
   console.log(num);
   return countDown(num-1)
   
}
console.log(countDown(10));
