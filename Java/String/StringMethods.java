public class StringMethods {
    public static void main(String[] args) {

        String s = "  Java Programming  ";

        System.out.println("Length: " + s.length());
        System.out.println("charAt(2): " + s.charAt(2));
        System.out.println("isEmpty(): " + s.isEmpty());
        System.out.println("isBlank(): " + s.isBlank());

        System.out.println("equals: " + "java".equals("Java"));
        System.out.println("equalsIgnoreCase: " + "java".equalsIgnoreCase("Java"));
        System.out.println("compareTo: " + "abc".compareTo("abd"));

        System.out.println("contains: " + s.contains("Java"));
        System.out.println("startsWith: " + s.trim().startsWith("Java"));
        System.out.println("endsWith: " + s.trim().endsWith("ming"));
        System.out.println("indexOf: " + s.indexOf('a'));
        System.out.println("lastIndexOf: " + s.lastIndexOf('a'));

        System.out.println("substring: " + s.substring(2, 6));

        System.out.println("concat: " + "Hello".concat(" World"));
        System.out.println("replace: " + "banana".replace('a', 'o'));
        System.out.println("toLowerCase: " + s.toLowerCase());
        System.out.println("toUpperCase: " + s.toUpperCase());
        System.out.println("trim: '" + s.trim() + "'");

        String csv = "a,b,c";
        String[] arr = csv.split(",");
        System.out.println("split:");
        for (String str : arr) {
            System.out.println(str);
        }
        System.out.println("join: " + String.join("-", arr));

        System.out.println("valueOf: " + String.valueOf(100));
        char[] chars = "hello".toCharArray();
        System.out.println("toCharArray: " + chars[0] + "," + chars[1]);

        String a = new String("hello").intern();
        String b = "hello";
        System.out.println("intern check: " + (a == b));

        // Format
        System.out.println(String.format("My name is %s and age is %d", "John", 25));
    }
}