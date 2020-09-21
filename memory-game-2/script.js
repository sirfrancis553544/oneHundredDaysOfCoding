document.addEventListener("DOMContentLoaded", () => {
  // card options
  const cardArray = [
    {
      name: "Angular",
      img: "images/angular.svg",
    },
    {
      name: "Angular",
      img: "images/angular.svg",
    },
    {
      name: "Aurelia",
      img: "images/aurelia.svg",
    },
    {
      name: "Aurelia",
      img: "images/aurelia.svg",
    },
    {
      name: "backbone",
      img: "images/backbone.svg",
    },
    {
      name: "backbone",
      img: "images/backbone.svg",
    },
    {
      name: "Ember",
      img: "images/ember.svg",
    },
    {
      name: "Ember",
      img: "images/ember.svg",
    },
    {
      name: "React",
      img: "images/react.svg",
    },
    {
      name: "React",
      img: "images/react.svg",
    },
    {
      name: "vue",
      img: "images/vue.svg",
    },
    {
      name: "vue",
      img: "images/vue.svg",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  const alertDisplay = document.querySelector("#alert");
  var cardsChosen = [];
  var cardsChosenId = [];
  const cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/js-badge.svg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  // check for match
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/js-badge.svg");
      cards[optionTwoId].setAttribute("src", "images/js-badge.svg");
        // alert("You have clicked the same image!");
        alertDisplay.textContent = " You have clicked the same image!";
    } else if (cardsChosen[0] === cardsChosen[1]) {
        // alert("You found a match!!!!");
        alertDisplay.textContent = " Match Found!";
      cards[optionOneId].setAttribute("src", "images/donut.png");
      cards[optionTwoId].setAttribute("src", "images/donut.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/js-badge.svg");
      cards[optionTwoId].setAttribute("src", "images/js-badge.svg");
      // alert("Sorry, try again!");
      alertDisplay.textContent = " Sorry, try again!";
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent =
        " Congratulations!!! You found them all!!!!!!!!!!!!!!!!";
    }
  }

  // flip card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 1000);
    }
  }

  createBoard();
});
