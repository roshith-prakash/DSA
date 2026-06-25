// Max number of edges possible in a line across both branches
// here : 8 -> 7 -> 3 -> 1 -> 2 -> 4

class TreeNode {
    int val;
    TreeNode left, right;

    TreeNode(int value) {
        val = value;
    }
}

public class CheckTwoTreesSame {

static boolean checkSame(TreeNode root1, TreeNode root2){

    if (root1 == null && root2 == null) {
        return true;
    }

    if (root1 == null || root2 == null) {
        return false;
    }

    if (root1.val != root2.val) {
        return false;
    }

    return checkSame(root1.left, root2.left) &&
           checkSame(root1.right, root2.right);
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


        TreeNode a1 = new TreeNode(1);
        TreeNode b1 = new TreeNode(3);
        TreeNode c1 = new TreeNode(2);
        TreeNode d1 = new TreeNode(7);
        TreeNode e1 = new TreeNode(6);
        TreeNode f1 = new TreeNode(5);
        TreeNode g1 = new TreeNode(4);

        a1.left = b1;
        a1.right = c1;

        b1.left = d1;
        b1.right = e1;

        c1.left = f1;
        c1.right = g1;


        //         1
        //       /   \
        //      3     2
        //     / \   / \
        //    7  6  5   4
 

        System.out.println(checkSame(a,a1));
    }
}