import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedList;
import java.util.Queue;

class EdgeBFS {
    int source;
    int destination;

    public EdgeBFS(int source, int destination) {
        this.source = source;
        this.destination = destination;
    }
}

public class ShortestPath {

    static void createGraph(ArrayList<EdgeBFS>[] graph) {

        //     0
        //   /   \
        //  1     2
        //  |     |
        //  3 --- 4
        //   \   /
        //     5
        //     |
        //     6

        for (int i = 0; i < graph.length; i++) {
            graph[i] = new ArrayList<>();
        }

        graph[0].add(new EdgeBFS(0, 1));
        graph[0].add(new EdgeBFS(0, 2));

        graph[1].add(new EdgeBFS(1, 0));
        graph[1].add(new EdgeBFS(1, 3));

        graph[2].add(new EdgeBFS(2, 0));
        graph[2].add(new EdgeBFS(2, 4));

        graph[3].add(new EdgeBFS(3, 1));
        graph[3].add(new EdgeBFS(3, 4));
        graph[3].add(new EdgeBFS(3, 5));

        graph[4].add(new EdgeBFS(4, 2));
        graph[4].add(new EdgeBFS(4, 3));
        graph[4].add(new EdgeBFS(4, 5));

        graph[5].add(new EdgeBFS(5, 3));
        graph[5].add(new EdgeBFS(5, 4));
        graph[5].add(new EdgeBFS(5, 6));

        graph[6].add(new EdgeBFS(6, 5));
    }

    static void shortestPath(ArrayList<EdgeBFS>[] graph, int source, int destination) {

        Queue<Integer> q = new LinkedList<>();
        boolean[] visited = new boolean[graph.length];
        int[] parent = new int[graph.length];

        Arrays.fill(parent, -1);

        q.add(source);
        visited[source] = true;

        while (!q.isEmpty()) {

            int current = q.remove();

            if (current == destination) {
                break;
            }

            for (int i = 0; i < graph[current].size(); i++) {

                EdgeBFS e = graph[current].get(i);

                if (!visited[e.destination]) {
                    visited[e.destination] = true;
                    parent[e.destination] = current;
                    q.add(e.destination);
                }
            }
        }

        if (!visited[destination]) {
            System.out.println("No path exists.");
            return;
        }

        ArrayList<Integer> path = new ArrayList<>();

        int current = destination;

        while (current != -1) {
            path.add(current);
            current = parent[current];
        }

        Collections.reverse(path);

        System.out.println("Shortest Path: " + path);
        System.out.println("Distance: " + (path.size() - 1));
    }

    public static void main(String[] args) {

        ArrayList<EdgeBFS>[] graph = new ArrayList[7];

        createGraph(graph);

        int source = 0;
        int destination = 6;

        shortestPath(graph, source, destination);
    }
}