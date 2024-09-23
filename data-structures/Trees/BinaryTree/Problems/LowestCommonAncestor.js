// Get the least common ancestor of two nodes in the tree.

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

    // Get the lowest common ancestor for two nodes n1 & n2
    lowestCommonAncestor(node, n1, n2) {

        // If current node is null then end of path is reached, return null
        if (node == null) {
            return null
        }

        // If current node is one of the required nodes, return node
        if (node == n1 || node == n2) {
            return node
        }

        // Check left & right subtrees for the required nodes
        let left = this.lowestCommonAncestor(node?.left, n1, n2)
        let right = this.lowestCommonAncestor(node?.right, n1, n2)

        // If both are non null then current node is the lowest common ancestor, return current node
        if (left != null && right != null) {
            return node
        }
        // If right is null, left is one of the required nodes - return left
        else if (left != null && right == null) {
            return left
        }
        // If left is null, right is one of the required nodes - return right
        else if (left == null && right != null) {
            return right
        }
        // If both are null, return null
        else {
            return null
        }
    }

}

// ------------------------------------------------------------------------

// Binary tree used:
// 
//         50
//        /   \
//      30     70
//     /      /  \
//   40      60   80
//          /       \
//         65        90

const bt = new BinaryTree()
const bt1 = bt.createNode(50)
const bt2 = bt.createNode(30)
const bt3 = bt.createNode(70)
const bt4 = bt.createNode(60)
const bt5 = bt.createNode(80)
const bt6 = bt.createNode(90)
const bt7 = bt.createNode(65)
const bt8 = bt.createNode(40)

bt.inititializeHead(bt1)
bt.addToLeft(bt1, bt2)
bt.addToRight(bt1, bt3)
bt.addToLeft(bt3, bt4)
bt.addToRight(bt3, bt5)
bt.addToRight(bt5, bt6)
bt.addToLeft(bt4, bt7)
bt.addToLeft(bt2, bt8)

console.log("Lowest common ancestor : ", bt.lowestCommonAncestor(bt.head, bt6, bt7)?.value)
