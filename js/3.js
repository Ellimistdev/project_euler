//returns the largest prime of a number
function getLargestPrimeOf(n){
  for (var i = 2; i <= n; i++){    
    if(n % i === 0){
      n /= i;
      i--;
    }
  }  
  return i;
}
