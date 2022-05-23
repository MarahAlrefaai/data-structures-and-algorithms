'use strict';


const Hashtable = require('../Hashtable');

describe('HashMap', () => {
   it('test set to hash map && keys ', () => {
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
        
                
    })

   
})

