class QueueNode{
    int val;
    QueueNode next;

    QueueNode(int value){
        val = value;
    }
}

class StackLL{
    QueueNode top;
    
    public void push(int value){
        QueueNode newnode = new QueueNode(value);

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
        
        QueueNode head = top;
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

        QueueNode temp = top;

        System.out.print("Top -> : ");

        while(temp!=null){
            System.out.print(temp.val + " ");
            temp = temp.next;
        }
    }
}

class QueueLL{
    QueueNode front;
    QueueNode rear;

    public void enqueue(int value){
        if(rear == null){
            front = rear = new QueueNode(value);
            return;
        }

        rear.next = new QueueNode(value);
        rear = rear.next;
    }

    public int peek(){
        if(front == null){
            return -1;
        }

        return front.val;
    }

    public int dequeue(){
        if(front == null){
            return -1;
        }

        int value = front.val;
        front = front.next;

        if(front == null){
            rear = null;
        }

        return value;
    }

    public void display(){
        if(front == null){
            System.out.println("Empty Queue.");
        }

        QueueNode temp = front;

        System.out.println("");
        while(temp != null){
            System.out.print(temp.val + " ");
            temp = temp.next;
        }
    }

    public void reverse(){
        StackLL stack = new StackLL();

        while(front!=null){
            stack.push(this.dequeue());
        }

        while(!stack.isEmpty()){
            this.enqueue(stack.pop());
        }
    }
}

public class ReverseQueue{
    public static void main(String[] args) {
        QueueLL q = new QueueLL();

        q.enqueue(10);
        q.enqueue(20);
        q.enqueue(30);
        q.enqueue(40);

        q.display();

        q.reverse();

        q.display();
    }
}