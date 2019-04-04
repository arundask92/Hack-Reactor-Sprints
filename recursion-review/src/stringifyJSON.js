// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var looped = [];
  var final;
//Null
  if (obj === null) {
    return "null";
  }
//Number
  if(typeof obj === 'number') {
    return obj.toString();
  }
//Array
  if(Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        looped.push(stringifyJSON(obj[i]));
      }
    return '['+ looped.toString() +']';
  }
//Object
  if(typeof obj === 'object') {
    //If object is empty
    if (Object.keys(obj).length === 0) {
      return "{}";
    } 
    //If object is not empty
    else{
      //For all elements
        for(var key in obj){
          if(typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
              // return "{}";
          }else {

            looped.push(`"${key}":${stringifyJSON(obj[key])}`);
          }
        }
      final = "{" + looped.join(',') + "}";
      return final;
    }
  }
//Boolean
  if(typeof obj === 'boolean') {
    return obj.toString();
  }
//String
  if(typeof obj === 'string') {
    return "\"" + obj + "\"";
  }
};
