import java.util.Arrays;

// Given a matrix, find the max sum of a valid path.
// Constraint : we can move downward, left diagonally (left + down) or right diagonally (right + down).

public class MaxSumInDiagonalOrDownwardTraversal{
    static int[][] dp;

    static int maxSumforPath(int[][] arr,
                              int currentRow, int currentColumn,
                              int destinationRow, int destinationColumn) {

        int n = arr.length;
        int m = arr[0].length;

        // Out of bounds
        if (currentRow < 0 || currentColumn < 0 || currentRow >= n || currentColumn >= m) {
            return Integer.MIN_VALUE;
        }

        // Destination reached - return cell value.
        if (currentRow == destinationRow && currentColumn == destinationColumn) {
            return arr[currentRow][currentColumn];
        }

    
        // Check Memoized Value
        if (dp[currentRow][currentColumn] != Integer.MIN_VALUE) {
            return dp[currentRow][currentColumn];
        }

        // Check max values for all paths.
        int down = maxSumforPath(arr, currentRow + 1, currentColumn, destinationRow, destinationColumn);
        int left = maxSumforPath(arr, currentRow + 1, currentColumn - 1, destinationRow, destinationColumn);
        int right = maxSumforPath(arr, currentRow + 1, currentColumn + 1, destinationRow, destinationColumn);
        int best = Math.max(down, Math.max(left, right));

        // If no valid value exists, ensure that dp has invalid value.
        if (best == Integer.MIN_VALUE) {
            return dp[currentRow][currentColumn] = Integer.MIN_VALUE;
        }

        return dp[currentRow][currentColumn] = arr[currentRow][currentColumn] + best;
    }

    public static void main(String[] args) {

        int[][] arr = {
            {3, 6, 1},
            {2, 3, 4},
            {5, 5, 1}
        };

        int numberOfRows = arr.length;
        int numberOfColumns = arr[0].length;

        dp = new int[numberOfRows][numberOfColumns];
        for (int i = 0; i < numberOfRows; i++) {
            Arrays.fill(dp[i], Integer.MIN_VALUE);
        }

        System.out.println(maxSumforPath(arr, 0, 1, 2, 1));
    }
}