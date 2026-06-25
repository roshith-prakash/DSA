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

    void removeWordUtil(Node root, String word){
        // To remove word, we simply change the terminal node to 
        if(word.length() == 0){
            System.out.println("Removed Word.");
            root.isEndOfWord = false;
            return;
        }

        char ch = word.charAt(0);
        int index = ch - 'a';

        if(root.children[index] == null){
            System.out.println("Word does not exist.");
        }

        removeWordUtil(root.children[index], word.substring(1)); 
    }

    void removeWord(String word){
        removeWordUtil(root, word.toLowerCase());
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

public class TrieClass{
    public static void main(String[] args) {
        Trie trie = new Trie();
        trie.insertWord("hello");
        trie.insertWord("world");
    
        System.out.println("Searching hello : "+ trie.search("hello"));
        System.out.println("Searching hell : "+ trie.search("hell"));
        trie.removeWord("hello");
        System.out.println("Searching hello (After removing): "+ trie.search("hello"));
        System.out.println("Prefix wor : "+ trie.startsWith("wor"));
    }
}