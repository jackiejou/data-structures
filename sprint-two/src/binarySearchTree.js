var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  // check if value of first node in tree is less or greater than the value of new node
  if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
  } else {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  }
    // new value is less than this.value
      // check if left exists
        // run recursion
      // left doesn't exist
        // create the node with new value
        // assign this.left to newNode
    // else
      // check if right exists
        // run recursion
      // right doesn't exist
        // create node with new value
        // assign this.right to newNode
};

BinarySearchTree.prototype.contains = function(value) {
  // if this.value equals value
    // if yes, return true
  // check if value of first node is less or greater than the value of new node
    // new value is less than this.value
      // check if left exists
        // run recursion
      // left doesnt exist
        // return false
    // else
      // check if right exists
        // run recursion
      // right doesn't exist
        // return false
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  // run callback on this value
  // if left exists
    // callback on this.left node's value
  // if right exists
    // callback on this.right node's value
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
