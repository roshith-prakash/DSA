public class ReverseArrayRecursion {
    
    public static void reverseArray(int[] arr,int index){
        if(index >= arr.length/2){
            return;
        }

        int temp = arr[index];
        arr[index] = arr[(arr.length-1)-index];
        arr[(arr.length-1)-index]=temp;

        reverseArray(arr, index+1);
    }
    
    public static void main(String[] args) {
        int[] arr={1,2,3,4,5};

        reverseArray(arr,0);

        for(int i:arr){
            System.out.println(i);
        }
    }
}
