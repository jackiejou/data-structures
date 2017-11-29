var Queue = function() {
  var queue = Object.create(queueMethods);
  queue.position = 0;
  queue.storage = {};
  return queue;
};

var queueMethods = {
  enqueue: function(value) {
  	this.position++;
  	this.storage[this.position] = value;
  },
  dequeue: function() {
  	var item = this.storage[Object.keys(this.storage)[0]];
  	delete this.storage[Object.keys(this.storage)[0]];
  	return item;
  },
  size: function() {
  	return Object.keys(this.storage).length;
  }
};


