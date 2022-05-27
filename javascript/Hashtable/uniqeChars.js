'use strict'
 const HashTable = require('./Hashtable');
//--------------------------------------------------
 function uniqeChars(text) {
    let arrWords = text.split("");
    const hashtable = new HashTable(60);
    console.log(arrWords);
    for (let i = 0; i < arrWords.length; i++) {

      if(!((arrWords[i].toLowerCase()<65||arrWords[i].toLowerCase()>90)||(arrWords[i].toLowerCase()<97||arrWords[i].toLowerCase()>122)))
      {
      if (!(hashtable.contain(arrWords[i].toLowerCase()))) {
        //console.log(arrWords[i].toLowerCase())
        hashtable.set(arrWords[i].toLowerCase(), arrWords[i].toLowerCase());
      }else{
        console.log("---------------");
        console.log("not uniqe")
        return false; }     
      }      
    }
      return true;
    }
    

//console.log(repeatedWord("hello marah"))
//console.log(repeatedWord("The quick brown fox jumps over the lazy dog"))
//console.log(repeatedWord("I love cats"))
 //console.log(repeatedWord("Donald the duck"))
 //module.exports=repeatedWord;