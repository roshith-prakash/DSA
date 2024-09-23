// Morris Traversal of a binary tree
// Inorder Tree Traversal without recursion and without stack!
// Advantage : Constant space O(1)
// Time complexity : O(n)

// 1. Initialize current as root
// 2. While current is not NULL
//    If the current does not have left child
//       a) Print current’s data
//       b) Go to the right, i.e., current = current -> right
//    Else
//       a) Find rightmost node in current left subtree OR
//               node whose right child == current.
//          If we found right child == current
//              a) Update the right child as NULL of that node whose right child is current
//              b) Print current’s data
//              c) Go to the right, i.e.current = current -> right
//          Else
//              a) Make current as the right child of that rightmost 
//                 node we found; and 
//              b) Go to this left child, i.e., current = current -> left

// Node to represent a singular element in the tree
class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
    }
}

// Code for Morris Traversal : Inorder without recursion or stack
const morrisTraversal = (root) => {
    let current, pre

    // No nodes present
    if (root == null) {
        return
    }

    current = root

    while (current != null) {

        // If the current does not have left child
        //       a) Print current’s data
        //       b) Go to the right, i.e., current = current -> right
        if (!current?.left) {
            console.log(current?.value)
            current = current?.right
        }
        // If left child is present
        else {
            // Find rightmost node in current left subtree
            pre = current?.left

            // Find predecessor
            while (pre?.right && pre?.right != current) {
                pre = pre?.right
            }

            // Make current as right child of its inorder predecessor 
            if (pre.right == null) {
                pre.right = current;
                current = current.left;
            }
            // Revert the changes made in the 'if' part to restore the original tree i.e., fix the right child of predecessor
            else {
                pre.right = null
                console.log(current?.value)
                current = current?.right
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

    morrisTraversal() {
        morrisTraversal(this.head)
    }
}

//         50
//        /   \
//      30     70
//     /      /  \
//   40      60   80
//          /       \
//         65        90

const bt = new BinaryTree()
const bt1 = bt.createNode(50)
const bt2 = bt.createNode(30)
const bt3 = bt.createNode(70)
const bt4 = bt.createNode(60)
const bt5 = bt.createNode(80)
const bt6 = bt.createNode(90)
const bt7 = bt.createNode(65)
const bt8 = bt.createNode(40)

bt.inititializeHead(bt1)
bt.addToLeft(bt1, bt2)
bt.addToRight(bt1, bt3)
bt.addToLeft(bt3, bt4)
bt.addToRight(bt3, bt5)
bt.addToRight(bt5, bt6)
bt.addToLeft(bt4, bt7)
bt.addToLeft(bt2, bt8)

bt.morrisTraversal()


// ### Initial Tree:

// ```
// //         50
// //        /   \
// //      30     70
// //     /  \   /  \
// //   20   40 60   80
// ```

// ---

// ### Step 1: ** Current = 50 **
// - ** Finding predecessor **:
// - Predecessor(`pre`) is`40`(rightmost node of the left subtree of`50`).
//   - We temporarily link `40.right = 50` and move to`current = 30`.

// ** Tree after temporary link:**

//     ```
// //         50
// //        /   \
// //      30     70
// //     /  \   /  \
// //   20   40 60   80
// //          \
// //          50
// ```

// ---

// ### Step 2: ** Current = 30 **
// - ** Finding predecessor **:
// - Predecessor(`pre`) is`20`(rightmost node of the left subtree of`30`).
//   - We temporarily link `20.right = 30` and move to`current = 20`.

// ** Tree after temporary link:**

//     ```
// //         50
// //        /   \
// //      30     70
// //     /  \   /  \
// //   20   40 60   80
// //     \    \
// //     30   50
// ```

// ---

// ### Step 3: ** Current = 20 **
//     - `20` has no left child, so we print `20` and move to`current = 30`(via the temporary link`20.right = 30`).

// ** Tree structure remains unchanged.**

//     ---

// ### Step 4: ** Current = 30(again) **
//     - Predecessor(`pre = 20`) already links to`30`, so we revert this change(`20.right = null`).
// - Print`30` and move to`current = 40`.

// ** Tree after link removal:**

//     ```
// //         50
// //        /   \
// //      30     70
// //     /  \   /  \
// //   20   40 60   80
// //          \
// //          50
// ```

// ---

// ### Step 5: ** Current = 40 **
//     - `40` has no left child, so we print `40` and move to`current = 50`(via the temporary link`40.right = 50`).

// ** Tree structure remains unchanged.**

//     ---

// ### Step 6: ** Current = 50(again) **
//     - Predecessor(`pre = 40`) already links to`50`, so we revert this change(`40.right = null`).
// - Print`50` and move to`current = 70`.

// ** Tree after link removal:**

//     ```
// //         50
// //        /   \
// //      30     70
// //     /  \   /  \
// //   20   40 60   80
// ```

// ---

// ### Step 7: ** Current = 70 **
// - ** Finding predecessor **:
// - Predecessor(`pre`) is`60`(rightmost node of the left subtree of`70`).
//   - We temporarily link `60.right = 70` and move to`current = 60`.

// ** Tree after temporary link:**

//     ```
// //         50
// //        /   \
// //      30     70
// //     /  \   /  \
// //   20   40 60   80
// //            \
// //            70
// ```

// ---

// ### Step 8: ** Current = 60 **
//     - `60` has no left child, so we print `60` and move to`current = 70`(via the temporary link`60.right = 70`).

// ** Tree structure remains unchanged.**

//     ---

// ### Step 9: ** Current = 70(again) **
//     - Predecessor(`pre = 60`) already links to`70`, so we revert this change(`60.right = null`).
// - Print`70` and move to`current = 80`.

// ** Tree after link removal:**

//     ```
// //         50
// //        /   \
// //      30     70
// //     /  \   /  \
// //   20   40 60   80
// ```

// ---

// ### Step 10: ** Current = 80 **
//     - `80` has no left child, so we print `80` and move to`current = null`.

// ---

// ### Final Tree:

// The tree is now back to its original state, and the Morris Traversal has successfully printed the nodes in in -order without altering the final tree structure permanently.

// ### Output(In - order Traversal):
// ```
// 20, 30, 40, 50, 60, 70, 80
// ```

// Each time we created a temporary link between a node and its predecessor, we reverted it later, ensuring the tree remains unchanged after the traversal.