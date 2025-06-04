## 🧠 HashMap / Hash Table

A **HashMap** (or Hash Table) is a data structure that maps keys to values for highly efficient lookup.

### 📌 Key Concepts:

- **Key-Value Pairs**: Each element stored is a combination of a key and its corresponding value.
- **Hash Function**: Converts a key into a hash code (an index in the internal array).
- **Buckets**: Used to handle **collisions** (when two keys hash to the same index).
- **Average Time Complexity**:

  - Insert: `O(1)`
  - Search: `O(1)`
  - Delete: `O(1)`
  - Worst case: `O(n)` (when all keys land in the same bucket)

### ⚙️ Collision Handling Methods:

- **Separate Chaining**: Use linked lists (or arrays) at each index to store multiple items.
- **Open Addressing**: Find next available slot using techniques like:

  - Linear Probing
  - Quadratic Probing
  - Double Hashing

---

## 🧮 Internal Representation:

### If using Separate Chaining:

```plaintext
buckets[index] = [[key1, value1], [key2, value2], ...]
```

### Hashing Formula (Example):

```js
index = hash(key) % arraySize;
```

---

## 🧪 Operations:

| Operation   | Description                               |
| ----------- | ----------------------------------------- |
| `set(k, v)` | Inserts or updates key `k` with value `v` |
| `get(k)`    | Returns the value for key `k`             |
| `delete(k)` | Removes key `k` from the map              |
| `has(k)`    | Returns `true` if key exists              |
| `keys()`    | Returns a list of all keys                |

---

## 💡 Common HashMap Problems:

<ol>
    <li>Two Sum</li>
    <li>Group Anagrams</li>
    <li>Longest Consecutive Sequence</li>
    <li>Subarray Sum Equals K</li>
    <li>Top K Frequent Elements</li>
    <li>Find Duplicate in Array</li>
    <li>Valid Anagram</li>
    <li>First Unique Character in a String</li>
    <li>Check Isomorphic Strings</li>
    <li>Find All Duplicates in an Array</li>
</ol>

---

## ⚠️ Edge Cases and Pitfalls:

- **Key Collision**: Poor hash functions lead to many collisions → degraded performance.
- **Mutable Keys**: Don’t use mutable types (like lists) as keys.
- **Load Factor**: When load exceeds a threshold (usually 0.75), the table is resized to maintain performance.
