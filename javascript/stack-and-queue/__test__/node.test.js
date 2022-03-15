'use strict'

const Node= require('../node.js');

describe('test node',()=>{

  it('test node ',async()=>{
    const value="node value";
    const node =new Node(value);
    expect(node).toBeInstanceOf(Node);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  })
})