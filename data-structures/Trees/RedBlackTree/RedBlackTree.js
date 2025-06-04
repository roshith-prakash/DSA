// Red-Black Tree Node
class RBNode {
  constructor(value, color = "RED", left = null, right = null, parent = null) {
    this.value = value; // Node value
    this.color = color; // Node color: RED or BLACK
    this.left = left; // Left child
    this.right = right; // Right child
    this.parent = parent; // Parent reference
  }
}

// Red-Black Tree Class
class RBTree {
  constructor() {
    // Sentinel NIL node (used to simplify null checks and leaf management)
    this.NIL = new RBNode(null, "BLACK");
    this.root = this.NIL;
  }

  // Left Rotate:
  // Rotates the given node x to the left, maintaining the BST property
  //
  //    x                              y
  //     \                            / \
  //      y         =>               x   T3
  //     / \                            / \
  //    T2 T3                          T1 T2
  leftRotate(x) {
    let y = x.right;
    x.right = y.left;
    if (y.left !== this.NIL) y.left.parent = x;

    y.parent = x.parent;
    if (x.parent === null) this.root = y;
    else if (x === x.parent.left) x.parent.left = y;
    else x.parent.right = y;

    y.left = x;
    x.parent = y;
  }

  // Right Rotate:
  // Rotates the given node y to the right, maintaining the BST property
  //
  //        y                         x
  //       /                         / \
  //      x         =>             T1  y
  //     / \                           / \
  //    T1 T2                         T2 T3
  rightRotate(y) {
    let x = y.left;
    y.left = x.right;
    if (x.right !== this.NIL) x.right.parent = y;

    x.parent = y.parent;
    if (y.parent === null) this.root = x;
    else if (y === y.parent.left) y.parent.left = x;
    else y.parent.right = x;

    x.right = y;
    y.parent = x;
  }

  // Insert a node with a given value into the Red-Black Tree
  insert(value) {
    let newNode = new RBNode(value);
    newNode.left = newNode.right = this.NIL;

    let y = null;
    let x = this.root;

    // Standard BST insertion to find the correct spot
    while (x !== this.NIL) {
      y = x;
      if (value < x.value) x = x.left;
      else x = x.right;
    }

    newNode.parent = y;
    if (y === null) this.root = newNode;
    else if (value < y.value) y.left = newNode;
    else y.right = newNode;

    // Color the new node RED and fix any red-black violations
    newNode.color = "RED";
    this.fixInsert(newNode);
  }

  // Fix Red-Black Tree violations after insertion
  fixInsert(node) {
    // Fix until root is reached or no violation exists
    while (node !== this.root && node.parent.color === "RED") {
      // Parent is a left child
      if (node.parent === node.parent.parent.left) {
        let uncle = node.parent.parent.right;

        // Case 1: Uncle is RED -> Recolor and move up the tree
        if (uncle.color === "RED") {
          node.parent.color = "BLACK";
          uncle.color = "BLACK";
          node.parent.parent.color = "RED";
          node = node.parent.parent;
        } else {
          // Case 2: Node is right child -> Left rotate
          if (node === node.parent.right) {
            node = node.parent;
            this.leftRotate(node);
          }
          // Case 3: Node is left child -> Right rotate
          node.parent.color = "BLACK";
          node.parent.parent.color = "RED";
          this.rightRotate(node.parent.parent);
        }
      }
      // Parent is a right child (mirror case)
      else {
        let uncle = node.parent.parent.left;

        // Case 1: Uncle is RED -> Recolor and move up the tree
        if (uncle.color === "RED") {
          node.parent.color = "BLACK";
          uncle.color = "BLACK";
          node.parent.parent.color = "RED";
          node = node.parent.parent;
        } else {
          // Case 2: Node is left child -> Right rotate
          if (node === node.parent.left) {
            node = node.parent;
            this.rightRotate(node);
          }
          // Case 3: Node is right child -> Left rotate
          node.parent.color = "BLACK";
          node.parent.parent.color = "RED";
          this.leftRotate(node.parent.parent);
        }
      }
    }
    // Always ensure root is black
    this.root.color = "BLACK";
  }

  // InOrder traversal of Red-Black Tree
  // Prints values in sorted order along with their color
  inOrder(node = this.root) {
    if (node !== this.NIL) {
      this.inOrder(node.left);
      console.log({ value: node.value, color: node.color });
      this.inOrder(node.right);
    }
  }

  // Search for a node with a given value
  // Returns the node if found, else null
  search(node, value) {
    if (node === this.NIL || value === node.value) {
      return node === this.NIL ? null : node;
    }
    if (value < node.value) return this.search(node.left, value);
    return this.search(node.right, value);
  }
}

// Test the Red-Black Tree
const testRBTree = () => {
  const rbTree = new RBTree();

  // Insert nodes into the RB Tree
  rbTree.insert(10);
  rbTree.insert(20);
  rbTree.insert(30);
  rbTree.insert(15);
  rbTree.insert(25);
  rbTree.insert(5);
  rbTree.insert(1);

  // InOrder Traversal: Should print sorted values with colors
  console.log("\nInOrder Traversal after inserts:");
  rbTree.inOrder();

  // Search test
  console.log("\nSearch for 15:");
  console.log(rbTree.search(rbTree.root, 15));

  console.log("\nSearch for 99 (not present):");
  console.log(rbTree.search(rbTree.root, 99));
};

testRBTree();
