'use strict';
const Node = require('./node');

class LinkedList {
  
    constructor() {
        this.head = null;
        this.length =0;
    }
  
//--------------------------------------------------------------
//insert 
  insert(value) {
    const node = new Node(value);
    if(!this.head) { //means LL is empty null is falsy value (not false)
        this.head = node;
        this.length++;
    } else { //means LL is not empty
        node.next = this.head;
        this.head = node;
        this.length++;
    }
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
      this.length++;
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
   this.length++;
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
   this.length++;
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
list2.length=list2.length-1;
list1.length=list1.length+1;
  }
  //list2.head != null
 if(list2.length>=1){
  list1.append(list2.head.value);
  list2.head=list2.head.next;
  list2.length=list2.length-1;
  list1.length=list1.length+1;}

return list1.toString(); }
//-----------------------------------------------
//palindrome
palindrome(){
let p1=this.head;
let list2=new LinkedList();
let p2=list2.head;
while(p1!=null){
 list2.insert(p1.value);
 p1=p1.next;}
p1=this.head;
p2=list2.head;
while(p1!=null){
  if(p1.value == p2.value){
  p1=p1.next;
  p2=p2.next;
  } else{return false;}
 } return true;}

 

}


module.exports = LinkedList; 
