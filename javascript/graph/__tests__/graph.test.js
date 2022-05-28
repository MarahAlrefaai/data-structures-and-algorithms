'use strict'

const Node= require('../vertix');
const Graph= require('../graph.js');
describe('test graph',()=>{

  it('test graph ',async()=>{
    
    let g = new Graph();
    g.addNode("A");
    g.addNode("B");
    g.addNode("C");
    g.addNode("D");
    g.addNode("E");
        
    let D = new Node("D")
    let B = new Node("B")
    let C = new Node("C")
    let A = new Node("A")
    let E = new Node("E")
    
    g.addEdge(A, C);
    g.addEdge(A, B);
    g.addEdge(D, E);
    expect(g.get_neighbors("A")+"").toBe("[object Object],[object Object]");
    expect(g.size()).toBe(5);    
    expect(g.get_nodes().length).toEqual(5)
  })
})

