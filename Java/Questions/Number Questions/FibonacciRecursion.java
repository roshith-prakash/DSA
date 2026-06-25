public class FibonacciRecursion {

    static int fibonacci(int num) {
        if (num <= 1) {
            return num;
        }

        return fibonacci(num - 1) + fibonacci(num - 2);
    }

    public static void main(String[] args) {

        int terms = 10;

        System.out.println("Fibonacci Series:");

        for (int i = 0; i < terms; i++) {
            System.out.print(fibonacci(i) + " ");
        }
    }
}