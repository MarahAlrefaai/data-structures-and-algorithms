'use strict'
const Node =require("./Node");
class  LinkedList{
  constructor() {
    this.head = null;
    this.length =0;
}
//--------------------------------------------------------------
//append
append(value) {
const node = new Node(value);
if(!this.head) { //means LL is empty
  this.head = node;
  this.length++;
} else { //means LL is not empty
  let currentNode = this.head;

  while (currentNode.next) {
      currentNode = currentNode.next;
  }
  currentNode.next = node;
  this.length++;
}
}
//--------------------------------------------------------------
//length function
length(){
if(this.head!=null){
return this.length;
}
else {
return 0;
}}
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
}


}
module.exports=LinkedList;