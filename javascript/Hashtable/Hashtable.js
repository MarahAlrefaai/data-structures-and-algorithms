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

    const hashTable = new Hashtable(60);
    let ArrayOfWords = (text.toLowerCase()).split(/[, ]+/);
    let word = "", wordRepeated = "";
    for (let i = 0; i < ArrayOfWords.length; i++) {
      word = ArrayOfWords[i].toLowerCase();
      if (!hashTable.contain(word)) {

        hashTable.set(ArrayOfWords[i].toLowerCase(), ArrayOfWords[i].toLowerCase());
      } else {
        return ArrayOfWords[i];
      }
    } 
    return wordRepeated;
  }
}

module.exports = Hashtable;