// **********************************************************************************Chapter 1***********************************************************

1. // Get the user input for each field
var firstName = prompt("Enter your First Name:");
var lastName = prompt("Enter your Last Name:");
var email = prompt("Enter your Email:");
var phoneNumber = prompt("Enter your Phone Number:");
var password = prompt("Enter your Password:");

// Display alerts for each field
alert("First Name: " + firstName);
alert("Last Name: " + lastName);
alert("Email: " + email);
alert("Phone Number: " + phoneNumber);
alert("Password: " + password);


2. alert("You're learning JavaScript!");

3. alert("Hello there! You're doing a great job learning JavaScript!");


// *************************************************************************************chapter 2 ***********************************************************

1. var myVariableName = "This is a variable in camelCase";

2. /**
* This function demonstrates the declaration and assignment of a variable in JavaScript.
*/
function declareAndAssignVariable() {
  let myVariable; // Declaration of the variable without defining it
  myVariable = "Hello, World!"; // Assignment of a string value to the variable
  return myVariable;
}
// Usage Example
const result = declareAndAssignVariable();
console.log(result); // Output: Hello, World!


3.	/*** Function to declare the variable teamName and alert the team name.*/
function declareAndAlertTeamName() {
  // Declare the variable teamName
  var teamName = "CodeMasters";
  // Alert the team name
  alert("Team name: " + teamName);
}
// Usage Example
declareAndAlertTeamName();

4.var bestMan = "Charlie"; // Assign the initial string value

// Now, assign a new string value
bestMan = "David"; // Assign a new string to bestMan

// ***************************************************Chapter 3 (Variables for numbers)*************************************************************************

1. var caseQty;
2. caseQty = 144;
3.var num = 9;
4. var result; // Declare a variable
result = 5 + 7; // Assign it the sum of 5 and 7

5. var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;

orderTotal = merchTotal + shippingCharge
orderTotal = 100 + 10
orderTotal = 110


6. var num = 5; // Declare a variable and assign it a number (e.g., 5)

num = num + 3; // Change the value of the variable by adding it to another number (e.g., 3)

// In this example, the variable num is initially assigned the value 5. Then, in the second statement, 
// its value is changed by adding 3 to it. After these two statements, the value of num will be 8 (5 + 3).


// ***************************************************Chapter 4 (Variable names Legal and Illegal)*************************************************************************

1. var productCost = 3.45; // Corrected variable name using camelCase
2. var nameOfBand; // Using camelCase
3.var myNumber = 42;
// In this statement:

// * 'var' declares a variable.
// * 'myNumber' is a valid variable name.
// * = assigns the value '42' to the variable 'myNumber'.
// * Now, the variable 'myNumber' holds the value '42'

4. const firstName = "Bilal";
const lastName = "Ahmed";
const combinedName = firstName + lastName;
console.log(combinedName);

5.
//  Legal varialble

myVariable
_count
firstName
lastName
age123
myNumber

// Illegal Varialble
first - name
full name
123abc(starts with a number)
@name(contains special character)
if (uses a reserved keyword)


// ***************************************************Chapter 5 (Math Expression I)*************************************************************************

1. var remainder = 10 % 3; // The remainder of dividing 10 by 3 is 1
2.num = 20 % 6
// When you divide 20 by 6, you get a quotient of 3 and a remainder of 2. Therefore, the value of num will be 2.

3.var largeNum = 1000 * 2000;
// In this statement, largeNum is declared and assigned the result of the multiplication, which is 2,000,000.

4. var num1 = 15; // Replace with your desired value
var num2 = 7; // Replace with your desired value

var subtractionResult = num1 - num2;
// In this code, subtractionResult will hold the result of subtracting num2 from num1.

5.var dividend = 25; // Replace with your desired value
var divisor = 4;  // Replace with your desired value

var remainderResult = dividend % divisor;
// In this code, remainderResult will hold the remainder when dividend is divided by divisor.


6. var num1 = 6; // Replace with your desired number
var num2 = 9; // Replace with your desired number

var multiplicationResult = num1 * num2;
alert("The result of the multiplication is: " + multiplicationResult);
// This code will display an alert with the result of multiplying num1 and num2.


// ***************************************************Chapter 6 (Math Expression II)*************************************************************************


1. x++;
// You can use the increment (++) operator as a shorthand for x = x + 1;

2. x--;
// You can use the decrement (--) operator to quickly reduce x by 1:

3. var x = 50;
var y = x++;
// var x = 50; initializes x with the value 50.
// x++ is the post-increment operator. It first assigns the current value of x (which is 50) to y and then increments x by 1. So, after this line, y holds the original value of x, which is 50, and x becomes 51.

4. var y = 50;
var z = --y;
The value of z will be 49.
var y = 50; initializes y with the value 50.
--y is the pre - decrement operator.It first decrements y by 1(making it 49) and then assigns the new value to z.So, after this line, z holds the decremented value of y, which is 49.

5. var newNum = --num;
// --num decrements the value of num by 1 and assigns its original value to newNum.

6. var originalVar = 5;
var newVar = originalVar++;
// originalVar++ adds 1 to originalVar and assigns its original value to newVar.

7. var numberValue = 10; // Assign a number value
numberValue++; // Increment the variable
alert("The new value is: " + numberValue); // Display the new value in an alert
// This code assigns the value 10 to numberValue, increments it to 11, and then displays the new value in an alert.


// ***************************************************Chapter 7 (Math Expression III)*************************************************************************

1. var calculatedNum = 2 + (2 * 6);
The value of calculatedNum is 14.
It calculates 2 * 6 first, which is 12, and then adds 2, resulting in 12 + 2 = 14.

2. var calculatedNum = (2 + 2) * 6;
The value of calculatedNum is 24.
It calculates 2 + 2 first, which is 4, and then multiplies it by 6, resulting in 4 * 6 = 24.

3. var calculatedNum = (2 + 2) * (4 + 2);
The value of calculatedNum is 24.
It calculates 2 + 2 to be 4 and 4 + 2 to be 6, and then multiplies these two results: 4 * 6 = 24.

4. var calculatedNum = ((2 + 2) * 4) + 2;
The value of calculatedNum is 18.
It calculates 2 + 2 to be 4, then multiplies it by 4 to get 4 * 4 = 16, and finally adds 2 to it: 16 + 2 = 18.

5. var cost = (2 + 2) * (4 + 10);
// In this statement, we use parentheses to ensure that 2 + 2 and 4 + 10 are calculated first, and then we multiply the results together. This will assign the value 56 to the variable cost.

6. var units = 2 + (2 * 4) + 10;
// In this statement, we use parentheses to ensure that 2 * 4 is calculated first, and then we add 2 and 10. This will assign the value 20 to the variable units.

7. var pressure = (4 / 2) * 4;
// In this statement, we use parentheses to ensure that 4 / 2 is calculated first (resulting in 2), and then we multiply the result by 4. This will assign the value 5 to the variable pressure.


// ***************************************************Chapter 8 (Concatenating Text Strings)*************************************************************************

1. var num = "2" + "2";

The value of num is "22"(including the quotation marks).It's a string concatenation of two strings, "2" and "2".

2. alert(message);
// When you run this alert(), it will display a popup with the message "Hello,Dolly".

3. "333"
It concatenates the string "33" with the number 3, resulting in the string "333", including the quotation marks.

4. var part1 = "Pakistan";
var part2 = "Zindabad";
var fullMessage = part1 + " " + part2;
alert(fullMessage);

5.
// Certainly! To assign the concatenation of a string with a number to a variable, we can use the + operator. Here's an example:
var myString = "The number is: " + 42;
// In this statement, the string "The number is: " is concatenated with the number 42, and the result is assigned to the variable myString.

6. var firstName = "Bilal";
var lastName = "Ahmed";
var fullName = firstName + " " + lastName;

// In this code:

// firstName is assigned the string "Bilal".
// lastName is assigned the string "Ahmed".
// fullName is assigned the concatenated result of firstName, a space, and lastName, resulting in the full name "Bilal Ahmed".

// *******************************************************Chapter 9 (Prompts)***************************************************************************

1. var firstName = prompt("Enter first name");

2. var country = prompt("Country?", "China");

3. var yourName = prompt("Enter Your Name");

4. var userInput = prompt("Please enter something:", "Default Input");

5. var message = "Enter your favorite color:";
var defaultResponse = "Blue";
var userResponse = prompt(message, defaultResponse);

