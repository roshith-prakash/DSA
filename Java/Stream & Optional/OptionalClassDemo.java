import java.util.Optional;

public class OptionalClassDemo {
    public static void main(String[] args) {

        String name = "Priya";

        // Create Optional object
        Optional<String> optionalName = Optional.ofNullable(name);

        // Check value present
        if (optionalName.isPresent()) {
            System.out.println("Value: " + optionalName.get());
        }

        // Using ifPresent()
        optionalName.ifPresent(n -> System.out.println("Hello " + n));

        // Default value if null
        String result = optionalName.orElse("Default Name");
        System.out.println(result);
    }
}