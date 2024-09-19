// Check if tree is a balanced tree.
// Balance : Difference of heights of left and right subtree is not more than one for all nodes.

// Node to represent a singular element in the tree
class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
    }
}


// Class for Binary Tree
class BinaryTree {
    constructor() {
        this.head = null
    }

    // Create a node
    createNode(value) {
        const node = new Node(value, null, null)
        return node
    }

    // Initialize node as head
    inititializeHead(node) {
        this.head = node
    }

    // Add node2 to the left of node 1
    addToLeft(node1, node2) {
        if (node1 && node2) {
            node1.left = node2
        }
    }

    // Add node2 to the right of node 1
    addToRight(node1, node2) {
        if (node1 && node2) {
            node1.right = node2
        }
    }

    height(node) {
        // When null node is reached, return 0
        if (node == null) {
            return 0
        }

        // Get height of left subtree
        let left = this.height(node?.left)
        // Get height of right subtree
        let right = this.height(node?.right)

        // Get maximum of two and add 1 (for current node)
        let height = Math.max(left, right) + 1

        // Return answer
        return height
    }

    // Check if tree is balanced
    isBalanced(temp) {

        // If root is Null, return true
        if (temp == null) {
            return { balanced: true, height: 0 }
        }

        // Check if left subtree is balanced
        let left = this.isBalanced(temp?.left)
        // Check if right subtree is balanced
        let right = this.isBalanced(temp?.right)

        // Get difference in heights and check it is at most 1
        let diff = Math.abs(left.height - right.height) <= 1

        // If all are true, tree is balanced
        if (left.balanced && right.balanced && diff) {
            return { balanced: true, height: Math.max(left.height, right.height) + 1 }
        }
        // If not, tree is not balanced
        else {
            return { balanced: false, height: Math.max(left.height, right.height) + 1 }
        }
    }

}

// ------------------------------------------------------------------------

// Binary tree used:
// 
//         50
//        /   \
//      30     70
//            /  \
//           60   80
//                  \
//                   90

const bt = new BinaryTree()
const bt1 = bt.createNode(50)
const bt2 = bt.createNode(30)
const bt3 = bt.createNode(70)
const bt4 = bt.createNode(60)
const bt5 = bt.createNode(80)
const bt6 = bt.createNode(90)

bt.inititializeHead(bt1)
bt.addToLeft(bt1, bt2)
bt.addToRight(bt1, bt3)
bt.addToLeft(bt3, bt4)
bt.addToRight(bt3, bt5)
bt.addToRight(bt5, bt6)

console.log(bt.isBalanced(bt.head))