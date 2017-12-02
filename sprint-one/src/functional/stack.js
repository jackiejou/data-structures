var Stack = function() {
  var someInstance = {};
  var storage = {};
  var index = 0;

  someInstance.push = function(value) {
    // add value into storage at current index and then increment index
    storage[index] = value;
    index++;
  };

  someInstance.pop = function() {
    // save the last key and value of storage as variables
    var lastKey = Object.keys(storage)[index - 1];
    var lastValue = storage[lastKey];

    // delete the value from storage, decrement index, and then return last value
    delete storage[lastKey];
    index--;
    return lastValue;
  };

  someInstance.size = function() {
    // return the length of the object keys
    return Object.keys(storage).length;
  };

  return someInstance;
};