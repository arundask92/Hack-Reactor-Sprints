const characterFrequency = str => {
  const frequencies = {};
  for (var i = 0; i < str.length; i++) {
    let letter = str[i];
    frequencies[letter] = frequencies[letter] + 1 || 1;
  }
  const result = Object.entries(frequencies);
  result.sort(function(a, b) {
    // if (a[1] > b[1]) return -1;
    // if (a[1] < b[1]) return 1;
    // if (a[0] > b[0]) return -1;
    // if (a[0] < b[0]) return 1;
    return a[1] !== b[1] ? b[1] - a[1] : a[0] > b[0] ? 1 : 0;
  });
  return result;
};
console.log(characterFrequency("mississipi"));