6. var message = "Enter your favorite food:";
var defaultResponse = "Pizza";
var userResponse = prompt(message, defaultResponse);
if (userResponse !== null) {
  alert("You entered: " + userResponse);
} else {
  alert("You cancelled the prompt.");
}

// *******************************************************Chapter 10 (if statments)***************************************************************************

1. var city = "Karachi";
if (city === "Karachi") {
  console.log("The City of Lights");
}

2. if (x === y) {
  var z = prompt("Please enter the value of z?");
}

3. var ZipCode = "10010";
if (ZipCode === "10010") {
  alert("Karachi");
} else {
  alert("Please write correct city");
}

4. let x = 5; // Initial value of x
if (x === 5) {
  x = 1; // Assigning a new value to x if it equals 5
}
console.log(x); // Output: 1


// *******************************************************Chapter 11 (Comparison Operators)***************************************************************************

1. if (variable1 != variable2) {
  // Rest of your code
}

2. if (variable1 >= variable2) {
  // Rest of your code
}

3. var number1 = 10;
var number2 = 20;
if (number1 !== number2) {
  alert("Congratulations!");
}

4. var number1 = 5;
var number2 = 10;
if (number1 !== number2) {
  alert("Congratulations!");
}
// In this example, the !== operator is used to check if number1 is unequal to number2. Since number1 (5) is indeed unequal to number2 (10), the condition is true, and it will display the "Congratulations!" alert.

5. var enteredName = prompt("Enter your first name:");
var anotherName = "Bilal"; // Replace with the other name you want to compare
if (enteredName !== anotherName) {
  alert("No match");
}
// In this code:
// The prompt function asks you to enter your first name and stores the input in the enteredName variable.
// The anotherName variable contains the name you want to compare against (in this case, "Bilal").
// The if statement checks if enteredName is unequal to anotherName using the !== operator.
// If the condition is true (meaning the names are not equal), it displays an alert with the message "No match."

// *******************************************************Chapter 12 (if…else and else if statements)***************************************************************************

1. var variable1 = 10;
var variable2 = 5;

if (variable1 >= variable2) {
  alert("Variable1 is greater than or equal to Variable2");
} else {
  alert("Variable1 is not greater than or equal to Variable2");
}

2. var marks = parseFloat(prompt("Enter your marks:"));

if (isNaN(marks)) {
  alert("Please enter a valid number for marks.");
} else {
  var percentage = (marks / 100) * 100;

  if (percentage >= 90) {
    alert("Your grade is A+");
  } else if (percentage >= 80) {
    alert("Your grade is A");
  } else if (percentage >= 70) {
    alert("Your grade is B");
  } else if (percentage >= 60) {
    alert("Your grade is C");
  } else if (percentage >= 50) {
    alert("Your grade is D");
  } else {
    alert("Your grade is F");
  }
}

3.  var a = 5; // Replace with the actual value of 'a'
if (a === 10) {
  alert("a is 10");
} else {
  alert("The correct value of a is " + a);
}

4. var city = prompt("Enter a city:");
if (city === "Karachi") {
  alert("It is Karachi.");
} else if (city === "Lahore") {
  alert("It is Lahore.");
} else {
  alert("It is neither Karachi nor Lahore.");
}

// *******************************************************Chapter 13 (Testing sets of conditions)***************************************************************************


1. if (a === b && c === d) {
  // Rest of your code
}

2. if (a === b || c !== d) {
  // Rest of your code
}

3. if ((name === "Hamza" || name === "Arsalan") && age < 60) {
  // Rest of your code
}

4. var num1 = 5;
var num2 = 10;

if (num1 < num2 || num1 > num2) {
  alert("The condition is true: num1 is either less than or greater than num2.");
} else {
  alert("The condition is not true: num1 is equal to num2.");
}

5. var firstName = "John"; // Replace with your actual first name
var lastName = "Doe"; // Replace with your actual last name

var enteredFirstName = prompt("Enter your first name:");
var enteredLastName = prompt("Enter your last name:");

if (enteredFirstName === firstName && enteredLastName === lastName) {
  alert("Welcome, " + firstName + " " + lastName + "!");
} else {
  alert("Names do not match.");
}

// *******************************************************Chapter 14 (If statements nested)***************************************************************************

1. var password = prompt("Enter your password:");

if (password !== "") {
  if (password.length <= 5) {
    alert("Password must be greater than 5 characters.");
  } else {
    alert("OK");
  }
} else {
  alert("Password cannot be empty.");
}

2. The provided if statement has two conditions that must be met for the alert to be displayed:

a must be equal to 1.
c must be equal to the string "Max".
If both of these conditions are true, then the "OK" alert will be displayed.

If either of these conditions is false, the alert will not be displayed.

3. if (a === 1 && c === "Max") {
  alert("OK");
}


4.  var num1 = 10;
var num2 = 10;

if (num1 === num2) {
  if (num1 <= num2) {
    alert("Both conditions are true: num1 equals num2 and is less than or equal to num2.");
  }
}
// In this code:

// num1 and num2 are both assigned the value 10.
// The first if statement checks if num1 equals num2.
// If the first condition is true, it enters the nested if statement, which checks if num1 is less than or equal to num2.
// If both conditions are true, it displays an alert message as specified.   


// **************************************************************Chapter 15 (Array I)**************************************************************************


1. var emptyArray = [];

2. var stringArray = ["Hello"];

3. var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]); // This will display an alert with the letter "j"

4. var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
var lengthOfArray = alphabet.length;

console.log("The total length of the array is: " + lengthOfArray);

5. var myArray = ["FirstElement"]; // Declare an array with one element

myArray[1] = "SecondElement"; // Add a second element at index 1

alert(myArray[1]); // Display an alert with the second element


// **************************************************************Chapter 16 (Array II)**************************************************************************

1. var myArray = ["FirstElement"]; // Declare an array with one string element

myArray.push("SecondElement"); // Add an additional element to the array using push

var lastElement = myArray[myArray.length - 1]; // Get the last element

alert(lastElement); // Display an alert with the last element


2. var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop(); // Removes the last element

console.log(Alphabet); // Displays the modified array without the last element


3. var Alphabet = ["h", "i", "j", "k"];
var newElement = 42; // Replace with the number you want to add

Alphabet.push(newElement); // Add the new element (number) to the end of the array

console.log(Alphabet); // Display the modified array with the new element


// **************************************************************Chapter 16 (Array III)**************************************************************************

1.  var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift(); // Removes the first element

console.log(sizes); // Displays the modified array without the first element

2. var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3); // Add three number elements to the beginning

console.log(sizes); // Display the modified array with the new elements at the beginning


3. var myArray = ["FirstElement"]; // Declare an array with one element

myArray.unshift("SecondElement"); // Add a second element to the beginning of the array

alert(myArray[0]); // Display an alert with the new first element


4. var sizes = ["S", "M", "XL", "XXL", "XXXL"];

// Use splice to insert "L" between "M" and "XL"
sizes.splice(2, 0, "L");

console.log(sizes); // Display the modified array

5. var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// Copy the first 3 sizes into a new array
var regSizes = sizes.slice(0, 3);
console.log(regSizes); // Display the new array with the copied sizes
// The slice method is used to create a new array regSizes by extracting elements from the sizes array starting from index 0 (inclusive) up to, but not including, index 3 (exclusive).
// The regSizes array will contain ["S", "M", "XL"], which are the first 3 sizes from the original array.


6. var pets = ["dog", "cat", "ox", "duck", "frog"];

// Use splice to remove "cat", "ox", and "duck" and add 2 elements after "dog"
pets.splice(1, 3, "elephant", "parrot");
console.log(pets); // Display the modified array


7. var pets = ["dog", "cat", "ox", "duck", "frog"];

// Use splice to remove "cat" and "ox"
pets.splice(1, 2);
console.log(pets); // Display the modified array
// The splice method is used to remove elements starting from index 1 (inclusive) up to and including index 2 (inclusive), which are "cat" and "ox."
// After this operation, the modified array will contain ["dog", "duck", "frog"] with "cat" and "ox" removed.


8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// Use slice to get a new array containing "duck" and "frog"
var reducedPets = pets.slice(3, 5);
console.log(reducedPets); // Display the new array with "duck" and "frog"

// The slice method is used to create a new array reducedPets by extracting elements from the pets array starting from index 3 (inclusive) up to, but not including, index 5 (exclusive), which are "duck" and "frog."
// // The reducedPets array will contain ["duck", "frog"], which are "duck" and "frog" from the original array.



