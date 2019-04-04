// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var resultsArr = [];
  var getElemClass = function(elem){
    var classList = elem.classList;
    if(classList && classList.contains(className)){
        resultsArr.push(elem);
      }
    for(var i = 0; i < elem.childNodes.length; i++){
      getElemClass(elem.childNodes[i]);
    }
  }
   getElemClass(document.body);
   return resultsArr;
};