AVL is a type of self balancing BST tree.

Why do we need AVL?
<ol>
    <li>Most Operations in BST are of order O(h), where h is the height of the tree.</li>
    <li>In a skewed BST, height of BST can reach as high as n, where n is number of nodes.</li>
    <li>
    An AVL tree guarantees an upper bound of O(log n) for all operations.</li>
</ol>

AVL Tree properties:
<ol>
    <li>AVL is a height balanced BST.</li>
    <li>The Height difference between height of left subtree and right subtree for every node is less than or equal to 1.</li>
    <li>
    Balance Factor = Height of right subtree - Height of left subtree
    </li>
    <li>
    Balance Factor must be -1, 0 or 1 for all nodes in a AVL tree.
    </li>
</ol>


Rotations in AVL : 
<ol>
    <li>LL Rotation (Adding node to left of left) - Rotate clockwise</li>
    <li>RR Rotation (Adding node to right of right) - Rotate anti-clockwise</li>
    <li>LR Rotation (Adding node to right of left ) - Rotate anti-clockwise then clockwise</li>
    <li>RL Rotation (Adding node to left of right) - Rotate clockwise then anti-clockwise</li></li>
</ol>

<b>IMPORTANT</b>
Balancing a AVL Tree after insertion : 
<ol>
    <li>For LL insertion : Right rotate once wrt first imbalanced node.</li>
    <li>For RR insertion : Left rotate once wrt first imbalanced node.
    </li>
    <li>For LR insertion : Left rotate once & then right rotate once.
    </li>
    <li>For RL insertions : Right rotate once & then left rotate once.
    </li>
</ol>