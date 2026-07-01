import java.util.ArrayList;

class Edge {
    int source;
    int destination;

    public Edge(int source, int destination) {
        this.source = source;
        this.destination = destination;
    }
}

public class BridgesInGraph {

    // Creates the graph
    static void createGraph(ArrayList<Edge>[] graph) {

        /*
                0
               / \
              1---2
                   \
                    3
                   / \
                  4---5

        Bridge: 2 - 3
        */

        // Initialize every adjacency list
        for (int i = 0; i < graph.length; i++) {
            graph[i] = new ArrayList<>();
        }

        // Since the graph is undirected,
        // every edge is added in both directions.

        graph[0].add(new Edge(0, 1));
        graph[1].add(new Edge(1, 0));

        graph[0].add(new Edge(0, 2));
        graph[2].add(new Edge(2, 0));

        graph[1].add(new Edge(1, 2));
        graph[2].add(new Edge(2, 1));

        graph[2].add(new Edge(2, 3));
        graph[3].add(new Edge(3, 2));

        graph[3].add(new Edge(3, 4));
        graph[4].add(new Edge(4, 3));

        graph[3].add(new Edge(3, 5));
        graph[5].add(new Edge(5, 3));

        graph[4].add(new Edge(4, 5));
        graph[5].add(new Edge(5, 4));
    }

    // Global timer used to assign discovery times
    static int time = 0;

    // DFS to find bridges
    static void dfs(ArrayList<Edge>[] graph, int curr, int parent,
                    boolean[] visited, int[] dt, int[] low) {

        // Mark current node as visited
        visited[curr] = true;

        // Set discovery time and lowest discovery time
        dt[curr] = low[curr] = ++time;

        // Visit all adjacent vertices
        for (Edge e : graph[curr]) {

            int neighbour = e.destination;

            // Ignore the edge leading back to the parent
            if (neighbour == parent) {
                continue;
            }

            // If neighbour is already visited,
            // it is a back edge
            if (visited[neighbour]) {

                // Update lowest reachable discovery time
                low[curr] = Math.min(low[curr], dt[neighbour]);
            }

            // If neighbour is not visited,
            // it is a tree edge
            else {

                // Perform DFS on the neighbour
                dfs(graph, neighbour, curr, visited, dt, low);

                // Update the lowest reachable discovery time
                low[curr] = Math.min(low[curr], low[neighbour]);

                // If neighbour cannot reach any ancestor of curr,
                // then curr-neighbour is a bridge
                if (low[neighbour] > dt[curr]) {
                    System.out.println(curr + " - " + neighbour + " is a bridge");
                }
            }
        }
    }

    // Finds all bridges in the graph
    static void findBridges(ArrayList<Edge>[] graph) {

        boolean[] visited = new boolean[graph.length];
        int[] dt = new int[graph.length];
        int[] low = new int[graph.length];

        // Reset timer
        time = 0;

        // Handle disconnected graphs
        for (int i = 0; i < graph.length; i++) {

            if (!visited[i]) {
                dfs(graph, i, -1, visited, dt, low);
            }
        }
    }

    public static void main(String[] args) {

        ArrayList<Edge>[] graph = new ArrayList[6];

        createGraph(graph);

        findBridges(graph);
    }
}