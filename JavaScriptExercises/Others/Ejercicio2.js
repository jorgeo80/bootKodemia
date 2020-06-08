// Code goes here

let productName = "Hammer",
    productId = "H123";

console.log(productName, productId);

let price = 3,
    price2 = 5;

console.log(price +price2);

let price3 = 3,
    price4 = "5";

console.log(price3 +price4);

let firstName = "John",
    lastName = "Doe";

console.log(firstName+" "+lastName);

let first = 12,
    second = 3;

let answer = first * second;

console.log(answer);

/* Starting Blackjack Application */

let card1 = "Ace of spades",
    card2 = "Ten of heats";

console.log("Welcome to Blwckjack!!");

console.log("You are dealt: ");
console.log("  "+card1);
console.log("  "+card2);


let cards = ["Ace", "King", "Queen", "Jack"];

console.log(cards[0]); // Ace
console.log(cards[1]); // King
console.log(cards[2]); // Queen
console.log(cards[3]); // Jack
console.log(cards[4]); // undefined

// if statement example

let score = 1000;

if (score >= 1000) {
		score = score + 100;
};

console.log("Score is: " + score);

// if else statement example

let score = 100;

if (score >= 1000) {
	score = score + 100;
}
else if (score === 1000) {
	console.log("Almost!");
}
else {
	console.log("Nice try!");
};

console.log("Score is: " + score);

// switch and case

let state = 'TX';

switch(state) {
    case 'NY':
        console.log('New York');
        break;
    case 'TX':
        console.log('Texas');
        break;
    default:
        console.log('Unknown');
        break;
}

// Looping with for()

for (let i = 0; i < 3; i++) {
    console.log(i);
}

for (let i = 0; i < 20; i+=3) {
    console.log(i);
}

// looping with while()

let count = 1;

while (count <5) {
    console.log(count);
    count++;
}

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine',
              'Eight', 'Seven', 'Six', 'Five', 'Four',
              'Three', 'Tow'];
let deck = [];

for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) { 
        deck.push(values[valueIdx] + ' of ' + suits[suitIdx]);
    }
}

for (let i = 0; i < deck.length; i++){
    console.log(deck[i]);
}

let playerCards = [deck[0], deck[2]];



