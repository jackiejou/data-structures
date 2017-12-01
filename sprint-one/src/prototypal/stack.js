var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.index = 0;

  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  // save value at storage at index key
  this.storage[this.index] = value;
  // increment index
  this.index++;
};

stackMethods.pop = function() {
  // get last key value from storage and save as two variables
  var lastKey = Object.keys(this.storage)[this.index - 1];
  var lastValue = this.storage[lastKey];
  // delete last key value pair from storage
  delete this.storage[lastKey];
  // decrement index
  this.index--;
  // return lastValue
  return lastValue;
};

stackMethods.size = function() {
  // return length of the keys in storage
  return Object.keys(this.storage).length;
};


