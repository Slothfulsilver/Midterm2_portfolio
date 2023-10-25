/*
    Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways
    to find all of the smaller primes (below 10 million or so).
*/

// TODO: Adjust this script so it can work with the sieve.html file.

function sieve (n) {
  "use strict";
  var p = document.getElementById("primes");
  // TODO: Implement the sieve of eratosthenes algorithm to find all the prime numbers under the given number.
  const numsArr = Array.from({ length: n + 1 }, () => true);
  const primeNumbers = [];

  for (let i = 2; i <= n; i++) {

    if (numsArr[i]) {

      primeNumbers.push(i);

      for (let j = i + i; j <= n; j += i) {

        numsArr[j] = false;
        
      }
    }

  }
  
  for (let i = 0; i < primeNumbers.length; i++){
    p.append(primeNumbers[i])
    p.append(document.createElement("br"))
  }
};
