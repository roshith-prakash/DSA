// To build a tree from an inorder and PostOrder input

// Last element in postorder is root
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

// Pre order traversal of binary tree.
// Prints in order of :  Root | Left Subtree | Right Subtree 
const preOrder = (head) => {
    while (head != null) {
        console.log(head?.value)
        preOrder(head.left)
        preOrder(head.right)
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

    // Print pre order traversal of tree
    preOrder() {
        preOrder(this.head)
    }

    buildTreeFromInorderPostorder(inorder, postOrder, postOrderIndex, inorderStart, inorderEnd, map) {

        // If postOrder index has exceeded length or inorder start has exceeded inorder end, return null
        if (postOrderIndex.index < 0 || inorderStart > inorderEnd) {
            return null
        }

        // Get current element from postOrder 
        let element = postOrder[postOrderIndex.index]
        // Decrement index
        postOrderIndex.index--
        // Create the node
        let node = new Node(element)
        // Find the position of the element in inorder array - map used to get position in O(1) time
        let position = map.get(element)

        // Note : For PostOrder Tree Creation - Right subtree must be created before left subtree

        // Create right subtree of node recursively - Everything right of position in inorder will be in right subtree
        node.right = this.buildTreeFromInorderPostorder(inorder, postOrder, postOrderIndex, position + 1, inorderEnd, map)
        // Create left subtree of node recursively - Everything left of position in inorder will be in left subtree
        node.left = this.buildTreeFromInorderPostorder(inorder, postOrder, postOrderIndex, inorderStart, position - 1, map)


        return node
    }

    buildTree(inorder, postOrder) {
        // Created as object as index must be passed by reference
        let postOrderIndex = { index: postOrder.length - 1 }
        // Creating map to optimize time
        let map = new Map()

        // Setting elements in map
        inorder.forEach((element, index) => {
            map.set(element, index)
        });

        // Node returned from function will be the root node
        let node = this.buildTreeFromInorderPostorder(inorder, postOrder, postOrderIndex, 0, inorder.length - 1, map)
        // Initialize as head / root
        this.inititializeHead(node)
    }

}

const bt = new BinaryTree()

bt.buildTree([3, 1, 4, 0, 5, 2], [3, 4, 1, 5, 2, 0])

bt.preOrder()