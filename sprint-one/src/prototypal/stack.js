var Stack = function() {
  var stack = Object.create(stackMethods);
  stack.position = 0;
  stack.storage = {};
  return stack;
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


