import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Queue;

class EdgeBFS {
    char source;
    char destination;

    public EdgeBFS(char source, char destination) {
        this.source = source;
        this.destination = destination;
    }
}

public class BFSGraph {

    static HashMap<Character, Integer> map = new HashMap<>();

    static void createGraph(ArrayList<EdgeDFS>[] graph) {

        map.put('s', 0);
        map.put('a', 1);
        map.put('b', 2);
        map.put('c', 3);
        map.put('d', 4);

        for (int i = 0; i < graph.length; i++) {
            graph[i] = new ArrayList<>();
        }

        graph[map.get('s')].add(new EdgeDFS('s', 'a'));
        graph[map.get('s')].add(new EdgeDFS('s', 'b'));
        graph[map.get('s')].add(new EdgeDFS('s', 'c'));

        graph[map.get('a')].add(new EdgeDFS('a', 's'));
        graph[map.get('a')].add(new EdgeDFS('a', 'd'));

        graph[map.get('b')].add(new EdgeDFS('b', 's'));

        graph[map.get('c')].add(new EdgeDFS('c', 's'));
        graph[map.get('c')].add(new EdgeDFS('c', 'd'));

        graph[map.get('d')].add(new EdgeDFS('d', 'a'));
    }

    static void bfs(ArrayList<EdgeDFS>[] graph, char c, boolean[] visited) {

        Queue<Character> q = new LinkedList<>();
        q.add(c);

        while (!q.isEmpty()) {
            char current = q.remove();

            if (!visited[map.get(current)]) {
                System.out.println(current);
                visited[map.get(current)] = true;

                for (int i = 0; i < graph[map.get(current)].size(); i++) {
                    EdgeDFS e = graph[map.get(current)].get(i);
                    q.add(e.destination);
                }
            }
        }
    }

    public static void main(String[] args) {

        ArrayList<EdgeDFS>[] graph = new ArrayList[5];

        createGraph(graph);

        boolean[] visited = {false, false, false, false, false};
        bfs(graph, 's', visited);
    }
}