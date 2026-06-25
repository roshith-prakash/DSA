// Basically we are mirroring the binary tree - the left child of the tree should become the right child and vice versa.
// Use swapping logic to swap the direct children, then recursively call the function for the children.

class TreeNode{
    int val;
    TreeNode left;
    TreeNode right;

    public TreeNode(int value){
        val = value;
    }
}

public class InvertBinaryTree{
    
    static void inorder(TreeNode root){
        if(root == null) return;

        inorder(root.left);
        System.out.print(root.val+ " ");
        inorder(root.right);
    }

    static TreeNode invert(TreeNode root){
        if(root == null) return null;

        TreeNode temp = root.left;
        root.left = root.right;
        root.right = temp;

        invert(root.left);
        invert(root.right);

        return root;
    }
                     
    public static void main(String[] args) {
        TreeNode a = new TreeNode(1);
        TreeNode b = new TreeNode(3);
        TreeNode c = new TreeNode(2);
        TreeNode d = new TreeNode(7);
        TreeNode e = new TreeNode(6);
        TreeNode f = new TreeNode(5);
        TreeNode g = new TreeNode(4);

        a.left = b;
        a.right = c;

        b.left = d;
        b.right = e;

        c.left = f;
        c.right = g;

        System.out.println("Before inverting : ");
        //         1
        //       /   \
        //      3      2
        //     / \    / \
        //    7   6  5   4
        inorder(a);

        invert(a);

        System.out.println("\nAfter inverting : ");
        //         1
        //       /    \
        //      2      3
        //     / \    / \
        //    4   5  6   7
        inorder(a);
    }
}