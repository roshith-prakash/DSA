import java.util.Optional;

public class OptionalString {

    public static Optional<String> getName(String str) {
        return Optional.ofNullable(str);
    }

    public static void main(String[] args) {

        String[] names = {
            "Roshith",
            null,
            "Java",
            null,
            "Spring",
            "OpenAI",
            null,
            "Developer",
            null,
            "Optional"
        };

        for (String value : names) {

            Optional<String> name = getName(value);

            name.ifPresentOrElse(
                System.out::println,
                () -> System.out.println("Null Value")              
            );

            System.out.println(
                name.map(String::length)
                    .orElse(0)
            );
        }
    }
}