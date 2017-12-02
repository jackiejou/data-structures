var Set = function() {
  var set = Object.create(setPrototype);  
  set._limit = 10;
  set._storage = LimitedArray(set.limit);
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  var bucket = this._storage.get(index);
  // check if item exists in storage
    // if not, put item in storage
  if (!bucket) {
    this._storage.set(index, item);
  }
};

setPrototype.contains = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  var bucket = this._storage.get(index);
  // check if the item exists in storage at hashed index
  return bucket === item;
};

setPrototype.remove = function(item) {
  // get index of item in storage and remove it
  var index = getIndexBelowMaxForKey(item, this._limit);
  this._storage.set(index, undefined);
};

// new function for new test

setPrototype.getSetList = function() {
  // return an array of all values in the set
  var result = [];
  this._storage.each(function(bucket) {
    if (bucket) {
      result.push(bucket);
    }
  });
  return result;
};

/*
  Complexity: What is the time complexity of the above functions?
    add is O(1)
    contains is O(1)
    remove is O(1)
*/
