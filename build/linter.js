/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/linter.js?68c3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js-exposed":
/*!*******************************************!*\
  !*** (webpack)/buildin/global.js-exposed ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"lint\"] = __webpack_require__(/*! -!./global.js */ \"./node_modules/webpack/buildin/global.js\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./global.js */ \"./node_modules/webpack/buildin/global.js-exposed\")))\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js-exposed?");

/***/ }),

/***/ "./src/Errors/FormContentItemIndentError.js":
/*!**************************************************!*\
  !*** ./src/Errors/FormContentItemIndentError.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const FormError = __webpack_require__(/*! ./FormError.js */ \"./src/Errors/FormError.js-exposed\");\r\nconst CODE = \"FORM.CONTENT_ITEM_INDENT_IS_INVALID\";\r\nconst MESSAGE = \"Строки формы (в которые складываются лейбл и инпут) помечаются элементом формы content-item и должны отбиваться между собой с помощью модификатора нижнего отступа со значением модификатора indent-b элемента формы item на 1 шаг больше эталонного размера\";\r\n\r\nclass FormContentItemIndentError extends FormError {\r\n    /**\r\n     * @param {string} obj\r\n     * @param {number} positionStart\r\n     */\r\n    constructor(obj, positionStart) {\r\n        super(obj, positionStart, CODE, MESSAGE);\r\n    }\r\n}\r\n\r\nmodule.exports = FormContentItemIndentError;\n\n//# sourceURL=webpack:///./src/Errors/FormContentItemIndentError.js?");

/***/ }),

/***/ "./src/Errors/FormContentItemIndentError.js-exposed":
/*!**********************************************************!*\
  !*** ./src/Errors/FormContentItemIndentError.js-exposed ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"lint\"] = __webpack_require__(/*! -!./FormContentItemIndentError.js */ \"./src/Errors/FormContentItemIndentError.js\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js-exposed\")))\n\n//# sourceURL=webpack:///./src/Errors/FormContentItemIndentError.js-exposed?");

/***/ }),

/***/ "./src/Errors/FormError.js":
/*!*********************************!*\
  !*** ./src/Errors/FormError.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const ValidateError = __webpack_require__(/*! ./LinterError.js */ \"./src/Errors/LinterError.js-exposed\");\r\nclass FormError extends ValidateError {}\r\n\r\nmodule.exports = FormError;\n\n//# sourceURL=webpack:///./src/Errors/FormError.js?");

/***/ }),

/***/ "./src/Errors/FormError.js-exposed":
/*!*****************************************!*\
  !*** ./src/Errors/FormError.js-exposed ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"lint\"] = __webpack_require__(/*! -!./FormError.js */ \"./src/Errors/FormError.js\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js-exposed\")))\n\n//# sourceURL=webpack:///./src/Errors/FormError.js-exposed?");

/***/ }),

/***/ "./src/Errors/FormHeaderHorizontalSpaceError.js?5474":
/*!******************************************************!*\
  !*** ./src/Errors/FormHeaderHorizontalSpaceError.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const FormError = __webpack_require__(/*! ./FormError.js */ \"./src/Errors/FormError.js-exposed\");\r\nconst CODE = \"FORM.HEADER_HORIZONTAL_SPACE_IS_INVALID\";\r\nconst MESSAGE = \"Горизонтальный внутренний отступ должен быть на 1 шаг больше эталонного размера\";\r\n\r\nclass FormHeaderVerticalSpaceError extends FormError {\r\n    /**\r\n     * @param {string} obj\r\n     * @param {number} positionStart\r\n     */\r\n    constructor(obj, positionStart) {\r\n        super(obj, positionStart, CODE, MESSAGE);\r\n    }\r\n}\r\n\r\nmodule.exports = FormHeaderVerticalSpaceError;\r\n\n\n//# sourceURL=webpack:///./src/Errors/FormHeaderHorizontalSpaceError.js?");

/***/ }),

/***/ "./src/Errors/FormHeaderHorizontalSpaceError.js?e4c1":
/*!******************************************************!*\
  !*** ./src/Errors/FormHeaderHorizontalSpaceError.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"lint\"] = __webpack_require__(/*! -!./FormHeaderHorizontalSpaceError.js */ \"./src/Errors/FormHeaderHorizontalSpaceError.js?5474\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js-exposed\")))\n\n//# sourceURL=webpack:///./src/Errors/FormHeaderHorizontalSpaceError.js?");

/***/ }),

/***/ "./src/Errors/FormHeaderSizeError.js?45ed":
/*!*******************************************!*\
  !*** ./src/Errors/FormHeaderSizeError.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const FormError = __webpack_require__(/*! ./FormError.js */ \"./src/Errors/FormError.js-exposed\");\r\nconst CODE = \"FORM.HEADER_TEXT_SIZE_IS_INVALID\";\r\nconst MESSAGE = \"Все текстовые блоки в заголовке формы (элемент header) должны быть со значением модификатора size на 2 шага больше эталонного размера\";\r\n\r\nclass FormContentItemIndentError extends FormError {\r\n    /**\r\n     * @param {string} obj\r\n     * @param {number} positionStart\r\n     */\r\n    constructor(obj, positionStart) {\r\n        super(obj, positionStart, CODE, MESSAGE);\r\n    }\r\n}\r\n\r\nmodule.exports = FormContentItemIndentError;\r\n\n\n//# sourceURL=webpack:///./src/Errors/FormHeaderSizeError.js?");

/***/ }),

/***/ "./src/Errors/FormHeaderSizeError.js?df1a":
/*!*******************************************!*\
  !*** ./src/Errors/FormHeaderSizeError.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"lint\"] = __webpack_require__(/*! -!./FormHeaderSizeError.js */ \"./src/Errors/FormHeaderSizeError.js?45ed\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js-exposed\")))\n\n//# sourceURL=webpack:///./src/Errors/FormHeaderSizeError.js?");

/***/ }),

/***/ "./src/Errors/FormHeaderVerticalSpaceError.js?51ed":
/*!****************************************************!*\
  !*** ./src/Errors/FormHeaderVerticalSpaceError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"lint\"] = __webpack_require__(/*! -!./FormHeaderVerticalSpaceError.js */ \"./src/Errors/FormHeaderVerticalSpaceError.js?ead4\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js-exposed\")))\n\n//# sourceURL=webpack:///./src/Errors/FormHeaderVerticalSpaceError.js?");

/***/ }),

