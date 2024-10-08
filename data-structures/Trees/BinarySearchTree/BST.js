// Binary Search Tree (BST)

// Node to represent a singular element in the tree
class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
    }
}

// In order traversal of binary tree.
// Prints in order of : Left Subtree | Root | Right Subtree
const inOrder = (head) => {
    while (head != null) {
        inOrder(head.left)
        console.log({ value: head.value, left: head.left?.value, right: head.right?.value })
        inOrder(head.right)
        return
    }
}

// Also known as Breadth First Search
const levelOrder = (head) => {
    console.log("\n")

    // Create a Queue
    const queue = []

    // Push root node into queue
    queue.push(head)
    // Push null whenever a level is completed (since root only has one element; add null)
    queue.push(null)

    // While queue is not empty
    while (queue.length) {

        // Get the node at the front of queue
        let temp = queue[0]
        // Dequeue node
        queue.shift()

        // If value at front was null, level was completed
        if (temp == null) {
            // Add new line to signify new level
            console.log("\n")
            // If queue still has elements, push null
            if (queue.length) {
                queue.push(null)
            }
        }
        // If value at front is a node
        else {
            // Print node value
            process.stdout.write(String(temp?.value) + " ")

            // Add left node to queue
            if (temp?.left) {
                queue.push(temp?.left)
            }

            // Add right node to queue
            if (temp?.right) {
                queue.push(temp?.right)
            }
        }
    }
}


// Class for Binary Search Tree
class BST {
    constructor() {
        this.head = null
    }

    // Print inOrder traversal of BST (Sorted values)
    inOrder() {
        inOrder(this.head)
    }

    // To get the inorder predecessor of the node
    // Inorder predecessor of node is the rightmost element of the left subtree
    getInOrderPredecessor(node) {
        node = node.left
        while (node.right != null) {
            node = node.right
        }

        return node
    }

    levelOrder() {
        levelOrder(this.head)
    }

    // Search for the value in BST
    search(node, value) {
        // If node is null, value is not present in Tree
        if (node == null) {
            console.log(`Node with value ${value} is not present.`)
            return
        }
        // If node = value, required Node has been found
        if (node.value == value) {
            return node
        }
        // If value is smaller than node, search left subtree
        else if (node.value > value) {
            return this.search(node.left, value)
        }
        // If value is larger than node, search the right subtree
        else {
            return this.search(node.right, value)
        }
    }

    // Add a new node inside the BST
    addNode(node, value) {
        // If head is not present, add node as head and return
        if (!this.head) {
            const node = new Node(value, null, null)
            this.head = node
            return
        }
        else {
            // If node with value is already present, display error and return
            if (value == node.value) {
                console.log("Value already present in BST!")
                return
            }
            // If value is smaller than node & node's left is empty, add to the left of node
            else if (value < node.value && node.left == null) {
                const newNode = new Node(value, null, null)
                node.left = newNode
                return
            }
            // If value is smaller than node but element is already present in node.left, move to the left subtree
            else if (value < node.value && node.left != null) {
                return this.addNode(node.left, value)
            }
            // If value is greater than node & node's right is empty, add to the right of node
            else if (value > node.value && node.right == null) {
                const newNode = new Node(value, null, null)
                node.right = newNode
                return
            }
            // If value is greater than node but element is already present in node.right, move to the right subtree
            else if (value > node.value && node.right != null) {
                return this.addNode(node.right, value)
            }
        }
    }

    // Delete a node from the BST
    // 3 Cases :
    //      1. Node is leaf node - change to null and return
    //      2. Node has one child - replace with child
    //      3. Node has 2 children - replace with inorder predecessor & perform delete operation for predecessor node
    deleteNode(node, value) {

        // If node is null, element is not present in array
        if (node == null) {
            console.log("Couldn't find element!")
            return null
        }

        // If node is a leaf node, delete the node (No other operations need to be performed)
        if (node.value == value && node.left == null && node.right == null) {
            node = null
            return null
        }

        // If left is null, Replace node with node.right (Since only one child is present, we can replace it with its immediate child)
        if (node.value == value && node.left === null) {
            return node.right;
        }

        // If right is null, Replace node with node.left (Since only one child is present, we can replace it with its immediate child)
        else if (node.value == value && node.right === null) {
            return node.left;
        }

        // If value is smaller than current node, move to left subtree
        if (node && value < node.value) {
            node.left = this.deleteNode(node.left, value)
            return node
        }
        // If value is greater than current node, move to right subtree
        else if (node && value > node.value) {
            node.right = this.deleteNode(node.right, value)
            return node
        }
        // If node is found, but is not a leaf node
        else {
            // Get the in-order predecessor of the node
            let predecessor = this.getInOrderPredecessor(node)
            // Replace node's value with predecessor value
            node.value = predecessor.value
            // Perform operation to remove predecessor node which was copied
            node.left = this.deleteNode(node.left, predecessor.value)

            return node
        }
    }
}

const testBST = () => {

    // BST used in the example
    // 
    //         12
    //       /   \
    //      7     15
    //     / \   /  \
    //    3  10 13   18

    const bst = new BST();

    bst.addNode(bst.head, 12);
    bst.addNode(bst.head, 7);
    bst.addNode(bst.head, 3);
    bst.addNode(bst.head, 10);
    bst.addNode(bst.head, 7);
    bst.addNode(bst.head, 15);
    bst.addNode(bst.head, 13)
    bst.addNode(bst.head, 18);

    console.log("\n\nIn-order traversal:\n\n");
    bst.levelOrder();

    console.log("\n\nDeleting node with value 15\n\n");
    bst.deleteNode(bst.head, 15);
    console.log("\n\nIn-order traversal after deletion:\n\n");
    bst.levelOrder();

    console.log("\n\nSearching for node with value 12\n\n");
    const foundNode = bst.search(bst.head, 12);
    if (foundNode) {
        console.log(`Node with value 12 found: ${foundNode.value}`);
    } else {
        console.log("Node with value 12 not found.");
    }

    console.log("Head : ", bst.head.value)
}

testBST()


// ------------------------------------------------------------------------

// BST used in the example:
//
//         50
//        /   \
//      30     70
//     /  \   /  \
//   20   40 60   80

// const bst = new BST()
// bst.addNode(bst.head, 50)
// bst.addNode(bst.head, 30)
// bst.addNode(bst.head, 70)
// bst.addNode(bst.head, 20)
// bst.addNode(bst.head, 40)
// bst.addNode(bst.head, 60)
// bst.addNode(bst.head, 80)
// console.log("\n")
// bst.inOrder()

// bst.deleteNode(bst.head, 50)
// console.log("\n")
// bst.inOrder()

// console.log(bst.search(bst.head, 90))
