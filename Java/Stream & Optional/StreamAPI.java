import java.util.Arrays;

public class StreamAPI {
    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

        Arrays.stream(nums)
            .filter(n -> n % 2 == 0)
            .forEach(System.out::println);
    }
}