/***/ "./src/Errors/FormHeaderVerticalSpaceError.js?ead4":
/*!****************************************************!*\
  !*** ./src/Errors/FormHeaderVerticalSpaceError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const FormError = __webpack_require__(/*! ./FormError.js */ \"./src/Errors/FormError.js-exposed\");\r\nconst CODE = \"FORM.HEADER_VERTICAL_SPACE_IS_INVALID\";\r\nconst MESSAGE = \"Вертикальный внутренний отступ заголовка формы должен быть задан с помощью микса на него элемента формы item со значением модификатора space-v, равным эталонному размеру\";\r\n\r\nclass FormHeaderVerticalSpaceError extends FormError {\r\n    /**\r\n     * @param {string} obj\r\n     * @param {number} positionStart\r\n     */\r\n    constructor(obj, positionStart) {\r\n        super(obj, positionStart, CODE, MESSAGE);\r\n    }\r\n}\r\n\r\nmodule.exports = FormHeaderVerticalSpaceError;\r\n\n\n//# sourceURL=webpack:///./src/Errors/FormHeaderVerticalSpaceError.js?");

/***/ }),

/***/ "./src/Errors/FormHorizontalSpaceError.js?af08":
/*!************************************************!*\
  !*** ./src/Errors/FormHorizontalSpaceError.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const FormError = __webpack_require__(/*! ./FormError.js */ \"./src/Errors/FormError.js-exposed\");\r\nconst CODE = \"FORM.CONTENT_HORIZONTAL_SPACE_IS_INVALID\";\r\nconst MESSAGE = \"Горизонтальный внутренний отступ контентного элемента должен задаваться с помощью модификатора space-h элемента формы item на 1 шаг больше эталонного размера\";\r\n\r\nclass FormSizeError extends FormError {\r\n    /**\r\n     * @param {string} obj\r\n     * @param {number} positionStart\r\n     */\r\n    constructor(obj, positionStart) {\r\n        super(obj, positionStart, CODE, MESSAGE);\r\n    }\r\n}\r\n\r\nmodule.exports = FormSizeError;\n\n//# sourceURL=webpack:///./src/Errors/FormHorizontalSpaceError.js?");

/***/ }),

/***/ "./src/Errors/FormHorizontalSpaceError.js?e08e":
/*!************************************************!*\
  !*** ./src/Errors/FormHorizontalSpaceError.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"lint\"] = __webpack_require__(/*! -!./FormHorizontalSpaceError.js */ \"./src/Errors/FormHorizontalSpaceError.js?af08\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js-exposed\")))\n\n//# sourceURL=webpack:///./src/Errors/FormHorizontalSpaceError.js?");

/***/ }),

/***/ "./src/Errors/FormSizeError.js":
/*!*************************************!*\
  !*** ./src/Errors/FormSizeError.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const FormError = __webpack_require__(/*! ./FormError.js */ \"./src/Errors/FormError.js-exposed\");\r\nconst CODE = \"FORM.INPUT_AND_LABEL_SIZES_SHOULD_BE_EQUAL\";\r\nconst MESSAGE = \"Подписи и поля в форме должны быть одного размера\";\r\n\r\nclass FormSizeError extends FormError {\r\n    /**\r\n     * @param {string} obj\r\n     * @param {number} positionStart\r\n     */\r\n    constructor(obj, positionStart) {\r\n        super(obj, positionStart, CODE, MESSAGE);\r\n    }\r\n}\r\n\r\nmodule.exports = FormSizeError;\n\n//# sourceURL=webpack:///./src/Errors/FormSizeError.js?");

/***/ }),

/***/ "./src/Errors/FormSizeError.js-exposed":
/*!*********************************************!*\
  !*** ./src/Errors/FormSizeError.js-exposed ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"lint\"] = __webpack_require__(/*! -!./FormSizeError.js */ \"./src/Errors/FormSizeError.js\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js-exposed\")))\n\n//# sourceURL=webpack:///./src/Errors/FormSizeError.js-exposed?");

/***/ }),

/***/ "./src/Errors/FormVerticalSpaceError.js":
/*!**********************************************!*\
  !*** ./src/Errors/FormVerticalSpaceError.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const FormError = __webpack_require__(/*! ./FormError.js */ \"./src/Errors/FormError.js-exposed\");\r\nconst CODE = \"FORM.CONTENT_VERTICAL_SPACE_IS_INVALID\";\r\nconst MESSAGE = \"Вертикальный внутренний отступ контентного элемента формы content должен задаваться с помощью микса на него элемента формы item со значением модификатора space-v на 2 шага больше эталонного размера\";\r\n\r\nclass FormSizeError extends FormError {\r\n    /**\r\n     * @param {string} obj\r\n     * @param {number} positionStart\r\n     */\r\n    constructor(obj, positionStart) {\r\n        super(obj, positionStart, CODE, MESSAGE);\r\n    }\r\n}\r\n\r\nmodule.exports = FormSizeError;\n\n//# sourceURL=webpack:///./src/Errors/FormVerticalSpaceError.js?");

/***/ }),

/***/ "./src/Errors/FormVerticalSpaceError.js-exposed":
/*!******************************************************!*\
  !*** ./src/Errors/FormVerticalSpaceError.js-exposed ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"lint\"] = __webpack_require__(/*! -!./FormVerticalSpaceError.js */ \"./src/Errors/FormVerticalSpaceError.js\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js-exposed\")))\n\n//# sourceURL=webpack:///./src/Errors/FormVerticalSpaceError.js-exposed?");

/***/ }),

/***/ "./src/Errors/LinterError.js":
/*!***********************************!*\
  !*** ./src/Errors/LinterError.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {getBlock, findLineStart, countLines, countColumn} = __webpack_require__(/*! ../Validators/tools.js */ \"./src/Validators/tools.js-exposed\");\r\n\r\nclass LinterError extends Error {\r\n    /**\r\n     * @param {string} obj\r\n     * @param {number} positionStart\r\n     * @param {string} code\r\n     * @param {string} message\r\n     */\r\n    constructor(obj, positionStart, code, message) {\r\n        super();\r\n        let block = getBlock(obj, positionStart);\r\n        let startLine = countLines(obj.substring(0, positionStart));\r\n        let startColumn = countColumn(obj, positionStart);\r\n        let endLine = startLine + countLines(block) - 1;//-1 потому что не учитываем 1-ю строку\r\n        let endColumn = countColumn(obj, (positionStart + block.length));\r\n        this.startLine = startLine;\r\n        this.startColumn = startColumn;\r\n        this.endLine = endLine;\r\n        this.endColumn = endColumn;\r\n        this.code = code;\r\n        this.message = message;\r\n    }\r\n\r\n    /**\r\n     * @return {{code: string, location: {start: {line: number, column: number}, end: {line: number, column: number}}, error: string}}\r\n     */\r\n    getError() {\r\n        return {\r\n            code: this.code,\r\n            error: this.message,\r\n            location: {\r\n                start: {line: this.startLine, column: this.startColumn},\r\n                end: {line: this.endLine, column: this.endColumn}\r\n            }\r\n        };\r\n    }\r\n}\r\n\r\nmodule.exports = LinterError;\n\n//# sourceURL=webpack:///./src/Errors/LinterError.js?");

