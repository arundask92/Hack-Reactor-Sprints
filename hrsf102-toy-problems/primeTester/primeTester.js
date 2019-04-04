/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if (typeof n !== "number" || n < 1 || n % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  // TODO: return true if n is prime, false otherwise
  if (n === 2 || n % 2 !== 0) {
    return true;
  }
  return false;
};
console.log(primeTester(9));
/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function(start, end) {
  var primeList = [];
  for (var i = start; i < end; i++) {
    if (primeTester(i)) {
      primeList.push(i);
    }
  }
  return primeList;
};
console.log(primeSieve(1, 30));

/*
I: number
O: Boolean (whether or not input is prime)
C: none
E: NaN, negative nums, 1
*/

// var primeTester = function(n) {
//   if (typeof n !== "number" || n <= 1 || n % 1 !== 0) {
//     return false;
//   }
//   for (var i = 2; i < n; i += 1) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

var primeTester = function(n) {
  if (typeof n !== "number" || n <= 1 || n % 1 !== 0) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

var primeSieve = function(start, end) {
  let primes = Range(0, end);
  for (let i = 2; i < Math.sqrt(end); i += 1) {
    if (primes[i]) {
      for (var j = i * 2; j <= end; j += i) {
        primes[j] = null;
      }
    }
  }
  return primes.slice(2).filter(function(val) {
    return val && val >= start;
  });
};