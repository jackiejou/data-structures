var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.index = 0;

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  // store value into storage at current index and increment index
  this.storage[this.index] = value;
  this.index++;
};

queueMethods.dequeue = function() {
  // save first key and value into two variables
  var firstKey = Object.keys(this.storage)[0];
  var firstValue = this.storage[firstKey];

  // delete key value from storage and return first value
  delete this.storage[firstKey];
  return firstValue;
};

queueMethods.size = function() {
  // return length of the object keys
  return Object.keys(this.storage).length;
};


