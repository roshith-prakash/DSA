// Get the Kth ancestor of a node in a tree.

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
    kthAncestor(node, count, reqNode) {

        // Base case
        if (node == null) {
            return null
        }

        // When node is found, return node
        if (node == reqNode) {
            return node
        }

        // Recursively call function on left and right subtrees till reqNode is found
        let left = this.kthAncestor(node?.left, count, reqNode)
        let right = this.kthAncestor(node?.right, count, reqNode)

        // Right is null but left is NON NULL
        if (left && !right) {
            count.count--

            // Kth ancestor is node - change count to infinity so that same node is returned to top
            if (count.count <= 0) {
                count.count = Infinity
                return node
            }

            // return left as it is non null
            return left
        }

        // Left is null but Right is NON NULL
        if (!left && right) {
            count.count--

            // Kth ancestor is node - change count to infinity so that same node is returned to top
            if (count.count <= 0) {
                count.count = Infinity
                return node
            }

            // Return right as it is non null
            return right
        }
    }

    // Wrapper function
    getKthAncestor(node, count) {
        return this.kthAncestor(this.head, { count: count }, node)
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

console.log("3rd ancestor : ", bt.getKthAncestor(bt6, 5)?.value)
