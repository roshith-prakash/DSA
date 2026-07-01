import java.util.ArrayList;
import java.util.PriorityQueue;

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

    // Sort edges by weight (ascending)
    @Override
    public int compareTo(Edge e) {
        return this.weight - e.weight;
    }
}

public class PrimsAlgorithm {

    // Creates the weighted undirected graph
    static void createGraph(ArrayList<Edge>[] graph) {

        // Initialize each adjacency list
        for (int i = 0; i < graph.length; i++) {
            graph[i] = new ArrayList<>();
        }

        // Add edges in both directions because the graph is undirected

        graph[0].add(new Edge(0, 1, 10));
        graph[0].add(new Edge(0, 2, 15));

        graph[1].add(new Edge(1, 0, 10));
        graph[1].add(new Edge(1, 3, 12));

        graph[2].add(new Edge(2, 0, 15));
        graph[2].add(new Edge(2, 4, 10));

        graph[3].add(new Edge(3, 1, 12));
        graph[3].add(new Edge(3, 4, 2));
        graph[3].add(new Edge(3, 5, 1));

        graph[4].add(new Edge(4, 2, 10));
        graph[4].add(new Edge(4, 3, 2));
        graph[4].add(new Edge(4, 5, 5));

        graph[5].add(new Edge(5, 3, 1));
        graph[5].add(new Edge(5, 4, 5));
        graph[5].add(new Edge(5, 6, 8));

        graph[6].add(new Edge(6, 5, 8));
    }

    static void prims(ArrayList<Edge>[] graph) {

        // Keeps track of vertices already included in the MST
        boolean[] visited = new boolean[graph.length];

        // Min Heap to always get the minimum weight edge
        PriorityQueue<Edge> pq = new PriorityQueue<>();

        // Start from vertex 0
        // Source is -1 because it has no parent
        pq.add(new Edge(-1, 0, 0));

        // Stores the total weight of the MST
        int mstCost = 0;

        // Continue until there are no more edges to process
        while (!pq.isEmpty()) {

            // Remove the minimum weight edge
            Edge current = pq.remove();

            // Skip if the destination vertex is already in the MST
            if (visited[current.destination]) {
                continue;
            }

            // Include this vertex in the MST
            visited[current.destination] = true;

            // Add the edge's weight to the total cost
            mstCost += current.weight;

            // Print the selected edge
            System.out.println(
                current.source + " -> " +
                current.destination +
                " Weight = " +
                current.weight
            );

            // Explore all neighbouring edges
            for (Edge e : graph[current.destination]) {

                // Add only those edges whose destination
                // has not yet been included in the MST
                if (!visited[e.destination]) {
                    pq.add(e);
                }
            }
        }

        // Print the total weight of the MST
        System.out.println("Total MST Cost = " + mstCost);
    }

    public static void main(String[] args) {

        // Create adjacency list
        ArrayList<Edge>[] graph = new ArrayList[7];

        // Build the graph
        createGraph(graph);

        // Find the Minimum Spanning Tree
        prims(graph);
    }
}