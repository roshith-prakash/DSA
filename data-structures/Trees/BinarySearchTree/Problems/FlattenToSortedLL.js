// Given a BST, flatten it to a Sorted Linked List

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
        arr.push(head)
        inOrder(head.right, arr)
        return
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

    // Flatten BST to a sorted LL
    flattenToSortedLinkedList() {
        let inorder = []
        // Get inorder array (sorted due to bst principle)
        this.inOrder(inorder)

        for (let i = 0; i < inorder.length; i++) {
            // Change left pointer to null
            inorder[i].left = null
            // If next element in inorder exists, point to next element
            if (inorder[i + 1])
                inorder[i].right = inorder[i + 1]
            // Else point to null
            else
                inorder[i].right = null
        }

        return inorder[0]
    }

    // Traverse Linked List
    traverseLL(root) {
        let node = root

        while (node) {
            console.log(node?.value)
            node = node?.right
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

    let root = bst.flattenToSortedLinkedList()
    bst.traverseLL(root)

}

testBST()