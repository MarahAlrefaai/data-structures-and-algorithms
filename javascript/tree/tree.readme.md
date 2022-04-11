# Trees
<!-- Short summary or background information -->
A tree is also one of the data structures that represent hierarchical data. Suppose we want to show the employees and their positions in the hierarchical form .

## Challenge
<!-- Description of the challenge -->
create a binary tree class contains (preorder , inOrder , postorder )
create 2 functions  ( add , contains) to add new nalues to the tree and check id value exists in the tree or not 

## Approach & Efficiency (for each method)
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
preOrder ---> BigO time /space o(n^2) 
inOrder ---> BigO time /space o(n^2)
postOrder ---> BigO time /space o(n^2) 
## API
<!-- Description of each method publicly available in each of your trees -->
Remember that the values of the nodes on the left subtree are always smaller than the value of the root node. Also, the values of the nodes on the right subtree are larger than the value of the root node.

For Inorder, you traverse from the left subtree to the root then to the right subtree.
Inorder => Left, Root, Right.

For Preorder, you traverse from the root to the left subtree then to the right subtree.

Preorder => Root, Left, Right.

For Post order, you traverse from the left subtree to the right subtree then to the root.

Post order => Left, Right, Root.