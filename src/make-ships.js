//	Generates battleships depending on length
const Ship = (length) => {
  const healthBar = Array.from({ length: `${length}` });
  let sunk = false;
  const hit = () => {
    healthBar.shift();
    return healthBar.push("hit");
  };
  const isSunk = () => {
    if (healthBar.every((e) => e === "hit")) {
      sunk = true;
      return sunk;
    }
    sunk = false;
    return sunk;
  };
  return { hit, isSunk, healthBar };
};

// Generates gameboards to place ships based on coordinates
const Gameboard = () => {
  const carrier = Ship(5);
  const battleship = Ship(4);
  const cruiser = Ship(3);
  const submarine = Ship(3);
  const destroyer = Ship(2);

  const lifeBar = [];
  const grid = [[], [], [], [], [], [], [], [], [], []];
  for (let i = 1; i <= 100; i += 1) {
    if (i <= 10) {
      grid[0].push(i);
    } else if (i <= 20 && i > 10) {
      grid[1].push(i);
    } else if (i <= 30 && i > 20) {
      grid[2].push(i);
    } else if (i <= 40 && i > 30) {
      grid[3].push(i);
    } else if (i <= 50 && i > 40) {
      grid[4].push(i);
    } else if (i <= 60 && i > 50) {
      grid[5].push(i);
    } else if (i <= 70 && i > 60) {
      grid[6].push(i);
    } else if (i <= 80 && i > 70) {
      grid[7].push(i);
    } else if (i <= 90 && i > 80) {
      grid[8].push(i);
    } else if (i <= 100 && i > 90) {
      grid[9].push(i);
    }
  }
  const rows = grid[0].length;
  const columns = grid.length;
  const getXY = (cell) => {
    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < columns; x += 1) {
        if (grid[y][x] === cell) {
          return { x, y };
        }
      }
    }
    return null;
  };

  const isObject = (obj) => obj === Object(obj);

  const checkVictory = () => {
    let message = "Not Yet";
    if (lifeBar.length === 5) {
      message = "You Win!";
      return message;
    }
    return message;
  };

  const placeShip = (ship, length, cell) => {
    const coordinates = getXY(cell);
    for (let i = 0; i < length; i += 1) {
      grid[coordinates.y].splice(coordinates.x + i, 1, ship);
    }
    return grid[coordinates.y][coordinates.x];
  };

  const receiveAttack = (num1, num2) => {
    if (isObject(grid[num1][num2]) === true) {
      grid[num1][num2].hit();
      if (grid[num1][num2].isSunk() === true) {
        lifeBar.push("sunk");
      }
      grid[num1][num2] = "Hit";
      return grid[num1][num2];
    }
    grid[num1][num2] = "Miss";
    return grid[num1][num2];
  };

  return {
    lifeBar,
    grid,
    getXY,
    carrier,
    battleship,
    cruiser,
    submarine,
    destroyer,
    placeShip,
    receiveAttack,
    isObject,
    checkVictory,
  };
};

const Player = () => {
  const user = Gameboard();

  //	The maximum is inclusive and the minimum is inclusive
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const computerAttack = (num1, num2) => {
    for (let i = 0; i <= 0; i += 1) {
      if (user.grid[num1][num2] === "Miss") {
        i -= 1;
      } else if (user.grid[num1][num2] === "Hit") {
        i -= 1;
      } else if (user.isObject(user.grid[num1][num2]) === true) {
        user.grid[num1][num2].hit();
        if (user.grid[num1][num2].isSunk() === true) {
          user.lifeBar.push("sunk");
        }
        user.checkVictory();
        user.grid[num1][num2] = "Hit";
        return user.grid[num1][num2];
      }
      user.grid[num1][num2] = "Miss";
      return user.grid[num1][num2];
    }
    return null;
  };
  return {
    user,
    getRandomIntInclusive,
    computerAttack,
  };
};

export { Ship, Gameboard, Player };
