// Max number of edges possible in a line across both branches
// here : 8 -> 7 -> 3 -> 1 -> 2 -> 4

class TreeNode {
    int val;
    TreeNode left, right;

    TreeNode(int value) {
        val = value;
    }
}

public class DiameterBinaryTree {

    static int diameter = 0;

    static int height(TreeNode root) {
        if (root == null)
            return 0;

        int left = height(root.left);
        int right = height(root.right);

        diameter = Math.max(diameter, left + right);

        return 1 + Math.max(left, right);
    }

    static int diameterOfBinaryTree(TreeNode root) {
        diameter = 0;
        height(root);
        return diameter;
    }

    public static void main(String[] args) {

        TreeNode a = new TreeNode(1);
        TreeNode b = new TreeNode(3);
        TreeNode c = new TreeNode(2);
        TreeNode d = new TreeNode(7);
        TreeNode e = new TreeNode(6);
        TreeNode f = new TreeNode(5);
        TreeNode g = new TreeNode(4);
        TreeNode h = new TreeNode(8);

        a.left = b;
        a.right = c;

        b.left = d;
        b.right = e;

        c.left = f;
        c.right = g;

        d.left = h;

        //         1
        //       /   \
        //      3     2
        //     / \   / \
        //    7  6  5   4
        //   /
        //  8

        System.out.println(diameterOfBinaryTree(a));
    }
}