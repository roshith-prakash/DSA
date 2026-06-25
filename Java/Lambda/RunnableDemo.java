public class RunnableDemo {
    public static void main(String[] args) {
        Runnable name = () -> {
            for (int i = 0; i < 5; i++) {
                try {
                    Thread.sleep(500);
                    System.out.println("Roshith");      
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }                
            }
        };

        Thread t = new Thread(name);
        t.start();
    }
}
