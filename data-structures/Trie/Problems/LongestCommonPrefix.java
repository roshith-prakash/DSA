class Node{
    char data;
    Node[] children;
    boolean isEndOfWord;
    int childrenCount;

    public Node(char data){
        this.data = data;
        this.children = new Node[26];
        this.isEndOfWord = false;
        this.childrenCount = 0;
    }
}

class Trie{
    Node root;

    public Trie() {
        this.root = new Node('\0');
    }

    void insertUtil(Node root, String word){
        if(word.length() == 0){
            root.isEndOfWord = true;
            return;
        }

        char ch = word.charAt(0);
        int index = ch - 'a';

        if(root.children[index] == null){
            root.children[index] = new Node(ch);
            root.childrenCount++;
        }
        
        insertUtil(root.children[index], word.substring(1));
    }

    void insertWord(String word){
        insertUtil(root, word.toLowerCase());
    }
}

public class LongestCommonPrefix {
    public static void main(String[] args) {
        String[] strings = {"flower","flow","flight"};
        
        Trie trie = new Trie();
        for(String word : strings){
            trie.insertWord(word);
        }

        StringBuilder longestPrefix = new StringBuilder();
        Node root = trie.root;
        String checker = strings[0];

        for (int i = 0; i < checker.length(); i++) {
            char ch = checker.charAt(i);
            int index = ch - 'a';

            // Only one child should exist (Common Prefix)
            // Should not be end of word (If end of word, prefix ended)
            // Child should exist
            // Note : root is the previous character
            if (root.childrenCount == 1 && !root.isEndOfWord && root.children[index] != null) {
                longestPrefix.append(ch);
                root = root.children[index];
            } else {
                break;
            }
        }

        System.out.println("Longest Common Prefix: " + longestPrefix.toString());
    }
}
