'use strict'
const { binarySearchTree } = require('../binaryTree');
let binarysearchtreeTEST = null;
describe('test Tree',()=>{
  beforeAll( ()=>{
   binarysearchtreeTEST = new binarySearchTree();
   binarysearchtreeTEST.add(100);
   binarysearchtreeTEST.add(150);
   binarysearchtreeTEST.add(75);
   binarysearchtreeTEST.add(80);
})
it('test  root ',()=>{
  console.log(binarysearchtreeTEST.root.value)
   expect(binarysearchtreeTEST.root.value).toEqual(100)
})
it('test preOrder ',()=>{
   let output = [100,75,80,150];
   expect(binarysearchtreeTEST.preOrder()).toEqual(output)
})
it('test  inOrder ',()=>{
  let output = [75,80,100,150];
   expect(binarysearchtreeTEST.inOrder()).toEqual(output)
})
it('test postOrder ',()=>{
  let output = [80,75,150,100];
   expect(binarysearchtreeTEST.postOrder()).toEqual(output)
})  
it('test contains ',()=>{
   expect(binarysearchtreeTEST.contains(88)).toBe(false);
   expect(binarysearchtreeTEST.contains(100)).toBe(true);
})


})
