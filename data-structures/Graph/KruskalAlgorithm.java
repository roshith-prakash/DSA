import java.util.ArrayList;
import java.util.Collections;

// Represents an edge in the graph
class Edge implements Comparable<Edge> {
    int source;
    int destination;
    int weight;

    public Edge(int source, int destination, int weight) {
        this.source = source;
        this.destination = destination;
        this.weight = weight;
    }

    // Sort edges in ascending order of weight
    @Override
    public int compareTo(Edge e) {
        return this.weight - e.weight;
    }
}

public class KruskalAlgorithm {

    // Stores all the edges of the graph
    static ArrayList<Edge> edges = new ArrayList<>();

    // Parent array for the Disjoint Set (Union-Find)
    static int[] parent = new int[7];

    // Creates the weighted undirected graph
    static void createGraph() {

        // Edge 3 <-> 5
        edges.add(new Edge(3, 5, 1));
        edges.add(new Edge(5, 3, 1));

        // Edge 3 <-> 4
        edges.add(new Edge(3, 4, 2));
        edges.add(new Edge(4, 3, 2));

        // Edge 4 <-> 5
        edges.add(new Edge(4, 5, 5));
        edges.add(new Edge(5, 4, 5));

        // Edge 5 <-> 6
        edges.add(new Edge(5, 6, 8));
        edges.add(new Edge(6, 5, 8));

        // Edge 0 <-> 1
        edges.add(new Edge(0, 1, 10));
        edges.add(new Edge(1, 0, 10));

        // Edge 2 <-> 4
        edges.add(new Edge(2, 4, 10));
        edges.add(new Edge(4, 2, 10));

        // Edge 1 <-> 3
        edges.add(new Edge(1, 3, 12));
        edges.add(new Edge(3, 1, 12));

        // Edge 0 <-> 2
        edges.add(new Edge(0, 2, 15));
        edges.add(new Edge(2, 0, 15));
    }

    // Initially, every vertex is its own parent
    static void initialize() {
        for (int i = 0; i < parent.length; i++) {
            parent[i] = i;
        }
    }

    // Finds the representative (parent) of a set
    static int find(int x) {

        // If the vertex is its own parent, it is the representative of the set
        if (parent[x] == x) {
            return x;
        }

        // Continue searching until the representative is found
        return find(parent[x]);
    }

    // Merges two different sets
    static void union(int a, int b) {

        // Find representatives of both sets
        int parentA = find(a);
        int parentB = find(b);

        // Merge the two sets
        parent[parentB] = parentA;
    }

    static void kruskal() {

        // Initialize the Disjoint Set
        initialize();

        // Sort all edges by increasing weight
        Collections.sort(edges);

        // Stores the total cost of the MST
        int mstCost = 0;

        // Traverse all edges in sorted order
        for (Edge e : edges) {

            // Find the representative of both vertices
            int parentSource = find(e.source);
            int parentDestination = find(e.destination);

            // If both vertices belong to different sets,
            // adding this edge will not create a cycle
            if (parentSource != parentDestination) {

                // Merge the two sets
                union(parentSource, parentDestination);

                // Add the edge weight to the MST cost
                mstCost += e.weight;

                // Print the selected edge
                System.out.println(
                        e.source + " -> " +
                        e.destination +
                        " Weight = " +
                        e.weight);
            }
        }

        // Print the total cost of the MST
        System.out.println("Total MST Cost = " + mstCost);
    }

    public static void main(String[] args) {

        // Create the graph
        createGraph();

        // Find the Minimum Spanning Tree
        kruskal();
    }
}