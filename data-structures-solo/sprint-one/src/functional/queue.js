var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var index = 0;
  var tracker = 0;
  
  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++;
    counter++;
  };

  someInstance.dequeue = function() {
    if(counter > 0) {
      counter--;
    }
    var key = storage[tracker];
    tracker = tracker + 1;
    return key;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
