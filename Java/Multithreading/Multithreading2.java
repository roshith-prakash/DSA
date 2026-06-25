package Multithreading;

import java.util.*;

class MyThread1 extends Thread {

    int num;
    int num2;

    MyThread1(int num, int num2) {
        this.num = num;
        this.num2 = num2;
    }

    public void run() {

        for (int i = 0; i <= 10; i++) {
            System.out.println("The table of 5: ");
            System.out.println(i * 5);
        }

        int sum = num + num2;
        int mult = num * num2;
        int div = num / num2;
        int sub = num - num2;
        System.out.println("The sum of the two numbers is: " + sum);
        System.out.println("The multiplication of the two numbers is: " + mult);
        System.out.println("The division of the two numbers is: " + div);
        System.out.println("The subtraction of the two numbers is: " + sub);

    }
}

public class Multithreading2 {
    public static void main(String args[]) {
        System.out.println(Thread.currentThread());
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number:");
        int num = sc.nextInt();
        System.out.println("Enter another number: ");
        int num2 = sc.nextInt();
        System.out.println("The remainder of the two numbers you entered is: " + (num % num2));
        MyThread1 t1 = new MyThread1(num, num2);
        t1.start();
    }
}
