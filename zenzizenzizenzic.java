// Introduction
// Zenzizenzizenzic is an old mathematical term in English with its roots in the Italian word censo,
// meaning squared. It refers to the square of the square of the square of an integer.
// Input
// The input consists of a single integer.
// Output
// The output is the zenzizenzizenzic of the input number.
// Example
// Input
// 7
// Output
// 5764801

//for java solution
public class main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);	
		System.out.println("Please give me a number: ");
		int num = scanner.nextInt();
		zenzizenzizenzic(num);
	}
	static void zenzizenzizenzic(int num) {
		System.out.println((int) Math.pow(num, 8));}
}


// for javascript solution 
function zenzizenzizenzic(num) {
  return console.log(Math.pow(num, 8));
}

zenzizenzizenzic(7);
