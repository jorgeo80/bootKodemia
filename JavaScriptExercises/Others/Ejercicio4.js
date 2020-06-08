// Objects
let person = {
    name: "John", // Properties
    age: 32,
    partTime: false
};

console.log(person.name);
console.log(person.age);
console.log(person.partTime);

// Exercise 2
let card = {
    suit: "Hearts",
    value: "Queen"
};

console.log(card.suit);
console.log(card.value);

// Exercise 3
function changeCard(card){
    card.suit = "Clubs"

}

let card = {
    suit: "Hearts",
    value: "Queen"
};

changeCard(card);

console.log(card.suit);

// Exercise 4
let card = [
    {
        suit: "Hearts",
        value: "Queen"
    },
    {
        suit: "Clubs",
        value: "Ten"
    },
];

console.log(card[0].suit);

// Exercise 4

let result = Math.random()*52;
    result = Math.trunc(result);

console.log(result);

let result = Date();

console.log(result);

// Exercise 5

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine',
              'Eight', 'Seven', 'Six', 'Five', 'Four',
              'Three', 'Tow'];

function createDeck() {
    let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) { 
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx] 
            };
            deck.push(card);
        }
    }
    return deck;
}

function getCardString(card) {
    return card.value + " of " + card.suit;
}

function getNextCard() {
    return deck.shift();
}

let deck = createDeck();

let playerCards = [getNextCard(), getNextCard()];

console.log("Welcome to Blackjack!");
console.log("You are dealt: ");
console.log(" " + getCardString(playerCards[0]));
console.log(" " + getCardString(playerCards[1]));
