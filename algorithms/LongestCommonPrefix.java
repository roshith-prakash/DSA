public class LongestCommonPrefix {
    public static void main(String[] args) {
        String[] strings = {"flower","flow","flight"};
        StringBuilder longestPrefix = new StringBuilder();

        for(int i = 0; i<strings[0].length(); i++){
            char ch = strings[0].charAt(i);
            boolean match = true;

            for(int j = 1; j<strings.length; j++){
                if(strings[j].length() <= i || ch != strings[j].charAt(i)){
                    match = false;
                    break;
                }
            }

            if(!match) break;

            longestPrefix.append(ch);
        }

        System.out.println(longestPrefix.toString());
    }
}
