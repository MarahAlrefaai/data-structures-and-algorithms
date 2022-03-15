'use strict';


const Queue = require('../queue.js');

describe('testing Queue', () => {
    it('test creating an Queue instance', () => {
        const queue = new Queue();
        expect(queue).toBeDefined();
        expect(queue.front).toBeNull();
        expect(queue.rear).toBeNull();
    })
})
describe('get all values of the queue', () => {
 
  it('add to queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    console.log("after add to queue"+queue.tostring());
     expect(queue.length).toEqual(2);
      
  })
  it('delete to queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    console.log(queue.tostring());
    expect(queue.dequeue()).toEqual(1);
    console.log("after delete to queue"+queue.tostring());
      
  })
  it('peek', () => {
    const queue = new Queue();
    queue.enqueue(1);
    console.log("peek :"+queue.tostring());
    expect(queue.peek()).toEqual(1);
    queue.dequeue();
    expect(queue.peek()).toEqual("empry stack");
      
  })

  it('check if the queue is empty or  not', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.isempty()).toEqual(false);
    queue.dequeue();
    expect(queue.isempty()).toEqual(true);
  })

  
})
