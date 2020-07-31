module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AppWrapper/AppWrapper.module.scss":
/*!******************************************************!*\
  !*** ./components/AppWrapper/AppWrapper.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"AppWrapperParent\": \"AppWrapper_AppWrapperParent__2W8Wl\",\n\t\"HeadlinePictureParent\": \"AppWrapper_HeadlinePictureParent__3AjnF\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcFdyYXBwZXIvQXBwV3JhcHBlci5tb2R1bGUuc2Nzcz80NGM4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcFdyYXBwZXIvQXBwV3JhcHBlci5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkFwcFdyYXBwZXJQYXJlbnRcIjogXCJBcHBXcmFwcGVyX0FwcFdyYXBwZXJQYXJlbnRfXzJXOFdsXCIsXG5cdFwiSGVhZGxpbmVQaWN0dXJlUGFyZW50XCI6IFwiQXBwV3JhcHBlcl9IZWFkbGluZVBpY3R1cmVQYXJlbnRfXzNBam5GXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AppWrapper/AppWrapper.module.scss\n");

/***/ }),

/***/ "./components/AppWrapper/AppWrapper.tsx":
/*!**********************************************!*\
  !*** ./components/AppWrapper/AppWrapper.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AppWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppWrapper.module.scss */ \"./components/AppWrapper/AppWrapper.module.scss\");\n/* harmony import */ var _AppWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AppWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _HeadlinePictureWrapper_HeadlinePictureWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HeadlinePictureWrapper/HeadlinePictureWrapper */ \"./components/HeadlinePictureWrapper/HeadlinePictureWrapper.tsx\");\n/* harmony import */ var _IngredientWrapper_IngredientWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../IngredientWrapper/IngredientWrapper */ \"./components/IngredientWrapper/IngredientWrapper.tsx\");\nvar _jsxFileName = \"/home/ben/Documents/feinkoch/challenge/recipe-frontend/components/AppWrapper/AppWrapper.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst AppWrapper = () => {\n  return __jsx(\"div\", {\n    className: _AppWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.AppWrapperParent,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _AppWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.HeadlinePictureParent,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, __jsx(_HeadlinePictureWrapper_HeadlinePictureWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }, __jsx(_IngredientWrapper_IngredientWrapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 17\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppWrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcFdyYXBwZXIvQXBwV3JhcHBlci50c3g/MWE2NiJdLCJuYW1lcyI6WyJBcHBXcmFwcGVyIiwic3R5bGVzIiwiQXBwV3JhcHBlclBhcmVudCIsIkhlYWRsaW5lUGljdHVyZVBhcmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUEsVUFBb0IsR0FBRyxNQUFNO0FBRS9CLFNBQ0k7QUFBSyxhQUFTLEVBQUVDLDhEQUFNLENBQUNDLGdCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBSyxhQUFTLEVBQUVELDhEQUFNLENBQUNFLHFCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FGSixFQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQU5KLENBREo7QUFZSCxDQWREOztBQWdCZUgseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcFdyYXBwZXIvQXBwV3JhcHBlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FwcFdyYXBwZXIubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgSGVhZGxpbmVQaWN0dXJlV3JhcHBlciBmcm9tICcuLi9IZWFkbGluZVBpY3R1cmVXcmFwcGVyL0hlYWRsaW5lUGljdHVyZVdyYXBwZXInO1xuaW1wb3J0IEluZ3JlZGllbnRXcmFwcGVyIGZyb20gJy4uL0luZ3JlZGllbnRXcmFwcGVyL0luZ3JlZGllbnRXcmFwcGVyJztcblxuY29uc3QgQXBwV3JhcHBlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFwcFdyYXBwZXJQYXJlbnR9PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRsaW5lUGljdHVyZVBhcmVudH0+XG4gICAgICAgICAgICAgICAgPEhlYWRsaW5lUGljdHVyZVdyYXBwZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxJbmdyZWRpZW50V3JhcHBlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwV3JhcHBlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AppWrapper/AppWrapper.tsx\n");

/***/ }),

/***/ "./components/HeadlinePictureWrapper/HeadlinePictureWrapper.tsx":
/*!**********************************************************************!*\
  !*** ./components/HeadlinePictureWrapper/HeadlinePictureWrapper.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/ben/Documents/feinkoch/challenge/recipe-frontend/components/HeadlinePictureWrapper/HeadlinePictureWrapper.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst HeadlinePictureWrapper = () => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 12\n    }\n  }, \"HeadlinePictureWrapper\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeadlinePictureWrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRsaW5lUGljdHVyZVdyYXBwZXIvSGVhZGxpbmVQaWN0dXJlV3JhcHBlci50c3g/NjA2YyJdLCJuYW1lcyI6WyJIZWFkbGluZVBpY3R1cmVXcmFwcGVyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUdBLE1BQU1BLHNCQUFnQyxHQUFHLE1BQU07QUFFM0MsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUFQO0FBQ0gsQ0FIRDs7QUFLZUEscUZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRsaW5lUGljdHVyZVdyYXBwZXIvSGVhZGxpbmVQaWN0dXJlV3JhcHBlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRsaW5lUGljdHVyZVdyYXBwZXIubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBIZWFkbGluZVBpY3R1cmVXcmFwcGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcblxuICAgIHJldHVybiA8ZGl2PkhlYWRsaW5lUGljdHVyZVdyYXBwZXI8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGxpbmVQaWN0dXJlV3JhcHBlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/HeadlinePictureWrapper/HeadlinePictureWrapper.tsx\n");

/***/ }),

/***/ "./components/IngredientWrapper/IngredientWrapper.tsx":
/*!************************************************************!*\
  !*** ./components/IngredientWrapper/IngredientWrapper.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/ben/Documents/feinkoch/challenge/recipe-frontend/components/IngredientWrapper/IngredientWrapper.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst IngredientWrapper = () => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 12\n    }\n  }, \"IngredientWrapper\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IngredientWrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0luZ3JlZGllbnRXcmFwcGVyL0luZ3JlZGllbnRXcmFwcGVyLnRzeD9lNTlkIl0sIm5hbWVzIjpbIkluZ3JlZGllbnRXcmFwcGVyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUtBLE1BQU1BLGlCQUEyQixHQUFHLE1BQU07QUFFdEMsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFQO0FBQ0gsQ0FIRDs7QUFLZUEsZ0ZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0luZ3JlZGllbnRXcmFwcGVyL0luZ3JlZGllbnRXcmFwcGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbmdyZWRpZW50V3JhcHBlci5tb2R1bGUuc2Nzcyc7XG5cblxuY29uc3QgSW5ncmVkaWVudFdyYXBwZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuXG4gICAgcmV0dXJuIDxkaXY+SW5ncmVkaWVudFdyYXBwZXI8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5ncmVkaWVudFdyYXBwZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/IngredientWrapper/IngredientWrapper.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AppWrapper_AppWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppWrapper/AppWrapper */ \"./components/AppWrapper/AppWrapper.tsx\");\nvar _jsxFileName = \"/home/ben/Documents/feinkoch/challenge/recipe-frontend/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Index = () => {\n  return __jsx(_components_AppWrapper_AppWrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 12\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxLQUFlLEdBQUcsTUFBTTtBQUUxQixTQUFPLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ0gsQ0FIRDs7QUFNZUEsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcFdyYXBwZXIgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBXcmFwcGVyL0FwcFdyYXBwZXInO1xuXG5jb25zdCBJbmRleDogUmVhY3QuRkMgPSAoKSA9PiB7XG5cbiAgICByZXR1cm4gPEFwcFdyYXBwZXIgLz5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });