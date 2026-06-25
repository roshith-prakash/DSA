class Node{
    int val;
    Node next;

    Node(int val){
        this.val = val;
    }
}

class StackLL{
    Node top;
    
    public void push(int value){
        Node newnode = new Node(value);

        if(top == null){
           top = newnode;
        }else{
            newnode.next = top;
            top = newnode;
        }
    }

    public int pop(){    
        if(top == null){
            return -1;
        }
        
        Node head = top;
        top = top.next;
        head.next = null;

        return head.val;
    }

    public int peek(){
        if(top == null){
            return -1;
        }

        return top.val;
    }

    public boolean isEmpty(){
        return top == null;
    }

    public void clear(){
        while(top!=null){
            this.pop();
        }
    }

    public void displayStack(){
       if(isEmpty()){
            System.out.println("Stack is empty");
            return;
        }

        Node temp = top;

        System.out.print("Top -> : ");

        while(temp!=null){
            System.out.print(temp.val + " ");
            temp = temp.next;
        }
    }
}


public class SmallestLargest{
    public static void main(String[] args) {
        StackLL stack = new StackLL();

        int[] arr={10,20,40,50,45,5,8,20};

        for(int i=0;i<arr.length;i++){
            if(stack.peek() == -1 || stack.peek() > arr[i]){
                stack.push(arr[i]);
            }
        }

        System.out.println("Smallest Element : "+ stack.pop());

        stack.clear();

        for(int i=0;i<arr.length;i++){
            if(stack.peek() == -1 || stack.peek() < arr[i]){
                stack.push(arr[i]);
            }
        }

        System.out.println("Largest Element : "+ stack.pop());

    }
}