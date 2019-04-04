/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  // Split up the input into individual, sorted letters
  str = str.split("").sort();
  // Declare results object with an empty string key and its value true
  var results = { "": true };
  // iterate through the letters array
  for (var i = 0; i < str.length; i++) {
    // if the letter is not within results
    if (!results[str[i]]) {
      // iterate through results
      for (var key in results) {
        // set the letter as a key and its value to true
        results[key + str[i]] = true;
      }
    }
  }
  // Sort the object, in order, into an Array
  var sortedArr = Object.keys(results).sort();
  return sortedArr;
};

console.log(powerSet("jump"));
