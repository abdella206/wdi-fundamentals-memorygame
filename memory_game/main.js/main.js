
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

var cards = ["queen", "queen ", "king", "king"];

var cardsInPlay = [];

var checkForMatch = function () {

  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
    } else {
      console.log("Sorry, try again.");
    }
  }


var flipcards = function (cardId) {
      console.log("User flipped " + cards[cardId]);
      cardsInPlay.push(cards[cardId])

        if (cardsInPlay.length == 2) {

        if (cardsInPlay[0] === cardsInPlay[1]) {
          alert("You found a match!");
        }else{
          alert("Sorry, try again.");

          checkForMatch();

      }
    }
  };


flipcards(0);
flipcards(2);
