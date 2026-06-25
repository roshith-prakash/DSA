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

public class BFSGraph1 {

    static void createGraph(ArrayList<EdgeBFS1>[] graph) {

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

        graph[0].add(new EdgeBFS1(0,1));
        graph[0].add(new EdgeBFS1(0,2));

        graph[1].add(new EdgeBFS1(1,0));
        graph[1].add(new EdgeBFS1(1,3));

        graph[2].add(new EdgeBFS1(2,0));
        graph[2].add(new EdgeBFS1(2,4));

        graph[3].add(new EdgeBFS1(3,1));
        graph[3].add(new EdgeBFS1(3,4));
        graph[3].add(new EdgeBFS1(3,5));

        graph[4].add(new EdgeBFS1(4,2));
        graph[4].add(new EdgeBFS1(4,3));
        graph[4].add(new EdgeBFS1(4,5));

        graph[5].add(new EdgeBFS1(5,3));
        graph[5].add(new EdgeBFS1(5,4));
        graph[5].add(new EdgeBFS1(5,6));

        graph[6].add(new EdgeBFS1(6,5));
    }

    static void bfs(ArrayList<EdgeBFS1>[] graph, int c, boolean[] visited) {

        Queue<Integer> q = new LinkedList<>();
        q.add(c);

        while (!q.isEmpty()) {
            int current = q.remove();

            if (!visited[current]) {
                System.out.println(current);
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
        bfs(graph, 0, visited);
    }
}