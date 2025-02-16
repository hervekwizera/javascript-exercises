//*******count down using recursive function******* */
function countDown(num){
   if (num<0){
    console.log('done');
    return 'finished';
   }
   console.log(num);
   return countDown(num-1)
   
}
//console.log(countDown(10));
//using setTimeout() tod delay countdown

function countdown(n) {
   if (n < 0) {
       console.log("Done!");
       return;
   }
   console.log(n);
   setTimeout(() => countdown(n - 1), 1000); // Wait 1 second before next call
}

// Example usage
countdown(10);

