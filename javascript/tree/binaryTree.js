'use strict'
const node = require('./node')
const Queue=require('../stack-and-queue/queue');
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
    preOrder() {
        let arr = [];
        const recTraverse = (Node) => {
            arr.push(Node.value);
            if (Node.left != null) {
                recTraverse(Node.left);
            }
            if (Node.right != null) {
                recTraverse(Node.right);
            }
        }
        recTraverse(this.root)
        return arr;
    }
    inOrder() {
        let arr = [];
        const recTraverse = (Node) => {
            if (Node.left != null) {
                recTraverse(Node.left);
            }
            arr.push(Node.value);
            if (Node.right != null) {
                recTraverse(Node.right);
            }
        }
        recTraverse(this.root)
        return arr;
    }
    postOrder() {
        let arr = [];
        const recTraverse = (Node) => {
            if (Node.left != null) {
                recTraverse(Node.left);
            }
            if (Node.right != null) {
                recTraverse(Node.right);
            }
            arr.push(Node.value);

        }
        recTraverse(this.root)
        return arr;
    }
    maximmum(){

        let arr = this.inOrder();
        let max = 0,count=0;

    while(count < arr.length) {
        if (arr[count]>max) {
            max = arr[count];
        }
        count++;
     }
     return max;
    }
    breadthFirst() {
        let newqueue = new Queue();
        let arr = [];
        newqueue.enqueue(this.root);
        while (newqueue.length > 0) {
          let pointer = newqueue.dequeue();
          arr.push(pointer.value);
          
          if (pointer.left) {
            newqueue.enqueue(pointer.left);
          }
          if (pointer.right) {
            newqueue.enqueue(pointer.right);
          }
        }
        return arr;
      }
}

class binarySearchTree extends BinaryTree {
    constructor(root = null) {
        super();
    }

    add(value) {
        const Node = new node(value);
        if (this.root === null) {
            this.root = Node;
            return this;
        }
        let currValue = this.root;
            while (currValue) {
            if (value < currValue.value) {
                if (currValue.left === null) {
                    currValue.left = Node;
                    return this;
                }
                currValue = currValue.left;

            }
            else {
                if (currValue.right === null) {
                    currValue.right = Node;
                    return this;
                }
                currValue = currValue.right;
            }
        }

    }
    contains(value) {
        if (this.root === null) {
            return "empty";
        }
        let currValue = this.root;
        while(currValue){
            if (currValue.value === value) {
                return true;
            } 
            if (value < currValue.value) {
                currValue = currValue.left;
            }
            
            if (value > currValue.value) {
                    currValue = currValue.right;
            }
           
        }
        return false
    }
   
}
module.exports = {
    BinaryTree: BinaryTree,
    binarySearchTree : binarySearchTree,
};