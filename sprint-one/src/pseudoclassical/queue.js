var Queue = function() {
  this.storage = {};
  this.index = 0;
};

Queue.prototype.enqueue = function(value) {
  // saving the value into storage with key index
  // increment index
  this.storage[this.index] = value;
  this.index++;
};

Queue.prototype.dequeue = function() {
  // get first key value pair from storage
  // save those key value pairs as variables
  // delete key value pairs from storage
  // return key value pair
  var firstKey = Object.keys(this.storage)[0];
  var firstValue = this.storage[firstKey];
  delete this.storage[firstKey];
  return firstValue;
};

Queue.prototype.size = function() {
  // return length of object keys of storage
  return Object.keys(this.storage).length;
};