/***/ }),

/***/ "./src/Errors/LinterError.js-exposed":
/*!*******************************************!*\
  !*** ./src/Errors/LinterError.js-exposed ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"lint\"] = __webpack_require__(/*! -!./LinterError.js */ \"./src/Errors/LinterError.js\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js-exposed\")))\n\n//# sourceURL=webpack:///./src/Errors/LinterError.js-exposed?");

/***/ }),

/***/ "./src/Validators/form/contentItemsValidator.js":
/*!******************************************************!*\
  !*** ./src/Validators/form/contentItemsValidator.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const FormContentItemIndentError = __webpack_require__(/*! ../../Errors/FormContentItemIndentError.js */ \"./src/Errors/FormContentItemIndentError.js-exposed\");\r\nconst {getBlock, findSize, jsonParser, findStartBlock} = __webpack_require__(/*! ../tools.js */ \"./src/Validators/tools.js-exposed\");\r\n\r\n/**\r\n * @param {string} blockStr\r\n * @param {string} referenceSize\r\n * @param {string} originalBlockStr\r\n * @param {number} blockStartPosition\r\n *\r\n * @throws FormSizeError\r\n */\r\nmodule.exports = function (blockStr, referenceSize, originalBlockStr, blockStartPosition) {\r\n\r\n    let regExpForm = /\"elem\"(\\s){0,}:(\\s){0,}\"content-item\"/g;\r\n    let positionContentItems = [];\r\n    let errors = [];\r\n    while (true) {\r\n        let regExpResult = regExpForm.exec(blockStr);\r\n        if (!regExpResult) {\r\n            break;\r\n        }\r\n        positionContentItems.push(blockStartPosition + findStartBlock(blockStr, regExpResult.index));\r\n    }\r\n    positionContentItems.forEach(function (position, index) {\r\n        let block = getBlock(originalBlockStr, position);\r\n        try {\r\n            validate(jsonParser(block), referenceSize, originalBlockStr, position, (index + 1) < positionContentItems.length)\r\n        } catch (e) {\r\n            if (e instanceof FormContentItemIndentError) {\r\n                errors.push(e.getError());\r\n            } else {\r\n                throw e;\r\n            }\r\n        }\r\n    });\r\n    return errors;\r\n};\r\n/**\r\n * @param {{block: string, elem: string|undefined, content: Array|undefined, mix: Object|undefined}} blockObj\r\n * @param {string} referenceSize\r\n * @param {string} originalBlockStr\r\n * @param {number} blockStartPosition\r\n * @param {boolean} isRequire\r\n *\r\n * @throws FormContentItemIndentError\r\n */\r\nconst validate = function (blockObj, referenceSize, originalBlockStr, blockStartPosition, isRequire) {\r\n    if (blockObj.mix) {\r\n        blockObj.mix.forEach((mix) => {\r\n            if (!validateMix(mix, referenceSize, isRequire)) {\r\n                throw new FormContentItemIndentError(originalBlockStr, blockStartPosition);\r\n            }\r\n        });\r\n    } else if (isRequire) {\r\n        throw new FormContentItemIndentError(originalBlockStr, blockStartPosition);\r\n    }\r\n};\r\n\r\n/**\r\n * @param {{block: string, elem: string|undefined, content: Array|undefined, mods: Object|undefined}} mix\r\n * @param {string} referenceSize\r\n * @param {boolean} isRequire\r\n *\r\n * @return {boolean}\r\n */\r\nconst validateMix = function (mix, referenceSize, isRequire) {\r\n    if (mix.block === 'form' && mix.elem === 'item' && mix.mods['indent-b'] && isRequire) {\r\n        return ((findSize(mix.mods['indent-b']) - findSize(referenceSize)) === 1);\r\n    }\r\n    return !isRequire;\r\n};\n\n//# sourceURL=webpack:///./src/Validators/form/contentItemsValidator.js?");

/***/ }),

/***/ "./src/Validators/form/contentItemsValidator.js-exposed":
/*!**************************************************************!*\
  !*** ./src/Validators/form/contentItemsValidator.js-exposed ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"lint\"] = __webpack_require__(/*! -!./contentItemsValidator.js */ \"./src/Validators/form/contentItemsValidator.js\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js-exposed\")))\n\n//# sourceURL=webpack:///./src/Validators/form/contentItemsValidator.js-exposed?");

/***/ }),

/***/ "./src/Validators/form/contentValidator.js":
/*!*************************************************!*\
  !*** ./src/Validators/form/contentValidator.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const LinterError = __webpack_require__(/*! ../../Errors/LinterError.js */ \"./src/Errors/LinterError.js-exposed\");\r\nconst spaceHorizontalValidator = __webpack_require__(/*! ./spaceHorizontalValidator.js */ \"./src/Validators/form/spaceHorizontalValidator.js-exposed\");\r\nconst spaceVerticalValidator = __webpack_require__(/*! ./spaceVerticalValidator.js */ \"./src/Validators/form/spaceVerticalValidator.js-exposed\");\r\nconst contentItemsValidator = __webpack_require__(/*! ./contentItemsValidator.js */ \"./src/Validators/form/contentItemsValidator.js-exposed\");\r\n\r\n/**\r\n * @param {string} blockStr\r\n * @param {string} referenceSize\r\n * @param {string} originalBlockStr\r\n * @param {number} startPositionBlock\r\n * @return {[{code:string,message:string,locality:{start:{line:number,column:number},end:{line:number,column:number}}}]}\r\n */\r\nmodule.exports = function (blockStr, referenceSize, originalBlockStr, startPositionBlock) {\r\n    let errors = [];\r\n    try {\r\n        spaceHorizontalValidator(blockStr, referenceSize, originalBlockStr, startPositionBlock);\r\n    } catch (e) {\r\n        if (e instanceof LinterError) {\r\n            errors.push(e.getError());\r\n        } else {\r\n            throw e;\r\n        }\r\n    }\r\n    try {\r\n        spaceVerticalValidator(blockStr, referenceSize, originalBlockStr, startPositionBlock);\r\n    } catch (e) {\r\n        if (e instanceof LinterError) {\r\n            errors.push(e.getError());\r\n        } else {\r\n            throw e;\r\n        }\r\n    }\r\n    errors = errors.concat(contentItemsValidator(blockStr, referenceSize, originalBlockStr, startPositionBlock));\r\n    return errors;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/Validators/form/contentValidator.js?");

