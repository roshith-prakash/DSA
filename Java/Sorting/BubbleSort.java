public class BubbleSort {
    public static void main(String[] args) {
        int[] arr = {5,4,3,1,2,6};

        for (int i = 0; i < arr.length-1; i++) {
            boolean flag = false;
            for(int j = 0; j < arr.length - 1 - i; j++){
                if(arr[j] > arr[j+1]){
                    int temp = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                    flag = true;
                }
            }
            
            if(!flag){
                break;
            }
        }

        for (int i: arr){
            System.out.print(i + " ");
        }
    }   
}
