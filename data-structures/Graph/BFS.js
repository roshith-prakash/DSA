// Breadth-First Search (BFS)

// Approach:
//      Explores neighbors level by level.
//      Uses a queue data structure (FIFO).

// Steps:
// 1. Start from a source node.
// 2. Visit all its neighbors.
// 3. Then visit neighbors of those neighbors, and so on.

const bfs = (graph, start) => {
  const visited = new Set();
  const queue = [start];

  while (queue.length > 0) {
    const node = queue.shift(); // dequeue
    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor); // enqueue
        }
      }
    }
  }
};

const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: [],
};

// Usage
bfs(graph, "A");