// **************************************************************Chapter 17 - 20 (for Loops)**************************************************************************

1.  for (var i = 0; i < 10; i++) {
  // Your loop code here
}

2. for (var i = 0; i <= 11; i++) {
  // Your loop code here
}

3.  for (var i = 0; i <= 4; i++) {
  // Your loop code here
}
// The missing characters are semicolons. Here's the corrected code:

4. for (var j = 0; j < 100; j++) {
  // Your loop code here
}

5. for (var i = 3; i > 0; i--) {
  // Your loop code here
}

6. var array = [1, 2, 3, 4, 5];
var arrayLength = array.length; // Assigns the number of elements in the array to the variable

7. var flag = true; // Initial value is true

8. for (var i = 0; i < pets.length; i++) {
  // Your loop code here
}

9. for (var i = 0; i < 10; i++) {
  if (i === 1) {
    alert("Counter during the second iteration: " + i);
    break; // Break out of the loop after the second iteration
  }
}

10. // Create an array of user names
var userNames = ["Ali", "Bilal", "Sarah", "Ahmed", "Maaz"];

// Prompt the user for their first name
var firstName = prompt("Enter first name");

// Use a for loop to iterate through the user names
for (var i = 0; i < userNames.length; i++) {
  // Check if the entered name matches a name in the array
  if (firstName === userNames[i]) {
    alert("Enter"); // Alert if there's a match
    break; // Exit the loop
  }
}

// If no match is found, display a different alert
if (i === userNames.length) {
  alert("Please write correct user name");
}


11. var matchFound = false;

for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
}
if (!matchFound) {
  alert("No match found");
}
// The matchFound variable is initially set to false.
// The for loop iterates through the list array, checking for a match between userInput and the elements of the array. If a match is found, it alerts "Match found," sets matchFound to true, and breaks out of the loop.
// After the loop, there's an if statement that checks if matchFound is still false. If it is, it means no match was found, and it displays the "No match found" alert.

12.  var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {
  for (var j = 0; j < secondArr.length; j++) {
    console.log(firstArr[i] + secondArr[j]);
  }
}
// In this code:

// The outer for loop iterates through the elements of the firstArr array using the i counter.
// The inner for loop iterates through the elements of the secondArr array using the j counter.
// Inside the nested loops, console.log is used to concatenate elements from both arrays and display them.
// The expected output will be:

a1
a2
a3
a4
a5
a6
b1
b2
b3
b4
b5
b6
c1
c2
c3
c4
c5
c6
d1
d2
d3
d4
d5
d6
e1
e2
e3
e4
e5
e6
f1
f2
f3
f4
f5
f6

// Each element from the firstArr is concatenated with each element from the secondArr, resulting in the displayed output.



// **************************************************************Chapter 21 (Changing Case)**************************************************************************

1.  var allLower = userInput.toLowerCase();

2. x = x.toLowerCase();

3. y = y.toUpperCase();

4. var originalString = "YourOriginalString"; // Replace with your original string
var lowerCaseString = originalString.toLowerCase();

5.var myArray = ["SomeText", "AnotherText", "YetAnotherText"];
var lowerCaseElement = myArray[0].toLowerCase(); // Change the index as needed

6. var myString = "YourString"; // Replace with your string
var upperCaseString = myString.toUpperCase();

alert(upperCaseString);


7. var cityName = "kaRacHi";
var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

alert(capitalizedCityName);


// **************************************************************Chapter 22 - 25 (Strings)**************************************************************************

1. var sameWords = "captain";
var slicedWord = sameWords.slice(0, 1) + sameWords.slice(3);

console.log(slicedWord); // Outputs "catin"

2. var myString = "Hello, World!";
var charCount = myString.length;

console.log(charCount); // Outputs the number of characters in the string

3. var animal = "elephant";
var seg = animal.slice(1, 5);

console.log(seg); // Outputs "leph"


4. var myString = "Hello, World!";
var charCount = myString.length;

console.log(charCount); // Outputs the number of characters in the string

5. var originalString = "YourOriginalString"; // Replace with your original string
var charCount = originalString.length; // Measure the number of characters

// Slice all but the first character and last 3 characters
var slicedString = originalString.slice(1, -3);

console.log(charCount); // Outputs the number of characters in the string
console.log(slicedString); // Outputs the sliced string

// In this code:

// originalString holds the original string.

// originalString.length measures the number of characters in the string and assigns it to charCount.

// originalString.slice(1, -3) slices the string to remove the first character (index 0) and the last 3 characters from the end of the string.

// The sliced string is assigned to slicedString, which is declared and assigned in the same statement.

// The console.log statements output the number of characters in the string (charCount) and the sliced string (slicedString).



6. The value of indx in this code will be 3.

The indexOf method in JavaScript returns the index(position) of the first occurrence of the specified substring within the string.In this case, "be" first occurs at index 3 within the string "To be or not to be."


7. The value of indx will be 16.

The lastIndexOf method in JavaScript returns the index(position) of the last occurrence of the specified substring within the string.In this case, "be" last occurs at index 16 within the string "To be or not to be."

8. var text = "Let's go, go, gone!";
var lastIndex = text.lastIndexOf("go");

if (lastIndex !== -1) {
  var indx = lastIndex;
  console.log(indx); // Outputs the index of the first character of the last "go"
} else {
  console.log("Substring 'go' not found.");
}

9. var myString = "Hello, World!";
var indexNum = 7; // Replace with the desired index

if (myString.charAt(indexNum)) {
  // This block will execute if the character at the specified index exists
  console.log("Segment exists at index " + indexNum);
} else {
  // This block will execute if the character at the specified index does not exist
  console.log("Segment does not exist at index " + indexNum);
}


10. var myString = "abcde";
var characterAtIndex2 = myString.charAt(2);

console.log(characterAtIndex2); // Outputs: "c"


11. var text = "This is a sample text.";
var index = 9; // 10th character (0-based index)

if (index >= 0 && index < text.length) {
  var cha = text.charAt(index);
  console.log(cha); // Outputs the 10th character
} else {
  console.log("Index is out of range.");
}

12. var str = "Hello, World!";
var lastIndex = str.length - 1; // Index of the last character

if (lastIndex >= 0) {
  var x = str.charAt(lastIndex);
  console.log(x); // Outputs the last character
} else {
  console.log("The string is empty.");
}


13. var input = "Hello, World!"; // Replace with your string
var index = 4; // 5th character (0-based index)

if (index >= 0 && index < input.length) {
  var cha = input.charAt(index);
  console.log(cha); // Outputs the 5th character
} else {
  console.log("Index is out of range.");
}

14. var myString = "example"; // Replace with your string
var desiredCharacter = "a"; // Replace with the character you're testing for

if (myString.length >= 3 && myString.charAt(2) === desiredCharacter) {
  // Your code here
}

15. var inputString = "Hello, World!";
var charArray = []; // Declare an empty array to store characters

for (var i = 0; i < inputString.length; i++) {
  charArray.push(inputString.charAt(i)); // Push each character to the array
}

console.log(charArray); // Outputs an array with individual characters

// This code will populate charArray with each character from inputString.

// Now, to replace the first instance of "no" with "yes" in the string represented by reply and assign the revised string to revisedReply, we can use the replace method. Here's an example:

var reply = "no, not at all, no problem";
var revisedReply = reply.replace("no", "yes");

console.log(revisedReply); // Outputs: "yes, not at all, no problem"
// The replace method replaces the first instance of "no" with "yes" in the reply string and assigns the result to revisedReply.


16. var str = "1 apple, 2 bananas, 3 cherries, 1 pineapple";
var newStr = str.replace("1", "one");

console.log(newStr); // Outputs: "one apple, 2 bananas, 3 cherries, 1 pineapple"


17. var y = x.replace(/a/g, "z");

// **************************************************************Chapter 26 (Rounding Numbers)**************************************************************************

1. var number = 5.7; // Replace this with your number
var roundedNumber = Math.round(number);
console.log(roundedNumber); // Output: 6

2. var origNum = 5.3; // Replace this with your number
var roundNum = Math.ceil(origNum);

console.log(roundNum); // Output: 6


3. var origNum = 5.7; // Replace this with your number
var roundNum = Math.floor(origNum);

console.log(roundNum); // Output: 5

4. var originalNumber = 5.7; // Replace this with your number
var roundedNumber = Math.round(originalNumber);

console.log(roundedNumber); // Output: 6


