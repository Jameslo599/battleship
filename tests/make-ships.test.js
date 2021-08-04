import { Ship, Gameboard, Player } from "../src/make-ships";

test("Ship public interface", () => {
  expect(Ship()).toEqual({
    hit: expect.any(Function),
    isSunk: expect.any(Function),
  });
});

test("validate hit target ship", () => {
  expect(Ship(4).hit()).toStrictEqual(expect.any(Number));
});

test("validate sunken ship", () => {
  expect(Ship(4).isSunk()).toStrictEqual(expect.any(Boolean));
});

test("Gameboard public interface", () => {
  expect(Gameboard()).toEqual({
    checkVictory: expect.any(Function),
    getXY: expect.any(Function),
    grid: expect.any(Array),
    isObject: expect.any(Function),
    lifeBar: expect.any(Array),
    placeShip: expect.any(Function),
    receiveAttack: expect.any(Function),
  });
});

test("checks if player won", () => {
  expect(Gameboard().checkVictory()).toEqual("Not Yet");
});

test("retrieves Gameboard coordinates", () => {
  expect(Gameboard().getXY(1)).toEqual({ x: 0, y: 0 });
});

test("game grid", () => {
  expect(Gameboard().grid).toEqual(expect.any(Array));
});

test("checks if grid cell is an object", () => {
  expect(Gameboard().isObject(Ship(1))).toEqual(true);
});

test("ship lifebar", () => {
  expect(Gameboard().lifeBar).toEqual([]);
});

test("places ship on game grid", () => {
  expect(Gameboard().placeShip(2, 1)).toEqual(expect.any(Object));
});

test("player selects cell", () => {
  expect(Gameboard().receiveAttack(0, 2)).toEqual("Miss");
});

test("Player public interface", () => {
  expect(Player()).toEqual({
    computerAttack: expect.any(Function),
  });
});

test("computer selects cell", () => {
  expect(Player().computerAttack()).toEqual(expect.any(Array));
});
