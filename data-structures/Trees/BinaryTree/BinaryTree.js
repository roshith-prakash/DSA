// Done using Linked representation.

// Node to represent a singular element in the tree
class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
    }
}

// The binary tree class which will use Nodes.
class BinaryTree {
    constructor() {
        this.head = null
    }
}

const binaryTree = new BinaryTree()