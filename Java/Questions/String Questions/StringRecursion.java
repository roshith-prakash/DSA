public class StringRecursion {

    static String reverseString(String s){
        if(s.length() == 0){
            return "";
        }

        return new String(s.charAt(s.length()-1) + reverseString(s.substring(0, s.length()-1)));
    }

    public static void main(String[] args){
        String s = "NMIMS";

        s = reverseString(s);

        System.out.println(s);
    }
}
