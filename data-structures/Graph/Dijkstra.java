import java.util.ArrayList;
import java.util.Arrays;
import java.util.PriorityQueue;

class Edge {
    int source;
    int destination;
    int weight;

    public Edge(int source, int destination, int weight) {
        this.source = source;
        this.destination = destination;
        this.weight = weight;
    }
}

public class Dijkstra {

    static void createGraph(ArrayList<Edge>[] graph) {

        for (int i = 0; i < graph.length; i++) {
            graph[i] = new ArrayList<>();
        }

        graph[0].add(new Edge(0, 1, 2));
        graph[0].add(new Edge(0, 2, 4));

        graph[1].add(new Edge(1, 0, 2));
        graph[1].add(new Edge(1, 2, 1));
        graph[1].add(new Edge(1, 3, 7));

        graph[2].add(new Edge(2, 0, 4));
        graph[2].add(new Edge(2, 1, 1));
        graph[2].add(new Edge(2, 4, 3));

        graph[3].add(new Edge(3, 1, 7));
        graph[3].add(new Edge(3, 5, 1));

        graph[4].add(new Edge(4, 2, 3));
        graph[4].add(new Edge(4, 5, 5));

        graph[5].add(new Edge(5, 3, 1));
        graph[5].add(new Edge(5, 4, 5));
    }

    static void dijkstra(ArrayList<Edge>[] graph, int source) {

        int[] distance = new int[graph.length];
        Arrays.fill(distance, Integer.MAX_VALUE);
        distance[source] = 0;

        boolean[] visited = new boolean[graph.length];

        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]);

        pq.add(new int[]{source, 0});

        while (!pq.isEmpty()) {

            int[] current = pq.remove();
            int node = current[0];

            if (visited[node])
                continue;

            visited[node] = true;

            for (Edge e : graph[node]) {

                int u = e.source;
                int v = e.destination;

                if (distance[u] + e.weight < distance[v]) {

                    distance[v] = distance[u] + e.weight;
                    pq.add(new int[]{v, distance[v]});
                }
            }
        }

        System.out.println("Shortest distances from source " + source);

        for (int i = 0; i < graph.length; i++) {
            System.out.println(source + " -> " + i + " = " + distance[i]);
        }
    }

    public static void main(String[] args) {

        ArrayList<Edge>[] graph = new ArrayList[6];
        createGraph(graph);

        dijkstra(graph, 0);
    }
}