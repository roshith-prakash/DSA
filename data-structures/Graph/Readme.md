# 📘 Graphs in Data Structures

A **Graph** is a non-linear data structure consisting of **nodes (vertices)** and **edges** that connect pairs of nodes.

---

## 🔹 **Graph Types**

1. **Directed Graph (Digraph)**: Edges have direction (`A → B`)
2. **Undirected Graph**: Edges are bidirectional (`A — B`)
3. **Weighted Graph**: Edges carry weights (costs, distances)
4. **Unweighted Graph**: Edges have no weight
5. **Cyclic Graph**: Contains at least one cycle
6. **Acyclic Graph**: No cycles (e.g., DAG – Directed Acyclic Graph)
7. **Connected Graph**: Every vertex is reachable from any other
8. **Disconnected Graph**: At least one vertex is unreachable from others

---

## 🔹 **Graph Representations**

### ✅ **Adjacency List** (Efficient for Sparse Graphs)

- Stores a list of neighbors for each vertex.
- Space: `O(V + E)`
- Fast traversal and space-efficient for sparse graphs.

```js
{
  A: [B, C],
  B: [A, D],
  C: [A],
  D: [B]
}
```

### ✅ **Adjacency Matrix** (Efficient for Dense Graphs)

- 2D matrix: `matrix[V][V] = 1` if edge exists, else `0`.
- Space: `O(V²)`
- Fast edge lookup: `O(1)`

```
   A B C D
A [0 1 1 0]
B [1 0 0 1]
C [1 0 0 0]
D [0 1 0 0]
```

---

## 🔹 **Graph Traversal Algorithms**

### 🔁 **Breadth-First Search (BFS)**

- Uses Queue (FIFO)
- Explores level-by-level
- Best for shortest path (unweighted graphs)

### 🔁 **Depth-First Search (DFS)**

- Uses Stack (implicit via recursion)
- Explores as deep as possible
- Good for pathfinding, cycle detection

---

## 🔹 **Graph Components**

- **Vertices (Nodes)**: Represented as `V`
- **Edges**: Connections between nodes, represented as `E`
- **Degree**: Number of edges connected to a node

---

## 🔹 **Common Graph Concepts**

- **Cycle Detection** (DFS, Union-Find)
- **Topological Sort** (Only for DAGs)
- **Connected Components** (DFS/BFS)
- **Minimum Spanning Tree** (Prim’s, Kruskal’s)
- **Shortest Path**:

  - **Dijkstra’s** (non-negative weights)
  - **Bellman-Ford** (handles negative weights)
  - **Floyd-Warshall** (all pairs)
  - **A**\* (heuristic-based)

---

## 🔹 **Use Cases of Graphs**

- Social Networks
- Web Crawling (pages and links)
- Routing and Navigation (Google Maps)
- Network Packet Routing
- Recommendation Engines
- Scheduling and Dependency Resolution (build systems, compilers)
