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
//length function
length(){
  if(this.head!=null){
let pointer=this.head;
let length =0;
while(pointer !=null)
{
  pointer=pointer.next
  length +=1;
}
return length;
  }
  else {
    return 0;
  }}
//--------------------------------------------------------------
//kth function
kth(k){
 if(k<0){return "exception";} 
 if(k>this.length()){return "exception"}
if(this.head!=null){
let pointer=this.head;
let count =this.length()-k-1;
for(let i=0;i<count;i++)
{pointer=pointer.next}
  return pointer.value;
}
else {return "empty";}}
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

//--------------------------------------------------------------
//zipLists
zipLists(list1 , list2){
  let p1 = list1.head;
  let p2 = list2.head;
  while(list2.head !=null && p1!= null){
  list2.head=list2.head.next;
  p2.next=p1.next;
  p1.next=p2;
  p2=list2.head;
  p1=p1.next.next;

  }
  while( list2.head != null){list1.append(list2.head.value); list2.head=list2.head.next; }

return list1.toString()+"\n"+  list2.toString();
  }
  
}

module.exports = LinkedList; 
