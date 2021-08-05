/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game-display.js":
/*!*****************************!*\
  !*** ./src/game-display.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _make_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-elements */ "./src/make-elements.js");

var grid = document.getElementById("grid");

var makeDisplay = function makeDisplay() {
  for (var i = 1; i <= 2; i += 1) {
    var playerName = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
      type: "h1",
      id: "player".concat(i),
      className: "player"
    });
    grid.appendChild(playerName);
  }

  document.getElementById("player1").innerHTML = "Player 1:James";
  document.getElementById("player2").innerHTML = "Player 2:Computer";

  for (var _i = 1; _i <= 2; _i += 1) {
    var shipCount = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
      type: "h2",
      id: "shipCount".concat(_i),
      className: "shipCount"
    });
    grid.appendChild(shipCount);
  }

  document.getElementById("shipCount1").innerHTML = "Remaining Ships:5";
  document.getElementById("shipCount2").innerHTML = "Remaining Ships:5";

  for (var _i2 = 1; _i2 <= 2; _i2 += 1) {
    var boardContainer = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
      type: "div",
      id: "boardContainer".concat(_i2),
      className: "boardContainer"
    });
    grid.appendChild(boardContainer);

    for (var num = 0; num <= 99; num += 1) {
      var cell = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
        type: "button",
        id: "cell".concat(num),
        className: "cell"
      });
      boardContainer.appendChild(cell);
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeDisplay);

/***/ }),

/***/ "./src/make-elements.js":
/*!******************************!*\
  !*** ./src/make-elements.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeElement": () => (/* binding */ makeElement),
/* harmony export */   "elementMethods": () => (/* binding */ elementMethods)
/* harmony export */ });
// Generates DOM element
var makeElement = function makeElement() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "" : _ref$type,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? "" : _ref$id,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className;

  var element = document.createElement(type);
  element.setAttribute("id", id);
  element.setAttribute("class", className);
  return element;
}; // Appends elements to body


var elementMethods = function elementMethods(element) {
  var appendToBody = function appendToBody(destination) {
    return document.getElementById(destination).appendChild(element);
  };

  return {
    appendToBody: appendToBody
  };
};



/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _make_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-elements */ "./src/make-elements.js");

var content = document.getElementById("content"); // Generates complete navbar

var makeNavbar = function makeNavbar() {
  var navBar = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "ul",
    id: "navbar",
    className: "navbar"
  });
  content.appendChild(navBar);
  var navTitle = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "li",
    id: "nav",
    className: "nav"
  });
  navTitle.innerHTML = "BATTLESHIP";
  navBar.appendChild(navTitle);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeNavbar);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _game_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-display */ "./src/game-display.js");



