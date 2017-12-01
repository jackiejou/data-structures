var Stack = function() {
  var instance = {};
  instance.storage = {},
  instance.index = 0;
  
  // extend Stack with stackMethods
  _.extend(instance, stackMethods);

  return instance;
};

stackMethods = {};

stackMethods.push = function(value) {
  // push value into storage at key index
  this.storage[this.index] = value;
  // increment index
  this.index++;
};

stackMethods.pop = function() {
  // get last storage key
  var lastKey = Object.keys(this.storage)[this.index - 1];
  // save the last value as a variable
  var lastValue = this.storage[lastKey];
  // delete the key value pair for that last key
  delete this.storage[lastKey];
  // decrement index
  this.index--;
  // return the saved variable
  return lastValue;
};

stackMethods.size = function() {
  // return the storage keys length
  return Object.keys(this.storage).length;
};

