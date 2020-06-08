// Functions

function showMessage(){
    console.log("in a function");
}

showMessage();
showMessage(); // the message is shown twice

// Passing information to Functions

function showMessage1(message){
    console.log(message);
}

showMessage1('First Message');
showMessage1('Second Message');

// Function Return Values

function triplePlus(value) {
    let newValue = value + value + value ;
    return newValue;
}

console.log(triplePlus(3));

// Function Scope

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine',
              'Eight', 'Seven', 'Six', 'Five', 'Four',
              'Three', 'Tow'];

function createDeck() {
    let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) { 
            deck.push(values[valueIdx] + ' of ' + suits[suitIdx]);
        }
    }
    return deck;
}

let deck = createDeck();

function getNextCard() {
    return deck.shift();
}

let playerCards = [getNextCard(), getNextCard()];