5. var number = 0.5; // Replace this with your number
var roundedNumber = Math.round(number);

console.log(roundedNumber); // Output: 0


// **************************************************************Chapter 27 (Random Numbers)**************************************************************************


1. var randomNumber = Math.floor(Math.random() * 50) + 1;


2. var randomNumber = Math.random();

3. < !DOCTYPE html >
  <html>
    <head>
      <title>Dice Roll</title>
    </head>
    <body>
      <h1>Dice Roll</h1>
      <button id="rollButton">Roll the Dice</button>
      <div id="diceResult"></div>

      <script src="dice.js"></script>
    </body>
  </html>

// Function to simulate a dice roll and return a random number between 1 and 6
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Event listener for the "Roll the Dice" button
document.getElementById("rollButton").addEventListener("click", function () {
  // Roll the dice
  var result = rollDice();

  // Display the result
  var diceResultElement = document.getElementById("diceResult");
  diceResultElement.textContent = "You rolled a " + result;
});
// In this code, we create a rollDice function that generates a random number between 1 and 6 using Math.random(). When the button is clicked, it calls this function, displays the result in the <div> element, and updates the content with the rolled number.

// To use this, save the HTML code in an HTML file and the JavaScript code in a file named "dice.js" in the same directory. Open the HTML file in a web browser, and you can roll the dice by clicking the "Roll the Dice" button.


4. < !DOCTYPE html >
  <html>
    <head>
      <title>Coin Toss</title>
    </head>
    <body>
      <h1>Coin Toss</h1>
      <button id="tossButton">Toss the Coin</button>
      <div id="tossResult"></div>

      <script src="coin-toss.js"></script>
    </body>
  </html>

// Function to simulate a coin toss (0 for heads, 1 for tails)
function tossCoin() {
  return Math.floor(Math.random() * 2);
}

// Event listener for the "Toss the Coin" button
document.getElementById("tossButton").addEventListener("click", function () {
  // Toss the coin
  var result = tossCoin();

  // Display the result
  var tossResultElement = document.getElementById("tossResult");
  tossResultElement.textContent = result === 0 ? "Heads" : "Tails";
});

// In this code, we create a tossCoin function that generates a random number 0 or 1 using Math.random(). When the button is clicked, it calls this function, displays the result ("Heads" or "Tails") in the <div> element, and updates the content with the toss outcome.

// To use this, save the HTML code in an HTML file and the JavaScript code in a file named "coin-toss.js" in the same directory. Open the HTML file in a web browser, and you can toss the coin by clicking the "Toss the Coin" button.



// **************************************************************Chapter 28, 29 (Converting Strings)**************************************************************************

1. parseInt() function:

  The parseInt() function parses a string and returns an integer.
You can specify the radix(base) of the number you're parsing (e.g., 10 for decimal).
Example:

var str = "42";
var num = parseInt(str, 10); // Converts "42" to the integer 42
Number() constructor:

You can use the Number() constructor to convert a string to a number(integer or floating - point).
  Example:

var str = "42";
var num = Number(str); // Converts "42" to the number 42

2.  function stringToInteger(str) {
  // Use parseInt to convert the string to an integer
  var num = parseInt(str, 10); // The second argument specifies the base (radix), 10 for decimal

  // Check if the conversion was successful
  if (!isNaN(num)) {
    return num; // Return the integer
  } else {
    return "Conversion failed"; // Handle the case where conversion failed
  }
}

// Usage
var result = stringToInteger("123");
console.log(result); // Output: 123

3. var str = "3.14"; // String containing a decimal number

var floatingPointNumber = parseFloat(str);

console.log(floatingPointNumber); // Output: 3.14


4. function isConvertibleToNumber(str) {
  // Try to convert to an integer
  var integerResult = parseInt(str, 10);

  // Try to convert to a float
  var floatResult = parseFloat(str);

  // Check if either conversion is successful
  if (!isNaN(integerResult) || !isNaN(floatResult)) {
    return true; // The string can be converted to a number
  } else {
    return false; // The string cannot be converted to a number
  }
}

// Test cases
console.log(isConvertibleToNumber("123"));      // true (can be converted to an integer)
console.log(isConvertibleToNumber("3.14"));     // true (can be converted to a float)
console.log(isConvertibleToNumber("abc"));      // false (cannot be converted to a number)
console.log(isConvertibleToNumber("123abc"));   // false (cannot be converted to a number)

5. var number = 42;
var stringNumber = number.toString(); // Converts the number to a string
console.log(stringNumber); // Outputs: "42"

6. function numberToString() {
  var number = 42;
  var stringNumber = number.toString();
  return stringNumber;
}

var result = numberToString();
console.log(result); // Outputs: "42"


7. var decimalString = "3.14";
var integerNumber = parseInt(decimalString, 10); // The second argument (base) specifies the radix (base) for parsing.

console.log(integerNumber); // Outputs: 3

// In this example, parseInt() takes the decimal string "3.14" and converts it to the integer 3 by removing the decimal part.

// If you want to round the decimal number to the nearest integer, you can use the Math.round() function in combination with parseFloat():


var decimalString = "3.14";
var roundedNumber = Math.round(parseFloat(decimalString));

console.log(roundedNumber); // Outputs: 3



// **************************************************************Chapter 30 (Controlling the length of decimals) **************************************************************************

1.  var num = 3.14159265359; // Replace this with your number
var newNum = num.toFixed(4).toString();

console.log(newNum); // Outputs: "3.1416"

2. var num = 3.14159265359; // Replace this with your number
num = parseFloat(num.toFixed(2));

console.log(num); // Outputs: 3.14

3. if (num.toFixed(2).toString().length > 4) {
  // Your code here
}

4. var originalNumber = 123.456789; // Replace this with your number

// Round the number to 2 decimal places and convert it to a string
var roundedString = originalNumber.toFixed(2);

// Display the rounded string in an alert
alert("Rounded Number: " + roundedString);

// Replace 123.456789 with the number you want to round to 2 decimal places and display as a string in the alert. When you run this code, it will show an alert with the rounded number as a string with 2 decimal places.


// **************************************************************Chapter 31 - 34 (Date & Time) **************************************************************************

1. var dObj = new Date();

2. var dObj = new Date();
var dStr = dObj.toString();

3. var d = new Date(); // Create a Date object (you can replace this with your Date object)
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; // Array of days of the week
var day = daysOfWeek[d.getDay()]; // Get the day of the week and assign it to the 'day' variable

4. var d = new Date(); // Create a Date object (you can replace this with your Date object)
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; // Array of days of the week
var dayIndex = d.getDay(); // Get the numeric day of the week (0 for Sunday, 1 for Monday, etc.)
var currentDay = dayNames[dayIndex]; // Get the day name using the dayIndex

alert("The current day is: " + currentDay + " (Index: " + dayIndex + ")");


5. var currentDate = new Date(); // Create a Date object

var year = currentDate.getFullYear(); // Get the year (e.g., 2023)
var month = currentDate.getMonth(); // Get the month (0-11, where 0 is January)
var day = currentDate.getDate(); // Get the day of the month (1-31)
var hours = currentDate.getHours(); // Get the hours (0-23)
var minutes = currentDate.getMinutes(); // Get the minutes (0-59)
var seconds = currentDate.getSeconds(); // Get the seconds (0-59)
var milliseconds = currentDate.getMilliseconds(); // Get the milliseconds (0-999)
var dayOfWeek = currentDate.getDay(); // Get the day of the week (0 for Sunday, 1 for Monday, etc.)

// Display the extracted values
console.log("Year: " + year);
console.log("Month: " + month);
console.log("Day: " + day);
console.log("Hours: " + hours);
console.log("Minutes: " + minutes);
console.log("Seconds: " + seconds);
console.log("Milliseconds: " + milliseconds);
console.log("Day of the Week: " + dayOfWeek);

6. var later = new Date(2020, 11, 31); // December is represented by 11 (0-based index)


7. var myDate = new Date(1992, 1, 2); // February is represented by 1 (0-based index)


8. var referenceDate = new Date('1980-01-01'); // Create a Date object for the reference date
var currentDate = new Date(); // Create a Date object for the current date
var millisecondsElapsed = currentDate - referenceDate;
alert(millisecondsElapsed);

9. var date = new Date(); // Create a Date object with the current date
date.setFullYear(2022); // Set the year to 2022

console.log(date); // Check the updated date

