
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


public class Graph {
    
    static void createGraph(ArrayList<Edge> graph[]){

             
        //             +---+               +---+
        //             | 1 |  ------------ | 2 |
        //             +---+   Weight 10   +---+
        //               |                   |
        //               |                   |
        //   Weight 0    |                   |     Weight 2
        //               |                   |
        //             +---+               +---+
        //             | 3 |  ------------ | 0 |
        //             +---+    Weight 2   +---+
        //                 \               /
        //                  \             /
        //                   \           /
        //         Weight -1  \         /  Weight -1
        //                     \       /
        //                      +-----+

        for(int i=0; i<graph.length; i++){
            graph[i] = new ArrayList<Edge>();
        }

        graph[0].add((new Edge(0, 2, 2)));

        graph[1].add((new Edge(1, 2, 10)));
        graph[1].add((new Edge(1, 3, 0)));

        graph[2].add((new Edge(2, 0, 2)));
        graph[2].add((new Edge(2, 1, 10)));
        graph[2].add((new Edge(2, 3, -1)));

        graph[3].add((new Edge(3, 1, 0)));
        graph[3].add((new Edge(3, 2, -1)));

    }
    
    public static void main(String[] args) {
        ArrayList<Edge> graph[] = new ArrayList[4];

        createGraph(graph);
        
        for(int i=0; i<graph[2].size(); i++){
            Edge e= graph[2].get(i);
            System.out.println("Source : 2 | Destination : " + e.destination + " | Weight : "+e.weight);
        }
    }
}
