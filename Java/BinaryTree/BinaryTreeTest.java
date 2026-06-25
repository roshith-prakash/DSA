class TreeNode{
    int val;
    TreeNode left;
    TreeNode right;

    public TreeNode(int value){
        val = value;
    }
}

public class BinaryTreeTest{
    
    static void preorder(TreeNode root){
        if(root == null) return;

        System.out.print(root.val+ " ");

        preorder(root.left);
        preorder(root.right);
    }

    static void inorder(TreeNode root){
        if(root == null) return;

        inorder(root.left);
        System.out.print(root.val+ " ");
        inorder(root.right);
    }

    static void postorder(TreeNode root){
        if(root == null) return;

        postorder(root.left);
        postorder(root.right);
        System.out.print(root.val+ " ");
    }

    static int findSize(TreeNode root){
        if(root == null) return 0;

        return 1 + findSize(root.left) + findSize(root.right);
    }

    static int findSum(TreeNode root){
        if(root == null) return 0;

        return root.val + findSum(root.left) + findSum(root.right);
    }

    static int findProduct(TreeNode root){
        if(root == null) return 1;

        return root.val * findProduct(root.left) * findProduct(root.right);
    }

    static int findHeight(TreeNode root) {
        if (root == null) return 0;

        return 1 + Math.max(findHeight(root.left), findHeight(root.right));
    }
   
    static int findMax(TreeNode root){
        if(root == null){ return Integer.MIN_VALUE;}

        return Math.max(root.val, Math.max(findMax(root.left), findMax(root.right)));
    }

    static int findMin(TreeNode root){
        if(root == null){ return Integer.MAX_VALUE;}

        return Math.min(root.val, Math.min(findMin(root.left), findMin(root.right)));
    }
    
    public static void main(String[] args) {
        TreeNode a = new TreeNode(3);
        TreeNode b = new TreeNode(4);
        TreeNode c = new TreeNode(2);
        TreeNode d = new TreeNode(-1);
        TreeNode e = new TreeNode(1);
        TreeNode f = new TreeNode(6);
        TreeNode g = new TreeNode(9);

        a.left = b;
        a.right = c;

        b.left = d;
        b.right = e;

        c.left = f;
        c.right = g;

        
        System.out.print("Preorder : ");
        preorder(a);
        System.out.println("");

        System.out.print("Inorder : ");
        inorder(a);
        System.out.println("");

        System.out.print("Postorder : ");
        postorder(a);
        System.out.println("");


        System.out.println("");
        System.out.println("Size of Tree : "+ findSize(a));
        System.out.println("Height of Tree : "+ findHeight(a));
        System.out.println("Sum of Tree : "+ findSum(a));
        System.out.println("Product of Tree : "+ findProduct(a));
        System.out.println("Max Value in Tree : "+ findMax(a));
        System.out.println("Min Value in Tree : "+ findMin(a));
    }
}