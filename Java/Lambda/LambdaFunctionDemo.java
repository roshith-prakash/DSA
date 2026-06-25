@FunctionalInterface
interface StringCheck {
    boolean check(String str);
}

public class LambdaFunctionDemo {
    public static void main(String[] args) {

        String[] names = {"Peter", "John", "Paul", "Alice", "Priya", "David"};

        // Custom lambda expression
        StringCheck startsWithP = str -> str.startsWith("P");

        // Print strings starting with P
        for (String name : names) {
            if (startsWithP.check(name)) {
                System.out.println(name);
            }
        }
    }
}