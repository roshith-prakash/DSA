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

public class CycleDetectionKahn {

    static void createGraph(ArrayList<Edge>[] graph) {

        for(int i = 0; i < graph.length; i++) {
            graph[i] = new ArrayList<>();
        }

        // 0 -> 1 -> 2 -> 0

        graph[0].add(new Edge(0, 1));
        graph[1].add(new Edge(1, 2));
        graph[2].add(new Edge(2, 0));
    }

    static boolean detectCycle(ArrayList<Edge>[] graph) {

        int V = graph.length;

        int[] indegree = new int[V];

        // Calculate indegrees
        for(int i = 0; i < V; i++) {

            for(Edge e : graph[i]) {
                indegree[e.destination]++;
            }
        }

        Queue<Integer> q = new LinkedList<>();

        // Add nodes with indegree 0
        for(int i = 0; i < V; i++) {

            if(indegree[i] == 0) {
                q.add(i);
            }
        }

        int count = 0;

        while(!q.isEmpty()) {

            int curr = q.remove();

            count++;

            for(Edge e : graph[curr]) {

                indegree[e.destination]--;

                if(indegree[e.destination] == 0) {
                    q.add(e.destination);
                }
            }
        }

        return count != V;
    }

    public static void main(String[] args) {

        ArrayList<Edge>[] graph = new ArrayList[3];

        createGraph(graph);

        System.out.println("Cycle Present : " + detectCycle(graph));
    }
}