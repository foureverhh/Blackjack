/* eslint-disable no-unused-vars */
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

function shuffleDeck(deck){
    for(let i = 0; i < deck.length; i++){
        let randomIndex = Math.trunc(Math.random()*deck.length) ;
        let temp = deck[randomIndex];
        deck[randomIndex] = deck[i];
        deck[i] = temp;
    }
}



function getNextCard(){
    return deck.shift();
}


newGameButton.addEventListener('click',function(){
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
    shuffleDeck(deck);
    console.log(deck);
    dealerCards = [getNextCard(),getNextCard()];
    playerCards = [getNextCard(),getNextCard()];

    textArea.innerText ='Started ... ';
    newGameButton.style.display = 'none';
    hitButton.style.display = 'inline-block';
    hitButton.style.marginRight = '20px';
    stayButton.style.display = 'inline-block';

    showStatus();
});

function getCardString(card){
    return card.value + ' of ' + card.suit;
}

function getCardNumericValue(card){
    switch(card.value){
        case 'Ace':
            return 1;
        case 'Two':
            return 2;
        case 'Three':
            return 3;
        case 'Four':
            return 4;
        case 'Five':
            return 5;
        case 'Six':
            return 6;
        case 'Seven':
            return 7;
        case 'Eight':
            return 8;
        case 'Nine':
            return 9;
        defalt:
            return 10;
    }

}

function getScore(cardArray){
    let score = 0;
    let hasAce = false;

    for(let i=0; i<cardArray.length; i++){
        let card = cardArray[i];
        score += getCardNumericValue(card);
        if(card.value === 'Ace')
            hasAce = true;
    }

    if(hasAce && score + 10 <= 21){
        return score + 10;
    }

    return score;
}

function updateScores(){
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
}

function showStatus(){
    if(!gameStarted){
        textArea.innerText = 'Welcome to Blackjack!';
        return;
    }

    let dealerCardString = '';
    for(let i=0; i<dealerCards.length;i++){
        dealerCardString += '\n' + getCardString(dealerCards[i]);
    }
 
    let playerCardString = '';
    for(let i = 0; i<playerCards.length; i++){
        playerCardString += '\n' + getCardString(playerCards[i]);
    }

    for(let i = 0; i < deck.length; i++){
        textArea.innerText += "\n" + getCardString(deck[i]);
    }

    updateScores();

    textArea.innerText = 
    'Dealer has:\n' +
    dealerCardString + '\n' +
    '(score: ' + dealerScore + ')\n\n' +

    'Player has:\n' +
    playerCardString + '\n' +
    '(score: ' + playerScore + ')\n\n';

    if(gameOver){
        if(playerWon){
            textArea.innerText += "YOU WIN!"
        }else{
            textArea.innerText += "DEALER WIN!"
        }
        newGameButton.style.display = "block";
        hitButton.style.display = "none";
        stayButton.style.display = "none";
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
//playerCards = [ getNextCard(), getNextCard()];



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





