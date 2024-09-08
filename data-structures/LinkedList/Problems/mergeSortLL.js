// Node to be used inside linked list.
class Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

// The class to create the linked list
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    // Add node to the linked list.
    addNode(value) {
        // Create a new node
        const node = new Node(value, null)

        // If no nodes are present, point head to current node
        if (!this.head) {
            this.head = node
        }
        // If nodes are already present, loop till current.next == null and then add node as next.
        else {
            let current = this.head
            while (current?.next) {
                current = current.next
            }
            current.next = node
        }

        this.size = this.size + 1
    }

    // Traverse through the linked list to display all values.
    traverse() {
        // If nodes are present
        if (this.size != 0 && this.head != null) {
            console.log("\nValues in linked list are:")
            // Loop through the list to display values
            let current = this.head
            while (current) {
                console.log(current.value)
                current = current?.next
            }
        }
        // If no nodes are present.
        else {
            console.log("List is empty")
        }
    }

    findMiddle(node) {
        // Create two pointers - slow will reach middle element when fast reaches final element
        let slow = node
        let fast = node.next

        // Make sure fast reaches last element
        while (fast != null && fast?.next != null) {
            // Move slow pointer one pace
            slow = slow?.next
            // Move fast pointer two paces
            fast = fast?.next?.next
        }

        return slow
    }

    // Merge the two lists
    merge(left, right) {

        // If no left LL is present, return right
        if (left == null) {
            return right
        }

        // If no right LL is present, return left
        if (right == null) {
            return left
        }

        // Temporary head node
        let node = new Node()
        let temp = node

        // Link the nodes in sorted order
        while (left != null && right != null) {
            // Left is smaller, add left to LL
            if (left.value < right.value) {
                temp.next = left
                temp = left
                left = left.next
            }
            // Right is smaller, add right to LL
            else {
                temp.next = right
                temp = right
                right = right.next
            }
        }

        // If left LL has nodes left, add them to LL
        while (left != null) {
            temp.next = left
            temp = left
            left = left.next
        }

        // If right LL has nodes left, add them to LL
        while (right != null) {
            temp.next = right
            temp = right
            right = right.next
        }

        // Removing temp node before returning
        return node.next
    }

    mergeSort(node) {

        // Single Node or No node
        if (node == null || node.next == null) {
            return node
        }

        // Find middle of LL
        let middle = this.findMiddle(node)

        // Set left LL start as current node
        let left = node
        // Set right LL start as middle.next
        let right = middle.next
        middle.next = null

        // Perform recursive mergeSort
        left = this.mergeSort(left)
        right = this.mergeSort(right)

        // Merge the resulting LLs
        let result = this.merge(left, right)

        // Set head as the head of returned LL
        this.head = result
        return result
    }

    // Get the head of the list
    getHead() {
        return this.head
    }
}

// 3, 4, 8, 4, 9, 7, 5, 6, 1, 2
const list = new LinkedList()
list.addNode(3);
list.addNode(4);
list.addNode(8);
list.addNode(4);
list.addNode(9);
list.addNode(7);
list.addNode(5);
list.addNode(6);
list.addNode(1);
list.addNode(2);

console.time()
list.mergeSort(list.getHead())
console.timeEnd()
list.traverse()
