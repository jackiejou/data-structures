var Queue = function() {
  var queue = {
  	position: 0,
  	storage: {}
  };

  _.extend(queue, queueMethods);

  return queue;
};

var queueMethods = {
  dequeue: function() {
  	var item = this.storage[Object.keys(this.storage)[0]];
  	delete this.storage[Object.keys(this.storage)[0]];
  	return item;
  },
  enqueue: function(value) {
  	this.position++;
  	this.storage[this.position] = value;
  },
  size: function() {
  	return Object.keys(this.storage).length;
  }
};


