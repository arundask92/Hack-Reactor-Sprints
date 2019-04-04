/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

var characterFrequency = function(string) {
  var result = [];
  // create an object to keep store the value as key value pairs
  var letterCount = {};
  // loop through string
  for (var i = 0; i < string.length; i++) {
    // if the letter only appears once keep its count at one
    if (!letterCount[string[i]]) {
      letterCount[string[i]] = 1;
    } else {
      //else increment the count
      letterCount[string[i]]++;
    }
  }
  // turn the object into an array
  var arrayMaker = Object.keys(letterCount);
  // sort the array
  arrayMaker.sort(function(a, b) {
    if (letterCount[b] === letterCount[a]) {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    }
    return letterCount[b] - letterCount[a];
  });
  // loop through the sorted array
  for (var j = 0; j < arrayMaker.length; j++) {
    var innerArray = [];
    // letters added to innerArray
    innerArray[0] = arrayMaker[j];
    // numbers added to innerArray
    innerArray[1] = letterCount[arrayMaker[j]];
    result.push(innerArray);
  }
  return result;
};

console.log(characterFrequency("mississippi"));
