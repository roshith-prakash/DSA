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


public class FindNumberOfEdges {
    
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

   static int numberOfEdges(ArrayList<Edge>[] graph) {

    int count = 0;

    for (int u = 1; u < graph.length; u++) {

        for (int i = 0; i < graph[u].size(); i++) {

            Edge e = graph[u].get(i);
            int v = e.destination;

            // Ensures that edge is counted only once - from smaller vertex to larger vertex
            if (u < v) {
                count++;
            }
        }
    }

    return count;
}

    public static void main(String[] args) {
        ArrayList<Edge> graph[] = new ArrayList[6];

        createGraph(graph);

        System.out.println("Number of Edges : "+ numberOfEdges(graph));
    }
}
