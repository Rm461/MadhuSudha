public class Reverse {
    public static void main(String args[]){
        String input="Hello, World!";
        String reverse="";
        for(int i=input.length()-1;i>=0;i--){
            reverse +=input.charAt(i);
        }
        System.out.println("Reversed string:"+reverse);
    }
}

