// Find the number of paths in the tree which have their sum equak to K.
// Path can start from any node and end at any node.

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

    findKSumPaths(node, k, currentSum, prefixSums) {

        // Base case
        if (node == null) {
            return 0;
        }

        // Update current cumulative sum
        currentSum += node.value;

        // Number of paths that sum to k ending at this node
        let numPaths = prefixSums[currentSum - k] || 0;

        // If the current sum equals k, count this path
        if (currentSum == k) {
            numPaths++;
        }

        // Add the current sum to the prefix sums hashmap
        prefixSums[currentSum] = (prefixSums[currentSum] || 0) + 1;

        // Recursively check the left and right subtrees
        numPaths += this.findKSumPaths(node.left, k, currentSum, prefixSums);
        numPaths += this.findKSumPaths(node.right, k, currentSum, prefixSums);

        // Backtrack: remove the current sum from the hashmap
        prefixSums[currentSum]--;

        return numPaths;
    }

    ksum(k) {
        let prefixSums = {};
        return this.findKSumPaths(this.head, k, 0, prefixSums);
    }

}

//          8
//         /   \
//       4      5
//      /  \      \
//     3    2      2
//    / \    \      
//   3   -2   1  

const bt = new BinaryTree()

const bt1 = bt.createNode(8)
const bt2 = bt.createNode(4)
const bt3 = bt.createNode(5)
const bt4 = bt.createNode(3)
const bt5 = bt.createNode(2)
const bt6 = bt.createNode(2)
const bt7 = bt.createNode(3)
const bt8 = bt.createNode(-2)
const bt9 = bt.createNode(1)

bt.inititializeHead(bt1)
bt.addToLeft(bt1, bt2)
bt.addToRight(bt1, bt3)
bt.addToLeft(bt2, bt4)
bt.addToRight(bt2, bt5)
bt.addToRight(bt3, bt6)
bt.addToLeft(bt4, bt7)
bt.addToRight(bt4, bt8)
bt.addToRight(bt5, bt9)

console.log("Number of paths with sum 7 : ", bt.ksum(7))



// Step - by - Step Execution:

// At node 8:
// currentSum = 0 + 8 = 8
// Check if (8 - 7) = 1 exists in prefixSums: it doesn't.
// Add currentSum(8) to prefixSums: prefixSums = { 8: 1 }
// Recur into left subtree(node 4).

// At node 4:
// currentSum = 8 + 4 = 12
// Check if (12 - 7) = 5 exists in prefixSums: it doesn't.
// Add currentSum(12) to prefixSums: prefixSums = { 8: 1, 12: 1 }
// Recur into left subtree(node 3).

// At node 3:
// currentSum = 12 + 3 = 15
// Check if (15 - 7) = 8 exists in prefixSums: It does! So there's a valid path from node 8 to node 3 that sums to 7.
// Increment numPaths = 1
// Add currentSum(15) to prefixSums: prefixSums = { 8: 1, 12: 1, 15: 1 }
// Recur into left subtree(node 3).

// At node 3(left):
// currentSum = 15 + 3 = 18
// Check if (18 - 7) = 11 exists in prefixSums: it doesn't.
// Add currentSum(18) to prefixSums: prefixSums = { 8: 1, 12: 1, 15: 1, 18: 1 }
// Both left and right subtrees are null, so backtrack and remove currentSum(18) from prefixSums: prefixSums = { 8: 1, 12: 1, 15: 1 }

// Back to node 3(right):
// Backtrack to node 3(right child is - 2).
//     currentSum = 15 - 2 = 13
// Check if (13 - 7) = 6 exists in prefixSums: it doesn't.
// Add currentSum(13) to prefixSums: prefixSums = { 8: 1, 12: 1, 13: 1, 15: 1 }
// Right subtree is null, backtrack and remove currentSum(13) from prefixSums: prefixSums = { 8: 1, 12: 1, 15: 1 }.

// Back to node 4(right subtree of 4 is 2):
// Backtrack to node 4(right child is 2).
//     currentSum = 12 + 2 = 14
// Check if (14 - 7) = 7 exists in prefixSums: It does not.
// Add currentSum(14) to prefixSums: prefixSums = { 8: 1, 12: 1, 14: 1, 15: 1 }
// Recur into right subtree(node 1).

// At node 1:
// currentSum = 14 + 1 = 15
// Check if (15 - 7) = 8 exists in prefixSums: It does! So there’s a path from node 8 to node 1 that sums to 7.
// Increment numPaths = 2
// Add currentSum(15) to prefixSums: prefixSums = { 8: 1, 12: 1, 14: 1, 15: 2 }
// Both left and right subtrees are null, backtrack and remove currentSum(15) from prefixSums: prefixSums = { 8: 1, 12: 1, 14: 1, 15: 1 }.

// Backtrack to root and traverse right subtree of node 8(node 5):
// currentSum = 8 + 5 = 13
// Check if (13 - 7) = 6 exists in prefixSums: it doesn't.
// Add currentSum(13) to prefixSums: prefixSums = { 8: 1, 12: 1, 13: 1 }
// Recur into right subtree(node 2).

// At node 2:
// currentSum = 13 + 2 = 15
// Check if (15 - 7) = 8 exists in prefixSums: It does! So there’s a path from node 8 to node 2 that sums to 7.
// Increment numPaths = 3
// Add currentSum(15) to prefixSums: prefixSums = { 8: 1, 12: 1, 13: 1, 15: 1 }
// Both left and right subtrees are null, backtrack and remove currentSum(15) from prefixSums: prefixSums = { 8: 1, 12: 1, 13: 1 }.


// Final Result:
// At the end of the traversal, we found 3 paths that sum to 7:
// From node 8 to node 3.
// From node 8 to node 1.
// From node 8 to node 2(right subtree).

// The output of the ksum(7) call will be 3.