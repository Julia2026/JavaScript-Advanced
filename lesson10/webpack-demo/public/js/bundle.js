/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./application/constants.js":
/*!**********************************!*\
  !*** ./application/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"COUNTRY\": () => (/* binding */ COUNTRY),\n/* harmony export */   \"DATA\": () => (/* binding */ DATA),\n/* harmony export */   \"LANGUAGE\": () => (/* binding */ LANGUAGE),\n/* harmony export */   \"NUMBER_LESSON\": () => (/* binding */ NUMBER_LESSON)\n/* harmony export */ });\nconst NUMBER_LESSON = 10;\r\nconst DATA = '18-08-2022';\r\nconst COUNTRY = 'Ukraine';\r\nconst LANGUAGE = 'Ukrainian';\n\n//# sourceURL=webpack://webpack-demo/./application/constants.js?");

/***/ }),

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _showMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showMessage */ \"./application/showMessage.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./application/constants.js\");\n/* harmony import */ var _someValiable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./someValiable */ \"./application/someValiable.js\");\n\r\n\r\n\r\n\r\n(0,_showMessage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('JS is fine');\r\nconsole.log(_constants__WEBPACK_IMPORTED_MODULE_1__.COUNTRY);\r\nconsole.log(_constants__WEBPACK_IMPORTED_MODULE_1__.LANGUAGE);\r\nconsole.log(_constants__WEBPACK_IMPORTED_MODULE_1__.DATA);\r\nconsole.log(_constants__WEBPACK_IMPORTED_MODULE_1__.NUMBER_LESSON);\r\nconsole.log(_someValiable__WEBPACK_IMPORTED_MODULE_2__.changebleString);\r\n\r\n\n\n//# sourceURL=webpack://webpack-demo/./application/index.js?");

/***/ }),

/***/ "./application/showMessage.js":
/*!************************************!*\
  !*** ./application/showMessage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet test = 1;\r\n\r\nconst showMessage = (message) => {\r\n    console.log(`test param from file showMessage is equal to ${test} and your message is here ${message}`);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMessage);\r\n\n\n//# sourceURL=webpack://webpack-demo/./application/showMessage.js?");

/***/ }),

/***/ "./application/someValiable.js":
/*!*************************************!*\
  !*** ./application/someValiable.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changebleString\": () => (/* binding */ changebleString)\n/* harmony export */ });\nlet changebleString = 'some data is going to be changed';\n\n//# sourceURL=webpack://webpack-demo/./application/someValiable.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./application/index.js");
/******/ 	
/******/ })()
;