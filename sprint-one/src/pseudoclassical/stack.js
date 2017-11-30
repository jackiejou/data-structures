var Stack = function() {
  this.storage = {};
  this.index = 0;
};

Stack.prototype.push = function(value) {
  // save the value inside storage with index key
  // increment index
  this.storage[this.index] = value;
  this.index++;
};

Stack.prototype.pop = function() {
  // get the last keyvalue pairs from storage
  // save them as two variables
  // delete the last keyvalue pair
  // decrement index
  // return value 
  var lastKey = Object.keys(this.storage)[this.index - 1];
  var lastValue = this.storage[lastKey];
  delete this.storage[lastKey];
  this.index--;
  return lastValue;
};

Stack.prototype.size = function() {
  // return length of storage's object keys
  return Object.keys(this.storage).length;
};