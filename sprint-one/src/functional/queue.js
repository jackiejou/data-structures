var Queue = function() {
  var someInstance = {};
  var storage = {};
  var index = 0;

  someInstance.enqueue = function(value) {
    // add value into storage at current index, and then increment index
    storage[index] = value;
    index++;
  };

  someInstance.dequeue = function() {
    // save the first key and value as variables
    var firstKey = Object.keys(storage)[0];
    var firstValue = storage[firstKey];

    // delete from storage and then return the saved value
    delete storage[firstKey];
    return firstValue;
  };

  someInstance.size = function() {
    // return the length of the keys of storage
    return Object.keys(storage).length;
  };

  return someInstance;
};