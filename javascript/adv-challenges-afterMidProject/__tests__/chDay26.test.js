'use strict'

const sortArray=require("../ch_day26")
describe('Sort array ',()=>{

  it('Sorting array ',async()=>{
    let arr1=[2,3,5,7,13,11];
let arr2=[20,18,12,8,5,-2];
let arr3=[5,12,7,5,5,7];
console.log("before sorting =====> ")
 console.log(arr1);
 console.log(arr2);
 console.log(arr3);
 console.log("after  sorting =====> ")
 console.log(sortArray(arr1));
 console.log(sortArray(arr2));
 console.log(sortArray(arr3));
 expect(sortArray(arr1)).toBe("2,3,5,7,11,13")
 expect(sortArray(arr2)).toBe("-2,5,8,12,18,20")
 expect(sortArray(arr3)).toBe("5,5,5,7,7,12")


  })
})

