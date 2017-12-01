var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.index = 0;

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  // store value into storage at index key
  this.storage[this.index] = value;
  // increment index 
  this.index++;
};

queueMethods.dequeue = function() {
  // find first object key and value
  // save key and value into two variables
  var firstKey = Object.keys(this.storage)[0];
  var firstValue = this.storage[firstKey];
  // delete key value from storage
  delete this.storage[firstKey];
  // return value variable
  return firstValue;
};

queueMethods.size = function() {
  // return length of the object keys
  return Object.keys(this.storage).length;
};


