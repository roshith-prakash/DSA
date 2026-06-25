import java.util.Arrays;

public class FibonacciDP {

    // DP array to store already computed Fibonacci values
    static int[] dp;
    
    static int fibo(int n){
        // Base case: Fibonacci of 0 is 0, and Fibonacci of 1 is 1
        if(n <= 1) return n;
        
        // If value is already computed, return it
        if(dp[n] != -1) return dp[n];

        // Recursive relation:
        // Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)
        int ans = fibo(n - 1) + fibo(n - 2);

        // Store computed result in dp array
        dp[n] = ans;

        // Return the computed Fibonacci value
        return ans;
    }
    
    public static void main(String[] args) {
        int n = 6;

        // Initialize DP array with size n+1
        dp = new int[n + 1];
        // Fill array with -1 to indicate "not computed yet"
        Arrays.fill(dp, -1);

        // Compute Fibonacci number at index n
        int result = fibo(n);
        // Print result
        System.out.println("6th Fibonacci Term : " + result);
    }    
}