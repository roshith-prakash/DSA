
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

    public void swap(){
        if(head == null || head.next == null){
            return; 
        }

        Node temp = head;

        while(temp!=null && temp.next != null){
            int value = temp.val;
            temp.val = temp.next.val;
            temp.next.val = value;

            temp = temp.next;

            if(temp != null){
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

public class SwapLinkedElements {
    public static void main(String[] args) {
        LinkedListQ3 l1 = new LinkedListQ3();

        l1.insertAtEnd(1);
        l1.insertAtEnd(2);
        l1.insertAtEnd(3);
        l1.insertAtEnd(4);
        l1.insertAtEnd(5);
        l1.insertAtEnd(6);

        l1.swap();

        l1.display();
    }
}
