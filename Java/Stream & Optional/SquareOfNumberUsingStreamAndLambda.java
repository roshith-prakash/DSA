import java.util.Arrays;
import java.util.List;

public class SquareOfNumberUsingStreamAndLambda {
    public static void main(String[] args) {

        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6, 0, -1, 7, 8, 9, 10);

        // Smallest number
        System.out.println(nums.stream()
                .min((x,y)->x.compareTo(y))
                .get());

        System.out.println(nums.stream()
                .sorted()
                .findFirst()
                .get());

        List<Integer> squared = nums.stream()
                .map(n -> n * n)
                .toList();

        System.out.println(squared);
    }
}