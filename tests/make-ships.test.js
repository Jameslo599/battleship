import { Ship, Gameboard } from "../src/make-ships";

test("validate Ship object", () => {
  expect(Ship(4).hit(4)).toStrictEqual(expect.any(Array));
});

test("validate Ship object", () => {
  expect(Ship(4).isSunk()).toStrictEqual(expect.any(Boolean));
});

test("validate Gameboard object", () => {
  expect(Gameboard()).toEqual({
    grid: expect.any(Array),
    getXY: expect.any(Function),
    placeShip: expect.any(Function),
    receiveAttack: expect.any(Function),
    mock: expect.any(Function),
  });
});

test("retrieves Gameboard coordinates", () => {
  expect(Gameboard().getXY(1)).toEqual({ x: 0, y: 0 });
});

test("places ship based on coordinates", () => {
  expect(Gameboard().placeShip(3, 16)).toEqual({
    healthBar: expect.any(Array),
    hit: expect.any(Function),
    isSunk: expect.any(Function),
  });
});

test("retrieves Gameboard coordinates", () => {
  expect(Gameboard().mock(3, 4)).toEqual(["hit", "hit", "hit"]);
});
