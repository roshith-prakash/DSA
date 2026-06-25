class Node{
    int val;
    Node next;

    Node(int val){
        this.val = val;
    }
}

class LinkedListQ1{
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

    public void getEvenElements(){
        if(head == null){
            System.out.println("Empty list");
        }
        
        Node temp = head;

        System.out.print("\nEven Elements : ");

        while(temp!=null){
            if(temp.val % 2 == 0){
                System.out.print(temp.val+ " ");
            }

            temp = temp.next;
        }
    }

    public void getOddElements(){
        if(head == null){
            System.out.println("Empty list");
        }
        
        Node temp = head;

        System.out.print("\nOdd Elements : ");

        while(temp!=null){
            if(temp.val % 2 != 0){
                System.out.print(temp.val+ " ");
            }

            temp = temp.next;
        }
    }
}

public class EvenOddList {
    public static void main(String[] args) {
        LinkedListQ1 l1 = new LinkedListQ1();

        l1.insertAtEnd(1);
        l1.insertAtEnd(2);
        l1.insertAtEnd(3);
        l1.insertAtEnd(4);
        l1.insertAtEnd(5);

        l1.getEvenElements();
        l1.getOddElements();
    }
}
