import { makeElement } from "./make-elements";
import { Gameboard, Player, } from "./make-ships";

const grid = document.getElementById("grid");
const user = Gameboard();
user.placeShip(user.carrier, 5, 1);
user.placeShip(user.battleship, 4, 11);
user.placeShip(user.cruiser, 3, 22);
user.placeShip(user.submarine, 3, 33);
user.placeShip(user.destroyer, 2, 9);

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
      const player = Gameboard();
      const num1 = player.getXY(num).y;
      const num2 = player.getXY(num).x;

      if (user.isObject(user.grid[num1][num2]) === true) {
        document.getElementById(`cell${num}`).style.backgroundColor = "black";
        user.receiveAttack(num1, num2);
      } else {
        document.getElementById(`cell${num}`).style.backgroundColor = "blue";
      }
      document.getElementById(`cell${num}`).disabled = true;
      if (user.checkVictory() === "You Win!") {
        const cells = document.getElementsByClassName("cell");
        for (let i = 0; i < cells.length; i += 1) {
          cells[i].disabled = true;
        }
      }
    });
  }

  const enemy = Player();
  enemy.user.placeShip(enemy.user.carrier, 5, 1);
  enemy.user.placeShip(enemy.user.battleship, 4, 11);
  enemy.user.placeShip(enemy.user.cruiser, 3, 22);
  enemy.user.placeShip(enemy.user.submarine, 3, 33);
  enemy.user.placeShip(enemy.user.destroyer, 2, 9);

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
    cell.disabled = true;
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
          enemy.computerAttack(range1, range2);
          if (enemy.user.grid[range1][range2] === "Hit") {
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
      if (enemy.user.checkVictory() === "You Win!") {
        const cells = document.getElementsByClassName("cell");
        for (let cellNum = 0; cellNum < cells.length; cellNum += 1) {
          cells[cellNum].disabled = true;
        }
      }
    });
  }
};

export default makeDisplay;
