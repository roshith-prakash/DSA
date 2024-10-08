// Node to be used inside linked list.
class Node {
    constructor(value, prev, next) {
        this.value = value
        this.next = next
        this.prev = prev
    }
}

// The class to create the linked list
// Doubly linked list has nodes which maintain pointer to previous node as well
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    // Add node to the linked list.
    addNode(value) {
        // Create a new node
        const node = new Node(value, null, null)

        // If no nodes are present, point head to current node
        if (!this.head) {
            this.head = node
            this.tail = node
        }
        // If nodes are already present, loop till current.next == null and then add node as next. Point tail to the new node
        else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
            node.prev = current
            this.tail = node
        }

        this.size = this.size + 1
    }

    // Add node at start (Make the node the head).
    addNodeAtStart(value) {
        const node = new Node(value, null, null)
        if (this.head) {
            node.next = this.head
            this.head.prev = node
            this.head = node

            this.size = this.size + 1
        } else {
            this.head = node
            this.tail = node
            this.size = this.size + 1
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
            this.addNodeAtStart(value)
        }
        // If linked list is not empty
        else {
            // Position index
            let i = 1

            // Index to prev element
            let prev = this.head

            // If only one element is present (head)
            if (prev.next == null) {
                const node = new Node(value, this.head, null)
                this.head.next = node
                this.tail = node
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
                node.prev = prev
                prev.next = node
                this.tail = node
                this.size = this.size + 1
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
                node.prev = prev
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

                // If head is the only element
                if (this.head.next == null) {
                    this.tail = null
                    this.head = null
                    this.size = this.size - 1
                    return
                }

                this.head = prev.next
                this.head.prev = null
                prev.next = null

                this.size = this.size - 1
                return
            }

            // Loop through the list to find the required element
            while (prev.next && prev.next.value != value) {
                prev = prev.next
            }

            // If pointer is null, there was no node with given value
            if (prev.next == null) {
                console.log(`Node with value ${value} not present.`)
            }
            // Required node is node after the pointer.
            else {
                let current = prev?.next
                // Linking previous node to next of required node. 
                prev.next = current?.next
                if (prev?.next == null) {
                    this.tail = prev
                }
                if (current?.next) {
                    current.next.prev = prev
                }

                // Decrement size of list
                this.size = this.size - 1
            }
        }
        else {
            console.log("No nodes present.")
        }
    }

    // Delete Head.
    removeHead() {
        if (this.head == null && this.size == 0) {
            console.log("Linked List is Empty.")
            return
        }

        // If more than 1 element exists
        if (this.size > 1) {
            this.head.next.prev = null
            this.head = this.head.next
            this.size = this.size - 1
        }
        // If only 1 element present (both head & tail is the same element.)
        else {
            this.head = null
            this.tail = null
            this.size = this.size - 1
        }
    }

    // To reverse the linked list
    reverse() {
        // Pointer to previous node
        var prevNode = null;
        // Pointer to current node
        var currentNode = this.head;
        // Pointer to next node
        var nextNode = null;
        this.tail = currentNode

        while (currentNode != null) {
            // Get next node
            nextNode = currentNode.next;
            // Make the next pointer point to the previous node
            currentNode.next = prevNode;
            currentNode.prev = nextNode
            // Add current node as prev
            prevNode = currentNode;
            // Add next node as current
            currentNode = nextNode;
        }
        // Change the head pointer to prev (current will be null)
        this.head = prevNode;
        return
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

    // Traverse through the linked list to display all values.
    traverseReverse() {
        // If nodes are present
        if (this.size != 0 && this.tail != null) {
            console.log("\nValues in linked list are:")
            // Loop through the list to display values
            let current = this.tail
            while (current) {
                console.log(current.value)
                current = current.prev
            }
        }
        // If no nodes are present.
        else {
            console.log("List is empty")
        }
    }

    // Get the size of the list
    getSize() {
        return this.size
    }

    // Get the tail of the list
    getTail() {
        return this.tail
    }

    // Get the head of the list
    getHead() {
        return this.head
    }
}

function testDoublyLinkedList() {
    // Initializing LinkedList
    const list = new LinkedList();

    console.log("Adding nodes to the list");
    list.addNode(1);
    list.addNode(2);
    list.addNode(3);
    list.traverse(); // Should print 1, 2, 3

    console.log("\nAdding node at the start");
    list.addNodeAtStart(0);
    list.traverse(); // Should print 0, 1, 2, 3

    console.log("\nInserting node at position 2");
    list.insertAtPosition(1.5, 2);
    list.traverse(); // Should print 0, 1.5, 1, 2, 3

    console.log("\nRemoving node with value 1.5");
    list.removeNode(1.5);
    list.traverse(); // Should print 0, 1, 2, 3

    console.log("\nRemoving head node");
    list.removeHead();
    list.traverse(); // Should print 1, 2, 3

    console.log("\nAttempting to remove a node that doesn't exist");
    list.removeNode(10); // Should print "Node with value 10 not present."
    list.traverse(); // Should print 1, 2, 3

    console.log("\nRemoving all nodes one by one");
    list.removeHead();
    list.removeHead();
    list.removeHead();
    list.traverse(); // Should print "List is empty"

    console.log("\nTrying to remove head from an empty list");
    list.removeHead(); // Should print "Linked List is Empty."

    console.log("Head : ", list.getHead())
    console.log("Tail : ", list.getTail())

    // Adding nodes again to test reverse traversal
    console.log("\nAdding nodes to the list for reverse traversal");
    list.addNode(1);
    list.addNode(2);
    list.addNode(3);

    list.traverseReverse()

    // Reverse the list
    list.reverse()
    list.traverse(); // Should print 3, 2, 1
}

testDoublyLinkedList();