(function playBattleship() {
  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.default)();
  (0,_game_display__WEBPACK_IMPORTED_MODULE_1__.default)();
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUtZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21ha2UtZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiZ3JpZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtYWtlRGlzcGxheSIsImkiLCJwbGF5ZXJOYW1lIiwibWFrZUVsZW1lbnQiLCJ0eXBlIiwiaWQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsInNoaXBDb3VudCIsImJvYXJkQ29udGFpbmVyIiwibnVtIiwiY2VsbCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZWxlbWVudE1ldGhvZHMiLCJhcHBlbmRUb0JvZHkiLCJkZXN0aW5hdGlvbiIsImNvbnRlbnQiLCJtYWtlTmF2YmFyIiwibmF2QmFyIiwibmF2VGl0bGUiLCJwbGF5QmF0dGxlc2hpcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFiOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsT0FBSyxJQUFJQyxDQUFDLEdB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IjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VFbGVtZW50IH0gZnJvbSBcIi4vbWFrZS1lbGVtZW50c1wiO1xuXG5jb25zdCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmlkXCIpO1xuXG5jb25zdCBtYWtlRGlzcGxheSA9ICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSArPSAxKSB7XG4gICAgY29uc3QgcGxheWVyTmFtZSA9IG1ha2VFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwiaDFcIixcbiAgICAgIGlkOiBgcGxheWVyJHtpfWAsXG4gICAgICBjbGFzc05hbWU6IFwicGxheWVyXCIsXG4gICAgfSk7XG4gICAgZ3JpZC5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lKTtcbiAgfVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjFcIikuaW5uZXJIVE1MID0gXCJQbGF5ZXIgMTpKYW1lc1wiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjJcIikuaW5uZXJIVE1MID0gXCJQbGF5ZXIgMjpDb21wdXRlclwiO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNoaXBDb3VudCA9IG1ha2VFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwiaDJcIixcbiAgICAgIGlkOiBgc2hpcENvdW50JHtpfWAsXG4gICAgICBjbGFzc05hbWU6IFwic2hpcENvdW50XCIsXG4gICAgfSk7XG4gICAgZ3JpZC5hcHBlbmRDaGlsZChzaGlwQ291bnQpO1xuICB9XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcENvdW50MVwiKS5pbm5lckhUTUwgPSBcIlJlbWFpbmluZyBTaGlwczo1XCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcENvdW50MlwiKS5pbm5lckhUTUwgPSBcIlJlbWFpbmluZyBTaGlwczo1XCI7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSArPSAxKSB7XG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBtYWtlRWxlbWVudCh7XG4gICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgaWQ6IGBib2FyZENvbnRhaW5lciR7aX1gLFxuICAgICAgY2xhc3NOYW1lOiBcImJvYXJkQ29udGFpbmVyXCIsXG4gICAgfSk7XG4gICAgZ3JpZC5hcHBlbmRDaGlsZChib2FyZENvbnRhaW5lcik7XG5cbiAgICBmb3IgKGxldCBudW0gPSAwOyBudW0gPD0gOTk7IG51bSArPSAxKSB7XG4gICAgICBjb25zdCBjZWxsID0gbWFrZUVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICBpZDogYGNlbGwke251bX1gLFxuICAgICAgICBjbGFzc05hbWU6IFwiY2VsbFwiLFxuICAgICAgfSk7XG4gICAgICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VEaXNwbGF5O1xuIiwiLy8gR2VuZXJhdGVzIERPTSBlbGVtZW50XG5jb25zdCBtYWtlRWxlbWVudCA9ICh7IHR5cGUgPSBcIlwiLCBpZCA9IFwiXCIsIGNsYXNzTmFtZSA9IFwiXCIgfSA9IHt9KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjbGFzc05hbWUpO1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbi8vIEFwcGVuZHMgZWxlbWVudHMgdG8gYm9keVxuY29uc3QgZWxlbWVudE1ldGhvZHMgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCBhcHBlbmRUb0JvZHkgPSAoZGVzdGluYXRpb24pID0+XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVzdGluYXRpb24pLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICByZXR1cm4geyBhcHBlbmRUb0JvZHkgfTtcbn07XG5cbmV4cG9ydCB7IG1ha2VFbGVtZW50LCBlbGVtZW50TWV0aG9kcyB9O1xuIiwiaW1wb3J0IHsgbWFrZUVsZW1lbnQgfSBmcm9tIFwiLi9tYWtlLWVsZW1lbnRzXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbi8vIEdlbmVyYXRlcyBjb21wbGV0ZSBuYXZiYXJcbmNvbnN0IG1ha2VOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdkJhciA9IG1ha2VFbGVtZW50KHsgdHlwZTogXCJ1bFwiLCBpZDogXCJuYXZiYXJcIiwgY2xhc3NOYW1lOiBcIm5hdmJhclwiIH0pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkJhcik7XG5cbiAgY29uc3QgbmF2VGl0bGUgPSBtYWtlRWxlbWVudCh7IHR5cGU6IFwibGlcIiwgaWQ6IFwibmF2XCIsIGNsYXNzTmFtZTogXCJuYXZcIiB9KTtcbiAgbmF2VGl0bGUuaW5uZXJIVE1MID0gXCJCQVRUTEVTSElQXCI7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChuYXZUaXRsZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlTmF2YmFyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbWFrZU5hdmJhciBmcm9tIFwiLi9uYXZiYXJcIjtcbmltcG9ydCBtYWtlRGlzcGxheSBmcm9tIFwiLi9nYW1lLWRpc3BsYXlcIjtcblxuKGZ1bmN0aW9uIHBsYXlCYXR0bGVzaGlwKCkge1xuICBtYWtlTmF2YmFyKCk7XG4gIG1ha2VEaXNwbGF5KCk7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==