class Node{
    int val;
    Node next;

    Node(int val){
        this.val = val;
    }
}

class LinkedListQ2{
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

    public void checkPalindrome(){
        if(head == null){
            System.out.println("Empty list");
        }
        
        Node temp = head;

        LinkedListQ2 reversed = new LinkedListQ2();

        while(temp!=null){
            reversed.insertAtBeginning(temp.val);
            temp=temp.next;
        }

        temp = head;
        Node reversedTemp = reversed.head;

        while(temp != null && reversedTemp != null){
            if(temp.val != reversedTemp.val){
                System.out.println("Not a Palindrome");
                return;
            }

            temp = temp.next;
            reversedTemp = reversedTemp.next;
        }

        System.out.println("Palindrome");
    }
}

public class PalindromeList {
    public static void main(String[] args) {
        LinkedListQ2 l1 = new LinkedListQ2();

        l1.insertAtEnd(1);
        l1.insertAtEnd(2);
        l1.insertAtEnd(3);
        l1.insertAtEnd(2);
        l1.insertAtEnd(1);

        l1.checkPalindrome();
    }
}
