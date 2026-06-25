# Trie (Prefix Tree)

A **Trie**, also known as a prefix tree or digital tree, is a specialized tree data structure used to store an associative array or a dynamic set where the keys are usually strings. Unlike a binary search tree, no node in the tree stores the key associated with that node; instead, its position in the tree defines the key with which it is associated.

## Properties of a Trie
1. **Root Node:** The root node represents an empty string.
2. **Edges:** Each edge represents a single character.
3. **Nodes:** Each node (except the root) stores a character or part of the key.
4. **Path:** Any path from the root to a node represents a prefix of words stored in the Trie.
5. **End of Word:** Nodes typically contain a boolean flag indicating if the path from the root up to that node constitutes a valid word or just a prefix.

## Basic Operations & Time Complexity

Let `M` be the length of the string (or key) being processed.

| Operation | Description | Time Complexity |
| :--- | :--- | :--- |
| **Insert** | Inserts a word into the Trie character by character. | `O(M)` |
| **Search** | Checks if a complete word exists in the Trie. | `O(M)` |
| **Prefix Search** | Checks if there is any word in the Trie that starts with a given prefix. | `O(M)` |
| **Delete** | Removes a word from the Trie without breaking common prefixes. | `O(M)` |

## Use Cases
Tries are highly efficient for tasks involving strings and prefixes:
*   **Autocomplete / Typeahead suggestions:** Providing word suggestions based on a typed prefix.
*   **Spell Checkers:** Efficiently storing a dictionary and validating words.
*   **IP Routing (Longest Prefix Matching):** Used in routers to find the longest matching prefix for IP addresses.
*   **Word Games:** Used in games like Boggle to quickly find all valid words on a board.

## Space Complexity
The space complexity of a Trie is `O(ALPHABET_SIZE * M * N)`, where `ALPHABET_SIZE` is the number of possible characters (e.g., 26 for lowercase English letters), `M` is the average length of a word, and `N` is the number of words in the Trie. While it takes more space than a hash table, it optimizes prefix search scenarios tremendously.


## Problems
1. Longest Common Prefix
1. Phone Directory