/***/ }),

/***/ "./src/Validators/form/contentValidator.js-exposed":
/*!*********************************************************!*\
  !*** ./src/Validators/form/contentValidator.js-exposed ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"lint\"] = __webpack_require__(/*! -!./contentValidator.js */ \"./src/Validators/form/contentValidator.js\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js-exposed\")))\n\n//# sourceURL=webpack:///./src/Validators/form/contentValidator.js-exposed?");

/***/ }),

/***/ "./src/Validators/form/headerSpaceHorizontalValidator.js?2dc5":
/*!***************************************************************!*\
  !*** ./src/Validators/form/headerSpaceHorizontalValidator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const FormHeaderHorizontalSpaceError = __webpack_require__(/*! ../../Errors/FormHeaderHorizontalSpaceError.js */ \"./src/Errors/FormHeaderHorizontalSpaceError.js?e4c1\");\r\nconst {findSize, jsonParser} = __webpack_require__(/*! ../tools.js */ \"./src/Validators/tools.js-exposed\");\r\n\r\n/**\r\n * @param {string} blockStr\r\n * @param {string} referenceSize\r\n * @param {string} originalBlockStr\r\n * @param {number} blockStartPosition\r\n *\r\n * @throws FormHeaderHorizontalSpaceError\r\n */\r\nmodule.exports = function (blockStr, referenceSize, originalBlockStr, blockStartPosition) {\r\n    validate(jsonParser(blockStr), referenceSize, originalBlockStr, blockStartPosition);\r\n};\r\n/**\r\n * @param {{block: string, elem: string|undefined, content: Array|undefined, mix: Object|undefined}} blockObj\r\n * @param {string} referenceSize\r\n * @param {string} originalBlockStr\r\n * @param {number} blockStartPosition\r\n *\r\n * @throws FormHeaderHorizontalSpaceError\r\n */\r\nconst validate = function (blockObj, referenceSize, originalBlockStr, blockStartPosition) {\r\n    if (blockObj.mix) {\r\n        blockObj.mix.forEach((mix) => {\r\n            if (!validateMix(mix, referenceSize)) {\r\n                throw new FormHeaderHorizontalSpaceError(originalBlockStr, blockStartPosition);\r\n            }\r\n        });\r\n    } else {\r\n        throw new FormHeaderHorizontalSpaceError(originalBlockStr, blockStartPosition);\r\n    }\r\n};\r\n\r\n/**\r\n * @param {{block: string, elem: string|undefined, content: Array|undefined, mods: Object|undefined}} mix\r\n * @param {string} referenceSize\r\n *\r\n */\r\nconst validateMix = function (mix, referenceSize) {\r\n    if (mix.block === 'form' && mix.elem === 'item' && mix.mods['space-h']) {\r\n        return (findSize(mix.mods['space-h']) - findSize(referenceSize)) === 1;\r\n    }\r\n    return true;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/Validators/form/headerSpaceHorizontalValidator.js?");

/***/ }),

/***/ "./src/Validators/form/headerSpaceHorizontalValidator.js?c691":
/*!***************************************************************!*\
  !*** ./src/Validators/form/headerSpaceHorizontalValidator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"lint\"] = __webpack_require__(/*! -!./headerSpaceHorizontalValidator.js */ \"./src/Validators/form/headerSpaceHorizontalValidator.js?2dc5\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js-exposed\")))\n\n//# sourceURL=webpack:///./src/Validators/form/headerSpaceHorizontalValidator.js?");

/***/ }),

/***/ "./src/Validators/form/headerSpaceVerticalValidator.js?380a":
/*!*************************************************************!*\
  !*** ./src/Validators/form/headerSpaceVerticalValidator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const FormHeaderVerticalSpaceError = __webpack_require__(/*! ../../Errors/FormHeaderVerticalSpaceError.js */ \"./src/Errors/FormHeaderVerticalSpaceError.js?51ed\");\r\nconst {findSize, jsonParser} = __webpack_require__(/*! ../tools.js */ \"./src/Validators/tools.js-exposed\");\r\n\r\n/**\r\n * @param {string} blockStr\r\n * @param {string} referenceSize\r\n * @param {string} originalBlockStr\r\n * @param {number} blockStartPosition\r\n *\r\n * @throws FormHeaderVerticalSpaceError\r\n */\r\nmodule.exports = function (blockStr, referenceSize, originalBlockStr, blockStartPosition) {\r\n    validate(jsonParser(blockStr), referenceSize, originalBlockStr, blockStartPosition);\r\n};\r\n/**\r\n * @param {{block: string, elem: string|undefined, content: Array|undefined, mix: Object|undefined}} blockObj\r\n * @param {string} referenceSize\r\n * @param {string} originalBlockStr\r\n * @param {number} blockStartPosition\r\n *\r\n * @throws FormHeaderVerticalSpaceError\r\n */\r\nconst validate = function (blockObj, referenceSize, originalBlockStr, blockStartPosition) {\r\n    if (blockObj.mix) {\r\n        blockObj.mix.forEach((mix) => {\r\n            if (!validateMix(mix, referenceSize)) {\r\n                throw new FormHeaderVerticalSpaceError(originalBlockStr, blockStartPosition);\r\n            }\r\n        });\r\n    } else {\r\n        throw new FormHeaderVerticalSpaceError(originalBlockStr, blockStartPosition);\r\n    }\r\n};\r\n\r\n/**\r\n * @param {{block: string, elem: string|undefined, content: Array|undefined, mods: Object|undefined}} mix\r\n * @param {string} referenceSize\r\n *\r\n */\r\nconst validateMix = function (mix, referenceSize) {\r\n    if (mix.block === 'form' && mix.elem === 'item' && mix.mods['space-v']) {\r\n        return (findSize(mix.mods['space-v']) === findSize(referenceSize));\r\n    }\r\n    return true;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/Validators/form/headerSpaceVerticalValidator.js?");

/***/ }),

/***/ "./src/Validators/form/headerSpaceVerticalValidator.js?8b87":
/*!*************************************************************!*\
  !*** ./src/Validators/form/headerSpaceVerticalValidator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"lint\"] = __webpack_require__(/*! -!./headerSpaceVerticalValidator.js */ \"./src/Validators/form/headerSpaceVerticalValidator.js?380a\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js-exposed\")))\n\n//# sourceURL=webpack:///./src/Validators/form/headerSpaceVerticalValidator.js?");

/***/ }),

