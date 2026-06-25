@FunctionalInterface
interface ABC{
    int sum(int a, int b);
}


public class FuncInterface {
    public static void main(String[] args) {
        
        ABC abc = (t,r)->t+r;

        System.out.println(abc.sum(10,20));
    }    
}
