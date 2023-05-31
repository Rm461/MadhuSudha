import java.sql.*;
import java.util.Scanner;
public class SwitchStringExample {
    public static void main(String[] args) {

        String  operator, name;
        int id, gpa;
        Scanner input = new Scanner(System.in);
        String url = "jdbc:mysql://localhost:3306/students";
        String username = "root";
        String password = "12345";
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, username, password);
            Statement statement = connection.createStatement();

            System.out.println("Choose a Operation: add, update, delete");
            operator = input.nextLine();

            switch (operator) {
                case "add":
                    System.out.println("Enter id, name, gpa");
                    id = input.nextInt();
                    gpa = input.nextInt();
                    input.nextLine();
                    name = input.nextLine();
                    String sql2 = String.format("insert into listofstudents values (%d,'%s',%d);",id,name,gpa);
                    statement.executeUpdate(sql2);
                    break;

                case "update":
                    break;

                case "delete":
                    break;

                default:
                    System.out.println("Invalid operation!");
                    break;
            }
            ResultSet resultSet = statement.executeQuery("SELECT * FROM listofstudents");

            while (resultSet.next()) {
                // Process the data here
                String name1 = resultSet.getString("name");
                String gpa1 = resultSet.getString("gpa");
                String id1 = resultSet.getString("id");
//                String department1 = resultSet.getString("id");
                System.out.println(id1 + " " + name1 + " " + gpa1);
            }

            resultSet.close();
            statement.close();
            connection.close();

        }catch (Exception e) {
            e.printStackTrace();
        }
    }
}
