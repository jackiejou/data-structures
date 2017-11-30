var Queue = function() {
  var instance = {};
  instance.storage = {};
  instance.index = 0;

  _.extend(instance, queueMethods);
  
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  // add value at index key inside storage
  // increment index 
  this.storage[this.index] = value;
  this.index++;
};

queueMethods.dequeue = function() {
  // get first object key and value
  // delete the value pair in storage
  // return the value
  var firstKey = Object.keys(this.storage)[0];
  var firstValue = this.storage[firstKey];
  delete this.storage[firstKey];
  return firstValue;
};

queueMethods.size = function() {
  // return the length of the object keys in storage
  return Object.keys(this.storage).length;
};

