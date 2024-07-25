// Node to be used inside linked list.
class Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

const n3 = new Node(3, null)
const n2 = new Node(3, n3)
const n1 = new Node(1, n2)