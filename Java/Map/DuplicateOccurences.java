// Java program to find repeated characters in a String.

import java.util.HashMap;
import java.util.Map;

public class DuplicateOccurences {
    public static void main(String[] args) {
        HashMap<Character, Integer> occurences = new HashMap<>();

        String s = "Roshith Prakash";
        s = s.toLowerCase();

        char[] characters = s.toCharArray();

        for(char c: characters){
            if(c != ' '){
                if(occurences.containsKey(c)){
                    occurences.put(c, occurences.get(c) + 1);
                }else{
                    occurences.put(c,1);
                }
            }
        }

        System.out.println("Repeated Characters : ");
        for(Map.Entry<Character, Integer> entry: occurences.entrySet()){
            if(entry.getValue() > 1){
                System.out.println(entry.getKey() + " repeated " + entry.getValue() + " times.");
            }
        }
    }    
}
