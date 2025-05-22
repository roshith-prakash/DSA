// Kruskal's Algorithm is a greedy algorithm used to find the Minimum Spanning Tree (MST) of a connected, undirected, and weighted graph.

// A Minimum Spanning Tree is a subset of the edges that connects all vertices in the graph with the minimum total edge weight, and without forming any cycles.

// Time Complexity : O(E log E)

// Disjoint Set (Union-Find) class with path compression and union by rank
class DisjointSet {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }

  find(u) {
    if (this.parent[u] !== u) {
      this.parent[u] = this.find(this.parent[u]);
    }
    return this.parent[u];
  }

  union(u, v) {
    const rootU = this.find(u);
    const rootV = this.find(v);

    if (rootU === rootV) return false;

    if (this.rank[rootU] < this.rank[rootV]) {
      this.parent[rootU] = rootV;
    } else if (this.rank[rootU] > this.rank[rootV]) {
      this.parent[rootV] = rootU;
    } else {
      this.parent[rootV] = rootU;
      this.rank[rootU]++;
    }
    return true;
  }
}

const kruskalAlgorithm = (verticesCount, edges, nodeMap) => {
  edges.sort((a, b) => a[2] - b[2]);

  const ds = new DisjointSet(verticesCount);
  const mst = [];

  for (const [u, v, weight] of edges) {
    if (ds.union(u, v)) {
      mst.push([u, v, weight]);
    }
    if (mst.length === verticesCount - 1) break;
  }

  // Map back to original labels
  const reverseMap = Object.entries(nodeMap).reduce((acc, [key, val]) => {
    acc[val] = key;
    return acc;
  }, {});

  return mst.map(([u, v, w]) => [reverseMap[u], reverseMap[v], w]);
};

// Input graph (adjacency list)
const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 },
};

// Step 1: Map node labels to indices
const nodes = Object.keys(graph);
const nodeMap = nodes.reduce((acc, node, i) => {
  acc[node] = i;
  return acc;
}, {});

// Step 2: Convert adjacency list to edge list (avoid duplicates)
const edges = [];
const visited = new Set();

for (const u of nodes) {
  for (const v in graph[u]) {
    const edgeKey = [u, v].sort().join("-"); // sort to avoid duplicates
    if (!visited.has(edgeKey)) {
      visited.add(edgeKey);
      edges.push([nodeMap[u], nodeMap[v], graph[u][v]]);
    }
  }
}

// Step 3: Run Kruskal's algorithm
const mst = kruskalAlgorithm(nodes.length, edges, nodeMap);

// Step 4: Output MST
console.log("Minimum Spanning Tree:");
mst.forEach(([u, v, w]) => console.log(`Edge ${u} - ${v} with weight ${w}`));
