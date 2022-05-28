'use strict'
const Edge = require('./edge.js');
const Node = require('./vertix.js')
class Graph {
  constructor() {
    this.nodes=[];
    this.collectionOfNodes = [];
    this.sizeOfGraph = 0;
  }
   //-------------------------------------------------
  addNode(value) {
    let newNode = new Node(value)
    this.collectionOfNodes.push(newNode);
    this.nodes[newNode.value] = [];
    this.sizeOfGraph++;
    return newNode;
  }

  //-------------------------------------------------
  addEdge(node1, node2) {

    if (this.nodes[node1.value] || !this.nodes[node2.value]) {

      this.nodes[node1.value].push(new Edge(node2.value));
      this.nodes[node2.value].push(new Edge(node1.value));

    } else {
      return 'one or both vertex is not existed'
    }
  }
  //-------------------------------------------------
  get_neighbors(vertex) {

    if (this.nodes[vertex]) {
      return this.nodes[vertex];
    }
  }
   //-------------------------------------------------
  get_nodes() {
   
  return this.collectionOfNodes;
 }
  //-------------------------------------------------
 size() {
  if (this.sizeOfGraph > 1) {
    return this.sizeOfGraph ;
  }else {
    return "empty"
  }
}
 //-------------------------------------------------
}

module.exports=Graph;