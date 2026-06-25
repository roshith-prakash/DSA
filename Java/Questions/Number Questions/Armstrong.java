public class Armstrong{

    static void isArmstrong(int num){
        int numberOfDigits = 0;
        int sum = 0;

        int temp = num;

        while(temp > 0){
            numberOfDigits++;
            temp = temp/10;
        }

        temp = num;
        
        while (temp > 0) { 
            int digit = temp%10;
            sum += Math.pow(digit, numberOfDigits);
            temp = temp/10; 
        }

        if(sum == num){
            System.out.println("Armstrong number");
        }else{
            System.out.println("NOT an Armstrong number");
        }
    }

    public static void main(String[] args){
        int num = 1634;

        isArmstrong(num);
    }
}