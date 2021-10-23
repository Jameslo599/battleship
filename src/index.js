import makeNavbar from "./navbar";
import makeDisplay from "./game-display";
import makeCopyright from "./copyrightbar";
import { Ship, Gameboard, Player } from "../src/make-ships";

//const james = Gameboard();

(function playBattleship() {
  makeNavbar();
  makeDisplay();
  makeCopyright();
})();
