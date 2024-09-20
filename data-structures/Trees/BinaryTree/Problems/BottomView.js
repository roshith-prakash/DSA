// The task is to print the bottom view of binary tree. Bottom view of a binary tree is the set of nodes visible when the tree is viewed from the bottom. 
// Any node with same distance is hidden by node from upper level.
// Use same logic as vertical traversal.

// Node to represent a singular element in the tree
class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
    }
}

// Logic Used: 
// Imagine a number line. IF root is 0, left subtree is at -1 and right subtree is at +1
// So we start at the head / root of the tree with the distance as 0 and call the function recursively with for left and right subtree with -1 and +1 distance respectively.
const bottomView = (root, map, distance) => {
    // If null, return map
    if (root == null) {
        return map
    }

    // If array is already present, push value into array
    if (map[distance]) {
        map[distance].push(root.value)
    }
    // Else initalize array with node value
    else {
        map[distance] = [root.value]
    }

    // Call function recursively for left and right subtree
    bottomView(root?.left, map, distance - 1)
    bottomView(root?.right, map, distance + 1)

    return map
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

    bottomView() {
        // Map to be used to collect vertical nodes  
        let map = {}
        // Get the map with the vertical values
        let traversedMap = bottomView(this.head, map, 0)
        // Array to store answer 
        let arr = []

        // Sort the keys and then push the values into arr as per sorted keys. Last element is the array is the element that is viewable from the bottom.
        Object
            .keys(traversedMap)
            .sort((a, b) => parseInt(a) - parseInt(b))
            .forEach(x => {
                arr.push(traversedMap[x][traversedMap[x].length - 1])
            })


        return arr.join(" ")
    }
}

//          10
//         /   \
//       20      30
//      /  \
//    40    60  

// Answer :  4 2 1 3 7

const bt = new BinaryTree()
const bt1 = bt.createNode(10)
const bt2 = bt.createNode(20)
const bt3 = bt.createNode(30)
const bt4 = bt.createNode(40)
const bt5 = bt.createNode(60)

bt.inititializeHead(bt1)

bt.addToLeft(bt1, bt2)
bt.addToRight(bt1, bt3)

bt.addToLeft(bt2, bt4)
bt.addToRight(bt2, bt5)

console.log(bt.bottomView())