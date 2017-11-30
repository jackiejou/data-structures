var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.index = 0;

  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  // save value at storage at index key
  // increment index
  this.storage[this.index] = value;
  this.index++;
};

stackMethods.pop = function() {
  // get last key value from storage and save as two variables
  // delete last key value pair from storage
  // decrement index
  // return lastValue
  var lastKey = Object.keys(this.storage)[this.index - 1];
  var lastValue = this.storage[lastKey];
  delete this.storage[lastKey];
  this.index--;
  return lastValue;
};

stackMethods.size = function() {
  // return length of the keys in storage
  return Object.keys(this.storage).length;
};

