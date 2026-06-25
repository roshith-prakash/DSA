import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.LinkedHashSet;

public class LinkedHashSetTest {
    public static void main(String[] args) {

        // Creating a LinkedHashSet
        LinkedHashSet<Object> set = new LinkedHashSet<>();

        // add() - adding elements
        set.add(1);
        set.add("Roshith");
        set.add(true);
        set.add(null);
        set.add('P');
        set.add(1); // duplicate, will be ignored
        System.out.println("Initial LinkedHashSet: " + set);

        // size() - number of elements
        System.out.println("Size: " + set.size());

        // contains() - check if element exists
        System.out.println("Contains true? " + set.contains(true));
        System.out.println("Contains 'Unknown'? " + set.contains("Unknown"));

        // remove() - remove an element
        set.remove(true);
        System.out.println("After remove(true): " + set);

        // isEmpty() - check if set is empty
        System.out.println("Is empty? " + set.isEmpty());

        // clear() - remove all elements (using a temp copy so main set stays)
        LinkedHashSet<Object> temp = new LinkedHashSet<>(set);
        temp.clear();
        System.out.println("Temp after clear(): " + temp);

        // iteration - using for-each loop
        System.out.println("\nIterating using for-each loop:");
        for (Object obj : set) {
            System.out.println(obj);
        }

        // iteration - using Iterator
        System.out.println("\nIterating using Iterator:");
        Iterator<Object> iterator = set.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        // addAll() - add elements from another collection
        LinkedHashSet<Object> anotherSet = new LinkedHashSet<>();
        anotherSet.add("New");
        anotherSet.add(42);
        set.addAll(anotherSet);
        System.out.println("\nAfter addAll(): " + set);

        // removeAll() - remove all elements from another collection
        set.removeAll(anotherSet);
        System.out.println("After removeAll(): " + set);

        // retainAll() - retain only elements present in another collection
        LinkedHashSet<Object> retainSet = new LinkedHashSet<>();
        retainSet.add('P');
        retainSet.add(null);
        set.retainAll(retainSet);
        System.out.println("After retainAll(): " + set);

        // convert to list for sorting (Collections.sort requires List)
        LinkedHashSet<Integer> numbersSet = new LinkedHashSet<>();
        numbersSet.add(5);
        numbersSet.add(2);
        numbersSet.add(9);
        numbersSet.add(1);

        ArrayList<Integer> numbersList = new ArrayList<>(numbersSet);
        Collections.sort(numbersList);
        System.out.println("\nSorted numbers from LinkedHashSet: " + numbersList);
    }
}