// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  var result = [];
  if (obj === null || typeof obj !== "object") {
    if (typeof obj === 'string') {
      return '"' +  obj + '"';
    }  else {
      return '' + obj;
    }
  } else if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      if (typeof(obj[i]) === 'string') {
        result.push('"' + obj[i] + '"');
      } else {
        result.push(stringifyJSON(obj[i]));
      } 
    }
    return '[' + result.join(',') + ']';
  } else {
    for (var key in obj) {
      if (typeof(obj[key]) === 'string') {
        result.push(stringifyJSON(key) + ':"' + obj[key] + '"');
      } else if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {    
      } else {
        result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      } 
    }
    return '{' + result.join(',') + '}'; 
  }
};