var Queue = function() {
  var someInstance = {};
  var storage = {};
  var position = 0;

  someInstance.enqueue = function(value) {
    storage[position] = value;
    position++;
  };

  someInstance.dequeue = function() {
    var item = storage[Object.keys(storage)[0]];
    delete storage[Object.keys(storage)[0]];
    return item;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
