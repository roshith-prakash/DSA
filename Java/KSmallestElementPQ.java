import java.util.PriorityQueue;

public class KSmallestElement {
    public static void main(String[] args) {
        int[] arr = {5, 3, 11, 17, 4, 7};

        PriorityQueue<Integer> minPQ = new PriorityQueue<>();
        PriorityQueue<Integer> maxPQ = new PriorityQueue<>((a, b) -> -a.compareTo(b));

        for (int num : arr) {
            minPQ.add(num);
            maxPQ.add(num);
        }
    
        int k=4;
        int i =0;

        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;

        while(i < k){
            min = minPQ.poll();
            max = maxPQ.poll();
            i++;
        }

        System.out.println("Kth Smallest Element : " + min);
        System.out.println("Kth Largest Element : " + max);
    }    
}
