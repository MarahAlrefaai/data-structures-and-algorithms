'use strict'
const Node = require('./node');


class stack {
  
  constructor() {
      this.top = null;
      this.length =0;
  }
//---------------------------------------------
//push
 push(newvalue){
   let node =new Node(newvalue);
if(this.length==0){
this.top=node;
this.length++;
}
else{
  node.next=this.top;
  this.top=node;
  this.length++;
}}
//----------------------------------------------
//pop
pop(){
if(this.length==0){return "it's allredy empty"}
else{
  this.top=this.top.next;
  this.length--;
}  
}
//----------------------------------------------
//isempty
isempty(){
  if(this.length>0){return false;}
  else{return true;}
}
//----------------------------------------------
//peek
peek(){
  if(this.length==0){return "empry stack"}
  else{return this.top.value;}
}
//----------------------------------------------
//tostring
tostring(){
let stackValues="";
let p1=this.top;
if(this.top!=null){
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


}
module.exports = stack; 