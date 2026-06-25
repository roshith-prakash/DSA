public class VowelCheck {
    public static void main(String[] args) {
        
        String s = "I am a java developer.";
        char[] characters = s.toCharArray();
        int vowelCount = 0;

        for(int i=0; i<characters.length; i++){
            if(characters[i] == 'a' || characters[i] == 'A' || characters[i] == 'e' || characters[i] == 'E' || characters[i] == 'o' || characters[i] == 'O' || characters[i] == 'i' || characters[i] == 'I' || characters[i] == 'u' || characters[i] == 'U'){
                vowelCount++;
            }
        }

        if(vowelCount > 0){
            System.out.println("Vowels exist. Number of vowels : " + vowelCount);
        }else{
            System.out.println("Vowels do not exist.");
        }
    }
}
