import java.util.Arrays;

// Given a matrix with a starting position and a destination, find the number of paths possible.
// Constraint : we can only move to the right or down from the current position.
public class NumberOfPathsinMatrix {
    static int[][] dp;
    
    static int numberOfPaths(int currentRow,int currentColumn, int destinationRow, int destinationColumn){
        
        // If destination is reached, we can add another valid path
        if(currentRow == destinationRow && currentColumn == destinationColumn){
            return 1;
        }

        // Going out of bounds - invalid path
        if(currentRow > destinationRow || currentColumn > destinationColumn){
            return 0;
        }

        // If value was already computed, return it.
        if(dp[currentRow][currentColumn] != -1){
            return dp[currentRow][currentColumn];
        }
        
        // Find the max number of paths from the current position.
        dp[currentRow][currentColumn] = 
            numberOfPaths(currentRow, currentColumn+1, destinationRow, destinationColumn) 
            + numberOfPaths(currentRow+1, currentColumn, destinationRow, destinationColumn);

        // Return max number of paths from current position.
        return dp[currentRow][currentColumn];
    }

    public static void main(String[] args) {

        int destinationRow=3;
        int destinationColumn=3;

        dp = new int[destinationRow+1][destinationColumn+1];
        
        for (int i = 0; i < dp.length; i++) {
            Arrays.fill(dp[i], -1);
        }

        System.out.println(numberOfPaths(0, 0, destinationRow, destinationColumn));
    }    
}
