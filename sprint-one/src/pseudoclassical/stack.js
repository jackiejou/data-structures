var Stack = function() {
  this.position = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.position++;
  this.storage[this.position] = value;
};

Stack.prototype.pop = function() {
  var item = this.storage[this.position];
  delete this.storage[this.position];
  this.position--;
  return item;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};


