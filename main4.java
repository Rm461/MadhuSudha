public class main4 {
    public  static void main(String[] args){
        int a=10;
        int b=0;
        int test[]={1,2,3,4,5};
        try {
            System.out.println(a/b);
            System.out.println(test[9]);
        }
        catch(ArithmeticException e){
            System.out.println("There is a error in the program");
        }
        catch(Exception g){
            g.printStackTrace();
            System.out.println(g.getMessage());
        }
    }
}
