/* eslint-disable no-console */
let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];

let values = [
    'Ace','King','Queen','Jack',
    'Ten','Nine','Eight','Seven',
    'Six','Five','Four','Three',
    'Two','One'];

let deck = [];   
for(let suitIndex = 0; suitIndex<suits.length;suitIndex++){
    for(let valuesIndex = 0; valuesIndex<values.length;valuesIndex++){
        deck.push(suits[suitIndex]+' of '+values[valuesIndex]);
    }
}

console.log(deck);

let playerCards = [ deck[0], deck[2]];

console.log("Welcome to Blackjack!");
console.log("You are dealt: ");
console.log(" "+playerCards[0]);
console.log(" "+playerCards[1]);

let city = "TX";
switch(city){
    case "TX":
        console.log("TX");
        break;
    case "TT":
        console.log("TT");
        break;
    default:
        console.log("default");
        break;
}
