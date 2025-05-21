// Prim's algorithm is a greedy algorithm used to find a Minimum Spanning Tree (MST) for a weighted, undirected graph.

// 1. Start with any vertex (arbitrary choice).
// 2. Mark this vertex as part of the MST.
// 3. Look at all edges connecting vertices in the MST to vertices outside the MST.
// 4. Select the edge with the smallest weight that connects the MST to a new vertex.
// 5. Add this new vertex and edge to the MST.
// 6. Repeat steps 3–5 until all vertices are included in the MST.

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(element, priority) {
    this.values.push({ element, priority });
    this.values.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.values.shift();
  }

  isEmpty() {
    return this.values.length === 0;
  }
}

function primMST(graph) {
  const MST = [];
  const visited = new Set();
  const pq = new PriorityQueue();

  // Start from an arbitrary vertex — let's pick the first key from graph
  const startVertex = Object.keys(graph)[0];
  visited.add(startVertex);

  // Add all edges from the start vertex to the priority queue
  graph[startVertex].forEach(({ node, weight }) => {
    pq.enqueue({ from: startVertex, to: node, weight }, weight);
  });

  while (!pq.isEmpty()) {
    const { element: edge } = pq.dequeue();
    const { to } = edge;

    if (!visited.has(to)) {
      visited.add(to);
      MST.push(edge);

      // Add all edges from the newly added vertex to pq if target is unvisited
      graph[to].forEach(({ node, weight }) => {
        if (!visited.has(node)) {
          pq.enqueue({ from: to, to: node, weight }, weight);
        }
      });
    }
  }

  return MST;
}

// Example graph (adjacency list)
const graph = {
  A: [
    { node: "B", weight: 2 },
    { node: "C", weight: 3 },
    { node: "D", weight: 1 },
  ],
  B: [
    { node: "A", weight: 2 },
    { node: "D", weight: 4 },
    { node: "E", weight: 6 },
  ],
  C: [
    { node: "A", weight: 3 },
    { node: "F", weight: 7 },
  ],
  D: [
    { node: "A", weight: 1 },
    { node: "B", weight: 4 },
    { node: "F", weight: 5 },
    { node: "G", weight: 2 },
  ],
  E: [
    { node: "B", weight: 6 },
    { node: "G", weight: 1 },
  ],
  F: [
    { node: "C", weight: 7 },
    { node: "D", weight: 5 },
    { node: "G", weight: 8 },
  ],
  G: [
    { node: "D", weight: 2 },
    { node: "E", weight: 1 },
    { node: "F", weight: 8 },
  ],
};

// Run Prim's algorithm
const mst = primMST(graph);

console.log("Minimum Spanning Tree edges:");
mst.forEach(({ from, to, weight }) => {
  console.log(`${from} - ${to} (weight: ${weight})`);
});
