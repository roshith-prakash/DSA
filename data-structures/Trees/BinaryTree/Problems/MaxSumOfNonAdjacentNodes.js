// Given a binary tree with a value associated with each node, we need to choose a subset of these nodes such that sum of chosen nodes is maximum
// constraint : No two chosen node in subset should be directly connected that is, if we have taken a node in our sum then we can't take its any children or parents in consideration and vice versa.

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

    maxSumOfAdjacentNodes(node) {

        // Base case
        if (node == null) {
            return { include: 0, exclude: 0 }
        }

        // Get values for subtrees
        let left = this.maxSumOfAdjacentNodes(node?.left)
        let right = this.maxSumOfAdjacentNodes(node?.right)

        let res = {}

        // Including value of current node - (cannot include left and right children)
        res.include = node?.value + left?.exclude + right?.exclude
        // Excluding value of current node (max of left and right subtrees)
        res.exclude = Math.max(left?.include, left?.exclude) + Math.max(right?.include, right?.exclude)

        return res
    }

    getMaxSum() {
        let ans = this.maxSumOfAdjacentNodes(this.head)
        return Math.max(ans.include, ans.exclude)
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

console.log(bt.getMaxSum())