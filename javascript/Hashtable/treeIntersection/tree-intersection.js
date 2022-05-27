const hashTable = require('../Hashtable')

function tree_intersection(tree1,tree2){
    if(!(tree1.root === null || tree2.root === null)){
        const tableOftreeNodes = new hashTable(60)
        let result= [];
        let tree1edit = tree1.inOrder()
         console.log("arr1==>"+ tree1edit)
        let tree2edit = tree2.inOrder()
        console.log("arr2==>"+ tree2edit)
        // console.log("before set"); 
        for(let i = 0; i < tree2edit.length; i++){
            // console.log([i]); 
            // console.log(`tree${i}`)
            tableOftreeNodes.set(tree2edit[i]+"",tree2edit[i]+"")
           // console.log(i); 
        }   
    //    console.log("after set"); 
    //    console.log(tableOftreeNodes.table);
    //    console.log("before push"); 

        for(let i = 0; i < tree1edit.length; i++){
            if(tableOftreeNodes.contain(tree1edit[i]+"")){
                result.push(tree1edit[i])
            }

        }
        // console.log("after push"); 
        // console.log("result ==> "+result); 
        return result
    }

    else{ return "one of the trees is empty";}
}
module.exports=tree_intersection