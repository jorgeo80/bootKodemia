// First Comment

/* Multi-line
Comment*/

// Example
var ourName;

// Declare myName below this line
var myName;

// Setup
var a;
var b = 2;

// Only change code below this line
a = 7;
b = a;

// Example
var ourVar = 19;

// Only change code below this line
var a = 9

// Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a";

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";

// Declarations using cammel case
var studlyCapVar
var properCamelCase
var titleCaseOver

// Assignments
studlyCapVar = 10
properCamelCase = "A String"
titleCaseOver = 9000

var sum = 10 + 10;
var difference = 45 - 33;
var product = 8 * 10;
var quotient = 66 / 33;

var myVar = 87;
myVar++;

var myVar = 11;
myVar--;

var ourDecimal = 5.7;
var myDecimal = 3.5;
var product = 2.0 * 2.5;
var quotient = 4.4 / 2.0; // Fix this line
var remainder = 11 % 3;

var a = 3;
var b = 17;
var c = 12;

// Only modify code below this line
a += 12;
b += 9;
c += 7;

var a = 11;
var b = 9;
var c = 3;

// Only modify code below this line

a -= 6;
b -= 15;
c -= 1;

var a = 5;
var b = 12;
var c = 4.6;

// Only modify code below this line

a *= 5;
b *= 3;
c *= 10;

var a = 48;
var b = 108;
var c = 33;

// Only modify code below this line

a /= 12;
b /= 4;
c /= 11;

// Example
var firstName = "Alan";
var lastName = "Turing";

// Only change code below this line
var myFirstName = "Alan1";
var myLastName = "Turing1";

var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// Code	Output
// \'	single quote
// \"	double quote
// \\	backslash
// \n	newline
// \r	carriage return
// \t	tab
// \b	word boundary
// \f	form feed
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

// Example
var ourStr = "I come first. " + "I come second.";
var myStr = "This is the start. " + "This is the end.";

// Example
var ourStr = "I come first. ";
ourStr += "I come second.";
var myStr = "This is the first sentence. " 
myStr += "This is the second sentence."

// Example
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
var myName = 'Example';
var myStr = "My name is " + myName + " and I am well!";

// Example
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
var someAdjective = "great";
var myStr = "Learning to code is ";
myStr += someAdjective

// Example
var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length;
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;

// Example
var firstLetterOfFirstName = "";
var firstName = "Ada";
firstLetterOfFirstName = firstName[0];

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];

// Example
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
// Setup
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];

// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];
// Setup
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];

// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];
// Setup
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

// Example
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
var wordBlanks = myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb; // Only change this line;


// Example Arrays
var ourArray = ["John", 23];
var myArray = ['cadena',99];

// Example
var ourArray = [["the universe", 42], ["everything", 101010]];
var myArray = [["test1", 1],["test2", 2]];

// Example
var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50
// Setup
var myArray = [50,60,70];
var myData = myArray[0]

// Example
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].
// Setup
var myArray = [18,64,99];
myArray[0] = 45

// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]
// Setup
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])

// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]
// Setup
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();

// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].
// Setup
var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift(); //quita el primer elemento del array

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35])

var myList = [['beer1', 55], ['beer2', 40], ['beer3', 20], 
              ['beer4', 30], ['beer5', 25]];

// Example
function ourReusableFunction() {
    console.log("Heyya, World");
}
ourReusableFunction();
// Only change code below this line
function reusableFunction() {
console.log("Hi World");
}
reusableFunction();
  
// Example
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5
// Only change code below this line.
function functionWithArgs(numberOne, numberTwo) {
console.log(numberOne + numberTwo);
}
functionWithArgs(20, 27); // Outputs 5
// Declare your variable here
var myGlobal = 10

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5
}
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Example
function myLocalScope() {
    let myVar = 'use strict'; // you shouldn't need to edit this line   
    console.log(myVar);
  }
myLocalScope();

// Setup
var outerWear = "T-Shirt";
function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater"
  // Only change code above this line
  return outerWear;
}
myOutfit();

// Example
function minusSeven(num) {
    return num - 7;
}

// Only change code below this line
function timesFive(num){
    return num * 5
}

console.log(minusSeven(10));
console.log(timesFive(25));
console.log(timesFive(2));
console.log(timesFive(0));

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}
// addFive
function addFive() {
  sum += 5;
}
addThree();
addFive();

// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}
changed = change(10);
// Setup
var processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7)

// Example
function nextInLine(arr, item) {
    // Your code here
    arr.push(item)
    return arr[0], arr.shift() ;  // Change this line 
    
    
  }
  // Test Setup
  var testArr = [1,2,3,4,5];
  // Display Code
  console.log(nextInLine([], 5)); 
  console.log(nextInLine([], 1));
  console.log(nextInLine([2], 1));
  console.log(nextInLine([5,6,7,8,9], 1))
  nextInLine(testArr, 10) 
  console.log(testArr[4]) 
  
  
  function welcomeToBooleans() {

    // Only change code below this line.
  
    return true; // Change this line
  
    // Only change code above this line.
  }
  
  welcomeToBooleans()

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}
// Setup
function trueOrFalse(wasThatTrue) {
  // Only change code below this line.
  if (wasThatTrue) {
    return "Yes, that was true";
  } else {
    return "No, that was false";
  }  
  // Only change code above this line.
}
// Change this value to test
trueOrFalse(true);
trueOrFalse(false);

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
// Change this value to test
testEqual(10);
testEqual(12);
testEqual('12');

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
// Change this value to test
testStrict(10);
testStrict(7);
testStrict("7");

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
// Change this value to test
compareEquality(10, "10");
compareEquality("20", 20);

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}
// Change this value to test
testNotEqual(99);
testNotEqual("99");
testNotEqual(12);
testNotEqual("12");
testNotEqual("bob");

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}
// Change this value to test
testStrictNotEqual(17);
testStrictNotEqual("17");
testStrictNotEqual(12);
testStrictNotEqual("12");
testStrictNotEqual("bob");

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  if (val > 10) {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
// Change this value to test
testGreaterThan(0);
testGreaterThan(10);
testGreaterThan(11);
testGreaterThan(99);
testGreaterThan(100);
testGreaterThan(101);
testGreaterThan(150);


