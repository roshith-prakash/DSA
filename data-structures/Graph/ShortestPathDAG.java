import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Stack;

class Edge {
    int source;
    int destination;
    int weight;

    Edge(int s, int d, int w) {
        source = s;
        destination = d;
        weight = w;
    }
}

public class ShortestPathDAG {

    static void createGraph(ArrayList<Edge>[] graph) {

        for (int i = 0; i < graph.length; i++) {
            graph[i] = new ArrayList<>();
        }

        graph[0].add(new Edge(0, 1, 2));
        graph[0].add(new Edge(0, 2, 4));

        graph[1].add(new Edge(1, 2, 1));
        graph[1].add(new Edge(1, 3, 7));

        graph[2].add(new Edge(2, 4, 3));

        graph[3].add(new Edge(3, 5, 1));

        graph[4].add(new Edge(4, 3, 2));
        graph[4].add(new Edge(4, 5, 5));
    }

    static void topologicalSort(ArrayList<Edge>[] graph,
                                int current,
                                boolean[] visited,
                                Stack<Integer> stack) {

        visited[current] = true;

        for (Edge e : graph[current]) {
            if (!visited[e.destination]) {
                topologicalSort(graph, e.destination, visited, stack);
            }
        }

        stack.push(current);
    }

static void shortestPath(ArrayList<Edge>[] graph, int source, int destination) {

    Stack<Integer> stack = new Stack<>();
    boolean[] visited = new boolean[graph.length];

    // Topological Sort
    for (int i = 0; i < graph.length; i++) {
        if (!visited[i]) {
            topologicalSort(graph, i, visited, stack);
        }
    }

    int[] distance = new int[graph.length];
    int[] parent = new int[graph.length];

    Arrays.fill(distance, Integer.MAX_VALUE);
    Arrays.fill(parent, -1);

    distance[source] = 0;

    while (!stack.isEmpty()) {

        int current = stack.pop();

        if (distance[current] != Integer.MAX_VALUE) {

            for (Edge e : graph[current]) {

                if (distance[current] + e.weight < distance[e.destination]) {

                    distance[e.destination] = distance[current] + e.weight;
                    parent[e.destination] = current;
                }
            }
        }
    }

    if (distance[destination] == Integer.MAX_VALUE) {
        System.out.println("No path exists.");
        return;
    }

    // Reconstruct the path
    ArrayList<Integer> path = new ArrayList<>();

    int current = destination;

    while (current != -1) {
        path.add(current);
        current = parent[current];
    }

    Collections.reverse(path);

    System.out.println("Shortest Path: " + path);
    System.out.println("Total Weight: " + distance[destination]);
}
    public static void main(String[] args) {

        ArrayList<Edge>[] graph = new ArrayList[6];

        createGraph(graph);

        shortestPath(graph, 0, 4);
    }
}