'use strict'
const Node = require('./node');


class queue {
  
  constructor() {
      this.rear = null;
      this.front = null;
      this.length =0;
  }
//-------------------------------------------
//enqueue
enqueue(newvalue){
  
    let node =new Node(newvalue);
 if(this.length==0){
 this.rear=node;
 this.front=node;
 this.length++;
 }
 else{
  this.rear.next=node;
  this.rear=this.rear.next;
   this.length++;
 }}
 //-------------------------------------------
//tostring
tostring(){
  let stackValues="";
let p1=this.front;
if(this.front!=null){
while(p1!=null){
  stackValues=stackValues+`{ ${p1.value} } -> `;
  p1=p1.next;}
  stackValues=stackValues+`NULL`;
return stackValues;
}
else {
  stackValues=`empty`;
return stackValues;}
}
//----------------------------------------------
//dequeue
dequeue(){
  if(this.front==null){return "empry stack";}
  else{
    let val=this.front.value;
    this.front=this.front.next;
    this.length--;
    return val;
  }
}
//-----------------------------------------------
//peek
peek(){
  if(this.length==0){return "empry stack"}
  else{return this.front.value;}
}
//----------------------------------------------
//isempty
isempty(){
  if(this.length>0){return false;}
  else{return true;}
}
}


module.exports = queue; 