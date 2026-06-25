// Given a prefix, show all words which have that prefix.
import java.util.ArrayList;

class Node{
    char data;
    Node[] children;
    boolean isEndOfWord;

    public Node(char data){
        this.data = data;
        this.children = new Node[26];
        this.isEndOfWord = false;
    }
}

class Trie{
    Node root;

    // Create a blank root node
    public Trie() {
        this.root = new Node('\0');
    }

    void insertUtil(Node root, String word){
        // Entire word has been added 
        if(word.length() == 0){
            root.isEndOfWord = true;
            return;
        }

        // Find first character of string
        char ch = word.charAt(0);
        // Find alphabetical number of character (a=0, b=1, ...)
        int index = ch - 'a';

        // If child doesnt exist, create new child
        if(root.children[index] == null){
            root.children[index] = new Node(ch);
        }

        // Move to next node and remove first character from word
        insertUtil(root.children[index], word.substring(1));
    }

    void insertWord(String word){
        insertUtil(root, word.toLowerCase());
    }

    boolean searchUtil(Node root, String word){
        // If word has been found, and it was added(terminal node), then return true
        // else return false.
        if(word.length() == 0){
            return root.isEndOfWord;
        }

         // Find first character of string
        char ch = word.charAt(0);
        // Find alphabetical number of character (a=0, b=1, ...)
        int index = ch - 'a';

        // If current character doesnt exist - return false
        if(root.children[index] == null){
            return false;
        }

        // Remove first letter and search
        return searchUtil(root.children[index], word.substring(1));
    }

    boolean search(String word){
        return searchUtil(root, word.toLowerCase());
    }

    boolean startsWithUtil(Node root, String word){
        if(word.length() == 0){
            return true;
        }

        char ch = word.charAt(0);
        int index = ch - 'a';

        if(root.children[index] == null){
            return false;
        }

        return startsWithUtil(root.children[index], word.substring(1));
    }
    

    boolean startsWith(String word){
        return startsWithUtil(root, word.toLowerCase());
    }
}

public class PhoneDirectory {
    
    static void getSuggestions(Node curr, String prefix, ArrayList<String> res) {
        // Terminal node is found - add word to list
        if (curr.isEndOfWord) {
            res.add(prefix);
        }

        // Check for all possible children.
        for (int i = 0; i < 26; i++) {
            if (curr.children[i] != null) {
                // Add current character to prefix in order to build the string.
                getSuggestions(curr.children[i], prefix + (char)('a' + i), res);
            }
        }
    }

    public static void main(String[] args) {
        String[] strings = {"geeksforgeeks","geeks","geek","geezer"};
        
        Trie trie = new Trie();
        for(String word : strings){
            trie.insertWord(word);
        }

        ArrayList<String> possibleWords = new ArrayList<>();
        String prefix = "gee";

        Node temp = trie.root;
        boolean found = true;

        // Traverse to prefix node
        for(int i = 0; i < prefix.length(); i++){
            char ch = prefix.charAt(i);
            int index = ch - 'a';

            if(temp.children[index] == null){
                found = false;
                break; // Prefix not found
            }

            temp = temp.children[index];
        }

        if(found){
            getSuggestions(temp, prefix, possibleWords);
        }

        System.out.println("Suggestions for prefix \"" + prefix + "\": " + possibleWords);
    }
}
