'use strict';


const Hashtable = require('../Hashtable');

describe('HashMap', () => {
   /* it('test set to hash map && keys ', () => {
        const hashmap01=new Hashtable(60);
        hashmap01.set("marah","learner");
        hashmap01.set("razan","instructor");
        hashmap01.set("batool","instructor");
        hashmap01.set("salam","instructor");
        
let arr =["razan", "salam", "batool"];
        expect(hashmap01.keys()).toStrictEqual(arr);
        expect(hashmap01.contain('razan')).toBe(true); 
        expect(hashmap01.contain('jhadsfjhfj')).toBe(false); 
        expect(hashmap01.get("salam")).toBe("instructor"); 
        console.log("Once upon a time, there was a brave princess who...")
        
                
    })*/

    it('test repeated words ', () => {
        const hashmap01=new Hashtable(60);
       
       //expect(hashmap01.get("Once")).toBe("Table is empty"); 
       console.log(hashmap01.repeatedWord("Once upon a time, there was a brave princess who..."))
  console.log("======>"+hashmap01.repeatedWord("It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."))

 console.log(hashmap01.repeatedWord("It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."))
      // expect(hashmap01.repeatedWord("Once upon a time, there was a brave princess who...")).toBe("a"); 
      // expect(hashmap01.repeatedWord("Once a was a ")).toBe("a"); 
       
       /*expect(hashmap01.repeatedWord( "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...")).toBe("it"); 

       expect(hashmap01.repeatedWord( "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...")).toBe("I")
       expect(hashmap01.get("Once")).toBe("Once");*/
 
    
    })
})

