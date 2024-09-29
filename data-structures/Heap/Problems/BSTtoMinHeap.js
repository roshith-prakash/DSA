// Convert given BST to Min Heap 
// Condition : All values in left subtree must be smaller than values in right subtree

// Node to represent a singular element in the tree
class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
    }
}

// Inorder traversal pushes value inside array
const inOrder = (head, arr) => {
    if (!head) {
        return
    }
    inOrder(head.left, arr)
    arr.push(head?.value)
    inOrder(head.right, arr)
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

    // Populate array with inorder values 
    inOrder(arr) {
        inOrder(this.head, arr)
    }

    // Print level order traversal of tree
    levelOrder() {
        levelOrder(this.head)
    }

    // Converts BST to min heap
    BSTToMinHeap(root, arr, index) {
        if (root == null) return;

        // Copy index value to root
        root.value = arr[index.index];

        // Increment index
        index.index++

        // then recur on left subtree
        this.BSTToMinHeap(root.left, arr, index);

        // now recur on right subtree
        this.BSTToMinHeap(root.right, arr, index);
    }

    // Wrapper function to convert BST to heap
    convertToMinHeap(root) {
        // To populate inorder values
        let arr = []

        // Populate array
        this.inOrder(arr)

        // BST to MIN HEAP conversion
        this.BSTToMinHeap(root, arr, { index: 0 });
    }
}


// ====================================================================================================================================


// BST used in the example
// 
//         4
//       /   \
//      2     6
//     / \   /  \
//    1   3 5    7


const bst = new BST();

bst.addNode(bst.head, 4);
bst.addNode(bst.head, 2);
bst.addNode(bst.head, 1);
bst.addNode(bst.head, 3);
bst.addNode(bst.head, 6);
bst.addNode(bst.head, 5)
bst.addNode(bst.head, 7);

bst.levelOrder()

bst.convertToMinHeap(bst.head)

bst.levelOrder()
