class GraphMatrix {
  constructor(size) {
    this.size = size;
    this.vertices = Array.from({ length: size }, (_, i) => i);
    this.matrix = Array.from({ length: size }, () => Array(size).fill(0));
  }

  addEdge(v1, v2) {
    this.matrix[v1][v2] = 1;
    this.matrix[v2][v1] = 1; // remove if directed
  }

  printMatrix() {
    console.log("  ", this.vertices.join(" "));
    this.matrix.forEach((row, i) => {
      console.log(`${i}: ${row.join(" ")}`);
    });
  }
}

// Example
const g2 = new GraphMatrix(4);
g2.addEdge(0, 1);
g2.addEdge(0, 2);
g2.addEdge(1, 3);
g2.printMatrix();
