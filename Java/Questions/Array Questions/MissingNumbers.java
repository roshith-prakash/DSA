import java.util.HashSet;
import java.util.Set;

public class MissingNumbers {
    public static void main(String[] args) {

        int[] a = {1, 3, 5, 7, 8};

        int min = 100000;
        int max = 0;

        Set set = new HashSet();

        for (int num : a) {
            set.add(num);

            if (num < min) {
                min = num;
            }

            if (num > max) {
                max = num;
            }
        }

        for (int i = min; i <= max; i++) {
            if (!set.contains(i)) {
                System.out.println("Missing number : " + i);
            }
        }
    }
}