/***/ "./src/Validators/form/headerValidator.js":
/*!************************************************!*\
  !*** ./src/Validators/form/headerValidator.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const FormHeaderSizeError = __webpack_require__(/*! ../../Errors/FormHeaderSizeError.js */ \"./src/Errors/FormHeaderSizeError.js?df1a\");\r\nconst FormHeaderVerticalSpaceError = __webpack_require__(/*! ../../Errors/FormHeaderVerticalSpaceError.js */ \"./src/Errors/FormHeaderVerticalSpaceError.js?51ed\");\r\nconst FormHeaderHorizontalSpaceError = __webpack_require__(/*! ../../Errors/FormHeaderHorizontalSpaceError.js */ \"./src/Errors/FormHeaderHorizontalSpaceError.js?e4c1\");\r\nconst {getBlock, findSize, jsonParser, findStartBlock} = __webpack_require__(/*! ../tools.js */ \"./src/Validators/tools.js-exposed\");\r\nconst headerSpaceVerticalValidator = __webpack_require__(/*! ./headerSpaceVerticalValidator.js */ \"./src/Validators/form/headerSpaceVerticalValidator.js?8b87\");\r\nconst headerSpaceHorizontalValidator = __webpack_require__(/*! ./headerSpaceHorizontalValidator.js */ \"./src/Validators/form/headerSpaceHorizontalValidator.js?c691\");\r\n\r\n/**\r\n * @param {string} blockStr\r\n * @param {string} referenceSize\r\n * @param {string} originalBlockStr\r\n * @param {number} blockStartPosition\r\n *\r\n * @throws FormSizeError\r\n */\r\nmodule.exports = function (blockStr, referenceSize, originalBlockStr, blockStartPosition) {\r\n    let errors = [];\r\n\r\n    errors = errors.concat(validateSpace(blockStr, referenceSize, originalBlockStr, blockStartPosition));\r\n\r\n    let regExpForm = /\"block\"(\\s){0,}:(\\s){0,}\"text\"/g;\r\n    let positionContentItems = [];\r\n    while (true) {\r\n        let regExpResult = regExpForm.exec(blockStr);\r\n        if (!regExpResult) {\r\n            break;\r\n        }\r\n        positionContentItems.push(blockStartPosition + findStartBlock(blockStr, regExpResult.index));\r\n    }\r\n    positionContentItems.forEach(function (position) {\r\n        let block = getBlock(originalBlockStr, position);\r\n        try {\r\n            validate(jsonParser(block), referenceSize, originalBlockStr, position)\r\n        } catch (e) {\r\n            if (e instanceof FormHeaderSizeError) {\r\n                errors.push(e.getError());\r\n            } else {\r\n                throw e;\r\n            }\r\n        }\r\n    });\r\n    return errors;\r\n};\r\n/**\r\n * @param {{block: string, elem: string|undefined, content: Array|undefined, mods: Object|undefined}} blockObj\r\n * @param {string} referenceSize\r\n * @param {string} originalBlockStr\r\n * @param {number} blockStartPosition\r\n *\r\n * @throws FormContentItemIndentError\r\n */\r\nconst validate = function (blockObj, referenceSize, originalBlockStr, blockStartPosition) {\r\n    if (blockObj.mods && blockObj.mods.size) {\r\n        if ((findSize(blockObj.mods.size) - findSize(referenceSize)) !== 2) {\r\n            throw new FormHeaderSizeError(originalBlockStr, blockStartPosition);\r\n        }\r\n    } else {\r\n        throw new FormHeaderSizeError(originalBlockStr, blockStartPosition);\r\n    }\r\n};\r\n\r\nconst validateSpace = function (blockStr, referenceSize, originalBlockStr, blockStartPosition) {\r\n    let errors = [];\r\n    try {\r\n        headerSpaceVerticalValidator(blockStr, referenceSize, originalBlockStr, blockStartPosition);\r\n    } catch (e) {\r\n        if (e instanceof FormHeaderVerticalSpaceError) {\r\n            errors.push(e.getError());\r\n        } else {\r\n            throw e;\r\n        }\r\n    }\r\n    try {\r\n        headerSpaceHorizontalValidator(blockStr, referenceSize, originalBlockStr, blockStartPosition);\r\n    } catch (e) {\r\n        if (e instanceof FormHeaderHorizontalSpaceError) {\r\n            errors.push(e.getError());\r\n        } else {\r\n            throw e;\r\n        }\r\n    }\r\n    return errors;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/Validators/form/headerValidator.js?");

/***/ }),

/***/ "./src/Validators/form/headerValidator.js-exposed":
/*!********************************************************!*\
  !*** ./src/Validators/form/headerValidator.js-exposed ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"lint\"] = __webpack_require__(/*! -!./headerValidator.js */ \"./src/Validators/form/headerValidator.js\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js-exposed\")))\n\n//# sourceURL=webpack:///./src/Validators/form/headerValidator.js-exposed?");

/***/ }),

/***/ "./src/Validators/form/sizeValidator.js":
/*!**********************************************!*\
  !*** ./src/Validators/form/sizeValidator.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const FormSizeError = __webpack_require__(/*! ../../Errors/FormSizeError.js */ \"./src/Errors/FormSizeError.js-exposed\");\r\nconst {FORM_ELEMENTS, ELEMENTS, jsonParser, factoryElement} = __webpack_require__(/*! ../tools.js */ \"./src/Validators/tools.js-exposed\");\r\n\r\n/**\r\n * @param {string} blockStr\r\n * @param {string} referenceSize\r\n * @param {string} originalBlockStr\r\n * @param {number} blockStartPosition\r\n *\r\n * @throws FormSizeError\r\n */\r\nmodule.exports = function (blockStr, referenceSize, originalBlockStr, blockStartPosition) {\r\n    validate(jsonParser(blockStr), referenceSize, originalBlockStr, blockStartPosition);\r\n};\r\n/**\r\n * @param {{block: string, content: Array|undefined, mods: Object|undefined}} blockObj\r\n * @param {string} referenceSize\r\n * @param {string} originalBlockStr\r\n * @param {number} blockStartPosition\r\n *\r\n * @throws FormSizeError\r\n */\r\nconst validate = function (blockObj, referenceSize, originalBlockStr, blockStartPosition) {\r\n    if (blockObj.content) {\r\n        blockObj.content.forEach(blockObj => {\r\n            validate(blockObj, referenceSize, originalBlockStr, blockStartPosition)\r\n        });\r\n    }\r\n    if (FORM_ELEMENTS.indexOf(factoryElement(blockObj)) !== -1) {\r\n        if (!validateBlock(blockObj, referenceSize)) {\r\n            throw new FormSizeError(originalBlockStr, blockStartPosition);\r\n        }\r\n    }\r\n};\r\n/**\r\n * @param {{block: string, content: Array|undefined, mods: Object|undefined}} blockObj\r\n * @param {string} referenceSize\r\n * @return {boolean}\r\n */\r\nconst validateBlock = function (blockObj, referenceSize) {\r\n    if (factoryElement(blockObj) === ELEMENTS.LABEL) {\r\n        for (let i = 0, l = blockObj.content.length; i < l; i++) {\r\n            if (blockObj.content[i].block === ELEMENTS.TEXT &&\r\n                !validateBlock(blockObj.content[i], referenceSize)) {\r\n                return false;\r\n            }\r\n        }\r\n    } else {\r\n        return blockObj.mods && blockObj.mods.size && blockObj.mods.size === referenceSize;\r\n    }\r\n    return true;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/Validators/form/sizeValidator.js?");

