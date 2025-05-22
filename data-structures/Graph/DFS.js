// Depth-First Search (DFS)

// Approach:
//      Explores as far as possible along one branch before backtracking.
//      Uses a stack data structure (LIFO), often implemented via recursion.

// Steps:
// 1. Start at the source node.
// 2. Explore a neighbor, then a neighbor's neighbor, etc.
// 3. Backtrack when dead end is reached.

const dfs = (graph, node, visited = new Set()) => {
  if (!visited.has(node)) {
    console.log(node);
    visited.add(node);
    for (const neighbor of graph[node]) {
      dfs(graph, neighbor, visited);
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
dfs(graph, "A");