10. function changeMonthToJanuary(inputDate) {
  // Create a copy of the inputDate to avoid modifying the original date
  var newDate = new Date(inputDate);

  // Set the month to January (month index 0)
  newDate.setMonth(0);

  return newDate;
}

// Example usage:
var currentDate = new Date(); // Current date
var newDate = changeMonthToJanuary(currentDate);

console.log(currentDate); // Original date
console.log(newDate); // Date with the month changed to January

11. function changeDayOfWeek(inputDate, newDayOfWeek) {
  // Create a copy of the inputDate to avoid modifying the original date
  var newDate = new Date(inputDate);

  // Calculate the difference in days to reach the new dayOfWeek
  var currentDayOfWeek = newDate.getDay();
  var daysToAdd = newDayOfWeek - currentDayOfWeek;

  // Adjust the date to reach the new dayOfWeek
  newDate.setDate(newDate.getDate() + daysToAdd);

  return newDate;
}

// Example usage:
var currentDate = new Date(); // Current date
var newDate = changeDayOfWeek(currentDate, 4); // Change to Wednesday (0 = Sunday, 1 = Monday, ..., 6 = Saturday)

console.log(currentDate); // Original date
console.log(newDate); // Date with the day of the week changed

12. function changeMinutesOfTime(inputTime) {
  // Parse the inputTime string to create a Date object
  var timeParts = inputTime.split(":");
  var hours = parseInt(timeParts[0]);
  var minutes = parseInt(timeParts[1]);

  // Prompt the user for the new minutes value
  var newMinutes = prompt("Enter the new minutes value:");

  // Check if the input is a valid number
  if (!isNaN(newMinutes)) {
    // Create a new Date object with the updated minutes
    var newTime = new Date();
    newTime.setHours(hours);
    newTime.setMinutes(newMinutes);

    // Convert the new time to a string with the desired format
    var formattedTime = newTime.getHours() + ":" + newTime.getMinutes();

    return formattedTime;
  } else {
    return "Invalid input for minutes. Please enter a valid number.";
  }
}

// Example usage:
var inputTime = "14:30"; // Example input time in HH:mm format
var newTime = changeMinutesOfTime(inputTime);

console.log("Original Time: " + inputTime);
console.log("New Time: " + newTime);

13.function addHoursToTime(inputTime, hoursToAdd) {
  // Parse the inputTime string to create a Date object
  var timeParts = inputTime.split(":");
  var hours = parseInt(timeParts[0]);
  var minutes = parseInt(timeParts[1]);

  // Create a new Date object with the original time
  var newTime = new Date();
  newTime.setHours(hours);
  newTime.setMinutes(minutes);

  // Add the specified number of hours
  newTime.setHours(newTime.getHours() + hoursToAdd);

  // Convert the new time to a string with the desired format
  var formattedTime = newTime.getHours() + ":" + newTime.getMinutes();

  return formattedTime;
}

// Example usage:
var inputTime = "14:30"; // Example input time in HH:mm format
var hoursToAdd = 3; // Example number of hours to add
var newTime = addHoursToTime(inputTime, hoursToAdd);

console.log("Original Time: " + inputTime);
console.log("New Time (after adding " + hoursToAdd + " hours): " + newTime);

14. function calculateAge(birthdate) {
  // Parse the birthdate string to create a Date object
  var birthdateParts = birthdate.split("-");
  var birthYear = parseInt(birthdateParts[0]);
  var birthMonth = parseInt(birthdateParts[1]);
  var birthDay = parseInt(birthdateParts[2]);
  // Create a Date object for the current date
  var currentDate = new Date();
  // Calculate the age
  var age = currentDate.getFullYear() - birthYear;
  // Check if the birthday for this year has occurred yet
  if (
    currentDate.getMonth() < birthMonth - 1 ||
    (currentDate.getMonth() === birthMonth - 1 && currentDate.getDate() < birthDay)
  ) {
    age--; // Subtract 1 year if the birthday hasn't occurred yet
  }
  return age;
}
// Example usage:
var birthdate = "1990-05-15"; // Example birthdate in YYYY-MM-DD format
var age = calculateAge(birthdate);
console.log("Your age is: " + age + " years");



// **************************************************************Chapter 35 - 37 (Functions) **************************************************************************


1.function displayAlert() {


2. function askName() {
  var userName = prompt("Enter name");
  // You can perform actions with userName here or return it if needed
}
// Call the function to prompt the user for their name
askName();


3.    function mainFunction() {
  // Call the first function
  function1();
  // Call the second function
  function2();
}
function function1() {
  console.log("This is function1");
}
function function2() {
  console.log("This is function2");
}
// Call the main function to execute both function1 and function2
mainFunction();


4.  function displayName() {
  var name = prompt("Enter name:");
  alert("Hello, " + name + "!");
}
// Call the function to execute it
displayName();


5. function concat(variable, str, num) {
  // Rest of the function code here...
}
// Example function call
concat(myVar, "Hello", 42);


6. function concatenateStrings(str1, str2) {
  var result = str1 + str2;
  return result;
}

// Example function call
var combinedString = concatenateStrings("Hello, ", "World!");
console.log(combinedString); // Output: "Hello, World!"


7.  function multiplyAndAssign(param1, param2, param3) {
  var result = param1 * param2 * param3;
  return result;
}

// Example usage:
var num1 = 2;
var num2 = 3;
var num3 = 4;

var multiplicationResult = multiplyAndAssign(num1, num2, num3);
console.log("Multiplication Result:", multiplicationResult); // Output: Multiplication Result: 24



8.  function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0; // To handle an empty array
  }
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  var average = sum / numbers.length;
  return average;
}
// Example usage:
var numbersArray = [5, 10, 15, 20];
var avg = calculateAverage(numbersArray);
console.log("Average:", avg); // Output: Average: 12.5


9.  function addNumbers(num1, num2) {
  return num1 + num2;
}
// Example usage:
var x = 5;
var y = 7;
var sum = addNumbers(x, y);
console.log("Sum:", sum); // Output: Sum: 12

10. function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0; // Handle the case of an empty array to avoid division by zero.
  }
  const sum = numbers.reduce((total, num) => total + num, 0);
  const average = sum / numbers.length;
  return average;
}
// Example usage:
const numbersArray = [10, 15, 20, 25, 30];
const averageResult = calculateAverage(numbersArray);
console.log("Average:", averageResult); // Output: Average: 20


11. function add(a, b) {
  return a + b;
}

// Capture the returned value in a variable
const result = add(5, 3);

console.log(result); // Output: 8


12. function countLetters(word) {
  // Create an empty object to store letter counts
  const letterCounts = {};

  // Loop through each character in the word
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase(); // Convert to lowercase for case-insensitivity
    // Check if the character is a letter (exclude non-alphabetic characters)
    if (/^[a-z]$/.test(letter)) {
      // If the letter is not in the letterCounts object, initialize it to 1, otherwise increment the count
      if (letterCounts[letter]) {
        letterCounts[letter]++;
      } else {
        letterCounts[letter] = 1;
      }
    }
  }
  return letterCounts;
}
// Example usage:
const word = "Hello, World!";
const result = countLetters(word);
console.log(result);

13. function setYear(date, year) {
  date.setFullYear(year);
}

// Example usage:
const myDate = new Date(); // Create a Date object
setYear(myDate, 2023); // Set the year to 2023
console.log(myDate); // Output the updated Date object

14. function calculateAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
// Example usage:
const dob = '1990-05-15'; // Replace with the person's date of birth in 'YYYY-MM-DD' format
const age = calculateAge(dob);
console.log(`The person's age is ${age} years.`);

15. function checkWordPresence(word, array) {
  return array.includes(word);
}

// Example usage:
const wordToFind = 'hassan';
const wordArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];

const isPresent = checkWordPresence(wordToFind, wordArray);
console.log(`Is '${wordToFind}' present in the array? ${isPresent}`);


16. function repeatLetter(letter, times) {
  return letter.repeat(times);
}
// Example usage:
const letterToRepeat = 'a';
const repetitionCount = 10;

const repeatedString = repeatLetter(letterToRepeat, repetitionCount);
console.log(repeatedString); // Outputs: "aaaaaaaaaa"


17. function reverseArray(arr) {
  return arr.reverse();
}

// Example usage:
const originalArray = ['a', 'b', 'c', 'd', 'e'];
const reversedArray = reverseArray(originalArray);

console.log(reversedArray); // Outputs: ['e', 'd', 'c', 'b', 'a']




