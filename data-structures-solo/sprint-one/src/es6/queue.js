class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.newQueue = {};
    this.newQueue.counter = 0;
    this.newQueue.index = 0;
    this.newQueue.tracker = 0;
    this.newQueue.storage = {};
  }

  enqueue(value) {
    this.newQueue.storage[this.newQueue.index] = value;
    this.newQueue.index++;
    this.newQueue.counter++;
  }
  
  dequeue(value) {
    if (this.newQueue.counter > 0) {
      this.newQueue.counter--;
    }
    var key = this.newQueue.storage[this.newQueue.tracker];
    this.newQueue.tracker = this.newQueue.tracker + 1;
    return key;
  }
  size() {
    return this.newQueue.counter;
  }
}
