/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/copyrightbar.js":
      /*!*****************************!*\
  !*** ./src/copyrightbar.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _make_elements__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./make-elements */ "./src/make-elements.js");
        //	Houses copyright bar

        var container = document.getElementById("copyrightHolder"); //	Generates complete copyright bar

        var makeCopyright = function makeCopyright() {
          var copyright = (0,
          _make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
            type: "div",
            id: "copyright",
            className: "clearfix",
          });
          container.appendChild(copyright);
          var copyrightText = (0,
          _make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
            type: "div",
            id: "copyrightText",
            className: "text float left",
          });
          copyright.appendChild(copyrightText);
          var copyrightLinks = (0,
          _make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
            type: "ul",
            id: "links",
            className: "links float right",
          });
          copyright.appendChild(copyrightLinks);
          var gitIcon = (0,
          _make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
            type: "li",
          });
          var gitLink = (0,
          _make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
            type: "a",
          });
          var gitFont = (0,
          _make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
            type: "i",
            className: "fab fa-github-square",
          });
          gitLink.href = "https://github.com/Jameslo599";
          gitLink.target = "_blank";
          gitLink.rel = "noreferrer noopener";
          gitLink.appendChild(gitFont);
          gitIcon.appendChild(gitLink);
          copyrightLinks.appendChild(gitIcon);
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          makeCopyright;

        /***/
      },

    /***/ "./src/game-display.js":
      /*!*****************************!*\
  !*** ./src/game-display.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _make_elements__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./make-elements */ "./src/make-elements.js");

        var grid = document.getElementById("grid");

        var makeDisplay = function makeDisplay() {
          for (var i = 1; i <= 2; i += 1) {
            var playerName = (0,
            _make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
              type: "h1",
              id: "player".concat(i),
              className: "player",
            });
            grid.appendChild(playerName);
          }

          document.getElementById("player1").innerHTML = "Player 1:James";
          document.getElementById("player2").innerHTML = "Player 2:Computer";

          for (var _i = 1; _i <= 2; _i += 1) {
            var shipCount = (0,
            _make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
              type: "h2",
              id: "shipCount".concat(_i),
              className: "shipCount",
            });
            grid.appendChild(shipCount);
          }

          document.getElementById("shipCount1").innerHTML = "Remaining Ships:5";
          document.getElementById("shipCount2").innerHTML = "Remaining Ships:5";

          for (var _i2 = 1; _i2 <= 2; _i2 += 1) {
            var boardContainer = (0,
            _make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
              type: "div",
              id: "boardContainer".concat(_i2),
              className: "boardContainer",
            });
            grid.appendChild(boardContainer);

            for (var num = 0; num <= 99; num += 1) {
              var cell = (0,
              _make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
                type: "button",
                id: "cell".concat(num),
                className: "cell",
              });
              boardContainer.appendChild(cell);
            }
          }
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          makeDisplay;

        /***/
      },

    /***/ "./src/make-elements.js":
      /*!******************************!*\
  !*** ./src/make-elements.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ makeElement: () => /* binding */ makeElement,
          /* harmony export */ elementMethods: () =>
            /* binding */ elementMethods,
          /* harmony export */
        });
        // Generates DOM element
        var makeElement = function makeElement() {
          var _ref =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {},
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
            appendToBody: appendToBody,
          };
        };

        /***/
      },

    /***/ "./src/navbar.js":
      /*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _make_elements__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./make-elements */ "./src/make-elements.js");

        var content = document.getElementById("content"); // Generates complete navbar

        var makeNavbar = function makeNavbar() {
          var navBar = (0,
          _make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
            type: "ul",
            id: "navbar",
            className: "navbar",
          });
          content.appendChild(navBar);
          var navTitle = (0,
          _make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
            type: "li",
            id: "nav",
            className: "nav",
          });
          navTitle.innerHTML = "BATTLESHIP";
          navBar.appendChild(navTitle);
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          makeNavbar;

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./navbar */ "./src/navbar.js");
    /* harmony import */ var _game_display__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./game-display */ "./src/game-display.js");
    /* harmony import */ var _copyrightbar__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(/*! ./copyrightbar */ "./src/copyrightbar.js");

    (function playBattleship() {
      (0, _navbar__WEBPACK_IMPORTED_MODULE_0__.default)();
      (0, _game_display__WEBPACK_IMPORTED_MODULE_1__.default)();
      (0, _copyrightbar__WEBPACK_IMPORTED_MODULE_2__.default)();
    })();
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvcHlyaWdodGJhci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUtZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21ha2UtZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1ha2VDb3B5cmlnaHQiLCJjb3B5cmlnaHQiLCJtYWtlRWxlbWVudCIsInR5cGUiLCJpZCIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwiY29weXJpZ2h0VGV4dCIsImNvcHlyaWdodExpbmtzIiwiZ2l0SWNvbiIsImdpdExpbmsiLCJnaXRGb250IiwiaHJlZiIsInRhcmdldCIsInJlbCIsImdyaWQiLCJtYWtlRGlzcGxheSIsImkiLCJwbGF5ZXJOYW1lIiwiaW5uZXJIVE1MIiwic2hpcENvdW50IiwiYm9hcmRDb250YWluZXIiLCJudW0iLCJjZWxsIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJlbGVtZW50TWV0aG9kcyIsImFwcGVuZFRvQm9keSIsImRlc3RpbmF0aW9uIiwiY29udGVudCIsIm1ha2VOYXZiYXIiLCJuYXZCYXIiLCJuYXZUaXRs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QUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVBLENBQUMsU0FBU0csY0FBVCxHQUEwQjtBQUN6Qkgsa0RBQVU7QUFDVmYsd0RBQVc7QUFDWGhCLHdEQUFhO0FBQ2QsQ0FKRCxJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlRWxlbWVudCB9IGZyb20gXCIuL21ha2UtZWxlbWVudHNcIjtcblxuLy9cdEhvdXNlcyBjb3B5cmlnaHQgYmFyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvcHlyaWdodEhvbGRlclwiKTtcblxuLy9cdEdlbmVyYXRlcyBjb21wbGV0ZSBjb3B5cmlnaHQgYmFyXG5jb25zdCBtYWtlQ29weXJpZ2h0ID0gKCkgPT4ge1xuICBjb25zdCBjb3B5cmlnaHQgPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBpZDogXCJjb3B5cmlnaHRcIixcbiAgICBjbGFzc05hbWU6IFwiY2xlYXJmaXhcIixcbiAgfSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuXG4gIGNvbnN0IGNvcHlyaWdodFRleHQgPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBpZDogXCJjb3B5cmlnaHRUZXh0XCIsXG4gICAgY2xhc3NOYW1lOiBcInRleHQgZmxvYXQgbGVmdFwiLFxuICB9KTtcbiAgY29weXJpZ2h0LmFwcGVuZENoaWxkKGNvcHlyaWdodFRleHQpO1xuXG4gIGNvbnN0IGNvcHlyaWdodExpbmtzID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwidWxcIixcbiAgICBpZDogXCJsaW5rc1wiLFxuICAgIGNsYXNzTmFtZTogXCJsaW5rcyBmbG9hdCByaWdodFwiLFxuICB9KTtcbiAgY29weXJpZ2h0LmFwcGVuZENoaWxkKGNvcHlyaWdodExpbmtzKTtcblxuICBjb25zdCBnaXRJY29uID0gbWFrZUVsZW1lbnQoeyB0eXBlOiBcImxpXCIgfSk7XG4gIGNvbnN0IGdpdExpbmsgPSBtYWtlRWxlbWVudCh7IHR5cGU6IFwiYVwiIH0pO1xuICBjb25zdCBnaXRGb250ID0gbWFrZUVsZW1lbnQoeyB0eXBlOiBcImlcIiwgY2xhc3NOYW1lOiBcImZhYiBmYS1naXRodWItc3F1YXJlXCIgfSk7XG4gIGdpdExpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL0phbWVzbG81OTlcIjtcbiAgZ2l0TGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuICBnaXRMaW5rLnJlbCA9IFwibm9yZWZlcnJlciBub29wZW5lclwiO1xuXG4gIGdpdExpbmsuYXBwZW5kQ2hpbGQoZ2l0Rm9udCk7XG4gIGdpdEljb24uYXBwZW5kQ2hpbGQoZ2l0TGluayk7XG4gIGNvcHlyaWdodExpbmtzLmFwcGVuZENoaWxkKGdpdEljb24pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZUNvcHlyaWdodDtcbiIsImltcG9ydCB7IG1ha2VFbGVtZW50IH0gZnJvbSBcIi4vbWFrZS1lbGVtZW50c1wiO1xuXG5jb25zdCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmlkXCIpO1xuXG5jb25zdCBtYWtlRGlzcGxheSA9ICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSArPSAxKSB7XG4gICAgY29uc3QgcGxheWVyTmFtZSA9IG1ha2VFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwiaDFcIixcbiAgICAgIGlkOiBgcGxheWVyJHtpfWAsXG4gICAgICBjbGFzc05hbWU6IFwicGxheWVyXCIsXG4gICAgfSk7XG4gICAgZ3JpZC5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lKTtcbiAgfVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjFcIikuaW5uZXJIVE1MID0gXCJQbGF5ZXIgMTpKYW1lc1wiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjJcIikuaW5uZXJIVE1MID0gXCJQbGF5ZXIgMjpDb21wdXRlclwiO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNoaXBDb3VudCA9IG1ha2VFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwiaDJcIixcbiAgICAgIGlkOiBgc2hpcENvdW50JHtpfWAsXG4gICAgICBjbGFzc05hbWU6IFwic2hpcENvdW50XCIsXG4gICAgfSk7XG4gICAgZ3JpZC5hcHBlbmRDaGlsZChzaGlwQ291bnQpO1xuICB9XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcENvdW50MVwiKS5pbm5lckhUTUwgPSBcIlJlbWFpbmluZyBTaGlwczo1XCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcENvdW50MlwiKS5pbm5lckhUTUwgPSBcIlJlbWFpbmluZyBTaGlwczo1XCI7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSArPSAxKSB7XG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBtYWtlRWxlbWVudCh7XG4gICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgaWQ6IGBib2FyZENvbnRhaW5lciR7aX1gLFxuICAgICAgY2xhc3NOYW1lOiBcImJvYXJkQ29udGFpbmVyXCIsXG4gICAgfSk7XG4gICAgZ3JpZC5hcHBlbmRDaGlsZChib2FyZENvbnRhaW5lcik7XG5cbiAgICBmb3IgKGxldCBudW0gPSAwOyBudW0gPD0gOTk7IG51bSArPSAxKSB7XG4gICAgICBjb25zdCBjZWxsID0gbWFrZUVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICBpZDogYGNlbGwke251bX1gLFxuICAgICAgICBjbGFzc05hbWU6IFwiY2VsbFwiLFxuICAgICAgfSk7XG4gICAgICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VEaXNwbGF5O1xuIiwiLy8gR2VuZXJhdGVzIERPTSBlbGVtZW50XG5jb25zdCBtYWtlRWxlbWVudCA9ICh7IHR5cGUgPSBcIlwiLCBpZCA9IFwiXCIsIGNsYXNzTmFtZSA9IFwiXCIgfSA9IHt9KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjbGFzc05hbWUpO1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbi8vIEFwcGVuZHMgZWxlbWVudHMgdG8gYm9keVxuY29uc3QgZWxlbWVudE1ldGhvZHMgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCBhcHBlbmRUb0JvZHkgPSAoZGVzdGluYXRpb24pID0+XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVzdGluYXRpb24pLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICByZXR1cm4geyBhcHBlbmRUb0JvZHkgfTtcbn07XG5cbmV4cG9ydCB7IG1ha2VFbGVtZW50LCBlbGVtZW50TWV0aG9kcyB9O1xuIiwiaW1wb3J0IHsgbWFrZUVsZW1lbnQgfSBmcm9tIFwiLi9tYWtlLWVsZW1lbnRzXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbi8vIEdlbmVyYXRlcyBjb21wbGV0ZSBuYXZiYXJcbmNvbnN0IG1ha2VOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdkJhciA9IG1ha2VFbGVtZW50KHsgdHlwZTogXCJ1bFwiLCBpZDogXCJuYXZiYXJcIiwgY2xhc3NOYW1lOiBcIm5hdmJhclwiIH0pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkJhcik7XG5cbiAgY29uc3QgbmF2VGl0bGUgPSBtYWtlRWxlbWVudCh7IHR5cGU6IFwibGlcIiwgaWQ6IFwibmF2XCIsIGNsYXNzTmFtZTogXCJuYXZcIiB9KTtcbiAgbmF2VGl0bGUuaW5uZXJIVE1MID0gXCJCQVRUTEVTSElQXCI7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChuYXZUaXRsZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlTmF2YmFyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbWFrZU5hdmJhciBmcm9tIFwiLi9uYXZiYXJcIjtcbmltcG9ydCBtYWtlRGlzcGxheSBmcm9tIFwiLi9nYW1lLWRpc3BsYXlcIjtcbmltcG9ydCBtYWtlQ29weXJpZ2h0IGZyb20gXCIuL2NvcHlyaWdodGJhclwiO1xuXG4oZnVuY3Rpb24gcGxheUJhdHRsZXNoaXAoKSB7XG4gIG1ha2VOYXZiYXIoKTtcbiAgbWFrZURpc3BsYXkoKTtcbiAgbWFrZUNvcHlyaWdodCgpO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
