import java.util.HashMap;
import java.util.Map;

public class HashMapTest {

    public static void main(String[] args) {

        // Creating a HashMap
        HashMap<Integer, String> map = new HashMap<>();

        // put() - Adding elements
        map.put(1, "Apple");
        map.put(2, "Banana");
        map.put(3, "Cherry");

        System.out.println("Initial HashMap:");
        System.out.println(map);

        // Duplicate key
        map.put(2, "Mango"); // Replaces Banana

        // Null key
        map.put(null, "Orange");

        // Another null key
        map.put(null, "Grapes"); // Replaces Orange

        System.out.println("\nAfter adding duplicate and null keys:");
        System.out.println(map);

        // get() - Accessing values
        System.out.println("\nValue at key 2: " + map.get(2));
        System.out.println("Value at null key: " + map.get(null));

        // containsKey()
        System.out.println("\nContains key 3? " + map.containsKey(3));

        // containsValue()
        System.out.println("Contains value 'Apple'? " + map.containsValue("Apple"));

        // size()
        System.out.println("Size of HashMap: " + map.size());

        // remove()
        map.remove(1);
        System.out.println("\nAfter removing key 1:");
        System.out.println(map);

        // replace()
        map.replace(3, "Pineapple");
        System.out.println("\nAfter replacing value at key 3:");
        System.out.println(map);

        // keySet()
        System.out.println("\nKeys:");
        System.out.println(map.keySet());

        // values()
        System.out.println("\nValues:");
        System.out.println(map.values());

        // entrySet()
        System.out.println("\nKey-Value Pairs:");
        for (Map.Entry<Integer, String> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }

        // isEmpty()
        System.out.println("\nIs HashMap empty? " + map.isEmpty());

        // clear()
        map.clear();

        System.out.println("\nAfter clear():");
        System.out.println(map);

        // isEmpty() after clear
        System.out.println("Is HashMap empty now? " + map.isEmpty());
    }
}