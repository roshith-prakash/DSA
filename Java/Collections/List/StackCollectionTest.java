package List;
import java.util.Stack;

public class StackCollectionTest {
    public static void main(String[] args) {

        // ✅ Use generics (better practice)
        Stack<Integer> stack = new Stack<>();

        //  push()
        stack.push(10);
        stack.push(20);
        stack.push(30);

        System.out.println("Initial Stack: " + stack);

        //  peek() - top element (no removal)
        System.out.println("Peek: " + stack.peek());

        //  pop() - removes top element
        System.out.println("Pop: " + stack.pop());

        System.out.println("After pop: " + stack);

        //  search() - position from top (1-based index)
        System.out.println("Search 20: " + stack.search(20));

        //  empty()
        System.out.println("Is empty? " + stack.empty());

        //  size()
        System.out.println("Size: " + stack.size());

        //  get() (inherited from Vector)
        System.out.println("Element at index 0: " + stack.get(0));

        //  add() (also inherited, not recommended for Stack logic but possible)
        stack.add(40);
        System.out.println("After add(): " + stack);

        //  remove()
        stack.remove(Integer.valueOf(10));
        System.out.println("After remove(): " + stack);

        //  iteration
        System.out.println("\nStack elements:");
        for (int i = 0; i < stack.size(); i++) {
            System.out.println(stack.get(i));
        }
    }
}