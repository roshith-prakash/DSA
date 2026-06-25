import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Map;

public class LinkedHashMapTest {

    public static void main(String[] args) {

        // Creating LinkedHashMap
        LinkedHashMap<Integer, String> map = new LinkedHashMap<>();

        // put() - Adding elements
        map.put(101, "Apple");
        map.put(103, "Mango");
        map.put(102, "Banana");
        map.put(105, "Cherry");

        System.out.println("Initial LinkedHashMap:");
        System.out.println(map);

        // Demonstrating insertion order
        System.out.println("\nInsertion order is maintained:");
        System.out.println(map);

        // Duplicate key
        map.put(102, "Pineapple"); // Replaces Banana

        // Null key
        map.put(null, "Orange");

        // Another null key
        map.put(null, "Grapes"); // Replaces Orange

        System.out.println("\nAfter adding duplicate and null keys:");
        System.out.println(map);

        // get()
        System.out.println("\nValue at key 103: " + map.get(103));
        System.out.println("Value at null key: " + map.get(null));

        // containsKey()
        System.out.println("\nContains key 105? " + map.containsKey(105));

        // containsValue()
        System.out.println("Contains value 'Apple'? " + map.containsValue("Apple"));

        // size()
        System.out.println("Size of LinkedHashMap: " + map.size());

        // remove()
        map.remove(101);

        System.out.println("\nAfter removing key 101:");
        System.out.println(map);

        // replace()
        map.replace(105, "Strawberry");

        System.out.println("\nAfter replacing value at key 105:");
        System.out.println(map);

        // keySet()
        System.out.println("\nKeys:");
        System.out.println(map.keySet());

        // values()
        System.out.println("\nValues:");
        Collection<String> values = map.values();
        System.out.println(values);

        // entrySet()
        System.out.println("\nKey-Value Pairs:");
        for (Map.Entry<Integer, String> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }

        // isEmpty()
        System.out.println("\nIs LinkedHashMap empty? " + map.isEmpty());

        // clear()
        map.clear();

        System.out.println("\nAfter clear():");
        System.out.println(map);

        // isEmpty() after clear
        System.out.println("Is LinkedHashMap empty now? " + map.isEmpty());
    }
}