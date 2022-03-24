'use strict'
const stack=require('./stack');
let Stack =new stack();
function validate_brackets(text){
  Stack.push(text);
  console.log(text);
 if(Stack.peek().includes("{")||Stack.peek().includes("}")||Stack.peek().includes("(")||Stack.peek().includes(")")||Stack.peek().includes("[")||Stack.peek().includes("]")){
let SquareCount=0,curlyCount=0,roundCount=0;
  for (let i = 0; i < Stack.peek().length; i++) {
    if(Stack.peek()[i].includes("{")||Stack.peek()[i].includes("}")){curlyCount++;}
    if(Stack.peek()[i].includes("(")||Stack.peek()[i].includes(")")){roundCount++;}
    if(Stack.peek()[i].includes("[")||Stack.peek()[i].includes("]")){SquareCount++;}}
if((SquareCount%2==0)&&(roundCount%2==0)&&(curlyCount%2==0)){return true;}
else{return false;}
}else{ return "there is no Brackets  in this string"; }}
module.exports= validate_brackets;