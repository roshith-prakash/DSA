public class SelectionSort {
    public static void main(String[] args) {
        int[] arr = {5,4,3,1,2,6};

        for (int i = 0; i < arr.length-1; i++) {
            int minIndex = i;
            
            for(int j = i; j< arr.length; j++){
                if(arr[j] < arr[minIndex]){
                    minIndex = j;
                }
            }
            
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }

        for (int i: arr){
            System.out.print(i + " ");
        }
    }   
}
