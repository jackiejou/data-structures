var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // check if the index already exists
  if (this._storage[index]) {
    for (var i = 0; i < this._storage[index].length; i++) {
      // key already exists, value is overrided
      if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
        break;
      }
      // only run this if the loop reaches the end and can't find k inside the bucket, add new tuple
      if (i === this._storage[index].length - 1) {
        this._storage[index].push([k, v]); 
      }
    }    
  } else {
    // create array var if key is not found and add the tuple in the table
    var arr = [];
    arr.push([k, v]);
    this._storage[index] = arr;
  }

  // increase the size each time
  this._size++;

  // doublesize check
  if (this._size / this._limit > 0.75) {
    this.doubleSize();
  }
};

HashTable.prototype.doubleSize = function() {
  // save the buckets of current tuples inside the hash table
  var arrayOfBuckets = Object.values(this._storage).filter(item => Array.isArray(item));

  // update properties
  this._limit *= 2;
  this._storage = LimitedArray(this._limit);
  this._size = 0;

  // loop through buckets list
    // loop through each bucket
      // insert each tuple
  for (var i = 0; i < arrayOfBuckets.length; i++) {
    for (var j = 0; j < arrayOfBuckets[i].length; j++) {
      this.insert(arrayOfBuckets[i][j][0], arrayOfBuckets[i][j][1]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // check if the bucket at hashed index exists
    // if yes, then loop through bucket to find key at 0th index
      // if there is a match, then return the value 
  if (this._storage[index]) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        return this._storage[index][i][1];
      }
    }
  }
  // return undefined if nothing is found
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // check if the bucket at hashed index exists
    // if yes, then loop through bucket to find key at 0th index
      // if there is a match, then delete it 
  if (this._storage[index]) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index].splice(i, 1);
      }
    }
  }
};

// new test

HashTable.prototype.contains = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index]) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
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
