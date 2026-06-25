import java.util.ArrayList;

class Edge{
    int source;
    int destination;
    int weight;

    public Edge(int source, int destination, int weight){
        this.source = source;
        this.destination = destination;
        this.weight = weight;
    }                                                                                                                  
}


public class FindPathsFromSourceToDest {
    
    static void createGraph(ArrayList<Edge> graph[]){

        //          (6)          (3)
        //      1 --------> 2 --------> 3
        //      |            \         /        
        //      |        (9)  \       / (-1)        
        // (11) |              \     /          
        //      |               \   /           
        //      --------------->  4 
        //                        |
        //                        |
        //                        | (5)
        //                        |
        //                        v
        //                        5

        for(int i=0; i<graph.length; i++){
            graph[i] = new ArrayList<Edge>();
        }

        graph[1].add((new Edge(1, 2, 6)));
        graph[1].add((new Edge(1, 4, 11)));

        graph[2].add((new Edge(2, 3, 3)));
        graph[2].add((new Edge(2, 4, 9)));

        graph[3].add((new Edge(3, 2, 3)));
        graph[3].add((new Edge(3, 4, -1)));

        graph[4].add((new Edge(4, 1, 11)));
        graph[4].add((new Edge(4, 2, 9)));
        graph[4].add((new Edge(4, 3, -1)));
        graph[4].add((new Edge(4, 5, 5)));

        graph[5].add((new Edge(5, 4, 5)));
    }

    static void findAllPaths(ArrayList<Edge>[] graph, int src, int dest, boolean[] visited, String path) {

        // BASE CASE:
        // If we reached the destination, we have found one complete path
        if (src == dest) {
            System.out.println(path);  // print the path directly
            return;
        }

        // Explore all outgoing edges from the current node
        for (Edge e : graph[src]) {

            // Only go to unvisited nodes to avoid cycles
            if (!visited[e.destination]) {

                // MARK: include node in current path
                visited[e.destination] = true;

                // RECURSION: move to the next node and extend the path string
                findAllPaths(
                    graph,
                    e.destination,              // next node
                    dest,                       // destination stays same
                    visited,
                    path + "->" + e.destination // build path
                );

                // BACKTRACK:
                // unmark node so it can be used in other possible paths
                visited[e.destination] = false;
            }
        }
    }

    public static void main(String[] args) {
        ArrayList<Edge> graph[] = new ArrayList[6];

        createGraph(graph);

        boolean[] visited = new boolean[graph.length];
        visited[1] = true;
        findAllPaths(graph, 1, 5, visited, "1");
    }
}
