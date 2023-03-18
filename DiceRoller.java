import java.util.Scanner;
import java.util.Random;

public class DiceRoller {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        
        System.out.println("Welcome to the DND Dice Roller!");
        
        while (true) {
            System.out.println("\nEnter the number of dice to roll (0 to exit): ");
            int numberOfDice = scanner.nextInt();
            
            if (numberOfDice == 0) {
                System.out.println("Goodbye!");
                break;
            }
            
            if (numberOfDice < 0) {
                System.out.println("Invalid input. Please enter a positive number.");
                continue;
            }
            
            System.out.println("Enter the number of sides on each dice: ");
            int numberOfSides = scanner.nextInt();
            
            if (numberOfSides <= 0) {
                System.out.println("Invalid input. Please enter a positive number.");
                continue;
            }
            
            int total = 0;
            for (int i = 0; i < numberOfDice; i++) {
                int rollResult = random.nextInt(numberOfSides) + 1;
                System.out.println("Dice " + (i + 1) + " rolled a " + rollResult + "!");
                total += rollResult;
            }
            
            System.out.println("Total: " + total);
        }
        
        scanner.close();
    }
}