// **************************************************************Chapter 38 (Local vs. Global Variables) **************************************************************************

1. function calculateSum(a, b) {
  // Declare a local variable 'result' within the function scope
  var result = a + b;

  // You can use the 'result' variable within this function
  console.log("The sum of " + a + " and " + b + " is: " + result);

  // The 'result' variable is not accessible outside of this function
  return result;
}

// Calling the function with two numbers
var sum = calculateSum(5, 7);

// Attempting to access 'result' outside of the function scope will result in an error
console.log(result); // This will produce an error


2. // Declare a global variable
var globalVar = "I'm a global variable";
function accessGlobalVariable() {
  // You can access the global variable 'globalVar' here
  console.log(globalVar);
}
// Call the function to access the global variable
accessGlobalVariable();





// **************************************************************Chapter 39, 40 (Switch Statements) **************************************************************************


1.   var dayOfWeek = "Monday";

switch (dayOfWeek) {
  case "Monday":
    console.log("It's the start of the workweek.");
    break;
  case "Tuesday":
    console.log("It's another workday.");
    break;
  case "Wednesday":
    console.log("It's the middle of the workweek.");
    break;
  case "Thursday":
    console.log("It's almost the weekend.");
    break;
  case "Friday":
    console.log("It's the last workday of the week.");
    break;
  default:
    console.log("It's the weekend!");
}

2.  var cityName = prompt("Enter a city name:");

switch (cityName) {
  case "Karachi":
    alert("You entered Karachi. It's a vibrant city!");
    break;
  case "Lahore":
    alert("You entered Lahore. Known for its rich culture.");
    break;
  case "Islamabad":
    alert("You entered Islamabad. The capital city.");
    break;
  default:
    alert("City not recognized. Please enter a valid city.");
}




// **************************************************************Chapter 41, 42 (while loops, do…while loops) **************************************************************************

1. 
// Using a for loop:
let i = 0;
for (i; i < 2; i++) {
  // Nothing to do here
}

// Using a while loop
let i = 0;
while (i < 2) {
  // Nothing to do here
  i++;
}


2. 
// Using a for loop:

var animals = ["horse", "ox", "cow", "pig", "duck"];

for (var i = 0; i < animals.length; i++) {
  if (animals[i] === "pig") {
    alert("Found it!");
    break; // This will exit the loop when "pig" is found.
  }
}
// Using a forEach loop:

var animals = ["horse", "ox", "cow", "pig", "duck"];

animals.forEach(function(animal) {
  if (animal === "pig") {
    alert("Found it!");
    return; // This will exit the loop when "pig" is found.
  }
});
// Both of these code snippets will accomplish the same task: looking for "pig" in the animals array, displaying an alert when found, and breaking out of the loop.


3.  
// Using a while loop:
var i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}


// Using a do...while loop:
var i = 1;

do {
  console.log(i);
  i++;
} while (i <= 10);
Both of these loops will produce the same output, printing the numbers from 1 to 10.


4. var userInput;
var isNumber = false;

while (!isNumber) {
  userInput = prompt("Please enter a number:");
  if (!isNaN(userInput)) {
    isNumber = true;
    console.log("You entered the number: " + userInput);
  } else {
    alert("That's not a valid number. Please try again.");
  }
}


5. var userInput;
var isNumber = false;

while (!isNumber) {
  userInput = prompt("Please enter a number:");
  if (!isNaN(userInput)) {
    isNumber = true;
    var number = parseInt(userInput);
    if (number % 2 === 0) {
      console.log(number + " is even.");
    } else {
      console.log(number + " is odd.");
    }
  } else {
    alert("That's not a valid number. Please try again.");
  }
}


6. // Generate a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;
// Number of attempts
var attempts = 0;
// Function to start the game
function startGame() {
  var userGuess;
  var message;
  do {
    userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
    if (isNaN(userGuess)) {
      alert("Please enter a valid number.");
    } else {
      attempts++;
      message = checkGuess(userGuess);
      alert(message);
    }
  } while (message !== "Congratulations! You guessed the number.");
}
// Function to check the user's guess
function checkGuess(guess) {
  if (guess < randomNumber) {
    return "Too low! Try again.";
  } else if (guess > randomNumber) {
    return "Too high! Try again.";
  } else {
    return "Congratulations! You guessed the number.";
  }
}
// Start the game
startGame();


7. 

// Using a While Loop:

function countdownWhile(seconds) {
  while (seconds >= 0) {
    console.log(seconds);
    seconds--;
  }
  console.log("Countdown complete!");
}
// Start a countdown from 5 seconds
countdownWhile(5);

// Using a Do-While Loop:

function countdownDoWhile(seconds) {
  do {
    console.log(seconds);
    seconds--;
  } while (seconds >= 0);
  console.log("Countdown complete!");
}
// Start a countdown from 5 seconds
countdownDoWhile(5);




// **************************************************************Chapter 46, 48 (Events) **************************************************************************

1. <!DOCTYPE html>
<html>
<head>
    <title>Click Event Example</title>
</head>
<body>

<button id="myButton">Click me</button>

<script>
    // Get a reference to the button element by its id
    var button = document.getElementById("myButton");

    // Add a click event listener to the button
    button.addEventListener("click", function() {
        // Function to be executed when the button is clicked
        alert("Button clicked!");
    });
</script>

</body>
</html>



2. <!DOCTYPE html>
<html>
<head>
    <title>Hide Element on Click</title>
    <style>
        /* CSS style to hide the element */
        .hidden {
            display: none;
        }
    </style>
</head>
<body>

<div id="elementToHide">This is the element to hide.</div>
<button id="hideButton">Click to Hide</button>

<script>
    // Get references to the elements
    var elementToHide = document.getElementById("elementToHide");
    var hideButton = document.getElementById("hideButton");

    // Add a click event listener to the button
    hideButton.addEventListener("click", function() {
        // Hide the element by adding a CSS class
        elementToHide.classList.add("hidden");
    });
</script>

</body>
</html>



3. <!DOCTYPE html>
<html>
<head>
    <title>Hover Effect</title>
    <style>
        /* Default link styles */
        a {
            color: blue; /* Original color */
            text-decoration: none;
            transition: color 0.3s; /* Smooth color transition */
        }

        /* Hover effect */
        a:hover {
            color: red; /* Color change on hover */
        }
    </style>
</head>
<body>

<!-- The link -->
<a href="#">Hover over me</a>

</body>
</html>


4. <!DOCTYPE html>
<html>
<head>
    <title>Scroll to Top</title>
    <style>
        /* Style for the scroll-to-top link */
        .scroll-to-top {
            display: none;
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #007bff;
            color: #fff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 4px;
            cursor: pointer;
        }
    </style>
</head>
<body>

<!-- Content -->
<h1>Scroll to Top Example</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>

<!-- Scroll-to-top link -->
<a href="#" class="scroll-to-top" id="scroll-to-top-link">Scroll to Top</a>

<script>
    // Get the scroll-to-top link element
    var scrollToTopLink = document.getElementById("scroll-to-top-link");

    // Add a click event listener to the link
    scrollToTopLink.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default behavior of the link

        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scroll behavior
        });
    });

    // Show/hide the scroll-to-top link based on scroll position
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollToTopLink.style.display = "block"; // Show the link
        } else {
            scrollToTopLink.style.display = "none"; // Hide the link
        }
    });
</script>

</body>
</html>


5. <!DOCTYPE html>
<html>
<head>
    <title>Play Sound On Click</title>
</head>
<body>

<!-- Sound link -->
<a href="#" id="play-sound-link">Play Sound</a>

<script>
    // Get the play sound link element
    var playSoundLink = document.getElementById("play-sound-link");

    // Create an Audio object with the path to your audio file
    var audio = new Audio("path/to/your/audio-file.mp3"); // Replace with your audio file path

    // Add a click event listener to the link
    playSoundLink.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default behavior of the link

        // Play the audio
        audio.play();
    });
</script>

</body>
</html>


6. <!DOCTYPE html>
<html>
<head>
    <title>Open New Window</title>
</head>
<body>

<!-- New window link -->
<a href="#" id="open-new-window-link">Open New Window</a>

<script>
    // Get the open new window link element
    var openNewWindowLink = document.getElementById("open-new-window-link");

    // Add a click event listener to the link
    openNewWindowLink.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default behavior of the link

        // Open a new window
        window.open("https://www.example.com", "_blank"); // Replace with the URL you want to open
    });
</script>

