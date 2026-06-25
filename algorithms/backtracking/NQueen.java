import java.util.ArrayList;

public class NQueen {

    static ArrayList<int[][]> solutions = new ArrayList<>();

    static void solve(int[][] board, int row, int n) {

        if (row == n) {

            int[][] solution = new int[n][n];

            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    solution[i][j] = board[i][j];
                }
            }

            solutions.add(solution);
            return;
        }

        for (int col = 0; col < n; col++) {

            if (isSafe(board, row, col, n)) {

                board[row][col] = 1;

                solve(board, row + 1, n);

                board[row][col] = 0; // backtrack
            }
        }
    }

    static boolean isSafe(int[][] board, int row, int col, int n) {

        // Column
        for (int i = 0; i < row; i++) {
            if (board[i][col] == 1)
                return false;
        }

        // Upper-left diagonal
        for (int i = row - 1, j = col - 1;
             i >= 0 && j >= 0;
             i--, j--) {

            if (board[i][j] == 1)
                return false;
        }

        // Upper-right diagonal
        for (int i = row - 1, j = col + 1;
             i >= 0 && j < n;
             i--, j++) {

            if (board[i][j] == 1)
                return false;
        }

        return true;
    }

    public static void main(String[] args) {

        int n = 4;
        int[][] board = new int[n][n];

        solve(board, 0, n);

        for (int[][] solution : solutions) {

            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    System.out.print(solution[i][j] + " ");
                }
                System.out.println();
            }

            System.out.println();
        }
    }
}