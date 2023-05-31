import java.util.Comparator;
import java.util.ArrayList;
import java.util.Collections;

class Persons {
    String name;
    int age;

    public Persons(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

class AgeComparator implements Comparator<Persons> {
    public int compare(Persons p1, Persons p2) {
        return p1.age - p2.age;
    }
}

public class person {
    public static void main(String[] args) {
        ArrayList<Persons> persons = new ArrayList<>();
        persons.add(new Persons("Alice", 25));
        persons.add(new Persons("Bob", 30));
        persons.add(new Persons("Charlie", 20));

        AgeComparator ageComparator = new AgeComparator();
        Collections.sort(persons, ageComparator);

        for (Persons person : persons) {
            System.out.println(person.name + " - " + person.age);
        }
    }
}
