// Merging Two BSTs - not using extra space of array
// Divided into 3 parts : 
//      1. Convert BST to sorted Doubly LL
//      2. Merge two Doubly LLs
//      3. Create BST from Doubly LL


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

// Class for Binary Search Tree
class BST {
    constructor() {
        this.head = null
    }

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

}

// Merge Two LLs
function mergeTwoLL(head1, head2) {

    // Pointers to both LL (Trees)
    let temp1 = head1
    let temp2 = head2

    // For merged LL
    let head = null
    let tail = null

    // While both pointers are non null
    while (temp1 && temp2) {
        // If value in first bst is smaller, add node to current LL
        if (temp1?.value < temp2?.value) {
            // LL is empty
            if (head == null && tail == null) {
                head = temp1
                tail = temp1
                temp1 = temp1?.right
            }
            // LL is non empty
            else {
                tail.right = temp1
                temp1.left = tail
                tail = temp1
                temp1 = temp1.right
            }
        }
        // If value in second bst is smaller, add node to current LL
        else {
            // LL is empty
            if (head == null && tail == null) {
                head = temp2
                tail = temp2
                temp2 = temp2?.right
            }
            // LL is non empty
            else {
                tail.right = temp2
                temp2.left = tail
                tail = temp2
                temp2 = temp2.right
            }
        }
    }

    // If values still exist in first LL
    while (temp1) {
        tail.right = temp1
        temp1.left = tail
        tail = temp1
        temp1 = temp1.right
    }

    // If values still exist in second LL
    while (temp2) {
        tail.right = temp2
        temp2.left = tail
        tail = temp2
        temp2 = temp2.right
    }

    return head
}

// Convert to Doubly LL
function convertIntoSortedDLL(root, head) {
    // Base case
    if (root === null) return head;

    // Recursively convert the right subtree
    head = convertIntoSortedDLL(root.right, head);

    // Set the current node's right to the head (next pointer in DLL)
    root.right = head;

    // If head is not null, set its left pointer to the current node (prev pointer in DLL)
    if (head !== null) {
        head.left = root;
    }

    // Move the head to the current node
    head = root;

    // Recursively convert the left subtree and return updated head
    return convertIntoSortedDLL(root.left, head);
}

// Wrapper function for conversion
function convertBinaryTreeToDLL(root) {
    let head = null;
    return convertIntoSortedDLL(root, head);
}

// Traverse LL
function traverse(head) {
    let temp = head

    while (temp) {
        console.log({ value: temp?.value, prev: temp?.left?.value, next: temp?.right?.value })
        temp = temp?.right
    }
}

// Count number of nodes in LL
function count(head) {
    let temp = head
    let count = 0

    while (temp) {
        count++
        temp = temp?.right
    }

    return count
}

// Creating BST from LL
function sortedLLToBST(head, n) {
    // Base case
    if (n <= 0 || head.current == null) {
        return null
    }

    // Creating left subtree from left n/2 nodes
    let left = sortedLLToBST(head, Math.floor(n / 2))

    // Middle node selected as root
    let root = head.current
    // Left of root is left subtree
    root.left = left

    // Move head to next node 
    head.current = head.current.right

    // Creating right subtree from remaining nodes
    root.right = sortedLLToBST(head, n - Math.floor(n / 2) - 1)

    return root
}


// -----------------------------------------------------------------------------------------------------------


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
bst2.addNode(bst2.head, 15);
bst2.addNode(bst2.head, 13)
bst2.addNode(bst2.head, 18);

console.log("\n")

// Converting first tree to DLL
let head1 = convertBinaryTreeToDLL(bst1.head)
traverse(head1)

console.log("\n")

// Converting second tree to DLL
let head2 = convertBinaryTreeToDLL(bst2.head)
traverse(head2)

// Merging DLLs
let head = mergeTwoLL(head1, head2)
traverse(head)

// Get number of nodes in DLL
let nodeCount = count(head)
// Create BST from DLL
head = sortedLLToBST({ current: head }, nodeCount)

levelOrder(head)