'use strict'
//--------------------------------------------------
function count(text){

  let arrWords = text.split(" ");
   let mappingWords = {};
 let cc=0;
   for (let i = 0; i < arrWords.length; i++) {
     let counter = mappingWords[arrWords[i]];
     
     let appearence = counter ? counter : 0;
     if(appearence>1){break}
     mappingWords[arrWords[i]] = appearence + 1;
   }
   return mappingWords;
 
 }
 function repeated_word(text){
  let c=count(text);
  let mostAppearence;
  let counter=1;
  for (let x in c) {
  if(c[x]>counter){
    mostAppearence=x;
  }
  }
  return mostAppearence;

 }
 module.exports=repeated_word;