import { makeElement } from "./make-elements";
import { Gameboard, Player } from "./make-ships";

const grid = document.getElementById("grid");

const makeDisplay = () => {
  for (let i = 1; i <= 2; i += 1) {
    const playerName = makeElement({
      type: "h1",
      id: `player${i}`,
      className: "player",
    });
    grid.appendChild(playerName);
  }
  document.getElementById("player1").innerHTML = "Player 1:James";
  document.getElementById("player2").innerHTML = "Player 2:Computer";

  for (let i = 1; i <= 2; i += 1) {
    const shipCount = makeElement({
      type: "h2",
      id: `shipCount${i}`,
      className: "shipCount",
    });
    grid.appendChild(shipCount);
  }
  document.getElementById("shipCount1").innerHTML = "Remaining Ships:5";
  document.getElementById("shipCount2").innerHTML = "Remaining Ships:5";

  const playerBoard = makeElement({
    type: "div",
    id: `playerBoard`,
    className: "boardContainer",
  });
  grid.appendChild(playerBoard);

  for (let num = 1; num <= 100; num += 1) {
    const cell = makeElement({
      type: "button",
      id: `cell${num}`,
      className: "cell",
    });
    playerBoard.appendChild(cell);
    document.getElementById(`cell${num}`).addEventListener("click", () => {
      const user = Gameboard();
      const num1 = user.getXY(num).y;
      const num2 = user.getXY(num).x;
      user.placeShip(2, 1);
      user.placeShip(2, 9);
      if (user.isObject(user.grid[num1][num2]) === true) {
        document.getElementById(`cell${num}`).style.backgroundColor = "black";
      } else {
        document.getElementById(`cell${num}`).style.backgroundColor = "blue";
      }
    });
  }

  const enemyBoard = makeElement({
    type: "div",
    id: `enemyBoard`,
    className: "boardContainer",
  });
  grid.appendChild(enemyBoard);

  for (let num = 1; num <= 100; num += 1) {
    const cell = makeElement({
      type: "button",
      id: `enemyCell${num}`,
      className: "cell",
    });
    enemyBoard.appendChild(cell);
    document.getElementById(`cell${num}`).addEventListener("click", () => {
      const computer = Player();
      for (let i = 0; i <= 0; i += 1) {
        const range1 = computer.getRandomIntInclusive(0, 9);
        const range2 = computer.getRandomIntInclusive(0, 9);
        const cellNumber = computer.user.grid[range1][range2];

        if (
          document.getElementById(`enemyCell${cellNumber}`).style
            .backgroundColor === "blue"
        ) {
          i -= 1;
        } else if (
          document.getElementById(`enemyCell${cellNumber}`).style
            .backgroundColor === "black"
        ) {
          i -= 1;
        } else {
          computer.computerAttack(range1, range2);
          if (
            computer.user.isObject(computer.user.grid[range1][range2]) === true
          ) {
            document.getElementById(
              `enemyCell${cellNumber}`
            ).style.backgroundColor = "black";
          } else {
            document.getElementById(
              `enemyCell${cellNumber}`
            ).style.backgroundColor = "blue";
          }
        }
      }
    });
  }
};

export default makeDisplay;
