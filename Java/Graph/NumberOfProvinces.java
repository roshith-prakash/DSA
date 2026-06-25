import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;

class EdgeBFS1 {
    int source;
    int destination;

    public EdgeBFS1(int source, int destination) {
        this.source = source;
        this.destination = destination;
    }
}

public class NumberOfProvinces {

    static void createGraph(ArrayList<EdgeBFS1>[] graph) {

        for (int i = 0; i < graph.length; i++) {
            graph[i] = new ArrayList<>();
        }

        // Province 1: 0 - 1 - 2
        graph[0].add(new EdgeBFS1(0, 1));
        graph[1].add(new EdgeBFS1(1, 0));

        graph[1].add(new EdgeBFS1(1, 2));
        graph[2].add(new EdgeBFS1(2, 1));

        // Province 2: 3 - 4
        graph[3].add(new EdgeBFS1(3, 4));
        graph[4].add(new EdgeBFS1(4, 3));

        // Province 3: 5 - 6
        graph[5].add(new EdgeBFS1(5, 6));
        graph[6].add(new EdgeBFS1(6, 5));
    }

    static void bfs(ArrayList<EdgeBFS1>[] graph, int c, boolean[] visited) {

        Queue<Integer> q = new LinkedList<>();
        q.add(c);

        while (!q.isEmpty()) {
            int current = q.remove();

            if (!visited[current]) {
                visited[current] = true;

                for (int i = 0; i < graph[current].size(); i++) {
                    EdgeBFS1 e = graph[current].get(i);
                    q.add(e.destination);
                }
            }
        }
    }

    public static void main(String[] args) {

        ArrayList<EdgeBFS1>[] graph = new ArrayList[7];
        createGraph(graph);

        boolean[] visited = new boolean[7];

        int provinces = 0;

        for (int i = 0; i < 7; i++) {
            if (!visited[i]) {
                bfs(graph, i, visited);
                provinces++;
            }
        }

        System.out.println("Number of provinces: " + provinces);
    }
}