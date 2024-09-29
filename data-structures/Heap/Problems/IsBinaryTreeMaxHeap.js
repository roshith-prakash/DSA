// Check if a given binary tree is a max heap.
// Properties of Max Heap : 
//      1. It is a Complete binary tree (CBT) and all leaf nodes are left aligned
//      2. All parent elements must be larger than children

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

}

// To count the number of nodes in the binary tree
const countNodes = root => {
    // When null is reached, return 0
    if (!root) {
        return 0
    }

    // Add left subtree nodes and right subtree nodes
    let ans = 1 + countNodes(root?.left) + countNodes(root?.right)

    return ans
}

// Check if binary Tree is complete binary tree
const isCBT = (root, index, count) => {
    // If null, return true
    if (!root) {
        return true
    }

    // If index is greater than node count, tree is not CBT (leaf nodes are not left aligned)
    if (index >= count) {
        return false
    }

    // Check if left subtree is CBT
    let left = isCBT(root?.left, 2 * index + 1, count)
    // Check if right subtree is CBT
    let right = isCBT(root?.right, 2 * index + 2, count)


    return left && right
}

// Check if tree is max ordered (parent larger than both children)
const isMaxOrder = root => {
    // Leaf node
    if (!root?.left && !root?.right) {
        return true
    }

    // Only Left child is present
    if (!root?.right) {
        return root?.value > root?.left?.value
    }
    // Both children are present
    else {
        let left = isMaxOrder(root?.left)
        let right = isMaxOrder(root?.right)

        // Both subtrees are max ordered and parent (root) is larger than both children
        if (left && right && root?.value > root?.left?.value && root?.value > root?.right?.value) {
            return true
        } else {
            return false
        }
    }
}

// Wrapper function which checks for all properties
const isMaxHeap = root => {
    let index = 0
    let totalCount = countNodes(root)

    if (isCBT(root, index, totalCount) && isMaxOrder(root)) {
        return true
    } else {
        return false
    }
}


// ------------------------------------------------------------------------------


//         50
//        /  \
//      30    40

const bt = new BinaryTree()
const bt1 = bt.createNode(50)
const bt2 = bt.createNode(30)
const bt3 = bt.createNode(40)

bt.addToLeft(bt1, bt2)
bt.addToRight(bt1, bt3)

bt.inititializeHead(bt1)

console.log(isMaxHeap(bt.head)) // True


//         50
//        /  \
//      30    70

const btz = new BinaryTree()
const btz1 = bt.createNode(50)
const btz2 = bt.createNode(30)
const btz3 = bt.createNode(70)

btz.addToLeft(btz1, btz2)
btz.addToRight(btz1, btz3)

btz.inititializeHead(btz1)

console.log(isMaxHeap(btz.head)) // False


