class Stack{
    int[] stack = new int[100];
    int top = -1;

    public boolean isEmpty(){
        return top == -1;
    }

    public boolean isFull(){
        return top == 99;
    }

    public void push(int val){
        if(isFull()){
            System.out.println("Stack is full");
            return;
        }

        top++;
        stack[top]=val;
    }

    public int pop(){
        if(isEmpty()){
            System.out.println("Stack is empty");
            return -1;
        }

        int val = stack[top];
        top--;
        return val;
    }

    public int peek(){
        if(isEmpty()){
            System.out.println("Stack is empty");
            return -1;
        }

        return stack[top];
    }    

    public void clear(){
        while(top!=-1){
            this.pop();
        }
    }

    public void displayStack(){
        if(isEmpty()){
            System.out.println("Stack is empty");
            return;
        }

        System.out.print("Top -> : ");

        for(int i=top; i>=0; i--){
            System.out.print(stack[i]+ " ");
        }

        System.out.println("");
    }
}

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

public class StackTest {
    public static void main(String[] args){
        Stack stack = new Stack();

        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.push(40);

        System.out.println(stack.pop());
        System.out.println(stack.peek());

        stack.displayStack();


        StackLL stackll = new StackLL();

        stackll.push(10);
        stackll.push(20);
        stackll.push(30);
        stackll.push(40);

        System.out.println(stackll.pop());
        System.out.println(stackll.peek());

        stackll.displayStack();
    }
}
