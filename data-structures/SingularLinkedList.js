// Node to be used inside linked list.
class Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    addNode(value) {
        const node = new Node(value, null)

        if (!this.head) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }

        this.size = this.size + 1
    }

    traverse() {
        if (this.size != 0) {
            let current = this.head
            while (current) {
                console.log(current.value)
                current = current.next
            }
        } else {
            console.log("List is empty")
        }
    }
}


const list = new LinkedList()
list.addNode(10)
list.addNode(20)
list.addNode(30)
list.traverse()
