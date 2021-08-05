import { makeElement } from "./make-elements";

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

  for (let i = 1; i <= 2; i += 1) {
    const boardContainer = makeElement({
      type: "div",
      id: `boardContainer${i}`,
      className: "boardContainer",
    });
    grid.appendChild(boardContainer);

    for (let num = 0; num <= 99; num += 1) {
      const cell = makeElement({
        type: "button",
        id: `cell${num}`,
        className: "cell",
      });
      boardContainer.appendChild(cell);
    }
  }
};

export default makeDisplay;
