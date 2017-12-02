var Stack = function() {
  var instance = {};
  instance.storage = {},
  instance.index = 0;
  
  _.extend(instance, stackMethods);

  return instance;
};

stackMethods = {};

stackMethods.push = function(value) {
  // push value into storage at current index and increment index
  this.storage[this.index] = value;
  this.index++;
};

stackMethods.pop = function() {
  // save the last key and values from storage as variables
  var lastKey = Object.keys(this.storage)[this.index - 1];
  var lastValue = this.storage[lastKey];

  // delete the key value pair from storage, decrement index, and return last value
  delete this.storage[lastKey];
  this.index--;
  return lastValue;
};

stackMethods.size = function() {
  // return the storage keys length
  return Object.keys(this.storage).length;
};

