//gets the sum of all even numbers in the Fibonacci sequence under 4 million 
function fibSum(){
  //start with initial sum
  var sum = 2;
  var fibNums = [1,2];
  var sumNums = [2]
  var i = 2;
  
  while (fibNums[fibNums.length-1] < 4000000){
    //create new term
    n = fibNums[i-1] + fibNums[i-2];
    //add even terms to sum    
    if (n % 2 === 0){
      sum += n;     
      sumNums.push(n);
      }
    //add term to fibNums[]
    fibNums.push(n)
    //iterate selector
    i++;
  }
  console.log('sum === ' + sum + '\n Numbers included in sum are ' + sumNums + '\n Numbers in full sequence are ' + fibNums);    
}
