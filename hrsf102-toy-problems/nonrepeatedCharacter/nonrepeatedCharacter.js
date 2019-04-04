/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var obj = {};
  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    if (obj[letter]) {
      obj[letter] = obj[letter] + 1;
    } else {
      obj[letter] = 1;
    }
  }
  for (var key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
  // string = string.split("");
  // for (var i = 0; i < string.length; i++) {
  //   let copy = string.slice();
  //   copy.splice(i, 1);
  //   if (copy.indexOf(string[i]) === -1) {
  //     return string[i];
  //   }
  // }
};

console.log(firstNonRepeatedCharacter("ACABDB"));
