#returns the largest prime of a number
def getLargestPrimeOf(n)
  i = 2
  while i <= n    
    if(n % i === 0)
      n /= i
      i -= 1
    end
    i += 1
  end
  i;
end