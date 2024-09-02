// Given a linked list, reverse the elements in groups of 'k'
// Eg: 1 2 3 4 5 6 & k = 2
// Output : 2 1 4 3 6 5


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


    // Recursive Method
    // reverse(node, groupCount) {

    //     if (node == null) {
    //         return
    //     }

    //     let next = null
    //     let prev = null
    //     let current = node
    //     let count = 0

    // //  Perform reversal
    //     while (current != null && count < groupCount) {
    //         next = current?.next
    //         current.next = prev
    //         prev = current
    //         current = next
    //         count++
    //     }

    //  // If next element exists (current) then call function recursively to get the element to be linked
    //     if (current != null) {
    //         node.next = this.reverse(current, groupCount)
    //     }

    // // Prev points to new head element. Change pointer to prev.
    //     this.head = prev
    //     return prev
    // }

    // Iterative method
    reverse(node, groupCount) {

        // If head is null, return from function
        if (node == null) {
            return
        }

        // To decide new head at end of first loop break
        let newHead = null
        let current = node
        // To maintain a pointer to the end of the last group after reversal
        let prevGroupEnd = null;


        // While current is not null (all nodes havent been looped through)
        while (current != null) {

            // Count for k elements
            let count = 0
            let next = null
            let prev = null
            // Start of the current group
            let groupStart = current

            // Perform reversal
            while (current != null && count < groupCount) {
                next = current?.next
                current.next = prev
                prev = current
                current = next
                count++
            }

            // If first iteration, store the newHead in a variable
            if (newHead == null) {
                newHead = prev
            }

            // If not the first iteration, link the previous group to this group
            if (prevGroupEnd != null) {
                prevGroupEnd.next = prev
            }

            // Store the last element in the group ( first initially ) to link to the next group
            prevGroupEnd = groupStart
        }

        // Change pointer to new head
        this.head = newHead
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
                current = current?.next
            }
        }
        // If no nodes are present.
        else {
            console.log("List is empty")
        }
    }

    // Get the head of the list
    getHead() {
        return this.head
    }
}

const list = new LinkedList();

console.log("Adding nodes to the list:");

list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);
list.addNode(6);
list.addNode(7);

list.traverse()


list.reverse(list.head, 3)
list.traverse()