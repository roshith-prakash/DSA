// Dijkstra's Algorithm is a shortest path algorithm used in graph theory
// to find the minimum distance from a source node to all other nodes
// in a weighted graph (with non-negative weights).

// 1. Set the source node distance to 0, others to Infinity.
// 2. Push the source into a priority queue.
// 3. While the queue is not empty:
//    - Pop the node with the smallest known distance.
//    - Update its neighbors if a shorter path is found.
// 4. Repeat until all shortest paths are known.

// Time Complexity: O(V log V)

// PriorityQueue class using a simple array and sorting for priority handling
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  // Adds a node to the queue with a priority (distance)
  enqueue(node, priority) {
    this.queue.push({ node, priority });
    this.queue.sort((a, b) => a.priority - b.priority); // sort by priority (smallest first)
  }

  // Removes and returns the node with the smallest priority
  dequeue() {
    return this.queue.shift();
  }

  // Checks if the queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }
}

// Dijkstra's algorithm function
const dijkstraAlgorithm = (graph, start) => {
  const distances = {}; // Stores the shortest distances from start to each node
  const prev = {}; // Stores the previous node in the shortest path
  const pq = new PriorityQueue(); // Priority queue to manage the exploration order

  // Initialize distances and previous for all nodes
  for (let node in graph) {
    distances[node] = Infinity; // Initially, all nodes are at "infinite" distance
    prev[node] = null; // No previous node yet
  }

  distances[start] = 0; // Distance to the start node is 0
  pq.enqueue(start, 0); // Add the start node to the queue with priority 0

  // Main loop: continues until all reachable nodes are processed
  while (!pq.isEmpty()) {
    const { node: currentNode } = pq.dequeue(); // Get the node with the smallest distance

    // Explore each neighbor of the current node
    for (let neighbor in graph[currentNode]) {
      let distance = graph[currentNode][neighbor]; // Distance to neighbor
      let newDist = distances[currentNode] + distance; // New total distance to neighbor

      console.log("Current\tNeighbour\tFrom Current\tFrom Source");
      console.log(`${currentNode}\t${neighbor}\t\t${distance}\t\t${newDist}\n`);

      // If new distance is shorter, update it
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist; // Update shortest distance
        prev[neighbor] = currentNode; // Track the path
        pq.enqueue(neighbor, newDist); // Add neighbor to queue for further exploration

        console.log("Updated distance...");
        console.log("Distances : ", distances);
        console.log("Previous : ", prev, "\n");
        console.log("\n------------------------------------\n");
      }
    }
  }

  return { distances, previous: prev }; // Return the shortest distances and path tree
};

// Sample graph represented as an adjacency list with weights
const graph = {
  A: { B: 2, C: 5 },
  B: { A: 2, C: 6, D: 1 },
  C: { A: 5, B: 6, E: 2 },
  D: { B: 1, E: 1, F: 4 },
  E: { C: 2, D: 1, F: 3 },
  F: { D: 4, E: 3 },
};

// Run the algorithm from node 'A'
const result = dijkstraAlgorithm(graph, "A");

// Output the result
console.log(result);

// Expected Output:
// {
//   distances: { A: 0, B: 1, C: 3, D: 4 },
//   previous: { A: null, B: 'A', C: 'B', D: 'C' }
// }
