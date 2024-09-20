// Given a Binary Tree, find its Boundary Traversal. 
// The traversal should be in the following order:

// 1. Left boundary nodes: defined as the path from the root to the left - most node ie - the leaf node you could reach when you always travel preferring the left subtree over the right subtree.

// 2. Leaf nodes: All the leaf nodes except for the ones that are part of left or right boundary.

// 3. Reverse right boundary nodes: defined as the path from the right - most node to the root.The right - most node is the leaf node you could reach when you always travel preferring the right subtree over the left subtree.Exclude the root from this as it was already included in the traversal of left boundary nodes.

// Works as a loop / circler : Start at root, move to leftmost leaf, traverse leaves till you reach rightmost leaf, traverse back to root

// Node to represent a singular element in the tree
class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
    }
}

// Traversing Left boundary
const traverseLeft = (root, ans) => {

    // If null node or leaf node
    if (root == null || (!root?.left && !root.right)) {
        return ans
    }

    // Push node value
    ans.push(root.value)

    // If left subtree is present, prefer that
    if (root?.left) {
        traverseLeft(root?.left, ans)
    }
    // Else move to right subtree
    else {
        traverseLeft(root?.right, ans)
    }
}

// Traversing Leaves
const traverseLeaf = (root, ans) => {

    // If null node or leaf node
    if (root == null) {
        return ans
    }

    if (!root?.left && !root.right) {
        // Push node value
        ans.push(root.value)
        return ans
    }

    // Traverse Leaves on both subtrees
    traverseLeaf(root?.left, ans)
    traverseLeaf(root?.right, ans)

}

// Traversing right boundary - from leaf to root
const traverseRight = (root, ans) => {
    // If null node or leaf node
    if (root == null || (!root?.left && !root.right)) {
        return ans
    }

    // If right ubtree is present, prefer that
    if (root?.right) {
        traverseRight(root?.right, ans)
    }
    // Else move to left subtree
    else {
        traverseRight(root?.left, ans)
    }

    // Push value to ans
    ans.push(root.value)
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

    // Traverse Left boundary, Leaves and right boundary
    boundaryTraversal() {
        // Answer array
        let ans = []

        // If head is null, return blank array
        if (this.head == null) {
            return ans
        }

        // Create a temp pointer
        let temp = this.head

        // Push head value to array
        ans.push(temp?.value)

        // Traverse Left boundary
        traverseLeft(temp?.left, ans)

        // Traverse Left and right subtree leaf nodes
        traverseLeaf(temp?.left, ans)
        traverseLeaf(temp?.right, ans)

        // Traverse right boundary in reverse order
        traverseRight(temp?.right, ans)

        return ans
    }
}

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

console.log("Boundary Traversal : \n", bt.boundaryTraversal().join(" -> "))