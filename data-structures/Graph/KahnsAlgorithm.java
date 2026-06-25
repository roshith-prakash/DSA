import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;

class Edge {
    int source;
    int destination;

    public Edge(int source, int destination) {
        this.source = source;
        this.destination = destination;
    }
}

public class KahnsAlgorithm {

    static void createGraph(ArrayList<Edge>[] graph) {

        // 5 → 0 ← 4
        // ↓       ↓
        // 2 → 3 → 1

        for(int i = 0; i < graph.length; i++) {
            graph[i] = new ArrayList<>();
        }

        graph[5].add(new Edge(5, 0));
        graph[5].add(new Edge(5, 2));

        graph[4].add(new Edge(4, 0));
        graph[4].add(new Edge(4, 1));

        graph[2].add(new Edge(2, 3));

        graph[3].add(new Edge(3, 1));
    }

    static void topologicalSort(ArrayList<Edge>[] graph) {

        int[] indegree = new int[graph.length];

        // Calculate indegrees
        for(int i = 0; i < graph.length; i++) {

            for(Edge e : graph[i]) {
                indegree[e.destination]++;
            }
        }

        Queue<Integer> q = new LinkedList<>();

        // Add all nodes with indegree 0
        for(int i = 0; i < indegree.length; i++) {

            if(indegree[i] == 0) {
                q.add(i);
            }
        }

        while(!q.isEmpty()) {

            int curr = q.remove();

            System.out.print(curr + " ");

            for(Edge e : graph[curr]) {

                indegree[e.destination]--;

                if(indegree[e.destination] == 0) {
                    q.add(e.destination);
                }
            }
        }
    }

    public static void main(String[] args) {

        ArrayList<Edge>[] graph = new ArrayList[6];

        createGraph(graph);

        topologicalSort(graph);
    }
}