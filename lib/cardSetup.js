const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'X', 'J', 'Q', 'K'];
const suits = ['H', 'C', 'S', 'D'];
const totalCards = suits.length * values.length;
const deck = [];

function isValidInput (totalNumberOfPlayers) {
    if (isNaN(parseInt(totalNumberOfPlayers, 10))) {
        console.log('Input value does not exist or value is invalid'); //eslint-disable-line no-console
        return false;
    }
    return true;
}

function generateCards () {
    for (var cardValue = 0; cardValue < values.length; cardValue++) {
        for (var cardSuit = 0; cardSuit < suits.length; cardSuit++) {
            deck[suits.length * cardValue + cardSuit] = values[cardValue] + '-' + suits[cardSuit];
        }
    }
}

function shuffleCards () {
    for (var cardValue = 0; cardValue < totalCards; cardValue++) {
        var randomValue = parseInt(cardValue + (Math.random() * (totalCards - cardValue)), 10);
        var temp = deck[randomValue];
        deck[randomValue] = deck[cardValue];
        deck[cardValue] = temp;
    }
}

function showResults (totalNumberOfPlayers) {
    // the total number of cards will be divided to total number of players
    // if players is more than 53 it will be 1
    var cards = Math.floor(totalCards / totalNumberOfPlayers) || 1;
    // array that holds all the cards of players
    var playerCollection = [];
    for (var playerNumber = 0; playerNumber < totalNumberOfPlayers; playerNumber++) {
        var playerCards = [];
        for (var playerCard = 0; playerCard < cards; playerCard++) {
            playerCards.push(deck[playerNumber + playerCard * totalNumberOfPlayers]);
        }
        playerCollection.push(playerCards);
    }
    playerCollection.forEach(arr => console.log(arr.join(','))); //eslint-disable-line no-console
}

export default function cardSetup (totalNumberOfPlayers) {
    // check if the user input is number
    if (isValidInput(totalNumberOfPlayers)) {
        generateCards();
        shuffleCards();
        showResults(totalNumberOfPlayers);
    }
}
