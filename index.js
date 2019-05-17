/* eslint-disable no-console */
//Card variables
let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = [
    'Ace','King','Queen','Jack',
    'Ten','Nine','Eight','Seven',
    'Six','Five','Four','Three',
    'Two','One'];

//DOM variables
let textArea = document.getElementById('paragraph');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

//Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

newGameButton.addEventListener('click',function(){
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
    dealerCards = [getNextCard(),getNextCard()];
    playerCards = [getNextCard(),getNextCard()];

    textArea.innerText ='Started ... ';
    newGameButton.style.display = 'none';
    hitButton.style.display = 'inline-block';
    hitButton.style.marginRight = '20px';
    stayButton.style.display = 'inline-block';

    showStatus();
});

const createDeck = () => {
    let deck = [];
    for(let suitIndex = 0; suitIndex<suits.length;suitIndex++){
        for(let valuesIndex = 0; valuesIndex<values.length;valuesIndex++){
            let card = {
                suit:suits[suitIndex],
                value: values[valuesIndex]
            }
            deck.push(card);
        }
    }
    return deck;
}  

function getCardString(card){
    return card.value + ' of ' + card.suit;
}

function getNextCard(){
    return deck.shift();
}

function showStatus(){
    if(!gameStarted){
        textArea.innerText = 'Welcome to Blackjack!';
        return;
    }
}

/* 
let result1 = Math.trunc(Math.random()*52);
let result2 = Math.floor(Math.random()*52);
console.log(result1,result2);

let date = new Date().toDateString();
console.log(date); 
*/

//console.log(deck);

playerCards = [ getNextCard(), getNextCard()];

console.log("Welcome to Blackjack!");
console.log("You are dealt: ");
console.log(" "+getCardString(playerCards[0]));
console.log(" "+getCardString(playerCards[1]));

/* 
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
*/
//web page





