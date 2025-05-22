// The Bellman-Ford algorithm is used to find the shortest paths from a single source vertex to all other vertices in a weighted graph. .
// Unlike Dijkstra's algorithm, it can handle negative weight edges and also detects negative weight cycles.

// 1. Initialize distances from the source to all vertices as infinity (Infinity), except the source itself which is 0.
// 2. Relax all edges (V - 1) times:
//      For each edge (u, v) with weight w, if dist[u] + w < dist[v], update dist[v].
// 3. After the loop, check for negative-weight cycles by trying one more relaxation. If any update happens, a negative cycle exists.

// Time Complexity : O(V × E)

const bellmanFord = (graph, source) => {
  const vertices = Object.keys(graph);

  // Initialize distances
  const dist = {};
  for (const v of vertices) {
    dist[v] = Infinity;
  }
  dist[source] = 0;

  // Build edge list from graph
  const edges = [];
  for (const u of vertices) {
    for (const v in graph[u]) {
      edges.push({ from: u, to: v, weight: graph[u][v] });
    }
  }

  // Relax edges V-1 times
  for (let i = 1; i < vertices.length; i++) {
    for (const edge of edges) {
      const { from, to, weight } = edge;
      console.log(from, to, weight);
      if (dist[from] !== Infinity && dist[from] + weight < dist[to]) {
        dist[to] = dist[from] + weight;
        console.log("Updating distance...");
      }
    }
  }

  // Check for negative weight cycles
  for (const edge of edges) {
    const { from, to, weight } = edge;
    if (dist[from] !== Infinity && dist[from] + weight < dist[to]) {
      console.log("Graph contains a negative weight cycle");
      return null;
    }
  }

  return dist;
};

// Example usage:
const graph = {
  A: { B: 6, D: 7 },
  B: { C: 5, D: 8, E: -4 },
  C: { B: -2 },
  D: { C: -3, E: 9 },
  E: { A: 2, C: 7 },
  F: {}, // Disconnected Node
};

const source = "A";
const distances = bellmanFord(graph, source);

if (distances) {
  console.log("\nShortest distances from source", source);
  for (const vertex in distances) {
    console.log(`${vertex} -> ${distances[vertex]}`);
  }
}
