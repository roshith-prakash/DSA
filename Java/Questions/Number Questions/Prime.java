public class Prime {

    static boolean isPrime(int num){

        if(num<=1){
            return false;
        }
        
        if(num == 2 || num == 3){
            return true;
        }
        
        for(int i = 4; i < (num/2 + 1) ; i++){
            if(num % i == 0){
                return false;
            }
        }

        return true;
    }


    public static void main(String[] args) {
        int num = 109;

        boolean prime = isPrime(num);

        if(prime){
            System.out.println("Number is a Prime Number");
        }else{
            System.out.println("Number is NOT a Prime Number");
        }

        int temp = num;
        temp++;

        int nextPrime;
        int prevPrime = 0;
        boolean prevPrimeExists = false;

        while(true){
            if(isPrime(temp)){
                nextPrime = temp;
                break;
            }else{
                temp++;
            }
        }

        temp = num;
        temp--;

        while(temp > 1){
            if(isPrime(temp)){
                prevPrime = temp;
                prevPrimeExists = true;
                break;
            }else{
                temp--;
            }
        }

        System.out.println("Next Prime Number: "+nextPrime);

        if(prevPrimeExists){
            System.out.println("Previous Prime Number: " + prevPrime);
        }else{
            System.out.println("Previous Prime Number does not exist.");
        }
    }   
}
