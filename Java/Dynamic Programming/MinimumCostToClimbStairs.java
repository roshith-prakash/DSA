// Given a staircase, each stair has some associated cost.
// You can either climb 1 stair or 2 stairs at a time.
// Find the cheapest possible way to reach the top.

import java.util.Arrays;

public class MinimumCostToClimbStairs {
    static int[] dp;
    
    static int minimizeClimbingCost(int[] stairs, int currentStair){
        // Base case - no more room -> no more value.
        if(currentStair >= stairs.length){
            return 0;
        }

        // If stored value already exists, use it.
        if(dp[currentStair] != -1){
            return dp[currentStair];
        }

        dp[currentStair] = Math.min(
            stairs[currentStair] + minimizeClimbingCost(stairs, currentStair + 1), 
            stairs[currentStair] + minimizeClimbingCost(stairs, currentStair + 2));

        // Return computed value.
        return dp[currentStair];
    }
    
    public static void main(String[] args) {
        // int[] stairs = {10,20,2,5};
        int[] stairs = {1, 100, 1, 1, 1, 100, 1, 1, 100, 1};

        dp = new int[stairs.length + 1];
        Arrays.fill(dp, -1);
        System.out.println("Minimum Cost to Climb Stairs : " + minimizeClimbingCost(stairs, 0));
    }    
}
