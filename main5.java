import java.util.PriorityQueue;
import java.util.Iterator;
public class main5 {
    public static void main(String[]args){
        PriorityQueue<String> queue=new PriorityQueue<String>();
        queue.add("Amith sharma");
        queue.add("Vijay raj");
        queue.add("Jai shankar");
        queue.add("Raj");
        System.out.println("head:"+queue.element());
        System.out.println("head:"+queue.peek());
        System.out.println("Iterating the Queue elements:");
        Iterator itr=queue.iterator();
        while(itr.hasNext()){
            System.out.println(itr.next());
        }

    }
}
