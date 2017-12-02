var Stack = function() {
  this.storage = {};
  this.index = 0;
};

Stack.prototype.push = function(value) {
  // save the value inside storage with current index and increment index
  this.storage[this.index] = value;
  this.index++;
};

Stack.prototype.pop = function() {
  // save last key and value as variables
  var lastKey = Object.keys(this.storage)[this.index - 1];
  var lastValue = this.storage[lastKey];

  // delete the last key value pair, decrement index, and return last value
  delete this.storage[lastKey];
  this.index--;
  return lastValue;
};

Stack.prototype.size = function() {
  // return length of storage's object keys
  return Object.keys(this.storage).length;
};