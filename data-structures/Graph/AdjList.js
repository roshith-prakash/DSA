class Graph {
  constructor() {
    this.adjList = new Map(); // or use plain object {}
  }

  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);
    this.adjList.get(v1).push(v2);
    this.adjList.get(v2).push(v1); // remove if directed
  }

  printGraph() {
    for (let [vertex, neighbors] of this.adjList.entries()) {
      console.log(`${vertex} -> ${neighbors.join(", ")}`);
    }
  }
}

// Example
const g = new Graph();
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.printGraph();
