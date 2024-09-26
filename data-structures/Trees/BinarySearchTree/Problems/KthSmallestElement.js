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

    // Prints the level order traversal of BST
    levelOrder() {
        levelOrder(this.head)
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

    // Get the kth smallest element - uses same logic as inorder traversal
    kthElement(node, counter, k) {
        // If null is reached then return false
        if (node == null) {
            return false
        }

        // Check for kth smallest element in left subtree
        let left = this.kthElement(node?.left, counter, k)

        // If node value is returned from left subtree, return the value
        if (left) {
            return left
        }

        // Increment counter
        counter.count++

        // When counter value reaches k, send current node's value
        if (counter.count == k) {
            return node?.value
        }

        // Check for kth smallest element in right subtree
        return this.kthElement(node?.right, counter, k)
    }

    // Wrapper function
    kthSmallestElement(k) {
        return this.kthElement(this.head, { count: 0 }, k)
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

    console.log("\nLevel order traversal:");
    bst.levelOrder();

    console.log("3rd Smallest element", bst.kthSmallestElement(3))
}

testBST()