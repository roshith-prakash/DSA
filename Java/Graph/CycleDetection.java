import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;

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


public class CycleDetection {
    
    static void createGraph(ArrayList<Edge> graph[]){

        //          (6)          (3)
        //      1 --------> 2 --------> 3
        //      |            \         /        
        //      |        (9)  \       / (-1)        
        // (11) |              \     /          
        //      |                v  /           
        //      ---------------> 4 <
        //                       |
        //                       |
        //                       | (5)
        //                       |
        //                       v
        //                       5

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

    static boolean detectCycle(ArrayList<Edge>[] graph) {

        // keeps track of visited nodes across all BFS traversals
        boolean[] visited = new boolean[graph.length];

        // we loop through all nodes because the graph may be disconnected
        for (int i = 0; i < graph.length; i++) {

            // if the node is not visited, start BFS from it
            if (!visited[i]) {

                // if BFS detects a cycle in this component, return true immediately
                if (bfs(graph, i, visited)) {
                    return true;
                }
            }
        }

        // if no cycle found in any component
        return false;
    }

    static boolean bfs(ArrayList<Edge>[] graph, int start, boolean[] visited) {

        // queue stores: {current node, parent node}
        Queue<int[]> q = new LinkedList<>();

        // start BFS from 'start' node, with no parent (-1)
        q.add(new int[]{start, -1});

        // mark start node as visited
        visited[start] = true;

        // process nodes level by level
        while (!q.isEmpty()) {

            // remove front element
            int[] curr = q.poll();

            int current_node = curr[0];
            int parent_node = curr[1];

            // explore all neighbors of current node
            for (Edge e : graph[current_node]) {

                int neighbour = e.destination;

                // CASE 1: neighbour not visited → visit it
                if (!visited[neighbour]) {

                    visited[neighbour] = true;

                    // push neighbour into queue with current node as its parent
                    q.add(new int[]{neighbour, current_node});
                }

                // CASE 2: neighbour already visited AND not parent → cycle found
                else if (neighbour != parent_node) {
                    return true;
                }
            }
        }

        // no cycle found in this BFS component
        return false;
    }
    
    public static void main(String[] args) {
        ArrayList<Edge> graph[] = new ArrayList[6];

        createGraph(graph);

        System.out.println("Cycle Present : "+ detectCycle(graph));
    }
}
