class Node{
    int val;
    Node next;

    Node(int val){
        this.val = val;
    }
}

class LinkedList{
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

    public void insertAtIndex(int index, int value) {
        if(head == null && index != 0){
            System.out.println("\nEmpty List");
            return;
        }

        if(index == 0){
            insertAtBeginning(value);
            return;
        }

        int i = 0;
        Node temp = head;

        while(i < index - 1 && temp != null){
            temp = temp.next;
            i++;
        }

        if(temp == null){
            System.out.println("\nNot enough elements in list. (Insert at Index)");
            return;
        }

        // inserting at end
        if(temp.next == null){
            insertAtEnd(value);
        } 
        else{
            Node newnode = new Node(value);
            newnode.next = temp.next;
            temp.next = newnode;
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

    public void displayRecursively(Node temp){
        if(temp == null) return;

        System.out.print(temp.val );

        if(temp.next != null){
            System.out.print(" -> ");
        }

        displayRecursively(temp.next);
    }

    public void deleteFromBeginning(){
        if(head==null){
            System.out.println("Empty List");
            return;
        }

        head = head.next;
    }

    public void deleteFromEnd(){

        if(head == null){
            System.out.println("Empty List");
            return;
        }

        if(head.next == null){
            head = null;
            tail = null;
            return;
        }

        Node temp = head;

        while(temp.next.next != null){
            temp = temp.next;
        }

        temp.next = null;
        tail = temp;
    }

    public void findIdx(int index){
        if(head == null){
            System.out.println("\nEmpty List");
            return;
        }

        int i = 0;
        Node temp = head;

        while(i<index && temp != null){
            i++;
            temp = temp.next;
        }

        if(i == index && temp!= null){
            System.out.println(temp.val);
        }else{
            System.out.println("\nNot enough elements in list (Find Index).");
        }
    }

    public void search(int value){
        if(head == null){
            System.out.println("\nEmpty List");
            return;
        }

        
        Node temp = head;

        while(temp != null && temp.val != value){
            temp = temp.next;
        }

        if(temp!=null && temp.val == value){
            System.out.println("\nValue found : "+ temp.val);
        }else{
            System.out.println("\nElement " + value + " is not present.");
        }
    }

    public void getMiddle(){
        if(head == null){
            System.out.println("Empty List");
        }

        int size = 0;

        Node temp = head;

        while(temp != null){
            size++;
            temp = temp.next;
        }

        int i = 0;
        temp = head;
        while(i<size/2){
            i++;
            temp=temp.next;
        }

        System.err.println("\nMiddle Node : "+temp.val);
    }

     public void getMiddleFast(){
        if(head == null){
            System.out.println("Empty List");
        }

        Node slow = head;
        Node fast = head;

        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next;

            if(fast!=null){
                fast = fast.next;
            }
        }
        
        if(slow != null){
            System.err.println("\nMiddle Node : " + slow.val);
        }

    }
}

public class LinkedListTest {
    public static void main(String[] args) {
        
        LinkedList l1 = new LinkedList();

        l1.insertAtEnd(1);
        l1.insertAtEnd(2);
        l1.insertAtEnd(3);
        l1.insertAtEnd(4);
        l1.insertAtEnd(5);

        l1.findIdx(3);

        l1.display();

        l1.deleteFromBeginning();
        l1.deleteFromEnd();

        l1.display();

        l1.findIdx(3);

        l1.search(3);
        l1.search(5);
        

        l1.insertAtIndex(0, 1);

        l1.display();
        
        l1.insertAtIndex(4, 5);
        // l1.insertAtIndex(4, 4);

        l1.display();

        l1.getMiddle();
        l1.getMiddleFast();
    }
}
 