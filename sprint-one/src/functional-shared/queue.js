var Queue = function() {
  var instance = {};
  instance.storage = {};
  instance.index = 0;

  _.extend(instance, queueMethods);
  
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  // add value in storageat at current index and then increment index
  this.storage[this.index] = value;
  this.index++;
};

queueMethods.dequeue = function() {
  // save the first key and value of storage as variables
  var firstKey = Object.keys(this.storage)[0];
  var firstValue = this.storage[firstKey];

  // delete the value pair from storage and return the first value
  delete this.storage[firstKey];
  return firstValue;
};

queueMethods.size = function() {
  // return the length of the object keys in storage
  return Object.keys(this.storage).length;
};
