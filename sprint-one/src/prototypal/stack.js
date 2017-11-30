var Stack = function() {
<<<<<<< HEAD
  var stack = Object.create(stackMethods);
  stack.position = 0;
  stack.storage = {};
  return stack;
=======
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.index = 0;

  return instance;
>>>>>>> 4ab152fda6515269fa64a9d9d9846dacab001410
};

var stackMethods = {
  push: function(value) {
  	this.position++;
  	this.storage[this.position] = value;
  },
  pop: function() {
  	var item = this.storage[this.position];
  	delete this.storage[this.position];
  	this.position--;
  	return item;
  },
  size: function() {
  	return Object.keys(this.storage).length;
  }
};

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


