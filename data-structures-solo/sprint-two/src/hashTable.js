var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [];
  if (this._storage[index] === undefined) {
    this._storage.set(index, v);
  }

  if (this._storage.length === 0) {
    this._storage[index] = index;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  console.log(this._storage[index] === k);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  console.log(this);
  console.log(index === k);
  if (this._storage[index] === k) {
    console.log(k);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
