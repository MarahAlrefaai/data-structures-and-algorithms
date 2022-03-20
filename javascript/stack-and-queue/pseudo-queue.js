'use strict'

const Stack = require('./stack.js');

class pseudoQueue{
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
//------------------------------------------
//enqueue
enqueue(value){
this.stack1.push(value);
}
//-------------------------------------
//dequeue
dequeue(){
  if(this.stack1.isempty()){return "empty stack"}
  else{
  this.stack2.push(this.stack1.peek());
  this.stack1.pop();}
 }
}
module.exports = pseudoQueue; 