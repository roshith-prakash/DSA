// Given a Binary Tree, find the vertical traversal of it starting from the leftmost level to the rightmost level.
// If there are multiple nodes passing through a vertical line, then they should be printed as they appear in level order traversal of the tree.

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

const verticalTraversal = (root, map, distance) => {
    if (root == null) {
        return map
    }

    if (map[distance]) {
        map[distance].push(root.value)
    } else {
        map[distance] = [root.value]
    }


    verticalTraversal(root?.left, map, distance - 1)
    verticalTraversal(root?.right, map, distance + 1)

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

    verticalTraversal() {
        // Map to be used to collect vertical nodes  
        let map = {}
        // Get the map with the vertical values
        let traversedMap = verticalTraversal(this.head, map, 0)
        // Array to store answer 
        let arr = []

        // Sort the keys and then push the values into arr as per sorted keys
        Object
            .keys(traversedMap)
            .sort((a, b) => parseInt(a) - parseInt(b))
            .forEach(x => {
                arr.push(...traversedMap[x])
            })


        return arr.join(" ")
    }
}

//          1
//        /   \
//      2       3
//     /  \    /  \
//   4     5  6     7
//             \     \
//              8     9

const bt = new BinaryTree()
const bt1 = bt.createNode(1)
const bt2 = bt.createNode(2)
const bt3 = bt.createNode(3)
const bt4 = bt.createNode(4)
const bt5 = bt.createNode(5)
const bt6 = bt.createNode(6)
const bt7 = bt.createNode(7)
const bt8 = bt.createNode(8)
const bt9 = bt.createNode(9)


bt.inititializeHead(bt1)

bt.addToLeft(bt1, bt2)
bt.addToRight(bt1, bt3)

bt.addToLeft(bt2, bt4)
bt.addToRight(bt2, bt5)

bt.addToLeft(bt3, bt6)
bt.addToRight(bt3, bt7)

bt.addToRight(bt6, bt8)
bt.addToRight(bt7, bt9)

console.log(bt.verticalTraversal())