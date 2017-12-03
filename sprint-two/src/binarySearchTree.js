var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.parent = null;
  this.totalNodes = 1;
  this.location = 0;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value) {
    // check if left exists and run recursion on this.left
    // if left doesn't exist, assign this.left to newNode
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
      this.left.parent = this;
      this.left.location = this.location + 1;
    }
  } else {
    // check if right exists and run recursion on this.right
    // if right doesn't exist, assign this.right to newNode
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
      this.right.parent = this;
      this.right.location = this.location + 1;
    }
  }
  this.totalNodes++;
  var idealHeight = Math.floor(Math.log2(this.totalNodes));
  // if (this.right && this.right.location > idealHeight || this.left && this.left.location > idealHeight) {
  //   this.rebalance();
  // }
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  // run callback on each node's value
  this.traverse(function(node) {
    node.value = callback(node.value);
  });
};

BinarySearchTree.prototype.traverse = function(callback) {
  callback(this);
  // if left exists, run recursion on this.left node
  if (this.left) {
    this.left.traverse(callback);
  }
  // if right exists run recursion on this.right node
  if (this.right) {
    this.right.traverse(callback);
  }
};

BinarySearchTree.prototype.contains = function(value) {
  var result = false;
  // the anonmyous function is a closure that has access to outer function's variables: value and result
  // looping thorugh each node and checking to see if the current node's value is equal to the target value
  this.traverse(function(node) {
    if (node.value === value) {
      result = true;
    }
  });
  return result;
};

// Work in progress functions below

BinarySearchTree.prototype.rebalance = function() {
  var nodes = getAndSortNodes;
  var nodesByDepth = this.sortNodesByDepth(nodes);
  var orderToAddNodes = [];
  var depthCounter = 0;
  for (var i = 0; i < nodesByDepth.length; i++) {
    if (nodesByDepth[i] && !orderToAddNodes[i]) {
      orderToAddNodes[depthCounter] = [nodesByDepth[i]];
      depthCounter = 0;
    } else if (nodesByDepth[i] && orderToAddNodes[i]) {
      orderToAddNodes[depthCounter].push(nodesByDepth[i]);
      depthCounter = 0;
    } else if (!nodesByDepth[i]) {
      depthCounter++;
    }  
  }
  orderToAddNodes = _.flatten(orderToAddNodes);
};

BinarySearchTree.prototype.getAndSortNodes = function() {
  var nodes = [];
  this.traverse(function(node) {
    nodes.push(node);
  });
  nodes.sort((a, b) => a - b);
  return nodes;
};

BinarySearchTree.prototype.sortNodesByDepth = function(nodes, depth) {
  var nodesByDepth = [];
  var indexOfMidNode = Math.floor(nodes.length / 2);
  var midNode = nodes[indexOfMidNode];
  var leftNodes = nodes.slice(0, indexOfMidNode);
  var rightNodes = nodes.slice(indexOfMidNode + 1);
  
  if (!depth) {
    depth = 0;
  }
  if (!nodesByDepth[depth]) {
    nodesByDepth[depth] = [midNode];
  } else {
    nodesByDepth[depth].push(midNode);
  }
  if (leftNodes.length) {
    nodesByDepth = nodesByDepth.concat(BinarySearchTree.prototype.sortNodesByDepth(leftNodes, depth + 1));
  }
  if (rightNodes.length) {
    nodesByDepth = nodesByDepth.concat(BinarySearchTree.prototype.sortNodesByDepth(leftNodes, depth + 1));
  }
  return nodesByDepth;
};

BinarySearchTree.prototype.getRootNode = function(node) {
  var rootNode = node;
  while (node.parent) {
    rootNode = node.parent;
  }
  return rootNode;
};


/*
 * Complexity: What is the time complexity of the above functions?
    insert is O(log n)
    contains is O (log n)
    depthFirstLog is O (n)
 */
