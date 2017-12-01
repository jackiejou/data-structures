

// Instantiate a new graph
var Graph = function() {
  // create array to hold list of nodes
  // create array to hold edges for the nodes
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // push node into list of nodes
  // set the edges array to hold its own edges list
  this.nodes.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // check if node is inside list of nodes
  return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // find the index of the node
  // remove it from list of nodes
  this.nodes.splice(this.nodes.indexOf(node), 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check if toNode is inside fromNodes' edges list
  
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // push toNode into fromNode's edges list
  // push fromNode into toNode's edges list
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // find the index of toNode inside of fromNode's edges list and remove it
  // find the index of fromNode inside of toNode's edges list and remove it
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // for loop and iterator through each nodes
  // pass in each node's edges list into the callback
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


