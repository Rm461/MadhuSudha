public class sumofdigits {
    static int findSum(int number)
    {
        int sum;
        for (sum = 0; number > 0; sum = sum + number % 10, number = number / 10);
        return sum;
    }
    public static void main(String args[])
    {
        int number = 7812089;
        System.out.println("The sum of digits: "+findSum(number));
    }
}
