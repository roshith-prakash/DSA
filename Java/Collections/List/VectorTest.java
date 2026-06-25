package List;
import java.util.Collections;
import java.util.Vector;

public class VectorTest {
    public static void main(String[] args) {

        Vector vec = new Vector();

        //  add()
        vec.add(1);
        vec.add("Roshith");
        vec.add(true);
        vec.add(null);
        vec.add('P');

        System.out.println("Initial Vector: " + vec);

        //  size()
        System.out.println("Size: " + vec.size());

        //  get()
        System.out.println("Element at index 1: " + vec.get(1));

        //  set()
        vec.set(1, "Updated Name");
        System.out.println("After set(): " + vec);

        //  add(index, element)
        vec.add(2, "Inserted at index 2");
        System.out.println("After add(index, element): " + vec);

        //  contains()
        System.out.println("Contains true? " + vec.contains(true));

        //  indexOf()
        System.out.println("Index of null: " + vec.indexOf(null));

        //  lastIndexOf()
        vec.add(null);
        System.out.println("Last index of null: " + vec.lastIndexOf(null));

        //  remove by index
        vec.remove(0);
        System.out.println("After remove(index): " + vec);

        //  remove by object
        vec.remove("Updated Name");
        System.out.println("After remove(object): " + vec);

        //  isEmpty()
        System.out.println("Is empty? " + vec.isEmpty());

        //  capacity() (Vector-specific)
        System.out.println("Capacity: " + vec.capacity());

        //  ensureCapacity()
        vec.ensureCapacity(20);
        System.out.println("Capacity after ensureCapacity(20): " + vec.capacity());

        //  iteration
        System.out.println("\nFinal elements:");
        for (int i = 0; i < vec.size(); i++) {
            System.out.println(vec.get(i));
        }

        //  Collections utility example (sorting numbers only)
        Vector numbers = new Vector();
        numbers.add(5);
        numbers.add(2);
        numbers.add(9);
        numbers.add(1);

        Collections.sort(numbers);
        System.out.println("\nSorted numbers: " + numbers);
    }
}