document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grid div");
  const playerDisplay = document.querySelector("#player");

  let currentPlayer = "PlayerX";
  squares.forEach((square) => {
    square.addEventListener("click", clickOutCome);
  });
  function clickOutCome(e) {
    const squareArray = Array.from(squares);
    const index = squareArray.indexOf(e.target);
      playerDisplay.innerHTML = currentPlayer;
      
    if (currentPlayer === "PlayerX") {
      squares[index].classList.add("playerX");
      currentPlayer = "PlayerO";
    } else if (currentPlayer === "PlayerO") {
      squares[index].classList.add("playerO");
      currentPlayer = "PlayerX";
    } else {
      alert("not a valid move");
    }
  }
});
