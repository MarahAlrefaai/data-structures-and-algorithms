'use strict';


const Stack = require('../stack.js');

describe('testing stack', () => {
    it('test creating an stack instance', () => {
        const stack = new Stack();
        expect(stack).toBeDefined();
        expect(stack.top).toBeNull();
    })
})

describe('get all values of the stack', () => {
 
    it('add to stack', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      console.log(stack.tostring());
       expect(stack.length).toEqual(2);
        
    })
    it('delet the top node from the stack', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      console.log(stack.tostring());
      expect(stack.length).toEqual(3);
      stack.pop();
      console.log(stack.tostring());
      expect(stack.length).toEqual(2);
    })
    it('check if the stack is empty or  not', () => {
      const stack = new Stack();
      stack.push(1);
      expect(stack.isempty()).toEqual(false);
      stack.pop();
      expect(stack.isempty()).toEqual(true);
    })
    it('peek', () => {
      const stack = new Stack();
      stack.push(1);
      expect(stack.peek()).toEqual(1);
      stack.pop();
      expect(stack.peek()).toEqual("empry stack");
      
    })

  })