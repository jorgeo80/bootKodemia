// HackerRank JavaScript

// Day 2 - Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
  let total_cost = 0
  if (tip_percent > 1 || tax_percent > 1) {
      total_cost += meal_cost * (1 + (tip_percent / 100 + tax_percent / 100))
  } else {
      total_cost += meal_cost * (1 + (tip_percent + tax_percent))
  }
  return Math.round(total_cost)
}

// Day 3
function main() {
    const N = parseInt(readLine(), 10);
    if (N % 2 !== 0) {
        console.log('Weird')
    } else if (N >= 6 && N <= 20) {
        console.log('Weird')
    } else {
        console.log('Not Weird')
    }
}

// Day 4
function Person(initialAge){
   // Add some more code to run some checks on initialAge
  if (initialAge < 0){
    initialAge = 0
    console.log('Age is not valid, setting age to 0.')
  } else {
    initialAge
  }    
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
   if (initialAge >= 0 && initialAge < 13) {
    console.log('You are young.')
   } else if (initialAge >= 13 && initialAge < 18) {
    console.log('You are a teenager.')
   } else {
     console.log('You are old.')
   }
  };
   this.yearPasses=function(){
          // Increment the age of the person in here
      initialAge ++
   };
}

// Day 5 
function main() {
    const n = parseInt(readLine(), 10);
    for (let i = 1; i <= 10; i++){
        console.log(`${n} x ${i} = ${n * i}`)
    }
}

// Day 6
function processData(input) {
  //Enter your code here
	const splitPhrase = phrase => {
	  let array = phrase.split("\n")
	  let int = parseInt(array[0])
	  for(let i = 1; i <= int; i ++){
		  let array1 = array[i].split("")
		  let odd = array1.filter((cv,ix) => (ix === 0 | ix % 2 === 0))
			  odd = odd.reduce((pv,cv) => `${pv}${cv}`,'')
		  let even = array1.filter((cv,ix) => (ix !== 0 & ix % 2 !== 0))
			  even = even.reduce((pv,cv) => `${pv}${cv}`,'')
		  console.log(`${odd} ${even}`)
	  }
	}
	splitPhrase(input)
} 

// Day 7
function main() {
    const n = parseInt(readLine(), 10);
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    console.log(arr.reverse().join(' '))

}

// Day 9
function factorial(n) {
    if (n <= 1){
        return 1
    } else {
        let answer = n * factorial(n-1)
        return answer
    }
}

// Day 11

function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    const hourglasses = (array) => {
  let value = []
  for (let i = 0; i < array.length - 2; i++) {
    for (let j = 0; j < array[i].length - 2; j++) {
      let arr = []
      for (let x = j; x <= j + 2; x++) {
          arr.push(array[i][x])
          arr.push(array[i+2][x])
      }
      arr.push(array[i+1][j+1])
      value.push(arr.reduce((pv, cv) => pv + cv, 0))
    }
  }
  value.sort((a, b) => a - b)
  let answer = value.pop()
  return answer
}

console.log(hourglasses(arr))
}

// Day 12

'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id);
        this.scores = scores;
    }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
       
    calculate() {
        let scores = this.scores;
        let avg = scores.reduce((pv, cv) => pv + cv, 0) / scores.length;
        if (avg >= 90 && avg <= 100) {
        return "O";
        }
        if (avg >= 80 && avg <= 90) {
        return "E";
        }
        if (avg >= 70 && avg <= 80) {
        return "A";
        }
        if (avg >= 55 && avg <= 75) {
        return "P";
        }
        if (avg >= 40 && avg <= 55) {
        return "D";
        }
        if (avg < 40) {
        return "T";
        }
    }
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}