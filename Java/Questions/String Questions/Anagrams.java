import java.util.Arrays;

public class Anagrams {

    static void checkAnagram(String s1, String s2){

        if(s1.length() != s2.length()){
            System.out.println("NOT Anagrams");
            return;
        }

        char[] c1 = s1.toCharArray();
        char[] c2 = s2.toCharArray();

        Arrays.sort(c1);
        Arrays.sort(c2);

        for(int i = 0; i < c1.length; i++){
            if(c1[i] != c2[i]){
                System.out.println("NOT Anagrams");
                return;
            } 
        }

        System.out.println("Anagrams");
    }

    public static void main(String[] args) {
        String s1 = "dog";
        String s2 = "god";
    
        checkAnagram(s1, s2);
    }
}
