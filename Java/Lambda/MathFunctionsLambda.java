@FunctionalInterface
interface NumberInterface {
    int calculate(int a, int b);
}

public class MathFunctionsLambda {
    public static void main(String[] args) {

        int num1 = 10;
        int num2 = 6;

        NumberInterface add = (a, b) -> a + b;
        NumberInterface subtract = (a, b) -> a - b;
        NumberInterface multiply = (a, b) -> a * b;
        NumberInterface divide = (a, b) -> a / b;
        NumberInterface remainder = (a, b) -> a % b;

        System.out.println(add.calculate(num1, num2));
        System.out.println(subtract.calculate(num1, num2));
        System.out.println(multiply.calculate(num1, num2));
        System.out.println(divide.calculate(num1, num2));
        System.out.println(remainder.calculate(num1, num2));
    }
}