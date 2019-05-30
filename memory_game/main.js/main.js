
//var cards = ["queen", "queen ", "king", "king"];

//var cardOne = cards[0];
//var cardTwo = cards[2];

/*var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne)

var cardTwo = cards[2];
cardsInPlay.push(cardTwo) */



//var cardOne = cards[0];
//cardsInPlay.push(cardOne);

//var cardTwo = cards[2];
//cardsInPlay.push(cardTwo);

  /* () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
    } else
      console.log("Sorry, try again.");

  }*/


  //console.log("User flipped " +  cardsInPlay);




//console.log("User flipped " +  cardsInPlay);

var cards = [

            {
             rank : "Queen",

             suit: "Hearts",

          cardImage:  "images/queen-of-hearts.png"
            },

            {
              rank : "Queen",

              suit:  "Diamonds",

              cardImage: "images/queen-of-diamonds.png"

            },

            {
              rank :  "King",

              suit:   "Hearts",

              cardImage: "images/king-of-hearts.png"

            },

            {
              rank :  "King",

              suit:   "Diamonds",

              cardImage: "images/king-of-diamonds.png"

            }
];

var cardsInPlay = [];

var checkForMatch = function () {

  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
    } else {
      console.log("Sorry, try again.");
    }
  }


var flipcard = function () {
      cardId = this.getAttribute('data-id')



      alert("User flipped " + cards[cardId].rank);


    //  console.log(cards[cardId].cardImage);

    //  console.log(cards[cardId].suit);

      cardsInPlay.push(cards[cardId].rank)

      this.setAttribute('src', cards[cardId].cardImage)

        if (cardsInPlay.length == 2) {

        if (cardsInPlay[0] === cardsInPlay[1]) {
          alert("You found a match!");
        }else{
          alert("Sorry, try again.");

          checkForMatch();

      }
    }
  };

var createBored = function () {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipcard);
        document.getElementById('game-board').appendChild(cardElement);
}
}



createBored();
