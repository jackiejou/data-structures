var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // check if item exists in storage
    // if not, push item in storage
  if (!this.contains(item)) {
    this.storage.push(item);
  }
};

setPrototype.contains = function(item) {
  // check if item is inside storage
  return this.storage.includes(item);
};

setPrototype.remove = function(item) {
  // get index of item in storage and remove it
  this.storage.splice(this.storage.indexOf(item), 1);
};

/*
 * Complexity: What is the time complexity of the above functions? O(n)
 */
