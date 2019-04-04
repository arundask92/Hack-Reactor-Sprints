/**
 *
 * Implement a `map` method on this Tree class, using pseudoclassical instantiation.
 *
 * Map accepts a mapping function as its only argument. It traverses the tree,
 * passing each node's value into the mapping function, and generates a new
 * tree containing the results.
 *
 * So `map` should return a tree with the same structure, and different values,
 * but it should NOT modify the tree that was passed in.
 *
 * Example:
  var root1 = new Tree(1);
 *   var branch2 = root1.addChild(2);
 *   var branch3 = root1.addChild(3);
 *   var leaf4 = branch2.addChild(4);
 *   var leaf5 = branch2.addChild(5);
 *   var leaf6 = branch3.addChild(6);
 *   var leaf7 = branch3.addChild(7);
 *   var newTree = root1.map(function (value) {
 *     return value * 2;
 *   })
 *  newTree.value // 2
 *  newTree.children[0].value // 4
 *  newTree.children[1].value // 6
 *  newTree.children[0].children[1].value // 10
 *  newTree.children[1].children[1].value // 14
 *  root1.value // still 1
 */

// var Tree = function(value) {
//   this.value = value;
//   this.children = [];
// };

// //create a map prototype
// // map takes in a function as an argument
// Tree.prototype.map = function(mapper) {
//   // create a new Tree with new keyword
//   var newTree = new Tree();
//   // Check length of children
//   if (this.children.length > 0) {
//     //iterate through each element in children array
//     // push child of this.children into newTree.children (new array) invoking the mapper function on each child
//     this.children.forEach(child => newTree.children.push(mapper(child)));
//   }
//   // return newTree
//   return newTree;
// };

// var mapper = function(value) {
//   return value * 2;
// };

var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.map = function(cb) {
  var newTree = new Tree(cb(this.value));
  var mapTree = function(oldTree, newTree, cb) {
    if (!!oldTree.children) {
      for (var i = 0; i < oldTree.children.length; i++) {
        var childTree = oldTree.children[i];
        var newValue = cb(childTree.value);
        var newBranch = newTree.addChild(newValue);
        if (!!childTree.children) {
          mapTree(childTree, newBranch, cb);
        }
      }
    }
  };
  var oldTree = this;
  mapTree(oldTree, newTree, cb);
  return newTree;
};

Tree.prototype.addChild = function(val) {
  var newTree = new Tree(val);
  this.children.push(newTree);
  return newTree;
};
