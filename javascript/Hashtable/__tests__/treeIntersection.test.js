const { BinaryTree }=require('../../tree/binaryTree');
const Node = require('../../tree/node.js');
const tree_intersection=require('../treeIntersection/tree-intersection');
describe('tree_intersection', () => {
  it ('hashmap tree test ', () => {
     
let testtree1 ;
let testtree2 ;
  let node1_1 = new Node(150);
  let node1_2 = new Node(100);
  let node1_3 = new Node(250);
  let node1_4 = new Node(75);
  let node1_5 = new Node(160);
  let node1_6 = new Node(200);
  let node1_7 = new Node(350);
  let node1_8 = new Node(125);
  let node1_9 = new Node(175);
  let node1_10 = new Node(300);
  let node1_11 = new Node(500);
//=============================================   
    let node2_1 = new Node(42);
    let node2_2 = new Node(100);
    let node2_3 = new Node(600);
    let node2_4 = new Node(15);
    let node2_5 = new Node(160);
    let node2_6 = new Node(200);
    let node2_7 = new Node(350);
    let node2_8 = new Node(125);
    let node2_9 = new Node(175);
    let node2_10 = new Node(4);
    let node2_11 = new Node(500);  
    //================================ 
    node1_1.left = node1_2;
    node1_1.right = node1_3;
    node1_2.left = node1_4;
    node1_2.right = node1_5;
    node1_3.left = node1_6;
    node1_3.right = node1_7;
    node1_5.left = node1_8;
    node1_5.right = node1_9;
    node1_7.left = node1_10;
    node1_7.right = node1_11;
    //================================
    node2_1.left = node2_2;
    node2_1.right = node2_3;
    node2_2.left = node2_4;
    node2_2.right = node2_5;
    node2_3.left = node2_6;
    node2_3.right = node2_7;
    node2_5.left = node2_8;
    node2_5.right = node2_9;
    node2_7.left = node2_10;
    node2_7.right = node2_11;
    //==================================
    testtree1 = new BinaryTree(node1_1);
    testtree2 = new BinaryTree(node2_1);
    testtree3 = new BinaryTree();
    console.log("fun ==> " +tree_intersection(testtree1,testtree2)); 
    console.log("[100,160,125,175,200,350,500]")
  let arr=[100, 160, 175, 200, 350, 500];
  expect(tree_intersection(testtree1,testtree2)).toStrictEqual(arr);
  })
  /*  it ('hshmap tree test ', () => {
      let testtree1 ;
      let testtree2 ;
      let testtree3 = new BinaryTree();

  let node1_1 = new Node(150);
  let node1_2 = new Node(100);
  let node1_3 = new Node(250);
  let node1_4 = new Node(75);
  let node1_5 = new Node(160);
  let node1_6 = new Node(200);
  let node1_7 = new Node(350);
  let node1_8 = new Node(125);
  let node1_9 = new Node(175);
  let node1_10 = new Node(300);
  let node1_11 = new Node(500);

    let node2_1 = new Node(42);
    let node2_2 = new Node(100);
    let node2_3 = new Node(600);
    let node2_4 = new Node(15);
    let node2_5 = new Node(160);
    let node2_6 = new Node(200);
    let node2_7 = new Node(350);
    let node2_8 = new Node(125);
    let node2_9 = new Node(175);
    let node2_10 = new Node(4);
    let node2_11 = new Node(500);   

    node1_1.left = node1_2;
    node1_1.right = node1_3;
    node1_2.left = node1_4;
    node1_2.right = node1_5;
    node1_3.left = node1_6;
    node1_3.right = node1_7;
    node1_5.left = node1_8;
    node1_5.right = node1_9;
    node1_7.left = node1_10;
    node1_7.right = node1_11;


    node2_1.left = node2_2;
    node2_1.right = node2_3;
    node2_2.left = node2_4;
    node2_2.right = node2_5;
    node2_3.left = node2_6;
    node2_3.right = node2_7;
    node2_5.left = node2_8;
    node2_5.right = node2_9;
    node2_7.left = node2_10;
    node2_7.right = node2_11;
    testtree2 = new BinaryTree(node2_1);
    testtree1 = new BinaryTree(node1_1);
        expect(tree_intersection(testtree1,testtree3)).toBe("one of the trees is empty");
    })
*/
})