/***/ }),

/***/ "./src/Validators/form/sizeValidator.js-exposed":
/*!******************************************************!*\
  !*** ./src/Validators/form/sizeValidator.js-exposed ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"lint\"] = __webpack_require__(/*! -!./sizeValidator.js */ \"./src/Validators/form/sizeValidator.js\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js-exposed\")))\n\n//# sourceURL=webpack:///./src/Validators/form/sizeValidator.js-exposed?");

/***/ }),

/***/ "./src/Validators/form/spaceHorizontalValidator.js":
/*!*********************************************************!*\
  !*** ./src/Validators/form/spaceHorizontalValidator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const FormHorizontalSpaceError = __webpack_require__(/*! ../../Errors/FormHorizontalSpaceError.js */ \"./src/Errors/FormHorizontalSpaceError.js?e08e\");\r\nconst {findSize, jsonParser} = __webpack_require__(/*! ../tools.js */ \"./src/Validators/tools.js-exposed\");\r\n\r\n/**\r\n * @param {string} blockStr\r\n * @param {string} referenceSize\r\n * @param {string} originalBlockStr\r\n * @param {number} blockStartPosition\r\n *\r\n * @throws FormSizeError\r\n */\r\nmodule.exports = function (blockStr, referenceSize, originalBlockStr, blockStartPosition) {\r\n    validate(jsonParser(blockStr), referenceSize, originalBlockStr, blockStartPosition);\r\n};\r\n/**\r\n * @param {{block: string, elem: string|undefined, content: Array|undefined, mix: Object|undefined}} blockObj\r\n * @param {string} referenceSize\r\n * @param {string} originalBlockStr\r\n * @param {number} blockStartPosition\r\n *\r\n * @throws FormSizeError\r\n */\r\nconst validate = function (blockObj, referenceSize, originalBlockStr, blockStartPosition) {\r\n    if (blockObj.content) {\r\n        blockObj.content.map(blockObj => {\r\n            validate(blockObj, referenceSize, originalBlockStr, blockStartPosition)\r\n        });\r\n    }\r\n    if (blockObj.block === 'form' && blockObj.elem === 'content') {\r\n        if (blockObj.mix) {\r\n            blockObj.mix.forEach((mix) => {\r\n                if (!validateMix(mix, referenceSize)) {\r\n                    throw new FormHorizontalSpaceError(originalBlockStr, blockStartPosition);\r\n                }\r\n            });\r\n        }\r\n    }\r\n};\r\n\r\n/**\r\n * @param {{block: string, elem: string|undefined, content: Array|undefined, mods: Object|undefined}} mix\r\n * @param {string} referenceSize\r\n *\r\n */\r\nconst validateMix = function (mix, referenceSize) {\r\n    if (mix.block === 'form' && mix.elem === 'item' && mix.mods['space-h']) {\r\n        return ((findSize(mix.mods['space-h']) - findSize(referenceSize)) === 1);\r\n    }\r\n    return true;\r\n};\n\n//# sourceURL=webpack:///./src/Validators/form/spaceHorizontalValidator.js?");

/***/ }),

/***/ "./src/Validators/form/spaceHorizontalValidator.js-exposed":
/*!*****************************************************************!*\
  !*** ./src/Validators/form/spaceHorizontalValidator.js-exposed ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"lint\"] = __webpack_require__(/*! -!./spaceHorizontalValidator.js */ \"./src/Validators/form/spaceHorizontalValidator.js\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js-exposed\")))\n\n//# sourceURL=webpack:///./src/Validators/form/spaceHorizontalValidator.js-exposed?");

/***/ }),

/***/ "./src/Validators/form/spaceVerticalValidator.js":
/*!*******************************************************!*\
  !*** ./src/Validators/form/spaceVerticalValidator.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const FormVerticalSpaceError = __webpack_require__(/*! ../../Errors/FormVerticalSpaceError.js */ \"./src/Errors/FormVerticalSpaceError.js-exposed\");\r\nconst {findSize, jsonParser} = __webpack_require__(/*! ../tools.js */ \"./src/Validators/tools.js-exposed\");\r\n\r\n/**\r\n * @param {string} blockStr\r\n * @param {string} referenceSize\r\n * @param {string} originalBlockStr\r\n * @param {number} blockStartPosition\r\n *\r\n * @throws FormSizeError\r\n */\r\nmodule.exports = function (blockStr, referenceSize, originalBlockStr, blockStartPosition) {\r\n    validate(jsonParser(blockStr), referenceSize, originalBlockStr, blockStartPosition);\r\n};\r\n/**\r\n * @param {{block: string, elem: string|undefined, content: Array|undefined, mix: Object|undefined}} blockObj\r\n * @param {string} referenceSize\r\n * @param {string} originalBlockStr\r\n * @param {number} blockStartPosition\r\n *\r\n * @throws FormSizeError\r\n */\r\nconst validate = function (blockObj, referenceSize, originalBlockStr, blockStartPosition) {\r\n    if (blockObj.content) {\r\n        blockObj.content.map(blockObj => {\r\n            validate(blockObj, referenceSize, originalBlockStr, blockStartPosition)\r\n        });\r\n    }\r\n    if (blockObj.block === 'form' && blockObj.elem === 'content') {\r\n        if (blockObj.mix) {\r\n            blockObj.mix.forEach((mix) => {\r\n                if (!validateMix(mix, referenceSize)) {\r\n                    throw new FormVerticalSpaceError(originalBlockStr, blockStartPosition);\r\n                }\r\n            });\r\n        }\r\n    }\r\n};\r\n\r\n/**\r\n * @param {{block: string, elem: string|undefined, content: Array|undefined, mods: Object|undefined}} mix\r\n * @param {string} referenceSize\r\n *\r\n */\r\nconst validateMix = function (mix, referenceSize) {\r\n    if (mix.block === 'form' && mix.elem === 'item' && mix.mods['space-v']) {\r\n        return ((findSize(mix.mods['space-v']) - findSize(referenceSize)) === 2);\r\n    }\r\n    return true;\r\n};\n\n//# sourceURL=webpack:///./src/Validators/form/spaceVerticalValidator.js?");

