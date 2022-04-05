'use strict'
const { BinaryTree } = require('../binaryTree');
const node = require('../node');

let testTree = null;
describe('testing BinaryTree',()=>{
    beforeAll( ()=>{
        const node1 = new node(1);
        const node2 = new node(2);
        const node3 = new node(3);
        const node4 = new node(4);
        const node5 = new node(5);
        node1.left = node2;
        node1.right = node3;
        node2.left = node4;
        node2.right = node5;
        testTree = new BinaryTree(node1);
    }

    )
    it('test root ',()=>{
        expect(testTree.root.value).toEqual(1)
    })
    it('test preOrder ',()=>{
        let output = [1,2,4,5,3];
        expect(testTree.preOrder()).toEqual(output)

    })
    it('test inOrder ',()=>{
        let output = [4,2,5,1,3];
        expect(testTree.inOrder()).toEqual(output)
    })
    it('test postOrder ',()=>{
        let output = [4,5,2,3,1];
        expect(testTree.postOrder()).toEqual(output)
    })  
    it('test max ',()=>{
        expect(testTree.maximmum()).toEqual(5)
     })
     it('breadth first', () => {
        let node1 = new node(1);
        let tree3 = new BinaryTree(node1);
        let node2 = new node(2);
        node1.left=node2;
        let node3 = new node(3);
        node1.right=node3;
        let node4 = new node(4);
        node2.left=node4;
        let arr = [1, 2, 3, 4];
        let newRR=tree3.breadthFirst();
        console.log(newRR);
        expect(newRR).toEqual(arr);
      });
})
