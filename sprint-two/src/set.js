var Set = function() {
  var set = Object.create(setPrototype);  
  set.limit = 10;
  set.storage = LimitedArray(set.limit);
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var index = getIndexBelowMaxForKey(item, this.limit);
  // check if item exists in storage 
  if (!this.storage[index]) {
    // if not, put item in storage
    this.storage[index] = item;
  }
};

setPrototype.contains = function(item) {
  var index = getIndexBelowMaxForKey(item, this.limit);
  // check if the item exists in storage at hashed index
  return this.storage[index] === item;
};

setPrototype.remove = function(item) {
  // get index of item in storage and remove it
  var index = getIndexBelowMaxForKey(item, this.limit);
  delete this.storage[index];
};



/*
  Complexity: What is the time complexity of the above functions?
    add is O(1)
    contains is O(1)
    remove is O(1)
*/
