var Queue = function() {
  this.storage = {};
  this.index = 0;
};

Queue.prototype.enqueue = function(value) {
  // save the value into storage with current index and increment index
  this.storage[this.index] = value;
  this.index++;
};

Queue.prototype.dequeue = function() {
  // save first key and value as variables
  var firstKey = Object.keys(this.storage)[0];
  var firstValue = this.storage[firstKey];

  // delete key value pairs from storage and return first value
  delete this.storage[firstKey];
  return firstValue;
};

Queue.prototype.size = function() {
  // return length of object keys of storage
  return Object.keys(this.storage).length;
};
