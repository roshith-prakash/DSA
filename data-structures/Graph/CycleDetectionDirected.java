import java.util.ArrayList;
import java.util.HashMap;

// Represents a directed edge in the graph
class EdgeDFS {
    char source;
    char destination;

    public EdgeDFS(char source, char destination) {
        this.source = source;
        this.destination = destination;
    }
}

public class CycleDetectionDirected {

    // Maps each character node to an integer index
    // Example: a -> 0, b -> 1, s -> 2 ...
    static HashMap<Character, Integer> map = new HashMap<>();

    // Creates the graph using adjacency lists
    static void createGraph(ArrayList<EdgeDFS>[] graph) {

        // Assign an index to every node
        map.put('a', 0);
        map.put('b', 1);
        map.put('s', 2);
        map.put('c', 3);
        map.put('e', 4);
        map.put('f', 5);
        map.put('g', 6);
        map.put('h', 7);

        // Initialize all adjacency lists
        for (int i = 0; i < graph.length; i++) {
            graph[i] = new ArrayList<>();
        }

        // Directed edges
        graph[map.get('a')].add(new EdgeDFS('a', 'b'));
        graph[map.get('a')].add(new EdgeDFS('a', 's'));

        graph[map.get('s')].add(new EdgeDFS('s', 'c'));
        graph[map.get('s')].add(new EdgeDFS('s', 'g'));

        graph[map.get('c')].add(new EdgeDFS('c', 'f'));
        graph[map.get('c')].add(new EdgeDFS('c', 'e'));

        graph[map.get('f')].add(new EdgeDFS('f', 'g'));

        graph[map.get('e')].add(new EdgeDFS('e', 'h'));

        // Creates a cycle:
        // s -> c -> f -> g -> s
        graph[map.get('g')].add(new EdgeDFS('g', 's'));
    }

    /*
     * DFS function used for cycle detection.
     *
     * visited[]  -> tracks nodes already visited at least once
     * recStack[] -> tracks nodes currently present in the DFS path
     *
     * If we encounter a node that is already in recStack[],
     * then a back edge exists and a cycle is present.
     */
    static boolean dfsCycle(
            ArrayList<EdgeDFS>[] graph,
            char current,
            boolean[] visited,
            boolean[] recStack) {

        // Convert current node into its integer index
        int currIndex = map.get(current);

        // Mark node as visited
        visited[currIndex] = true;

        // Add node to current DFS path
        recStack[currIndex] = true;

        // Traverse all neighbours
        for (int i = 0; i < graph[currIndex].size(); i++) {

            EdgeDFS e = graph[currIndex].get(i);

            int neighbourIndex = map.get(e.destination);

            // Case 1:
            // Neighbour not visited yet
            if (!visited[neighbourIndex]) {

                // Continue DFS
                if (dfsCycle(graph, e.destination, visited, recStack)) {
                    return true;
                }
            }

            // Case 2:
            // Neighbour already exists in current DFS path
            // Back edge found -> Cycle exists
            else if (recStack[neighbourIndex]) {
                return true;
            }
        }

        // Backtracking step:
        // Remove current node from recursion stack
        // because DFS is finished exploring this node
        recStack[currIndex] = false;

        // No cycle found from this node
        return false;
    }

    /*
     * Handles disconnected graphs.
     *
     * Starts DFS from every unvisited node.
     */
    static boolean detectCycle(ArrayList<EdgeDFS>[] graph) {

        // Tracks globally visited nodes
        boolean[] visited = new boolean[graph.length];

        // Tracks nodes currently in DFS call stack
        boolean[] recStack = new boolean[graph.length];

        // List of all graph nodes
        char[] nodes = {'a', 'b', 's', 'c', 'e', 'f', 'g', 'h'};

        // Traverse every component
        for (char node : nodes) {

            // Start DFS only if node hasn't been visited
            if (!visited[map.get(node)]) {

                if (dfsCycle(graph, node, visited, recStack)) {
                    return true;
                }
            }
        }

        // No cycle found in any component
        return false;
    }

    public static void main(String[] args) {

        // Graph with 8 vertices
        ArrayList<EdgeDFS>[] graph = new ArrayList[8];

        createGraph(graph);

        System.out.println("Cycle Present : " + detectCycle(graph));
    }
}