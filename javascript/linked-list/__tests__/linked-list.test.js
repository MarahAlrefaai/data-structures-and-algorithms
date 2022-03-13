'use strict';

const { describe, it } = require('eslint/lib/rule-tester/rule-tester');
//const { expect } = require('@jest/globals');
const LinkedList = require('../linked-list.js');

describe('testing Linked List', () => {
    it('test creating an LL instance', () => {
        const ll = new LinkedList();
        // expect(ll).toBeInstanceOf(LinkedList);
        expect(ll).toBeDefined();
        expect(ll.head).toBeNull();
    })
})

/*describe('insert to the beginning of the LL', () => {
    // we have two cases
    // 1. if the LL is empty
    it('add to an empty LL', () => {
        const ll = new LinkedList();
        ll.insert('a'); // create a new node (value=a)
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();

    })
    // 2. if the LL is NOT empty
    it('add to a non-empty LL', () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        expect(ll.head.value).toEqual('b');
        expect(ll.head.next.value).toEqual('a');

    })
})*/

describe("check if it exists or not ", () => {

     /*it("lets check", () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        expect(ll.includes('a')).toBe(true);
        expect(ll.includes('b')).toBe(true);
        expect(ll.includes('c')).toBeFalsy();

    })
    it("insert before method ", () => {
        const ll = new LinkedList();
        ll.insert(3);
        ll.insert(2);
        ll.insert(1);
        console.log("insert before  : "+ll.toString());
       ll.insertbefore(1,5);
       console.log("insert before  : "+ll.toString());
       expect(ll.toString()).toBe("{ 5 } -> { 1 } -> { 2 } -> { 3 } -> NULL");
       expect(ll.insertbefore(6,5)).toBe("No change, method exception");
       //expect(ll.insertbefore(6,5)).toBe("empty");
    })
   it("insert after method ", () => {
        const ll = new LinkedList();
        ll.insert(3);
        ll.insert(2);
        ll.insert(1);
        console.log("insert after  : "+ll.toString());
       ll.insertafter(3,5);
       console.log("insert after  : "+ll.toString());
       expect(ll.toString()).toBe("{ 1 } -> { 2 } -> { 3 } -> { 5 } -> NULL");
       expect(ll.insertafter(8,5)).toBe("No change, method exception");
       //expect(ll.insertbefore(6,5)).toBe("empty");
    })*/
    /*it("Kth method ", () => {
        const ll = new LinkedList();
        ll.insert(2);
        ll.insert(8);
        ll.insert(3);
        ll.insert(1);
        console.log("insert after  : "+ll.toString());
       expect(ll.kth(6)).toBe("exception");
       expect(ll.kth(2)).toBe(3);
       expect(ll.kth(0)).toBe(2);
       expect(ll.kth(3)).toBe(1);
       expect(ll.kth(1)).toBe(8);
       expect(ll.kth(-1)).toBe("exception");
       
    })*/
    it("zip method ", () => {
        const ll1 = new LinkedList();
        const ll2 = new LinkedList();
        //ll1.insert(3);
        ll1.insert(2);
        ll1.insert(1);
        console.log("l 1   : "+ll1.toString());
        ll2.insert(6);
        ll2.insert(5);
        ll2.insert(4);
        console.log("l 2   : "+ll2.toString());
    
        console.log("final : "+ ll1.zipLists(ll1,ll2));
       
        console.log("l 1   : "+ll1.toString());
        //console.log("l 2   : "+ll2.toString());
        //ll1 < ll2
        expect(ll1.zipLists(ll1,ll2)).toBe("{ 1 } -> { 4 } -> { 2 } -> { 5 } -> { 6 } -> NULL")
        expect(ll1.length).toBe(6);
        //ll1 > ll2
        //expect(ll1.zipLists(ll1,ll2)).toBe("{ 1 } -> { 4 } -> { 2 } -> { 5 } -> { 3 } -> NULL")

       //ll1 && ll2 equal length
       //expect(ll1.zipLists(ll1,ll2)).toBe("{ 1 } -> { 4 } -> { 2 } -> { 5 } -> { 3 } -> { 6 } -> NULL")
    })

})


//"{ a } -> { b } -> { c } -> NULL"

/*describe("get string  ", () => {

    it("get string ", () => {
        const ll = new LinkedList();
        ll.append('a');
        ll.append('b');
        ll.append('c');
        expect(ll.toString()).toBe("{ a } -> { b } -> { c } -> NULL");
        

    })

})*/