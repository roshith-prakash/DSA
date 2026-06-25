public class TowerOfHanoi {

    public static void hanoi(int n, char start, char helper, char end) {
        if (n == 1) {
            System.out.println("Move disk 1 from " + start + " to " + end);
            return;
        }

        // Step 1: Move n-1 disks from start to helper
        hanoi(n - 1, start, end, helper);

        // Step 2: Move nth disk from start to end
        System.out.println("Move disk " + n + " from " + start + " to " + end);

        // Step 3: Move n-1 disks from helper to end
        hanoi(n - 1, helper, start, end);
    }

    public static void main(String[] args) {
        int n = 3; 
        hanoi(n, 'A', 'B', 'C');
    }
}