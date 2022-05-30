'use strict'
 const HashTable = require('./Hashtable');
//--------------------------------------------------

//  function repeatedWord(text) {
//     let arrWords = (text.toLowerCase()).split(/[, ]+/);
//     let mappingWords = {};
//     let mostAppearence;
//     let counterOfrepeate = 1;
//     const hashtable = new HashTable(60);
//     for (let i = 0; i < arrWords.length; i++) {
//       let counter = mappingWords[arrWords[i]];
//       let appearence = counter ? counter : 0;
//       mappingWords[arrWords[i]] = appearence + 1;
//       if (!hashtable.contain(arrWords[i])) {
//         hashtable.set(`${arrWords[i].toLowerCase()}`,`${appearence + 1}`);
//       } 
//       if (mappingWords[arrWords[i]] > counterOfrepeate){
       
//         counterOfrepeate =mappingWords[arrWords[i].toLowerCase()];
//         mostAppearence = arrWords[i].toLowerCase();
//         }  
//     }
//     //console.log(mappingWords)
//     return mostAppearence;  }

function repeatedWord(text) {
  let arrWords = (text.toLowerCase()).split(/[, ]+/);
  let mappingWords = {};
  let mostAppearence;
  let counterOfrepeate = 1;
  const hashtable = new HashTable(60);
  for (let i = 0; i < arrWords.length; i++) {
    let counter = mappingWords[arrWords[i]];
    let appearence = counter ? counter : 0;
    mappingWords[arrWords[i]] = appearence + 1;
    if (!hashtable.contain(arrWords[i])) {
      hashtable.set(`${arrWords[i].toLowerCase()}`,`${appearence + 1}`);
    } 
    if (mappingWords[arrWords[i]] > counterOfrepeate){
     
      counterOfrepeate =mappingWords[arrWords[i].toLowerCase()];
      mostAppearence = arrWords[i].toLowerCase();
      }  
  }
  //console.log(mappingWords)
  return mostAppearence;  }

console.log(repeatedWord("In a galaxy far far away"))
console.log(repeatedWord("No. Try not. Do or do not. There  is not try."))
console.log(repeatedWord("Taco cat ate a taco"))
 module.exports=repeatedWord;

