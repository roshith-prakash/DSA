// Kruskal's Algorithm is a greedy algorithm used to find the Minimum Spanning Tree (MST) of a connected, undirected, and weighted graph.

// A Minimum Spanning Tree is a subset of the edges that connects all vertices in the graph with the minimum total edge weight, and without forming any cycles.

// Disjoint Set (Union-Find) class with path compression and union by rank
class DisjointSet {
  constructor(n) {
    // Initially, each vertex is its own parent (self-loop), forming n disjoint sets
    this.parent = Array.from({ length: n }, (_, i) => i);
    // Rank is used to keep the tree shallow (optimization)
    this.rank = new Array(n).fill(0);
  }

  // Find the root of the set that element 'u' belongs to
  find(u) {
    if (this.parent[u] !== u) {
      // Path compression: flatten the tree as we go up
      this.parent[u] = this.find(this.parent[u]);
    }
    return this.parent[u];
  }

  // Union two sets if they are not already connected
  union(u, v) {
    const rootU = this.find(u);
    const rootV = this.find(v);

    // If both vertices belong to the same set, adding this edge would create a cycle
    if (rootU === rootV) return false;

    // Union by rank: attach the smaller tree to the root of the larger one
    if (this.rank[rootU] < this.rank[rootV]) {
      this.parent[rootU] = rootV;
    } else if (this.rank[rootU] > this.rank[rootV]) {
      this.parent[rootV] = rootU;
    } else {
      this.parent[rootV] = rootU;
      this.rank[rootU]++; // Increase rank if both trees have same height
    }

    return true; // Union was successful
  }
}

// Main function to apply Kruskal's Algorithm
const kruskalAlgorithm = (verticesCount, edges) => {
  // Step 1: Sort edges by their weights in non-decreasing order
  edges.sort((a, b) => a[2] - b[2]);

  const ds = new DisjointSet(verticesCount); // Create disjoint sets for all vertices
  const mst = []; // To store edges of the Minimum Spanning Tree

  // Step 2: Loop through sorted edges and pick valid ones
  for (const [u, v, weight] of edges) {
    // If including this edge doesn't form a cycle
    if (ds.union(u, v)) {
      mst.push([u, v, weight]); // Add it to MST
    }

    // Optimization: If MST has (V - 1) edges, it's complete
    if (mst.length === verticesCount - 1) break;
  }

  return mst; // Return the final MST
};

// Number of vertices in graph
const vertices = 7;

// Vertex1 , Vertex2, Weight
const edges = [
  [0, 1, 7],
  [0, 3, 5],
  [1, 2, 8],
  [1, 3, 9],
  [1, 4, 7],
  [2, 4, 5],
  [3, 4, 15],
  [3, 5, 6],
  [4, 5, 8],
  [4, 6, 9],
  [5, 6, 11],
];

const mst = kruskalAlgorithm(vertices, edges);

console.log("Minimum Spanning Tree:");
mst.forEach(([u, v, w]) => console.log(`Edge ${u}-${v} with weight ${w}`));
