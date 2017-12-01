var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create a new instance of a tree
  // push new instance into the children array of the current node
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // check if current node value is equal to the target
  if (this.value === target) {
    // return true if yes
    return true;
  }
  // else check if children length > 0
  if (this.children.length > 0) {
    // loop through each of the children
    for (var i = 0; i < this.children.length; i++) {
      // if so, recursively call this function
      if (this.children[i].contains(target)) {
        return true;
      }
    }    
  }
  // return false if not found
  return false;
};

/*
  Complexity: What is the time complexity of the above functions? 
    addChild is O(1)
    contains is O(n)
*/
