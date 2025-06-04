# Red-Black Tree (RBT)

A **Red-Black Tree (RBT)** is a type of self-balancing Binary Search Tree (BST) that ensures logarithmic time complexity for insertion, deletion, and lookup operations.

---

## 📌 Why Do We Need Red-Black Trees?

1. In a standard BST, operations like insert, delete, and search are O(h), where `h` is the height of the tree.
2. In the worst case (e.g., skewed trees), the height becomes O(n), degrading performance.
3. Red-Black Trees maintain a balanced structure and guarantee **O(log n)** height, ensuring efficient operations.

---

## 🌳 Red-Black Tree Properties

1. Each node is either **RED** or **BLACK**.
2. The **root** is always **BLACK**.
3. All **leaves (NIL or null nodes)** are considered **BLACK**.
4. If a node is **RED**, both its children must be **BLACK** (no two consecutive REDs).
5. Every path from a node to its descendant NIL nodes must contain the **same number of BLACK nodes**.

These properties keep the tree "balanced enough" without requiring strict balancing like AVL trees.

---

## 🔁 Rotations in Red-Black Trees

Rotations help restore tree balance after insertions and deletions.

- **Left Rotation** – Used to fix right-heavy imbalances.
- **Right Rotation** – Used to fix left-heavy imbalances.
- **Left-Right / Right-Left** – Applied through successive single rotations.

---

## 🔧 Balancing After Insertion

When a new node is inserted, it’s always colored **RED** initially. The balancing process involves:

1. **Case 1: Uncle is RED**

   - Recolor parent and uncle to **BLACK**
   - Recolor grandparent to **RED**
   - Move pointer up to grandparent and repeat

2. **Case 2: Uncle is BLACK and new node is a triangle (LR or RL)**

   - Perform rotation to straighten the tree

3. **Case 3: Uncle is BLACK and new node is a straight line (LL or RR)**
   - Perform single rotation
   - Recolor parent and grandparent

✅ Always ensure the **root remains BLACK** after rebalancing.

---

## ⚖️ AVL vs Red-Black Tree Comparison

| Feature            | AVL Tree                | Red-Black Tree            |
| ------------------ | ----------------------- | ------------------------- |
| Balance Strictness | Strictly balanced       | Loosely balanced          |
| Rotations          | More frequent           | Fewer (due to recoloring) |
| Insertion/Deletion | Slower                  | Faster                    |
| Lookup/Search      | Faster (tighter height) | Slightly slower           |
| Best Use Case      | Read-heavy operations   | Write-heavy operations    |

---

## 📚 Summary

- Red-Black Tree maintains **balanced height** with a **combination of rotations and recoloring**.
- Guarantees **logarithmic performance** for all major BST operations.
- More efficient for applications where frequent insertions and deletions are expected.

---
