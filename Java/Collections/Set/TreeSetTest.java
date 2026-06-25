import java.util.Comparator;
import java.util.Iterator;
import java.util.TreeSet;

class MyComparator implements Comparator<Integer> {
    @Override
    public int compare(Integer a, Integer b) {
        if (a < b) return 1;
        else if (a > b) return -1;
        else return 0;
    }
}


public class TreeSetTest {
    public static void main(String[] args) {

        // TreeSet with Integer (natural order)
        TreeSet<Integer> set = new TreeSet<>();

        set.add(1);
        set.add(42);
        set.add(5);
        set.add(9);
        set.add(2);

        System.out.println("Initial TreeSet: " + set);

        System.out.println("Size: " + set.size());

        System.out.println("Contains 5? " + set.contains(5));
        System.out.println("Contains 99? " + set.contains(99));

        set.remove(42);
        System.out.println("After remove(42): " + set);

        System.out.println("Is empty? " + set.isEmpty());

        TreeSet<Integer> temp = new TreeSet<>(set);
        temp.clear();
        System.out.println("Temp after clear(): " + temp);

        System.out.println("\nIterating using for-each loop:");
        for (Integer obj : set) {
            System.out.println(obj);
        }

        System.out.println("\nIterating using Iterator:");
        Iterator<Integer> iterator = set.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        TreeSet<Integer> anotherSet = new TreeSet<>();
        anotherSet.add(7);
        anotherSet.add(3);

        set.addAll(anotherSet);
        System.out.println("\nAfter addAll(): " + set);

        set.removeAll(anotherSet);
        System.out.println("After removeAll(): " + set);

        TreeSet<Integer> reversedSet = new TreeSet<>(new MyComparator());

        reversedSet.addAll(set);

        System.out.println("Reversed Set: " + reversedSet);

        TreeSet<Integer> retainSet = new TreeSet<>();
        retainSet.add(1);
        retainSet.add(5);
        retainSet.add(107);

        set.retainAll(retainSet);
        System.out.println("After retainAll(): " + set);
    }
}