var Queue = function() {
  var instance = {};
  instance.storage = {};
  instance.index = 0;

  // extend Queue with queueMethods
  _.extend(instance, queueMethods);
  
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  // add value at index key inside storage
  this.storage[this.index] = value;
  // increment index
  this.index++;
};

queueMethods.dequeue = function() {
  // get first object key and value
  var firstKey = Object.keys(this.storage)[0];
  // save the value into a variable
  var firstValue = this.storage[firstKey];
  // delete the value pair in storage
  delete this.storage[firstKey];
  // return the saved variable
  return firstValue;
};

queueMethods.size = function() {
  // return the length of the object keys in storage
  return Object.keys(this.storage).length;
};