/***/ }),

/***/ "./src/Validators/form/spaceVerticalValidator.js-exposed":
/*!***************************************************************!*\
  !*** ./src/Validators/form/spaceVerticalValidator.js-exposed ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"lint\"] = __webpack_require__(/*! -!./spaceVerticalValidator.js */ \"./src/Validators/form/spaceVerticalValidator.js\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js-exposed\")))\n\n//# sourceURL=webpack:///./src/Validators/form/spaceVerticalValidator.js-exposed?");

/***/ }),

/***/ "./src/Validators/formValidator.js":
/*!*****************************************!*\
  !*** ./src/Validators/formValidator.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const LinterError = __webpack_require__(/*! ../Errors/LinterError.js */ \"./src/Errors/LinterError.js-exposed\");\r\nconst {findStartBlock, getBlock, jsonParser, factoryElement, ELEMENTS} = __webpack_require__(/*! ./tools.js */ \"./src/Validators/tools.js-exposed\");\r\nconst getReferenceSize = __webpack_require__(/*! ./getReferenceSize.js */ \"./src/Validators/getReferenceSize.js-exposed\");\r\nconst sizeValidator = __webpack_require__(/*! ./form/sizeValidator.js */ \"./src/Validators/form/sizeValidator.js-exposed\");\r\nconst contentValidator = __webpack_require__(/*! ./form/contentValidator.js */ \"./src/Validators/form/contentValidator.js-exposed\");\r\nconst headerValidator = __webpack_require__(/*! ./form/headerValidator.js */ \"./src/Validators/form/headerValidator.js-exposed\");\r\n\r\n/**\r\n * @param {string} originalBlockStr\r\n * @return {Array|{code: string, message: string, locality: {start: {line: number, column: number}, end: {line: number, column: number}}}[]}\r\n */\r\nmodule.exports = function (originalBlockStr) {\r\n    let regExpForm = /\"block\"(\\s){0,}:(\\s){0,}\"form\"/g;\r\n    let errors = [];\r\n    while (true) {\r\n        let regExpFormResult = regExpForm.exec(originalBlockStr);\r\n        if (!regExpFormResult) {\r\n            break;\r\n        }\r\n        let startPositionBlock = findStartBlock(originalBlockStr, regExpFormResult.index);\r\n        errors = errors.concat(validate(originalBlockStr, startPositionBlock));\r\n    }\r\n    return errors;\r\n};\r\n\r\n/**\r\n *\r\n * @param {string} originalBlockStr\r\n * @param {number} startPositionFormBlock\r\n * @return {[{code:string,message:string,locality:{start:{line:number,column:number},end:{line:number,column:number}}}]}\r\n */\r\nconst validate = function (originalBlockStr, startPositionFormBlock) {\r\n    let errors = [];\r\n    let formBlockStr = getBlock(originalBlockStr, startPositionFormBlock);\r\n    let referenceSize = getReferenceSize(formBlockStr);\r\n    if (!referenceSize) {\r\n        return errors;\r\n    }\r\n    try {\r\n        sizeValidator(formBlockStr, referenceSize, originalBlockStr, startPositionFormBlock);\r\n    } catch (e) {\r\n        if (e instanceof LinterError) {\r\n            errors.push(e.getError());\r\n        } else {\r\n            throw e;\r\n        }\r\n    }\r\n    let blockObj = jsonParser(formBlockStr);\r\n    if (blockObj.elem) {\r\n        return errors;\r\n    }\r\n\r\n    let regExpForm = /\"elem\"(\\s){0,}:(\\s){0,}\"(header|content)\"/g;\r\n    while (true) {\r\n        let regExpFormResult = regExpForm.exec(formBlockStr);\r\n        if (!regExpFormResult) {\r\n            break;\r\n        }\r\n        let startPositionBlock = startPositionFormBlock + findStartBlock(formBlockStr, regExpFormResult.index);\r\n        let blockStr = getBlock(originalBlockStr, startPositionBlock);\r\n        let blockObj = jsonParser(blockStr);\r\n        switch (factoryElement(blockObj)) {\r\n            case ELEMENTS.CONTENT:\r\n                errors = errors.concat(contentValidator(blockStr, referenceSize, originalBlockStr, startPositionBlock));\r\n                break;\r\n            case ELEMENTS.HEADER:\r\n                errors = errors.concat(headerValidator(blockStr, referenceSize, originalBlockStr, startPositionBlock));\r\n                break;\r\n        }\r\n    }\r\n    return errors;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/Validators/formValidator.js?");

/***/ }),

/***/ "./src/Validators/formValidator.js-exposed":
/*!*************************************************!*\
  !*** ./src/Validators/formValidator.js-exposed ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"lint\"] = __webpack_require__(/*! -!./formValidator.js */ \"./src/Validators/formValidator.js\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js-exposed\")))\n\n//# sourceURL=webpack:///./src/Validators/formValidator.js-exposed?");

/***/ }),

/***/ "./src/Validators/getReferenceSize.js":
/*!********************************************!*\
  !*** ./src/Validators/getReferenceSize.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {FORM_ELEMENTS, ELEMENTS, factoryElement, jsonParser} = __webpack_require__(/*! ./tools.js */ \"./src/Validators/tools.js-exposed\");\r\n\r\n/**\r\n * @param {string} blockStr\r\n * @return {string|null}\r\n */\r\nmodule.exports = function (blockStr) {\r\n    return find(jsonParser(blockStr));//todo в идеале бы кидать ошибку если размер не найден в форме, а элементы присутствуют\r\n};\r\n/**\r\n * @param {{block: string, content: Array|undefined, mods: Object|undefined}} blockObj\r\n * @return {string|null}\r\n */\r\nconst find = function (blockObj) {\r\n    let size = null;\r\n    if (blockObj.content) {\r\n        for (let i = 0, l = blockObj.content.length; i < l; i++) {\r\n            let size = find(blockObj.content[i]);\r\n            if (size) {\r\n                return size;\r\n            }\r\n        }\r\n    }\r\n    if (FORM_ELEMENTS.indexOf(factoryElement(blockObj)) !== -1) {\r\n        size = getSize(blockObj);\r\n    }\r\n    return size;\r\n};\r\n/**\r\n * @param {{block: string, elem: string|undefined, content: Array, mods:Object}} blockObj\r\n * @return {string|null}\r\n */\r\nconst getSize = function (blockObj) {\r\n    let size = null;\r\n    if (factoryElement(blockObj) === ELEMENTS.LABEL) {\r\n        for (let i = 0, l = blockObj.content.length; i < l; i++) {\r\n            if (blockObj.content[i].block === ELEMENTS.TEXT) {\r\n                size = getSize(blockObj.content[i]);\r\n                if (size) {\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n    } else if (blockObj.mods && blockObj.mods.size) {\r\n        size = blockObj.mods.size\r\n    }\r\n    return size;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/Validators/getReferenceSize.js?");

