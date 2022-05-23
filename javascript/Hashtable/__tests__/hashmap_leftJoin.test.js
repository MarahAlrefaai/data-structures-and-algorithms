
const HashTable = require('../Hashtable');
const leftJoin=require('../left_join.js')
describe('HashMap', () => {
   it('test leftjoin function ', () => {
   
let hashmap1 = new HashTable(20)
let hashmap2 = new HashTable(20)
//----------------------------------
hashmap1.set("rahaf", "sssssss");
hashmap1.set("razan", "instructor");
hashmap1.set("batool", "instructor");
hashmap1.set("salam", "instructor");
//-----------------------------------
hashmap2.set("marah", "learner");
hashmap2.set("razan", "instructor");
hashmap2.set("irir", "instructor");
hashmap2.set("salam", "ctor");


console.log(leftJoin(hashmap1, hashmap2))
        expect(leftJoin(hashmap1, hashmap2)).toStrictEqual([
          [ 'razan', 'instructor', 'instructor' ],
          [ 'rahaf', 'sssssss', null ],
          [ 'salam', 'instructor', 'ctor' ],
          [ 'batool', 'instructor', null ]
        ]);
       
    })
    it('test leftjoin function ', () => {
   
      let hashmap1 = new HashTable(20)
      let hashmap2 = new HashTable(20)
      //----------------------------------
      hashmap1.set("marah", "learner");
      hashmap1.set("razan", "instructor");
      hashmap1.set("salam", "instructor");
      //-----------------------------------
      hashmap2.set("marah", "learner");
      hashmap2.set("razan", "instructor");
      hashmap2.set("salam", "ctor");
      
      
      console.log(leftJoin(hashmap1, hashmap2))
              expect(leftJoin(hashmap1, hashmap2)).toStrictEqual( [
                [ 'razan', 'instructor', 'instructor' ],
                [ 'salam', 'instructor', 'ctor' ],
                [ 'marah', 'learner', 'learner' ]
              ]);
             
          })
          it('test leftjoin function ', () => {
   
            let hashmap1 = new HashTable(20)
            let hashmap2 = new HashTable(20)
            //----------------------------------
            hashmap1.set("rahaf", "sssssss");
            hashmap1.set("batool", "instructor");
            hashmap1.set("salam", "instructor");
            //-----------------------------------
            
            
            
            console.log(leftJoin(hashmap1, hashmap2))
                    expect(leftJoin(hashmap1, hashmap2)).toStrictEqual([
                      [ 'rahaf', 'sssssss', null ],
                      [ 'salam', 'instructor', null ],
                      [ 'batool', 'instructor', null ]
                    ]);
                   
                })
   
})

