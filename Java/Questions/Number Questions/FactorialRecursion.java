public class FactorialRecursion {
    static int factorial(int num){
        if(num<=1){
            return 1;
        }

        return num * factorial(num-1);
    }
    
    public static void main(String[] args) {
        System.out.println("Factorial of 5 : "+ factorial(5));
    }
}