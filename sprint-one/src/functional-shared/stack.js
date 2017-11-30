var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var instance = {
    storage: {},
    index: 0
  };
  

  _.extend(instance, stackMethods);

  return instance;
};

stackMethods = {};

stackMethods.push = function(value) {
  // push value into storage at key index
  // increment index
  this.storage[this.index] = value;
  this.index++;
};

stackMethods.pop = function() {
  // get last storage key
  // delete the key value pair for that last key
  // decrement index
  // return the value
  var lastKey = Object.keys(this.storage)[this.index - 1];
  var lastValue = this.storage[lastKey];
  delete this.storage[lastKey];
  this.index--;
  return lastValue;
};

stackMethods.size = function() {
  // return the storage keys length
  return Object.keys(this.storage).length;
};

