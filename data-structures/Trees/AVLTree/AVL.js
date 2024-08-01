// AVL Tree

// Node to represent a singular element in the tree
class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
        this.height = 0
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

// Class for Binary Search Tree
class AVL {
    constructor() {
        this.head = null
    }

    // Function to create a new node
    // Note : Height is initialized as 1 to simplify calculations 
    createNode(value) {
        const node = new Node(value, null, null)
        node.height = 1
        return node
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

    // Get Height of a Node
    getHeight(node) {
        if (node == null) {
            return 0
        }
        return node.height
    }

    // Balance Factor of A node is : Height of left subtree - Height of right subtree
    getBalanceFactor(node) {
        if (node == null) {
            return 0
        }

        return this.getHeight(node.left) - this.getHeight(node.right)
    }

    // Rotations : Left Rotate & Right Rotate
    //
    //      y                                 x
    //     / \     -> on Right Rotation ->   / \
    //    x   T3   <- on Left Rotation <-   T1  y
    //   / \                               / \
    //  T1  T2                           T2   T3

    // Where T1, T2 & T3 represent subtrees.

    // To left Rotate wrt an element x
    leftRotate(x) {
        // Get the element to the right of current node x
        let y = x.right
        // Get the element to the right of the Y node
        let T2 = y.left

        // Y node's left would be the current node X
        y.left = x
        // X node's right would be  would be Y's previous left element i.e. T2
        x.right = T2

        // Calculate height of nodes again
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1

        return y
    }

    // To right rotate wrt an element y
    rightRotate(y) {
        // Get the element to the left of current node y
        let x = y.left
        // Get the element to the right of the X node
        let T2 = x.right

        // X node's right would be the current node y
        x.right = y
        // y node's left would be X's previous right element i.e. T2
        y.left = T2

        // Calculate height of nodes again
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1

        return x
    }

    // Add a new node in the AVL tree
    addNode(node, value) {

        // If head is not present, initialize node as head
        if (!this.head) {
            this.head = this.createNode(value)
            return this.head
        }

        // if node is null, add a node
        if (node == null) {
            return this.createNode(value)
        }

        // If value is smaller than current node value, move to left subtree and continue operation.
        if (value < node.value) {
            node.left = this.addNode(node.left, value)
        }
        // If value is larger than current node value, move to right subtree and continue operation.
        else if (value > node.value) {
            node.right = this.addNode(node.right, value)
        }
        // If value is already present, return the same node
        else {
            return node
        }

        // Calculate node height
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))

        // Calculate the balance factor of the node
        let balanceFactor = this.getBalanceFactor(node)

        // LL rotation case
        if (balanceFactor > 1 && value < node.left?.value) {
            return this.rightRotate(node)
        }

        // LR rotation case
        if (balanceFactor > 1 && value > node.left?.value) {
            node.left = this.leftRotate(node.left)
            return this.rightRotate(node)
        }

        // RR rotation case
        if (balanceFactor < -1 && value > node.right?.value) {
            return this.leftRotate(node)
        }

        // RL rotation case
        if (balanceFactor < -1 && value < node.right?.value) {
            node.right = this.rightRotate(node.right)
            return this.leftRotate(node)
        }

        return node
    }

    // Wrapper for AddNode function - helps to make sure head is pointed to the correct element
    insert(value) {
        this.head = this.addNode(this.head, value)
    }

    // To remove an element from the AVL Tree
    deleteNode(node, value) {
        // If node is null, element is not present in array
        if (node == null) {
            return node
        }

        // If value is smaller than current node, move to left subtree
        if (node && value < node.value) {
            node.left = this.deleteNode(node.left, value)
        }
        // If value is greater than current node, move to right subtree
        else if (node && value > node.value) {
            node.right = this.deleteNode(node.right, value)
        }
        // If node is found, but is not a leaf node
        else {
            // Node has one or zero child nodes
            if (node.left == null || node.right == null) {
                // Node with only one child or no child
                // If both are null, child value is also null
                let child = node.left ? node.left : node.right;

                // Node has no child
                if (child == null) {
                    child = node;
                    node = null;
                }
                // Node has One child
                else {
                    node = child; // Copy the contents of the non-empty child
                }
            }
            // Node has 2 children
            else {
                // Node with two children: Get the inorder predecessor (max in the left subtree)
                let inOrderPredecessor = this.getInOrderPredecessor(node);

                // Copy the predecessor's value to this node
                node.value = inOrderPredecessor.value;

                // Delete the inorder predecessor
                node.left = this.deleteNode(node.left, inOrderPredecessor.value);
            }
        }

        // If the tree had only one node then return 
        if (node == null)
            return node;

        // UPDATE HEIGHT OF THE CURRENT NODE 
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right));

        // GET THE BALANCE FACTOR OF THIS NODE (to check whether this node became unbalanced) 
        let balance = this.getBalanceFactor(node);

        // If this node becomes unbalanced, then there are 4 cases 
        // Left Left Case 
        if (balance > 1 && this.getBalanceFactor(node.left) >= 0) {
            return this.rightRotate(node);
        }

        // Left Right Case 
        if (balance > 1 && this.getBalanceFactor(node.left) < 0) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        // Right Right Case 
        if (balance < -1 && this.getBalanceFactor(node.right) <= 0) {
            return this.leftRotate(node);
        }

        // Right Left Case 
        if (balance < -1 && this.getBalanceFactor(node.right) > 0) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        return node;
    }

    // Wrapper for deleteNode function - helps to make sure head is pointed to the correct element
    delete(value) {
        this.head = this.deleteNode(this.head, value)
    }
}


const testAVL = () => {
    // Testing AVL Tree Implementation
    const avlTree = new AVL();

    // Insert nodes
    avlTree.insert(10);
    avlTree.insert(20);
    avlTree.insert(30);
    avlTree.insert(40);
    avlTree.insert(50);
    avlTree.insert(25);

    // Print inOrder traversal (should print sorted values)
    console.log("\n\nInOrder Traversal after inserts:");
    avlTree.inOrder();

    // Search for nodes
    console.log("\n\nSearch for node with value 20:\n\n");
    console.log(avlTree.search(avlTree.head, 20));

    console.log("\n\nSearch for node with value 60 (not present):\n\n");
    console.log(avlTree.search(avlTree.head, 60));

    // Delete nodes
    avlTree.delete(20);
    console.log("\n\nInOrder Traversal after deleting node with value 20:\n\n");
    avlTree.inOrder();

    avlTree.delete(40);
    console.log("\n\nInOrder Traversal after deleting node with value 40:\n\n");
    avlTree.inOrder();

    avlTree.delete(10);
    console.log("\n\nInOrder Traversal after deleting node with value 10:\n\n");
    avlTree.inOrder();
}

testAVL()

// const avl = new AVL()
// avl.insert(45)
// avl.insert(4)
// avl.insert(5)
// avl.insert(8)
// avl.insert(9)
// console.log("Head : ", avl.head)
// console.log("\n-------------------------------------------------\n")
// avl.inOrder(avl.head)

// avl.delete(5)
// console.log("\n-------------------------------------------------\n")

// console.log("Head : ", avl.head)
// console.log("\n-------------------------------------------------\n")
// avl.inOrder(avl.head)