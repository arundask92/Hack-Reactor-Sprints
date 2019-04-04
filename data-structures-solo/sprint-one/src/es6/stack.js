class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.newStack = {};
    this.newStack.counter = 0;
    this.newStack.storage = {};
  }

  push(value) {
    this.newStack.storage[this.newStack.counter] = value;
    this.newStack.counter++;
  }

  pop() {
    if (this.newStack.counter > 0) {
      this.newStack.counter--;
    }
    return this.newStack.storage[this.newStack.counter];
  }

  size() {
    return this.newStack.counter;
  }

}