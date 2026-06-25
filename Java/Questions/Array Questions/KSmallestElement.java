import java.util.PriorityQueue;

public class KSmallestElement {
    public static void main(String[] args) {
        int[] arr = {5, 3, 11, 17, 4, 7};

        PriorityQueue<Integer> pq = new PriorityQueue<>();

        for (int num : arr) {
            pq.add(num);
        }
        
        int k=4;
        int i =0;

        int min = Integer.MAX_VALUE;
        while(i < k){
            min = pq.poll();
            i++;
        }

        System.out.println("Kth Smallest Element : " + min);
    }    
}
