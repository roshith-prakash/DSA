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
            while (current.next) {
                current = current.next
            }
            current.next = node
        }

        this.size = this.size + 1
    }

    // Add node at start (Make the node the head).
    addNodeAtStart(value) {
        const node = new Node(value, null)
        if (this.head) {
            node.next = this.head
            this.head = node
        } else {
            this.head = node
        }
    }

    // Insert a node at the position specified.
    insertAtPosition(value, position) {

        if (position < 1) {
            console.log("Position must be 1 or higher")
            return
        }

        // Check if linked list is empty - if empty then initialize as head
        if (this.size == 0 && this.head == null) {
            console.log("No nodes present in linked list. Adding node and initializing as start.")

            this.addNode(value)
        }
        // If linked list is not empty
        else {
            // Position index
            let i = 1

            // Index to prev element
            let prev = this.head

            // If only one element is present (head)
            if (prev.next == null) {
                const node = new Node(value, null)
                this.head.next = node
                this.size = this.size + 1
            }

            // While position not reached or next elment is not null, increment the position index & go to next node
            while (i < position - 1 && prev.next != null) {
                prev = prev?.next
                i++
            }

            // Position reached but prev.next is null
            if (prev.next == null && i == position - 1) {
                const node = new Node(value, null)
                prev.next = node
                return
            }

            // If position was not reached.
            if (i < position - 1) {
                console.log("Linked list is smaller than provided position.")
                return
            }
            // If position was reached and list has elements ahead, point new node.next to next element in list.
            else {
                const node = new Node(value, null)
                node.next = prev.next
                prev.next = node
                this.size = this.size + 1
                return
            }
        }
    }

    // Find an element in the linked list with the given value and remove it.
    removeNode(value) {
        // If nodes are present in list
        if (this.size != 0 && this.head != null) {
            // Pointer to element previous to required element
            let prev = this.head

            // If head is the value to be deleted
            if (prev.value == value) {
                this.head = prev.next
                prev.next = null
                this.size = this.size - 1
                return
            }

            // Loop through the list to find the required element
            while (prev.next.value != value) {
                prev = prev.next
            }

            // If pointer is null, there was no node with given value
            if (prev == null) {
                console.log(`Node with value ${value} not present.`)
            }
            // Required node is node after the pointer.
            else {
                let current = prev.next
                // Linking previous node to next of required node. 
                prev.next = current.next
                // Decrement size of list
                this.size = this.size - 1
            }
        }
        else {
            console.log("No nodes present.")
        }
    }

    // Delete Head.
    removeHead(value) {
        if (this.head == null || this.size == 0) {
            console.log("Linked List is Empty.")
            return
        }

        if (this.head.next) {
            this.head = this.head.next
        } else {
            this.head == null
        }
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
                current = current.next
            }
        }
        // If no nodes are present.
        else {
            console.log("List is empty")
        }
    }
}

// Initializing LinkedList
const list = new LinkedList()

// Appending nodes in LL
list.addNode(10)
list.addNode(20)
list.addNode(30)
list.addNode(30)
list.addNode(40)
list.addNode(50)

// Traverse list
list.traverse()

// Adding element at 4th position
list.insertAtPosition(10, 4)
// Adding new head element.
list.addNodeAtStart(1)

// Traverse list
list.traverse()

// Removing head element.
list.removeHead()

// Traverse list
list.traverse()