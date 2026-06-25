// Max value in a singular branch.

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    public TreeNode(int value) {
        val = value;
    }
}

public class MaxPathSum {
    static void inorder(TreeNode root) {
        if (root == null) return;

        inorder(root.left);
        System.out.print(root.val + " ");
        inorder(root.right);
    }

    static int maxPathSum(TreeNode root) {
        if (root == null) {
            return 0;
        }

        int leftPathSum = root.val + maxPathSum(root.left);
        int rightPathSum = root.val + maxPathSum(root.right);

        return Math.max(leftPathSum, rightPathSum);
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

        //         1
        //       /   \
        //      3     2
        //     / \   / \
        //    7  6  5   4

        inorder(a);
        System.out.println();

        System.out.println(maxPathSum(a));
    }
}