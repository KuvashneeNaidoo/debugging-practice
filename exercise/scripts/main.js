/* Throughout the code structure "var" was changed to "let" which is a more updated way of declaring variables to avoid any 
unexpected bugs.*/
window.addEventListener("DOMContentLoaded", function () {
  // Part 1: Ensure that the user can play the game.
  let cards = document.querySelectorAll(".card");
  let selectedCards = [];
  let matchedCards = [];

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      // If the card has already been matched, ignore it.
      if (card.classList.contains("is-matched")) {
        return;
      }

      // If we haven't selected 2 cards yet, add the current card to the
      // collection of selected cards and apply the correct CSS class.
      if (selectedCards.length < 2) {
        card.classList.add("is-selected");
        // In order to compare both of the selected cards, the cards need to be pushed into the selectedCards array
        selectedCards.push(card);
      }

      // If we have selected two cards, see if they match.
      if (selectedCards.length === 2) {
        let card1 = selectedCards[0];
        /* both cards were taking in the first element at index 0 which did not allow for comparison between 2 different cards and 
        therefore we need to take in index 0 (first element) and index 1 (second element) in order to compare if the 2 cards are a match
        or not.*/
        let card2 = selectedCards[1];

        // If the cards match, add them to the collection of matched cards and
        // apply the correct CSS class.
        if (card1.innerText === card2.innerText) {
          matchedCards.push(card1, card2);
          card1.classList.add("is-matched");
          card2.classList.add("is-matched");
        }

        // Regardless of whether or not the cards match, deselect them and reset
        // the collection of matched cards.
        card1.classList.remove("is-selected");
        // card3 does not exist and was changed to card2 which enabled resetting of the second card each time.
        card2.classList.remove("is-selected");
        selectedCards = [];
      }

      // If we've matched all the cards, display a message.
      /* The incorrect operator was used ">" which is invalid as the player cannot match more cards which exceeds the total number of 
      cards which exist in the game. Therefore using === is more logical because it means that the player has matched all the cards 
      that exist in the game. */
      if (matchedCards.length === cards.length) {
        alert("You matched all the cards, nice job!");
      }
    });
  });

  // Part 2: Allow the user to customize the colour of the cards.
  // This is achieved by including one of the following values in the URL:
  // - #green
  // - #orange
  // - #red
  // The class .Cards does not exist in the HTML file and was changed to .cards
  let deckElement = document.querySelector(".cards");
  /* The property "hashh" is not valid and is changed to "hash". 
  The slice method is used in order to remove the # so that cards--green instead of cards--#green returns the colour of the card.*/
  let deckColor = window.location.hash.slice(1);

  if (deckElement && deckColor) {
    let className = "cards--" + deckColor;
    deckElement.classList.add(className);
  }
});
