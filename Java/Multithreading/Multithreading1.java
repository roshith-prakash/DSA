package Multithreading;

class MyThread extends Thread {
    public void run() {
        for (int i = 0; i <= 10; i++) {
            System.out.println(i);
            try {
                Thread.sleep(1000);
            } catch (Exception e) {
                System.out.println(e);
            }
        }
    }
}

public class Multithreading1 {
    public static void main(String[] args) {
        System.out.println(Thread.currentThread());
        MyThread t1 = new MyThread();
        t1.start();
    }
}