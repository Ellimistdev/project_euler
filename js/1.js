//Finds the sum of all multiples of 3 or 5 that are < 1000. 
function findValidInts()
{
  var sum = 0;  
  for (var i = 1; i < 1000; i++)
  {
    if ((i % 3 == 0) || (i % 5 == 0))
    {
      sum += i;
    }
  }
  console.log(sum);
}
