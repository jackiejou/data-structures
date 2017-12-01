var Queue = function() {
  this.storage = {};
  this.index = 0;
};

Queue.prototype.enqueue = function(value) {
  // saving the value into storage with key index
  this.storage[this.index] = value;
  // increment index
  this.index++;
};

Queue.prototype.dequeue = function() {
  // get first key value pair from storage
  // save those key value pairs as variables
  var firstKey = Object.keys(this.storage)[0];
  var firstValue = this.storage[firstKey];
  // delete key value pairs from storage
  delete this.storage[firstKey];
  // return value variable
  return firstValue;
};

Queue.prototype.size = function() {
  // return length of object keys of storage
  return Object.keys(this.storage).length;
};
