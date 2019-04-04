/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(str1, str2) {
  // TODO: Your code here!
  // var newStr = "";
  // for (var i = 0; i < str1.length; i++) {
  //   for (var j = 0; j < str2.length; j++) {
  //     if (str1[i] === str2[j]) {
  //       newStr += str1[i];
  //     }
  //   }
  // }
  // return newStr;

  var newStr = "";
  var obj = {};
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
      if (obj[arguments[i][j]]) {
        obj[arguments[i][j]] = obj[arguments[i][j]] + 1;
      } else {
        obj[arguments[i][j]] = 1;
      }
    }
  }
  for (var key in obj) {
    if (obj[key] === arguments.length) {
      newStr += key;
    }
  }
  return newStr;
};
