var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.newStack = {};
  this.newStack.counter = 0;
  this.newStack.storage = {};
};

Stack.prototype.push = function(value) {
  this.newStack.storage[this.newStack.counter] = value;
  this.newStack.counter++;
}

Stack.prototype.pop = function() {
  if (this.newStack.counter > 0) {
    this.newStack.counter--;
  }
  return this.newStack.storage[this.newStack.counter];
}

Stack.prototype.size = function() {
  return this.newStack.counter;
}
