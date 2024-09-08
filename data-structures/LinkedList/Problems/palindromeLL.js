// Check if a LL is a palindrome.
// To solve : 
// 1. Find middle of LL using fast & slow pointers method
// 2. Reverse the second half of the LL
// 3. Check while both are not null, if the values match.

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

    findMiddle() {
        // Create two pointers - slow will reach middle element when fast reaches final element
        let slow = this.head
        let fast = this.head.next

        // Make sure fast reaches last element
        while (fast != null && fast?.next != null) {
            // Move slow pointer one pace
            slow = slow?.next
            // Move fast pointer two paces
            fast = fast?.next?.next
        }

        return slow
    }

    reverse(node) {
        // Pointer to previous node
        var prev = null;
        // Pointer to current node
        var current = node;
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

        return prev
    }

    isPalindrome() {
        if (this.head?.next == null) {
            return true
        }

        let middleElement = list.findMiddle()
        middleElement.next = list.reverse(middleElement.next)

        let head1 = this.head
        let head2 = middleElement.next

        while (head2 != null) {
            if (head1.value != head2.value) {
                return false
            }

            head1 = head1?.next
            head2 = head2?.next
        }

        middleElement.next = list.reverse(middleElement.next)
        return true
    }

    // Get the head of the list
    getHead() {
        return this.head
    }
}

const list = new LinkedList()
list.addNode(1);
list.addNode(2);
list.addNode(3)
list.addNode(2);
list.addNode(1);

list.traverse()
console.log(list.isPalindrome())
list.traverse()