// Node to be used inside linked list.
class Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

// The class to create the circular linked list. Last element of the list points at the head.
class CircularLinkedList {
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
            node.next = this.head
        }
        // If nodes are already present, loop till current.next == null and then add node as next.
        else {
            let current = this.head
            // When atleast 2 nodes are present
            if (this.size >= 1) {
                // Loop through array to find the 2nd last element.
                while (current.next != this.head) {
                    current = current.next
                }
                // Add element to the end
                current.next = node
                // Point to head
                node.next = this.head
            }
            else {
                // Point head.next to node & node.next to head
                this.head.next = node
                node.next = this.head
            }

        }

        this.size = this.size + 1
    }

    // Add node at start (Make the node the head).
    addNodeAtStart(value) {
        // Initialize new node with head as next   
        const node = new Node(value, this.head)

        if (this.head != null) {
            // Get the head
            let current = this.head

            // Go to the last element in the list
            while (current.next != this.head) {
                current = current.next
            }

            // Make the new node the head
            this.head = node
            // Make the last element point to the node (new head)
            current.next = node

            // Increase size of the list
            this.size = this.size + 1

        }
        // If head is not present.
        else {
            // Initialize head
            this.head = node
            // Make node point to itself
            node.next = this.head
            // Increase size of the list
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
            if (prev.next == this.head) {
                // Create new node, point it to head
                const node = new Node(value, this.head)
                // Point head to new node
                this.head.next = node
                // Increase size
                this.size = this.size + 1
            }

            // While position not reached or next element is not the head, increment the position index & go to next node
            while (i < position - 1 && prev.next != this.head) {
                prev = prev?.next
                i++
            }

            // Position is after the last element.
            if (prev.next == this.head && i == position - 1) {
                const node = new Node(value, this.head)
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
                let current = this.head

                // Loop through the array to find the last element.
                while (current.next != this.head) {
                    current = current.next
                }

                // Pointing last element to the new head
                current.next = this.head.next
                // Setting new head
                this.head = prev.next
                // Removing the link to the list.
                prev.next = null
                // Decreasing the size
                this.size = this.size - 1
                return
            }

            // Loop through the list to find the required element
            while (prev.next.value != value && prev.next != this.head) {
                prev = prev.next
            }

            // If pointer.next points to head, there was no node with given value
            if (prev.next == this.head) {
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
    removeHead() {
        if (this.head == null || this.size == 0) {
            console.log("Linked List is Empty.")
            return
        }

        let current = this.head

        if (current.next == this.head) {
            this.head = null
            return
        }

        let prev = this.head

        // Loop through the array to find the last element.
        while (current.next != this.head) {
            current = current.next
        }



        // Pointing last element to the new head
        current.next = this.head.next
        // Setting new head
        this.head = this.head.next
        // Removing the link to the list.
        prev.next = null
        // Decreasing the size
        this.size = this.size - 1
        return
    }

    // To reverse the linked list
    reverse() {
        // Pointer to previous node
        var prev = null;
        // Pointer to current node
        var current = this.head;
        // Pointer to next node
        var next = null;
        while (current != null) {
            // Get next node
            next = current.next;
            // Make the next pointer point to the previous node
            current.next = prev;
            // Add current node as prev
            prev = current;
            // Add next node as current
            current = next;
        }
        // Change the head pointer to prev (current will be null)
        this.head = prev;
        return
    }

    // Traverse through the linked list to display all values.
    traverse() {
        // If nodes are present
        if (this.size != 0 && this.head != null) {
            console.log("\nValues in linked list are:")

            // Log the head and start the loop from the next value
            console.log(this.head)
            let current = this.head.next

            // Loop through the list to display Node (to show list is circular)
            while (current != this.head && current != null) {
                console.log(current)
                current = current.next
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

    // Get the head of the list
    getHead() {
        return this.head
    }
}


function testCircularLinkedList() {
    // Initializing CircularLinkedList
    const list = new CircularLinkedList();

    console.log("Adding nodes to the list");
    list.addNode(1);
    list.addNode(2);
    list.addNode(3);
    list.traverse(); // Should print 1, 2, 3 with circular references

    console.log("\nAdding node at the start");
    list.addNodeAtStart(0);
    list.traverse(); // Should print 0, 1, 2, 3 with circular references

    console.log("\nInserting node at position 2");
    list.insertAtPosition(1.5, 2);
    list.traverse(); // Should print 0, 1.5, 1, 2, 3 with circular references

    console.log("\nRemoving node with value 1.5");
    list.removeNode(1.5);
    list.traverse(); // Should print 0, 1, 2, 3 with circular references

    console.log("\nRemoving head node");
    list.removeHead();
    list.traverse(); // Should print 1, 2, 3 with circular references

    console.log("\nAttempting to remove a node that doesn't exist");
    list.removeNode(10); // Should print "Node with value 10 not present."
    list.traverse(); // Should print 1, 2, 3 with circular references

    console.log("\nRemoving all nodes one by one");
    list.removeHead();
    list.removeHead();
    list.removeHead();
    list.traverse(); // Should print "List is empty"

    console.log("\nTrying to remove head from an empty list");
    list.removeHead(); // Should print "Linked List is Empty."

    list.addNode(1);
    list.addNode(2);
    list.addNode(3);
    list.reverse()
    list.traverse(); // Should print 1,3,2 (not changing the head)
}

testCircularLinkedList();
