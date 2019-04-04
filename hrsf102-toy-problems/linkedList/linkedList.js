/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail; //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';

var LinkedList = function(initVal) {
  //fill me in!
  if (!initVal) {
    this.head = this.tail = null;
  } else {
    this.head = new this.makeNode(initVal);
    this.tail = this.head;
  }
};

//write methods here!

LinkedList.prototype.addToTail = function(value) {
  var fill = new this.makeNode(value);
  if (!this.head) {
    this.head = fill;
    this.tail = fill;
  } else {
    this.tail.next = fill;
    this.tail = this.tail.next;
  }
};

LinkedList.prototype.removeHead = function() {
  var remove = this.head;
  if (remove === null) {
    return null;
  } else if (!this.head.next) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
  }
  return remove.value;
};

LinkedList.prototype.contains = function(target) {
  var node = this.head;
  var cycle = true;
  var contains = false;
  while (cycle) {
    if (node.value === target) {
      cycle = false;
      contains = true;
    } else {
      var old = node.next;
      node = old;
      if (node === null) {
        cycle = false;
      }
    }
  }
  return contains;
};

LinkedList.prototype.makeNode = function(value) {
  this.value = value;
  this.next = null;
};
