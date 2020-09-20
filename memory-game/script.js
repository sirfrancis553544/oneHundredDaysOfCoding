const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  //   console.log(firstCard.dataset.framework)
  //   console.log(secondCard.dataset.framework)
  //   do cards match
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCard() : unflipCards();
}

function disableCard() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {    
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1500);
}



function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// function resetBoard() {
//   hasFlippedCard = false;
//   lockBoard = false;
//   firstCard = null;
//   secondCard = null;
// }

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));
