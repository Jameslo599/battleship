//	Generates battleships depending on length
const Ship = (length) => {
  const healthBar = Array(length).fill("unhit");
  let sunk = false;
  const hit = (location) => healthBar.splice(location, 1, "hit");
  const isSunk = () => {
    if (healthBar.every((e) => e === "hit")) {
      return (sunk = true);
    } else {
      return (sunk = false);
    }
  };
  return { healthBar, hit, isSunk };
};

// Generates gameboards to place ships based on coordinates
const Gameboard = () => {
	const carrier = Ship(5);
	const battleship = Ship(4);
	const destroyer = Ship(3);
	const submarine = Ship(3);
	const patrolBoat = Ship(2);
	let grid = [
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[]
	];
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
			for ( let x = 0; x < columns; x += 1) {
				if (grid[y][x] === cell) {
					return ({x, y})
				}
			}
		}
	}

	const isObject = (obj) => obj === Object(obj);

	const placeShip = (length, cell) => {
		const coordinates = getXY(cell);
		grid[coordinates.y].splice(coordinates.x, 1, Ship(length));
		return grid[coordinates.y][coordinates.x];
	}

	const receiveAttack = (cell) => {
		const coordinates = getXY(cell);
		if (isObject(grid[coordinates.y][coordinates.x]) === true) {
			grid[coordinates.y][coordinates.x].hit(0)
			return grid[coordinates.y][coordinates.x].isSunk();
		} else {
			return 'Miss';
		}
	}

	const mock = (length, cell) => {
		const coordinates = getXY(cell);
		grid[coordinates.y].splice(coordinates.x, 1, Ship(length));
		if (isObject(grid[coordinates.y][coordinates.x]) === true) {
			grid[coordinates.y][coordinates.x].hit(0)
			return grid[coordinates.y][coordinates.x].healthBar[0];
		} else {
			return 'Number';
		}
	}
	return {grid, getXY, placeShip, receiveAttack, mock}
}

export {Ship, Gameboard};
