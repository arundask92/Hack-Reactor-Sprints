/**
 * Extend the Number prototype with a new method called `toEnglish`.
 * It should return the number as a string using English words.
 * Examples:
 *   (7).toEnglish(); // > "seven"
 *   (575).toEnglish(); // > "five hundred seventy-five"
 *   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
 *
 * Extra credit: Make your function support decimals.
 * Example:
 *   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
 *
 */

var numbersToWords = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety"
};
var numbersToPlace = {
  10: "ten",
  100: "hundred",
  1000: "thousand",
  1000000: "million",
  1000000000: "billion",
  1000000000000: "trillion",
  1000000000000000: "quadrillion",
  1000000000000000000: "quintillion"
};

//Had a hard time trying to implement this toy problem but my thoughts are

//turn the number that is getting passed in into a string to iterate through the number
// save the first index and compare it to a key in the numbersToWords obj
// and save that keys value in memory
// count the length of the number/string and compare it to a keys length in the numbers to place obj
//save that keys value in memory

Number.prototype.toEnglish = function(number) {
  // return my value as english words
  number = number.toString();
  var word;
  var place;
  for (var i = 0; i < number.length; i++) {
    var firstNum = number[0];
    for (var key in numbersToWords) {
      if (firstNum === key) {
        word = numbersToWords[key];
      }
      for (var key in numbersToPlace) {
        if (number.length === key.length) {
          place = numbersToPlace[key];
        }
      }
    }
  }
  return word + " " + place;
};
