/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  // TODO: Implement me!
  if (typeof romanNumeral !== "string") return null;
  var total = 0;
  var obj = DIGIT_VALUES;
  for (var i = 0; i < romanNumeral.length; i++) {
    var nums = obj[romanNumeral[i]];
    var next = obj[romanNumeral[i + 1]];
    if (nums >= next || !next) {
      total += nums;
    } else {
      total -= nums;
    }
  }
  return total;
};
console.log(translateRomanNumeral("XCX"));

// var numArr = [];
// var value;
// romanNumeral = romanNumeral.split("");
// for (var i = 0; i < romanNumeral.length; i++) {
//   for (var key in obj) {
//     if (romanNumeral[i] === key) {
//       value = obj[key];
//       numArr.push(value);
//       for (var j = 0; j < numArr.length; j++) {
//         if (numArr[0] < numArr[1]) {
//           total += numArr[j] - numArr[0];
//         } else if (numArr[0] > numArr[1]) {
//           total += numArr[j];
//         }
//       }
//     }
//   }
// }