</body>
</html>


7. <!DOCTYPE html>
<html>
<head>
    <title>Button Alert</title>
</head>
<body>

<!-- Button element -->
<button id="alert-button">Click Me</button>

<script>
    // Get the alert button element
    var alertButton = document.getElementById("alert-button");

    // Add a click event listener to the button
    alertButton.addEventListener("click", function () {
        alert("Button Clicked!"); // Display an alert message
    });
</script>

</body>
</html>


8. <!DOCTYPE html>
<html>
<head>
    <title>Hover Effect</title>
    <style>
        /* Define the default styles for the button */
        .my-button {
            background-color: #3498db; /* Default background color */
            color: #fff; /* Default text color */
            padding: 10px 20px;
            border: none;
            cursor: pointer;
        }

        /* Add a hover effect */
        .my-button:hover {
            background-color: #e74c3c; /* New background color on hover */
        }
    </style>
</head>
<body>

<!-- Button element with the class "my-button" -->
<button class="my-button">Hover Me</button>

</body>
</html>


9. <!DOCTYPE html>
<html>
<head>
    <title>Play Sound Button</title>
</head>
<body>

<!-- Button element -->
<button id="playButton">Play Sound</button>

<!-- Audio element with an initial source (can be hidden) -->
<audio id="myAudio" src="sound.mp3" preload="auto"></audio>

<script>
    // Get references to the button and audio elements
    var playButton = document.getElementById('playButton');
    var audio = document.getElementById('myAudio');

    // Add a click event listener to the button
    playButton.addEventListener('click', function() {
        // Play the audio
        audio.play();
    });
</script>

</body>
</html>


10. <!DOCTYPE html>
<html>
<head>
    <title>Mouseover Event</title>
</head>
<body>

<!-- Element that triggers the mouseover event -->
<div id="hoverElement" style="width: 200px; height: 100px; background-color: lightblue; text-align: center; padding: 20px;">
    Hover over me
</div>

<script>
    // Get a reference to the element
    var hoverElement = document.getElementById('hoverElement');

    // Add a mouseover event listener to the element
    hoverElement.addEventListener('mouseover', function() {
        // Alert a message when the mouse is over the element
        alert('Mouseover Event: You moved your mouse over the element.');
    });
</script>

</body>
</html>



11.   <!DOCTYPE html>
<html>
<head>
    <title>Mouseout Event</title>
</head>
<body>

<!-- Element that triggers the mouseout event -->
<div id="hideElement" style="width: 200px; height: 100px; background-color: lightblue; text-align: center; padding: 20px;">
    Move your mouse out of me
</div>

<script>
    // Get a reference to the element
    var hideElement = document.getElementById('hideElement');

    // Add a mouseout event listener to the element
    hideElement.addEventListener('mouseout', function() {
        // Hide the element when the mouse moves out of it
        hideElement.style.display = 'none';
    });
</script>

</body>
</html>

// In this example:
// We have a div element with the id "hideElement" that represents the element you want to hide when the mouse moves out of it. We've added some basic styling to the element.
// In the JavaScript section, we get a reference to the "hideElement" using getElementById.
// We add a mouseout event listener to the element. When the user moves their mouse out of the element, it triggers the mouseout event, and the callback function inside the event listener hides the element by setting its display property to 'none'.



12.  <!DOCTYPE html>
<html>
<head>
    <title>Open and Close Window</title>
    <script>
        let popupWindow;

        function openPopup() {
            const width = event.clientX;
            const height = event.clientY;

            // Open a new window with dimensions based on mouse position
            popupWindow = window.open('', '', `width=${width},height=${height}`);

            // Check if the popup window has been blocked
            if (popupWindow === null) {
                alert('Popup window blocked. Please enable pop-ups for this site.');
                return;
            }

            // Add content to the popup window
            popupWindow.document.write(`
                <html>
                <head>
                    <title>Popup Window</title>
                </head>
                <body>
                    <h1>Hello, this is a popup window!</h1>
                    <button onclick="closePopup()">Close</button>
                </body>
                </html>
            `);
        }

        function closePopup() {
            if (popupWindow) {
                popupWindow.close();
            }
        }
    </script>
</head>
<body>
    <!-- Link that opens the popup window -->
    <a href="javascript:void(0);" onclick="openPopup()">Open Popup</a>
</body>
</html>

// We have a link labeled "Open Popup" that triggers the openPopup function when clicked.
// In the openPopup function, we get the mouse position (clientX and clientY) to determine the width and height of the new window.
// We open a new window using window.open with the specified width and height. We also check if the popup window has been blocked by the browser.
// We add content to the popup window, including a "Close" button that triggers the closePopup function when clicked.
// In the closePopup function, we check if the popup window exists (not null) and then close it when the "Close" button is clicked.



// **************************************************************Chapter 49, 50 (Reading and Setting field values) **************************************************************************


1.  # Read user input and store it in a variable
user_input = input("Enter a value: ")

# Print the user input to the console
print("You entered:", user_input)


2.  <!DOCTYPE html>
<html>
<head>
    <title>Checkbox Example</title>
</head>
<body>
    <label for="myCheckbox">Check this box:</label>
    <input type="checkbox" id="myCheckbox">
    
    <script>
        // Get the checkbox element
        var checkbox = document.getElementById("myCheckbox");

        // Function to handle checkbox change
        function handleCheckboxChange() {
            if (checkbox.checked) {
                console.log("Checkbox is checked.");
            } else {
                console.log("Checkbox is unchecked.");
            }
        }

        // Add an event listener to detect checkbox state changes
        checkbox.addEventListener("change", handleCheckboxChange);
    </script>
</body>
</html>


3.  <!DOCTYPE html>
<html>
<head>
    <title>Select Box Example</title>
</head>
<body>
    <label for="mySelect">Select an option:</label>
    <select id="mySelect">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
    </select>
    
    <script>
        // Get the select element
        var select = document.getElementById("mySelect");

        // Function to handle select change
        function handleSelectChange() {
            var selectedValue = select.value;
            console.log("Selected value: " + selectedValue);
        }

        // Add an event listener to detect select changes
        select.addEventListener("change", handleSelectChange);
    </script>
</body>
</html>


4.  <!DOCTYPE html>
<html>
<head>
    <title>Text Field Example</title>
</head>
<body>
    <!-- Input field with an ID -->
    <input type="text" id="myTextField" value="This is some text">

    <!-- JavaScript to modify the field -->
    <script>
        // Get the input field by its ID
        var textField = document.getElementById("myTextField");

        // Modify the text value of the field
        textField.value = "New text in the field";
    </script>
</body>
</html>


5. <!DOCTYPE html>
<html>
<head>
    <title>Marital Status Example</title>
</head>
<body>
    <!-- Input field for marital status -->
    <label for="maritalStatus">Are you married?</label>
    <select id="maritalStatus" onchange="updateStatus()">
        <option value="true">Yes</option>
        <option value="false">No</option>
    </select>

    <!-- Input field for status -->
    <input type="text" id="status" value="">

    <!-- JavaScript to update the status field -->
    <script>
        // Function to update the status field based on the marital status
        function updateStatus() {
            var marriedSelect = document.getElementById("maritalStatus");
            var statusField = document.getElementById("status");
            
            var isMarried = marriedSelect.value === "true";

            if (isMarried) {
                // If married, clear the status field
                statusField.value = "";
            } else {
                // If not married, set "available" as the status
                statusField.value = "available";
            }
        }
    </script>
</body>
</html>



6. <!DOCTYPE html>
<html>
<head>
    <title>Fill Input Field Example</title>
</head>
<body>
    <!-- Input field with an ID -->
    <input type="text" id="myInput" value="">

    <!-- Button to trigger the filling of the input field -->
    <button onclick="fillInputField()">Fill Input Field</button>

    <!-- JavaScript to fill the input field if it's empty -->
    <script>
        // Function to fill the input field
        function fillInputField() {
            var inputField = document.getElementById("myInput");
            var defaultValue = "Default Text"; // You can change this to the desired default value

            // Check if the input field is empty
            if (inputField.value.trim() === "") {
                inputField.value = defaultValue; // Set the default value
            }
        }
    </script>
</body>
</html>






 {/* **************************************************************Chapter 49,50(Reading and Setting field values)**************************************************************************   */}


 1. <!DOCTYPE html>
