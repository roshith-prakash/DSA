public class FindSecondLargest {
    public static void main(String[] args) {
        int[] arr={10,40,30,20,50,20,45};

        int largest=0;
        int secondlargest=0;

        for(int i=0;i<arr.length;i++){
            if(arr[i]>largest){
                secondlargest = largest;
                largest = arr[i];
            }else if(arr[i]>secondlargest){
                secondlargest = arr[i];
            }
        }

        System.out.println("Second Largest Element : "+secondlargest);
    }
}
