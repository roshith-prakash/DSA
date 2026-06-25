import java.util.Collections;
import java.util.LinkedList;

public class LinkedListCollectionTest {
    public static void main(String[] args) {

        LinkedList list = new LinkedList();

        //  add()
        list.add(1);
        list.add("Roshith");
        list.add(true);
        list.add(null);
        list.add('P');

        System.out.println("Initial List: " + list);

        //  size()
        System.out.println("Size: " + list.size());

        //  get()
        System.out.println("Element at index 1: " + list.get(1));

        //  set()
        list.set(1, "Updated Name");
        System.out.println("After set(): " + list);

        //  addFirst()
        list.addFirst("FIRST");
        System.out.println("After addFirst(): " + list);

        //  addLast()
        list.addLast("LAST");
        System.out.println("After addLast(): " + list);

        //  removeFirst()
        list.removeFirst();
        System.out.println("After removeFirst(): " + list);

        //  removeLast()
        list.removeLast();
        System.out.println("After removeLast(): " + list);

        //  contains()
        System.out.println("Contains true? " + list.contains(true));

        //  indexOf()
        System.out.println("Index of null: " + list.indexOf(null));

        //  lastIndexOf()
        list.add(null);
        System.out.println("Last index of null: " + list.lastIndexOf(null));

        //  remove by index
        list.remove(0);
        System.out.println("After remove(index): " + list);

        //  remove by object
        list.remove("Updated Name");
        System.out.println("After remove(object): " + list);

        //  isEmpty()
        System.out.println("Is empty? " + list.isEmpty());

        //  clear() (demo using copy so program continues)
        LinkedList temp = new LinkedList(list);
        temp.clear();
        System.out.println("Temp after clear(): " + temp);

        //  iteration
        System.out.println("\nFinal elements:");
        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
        }

        //  Collections utility example
        LinkedList numbers = new LinkedList();
        numbers.add(5);
        numbers.add(2);
        numbers.add(9);
        numbers.add(1);

        Collections.sort(numbers);
        System.out.println("\nSorted numbers: " + numbers);
    }
}