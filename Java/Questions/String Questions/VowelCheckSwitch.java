public class VowelCheckSwitch {
    public static void main(String[] args) {
        
        String s = "I am a java developer.";
        char[] characters = s.toCharArray();
        int vowelCount = 0;

        for(int i=0; i<characters.length; i++){
            switch(s.charAt(i)){
                case 'a':
                case 'A':
                case 'e':
                case 'E':
                case 'i':
                case 'I':
                case 'o':
                case 'O':
                case 'u':
                case 'U':
                    vowelCount++;
                    break;
            }
        }

        if(vowelCount > 0){
            System.out.println("Vowels exist. Number of vowels : " + vowelCount);
        }else{
            System.out.println("Vowels do not exist.");
        }
    }
}
