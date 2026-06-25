import java.util.ArrayList;
import java.util.HashMap;

class EdgeDFS {
    char source;
    char destination;

    public EdgeDFS(char source, char destination) {
        this.source = source;
        this.destination = destination;
    }
}

public class DFSGraph {

    static HashMap<Character, Integer> map = new HashMap<>();

    static void createGraph(ArrayList<EdgeDFS>[] graph) {

        map.put('a', 0);
        map.put('b', 1);
        map.put('s', 2);
        map.put('c', 3);
        map.put('e', 4);
        map.put('f', 5);
        map.put('g', 6);
        map.put('h', 7);      

    //     b
    //     |
    //     a
    //    / 
    //   /   
    //  s-----c
    //  |    / \
    //  |   /   \
    //  g--f     e
    //   \       |
    //    \      |
    //     \     |
    //      \    |
    //       \   |
    //        \  |
    //         \ |
    //           h

        for (int i = 0; i < graph.length; i++) {
            graph[i] = new ArrayList<>();
        }

        graph[map.get('a')].add(new EdgeDFS('a', 'b'));
        graph[map.get('a')].add(new EdgeDFS('a', 's'));

        graph[map.get('b')].add(new EdgeDFS('b', 'a'));

        graph[map.get('s')].add(new EdgeDFS('s', 'a'));
        graph[map.get('s')].add(new EdgeDFS('s', 'c'));
        graph[map.get('s')].add(new EdgeDFS('s', 'g'));

        graph[map.get('c')].add(new EdgeDFS('c', 's'));
        graph[map.get('c')].add(new EdgeDFS('c', 'f'));
        graph[map.get('c')].add(new EdgeDFS('c', 'e'));

        graph[map.get('f')].add(new EdgeDFS('f', 'c'));
        graph[map.get('f')].add(new EdgeDFS('f', 'g'));

        graph[map.get('g')].add(new EdgeDFS('g', 'f'));
        graph[map.get('g')].add(new EdgeDFS('g', 's'));

        graph[map.get('h')].add(new EdgeDFS('h', 'g'));
        graph[map.get('h')].add(new EdgeDFS('h', 'e'));

        graph[map.get('e')].add(new EdgeDFS('e', 'c'));
        graph[map.get('e')].add(new EdgeDFS('e', 'h'));

    }

    static void dfs(ArrayList<EdgeDFS>[] graph, char current, boolean visited[]){
        System.out.println(current);
        visited[map.get(current)]=true;

        for(int i=0; i<graph[map.get(current)].size(); i++){
            EdgeDFS e = graph[map.get(current)].get(i);

            if(!visited[map.get(e.destination)]){
                dfs(graph, e.destination, visited);
            }
        }
    }

    
    public static void main(String[] args) {

        ArrayList<EdgeDFS>[] graph = new ArrayList[8];

        createGraph(graph);

        boolean[] visited = new boolean[8];
        dfs(graph, 'a', visited);
    }
}