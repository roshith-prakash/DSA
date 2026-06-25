import java.io.*;

// Student class implementing Serializable
class Student implements Serializable {
    private static final long serialVersionUID = 1L;

    int id;
    String name;

    // Constructor
    Student(int id, String name) {
        this.id = id;
        this.name = name;
    }

    // Display method
    void display() {
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
    }
}

public class FileHandling {
    public static void main(String[] args) {

        // Serialization (Writing object to file)
        try {
            Student s1 = new Student(101, "Roshith");

            FileOutputStream fos = new FileOutputStream("student.txt");
            ObjectOutputStream oos = new ObjectOutputStream(fos);

            oos.writeObject(s1);

            oos.close();
            fos.close();

            System.out.println("Object has been serialized and saved.");
        } 
        catch (IOException e) {
            System.out.println("Error during serialization: " + e);
        }

        // Deserialization (Reading object from file)
        try {
            FileInputStream fis = new FileInputStream("student.txt");
            ObjectInputStream ois = new ObjectInputStream(fis);

            Student s2 = (Student) ois.readObject();

            ois.close();
            fis.close();

            System.out.println("\nObject has been deserialized:");
            s2.display();
        } 
        catch (IOException | ClassNotFoundException e) {
            System.out.println("Error during deserialization: " + e);
        }
    }
}