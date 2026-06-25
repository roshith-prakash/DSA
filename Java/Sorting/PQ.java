import java.util.PriorityQueue;

public class PQ {
    public static void main(String[] args) {
        int[] arr = {5, 4, 3, 1, 2, 6};

        PriorityQueue<Integer> pq = new PriorityQueue<>();

        for (int num : arr) {
            pq.add(num);
        }

        System.out.println(pq);

        int i = 0;
        while (!pq.isEmpty()) {
            arr[i++] = pq.poll();
        }

        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}