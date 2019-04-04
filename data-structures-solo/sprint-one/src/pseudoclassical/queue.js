var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.newQueue = {};
  this.newQueue.counter = 0;
  this.newQueue.index = 0;
  this.newQueue.tracker = 0;
  this.newQueue.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.newQueue.storage[this.newQueue.index] = value;
  this.newQueue.index++;
  this.newQueue.counter++;
}

Queue.prototype.dequeue = function() {
  if (this.newQueue.counter > 0) {
    this.newQueue.counter--;
  }
  var key = this.newQueue.storage[this.newQueue.tracker];
  this.newQueue.tracker = this.newQueue.tracker + 1;
  return key;
}

Queue.prototype.size = function() {
  return this.newQueue.counter;
}


