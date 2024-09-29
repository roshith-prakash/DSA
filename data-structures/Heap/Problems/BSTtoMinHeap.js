// Convert given BST to Min Heap 

// Node to represent a singular element in the tree
class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
    }
}

const inOrder = (head, arr) => {
    if (!head) {
        return
    }
    inOrder(head.left, arr)
    arr.push(head?.value)
    inOrder(head.right, arr)
}

// Class for Binary Search Tree
class BST {
    constructor() {
        this.head = null
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

    inOrder(arr) {
        inOrder(this.head, arr)
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

class Heap {
    // Heap uses 1 based indexing and thus we add a placeholder value for 0th index
    constructor() {
        this.arr = [undefined]
    }

    // Insert a new value in the heap
    insert(value) {
        // Push a new value at the end of the heap
        this.arr.push(value)
        // Get index of newly pushed value
        let index = this.arr.length - 1

        while (index > 1) {
            // Get parent of new node
            let parent = Math.floor(index / 2)

            // In case of min heap - parent must be smaller than child
            // If condition is not met, swap parent and child 
            if (this.arr[parent] > this.arr[index]) {
                [this.arr[parent], this.arr[index]] = [this.arr[index], this.arr[parent]]
                index = parent
            }
            // If parent is snaller, simply return from function
            else {
                return
            }
        }
    }

    // Deletes the root value in the heap
    delete() {

        // Nothing is present inside the heap
        if (this.arr.length === 1) {
            console.log("Nothing to delete!");
            return;
        }

        // Replace root with the last element
        this.arr[1] = this.arr.pop();

        let i = 1;  // Start from root

        // Bubble down to maintain the min heap property
        while (true) {
            let left = 2 * i;
            let right = 2 * i + 1;

            // Assume current node (parent) is the smallest
            let smallest = i;

            // Compare with left child
            if (left < this.arr.length && this.arr[left] < this.arr[smallest]) {
                smallest = left;
            }

            // Compare with right child
            if (right < this.arr.length && this.arr[right] < this.arr[smallest]) {
                smallest = right;
            }

            // If the current node (parent) is smaller than both children, the heap is valid
            if (smallest === i) {
                break;
            }

            // Swap with the smaller child
            [this.arr[i], this.arr[smallest]] = [this.arr[smallest], this.arr[i]];

            // Move down to the child index
            i = smallest;
        }
    }

    printHeap() {
        for (let i = 1; i < this.arr.length; i++) {
            console.log(this.arr[i])
        }
    }
}

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

let arr = []
bst.inOrder(arr)

console.log(arr)

const heap = new Heap()

for (let x of arr) {
    heap.insert(x)
}

heap.printHeap()