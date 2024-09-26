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
        console.log(head?.value)
        inOrder(head.right)
        return
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

    // To get the lowest common ancestor for two nodes
    lowestCommonAncestor(node, a, b) {

        // If node value is smaller than both A & B, LCA exists in right subtree
        if (node?.value < a?.value && node?.value < b?.value) {
            return this.lowestCommonAncestor(node?.right, a, b)
        }

        // If node value is larger than both A & B, LCA exists in left subtree
        if (node?.value > a?.value && node?.value > b?.value) {
            return this.lowestCommonAncestor(node?.left, a, b)
        }

        // If node value is larger than A & smaller than B, current node is LCA
        if (node?.value > a?.value && node?.value < b?.value) {
            return node
        }

        // If node value is smaller than A & larger than B, current node is LCA
        if (node?.value < a?.value && node?.value > b?.value) {
            return node
        }
    }
}

const testBST = () => {

    // BST used in the example
    // 
    //          12
    //       /     \
    //      7         15
    //     /  \      /  \
    //   3    10   13    18
    //  / \  /  \  \    / \
    //  1  5 9 11  14  17  20


    const bst = new BST();

    bst.addNode(bst.head, 12); // Level 1
    bst.addNode(bst.head, 7);  // Level 2
    bst.addNode(bst.head, 3);  // Level 3
    bst.addNode(bst.head, 10); // Level 3
    bst.addNode(bst.head, 15); // Level 2
    bst.addNode(bst.head, 13); // Level 3
    bst.addNode(bst.head, 18); // Level 3
    bst.addNode(bst.head, 1);  // Level 4
    bst.addNode(bst.head, 5);  // Level 4
    bst.addNode(bst.head, 9);  // Level 4
    bst.addNode(bst.head, 11); // Level 4
    bst.addNode(bst.head, 14); // Level 4
    bst.addNode(bst.head, 17); // Level 4
    bst.addNode(bst.head, 20); // Level 4

    let node1 = bst.search(bst.head, 14)
    let node2 = bst.search(bst.head, 17)

    console.log("Lowest Common Ancestor : ", bst.lowestCommonAncestor(bst.head, node1, node2)?.value)
}

testBST()