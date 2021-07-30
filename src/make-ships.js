//	Generates battleships depending on length
const Ship = (length) => {
  const healthBar = Array(length).fill("unhit");
  let sunk = false;
  const hit = (location) => healthBar.splice(location, 1, "hit");
  const isSunk = () => {
    if (healthBar.every((e) => e === "hit")) {
      sunk = true;
      return sunk;
    }
    sunk = false;
    return sunk;
  };
  return { healthBar, hit, isSunk };
};

// Generates gameboards to place ships based on coordinates
const Gameboard = () => {
  const lifeBar = ["sunk", "sunk", "sunk", "sunk"];
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

  const placeShip = (length, cell) => {
    const coordinates = getXY(cell);
    const ship = Ship(length);
    for (let i = 0; i < length; i += 1) {
      grid[coordinates.y].splice(coordinates.x + i, 1, ship);
    }
    return grid[coordinates.y][coordinates.x];
  };

  const receiveAttack = (cell) => {
    const coordinates = getXY(cell);
    if (isObject(grid[coordinates.y][coordinates.x]) === true) {
      grid[coordinates.y][coordinates.x].hit(0);
      if (grid[coordinates.y][coordinates.x].isSunk() === true) {
        lifeBar.push("sunk");
      }
      checkVictory();
      return grid[coordinates.y][coordinates.x].isSunk();
    }
    return "Miss";
  };

  const mock = (length, cell) => {
    const coordinates = getXY(cell);
    const ship = Ship(length);
    for (let i = 0; i < length; i += 1) {
      grid[coordinates.y].splice(coordinates.x + i, 1, ship);
    }
    if (isObject(grid[coordinates.y][coordinates.x]) === true) {
      grid[coordinates.y][coordinates.x].hit(0);
      grid[coordinates.y][4].hit(1);
      grid[coordinates.y][5].hit(2);
      if (grid[coordinates.y][coordinates.x].isSunk() === true) {
        lifeBar.push("sunk");
      }
      checkVictory();
      return grid[coordinates.y][coordinates.x].healthBar;
    }
    return "Number";
  };
  return { grid, getXY, placeShip, receiveAttack, mock };
};

export { Ship, Gameboard };
