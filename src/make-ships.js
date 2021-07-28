const Ship = (length) => {
	const healthBar = Array(length).fill('unhit');
	let sunk = false;
	const hit = (location) => healthBar.splice(location, 1, 'hit');
	const isSunk = () => {
		if (healthBar.every((e) => e === 'hit')) {
			return sunk = true;
		} else {
			return sunk = false;
		}
	}
	return {hit, isSunk};
};

export default Ship