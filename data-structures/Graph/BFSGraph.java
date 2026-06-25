import java.util.ArrayList;
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

public class BFSGraph {

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

        graph[0].add(new EdgeBFS(0,1));
        graph[0].add(new EdgeBFS(0,2));

        graph[1].add(new EdgeBFS(1,0));
        graph[1].add(new EdgeBFS(1,3));

        graph[2].add(new EdgeBFS(2,0));
        graph[2].add(new EdgeBFS(2,4));

        graph[3].add(new EdgeBFS(3,1));
        graph[3].add(new EdgeBFS(3,4));
        graph[3].add(new EdgeBFS(3,5));

        graph[4].add(new EdgeBFS(4,2));
        graph[4].add(new EdgeBFS(4,3));
        graph[4].add(new EdgeBFS(4,5));

        graph[5].add(new EdgeBFS(5,3));
        graph[5].add(new EdgeBFS(5,4));
        graph[5].add(new EdgeBFS(5,6));

        graph[6].add(new EdgeBFS(6,5));
    }

    static void bfs(ArrayList<EdgeBFS>[] graph, int c, boolean[] visited) {

        Queue<Integer> q = new LinkedList<>();
        q.add(c);

        while (!q.isEmpty()) {
            int current = q.remove();

            if (!visited[current]) {
                System.out.println(current);
                visited[current] = true;

                for (int i = 0; i < graph[current].size(); i++) {
                    EdgeBFS e = graph[current].get(i);
                    q.add(e.destination);
                }
            }
        }
    }

    public static void main(String[] args) {

        ArrayList<EdgeBFS>[] graph = new ArrayList[7];

        createGraph(graph);

        boolean[] visited = new boolean[7];
        bfs(graph, 0, visited);
    }
}