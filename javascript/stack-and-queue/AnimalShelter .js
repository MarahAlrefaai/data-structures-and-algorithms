'use strict'

const pseudoQueue = require('./pseudo-queue.js');

class AnimalShelter {
  constructor(){
   this.pseudoqueue=new pseudoQueue();
  }
//------------------------------------------
//enqueue
enqueue(animal){

if(animal=="cat"||animal=="dog"){  this.pseudoqueue.enqueue(animal); }
else { return null; }
}
//-------------------------------------
//dequeue
dequeue(pref){
  
  this.pseudoqueue.dequeue();
}
}
module.exports = AnimalShelter ; 