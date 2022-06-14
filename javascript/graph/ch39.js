const Graph = require('./graph')
function ch37(node1,node2,g){
  if(g.size()){
let adjacency =g.breadth_first(node1);
console.log(adjacency)
if(adjacency.includes(node2))return true;
else return false;}
else{"empty graph"}
}

function salam(arr){
  let re={
    "a": "",
    "b": "",
    "c": "",
    "d": "",
    "e": "",
  };
for(let i=0 ; i < arr.length;i++){

  for(let j=0 ; j < arr.length;j++){

   if(j==0&& arr[i][j]==true){re["a"]="==> b"}
   if(j==1&& arr[i][j]==true){re["a"]="==> c"}
   if(j==2&& arr[i][j]==true){re["a"]="==> d"}
   if(j==3&& arr[i][j]==true){re["a"]="==> e"}
   if(j==4&& arr[i][j]==true){re["a"]="==> "}

  }}
  console.log(re)
}

const adjacencyMatrix = [
  [false, true, true, false],
  [false, false, true, true],
  [false, false, false, false],
  [false, false, true, false],
];

salam(adjacencyMatrix)

// let g = new Graph();
//     let A =g.addNode("A");
//     let B =g.addNode("B");
//     let C =g.addNode("C");
//     let D =g.addNode("D");
//     let E =g.addNode("E");
        
  
//     g.addEdge(A,0, C);
//     g.addEdge(A,0, B);
//     g.addEdge(B,0, E);
    
//    console.log(ch37(B,D,g))