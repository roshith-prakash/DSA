import java.util.ArrayList;
import java.util.Collections;

public class ArrayListTest {
    public static void main(String[] args) {

        ArrayList arr = new ArrayList();

        //  add()
        arr.add(1);
        arr.add("Roshith");
        arr.add(true);
        arr.add(null);
        arr.add('P');

        System.out.println("Initial List: " + arr);

        //  size()
        System.out.println("Size: " + arr.size());

        //  get()
        System.out.println("Element at index 1: " + arr.get(1));

        //  set() - replace element
        arr.set(1, "Updated Name");
        System.out.println("After set(): " + arr);

        //  add(index, element)
        arr.add(2, "Inserted at index 2");
        System.out.println("After add(index, element): " + arr);

        //  contains()
        System.out.println("Contains true? " + arr.contains(true));

        //  indexOf()
        System.out.println("Index of null: " + arr.indexOf(null));

        //  lastIndexOf()
        arr.add(null);
        System.out.println("Last index of null: " + arr.lastIndexOf(null));

        //  remove by index
        arr.remove(0);
        System.out.println("After remove(index): " + arr);

        //  remove by object
        arr.remove("Updated Name");
        System.out.println("After remove(object): " + arr);

        //  isEmpty()
        System.out.println("Is empty? " + arr.isEmpty());

        //  clear() (commented so program continues)
        ArrayList temp = new ArrayList(arr);
        temp.clear();
        System.out.println("Temp after clear(): " + temp);

        //  iteration (for loop)
        System.out.println("\nFinal List elements:");
        for (int i = 0; i < arr.size(); i++) {
            System.out.println(arr.get(i));
        }

        //  Collections utility example (sort works only for comparable types)
        ArrayList numbers = new ArrayList();
        numbers.add(5);
        numbers.add(2);
        numbers.add(9);
        numbers.add(1);

        Collections.sort(numbers);
        System.out.println("\nSorted numbers: " + numbers);
    }
}