'use strict'
const LinkedList = require("./LinkedList")


class Hashtable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
    this.lengthTable = 0;
  }
  //--------------------------------------------------
  set(key, value) {
    //if it's empty
    console.log("hashed Index " + this.hash(key));
    if (!this.table[this.hash]) {
      this.table[this.hash(key)] = new LinkedList();
    }
    this.table[this.hash(key)].append({ [key]: value });
    this.lengthTable++;
  }

  //--------------------------------------------------
  contain(key) {
    const currentElement = this.hash(key);
    if (!this.table[currentElement]) {
      return false;
    }
    let pointer = this.table[currentElement].head;
    while (pointer) {
      if (pointer.value[key]) {
        return true;
      }
      pointer = pointer.next;
    }
    return false;
  }

  //--------------------------------------------------
  hash(key) {
    let charAscii = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt();
    }, 0)

    return (charAscii * 599) % this.size;
  }
  //--------------------------------------------------
  get(key) {
    if (this.lengthTable == 0) {
      return "Table is empty";
    }
    else {

      const index = this.hash(key);
      let pucet = this.table[index].head;
      return pucet.value[key];

    }
  }
  ///////////////////////////////////////////////////////////

  keys() {
    if (!this.lengthTable == 0) {
      const arrKey = [];
      this.table.forEach(mypacet => {
        let pointer = mypacet.head;
        while (pointer) {
          for (let i in pointer.value) {
            arrKey.push(i);
          }
          pointer = pointer.next;
        }
      });
      return arrKey;
    }
    else {
      return "there is no pacets"
    }
  }
  //----------------------------------------------------------
  repeatedWord(text) {
    let arrWords = text.split(" ");
    let mappingWords = {};

    for (let i = 0; i < arrWords.length; i++) {

      let counter = mappingWords[arrWords[i]];
      console.log(" loop 1 counter  value is ====> " +mappingWords[arrWords[i]]+" >>>>>>"+arrWords[i])
      let appearence = counter ? counter : 0;
      console.log(" loop 1 appearence  value is ====> " +mappingWords[arrWords[i]]+" >>>>>>"+arrWords[i])
      if (appearence > 1) { break }
      mappingWords[arrWords[i]] = appearence + 1;
      this.set(arrWords[i],arrWords[i])
    }
    let mostAppearence;
    let counter = 1;
    for (let x in mappingWords) {
      if (mappingWords[x] > counter) {
        mostAppearence = x;
      
      }
    }    return mostAppearence;  }
}

module.exports = Hashtable;