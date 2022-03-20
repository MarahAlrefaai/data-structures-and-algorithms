'use strict';


const pseudoQueue = require('../pseudo-queue');

describe('enqueue pseudoQueue', () => {
 
  it('add to queue', () => {
    const pseudoqueue = new pseudoQueue();
    pseudoqueue.enqueue(1);
    pseudoqueue.enqueue(2);
  console.log("after add to pseudoqueue 1111"+pseudoqueue.stack1.tostring());  
  console.log("after add to pseudoqueue 2222"+pseudoqueue.stack2.tostring());  
      
  })

  it('add to queue', () => {
    const pseudoqueue = new pseudoQueue();
    pseudoqueue.enqueue(1);
    pseudoqueue.enqueue(2);
    console.log("after add to pseudoqueue"+pseudoqueue.stack1.tostring()); 
    
    pseudoqueue.dequeue();
    pseudoqueue.dequeue();
    
    console.log("after delete 11111 to pseudoqueue"+pseudoqueue.stack1.tostring()); 
    console.log("after delete 22222 to pseudoqueue"+pseudoqueue.stack2.tostring()); 
    
  })
  it('exeption', () => {
    const pseudoqueue = new pseudoQueue();   
    expect(pseudoqueue.dequeue()).toBe("empty stack")  
    
  })
})