<html>
<head>
    <title>Expandable Paragraph</title>
    <style>
        #expandable-paragraph {
            max-height: 100px; /* Set the initial max height of the paragraph */
            overflow: hidden;
            transition: max-height 0.5s ease; /* Add a smooth transition effect */
        }
    </style>
</head>
<body>
    <div id="expandable-paragraph">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus ut libero vehicula efficitur.
            Vivamus ultrices massa euismod justo convallis, non bibendum odio hendrerit. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam in dolor sit amet turpis bibendum
            consectetur. Proin fringilla risus non ex tempus, id condimentum turpis vestibulum. Aenean venenatis, diam
            in venenatis suscipit, libero nisi scelerisque est, nec aliquam tortor justo eu arcu. Vestibulum interdum
            velit eget nisi facilisis, in congue metus cursus. Nullam in urna ut erat lacinia interdum. Fusce tincidunt
            risus ut odio efficitur cursus.
        </p>
    </div>
    <button onclick="toggleExpand()">Show More</button>

    <script>
        var paragraph = document.getElementById("expandable-paragraph");

        function toggleExpand() {
            if (paragraph.style.maxHeight) {
                paragraph.style.maxHeight = null;
            } else {
                paragraph.style.maxHeight = paragraph.scrollHeight + "px";
            }
        }
    </script>
</body>
</html>


2.  <!DOCTYPE html>
<html>
<head>
    <title>Search Paragraph</title>
</head>
<body>
    <p id="paragraph">
        This is a sample paragraph. You can search for specific words or phrases within this paragraph.
    </p>
    <label for="searchTerm">Search Term:</label>
    <input type="text" id="searchTerm" placeholder="Enter search term">
    <button onclick="searchParagraph()">Search</button>
    <div id="searchResult"></div>

    <script>
        function searchParagraph() {
            // Get the paragraph text
            var paragraphText = document.getElementById("paragraph").textContent;

            // Get the search term entered by the user
            var searchTerm = document.getElementById("searchTerm").value;

            // Use the JavaScript String method includes() to check if the search term exists in the paragraph
            if (paragraphText.includes(searchTerm)) {
                document.getElementById("searchResult").textContent = "Found: '" + searchTerm + "'";
            } else {
                document.getElementById("searchResult").textContent = "Not found: '" + searchTerm + "'";
            }
        }
    </script>
</body>
</html>


// 3.  <!DOCTYPE html>
// <html>
// <head>
//     <title>Find Longest Word</title>
// </head>
// <body>
//     <p id="paragraph">
//         This is a sample paragraph. It contains some words, and we want to find the longest word within it.
//     </p>
//     <button onclick="findLongestWord()">Find Longest Word</button>
//     <div id="longestWord"></div>

//     <script>
//         function findLongestWord() {
//             // Get the paragraph text
//             var paragraphText = document.getElementById("paragraph").textContent;

//             // Split the paragraph into words
//             var words = paragraphText.split(/\s+/);

//             // Initialize variables to keep track of the longest word
//             var longestWord = "";
//             var longestWordLength = 0;

//             // Iterate through the words to find the longest one
//             for (var i = 0; i < words.length; i++) {
//                 var word = words[i];
//                 // Remove punctuation marks from the word (optional)
//                 word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

//                 if (word.length > longestWordLength) {
//                     longestWord = word;
//                     longestWordLength = word.length;
//                 }
//             }

//             // Display the longest word
//             document.getElementById("longestWord").textContent = "Longest word: " + longestWord;
//         }
//     </script>
// </body>
// </html>



4. <!DOCTYPE html>
<html>
<head>
    <title>Set Paragraph Text</title>
</head>
<body>
    <p id="outputParagraph">This is the initial paragraph text.</p>
    <input type="text" id="inputField" placeholder="Enter text">
    <button onclick="setTextFromInput()">Set Text</button>

    <script>
        function setTextFromInput() {
            // Get the input field value
            var inputValue = document.getElementById("inputField").value;

            // Get the paragraph element
            var outputParagraph = document.getElementById("outputParagraph");

            // Check if the input value is not empty
            if (inputValue.trim() !== "") {
                // Set the paragraph text to the input value
                outputParagraph.textContent = inputValue;
            }
        }
    </script>
</body>
</html>


5.  <!DOCTYPE html>
<html>
<head>
    <title>Set Paragraph Text</title>
</head>
<body>
    <p id="outputParagraph">This is the initial paragraph text.</p>
    <input type="text" id="inputField" placeholder="Enter text">
    <button onclick="setTextFromInput()">Set Text</button>

    <script>
        function setTextFromInput() {
            // Get the input field value
            var inputValue = document.getElementById("inputField").value;

            // Get the paragraph element
            var outputParagraph = document.getElementById("outputParagraph");

            // Define the specific word or phrase to match
            var specificWordOrPhrase = "hello"; // Change this to the desired word or phrase

            // Check if the input value matches the specific word or phrase (case-insensitive)
            if (inputValue.trim().toLowerCase() === specificWordOrPhrase.toLowerCase()) {
                // Set the paragraph text to the input value
                outputParagraph.textContent = inputValue;
            }
        }
    </script>
</body>
</html>


6.  <!DOCTYPE html>
<html>
<head>
    <title>Set Paragraph Text</title>
</head>
<body>
    <p id="outputParagraph">This is the initial paragraph text.</p>
    <input type="text" id="inputField" placeholder="Enter text">
    <button onclick="setTextFromInput()">Set Text</button>

    <script>
        function setTextFromInput() {
            // Get the input field value
            var inputValue = document.getElementById("inputField").value;

            // Get the paragraph element
            var outputParagraph = document.getElementById("outputParagraph");

            // Define the maximum allowed length
            var maxLength = 10; // Change this to the desired maximum length

            // Check if the input value is less than the maximum length
            if (inputValue.trim().length <= maxLength) {
                // Set the paragraph text to the input value
                outputParagraph.textContent = inputValue;
            }
        }
    </script>
</body>
</html>





// **************************************************************Chapter 52 (Manipulating Images and Text) **************************************************************************



1. <!DOCTYPE html>
<html>
<head>
    <title>Click to Make Bold</title>
    <style>
        .bold {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <p id="sentence" onclick="toggleBold()">Click on this sentence to make it bold.</p>

    <script>
        function toggleBold() {
            var sentence = document.getElementById("sentence");
            sentence.classList.toggle("bold");
        }
    </script>
</body>
</html>


2. <!DOCTYPE html>
<html>
<head>
    <title>Image Hover Effect</title>
    <style>
        .container {
            position: relative;
            width: 300px;
            height: 200px;
        }

        .image {
            width: 100%;
            height: 100%;
        }

        .text {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: none;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            text-align: center;
            padding-top: 90px;
            font-size: 18px;
        }

        .container:hover .image {
            display: none;
        }

        .container:hover .text {
            display: block;
        }
    </style>
</head>
<body>
    <div class="container">
        <img class="image" src="your-image.jpg" alt="Image">
        <div class="text">Hovered Text</div>
    </div>
</body>
</html>


3. <!DOCTYPE html>
<html>
<head>
    <title>Heading Hover Effect</title>
    <style>
        /* Default styles for the heading */
        h1 {
            background-color: lightgray;
            padding: 10px;
        }

        /* Styles for the heading when hovered */
        h1:hover {
            background-color: black;
        }
    </style>
</head>
<body>
    <h1>This is a heading</h1>
</body>
</html>


4. <!DOCTYPE html>
<html>
<head>
    <title>Paragraph Hover Effect</title>
    <style>
        /* Default styles for the paragraph */
        p {
            font-size: 16px;
        }

        /* Styles for the paragraph when hovered */
        p:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <p>This is a paragraph. Hover over it to add an underline.</p>
</body>
</html>

{/* 
 **************************************************************Chapter 52 Manipulating Images and Text ************************************************************************** */}



 
 1.  <!DOCTYPE html>
<html>
<head>
    <title>Image Swapping</title>
</head>
<body>
    <img id="image1" src="image1.jpg" alt="Image 1">
    <img id="image2" src="image2.jpg" alt="Image 2">
    <button onclick="swapImages()">Swap Images</button>

    <script>
        var image1 = document.getElementById("image1");
        var image2 = document.getElementById("image2");
        var isImage1Visible = true;

        function swapImages() {
            if (isImage1Visible) {
                image1.style.display = "none";
                image2.style.display = "block";
            } else {
                image1.style.display = "block";
                image2.style.display = "none";
            }

            isImage1Visible = !isImage1Visible;
        }
    </script>
</body>
</html>






























