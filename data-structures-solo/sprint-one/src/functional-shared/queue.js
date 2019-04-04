var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.counter = 0;
  newQueue.index = 0; 
  newQueue.tracker = 0;
  newQueue.storage = {};

  _.extend(newQueue, queueMethods); 
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index++;
  this.counter++;
}

queueMethods.dequeue = function() {
  if(this.counter > 0) {
    this.counter--;
  }
  var key = this.storage[this.tracker];
  this.tracker = this.tracker + 1;
  return key;
}

queueMethods.size = function() {
  return this.counter;
}
