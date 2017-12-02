var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

Graph.prototype.addNode = function(node) {
  // push node into list of nodes
  // set the edges array to hold its own edges list
  this.nodes.push(node);
  this.edges[node] = [];
};

Graph.prototype.contains = function(node) {
  // return if node is inside list of nodes
  return this.nodes.includes(node);
};

Graph.prototype.removeNode = function(node) {
  // find node and remove it from list of nodes
  this.nodes.splice(this.nodes.indexOf(node), 1);

  // go through each element inside the nodes' edge list
    // set the connected node's edge list in a variable
    // remove node from the connected node's edge list
  for (var i = 0; i < this.edges[node].length; i ++) {
    var connectedNodeEdgeList = this.edges[this.edges[node][i]];
    connectedNodeEdgeList.splice(connectedNodeEdgeList.indexOf(node), 1);
  }
  // empty out node's edge list
  this.edges[node] = [];
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check if toNode is inside fromNodes' edges list
  return this.edges[fromNode].includes(toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  // push toNode into fromNode's edges list and vice versa
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  // find the index of toNode inside of fromNode's edges list and remove it and vice versa
  this.edges[fromNode].splice(this.edges[fromNode].indexOf(toNode));
  this.edges[toNode].splice(this.edges[toNode].indexOf(fromNode));
};

Graph.prototype.forEachNode = function(cb) {
  // iterate through each nodes and apply callback on each
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};

// new function for new test

Graph.prototype.countEdges = function(node) {
  return this.edges[node].length;
};

/*
  Complexity: What is the time complexity of the above functions? 
    addNode is O(1)
    contains is O(n)
    removeNode is O(n^2)
    hasEdge is O(n)
    addEdge is O(1)
    removeEdge is O(n)
    forEachNode is O(n)
 */
