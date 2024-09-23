// Given a tree, get the minimum time to burn the entire tree if the target node catches fire.
// In one second, the fire will burn the node, its parent and its children
// Since fire will catch a target node first, mapping must be created from children to parent

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

    // Create mapping to parent
    createParentMapping(target, map) {
        // Queue for traversal
        let queue = []
        // Push root into queue
        queue.push(this.head)

        // Variable to store target node
        let res

        // Root does not have any parent
        map.set(this.head, null)

        // While queue is not empty
        while (queue.length) {
            // Get element at head of queue
            let front = queue.shift()

            // If node is target node, initialize to res
            if (front == target) {
                res = front
            }

            // If left child is present, map to parent and push to queue
            if (front?.left) {
                map.set(front?.left, front)
                queue.push(front?.left)
            }

            // If right child is present, map to parent and push to queue
            if (front?.right) {
                map.set(front?.right, front)
                queue.push(front?.right)
            }
        }

        return res
    }

    // Function to find time to burn tree
    burnTree(root, map) {
        // Queue to add nodes to burn
        let queue = []
        // Map => stores nodes which are burned
        let visited = new Map()

        // Burn root (target node)
        queue.push(root)
        visited.set(root, true)

        let answer = 0

        while (queue.length) {
            let size = queue.length
            let flag = false

            for (let i = 0; i < size; i++) {
                // Get currently burning node
                let node = queue.shift()

                // Spread fire to left child if it isnt already burning
                if (node?.left && !visited.has(node.left)) {
                    flag = true
                    queue.push(node.left)
                    visited.set(node.left, true)
                }

                // Spread fire to right child if it isnt already burning
                if (node?.right && !visited.has(node.right)) {
                    flag = true
                    queue.push(node.right)
                    visited.set(node.right, true)
                }

                // Spread fire to parent if it isnt already burning
                if (map.get(node) && !visited.has(map.get(node))) {
                    flag = true
                    queue.push(map.get(node))
                    visited.set(map.get(node), true)
                }
            }

            // If something caught fire, increase answer (time)
            if (flag) {
                answer++
            }
        }

        return answer
    }

    // Wrapper function to create parent mapping and get minimum time required to burn tree
    minimumTimeToBurnTree(target) {
        // Create new map
        let map = new Map()
        // Create mapping of child to parent and find target node (catches fire initially)
        let targetNode = this.createParentMapping(target, map)
        // Get minimum time required to burn tree
        let minimumTimeToBurnTree = this.burnTree(targetNode, map)

        return minimumTimeToBurnTree
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

console.log("Time required to burn entire tree when 60 catches fire : ", bt.minimumTimeToBurnTree(bt4), " seconds")