/***/ }),

/***/ "./src/Validators/getReferenceSize.js-exposed":
/*!****************************************************!*\
  !*** ./src/Validators/getReferenceSize.js-exposed ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"lint\"] = __webpack_require__(/*! -!./getReferenceSize.js */ \"./src/Validators/getReferenceSize.js\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js-exposed\")))\n\n//# sourceURL=webpack:///./src/Validators/getReferenceSize.js-exposed?");

/***/ }),

/***/ "./src/Validators/tools.js":
/*!*********************************!*\
  !*** ./src/Validators/tools.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const OBJ_START = \"{\";\r\nconst OBJ_END = \"}\";\r\nconst SIZES = ['xxxxs', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl'];\r\nconst ELEMENTS = {\r\n    HEADER: 'form__header',\r\n    CONTENT: 'form__content',\r\n    LABEL: 'form__label',\r\n    INPUT: 'input',\r\n    BUTTON: 'button',\r\n    TEXT: 'text',\r\n};\r\nconst FORM_ELEMENTS = [ELEMENTS.LABEL, ELEMENTS.INPUT, ELEMENTS.BUTTON];\r\n\r\n/**\r\n * Считает накой по счету символ с начала строки\r\n * @param {string} obj\r\n * @param {number} position\r\n * @return {number}\r\n */\r\nconst countColumn = function (obj, position) {\r\n    return obj.substring(0, position).split(\"\\n\").pop().length + 1; //поправка что бы учитывался символ на указанной позиции\r\n};\r\n\r\n/**\r\n * Находит начало блока относительно указанного символа\r\n * @param {string} json\r\n * @param {number} position\r\n * @return {number}\r\n */\r\nconst findStartBlock = function (json, position) {\r\n    let substr = json.substring(0, position);\r\n    return substr.lastIndexOf(OBJ_START);\r\n};\r\n\r\n/**\r\n * Считает на какой строке указанный символ\r\n * @param {string} json\r\n * @param {number} position\r\n * @return {number}\r\n */\r\nconst findLineStart = function (json, position) {\r\n    return countLines(json.substring(0, findStartBlock(json, position)));\r\n};\r\n\r\n/**\r\n * Получить весь блок с указанного символа\r\n * @param {string} json\r\n * @param {number} position\r\n * @return {string}\r\n */\r\nconst getBlock = function (json, position) {\r\n    let substr = json.substring(position);\r\n    let cntObjStart = 0;\r\n    for (let symbolIndex = 1, length = substr.length; symbolIndex < length; symbolIndex++) {\r\n        let symbol = substr[symbolIndex];\r\n        if (symbol === OBJ_START) {\r\n            cntObjStart++;\r\n        } else if (symbol === OBJ_END) {\r\n            if (cntObjStart === 0) {\r\n                substr = substr.substring(0, symbolIndex + 1);\r\n                break;\r\n            }\r\n            cntObjStart--;\r\n        }\r\n    }\r\n    return substr;\r\n};\r\n\r\n/**\r\n * Считает сколько строк в строке\r\n * @param {string} json\r\n * @return {number}\r\n */\r\nconst countLines = function (json) {\r\n    return json.split(\"\\n\").length;\r\n};\r\n\r\n/**\r\n * Считает сколько строк в строке\r\n * @param {string} size\r\n * @return {number}\r\n */\r\nconst findSize = function (size) {\r\n    return SIZES.indexOf(size);\r\n};\r\n/**\r\n * @param string\r\n * @return Object\r\n */\r\nconst jsonParser = function (string) {\r\n    return JSON.parse(string, (key, value) => {\r\n        if (key === 'content') {\r\n            if (value instanceof Array) {\r\n            } else {\r\n                value = [value];\r\n            }\r\n        }\r\n        return value;\r\n    })\r\n};\r\n\r\n/**\r\n * @param {{block: string, elem: string|undefined}} blockObj\r\n */\r\nconst factoryElement = function (blockObj) {\r\n    let name = blockObj.block;\r\n    if (blockObj.elem) {\r\n        name += '__' + blockObj.elem;\r\n    }\r\n    return name;\r\n};\r\n\r\nmodule.exports = {\r\n    OBJ_START,\r\n    OBJ_END,\r\n    SIZES,\r\n    FORM_ELEMENTS,\r\n    ELEMENTS: ELEMENTS,\r\n    countColumn,\r\n    findStartBlock,\r\n    findLineStart,\r\n    getBlock,\r\n    countLines,\r\n    findSize,\r\n    jsonParser,\r\n    factoryElement,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/Validators/tools.js?");

/***/ }),

/***/ "./src/Validators/tools.js-exposed":
/*!*****************************************!*\
  !*** ./src/Validators/tools.js-exposed ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"lint\"] = __webpack_require__(/*! -!./tools.js */ \"./src/Validators/tools.js\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js-exposed\")))\n\n//# sourceURL=webpack:///./src/Validators/tools.js-exposed?");

/***/ }),

/***/ "./src/linter.js?68c3":
/*!***********************!*\
  !*** ./src/linter.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"lint\"] = __webpack_require__(/*! -!./linter.js */ \"./src/linter.js?9a37\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js-exposed\")))\n\n//# sourceURL=webpack:///./src/linter.js?");

/***/ }),

/***/ "./src/linter.js?9a37":
/*!***********************!*\
  !*** ./src/linter.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const VALIDATORS = [\r\n    __webpack_require__(/*! ./Validators/formValidator.js */ \"./src/Validators/formValidator.js-exposed\"),\r\n];\r\n/**\r\n * @param {string} obj\r\n * @return {(function(string): (Array|{code: string, message: string, locality: {start: {line: number, column: number}, end: {line: number, column: number}}}[]))|*|Array}\r\n */\r\nmodule.exports = function (obj) {\r\n    return VALIDATORS.reduce((errors, validator) => {\r\n        return errors.concat(validator(obj))\r\n    }, [])\r\n};\r\n\n\n//# sourceURL=webpack:///./src/linter.js?");

/***/ })

/******/ });