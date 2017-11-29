var Stack = function() {
  var stack = { 
  	position: 0,
  	storage: {} 
  };

  _.extend(stack, stackMethods);

  return stack;
};

var stackMethods = {
  size: function() {
  	return Object.keys(this.storage).length;
  },
  push: function(value) {
  	this.position++;
  	this.storage[this.position] = value;
  },
  pop: function() {
  	var item = this.storage[this.position];
  	delete this.storage[this.position];
  	this.position--;
  	return item;
  }
};


