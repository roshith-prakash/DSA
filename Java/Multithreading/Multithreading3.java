// Using Runnable interface
class Myclass implements Runnable {
    public void run() {
        for (int i = 0; i <= 10; i++) {
            if (i % 2 == 0) {
                System.out.println("even" + "= " + i);
            } else {
                System.out.println("odd");
            }
        }
    }
}

public class Multithreading3 {
    public static void main(String args[]) {
        Myclass obj = new Myclass();
        Thread t1 = new Thread(obj);
        t1.start();
    }

}
