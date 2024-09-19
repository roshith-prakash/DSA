// To build a tree from a level order input

// Readline module to get user input
const readline = require('readline');

// Create readline interface for input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Utility function to read input from the command line
const getInput = (query) => {
    return new Promise(resolve => rl.question(query, (answer) => resolve(parseInt(answer))));
};

// Node to represent a singular element in the tree
class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
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

// Class for Binary Tree
class BinaryTree {
    constructor() {
        this.head = null
    }

    // Initialize node as head
    inititializeHead(node) {
        this.head = node
    }

    // Level order Traversal
    levelOrder() {
        levelOrder(this.head)
    }

    // To build a tree based on levels - from left to right
    async buildFromLevelOrder() {
        // Head / Root node
        let root = null;
        // Queue for level Order insertion
        let queue = [];

        // Get root data
        const rootData = await getInput("Enter data for root:");
        // If -1 (Null condition), return null
        if (rootData === -1) {
            return null;
        }

        // Create node with given data
        root = new Node(rootData);
        // Push root to queue
        queue.push(root);

        // While queue is not empty
        while (queue.length > 0) {
            let temp = queue.shift();

            // Get data for left node
            const leftData = await getInput(`Enter left node for ${temp.value}: `);
            // If not -1 (Null condition), then add node and push it to queue 
            if (leftData !== -1) {
                temp.left = new Node(leftData);
                queue.push(temp.left);
            }

            // Get data for right node
            const rightData = await getInput(`Enter right node for ${temp.value}: `);
            // If not -1 (Null condition), then add node and push it to queue 
            if (rightData !== -1) {
                temp.right = new Node(rightData);
                queue.push(temp.right);
            }
        }

        // Close the terminal input
        rl.close()
        // Initialize root as head node
        this.inititializeHead(root);

        return;
    }
}

const test = async () => {
    const tree = new BinaryTree()
    await tree.buildFromLevelOrder()
    tree.levelOrder()
}

test()