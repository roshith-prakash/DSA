public class PalindromeNumber {

    static boolean isPalindrome(int num){
        int temp = num;
        int reversed = 0;

        while(temp > 0){
            int digit = temp%10;
            reversed = reversed*10 + digit;
            temp = temp/10;
        }

        if(reversed == num){
            return true;
        }else{
            return false;
        }
    }


    public static void main(String[] args) {
        int num = 121;

        boolean palindrome = isPalindrome(num);

        if(palindrome){
            System.out.println("Number is a Palindrome");
        }else{
            System.out.println("Number is NOT a Palindrome");
        }

        int temp = num;
        temp++;
        int nextPalindrome;
        int prevPalindrome = 0;
        boolean prevPalindromeExists = false;

        while(true){
            if(isPalindrome(temp)){
                nextPalindrome = temp;
                break;
            }else{
                temp++;
            }
        }

        temp = num;
        temp--;

        while(temp > 0){
            if(isPalindrome(temp)){
                prevPalindrome = temp;
                prevPalindromeExists = true;
                break;
            }else{
                temp--;
            }
        }

        System.out.println("Next Palindrome: "+nextPalindrome);

        if(prevPalindromeExists){
            System.out.println("Previous Palindrome: " + prevPalindrome);
        }else{
            System.out.println("Previous Palindrome does not exist.");
        }
    }   
}
