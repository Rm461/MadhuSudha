public class array{
    public static void main(String[] args) {
        int[] array = {1, 2, 4, 3, 5, 7, 8, 39, 78, 30};
        int sumOfOddNumbers = 0;

        for(int i = 0; i < array.length; i++) {
            if(array[i] % 3!= 0) {
                sumOfOddNumbers += array[i];
            }
        }

        System.out.println("Sum of odd numbers: " + sumOfOddNumbers);
    }
}

