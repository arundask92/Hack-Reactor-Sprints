/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  var evenNum = null;
  var count = 0;
  var timesOfNum = 0;
  for (var i = 0; i < arr.length; i++) {
    var current = arr[i];
    for (var j = 0; j < arr.length; j++) {
      if (current === arr[j]) {
        count++;
      }
    }
    if (count % 2 === 0 && count > timesOfNum) {
      evenNum = current;
      timesOfNum = count;
    }
    count = 0;
  }
  return evenNum;
};
var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4, 2, 4, 4]);
console.log(onlyEven);
