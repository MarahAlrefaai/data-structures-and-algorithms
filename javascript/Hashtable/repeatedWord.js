'use strict'

const HashTable = require('../Hashtable');
//----------------------------------------------------------
function repeatedWord(text) {
//console.log(typeof text);
if(typeof text!="string"){return "you didn't send string "}
else{
  const hashtable = new HashTable(60);
  let ArrayOfWords = (text.toLowerCase()).split(/[, ]+/);
  let  wordRepeated = "";
  for (let i = 0; i < ArrayOfWords.length; i++) {

    if (!hashtable.contain(ArrayOfWords[i])) {

      hashtable.set(ArrayOfWords[i].toLowerCase(), ArrayOfWords[i].toLowerCase());
    } else {
      return ArrayOfWords[i];
    }
  }
  return "there is no repeated ";
}
}

module.exports = repeatedWord;