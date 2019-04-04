/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

var allAnagrams = function(string) {
  // Your code here.
  var anaArr = [];
  var anagramRecursive = function(anagram, str) {
    if (anagram.length === string.length) {
      anaArr.push(anagram);
    } else {
      for (var i = 0; i < str.length; i++) {
        anagramRecursive(
          anagram + str[i],
          str.slice(0, i).concat(str.slice(i + 1))
        );
      }
    }
  };
  anagramRecursive("", string);
  return anaArr;
};
var anagrams = allAnagrams("abc");
console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
