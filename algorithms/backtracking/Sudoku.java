public class Sudoku {
    public static void main(String[] args) {
        int[][] board = {
            {5, 3, 0, 0, 7, 0, 0, 0, 0},
            {6, 0, 0, 1, 9, 5, 0, 0, 0},
            {0, 9, 8, 0, 0, 0, 0, 6, 0},
            {8, 0, 0, 0, 6, 0, 0, 0, 3},
            {4, 0, 0, 8, 0, 3, 0, 0, 1},
            {7, 0, 0, 0, 2, 0, 0, 0, 6},
            {0, 6, 0, 0, 0, 0, 2, 8, 0},
            {0, 0, 0, 4, 1, 9, 0, 0, 5},
            {0, 0, 0, 0, 8, 0, 0, 7, 9}
        };
        
        solve(board);
        printBoard(board);
    }
    
    public static boolean solve(int[][] board) {
        // Loop through all rows
        for(int row = 0; row<9; row++){
            // Loop through all columns
            for(int col = 0; col<9; col++){

                // Check if empty space in board
                if(board[row][col] == 0){

                    // Try all possible values for space (1-9)
                    for (int val = 1; val <= 9; val++) {

                        // If value is safe to add
                        if(isSafe(board, row, col, val)){
                            board[row][col] = val;

                            // Check if solution is possible by adding that value
                            boolean isSolutionPossible = solve(board);
                            if(isSolutionPossible){
                                return true;
                            }else{
                                // If solution wasnt possible by that value, then reset value
                                board[row][col] = 0;
                            }
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    static boolean isSafe(int[][] board, int row, int col, int val){
        // To check row & column
        for(int i=0; i<9; i++){
            // Check value in row
            if(board[row][i] == val) return false;

            // Check value in column
            if(board[i][col] == val) return false;
        }       


        // To check 3*3 Matrix
        int startRow = row - row % 3;
        int startCol = col - col % 3;
        
        for(int i = startRow; i < startRow + 3; i++) {
            for(int j = startCol; j < startCol + 3; j++) {
                if(board[i][j] == val) {
                    return false;
                }
            }
        }
        
        return true;
    }
    
    public static void printBoard(int[][] board) {
        for(int[] row : board){
            for(int val : row){
                System.out.print(val + " ");
            }
            System.out.println();
        }
    }
}
