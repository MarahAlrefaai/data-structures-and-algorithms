'use strict';
const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }
  
//--------------------------------------------------------------
//insert 
  insert(value) {
    const node = new Node(value);
    if(!this.head) { //means LL is empty null is falsy value (not false)
        this.head = node;
    } else { //means LL is not empty
        node.next = this.head;
        this.head = node;
    }
}
//--------------------------------------------------------------
//append
append(value) {
  const node = new Node(value);
  if(!this.head) { //means LL is empty
      this.head = node;
  } else { //means LL is not empty
      let currentNode = this.head;

      while (currentNode.next) {
          currentNode = currentNode.next;
      }
      currentNode.next = node;
  }
}
 //--------------------------------------------------------------
//include
includes(value){
  if(this.head!=null){
  let pointer = this.head;

  while (pointer!=null) {

    if(pointer.value!=value)
  {pointer = pointer.next;}

    else return true;}
    
    return false;
}
else return false;
}
//--------------------------------------------------------------
//insert before
insertbefore(value,newValue){
  if(this.head!=null){
    if(value==this.head.value){
      const node = new Node(newValue);
      node.next=this.head;
      this.head=node;
    }
    else{
  if(this.includes(value)){
  const node = new Node(newValue);
   let pointer =this.head;
   while(pointer.next.value!=value){
    pointer=pointer.next;
   }
   node.next=pointer.next;
   pointer.next=node;
  }
  else return "No change, method exception";//third if
}
  }//second if
  else return "empty";/*first if*/}
//--------------------------------------------------------------
//insert after

insertafter(value,newValue){
  if(this.head!=null){
  if(this.includes(value)){
  const node = new Node(newValue);
   let pointer =this.head;
   while(pointer.value!=value){
    pointer=pointer.next;
   }
   node.next=pointer.next;
   pointer.next=node;
  }
  else return "No change, method exception";//second if
}else return "empty";/*first if*/}
//--------------------------------------------------------------
//to string 
toString(){
  let allValues="";
  if(this.head!=null){
  let pointer = this.head;
  while (pointer!=null) {
    allValues  =allValues+`{ ${pointer.value} } -> `;
    pointer = pointer.next;
}
allValues  =allValues+`NULL`;
return allValues;
}
else return "empty list";
}}
module.exports = LinkedList;


 
