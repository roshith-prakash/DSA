// Interleave two halves of a queue.
// eg: [1,2,3,4,5,6,7,8] = [1,5,2,6,3,7,4,8]

// Using Extra Queue

// const interleaveQueue = (queue) => {
//     let eq = []
//     let count = Math.floor(queue.length / 2)

//     while (count) {
//         eq.push(queue.shift())
//         count--
//     }

//     while (eq.length) {
//         queue.push(eq.shift())
//         queue.push(queue.shift())
//     }

//     return queue
// }

// Using only stack as auxiliary space

const interleaveQueue = (queue) => {
    let stack = []
    let count = Math.floor(queue.length / 2)

    // Push first half to stack (reverses order)
    while (count) {
        stack.push(queue.shift())
        count--
    }

    // Push reversed first half to end of queue
    while (stack.length) {
        queue.push(stack.pop())
    }

    // Calculate half
    count = Math.floor(queue.length / 2)

    // Push 2nd half (now first) to back of queue
    while (count) {
        queue.push(queue.shift())
        count--
    }

    // Calculate half
    count = Math.floor(queue.length / 2)

    // Push first half to stack (returns order to normal)
    while (count) {
        stack.push(queue.shift())
        count--
    }

    // While stack is non empty
    while (stack.length) {
        // Push top of stack to back of queue
        queue.push(stack.pop())
        // Push from of queue to back of queue
        queue.push(queue.shift())
    }

    return queue
}

console.log(interleaveQueue([1, 2, 3, 4, 5, 6, 7, 8]))