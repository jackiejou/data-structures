var Queue = function() {
  this.position = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.position++;
  this.storage[this.position] = value;  
};

Queue.prototype.dequeue = function() {
  var item = this.storage[Object.keys(this.storage)[0]];
  delete this.storage[Object.keys(this.storage)[0]];
  return item;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};
