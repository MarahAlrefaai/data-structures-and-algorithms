'use strict'

const Node= require('../vertix');
const Graph= require('../graph.js');
describe('test graph',()=>{

 
it('Node can be successfully added to the graph ',async()=>{
    // expect(g.size()).toBe(0);//before adding     
    let g = new Graph();
    expect( g.addNode("A").value).toBe("A");//after adding     
  })
  it(' An edge can be successfully added to the graph ',async()=>{
  
    let g = new Graph();
    g.addNode("A");
    g.addNode("B");
    g.addNode("C");
    let A = new Node("A") 
    let C = new Node("C") 
    g.addEdge(A, C);
    console.log( g.get_neighbors("A"))
    let arr= [ "Edge"+ { vertex: 'C', weight: 0 } ]
    let n=g.get_neighbors("A")
    
   expect(typeof n).toBe( typeof arr);
    

  })
  it(' A collection of all nodes can be properly retrieved from the graph && The proper size is returned, representing the number of nodes in the graph',async()=>{
  
    let g = new Graph();
    g.addNode("A");
    g.addNode("B");
    g.addNode("C");
    console.log( g.get_nodes())
    expect(g.get_nodes().length).toEqual(3)
    
  })
  it(' All appropriate neighbors can be retrieved from the graph',async()=>{
  
    let g = new Graph();
    let first =g.addNode("A");
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
  
    expect(g.get_neighbors("A").length).toBe(2);

  })
  it('The proper size is returned, representing the number of nodes in the graph && An empty graph properly returns null',async()=>{
  
    let g = new Graph();
    expect(g.size()).toBe(null); 
    
    g.addNode("A");
    g.addNode("B");
    g.addNode("C");
    g.addNode("D");
    g.addNode("E");
        
    expect(g.size()).toBe(5); 
   
  })
  it('breadth_first  graph',async()=>{
  
    let g = new Graph();
    let A =g.addNode("A");
    let B =g.addNode("B");
    let C =g.addNode("C");
    let D =g.addNode("D");
    let E =g.addNode("E");
        
  
    g.addEdge(A, C);
    g.addEdge(A, B);
    g.addEdge(B, E);
    expect(g.breadth_first(A).length).toBe(4);  
    //console.log(g.breadth_first(A))
})

it('  graph',async()=>{
  
  let g = new Graph();
  let A =g.addNode("A");
  let B =g.addNode("B");
  let C =g.addNode("C");
  let D =g.addNode("D");
  let E =g.addNode("E");
  let F =g.addNode("F");
  let H =g.addNode("H");
  let G =g.addNode("G");

  g.addEdge(A,0,B);
  g.addEdge(A,0,D);
  g.addEdge(D,0,B);
  g.addEdge(B,0,C);
  g.addEdge(C,0,G);
  g.addEdge(D,0,F);
  g.addEdge(D,0,H);
  g.addEdge(D,0,E);
   
 
})

})