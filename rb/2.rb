# gets the sum of all even numbers in the Fibonacci sequence under 4 million
def fibSum()
  # start with initial sum
  sum = 2
  fibNums = [1,2]
  sumNums = [2]
  i = 2
  
  while fibNums[fibNums.length-1] < 4000000 do
    # create new term
    n = fibNums[i-1] + fibNums[i-2];
    # add even terms to sum
    if (n % 2 == 0)
      sum += n
      sumNums.push(n)
    end
    # add term to fibNums[]
    fibNums.push(n)
    # iterate selector
    i += 1
  end
  
  puts " sum == #{sum}\n Numbers included in sum are #{sumNums} \n Numbers in full sequence are #{fibNums}"
end