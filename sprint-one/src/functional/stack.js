var Stack = function() {
  var someInstance = {};
  var storage = {};
  var position = 0;

  someInstance.push = function(value) {
    position++;
    storage[position] = value;
  };

  someInstance.pop = function() {
    var item = storage[position];
    delete storage[position];
    position--;
    return item;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
