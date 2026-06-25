import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

class Person1 implements Serializable{
    String s = "Roshith";
    int j = 43;

    void display() {
        System.out.println("ID: " + j);
        System.out.println("Name: " + s);
    }
}


public class Test {
    public static void main(String[] args) throws IOException, ClassNotFoundException{
        Person1 person1 = new Person1();

        FileOutputStream fos = new FileOutputStream("test.txt");
        ObjectOutputStream oos = new ObjectOutputStream(fos);
        oos.writeObject(person1);

        FileInputStream fis = new FileInputStream("test.txt");
        ObjectInputStream ois = new ObjectInputStream(fis);
        Person1 person2 = (Person1) ois.readObject();

        person2.display();

    }
}
