
import java.util.Arrays;

// If a thief steals money from one room, then they cannot steal it from its adjacent rooms.
// Maximize the Amount of money stolen.

public class AdjacentRooms {
    static int[] dp;
    
    static int maximizeStolenAmount(int[] rooms, int currentRoom){
        // Base case - no more room -> no more value.
        if(currentRoom >= rooms.length){
            return 0;
        }

        // If stored value already exists, use it.
        if(dp[currentRoom] != -1){
            return dp[currentRoom];
        }

        // For the current room, check whether its better to steal this room or skip this room.
        dp[currentRoom] = Math.max(
            // Choosing Current room (Skips neigbour)
            rooms[currentRoom] + maximizeStolenAmount(rooms, currentRoom + 2), 
            // Skipping current room
            maximizeStolenAmount(rooms, currentRoom+1));

        // Return computed value.
        return dp[currentRoom];
    }
    
    public static void main(String[] args) {
        int[] rooms = {4,6,3,2};
        dp = new int[rooms.length + 1];
        Arrays.fill(dp, -1);
        System.out.println("Max Possible Amount : " + maximizeStolenAmount(rooms, 0));
    }    
}
