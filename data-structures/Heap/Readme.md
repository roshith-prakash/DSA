Heap is a Complete Binary Tree that comes with a heap order property.

    (Complete Binary Tree : All levels are completely filled (except possibly the last level) + last level (if incomplete) is left aligned.)

**Min Heap** : All children must be larger than parent (min at top -> max at bottom)

**Max Heap** : All children must be smaller than parent (max at top -> min at bottom)

**Heap uses 1 based indexing** (0th index not considered.)

    Array representation : 

        Node : i-th index
        Left child : 2i index
        Right child : 2i + 1 index
        parent : (i/2) index