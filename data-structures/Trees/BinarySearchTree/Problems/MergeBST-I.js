// Given two BSTs, merge them into a singular BST

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
const inOrder = (head, arr) => {
    while (head != null) {
        inOrder(head.left, arr)
        arr.push(head?.value)
        inOrder(head.right, arr)
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
    inOrder(arr) {
        inOrder(this.head, arr)
    }

    levelOrder() {
        levelOrder(this.head)
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
                return newNode
            }
            // If value is smaller than node but element is already present in node.left, move to the left subtree
            else if (value < node.value && node.left != null) {
                return this.addNode(node.left, value)
            }
            // If value is greater than node & node's right is empty, add to the right of node
            else if (value > node.value && node.right == null) {
                const newNode = new Node(value, null, null)
                node.right = newNode
                return newNode
            }
            // If value is greater than node but element is already present in node.right, move to the right subtree
            else if (value > node.value && node.right != null) {
                return this.addNode(node.right, value)
            }
        }
    }

    // Using binary search logic to build tree from inorder traversal
    inorderToBST(start, end, inorder) {
        // Base case
        if (start > end) {
            return null
        }

        // Get mid of the array for the current stage
        let mid = Math.floor((start + end) / 2)
        // Get element from array and create a new node
        let node = new Node(inorder[mid])

        // Create left subtree for this node
        node.left = this.inorderToBST(start, mid - 1, inorder)
        // Create right subtree for this node
        node.right = this.inorderToBST(mid + 1, end, inorder)

        return node
    }

    // Merge Two BSTs
    mergeTwoBST(head1, head2) {
        // To store inorder values for both BSTs
        let inorder1 = []
        let inorder2 = []

        // Array to merge BSTs in a sorted way (creates inorder for merged BST)
        let mergedArray = []

        // Populate array with sorted values
        inOrder(head1, inorder1)
        // Populate array with sorted values
        inOrder(head2, inorder2)

        // Indices
        let i = 0
        let j = 0
        let k = 0

        // While both indices are within bound
        while (i < inorder1.length && j < inorder2.length) {
            // If value in first bst is smaller, add that to merged array
            if (inorder1[i] < inorder2[j]) {
                mergedArray[k] = inorder1[i]
                k++
                i++
            }
            // If value in second bst is smaller, add that to merged array
            else {
                mergedArray[k] = inorder2[j]
                k++
                j++
            }
        }

        // If values still exist in Array for first bst, add them to merged array
        while (i < inorder1.length) {
            mergedArray[k] = inorder1[i]
            k++
            i++
        }

        // If values still exist in Array for second bst, add them to merged array
        while (j < inorder2.length) {
            mergedArray[k] = inorder2[j]
            k++
            j++
        }

        // Create a BST using the inorder mergedArray - Change head to node returned by inorderToBST function
        this.head = this.inorderToBST(0, mergedArray.length - 1, mergedArray)
    }

}

const testBST = () => {


    //         50
    //        /   \
    //      30     70
    //     /  \   /  \
    //   20   40 60   80

    const bst1 = new BST()
    bst1.addNode(bst1.head, 50)
    bst1.addNode(bst1.head, 30)
    bst1.addNode(bst1.head, 70)
    bst1.addNode(bst1.head, 20)
    bst1.addNode(bst1.head, 40)
    bst1.addNode(bst1.head, 60)
    bst1.addNode(bst1.head, 80)

    bst1.levelOrder()

    //         12
    //       /   \
    //      7     15
    //     / \   /  \
    //    3  10 13   18

    const bst2 = new BST();

    bst2.addNode(bst2.head, 12);
    bst2.addNode(bst2.head, 7);
    bst2.addNode(bst2.head, 3);
    bst2.addNode(bst2.head, 10);
    bst2.addNode(bst2.head, 7);
    bst2.addNode(bst2.head, 15);
    bst2.addNode(bst2.head, 13)
    bst2.addNode(bst2.head, 18);

    bst2.levelOrder()

    // Merging BSTs into bst1
    bst1.mergeTwoBST(bst1.head, bst2.head)

    bst1.levelOrder()

}

testBST()