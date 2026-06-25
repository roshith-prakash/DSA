public class CountWords {
    public static void main(String[] args) {

        // String s = "  Hello   World  ";
        String s = "I am a java developer.";

        int count = 0;
        boolean inWord = false;

        for (int i = 0; i < s.length(); i++) {

            char ch = s.charAt(i);

            // If character is not space
            if (ch != ' ') {

                // Start of a new word
                if (!inWord) {
                    count++;
                    inWord = true;
                }

            } else {

                // Space means word ended
                inWord = false;
            }
        }

        System.out.println("Number of words : " + count);
    }
}