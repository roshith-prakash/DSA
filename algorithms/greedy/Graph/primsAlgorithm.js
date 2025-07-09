// Prim's algorithm is a greedy algorithm used to find a Minimum Spanning Tree (MST) for a weighted, undirected graph.

// 1. Start with any vertex (arbitrary choice).
// 2. Mark this vertex as part of the MST.
// 3. Look at all edges connecting vertices in the MST to vertices outside the MST.
// 4. Select the edge with the smallest weight that connects the MST to a new vertex.
// 5. Add this new vertex and edge to the MST.
// 6. Repeat steps 3–5 until all vertices are included in the MST.

// Time complexity : O(E log E + V)

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(edge, priority) {
    this.values.push({ edge, priority });
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

  // Pick the first key as starting vertex
  const startVertex = Object.keys(graph)[0];
  visited.add(startVertex);

  // Add all edges from startVertex to the priority queue
  for (let neighbor in graph[startVertex]) {
    pq.enqueue(
      { from: startVertex, to: neighbor, weight: graph[startVertex][neighbor] },
      graph[startVertex][neighbor] //weight
    );
  }

  while (!pq.isEmpty()) {
    const { edge } = pq.dequeue();
    const { to } = edge;

    if (!visited.has(to)) {
      visited.add(to);
      MST.push(edge);

      // Add all edges from the new vertex
      for (let neighbor in graph[to]) {
        if (!visited.has(neighbor)) {
          pq.enqueue(
            { from: to, to: neighbor, weight: graph[to][neighbor] },
            graph[to][neighbor]
          );
        }
      }
    }
  }

  return MST;
}

// Example usage
const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 },
};

const mst = primMST(graph);

console.log("Minimum Spanning Tree edges:");
mst.forEach(({ from, to, weight }) => {
  console.log(`${from} - ${to} (weight: ${weight})`);
});
