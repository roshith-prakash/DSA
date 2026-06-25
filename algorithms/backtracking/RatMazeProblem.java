import java.util.ArrayList;
import java.util.Arrays;

public class RatMazeProblem{
    static void findPaths(ArrayList<ArrayList<Integer>> maze, int[][] visited, int currentRow, int currentColumn, int targetRow, int targetColumn, String path, ArrayList<String> paths){

        // Invalid square reached / Out of bounds
        if(currentRow < 0 || currentRow >= maze.size() || currentColumn < 0 || currentColumn >= maze.get(0).size() || visited[currentRow][currentColumn] == 1 || maze.get(currentRow).get(currentColumn) == 0){
            return;
        }

        // Valid path found to destination
        if(currentRow == targetRow && currentColumn == targetColumn){
            paths.add(path);
            return;
        }

        // Set current square as visited
        visited[currentRow][currentColumn] = 1;
        
        //Down
        findPaths(maze, visited, currentRow + 1, currentColumn, targetRow, targetColumn, path + "D", paths);
        //Left
        findPaths(maze, visited, currentRow, currentColumn - 1, targetRow, targetColumn, path + "L", paths);
        //Right
        findPaths(maze, visited, currentRow, currentColumn + 1, targetRow, targetColumn, path + "R", paths);
        //Up
        findPaths(maze, visited, currentRow - 1, currentColumn, targetRow, targetColumn, path + "U", paths);

        // Reset value to Backtrack (check alternate path)
        visited[currentRow][currentColumn] = 0;
    }

    public static void main(String[] args) {
        ArrayList<ArrayList<Integer>> maze = new ArrayList<>();
        maze.add(new ArrayList<>(Arrays.asList(1, 0, 0, 0)));
        maze.add(new ArrayList<>(Arrays.asList(1, 1, 0, 0)));
        maze.add(new ArrayList<>(Arrays.asList(1, 1, 1, 0)));
        maze.add(new ArrayList<>(Arrays.asList(0, 1, 1, 1)));
    
        int[][] visited = new int[maze.size()][maze.get(0).size()];
        
        for(int i = 0; i < maze.size(); i++){
            for(int j = 0; j < maze.get(i).size(); j++){
                visited[i][j] = 0;
            }
        }

        ArrayList<String> paths = new ArrayList<>();

        findPaths(maze, visited, 0, 0, 3, 3, "", paths);

        System.out.println(paths);
    }
}