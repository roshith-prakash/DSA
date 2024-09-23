// To build a tree from an inorder and preorder input

// First element in preorder is root
// Find element in inorder
// Recursively call for left and right

// Node to represent a singular element in the tree
class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
    }
}

// Post order traversal of binary tree.
// Prints in order of : Left Subtree | Right Subtree | Root 
const postOrder = (head) => {
    while (head != null) {
        postOrder(head.left)
        postOrder(head.right)
        console.log(head?.value)
        return
    }
}

// Class for Binary Tree
class BinaryTree {
    constructor() {
        this.head = null
    }

    // Initialize node as head
    inititializeHead(node) {
        this.head = node
    }

    // Print post order traversal of tree
    postOrder() {
        postOrder(this.head)
    }

    buildTreeFromInorderPreorder(inorder, preorder, preOrderIndex, inorderStart, inorderEnd, map) {

        // If preorder index has exceeded length or inorder start has exceeded inorder end, return null
        if (preOrderIndex.index >= preorder.length || inorderStart > inorderEnd) {
            return null
        }

        // Get current element from preorder 
        let element = preorder[preOrderIndex.index]
        // Increment index
        preOrderIndex.index++
        // Create the node
        let node = new Node(element)
        // Find the position of the element in inorder array - map used to get position in O(1) time
        let position = map.get(element)

        // Create left subtree of node recursively - Everything left of position in inorder will be in left subtree
        node.left = this.buildTreeFromInorderPreorder(inorder, preorder, preOrderIndex, inorderStart, position - 1, map)
        // Create right subtree of node recursively - Everything right of position in inorder will be in right subtree
        node.right = this.buildTreeFromInorderPreorder(inorder, preorder, preOrderIndex, position + 1, inorderEnd, map)

        return node
    }

    buildTree(inorder, preorder) {
        // Created as object as index must be passed by reference
        let preOrderIndex = { index: 0 }
        // Creating map to optimize time
        let map = new Map()

        // Setting elements in map
        inorder.forEach((element, index) => {
            map.set(element, index)
        });

        // Node returned from function will be the root node
        let node = this.buildTreeFromInorderPreorder(inorder, preorder, preOrderIndex, 0, inorder.length - 1, map)
        // Initialize as head / root
        this.inititializeHead(node)
    }

}

const bt = new BinaryTree()

bt.buildTree([3, 1, 4, 0, 5, 2], [0, 1, 3, 4, 2, 5])

bt.postOrder()