var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // check if the hashed index already exists
  
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      // key already exists, value is overrided
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        break;
      }
      // only run this if the loop reaches the end and can't find k inside the same index bucket, add new tuple
      if (i === bucket.length - 1) {
        bucket.push([k, v]); 
      }
    }
  } else {
    // create array var if key is not found and add the tuple in the table
    var tuple = [];
    tuple.push([k, v]);
    this._storage.set(index, tuple);
  }
  // increment size
  this._size++;

   // doublesize check
  if (this._size / this._limit > 0.75) {
    this.doubleSize();
  }
};

HashTable.prototype.doubleSize = function() {
  // saving the tuples of the current hash table 
  var tuples = [];
  this._storage.each(function(bucket) {
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        tuples.push(bucket[i]);
      }
    }
  });

  // update properties
  this._limit *= 2;
  this._storage = LimitedArray(this._limit);
  this._size = 0;

  // iterate through the tuples
    // insert each tuple into the new hash table
  for (var j = 0; j < tuples.length; j++) {
    this.insert(tuples[j][0], tuples[j][1]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // check if the bucket at hashed index exists
    // if yes, then loop through bucket to find key at 0th index
      // if there is a match, then return the value 
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
  // return undefined if nothing is found
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // check if the bucket at hashed index exists
    // if yes, then loop through bucket to find key at 0th index
      // if there is a match, then delete it 
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
      }
    }
  }
};

// new function for new test

HashTable.prototype.contains = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return true;
      }
    }
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
    insert runs in O(n) in respect to the number of tuples in the hash table
    retrieve runs in O(n) in respect to the number of tuples in the hash table
    remove runs in O(n) in respect to the number of tuples in the hash table
 */
