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

describe('insert to the beginning of the LL', () => {
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
})

describe("check if it exists or not ", () => {

    it("lets check", () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        expect(ll.includes('a')).toBe(true);
        expect(ll.includes('b')).toBe(true);
        expect(ll.includes('c')).toBeFalsy();

    })

})


//"{ a } -> { b } -> { c } -> NULL"

describe("get string  ", () => {

    it("get string ", () => {
        const ll = new LinkedList();
        ll.append('a');
        ll.append('b');
        ll.append('c');
        expect(ll.toString()).toBe("{ a } -> { b } -> { c } -> NULL");
        

    })

})