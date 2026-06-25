public class SumofNaturalNumbers {
    static int sumofnumbers(int num){
        if(num<=1){
            return 1;
        }

        return num + sumofnumbers(num-1);
    }
    
    public static void main(String[] args) {
        System.out.println("Sum of first 10 natural numbers : "+ sumofnumbers(10));
    }
}