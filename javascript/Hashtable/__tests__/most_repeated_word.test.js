'use strict';
const Hashtable = require('../Hashtable');
const MostMostRepeatedWord=require("../most_repeated_word")
describe('HashMap', () => {

   it('test  MostMostRepeatedWord', () => {
     

// console.log(MostMostRepeatedWord("In a galaxy far far away"))
// console.log(MostMostRepeatedWord("No. Try not. Do or do not. There  is not try."))
// console.log(MostMostRepeatedWord("Taco cat ate a taco"))
   
expect(MostMostRepeatedWord("In a galaxy far far away")).toBe("far")
expect(MostMostRepeatedWord("No. Try not. Do or do not. There is no try.")).toBe("do")
expect(MostMostRepeatedWord("Taco cat ate a taco")).toBe("taco")
   
        
                
    })   
})