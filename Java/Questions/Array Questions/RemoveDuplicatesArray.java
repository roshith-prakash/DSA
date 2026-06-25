import java.util.HashSet;
import java.util.Set;

public class RemoveDuplicatesArray {
    public static void main(String[] args) {

        int[] arr = {1,2,2,3,3,3,4,5};

        Set<Integer> set = new HashSet<>();

        int index = 0;

        for (int num : arr) {
            if (!set.contains(num)) {
                set.add(num);
                arr[index] = num;
                index++;
            }
        }

        while (index < arr.length) {
            arr[index] = -1;
            index++;
        }

        index = 0;

        while(arr[index]!= -1){
            System.out.println(arr[index]);
            index++;
        }
    }
}