//import { test } from "jest-circus";
import Ship from "../src/make-ships";

test('validate Ship object', () => {
	expect(Ship(4).hit(4)).toStrictEqual(expect.any(Array))});

	test('validate Ship object', () => {
		expect(Ship(4).isSunk()).toStrictEqual(expect.any(Boolean))});