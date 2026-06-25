import java.util.ArrayList;
import java.util.Stack;

class Edge {
    int source;
    int destination;

    public Edge(int source, int destination) {
        this.source = source;
        this.destination = destination;
    }
}

public class TopologicalSortDFS {

    static void createGraph(ArrayList<Edge>[] graph) {

        // 5 → 0 ← 4
        // ↓       ↓
        // 2 → 3 → 1

        for (int i = 0; i < graph.length; i++) {
            graph[i] = new ArrayList<>();
        }

        graph[5].add(new Edge(5, 0));
        graph[5].add(new Edge(5, 2));

        graph[4].add(new Edge(4, 0));
        graph[4].add(new Edge(4, 1));

        graph[2].add(new Edge(2, 3));

        graph[3].add(new Edge(3, 1));
    }

    static void dfs(
            ArrayList<Edge>[] graph,
            int current,
            boolean[] visited,
            Stack<Integer> stack) {

        // Mark current node as visited
        visited[current] = true;

        // Visit all neighbours
        for (Edge e : graph[current]) {

            if (!visited[e.destination]) {
                dfs(graph, e.destination, visited, stack);
            }
        }

        // Add node AFTER all neighbours are processed
        stack.push(current);
    }

    static void topologicalSort(ArrayList<Edge>[] graph) {

        boolean[] visited = new boolean[graph.length];
        Stack<Integer> stack = new Stack<>();

        // Handle disconnected components
        for (int i = 0; i < graph.length; i++) {

            if (!visited[i]) {
                dfs(graph, i, visited, stack);
            }
        }

        System.out.print("Topological Order: ");

        while (!stack.isEmpty()) {
            System.out.print(stack.pop() + " ");
        }
    }

    public static void main(String[] args) {

        ArrayList<Edge>[] graph = new ArrayList[6];

        createGraph(graph);

        topologicalSort(graph);
    }
}