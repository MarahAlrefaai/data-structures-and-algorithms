'use strict'
const Edge = require('./edge.js');
const Node = require('./vertix.js')
const queue = require('../stack-and-queue/queue.js')
class Graph {
  constructor() {
    this.nodes = [];
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
  addEdge(node1,weight, node2) {
    if(weight==null){weight=0}
    if (this.nodes[node1.value] || !this.nodes[node2.value]) {

      this.nodes[node1.value].push(new Edge(node2.value, weight, node2));
      this.nodes[node2.value].push(new Edge(node1.value, weight, node1));

    } else {
      return 'one or both vertex is not existed'
    }
  }
  //-------------------------------------------------
  addEdgeDirectedGraph(node1,weight ,node2) {
if(weight==null){weight=0}
    if (this.nodes[node1.value] || !this.nodes[node2.value]) {

      this.nodes[node1.value].push(new Edge(node2.value,weight, node2));

    } else {
      return 'one or both vertex is not existed'
    }
  }
  //-------------------------------------------------
  get_neighbors(vertex) {

    if (this.nodes[vertex]) {
      // console.log("get_neighbors ==>"+this.nodes[vertex])
      return this.nodes[vertex];
    }
  }
  //-------------------------------------------------
  get_nodes() {

    return this.collectionOfNodes;
  }
  get_spicific_nodes(value) {
    for (let i = 0; i < collectionOfNodes.length; i++) {
      if (this.collectionOfNodes[i].value == value)
        return this.collectionOfNodes[i];
    }
  }
  //-------------------------------------------------
  size() {
    if (this.sizeOfGraph > 1) {
      return this.sizeOfGraph;
    } else {
      return null
    }
  }
  //-------------------------------------------------
  breadth_first(startNode) {
    let visited = [];
    let Qnodes = new queue();
    Qnodes.enqueue(startNode);
    while (!Qnodes.isempty()) {
      // console.log(Qnodes.peekNode().value)
      if(!(visited.includes(Qnodes.peekNode().value))){
      visited.push(Qnodes.peekNode().value);}
      let top = Qnodes.dequeue()
      //  console.log( Qnodes.length)
      //  console.log(top)
      let child = this.get_neighbors(top.value)
      //console.log(child.pop());
      while (child.length > 0) {
        // console.log(child.length);

        let n = child.pop().node
        // console.log("this is n ");
        // console.log(n);
        Qnodes.enqueue(n)
      }

    }
    console.log("visited array " + visited);
    //console.log(visited.length);

    return visited;
  }

 
}

module.exports = Graph;