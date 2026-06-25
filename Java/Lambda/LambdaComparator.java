import java.util.ArrayList;
import java.util.Comparator;

public class LambdaComparator {
    

    public static void main(String[] args) {
        Comparator<Integer> descComparator = (a,b)->{
            if (a < b) return 1;
            else if (a > b) return -1;
            else return 0;
        };

        ArrayList<Integer> arr = new ArrayList<>();

        arr.add(1);
        arr.add(5);
        arr.add(4);
        arr.add(2);
        arr.add(3);

        System.out.println(arr);
        arr.sort(descComparator);
        System.out.println(arr);
    }
}
