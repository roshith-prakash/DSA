import java.util.HashMap;

class Node{
    int val;
    Node next;

    Node(int val){
        this.val = val;
    }
}

class LinkedListQ3{
    public Node head;
    public Node tail;

    public void insertAtBeginning(int value){
        Node newnode = new Node(value);

        if(head == null){
            head = newnode;
            tail = newnode;
        }else{
            newnode.next = head;
            head = newnode;
        }
    }


    public void insertAtEnd(int value){
        Node newnode = new Node(value);

        if(tail == null){
            head = newnode;
            tail = newnode;
        }else{
            tail.next = newnode;
            tail = newnode;
        }
    }

    public void removeDuplicates(){
        if(head == null || head.next == null){
            return; 
        }

        HashMap<Integer,Boolean> values = new HashMap<>();
        
        Node temp = head;
        Node prev = null;
        
        while(temp != null){
            if(values.containsKey(temp.val)){
                prev.next = temp.next;

                if(temp == tail){
                    tail = prev;
                }

                temp = temp.next;
            }else{
                values.put(temp.val, true);
                prev = temp;
                temp = temp.next;
            }
        }
    }

     public void display(){
        System.out.println();

        Node temp = head;

        while(temp != null){
            System.out.print(temp.val);
            if(temp.next != null){
                System.out.print(" -> ");
            }
            temp = temp.next;
        }
    }

}

public class RemoveDuplicates {
    public static void main(String[] args) {
        LinkedListQ3 l1 = new LinkedListQ3();

        l1.insertAtEnd(1);
        l1.insertAtEnd(2);
        l1.insertAtEnd(3);
        l1.insertAtEnd(2);
        l1.insertAtEnd(1);
        l1.insertAtEnd(4);
        l1.insertAtEnd(5);
        l1.insertAtEnd(2);
        l1.insertAtEnd(3);
        l1.insertAtEnd(6);

        l1.removeDuplicates();

        l1.display();
    }
}
