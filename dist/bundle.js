/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::-webkit-scrollbar {\n    height: 12px;\n    width: 12px;\n    background: rgba(50,0,80,1);\n}\n\n::-webkit-scrollbar-thumb {\n    background: rgba(100,0,150,1);\n    -webkit-border-radius: 5px;\n    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 18rem 4fr;\n    grid-template-rows: 4rem minmax(calc(100vh - 4rem), auto);\n    grid-auto-flow: row;\n    grid-auto-rows: 1fr;\n}\n\n.header {\n    \n    background-color: rgba(50, 0, 100, 1);\n    font-weight: bold;\n    grid-area: 1 / 1 / 2 / 3;\n    display: grid;\n    \n    \n    align-items: center;\n\n    \n}\n\n.header, .proj-header {\n    text-align: center;\n    font-size: 2rem;\n    color: white;\n}\n\n.header p {\n    padding: 0;\n    margin: 0;\n}\n\n.header-hamburger {\n    height: 2rem;\n    width: auto;\n    display: none;\n}\n\n/***SIDEBAR***/\n\n.sidebar {\n    grid-area: 2 / 1 / -1 / 2;\n    background-color: rgba(60, 0, 110, 1);\n    display: flex;\n    flex-direction: column;\n}\n\n.sidebar > img {\n    height: 2rem;\n    width: auto;\n    align-self: end;\n    margin: 1rem;\n}\n\n.sidebar > img:hover {\n    cursor: pointer;\n}\n\n.sidebar-header {\n    \n    margin: 0 0.5rem;\n    padding: 0 0 0 1rem;\n    \n    border-bottom: 1px solid white;\n    font-weight: bolder;\n    font-size: 2rem;\n    \n}\n\n.sidebar-header:first-child {\n    margin-top: 2rem;\n}\n\n.entryList {\n    padding: 0 3rem;\n    margin: 1rem 0 1.5rem 0;\n    overflow: auto;\n    max-height: 4.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n}\n\n.entry-container {\n    position: relative;\n    align-self: stretch;\n    display:flex;\n    justify-content: space-between;\n   \n}\n\n.entryList img {\n    height: 1.2rem;\n    width: auto;\n    position: relative;\n    top: 0.15rem;\n    flex: 0;\n}\n\n.entryList img:hover {\n    cursor:pointer;\n}\n\n.del-project {\n    color: black;\n    cursor: pointer;\n    font-size: 0.8rem;\n    align-self: center;\n    font-weight: bolder;\n    \n}\n\n.entry {\n    background: none;\n    border: none;\n    font-size: 1.2rem;\n    text-decoration: underline;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    \n    \n}\n\n.entry:hover {\n    cursor:pointer;\n}\n\n.entry:active {\n    text-decoration: none;\n}\n\n.sidebar-header, .entry {\n    color: white;\n}\n\n.main {\n    grid-area: 2 / 2 / -1 / 3;\n    background-color: rgb(44, 40, 44);\n    display: flex;\n    justify-content: center;\n    \n}\n/***PROJECT AND TASK DISPLAY***/\n.task-card-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.task-card-container > img {\n    height: 2.5rem;\n    width: 2.5rem;\n    align-self: end;\n    margin-right: 1.2rem;\n}\n\n.task-card-container > img:hover {\n    cursor: pointer;\n}\n\n.proj-header {\n    align-self: stretch;\n}\n\n\n\n.task-card {\n    height: 5.2rem;\n    margin: 0.5rem 1rem;\n    background-color: rgba(28,28,30,1);\n    color: white;\n    border-radius: 5px;\n    display: grid;\n    grid-template-columns: 2rem 2fr 1fr;\n    align-items: center;\n    gap: 1rem;\n    z-index: 1;\n}\n\n.low-priority {\n    border-left: 3px solid green;\n}\n\n.med-priority {\n    border-left: 3px solid orange;\n}\n\n.high-priority {\n    border-left: 3px solid red;\n}\n\n.task-button {\n    border-radius: 100px;\n    height: 1.5rem;\n    width: 1.5rem;\n    grid-column: 1 / 2;\n    margin: 0 0.75rem;\n    cursor: pointer;\n}\n\n.task-desc {\n    grid-column: 2 / 3;\n    justify-self: start;\n    font-size: 1.2rem;\n}\n\n.task-edit {\n    grid-column: 3 / 4;\n    display: flex;\n    justify-content: end;\n    flex-direction: column;\n    align-items: end;\n    margin: 0.75rem 1rem;\n}\n\n.task-tool {\n    display: flex;\n    justify-content: end;\n    z-index: 100;\n    gap: 0.75rem;\n\n}\n\n.task-tool img {\n    height: 1.2rem;\n    width: auto;\n    cursor: pointer;\n    \n}\n\n.task-tool p {\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n    z-index: 10;\n}\n\n/***NEW PROJECT***/\n.project-card {\n    height: 12rem;\n    width: max(30vw, 20rem);\n    margin: 4rem;\n    background-color: rgba(50,0,90,1);\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.project-card > p, .new-task-card > p {\n    font-size: 2rem;\n    font-weight: bolder;\n    margin: 0;\n    padding: 0;\n}\n\n.new-buttons {\n    display: flex;\n    gap: 0.5rem;\n}\n\n.new-buttons button {\n    flex: 1;\n}\n\n.confirm {\n    background-color: green;\n}\n\n.cancel {\n    background-color: red;\n}\n\n.confirm, .cancel {\n    color: white;\n    font-weight: bolder;\n    border-radius: 5px;\n}\n\n/***NEW TASK***/\n\n.new-task-card, .display-task-card {\n    height: 28rem;\n    width: max(60vw, 20rem);\n    margin: 4rem;\n    background-color: rgba(50,0,90,1);\n    color: white;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n\n.new-task-card {\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.text-area {\n    display: flex;\n    flex-direction: column;\n}\n\n.text-area > textarea {\n    height: 8rem;\n    width: 16rem;\n    resize: none;\n}\n\n#priorities > label {\n    font-weight: bolder;\n}\n\n#priorities > label:first-of-type {\n    color: green;\n}\n\n#priorities > label:nth-of-type(2) {\n    color: yellow;\n}\n\n#priorities > label:nth-of-type(3) {\n    color: red;\n}\n\n/*Display task details*/\n#task-close {\n    font-size: 1rem;\n    color: black;\n    align-self: end;\n    margin: 0.5rem;\n    padding: 0;\n    position: relative;\n    cursor: pointer;\n}\n\n.display-task-card {\n    gap: 2rem;\n    font-size: 1.2rem;\n    padding: 1rem;\n}\n\n.display-task-card > div {\n    display: flex;\n}\n\n.display-task-card span {\n    font-weight: bolder;\n    font-size: 1.4rem;\n}\n\n.display-task-card  p {\n    margin: 0 0.3rem;\n    padding: 0;\n}\n\n@media screen and (max-width: 500px) {\n    .content {\n        grid-template-columns: 1fr;\n        \n    }\n\n    .header {\n        grid-template-columns: 2rem 5fr;\n    }\n    .header-hamburger {\n        display: block;\n    }\n    .sidebar {\n        display: none;\n        \n    }\n\n    #sidebar-menu {\n        display: flex;\n    }\n\n    .main {\n        grid-area: 2 / 1 / -1 / 3;\n        \n    }\n\n    #main-sidebar {\n        grid-area: 3 / 1 / -1 / 3;\n\n    } \n\n    .new-task-card, .display-task-card {\n        margin: 1rem;\n    }\n\n    .text-area > textarea {\n        width: 12rem;\n    }\n\n    .task-card {\n        grid-template-columns: 2rem 1fr 1fr;\n        height: calc(15rem - 20vh);\n    }\n\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["::-webkit-scrollbar {\n    height: 12px;\n    width: 12px;\n    background: rgba(50,0,80,1);\n}\n\n::-webkit-scrollbar-thumb {\n    background: rgba(100,0,150,1);\n    -webkit-border-radius: 5px;\n    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 18rem 4fr;\n    grid-template-rows: 4rem minmax(calc(100vh - 4rem), auto);\n    grid-auto-flow: row;\n    grid-auto-rows: 1fr;\n}\n\n.header {\n    \n    background-color: rgba(50, 0, 100, 1);\n    font-weight: bold;\n    grid-area: 1 / 1 / 2 / 3;\n    display: grid;\n    \n    \n    align-items: center;\n\n    \n}\n\n.header, .proj-header {\n    text-align: center;\n    font-size: 2rem;\n    color: white;\n}\n\n.header p {\n    padding: 0;\n    margin: 0;\n}\n\n.header-hamburger {\n    height: 2rem;\n    width: auto;\n    display: none;\n}\n\n/***SIDEBAR***/\n\n.sidebar {\n    grid-area: 2 / 1 / -1 / 2;\n    background-color: rgba(60, 0, 110, 1);\n    display: flex;\n    flex-direction: column;\n}\n\n.sidebar > img {\n    height: 2rem;\n    width: auto;\n    align-self: end;\n    margin: 1rem;\n}\n\n.sidebar > img:hover {\n    cursor: pointer;\n}\n\n.sidebar-header {\n    \n    margin: 0 0.5rem;\n    padding: 0 0 0 1rem;\n    \n    border-bottom: 1px solid white;\n    font-weight: bolder;\n    font-size: 2rem;\n    \n}\n\n.sidebar-header:first-child {\n    margin-top: 2rem;\n}\n\n.entryList {\n    padding: 0 3rem;\n    margin: 1rem 0 1.5rem 0;\n    overflow: auto;\n    max-height: 4.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n}\n\n.entry-container {\n    position: relative;\n    align-self: stretch;\n    display:flex;\n    justify-content: space-between;\n   \n}\n\n.entryList img {\n    height: 1.2rem;\n    width: auto;\n    position: relative;\n    top: 0.15rem;\n    flex: 0;\n}\n\n.entryList img:hover {\n    cursor:pointer;\n}\n\n.del-project {\n    color: black;\n    cursor: pointer;\n    font-size: 0.8rem;\n    align-self: center;\n    font-weight: bolder;\n    \n}\n\n.entry {\n    background: none;\n    border: none;\n    font-size: 1.2rem;\n    text-decoration: underline;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    \n    \n}\n\n.entry:hover {\n    cursor:pointer;\n}\n\n.entry:active {\n    text-decoration: none;\n}\n\n.sidebar-header, .entry {\n    color: white;\n}\n\n.main {\n    grid-area: 2 / 2 / -1 / 3;\n    background-color: rgb(44, 40, 44);\n    display: flex;\n    justify-content: center;\n    \n}\n/***PROJECT AND TASK DISPLAY***/\n.task-card-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.task-card-container > img {\n    height: 2.5rem;\n    width: 2.5rem;\n    align-self: end;\n    margin-right: 1.2rem;\n}\n\n.task-card-container > img:hover {\n    cursor: pointer;\n}\n\n.proj-header {\n    align-self: stretch;\n}\n\n\n\n.task-card {\n    height: 5.2rem;\n    margin: 0.5rem 1rem;\n    background-color: rgba(28,28,30,1);\n    color: white;\n    border-radius: 5px;\n    display: grid;\n    grid-template-columns: 2rem 2fr 1fr;\n    align-items: center;\n    gap: 1rem;\n    z-index: 1;\n}\n\n.low-priority {\n    border-left: 3px solid green;\n}\n\n.med-priority {\n    border-left: 3px solid orange;\n}\n\n.high-priority {\n    border-left: 3px solid red;\n}\n\n.task-button {\n    border-radius: 100px;\n    height: 1.5rem;\n    width: 1.5rem;\n    grid-column: 1 / 2;\n    margin: 0 0.75rem;\n    cursor: pointer;\n}\n\n.task-desc {\n    grid-column: 2 / 3;\n    justify-self: start;\n    font-size: 1.2rem;\n}\n\n.task-edit {\n    grid-column: 3 / 4;\n    display: flex;\n    justify-content: end;\n    flex-direction: column;\n    align-items: end;\n    margin: 0.75rem 1rem;\n}\n\n.task-tool {\n    display: flex;\n    justify-content: end;\n    z-index: 100;\n    gap: 0.75rem;\n\n}\n\n.task-tool img {\n    height: 1.2rem;\n    width: auto;\n    cursor: pointer;\n    \n}\n\n.task-tool p {\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n    z-index: 10;\n}\n\n/***NEW PROJECT***/\n.project-card {\n    height: 12rem;\n    width: max(30vw, 20rem);\n    margin: 4rem;\n    background-color: rgba(50,0,90,1);\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.project-card > p, .new-task-card > p {\n    font-size: 2rem;\n    font-weight: bolder;\n    margin: 0;\n    padding: 0;\n}\n\n.new-buttons {\n    display: flex;\n    gap: 0.5rem;\n}\n\n.new-buttons button {\n    flex: 1;\n}\n\n.confirm {\n    background-color: green;\n}\n\n.cancel {\n    background-color: red;\n}\n\n.confirm, .cancel {\n    color: white;\n    font-weight: bolder;\n    border-radius: 5px;\n}\n\n/***NEW TASK***/\n\n.new-task-card, .display-task-card {\n    height: 28rem;\n    width: max(60vw, 20rem);\n    margin: 4rem;\n    background-color: rgba(50,0,90,1);\n    color: white;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n\n.new-task-card {\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.text-area {\n    display: flex;\n    flex-direction: column;\n}\n\n.text-area > textarea {\n    height: 8rem;\n    width: 16rem;\n    resize: none;\n}\n\n#priorities > label {\n    font-weight: bolder;\n}\n\n#priorities > label:first-of-type {\n    color: green;\n}\n\n#priorities > label:nth-of-type(2) {\n    color: yellow;\n}\n\n#priorities > label:nth-of-type(3) {\n    color: red;\n}\n\n/*Display task details*/\n#task-close {\n    font-size: 1rem;\n    color: black;\n    align-self: end;\n    margin: 0.5rem;\n    padding: 0;\n    position: relative;\n    cursor: pointer;\n}\n\n.display-task-card {\n    gap: 2rem;\n    font-size: 1.2rem;\n    padding: 1rem;\n}\n\n.display-task-card > div {\n    display: flex;\n}\n\n.display-task-card span {\n    font-weight: bolder;\n    font-size: 1.4rem;\n}\n\n.display-task-card  p {\n    margin: 0 0.3rem;\n    padding: 0;\n}\n\n@media screen and (max-width: 500px) {\n    .content {\n        grid-template-columns: 1fr;\n        \n    }\n\n    .header {\n        grid-template-columns: 2rem 5fr;\n    }\n    .header-hamburger {\n        display: block;\n    }\n    .sidebar {\n        display: none;\n        \n    }\n\n    #sidebar-menu {\n        display: flex;\n    }\n\n    .main {\n        grid-area: 2 / 1 / -1 / 3;\n        \n    }\n\n    #main-sidebar {\n        grid-area: 3 / 1 / -1 / 3;\n\n    } \n\n    .new-task-card, .display-task-card {\n        margin: 1rem;\n    }\n\n    .text-area > textarea {\n        width: 12rem;\n    }\n\n    .task-card {\n        grid-template-columns: 2rem 1fr 1fr;\n        height: calc(15rem - 20vh);\n    }\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isAfter/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isAfter/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAfter)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */

function isAfter(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Inbox.js":
/*!**********************!*\
  !*** ./src/Inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _star_four_points_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./star-four-points-outline.svg */ "./src/star-four-points-outline.svg");
/* harmony import */ var _star_four_points_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./star-four-points.png */ "./src/star-four-points.png");
/* harmony import */ var _ProjectDom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectDom.js */ "./src/ProjectDom.js");
/* harmony import */ var _Local_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Local.js */ "./src/Local.js");





class Inbox {

    projectArray = [];
    static favoritesArray = [];

    constructor() {
        
        
    }

    //Makes a new inbox to populate projects. Only is used to create the Projects and Favorites section of the sidebar at the moment
    // * Param: id = the id of the div that houses the new section
    // * Param: title = the header of the new section
    static makeInbox(id, title) {
        
        
        const inbox = document.createElement("div");
    
        const inboxTitle = document.createElement("p");
        inboxTitle.setAttribute("class", "sidebar-header");
        inboxTitle.textContent = title;
        inbox.appendChild(inboxTitle);
    
        const entryList = document.createElement("div");
        entryList.setAttribute("class", "entryList");
        entryList.setAttribute("id", id);
        inbox.appendChild(entryList);
    
        return {inbox: inbox, entryList: entryList};
    
    }

    //Displays a single project in the sidebar
    // * Param: entryList = the Projects section of the sidebar that will be rendered
    // * Param: project = the project to be rendered
    #displayProject(entryList, project) {
        
        const proj = new _ProjectDom_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

        const entryCon = document.createElement("div");
        entryCon.setAttribute("class", "entry-container");
        entryCon.setAttribute("id", `id${project.id}`);
        const delEntry = document.createElement("span");
        delEntry.setAttribute("class", "del-project");
        delEntry.textContent = "X";
        //Deletes project from sideboard and displays first project in list if applicable. Otherwise it clears the main DOM.
        delEntry.addEventListener("click", () => {
            const main = document.querySelector(".main");
            if (project.favorited) {
                //Removes project from Favorites section of sidebar
                Inbox.favoritesArray.splice(Inbox.favoritesArray.indexOf(project), 1);
            }
            
            this.projectArray.splice(this.projectArray.indexOf(project), 1);
            this.displayProjects(entryList);

            while (main.firstChild !== null) {
                main.removeChild(main.firstChild);
            }
            if (this.projectArray.length > 0) {
                main.appendChild(proj.displayProjectData(this.projectArray[0]));
            }
            
            
        })
        entryCon.appendChild(delEntry);

        const entry = document.createElement("button");
        entry.setAttribute("class", "entry");
        entry.setAttribute("id", project.id);
        entry.textContent = project.name;
        entry.addEventListener("click", () => {
            const main = document.querySelector(".main");
            
            while (main.firstChild) {
                main.removeChild(main.firstChild);
            }
            main.appendChild(proj.displayProjectData(project));
        })
        entryCon.appendChild(entry);

        const star = new Image();
        if (!project.favorited) {  
            star.src = _star_four_points_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
            
        } else {
            star.src = _star_four_points_png__WEBPACK_IMPORTED_MODULE_1__;

        }

        entryCon.appendChild(star);
        entryList.appendChild(entryCon);
        

        //Adds / removes entry from the favorites section
        star.addEventListener("click", () => {
            if (project.favorited) {  
                star.src = _star_four_points_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
                Inbox.favoritesArray.splice(Inbox.favoritesArray.indexOf(project), 1);
                
                
            } else {
                star.src = _star_four_points_png__WEBPACK_IMPORTED_MODULE_1__;
                Inbox.favoritesArray.push(project);
            }

            

            project.favorited = !project.favorited;
            //refreshes current section
            this.displayProjects(entryList);
            

            
        })
        
        
        
    }

    //Renders all projects in the Projects section of the sidebar
    // * Param: entryList = the Projects section of the sidebar that will be rendered
    displayProjects(entryList) {

        while (entryList.firstChild) {
            entryList.removeChild(entryList.firstChild);
        }
        //Populates Projects section of sidebar
        for (let i = 0; i < this.projectArray.length; i++) {
            const project = this.projectArray[i];
            this.#displayProject(entryList, project);

        }

        //Populates Favorites section of sidebar
        this.#displayFavorites(entryList);

        //Sync's localStorage
        if (_Local_js__WEBPACK_IMPORTED_MODULE_3__["default"].storageAvailable('localStorage')) {
            _Local_js__WEBPACK_IMPORTED_MODULE_3__["default"].populateArray(JSON.stringify(this.projectArray));
            _Local_js__WEBPACK_IMPORTED_MODULE_3__["default"].populateFavorites(JSON.stringify(Inbox.favoritesArray));
        }
    }

    //Renders a single favorite entry in the Favorites section of the sidebar
    // * Param: entryList = the entryList from the displayProjects method
    // * Param: project = The project from the Inbox.favoritesArray that will be rendered
    #displayFavorite(entryList, project) {
        const favorites = document.querySelector("#favorites");
        const proj = new _ProjectDom_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

        const entryCon = document.createElement("div");
        entryCon.setAttribute("class", "entry-container");
        entryCon.setAttribute("id", `id${project.id}`);
        const delEntry = document.createElement("span");
        delEntry.setAttribute("class", "del-project");
        delEntry.textContent = "X";
        //Deletes project from sideboard and displays first project in list if applicable. Otherwise it clears the main DOM.
        delEntry.addEventListener("click", () => {
            const main = document.querySelector(".main");
            //favorites.removeChild(favorites.querySelector(`#id${project.id}`));
            //Removes project from Favorites section of sidebar
            Inbox.favoritesArray.splice(Inbox.favoritesArray.indexOf(project), 1);
            
            this.projectArray.splice(this.projectArray.indexOf(project), 1);
            this.displayProjects(entryList);

            while (main.firstChild !== null) {
                main.removeChild(main.firstChild);
            }
            if (this.projectArray.length > 0) {
                main.appendChild(proj.displayProjectData(this.projectArray[0]));
            }
            
            
        })
        entryCon.appendChild(delEntry);

        const entry = document.createElement("button");
        entry.setAttribute("class", "entry");
        entry.setAttribute("id", project.id);
        entry.textContent = project.name;
        entry.addEventListener("click", () => {
            const main = document.querySelector(".main");
            
            while (main.firstChild) {
                main.removeChild(main.firstChild);
            }
            main.appendChild(proj.displayProjectData(project));
        })
        entryCon.appendChild(entry);

        const star = new Image();
        star.src = _star_four_points_png__WEBPACK_IMPORTED_MODULE_1__;
        

        entryCon.appendChild(star);
        favorites.appendChild(entryCon);
        

        //Removes entry from the Favorites and Projects sections
        star.addEventListener("click", () => {
            
            star.src = _star_four_points_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
            Inbox.favoritesArray.splice(Inbox.favoritesArray.indexOf(project), 1);
            
            project.favorited = !project.favorited;
            //refreshes sidebar
            this.displayProjects(entryList);
            

            
        })

    }

    //Renders Favorite entries in Favorites section of the sidebar.
    // * Param: entryList = entryList used in the displayProjects method to render Projects section of the sidebar
    #displayFavorites(entryList) {

        const favorites = document.querySelector("#favorites");
        while (favorites.firstChild) {
            favorites.removeChild(favorites.firstChild);
        }

        //Populates Favorites sidebar
        for (let i = 0; i < Inbox.favoritesArray.length; i++) {
            const favorite = Inbox.favoritesArray[i];
            this.#displayFavorite(entryList, favorite);

        }

    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inbox);

/***/ }),

/***/ "./src/Local.js":
/*!**********************!*\
  !*** ./src/Local.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Local {
    //detects whether or not storage is available
    static storageAvailable(type) {
        let storage;
        try {
            storage = window[type];
            const x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch (e) {
            return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                (storage && storage.length !== 0);
        }
    }

    static populateArray(array) {
        localStorage.setItem('projectArray', array);
        
    }

    static populateFavorites(array) {
        localStorage.setItem('favoritesArray', array);
    }

    static updateArrays(project) {
        const projectArray = JSON.parse(localStorage.getItem("projectArray"));
                    for (let i = 0; i < projectArray.length; i++) {
                        if (projectArray[i].id === project.id) {
                            projectArray[i] = project;
                            Local.populateArray(JSON.stringify(projectArray));
                            break;
                        }
                    }

                    if (project.favorited) {
                        const favoritesArray = JSON.parse(localStorage.getItem("favoritesArray"));
                        for (let i = 0; i < favoritesArray.length; i++) {
                            if (favoritesArray[i].id === project.id) {
                                favoritesArray[i] = project;
                                Local.populateFavorites(JSON.stringify(favoritesArray));
                                break;
                            }

                    }
                }
    }
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Local);

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
    static id = 1;
    constructor(name, taskArray=[], favorited=false) {
        this.name = name;
        this.taskArray = taskArray;
        this.favorited = favorited;
        this.id = Project.id;
        Project.id += 1;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/ProjectDom.js":
/*!***************************!*\
  !*** ./src/ProjectDom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _text_box_edit_outline_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-box-edit-outline.png */ "./src/text-box-edit-outline.png");
/* harmony import */ var _plus_circle_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plus-circle.png */ "./src/plus-circle.png");
/* harmony import */ var _TaskDom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskDom.js */ "./src/TaskDom.js");
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");
/* harmony import */ var date_fns_isAfter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/isAfter */ "./node_modules/date-fns/esm/isAfter/index.js");
/* harmony import */ var _Local_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Local.js */ "./src/Local.js");







//Makes changes to the DOM in order to display tasks of a project

class ProjectDom {
    

    //Displays task for a given project
    displayTaskCard(project, task) {
        const taskDom = new _TaskDom_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
        const main = document.querySelector(".main");

        const taskCard = document.createElement("div");
        taskCard.setAttribute("class", "task-card");
        taskCard.setAttribute("id", task.id);
        console.log("task: " + task.pressed);

        const taskButton = document.createElement("button");
        taskButton.setAttribute("class", "task-button");
        taskButton.addEventListener("click", () => {
            
            if (!task.completed) {
                taskDesc.style.textDecoration = "line-through";
                taskButton.style.backgroundColor = "rgba(90, 0, 140, 1)";
            } else {
                taskDesc.style.textDecoration = "none";
                taskButton.style.backgroundColor = "white";
            }
            task.completed = !task.completed;
            if (_Local_js__WEBPACK_IMPORTED_MODULE_4__["default"].storageAvailable("localStorage")) {
                _Local_js__WEBPACK_IMPORTED_MODULE_4__["default"].updateArrays(project);
            }
        })

        taskCard.appendChild(taskButton);

        const taskDesc = document.createElement("div");
        taskDesc.setAttribute("class", "task-desc");
        taskDesc.style.cursor = "pointer";
        taskDesc.textContent = task.name;
        taskDesc.addEventListener("click", () => {
            while (main.firstChild) {
                main.removeChild(main.firstChild);
            }
            main.appendChild(taskDom.displayTask(project, task));
        });
        taskCard.appendChild(taskDesc);

        if (task.completed) {
            taskDesc.style.textDecoration = "line-through";
            taskButton.style.backgroundColor = "rgba(90, 0, 140, 1)";
        } else {
            taskDesc.style.textDecoration = "none";
            taskButton.style.backgroundColor = "white";
        }

        const taskEdit = document.createElement("div");
        taskEdit.setAttribute("class", "task-edit");

        const taskTools = document.createElement("div");
        taskTools.setAttribute("class", "task-tool");

        
        const taskDate = task.dueDate.split("-");
        const dueDate = document.createElement("p");
        dueDate.style.cursor = "default";
        dueDate.textContent = `Due Date: ${task.dueDate}`;
        //sets due date field to red if it's past due.
        if ((0,date_fns_isAfter__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), new Date(taskDate[0], taskDate[1]-1, taskDate[2]))) {
            dueDate.style.color = "red";
        }
        taskTools.appendChild(dueDate);

        const edit = new Image();
        edit.src = _text_box_edit_outline_png__WEBPACK_IMPORTED_MODULE_0__;
        edit.addEventListener("click", () => {
            
                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                }
                main.appendChild(taskDom.editTask(project, task));
            
        })
        taskTools.appendChild(edit);

        const del = document.createElement("p");
        del.textContent = "X";
        del.addEventListener("click", () => {
            del.closest(".task-card-container").removeChild(taskCard);
            project.taskArray.splice(project.taskArray.indexOf(task), 1);
            if (_Local_js__WEBPACK_IMPORTED_MODULE_4__["default"].storageAvailable("localStorage")) {
                _Local_js__WEBPACK_IMPORTED_MODULE_4__["default"].updateArrays(project);
            }
        })
        taskTools.appendChild(del);
        taskEdit.appendChild(taskTools);


        const pri = document.createElement("p");
        pri.textContent = task.priority;
        switch (pri.textContent) {
            case "Medium Priority":
                taskCard.className += " med-priority";
                break;
            case "High Priority":
                taskCard.className += " high-priority";
                break;
            default:
                taskCard.className += " low-priority";

        }
        taskEdit.appendChild(pri);
        taskCard.appendChild(taskEdit);

        return taskCard;
    }

    displayProjectData(project) {
        //Project and tasks dashboard
        const taskContainer = document.createElement("div");
        taskContainer.setAttribute("class", "task-card-container");
        const projHeader = document.createElement("p");
        projHeader.setAttribute("class","proj-header");
        projHeader.textContent = project.name;
        taskContainer.appendChild(projHeader);

        const cPlus = new Image();
        cPlus.src = _plus_circle_png__WEBPACK_IMPORTED_MODULE_1__;
        cPlus.addEventListener("click", () => {
            const task = new _TaskDom_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
            try {
                const main = document.querySelector(".main");
                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                }
                main.appendChild(task.createTask(project));
            } catch (e) {
                console.log(e);
            }
            
        })
        taskContainer.appendChild(cPlus);

        for (let i = 0; i < project.taskArray.length; i++) {
            taskContainer.appendChild(this.displayTaskCard(project, project.taskArray[i]));
        }
        //taskContainer.appendChild(this.displayTaskCard(new Task("TaskName", "This is a test description", "12/11/2022", "Low Priority")));


       return taskContainer;
    }
    
    createProject(inbox, entryList) {
         //New Project Dashboard
        const newProj = document.createElement("div");
        newProj.setAttribute("class", "project-card");

        const projTitle = document.createElement("p");
        projTitle.textContent = "New Project";
        newProj.appendChild(projTitle);

        const projField = document.createElement("div");
        const projLabel = document.createElement("label");
        projLabel.textContent = "Project Name: ";
        projLabel.setAttribute("for", "new-proj");
        projField.appendChild(projLabel);

        const projInput = document.createElement("input");
        projInput.setAttribute("id", "new-proj");
        projInput.setAttribute("placeholder", "Max 20 chars");
        projInput.setAttribute("maxlength", "20");
        projInput.required = true;
        projField.appendChild(projInput);
        newProj.appendChild(projField);


        //Project Buttons
        const projButtons = document.createElement("div");
        projButtons.setAttribute("class", "new-buttons");
        const newProjButton = document.createElement("button");
        newProjButton.setAttribute("class", "confirm");
        newProjButton.textContent = "Create Project";
        //Creates new project and adds it to corresponding entryList in the sidebar
        const main = document.querySelector(".main");
        newProjButton.addEventListener("click", () => {
            if (!projInput.validity.valid) {
                projInput.reportValidity();
            } else {
                const project = new _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"](projInput.value);
                inbox.projectArray.push(project);
                inbox.displayProjects(entryList);
                
                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                }
                main.appendChild(this.displayProjectData(project));
            }
            
        });
        projButtons.appendChild(newProjButton);

        const cancelProj = document.createElement("button");
        cancelProj.setAttribute("class", "cancel");
        cancelProj.textContent = "Cancel";
        //Cancels project creation and goes back to default project, if applicable
        cancelProj.addEventListener("click", () => {
            while (main.firstChild) {
                main.removeChild(main.firstChild);
            }
                console.log(inbox.projectArray.length);
            if (inbox.projectArray.length > 0) {
                main.appendChild(this.displayProjectData(inbox.projectArray[0]));
            }
        })
        projButtons.appendChild(cancelProj);

        newProj.appendChild(projButtons);
        
        return newProj;

    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectDom);

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {
    static id = 1;
    constructor(name, description="", dueDate, priority, completed=false) {
        this.id = Task.id;
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
        Task.id += 1;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/TaskDom.js":
/*!************************!*\
  !*** ./src/TaskDom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ "./src/Task.js");
/* harmony import */ var _ProjectDom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectDom.js */ "./src/ProjectDom.js");
/* harmony import */ var _Local_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Local.js */ "./src/Local.js");
//Makes changes to the DOM in order to display the create/edit task screen





class TaskDom {
    createTask(project) {

    const proj = new _ProjectDom_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const main = document.querySelector(".main");
    //New Task Dashboard
    const newTask = document.createElement("div");
    newTask.setAttribute("class", "new-task-card");

    const taskTitle = document.createElement("p");
    taskTitle.textContent = "New Task";
    newTask.appendChild(taskTitle);

    //Task Name
    const taskNameField = document.createElement("div");
    const taskNameLabel = document.createElement("label");
    taskNameLabel.textContent = "Task Name: ";
    taskNameLabel.setAttribute("for", "task-name");
    taskNameField.appendChild(taskNameLabel);

    const taskNameInput = document.createElement("input");
    taskNameInput.setAttribute("id", "task-name");
    taskNameInput.setAttribute("placeholder", "Max 30 chars");
    taskNameInput.setAttribute("maxlength", "30");
    taskNameInput.required = true;
    taskNameField.appendChild(taskNameInput);
    newTask.appendChild(taskNameField);

    //Task Due Date
    const taskDueDateField = document.createElement("div");
    const taskDueDateLabel = document.createElement("label");
    taskDueDateLabel.textContent = "Due Date: ";
    taskDueDateLabel.setAttribute("for", "task-due-date");
    taskDueDateField.appendChild(taskDueDateLabel);

    const taskDueDateInput = document.createElement("input");
    taskDueDateInput.setAttribute("id", "task-due-date");
    taskDueDateInput.setAttribute("type", "date");
    taskDueDateInput.required = true;
    taskDueDateField.appendChild(taskDueDateInput);
    newTask.appendChild(taskDueDateField);

    //Task Description
    const taskDescField = document.createElement("div");
    taskDescField.setAttribute("class", "text-area");
    const taskDescLabel = document.createElement("label");
    taskDescLabel.textContent = "Task Description: ";
    taskDescLabel.setAttribute("for", "task-desc");
    taskDescField.appendChild(taskDescLabel);

    const taskDescInput = document.createElement("textArea");
    taskDescInput.setAttribute("id", "task-desc");
    taskDescInput.setAttribute("maxlength", "150");
    taskDescInput.setAttribute("placeholder", "Max 150 chars (optional)");
    taskDescField.appendChild(taskDescInput);
    newTask.appendChild(taskDescField);

    //Priorities
    const priorities = document.createElement("div");
    priorities.setAttribute("id", "priorities");
    
    //Low
    const low = document.createElement("input");
    low.setAttribute("type", "radio");
    low.setAttribute("checked", "true");
    low.value = "Low Priority";
    low.setAttribute("name", "p");
    priorities.appendChild(low);

    const lowLabel = document.createElement("label");
    lowLabel.setAttribute("for", "low");
    lowLabel.textContent = "Low";
    priorities.appendChild(lowLabel);

    //Medium
    const med = document.createElement("input");
    med.setAttribute("type", "radio");
    med.value = "Medium Priority";
    med.setAttribute("name", "p");
    priorities.appendChild(med);

    const medLabel = document.createElement("label");
    medLabel.setAttribute("for", "medium");
    medLabel.textContent = "Medium";
    priorities.appendChild(medLabel);

    //High
    const high = document.createElement("input");
    high.setAttribute("type", "radio");
    high.value = "High Priority";
    high.setAttribute("name", "p");
    priorities.appendChild(high);

    const highLabel = document.createElement("label");
    highLabel.setAttribute("for", "high");
    highLabel.textContent = "High";
    priorities.appendChild(highLabel);

    newTask.appendChild(priorities);

    //Task Buttons
    const taskButtons = document.createElement("div");
    taskButtons.setAttribute("class", "new-buttons");
    const newTaskButton = document.createElement("button");
    newTaskButton.setAttribute("class", "confirm");
    newTaskButton.textContent = "Create Task";
    //Creates new task and displays it in the project dom
    newTaskButton.addEventListener("click", () => {
        if (!taskNameInput.validity.valid) {
            taskNameInput.reportValidity();
        } else if (!taskDueDateInput.validity.valid) {
            taskDueDateInput.reportValidity();
        } else {
            project.taskArray.push(new _Task_js__WEBPACK_IMPORTED_MODULE_0__["default"](taskNameInput.value, taskDescInput.value, taskDueDateInput.value,
                document.querySelector("input[name='p']:checked").value));
                //Refreshes localStorage data
                if (_Local_js__WEBPACK_IMPORTED_MODULE_2__["default"].storageAvailable("localStorage")) {
                    _Local_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateArrays(project);
            }
                while (main.firstChild) {
                   main.removeChild(main.firstChild);
               }
               main.appendChild(proj.displayProjectData(project));
        }
        
    });
    taskButtons.appendChild(newTaskButton);

    const cancelTask = document.createElement("button");
    cancelTask.setAttribute("class", "cancel");
    cancelTask.textContent = "Cancel";
    cancelTask.addEventListener("click", () => {
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
        main.appendChild(proj.displayProjectData(project));
    })
    taskButtons.appendChild(cancelTask);

    newTask.appendChild(taskButtons);

    return newTask;
    }

    //Allows task to be edited
    editTask(project, task) {

        const proj = new _ProjectDom_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
        const main = document.querySelector(".main");
        //Edit Task Dashboard
        const newTask = document.createElement("div");
        newTask.setAttribute("class", "new-task-card");

        const taskTitle = document.createElement("p");
        taskTitle.textContent = "Edit Task";
        newTask.appendChild(taskTitle);

        //Task Name
        const taskNameField = document.createElement("div");
        const taskNameLabel = document.createElement("label");
        taskNameLabel.textContent = "Task Name: ";
        taskNameLabel.setAttribute("for", "task-name");
        taskNameField.appendChild(taskNameLabel);

        const taskNameInput = document.createElement("input");
        taskNameInput.setAttribute("id", "task-name");
        taskNameInput.setAttribute("placeholder", "Max 30 chars");
        taskNameInput.setAttribute("maxlength", "30");
        taskNameInput.required = true;
        console.log(`date: ${task.dueDate}`);
        taskNameInput.value = task.name;
        taskNameField.appendChild(taskNameInput);
        newTask.appendChild(taskNameField);

        //Task Due Date
        const taskDueDateField = document.createElement("div");
        const taskDueDateLabel = document.createElement("label");
        taskDueDateLabel.textContent = "Due Date: ";
        taskDueDateLabel.setAttribute("for", "task-due-date");
        taskDueDateField.appendChild(taskDueDateLabel);

        const taskDueDateInput = document.createElement("input");
        taskDueDateInput.setAttribute("id", "task-due-date");
        taskDueDateInput.setAttribute("type", "date");
        taskDueDateInput.value = task.dueDate;
        taskDueDateInput.required = true;
        taskDueDateField.appendChild(taskDueDateInput);
        newTask.appendChild(taskDueDateField);

        //Task Description
        const taskDescField = document.createElement("div");
        taskDescField.setAttribute("class", "text-area");
        const taskDescLabel = document.createElement("label");
        taskDescLabel.textContent = "Task Description: ";
        taskDescLabel.setAttribute("for", "task-desc");
        taskDescField.appendChild(taskDescLabel);

        const taskDescInput = document.createElement("textArea");
        taskDescInput.setAttribute("id", "task-desc");
        taskDescInput.setAttribute("maxlength", "150");
        taskDescInput.setAttribute("placeholder", "Max 150 chars (optional)");
        taskDescInput.value = task.description;
        taskDescField.appendChild(taskDescInput);
        newTask.appendChild(taskDescField);

        //Priorities
        const priorities = document.createElement("div");
        priorities.setAttribute("id", "priorities");
        
        //Low
        const low = document.createElement("input");
        low.setAttribute("type", "radio");
        low.value = "Low Priority";
        low.setAttribute("name", "p");
        priorities.appendChild(low);

        const lowLabel = document.createElement("label");
        lowLabel.setAttribute("for", "low");
        lowLabel.textContent = "Low";
        priorities.appendChild(lowLabel);

        //Medium
        const med = document.createElement("input");
        med.setAttribute("type", "radio");
        med.value = "Medium Priority";
        med.setAttribute("name", "p");
        priorities.appendChild(med);

        const medLabel = document.createElement("label");
        medLabel.setAttribute("for", "medium");
        medLabel.textContent = "Medium";
        priorities.appendChild(medLabel);

        //High
        const high = document.createElement("input");
        high.setAttribute("type", "radio");
        high.value = "High Priority";
        high.setAttribute("name", "p");
        priorities.appendChild(high);

        const highLabel = document.createElement("label");
        highLabel.setAttribute("for", "high");
        highLabel.textContent = "High";
        priorities.appendChild(highLabel);

        switch (task.priority) {
            case "Medium Priority":
                med.setAttribute("checked", "true");
                break;
            case "High Priority":
                high.setAttribute("checked", "true");
                break;
            default:
                low.setAttribute("checked", "true");
        }

        newTask.appendChild(priorities);

        //Task Buttons
        const taskButtons = document.createElement("div");
        taskButtons.setAttribute("class", "new-buttons");
        const confirmEditButton = document.createElement("button");
        confirmEditButton.setAttribute("class", "confirm");
        confirmEditButton.textContent = "Save Changes";
        //Creates new task and displays it in the project dom
        confirmEditButton.addEventListener("click", () => {
            if (!taskNameInput.validity.valid) {
                taskNameInput.reportValidity();
            } else if (!taskDueDateInput.validity.valid) {
                taskDueDateInput.reportValidity();
            } else {
                task.name = taskNameInput.value;
                task.description = taskDescInput.value;
                task.dueDate = taskDueDateInput.value;
                task.priority = document.querySelector("input[name='p']:checked").value;
                //refreshes localStorage data
                if (_Local_js__WEBPACK_IMPORTED_MODULE_2__["default"].storageAvailable("localStorage")) {
                    _Local_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateArrays(project);
            }
                    while (main.firstChild) {
                       main.removeChild(main.firstChild);
                   }
                   main.appendChild(proj.displayProjectData(project));
            }

        });
        taskButtons.appendChild(confirmEditButton);

        const cancelTask = document.createElement("button");
        cancelTask.setAttribute("class", "cancel");
        cancelTask.textContent = "Cancel";
        cancelTask.addEventListener("click", () => {
            while (main.firstChild) {
                main.removeChild(main.firstChild);
            }
            main.appendChild(proj.displayProjectData(project));
        })
        taskButtons.appendChild(cancelTask);

        newTask.appendChild(taskButtons);

        return newTask;

    }

    //Displays details of a class
    displayTask(project, task) {
        const proj = new _ProjectDom_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
        const main = document.querySelector(".main");
        //Display Task Dashboard
        const displayTask = document.createElement("div");
        displayTask.setAttribute("class", "display-task-card");

        const closeTask = document.createElement("p");
        closeTask.textContent = "X";
        closeTask.setAttribute("id", "task-close");
        closeTask.addEventListener("click", () => {
            while (main.firstChild) {
                main.removeChild(main.firstChild);
            }
            main.appendChild(proj.displayProjectData(project));
        })
        displayTask.appendChild(closeTask);

        const nameDiv = document.createElement("div");
        const nameLabel = document.createElement("span");
        nameLabel.textContent = "Name: ";
        const name = document.createElement("p");
        name.textContent = task.name;
        nameDiv.appendChild(nameLabel);
        nameDiv.appendChild(name);
        displayTask.appendChild(nameDiv);

        const dateDiv = document.createElement("div");
        const dateLabel = document.createElement("span");
        dateLabel.textContent = "Due date: ";
        const date = document.createElement("p");
        date.textContent = task.dueDate;
        dateDiv.appendChild(dateLabel);
        dateDiv.appendChild(date);
        displayTask.appendChild(dateDiv);

        const descriptionDiv = document.createElement("div");
        const descriptionLabel = document.createElement("span");
        descriptionLabel.textContent = "Description: "
        const description = document.createElement("p");
        description.textContent = task.description;
        descriptionDiv.appendChild(descriptionLabel);
        descriptionDiv.appendChild(description);
        displayTask.appendChild(descriptionDiv);
        
        const priorityDiv = document.createElement("div");
        const priorityLabel = document.createElement("span");
        priorityLabel.textContent = "Priority: ";
        const priority = document.createElement("p");
        const taskP = task.priority.split(" ")[0];
        priority.textContent = taskP;
        priorityDiv.appendChild(priorityLabel);
        priorityDiv.appendChild(priority)
        displayTask.appendChild(priorityDiv);

        return displayTask;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskDom);

/***/ }),

/***/ "./src/menu.svg":
/*!**********************!*\
  !*** ./src/menu.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d4061552fac064ed076.svg";

/***/ }),

/***/ "./src/plus-circle.png":
/*!*****************************!*\
  !*** ./src/plus-circle.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6113dc04a8d9cc71eb80.png";

/***/ }),

/***/ "./src/plus.png":
/*!**********************!*\
  !*** ./src/plus.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c33fa3d2143cd059ec21.png";

/***/ }),

/***/ "./src/star-four-points-outline.svg":
/*!******************************************!*\
  !*** ./src/star-four-points-outline.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1850a0dc264b0b5dae23.svg";

/***/ }),

/***/ "./src/star-four-points.png":
/*!**********************************!*\
  !*** ./src/star-four-points.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66cea361f967487044ef.png";

/***/ }),

/***/ "./src/text-box-edit-outline.png":
/*!***************************************!*\
  !*** ./src/text-box-edit-outline.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa7b98dfc8a0dc5b5f34.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _Inbox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Inbox.js */ "./src/Inbox.js");
/* harmony import */ var _menu_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.svg */ "./src/menu.svg");
/* harmony import */ var _plus_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plus.png */ "./src/plus.png");
/* harmony import */ var _ProjectDom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectDom.js */ "./src/ProjectDom.js");
/* harmony import */ var _Local_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Local.js */ "./src/Local.js");







//Renders the initial layout of the webpage
function webpage() {
    const content = document.createElement("div");
    content.setAttribute("class", "content");

    const header = document.createElement("header");
    header.setAttribute("class", "header");
    const menu = new Image();
    menu.src = _menu_svg__WEBPACK_IMPORTED_MODULE_2__;
    menu.setAttribute("class", "header-hamburger");
    let clicked = false;
    menu.addEventListener("click", () => {
        if (!clicked) {
            sidebar.id += "sidebar-menu";
            main.id += "main-sidebar";
        } else {
            sidebar.id = "";
            main.id = "";
        }
        clicked = !clicked;
    })
    header.appendChild(menu);
    const headerP = document.createElement("p");
    headerP.textContent = "To-Do List";
    header.appendChild(headerP);

    const sidebar = document.createElement("div");
    sidebar.setAttribute("class", "sidebar");

    

    
    
    //const testProject = new Project("Test", []);
    //Pushes test project to inbox to display below
    //projects.projectArray.push(testProject);
    const project = _Inbox_js__WEBPACK_IMPORTED_MODULE_1__["default"].makeInbox("inbox", "All Projects");
    const favorites = _Inbox_js__WEBPACK_IMPORTED_MODULE_1__["default"].makeInbox("favorites", "Favorites");


    const main = document.createElement('div');
    main.setAttribute("class", "main");


    
    //projects.displayProjects(project.entryList);
    sidebar.appendChild(project.inbox);
    sidebar.appendChild(favorites.inbox);
    

    content.appendChild(header);
    content.appendChild(sidebar);
    content.appendChild(main);

    
    return content;
}

//Renders the data in the sidebar once the outline of the page has been rendered
function populateSidebar() {
    const projects = new _Inbox_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const sidebar = document.querySelector(".sidebar");
    const inbox = document.querySelector("#inbox");
    const main = document.querySelector(".main");
    const proj = new _ProjectDom_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    

    if (_Local_js__WEBPACK_IMPORTED_MODULE_5__["default"].storageAvailable("localStorage")) {
        if (!localStorage.getItem("projectArray")) {
            _Local_js__WEBPACK_IMPORTED_MODULE_5__["default"].populateArray(JSON.stringify(projects.projectArray));
            _Local_js__WEBPACK_IMPORTED_MODULE_5__["default"].populateFavorites(JSON.stringify(_Inbox_js__WEBPACK_IMPORTED_MODULE_1__["default"].favoritesArray));
            
            
        } else {
            projects.projectArray = JSON.parse(localStorage.getItem("projectArray"));
            _Inbox_js__WEBPACK_IMPORTED_MODULE_1__["default"].favoritesArray = JSON.parse(localStorage.getItem("favoritesArray"));
        }
        
    }

    const plus = new Image();
    plus.src = _plus_png__WEBPACK_IMPORTED_MODULE_3__;
    plus.addEventListener("click", () => {
        
        
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
        main.appendChild(proj.createProject(projects, inbox));
    })

    sidebar.insertBefore(plus, sidebar.firstChild);

    projects.displayProjects(inbox);

    if (projects.projectArray.length > 0) {
        main.appendChild(proj.displayProjectData(projects.projectArray[0]));
    }

}

document.body.appendChild(webpage());
populateSidebar();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGVBQWUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLGFBQWEsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFL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c3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNBZnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL0luYm94LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9Mb2NhbC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvUHJvamVjdERvbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvVGFzay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvVGFza0RvbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTAsMCw4MCwxKTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAwLDAsMTUwLDEpO1xcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMThyZW0gNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gbWlubWF4KGNhbGMoMTAwdmggLSA0cmVtKSwgYXV0byk7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwgMCwgMTAwLCAxKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgXFxuICAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBcXG59XFxuXFxuLmhlYWRlciwgLnByb2otaGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhlYWRlciBwIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVhZGVyLWhhbWJ1cmdlciB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKipTSURFQkFSKioqL1xcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIC0xIC8gMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MCwgMCwgMTEwLCAxKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNpZGViYXIgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLnNpZGViYXIgPiBpbWc6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlYmFyLWhlYWRlciB7XFxuICAgIFxcbiAgICBtYXJnaW46IDAgMC41cmVtO1xcbiAgICBwYWRkaW5nOiAwIDAgMCAxcmVtO1xcbiAgICBcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIFxcbn1cXG5cXG4uc2lkZWJhci1oZWFkZXI6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uZW50cnlMaXN0IHtcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcbiAgICBtYXJnaW46IDFyZW0gMCAxLjVyZW0gMDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDQuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4uZW50cnktY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICBcXG59XFxuXFxuLmVudHJ5TGlzdCBpbWcge1xcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwLjE1cmVtO1xcbiAgICBmbGV4OiAwO1xcbn1cXG5cXG4uZW50cnlMaXN0IGltZzpob3ZlciB7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4uZGVsLXByb2plY3Qge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgXFxufVxcblxcbi5lbnRyeSB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4uZW50cnk6aG92ZXIge1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuLmVudHJ5OmFjdGl2ZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnNpZGViYXItaGVhZGVyLCAuZW50cnkge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0xIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ0LCA0MCwgNDQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxufVxcbi8qKipQUk9KRUNUIEFORCBUQVNLIERJU1BMQVkqKiovXFxuLnRhc2stY2FyZC1jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stY2FyZC1jb250YWluZXIgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcXG59XFxuXFxuLnRhc2stY2FyZC1jb250YWluZXIgPiBpbWc6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qLWhlYWRlciB7XFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxufVxcblxcblxcblxcbi50YXNrLWNhcmQge1xcbiAgICBoZWlnaHQ6IDUuMnJlbTtcXG4gICAgbWFyZ2luOiAwLjVyZW0gMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOCwyOCwzMCwxKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMnJlbSAyZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5sb3ctcHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4ubWVkLXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBvcmFuZ2U7XFxufVxcblxcbi5oaWdoLXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZWQ7XFxufVxcblxcbi50YXNrLWJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBtYXJnaW46IDAgMC43NXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1kZXNjIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnRhc2stZWRpdCB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIG1hcmdpbjogMC43NXJlbSAxcmVtO1xcbn1cXG5cXG4udGFzay10b29sIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgZ2FwOiAwLjc1cmVtO1xcblxcbn1cXG5cXG4udGFzay10b29sIGltZyB7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBcXG59XFxuXFxuLnRhc2stdG9vbCBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4vKioqTkVXIFBST0pFQ1QqKiovXFxuLnByb2plY3QtY2FyZCB7XFxuICAgIGhlaWdodDogMTJyZW07XFxuICAgIHdpZHRoOiBtYXgoMzB2dywgMjByZW0pO1xcbiAgICBtYXJnaW46IDRyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsMCw5MCwxKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnByb2plY3QtY2FyZCA+IHAsIC5uZXctdGFzay1jYXJkID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubmV3LWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLm5ldy1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5jb25maXJtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5jb25maXJtLCAuY2FuY2VsIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qKipORVcgVEFTSyoqKi9cXG5cXG4ubmV3LXRhc2stY2FyZCwgLmRpc3BsYXktdGFzay1jYXJkIHtcXG4gICAgaGVpZ2h0OiAyOHJlbTtcXG4gICAgd2lkdGg6IG1heCg2MHZ3LCAyMHJlbSk7XFxuICAgIG1hcmdpbjogNHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwwLDkwLDEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5ldy10YXNrLWNhcmQge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnRleHQtYXJlYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50ZXh0LWFyZWEgPiB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gICAgd2lkdGg6IDE2cmVtO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbiNwcmlvcml0aWVzID4gbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4jcHJpb3JpdGllcyA+IGxhYmVsOmZpcnN0LW9mLXR5cGUge1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbiNwcmlvcml0aWVzID4gbGFiZWw6bnRoLW9mLXR5cGUoMikge1xcbiAgICBjb2xvcjogeWVsbG93O1xcbn1cXG5cXG4jcHJpb3JpdGllcyA+IGxhYmVsOm50aC1vZi10eXBlKDMpIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLypEaXNwbGF5IHRhc2sgZGV0YWlscyovXFxuI3Rhc2stY2xvc2Uge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBtYXJnaW46IDAuNXJlbTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kaXNwbGF5LXRhc2stY2FyZCB7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5kaXNwbGF5LXRhc2stY2FyZCA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kaXNwbGF5LXRhc2stY2FyZCBzcGFuIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5kaXNwbGF5LXRhc2stY2FyZCAgcCB7XFxuICAgIG1hcmdpbjogMCAwLjNyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJyZW0gNWZyO1xcbiAgICB9XFxuICAgIC5oZWFkZXItaGFtYnVyZ2VyIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICAgIC5zaWRlYmFyIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAjc2lkZWJhci1tZW51IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgLm1haW4ge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIC0xIC8gMztcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgICNtYWluLXNpZGViYXIge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAzIC8gMSAvIC0xIC8gMztcXG5cXG4gICAgfSBcXG5cXG4gICAgLm5ldy10YXNrLWNhcmQsIC5kaXNwbGF5LXRhc2stY2FyZCB7XFxuICAgICAgICBtYXJnaW46IDFyZW07XFxuICAgIH1cXG5cXG4gICAgLnRleHQtYXJlYSA+IHRleHRhcmVhIHtcXG4gICAgICAgIHdpZHRoOiAxMnJlbTtcXG4gICAgfVxcblxcbiAgICAudGFzay1jYXJkIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMnJlbSAxZnIgMWZyO1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDE1cmVtIC0gMjB2aCk7XFxuICAgIH1cXG5cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsbURBQW1EO0FBQ3ZEOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMseURBQXlEO0lBQ3pELG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUkscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsYUFBYTs7O0lBR2IsbUJBQW1COzs7QUFHdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBLGNBQWM7O0FBRWQ7SUFDSSx5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsbUJBQW1COztJQUVuQiw4QkFB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NkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBLHVCQUF1QjtBQUN2QjtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSTtRQUNJLDBCQUEwQjs7SUFFOUI7O0lBRUE7UUFDSSwrQkFBK0I7SUFDbkM7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7O0lBRWpCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHlCQUF5Qjs7SUFFN0I7O0lBRUE7UUFDSSx5QkFBeUI7O0lBRTdCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxtQ0FBbUM7UUFDbkMsMEJBQTBCO0lBQzlCOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBoZWlnaHQ6IDEycHg7XFxuICAgIHdpZHRoOiAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDUwLDAsODAsMSk7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwMCwwLDE1MCwxKTtcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE4cmVtIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIG1pbm1heChjYWxjKDEwMHZoIC0gNHJlbSksIGF1dG8pO1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDAsIDEwMCwgMSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIFxcbiAgICBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgXFxufVxcblxcbi5oZWFkZXIsIC5wcm9qLWhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oZWFkZXIgcCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmhlYWRlci1oYW1idXJnZXIge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKioqU0lERUJBUioqKi9cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAtMSAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjAsIDAsIDExMCwgMSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaWRlYmFyID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBtYXJnaW46IDFyZW07XFxufVxcblxcbi5zaWRlYmFyID4gaW1nOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhci1oZWFkZXIge1xcbiAgICBcXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gICAgcGFkZGluZzogMCAwIDAgMXJlbTtcXG4gICAgXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBcXG59XFxuXFxuLnNpZGViYXItaGVhZGVyOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLmVudHJ5TGlzdCB7XFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXG4gICAgbWFyZ2luOiAxcmVtIDAgMS41cmVtIDA7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiA0LjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuLmVudHJ5LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgXFxufVxcblxcbi5lbnRyeUxpc3QgaW1nIHtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMC4xNXJlbTtcXG4gICAgZmxleDogMDtcXG59XFxuXFxuLmVudHJ5TGlzdCBpbWc6aG92ZXIge1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuLmRlbC1wcm9qZWN0IHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIFxcbn1cXG5cXG4uZW50cnkge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLmVudHJ5OmhvdmVyIHtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbi5lbnRyeTphY3RpdmUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyLWhlYWRlciwgLmVudHJ5IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAtMSAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NCwgNDAsIDQ0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbn1cXG4vKioqUFJPSkVDVCBBTkQgVEFTSyBESVNQTEFZKioqL1xcbi50YXNrLWNhcmQtY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50YXNrLWNhcmQtY29udGFpbmVyID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHdpZHRoOiAyLjVyZW07XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjJyZW07XFxufVxcblxcbi50YXNrLWNhcmQtY29udGFpbmVyID4gaW1nOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvai1oZWFkZXIge1xcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbn1cXG5cXG5cXG5cXG4udGFzay1jYXJkIHtcXG4gICAgaGVpZ2h0OiA1LjJyZW07XFxuICAgIG1hcmdpbjogMC41cmVtIDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjgsMjgsMzAsMSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJyZW0gMmZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubG93LXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLm1lZC1wcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgb3JhbmdlO1xcbn1cXG5cXG4uaGlnaC1wcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmVkO1xcbn1cXG5cXG4udGFzay1idXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgbWFyZ2luOiAwIDAuNzVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stZGVzYyB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50YXNrLWVkaXQge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBtYXJnaW46IDAuNzVyZW0gMXJlbTtcXG59XFxuXFxuLnRhc2stdG9vbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIGdhcDogMC43NXJlbTtcXG5cXG59XFxuXFxuLnRhc2stdG9vbCBpbWcge1xcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgXFxufVxcblxcbi50YXNrLXRvb2wgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLyoqKk5FVyBQUk9KRUNUKioqL1xcbi5wcm9qZWN0LWNhcmQge1xcbiAgICBoZWlnaHQ6IDEycmVtO1xcbiAgICB3aWR0aDogbWF4KDMwdncsIDIwcmVtKTtcXG4gICAgbWFyZ2luOiA0cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLDAsOTAsMSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQgPiBwLCAubmV3LXRhc2stY2FyZCA+IHAge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLm5ldy1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5uZXctYnV0dG9ucyBidXR0b24ge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uY29uZmlybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uY29uZmlybSwgLmNhbmNlbCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4vKioqTkVXIFRBU0sqKiovXFxuXFxuLm5ldy10YXNrLWNhcmQsIC5kaXNwbGF5LXRhc2stY2FyZCB7XFxuICAgIGhlaWdodDogMjhyZW07XFxuICAgIHdpZHRoOiBtYXgoNjB2dywgMjByZW0pO1xcbiAgICBtYXJnaW46IDRyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsMCw5MCwxKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uZXctdGFzay1jYXJkIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi50ZXh0LWFyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGV4dC1hcmVhID4gdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIHdpZHRoOiAxNnJlbTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4jcHJpb3JpdGllcyA+IGxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuI3ByaW9yaXRpZXMgPiBsYWJlbDpmaXJzdC1vZi10eXBlIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4jcHJpb3JpdGllcyA+IGxhYmVsOm50aC1vZi10eXBlKDIpIHtcXG4gICAgY29sb3I6IHllbGxvdztcXG59XFxuXFxuI3ByaW9yaXRpZXMgPiBsYWJlbDpudGgtb2YtdHlwZSgzKSB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi8qRGlzcGxheSB0YXNrIGRldGFpbHMqL1xcbiN0YXNrLWNsb3NlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGlzcGxheS10YXNrLWNhcmQge1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZGlzcGxheS10YXNrLWNhcmQgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZGlzcGxheS10YXNrLWNhcmQgc3BhbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4uZGlzcGxheS10YXNrLWNhcmQgIHAge1xcbiAgICBtYXJnaW46IDAgMC4zcmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAuY29udGVudCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5oZWFkZXIge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAycmVtIDVmcjtcXG4gICAgfVxcbiAgICAuaGVhZGVyLWhhbWJ1cmdlciB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgI3NpZGViYXItbWVudSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIC5tYWluIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDEgLyAtMSAvIDM7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAjbWFpbi1zaWRlYmFyIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMyAvIDEgLyAtMSAvIDM7XFxuXFxuICAgIH0gXFxuXFxuICAgIC5uZXctdGFzay1jYXJkLCAuZGlzcGxheS10YXNrLWNhcmQge1xcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIC50ZXh0LWFyZWEgPiB0ZXh0YXJlYSB7XFxuICAgICAgICB3aWR0aDogMTJyZW07XFxuICAgIH1cXG5cXG4gICAgLnRhc2stY2FyZCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJyZW0gMWZyIDFmcjtcXG4gICAgICAgIGhlaWdodDogY2FsYygxNXJlbSAtIDIwdmgpO1xcbiAgICB9XFxuXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzQWZ0ZXJcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBhZnRlciB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYWZ0ZXIgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVRvQ29tcGFyZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYWZ0ZXIgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQWZ0ZXIobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0FmdGVyKGRpcnR5RGF0ZSwgZGlydHlEYXRlVG9Db21wYXJlKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF0ZVRvQ29tcGFyZSA9IHRvRGF0ZShkaXJ0eURhdGVUb0NvbXBhcmUpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgPiBkYXRlVG9Db21wYXJlLmdldFRpbWUoKTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFVuZmlsbGVkU3RhciBmcm9tICcuL3N0YXItZm91ci1wb2ludHMtb3V0bGluZS5zdmcnO1xuaW1wb3J0IFN0YXIgZnJvbSAnLi9zdGFyLWZvdXItcG9pbnRzLnBuZyc7XG5pbXBvcnQgUHJvamVjdERvbSBmcm9tICcuL1Byb2plY3REb20uanMnO1xuaW1wb3J0IExvY2FsIGZyb20gJy4vTG9jYWwuanMnO1xuXG5jbGFzcyBJbmJveCB7XG5cbiAgICBwcm9qZWN0QXJyYXkgPSBbXTtcbiAgICBzdGF0aWMgZmF2b3JpdGVzQXJyYXkgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy9NYWtlcyBhIG5ldyBpbmJveCB0byBwb3B1bGF0ZSBwcm9qZWN0cy4gT25seSBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgUHJvamVjdHMgYW5kIEZhdm9yaXRlcyBzZWN0aW9uIG9mIHRoZSBzaWRlYmFyIGF0IHRoZSBtb21lbnRcbiAgICAvLyAqIFBhcmFtOiBpZCA9IHRoZSBpZCBvZiB0aGUgZGl2IHRoYXQgaG91c2VzIHRoZSBuZXcgc2VjdGlvblxuICAgIC8vICogUGFyYW06IHRpdGxlID0gdGhlIGhlYWRlciBvZiB0aGUgbmV3IHNlY3Rpb25cbiAgICBzdGF0aWMgbWFrZUluYm94KGlkLCB0aXRsZSkge1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBcbiAgICAgICAgY29uc3QgaW5ib3hUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBpbmJveFRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2lkZWJhci1oZWFkZXJcIik7XG4gICAgICAgIGluYm94VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgaW5ib3guYXBwZW5kQ2hpbGQoaW5ib3hUaXRsZSk7XG4gICAgXG4gICAgICAgIGNvbnN0IGVudHJ5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGVudHJ5TGlzdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVudHJ5TGlzdFwiKTtcbiAgICAgICAgZW50cnlMaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICAgICAgaW5ib3guYXBwZW5kQ2hpbGQoZW50cnlMaXN0KTtcbiAgICBcbiAgICAgICAgcmV0dXJuIHtpbmJveDogaW5ib3gsIGVudHJ5TGlzdDogZW50cnlMaXN0fTtcbiAgICBcbiAgICB9XG5cbiAgICAvL0Rpc3BsYXlzIGEgc2luZ2xlIHByb2plY3QgaW4gdGhlIHNpZGViYXJcbiAgICAvLyAqIFBhcmFtOiBlbnRyeUxpc3QgPSB0aGUgUHJvamVjdHMgc2VjdGlvbiBvZiB0aGUgc2lkZWJhciB0aGF0IHdpbGwgYmUgcmVuZGVyZWRcbiAgICAvLyAqIFBhcmFtOiBwcm9qZWN0ID0gdGhlIHByb2plY3QgdG8gYmUgcmVuZGVyZWRcbiAgICAjZGlzcGxheVByb2plY3QoZW50cnlMaXN0LCBwcm9qZWN0KSB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcm9qID0gbmV3IFByb2plY3REb20oKTtcblxuICAgICAgICBjb25zdCBlbnRyeUNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGVudHJ5Q29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZW50cnktY29udGFpbmVyXCIpO1xuICAgICAgICBlbnRyeUNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgaWQke3Byb2plY3QuaWR9YCk7XG4gICAgICAgIGNvbnN0IGRlbEVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGRlbEVudHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVsLXByb2plY3RcIik7XG4gICAgICAgIGRlbEVudHJ5LnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgIC8vRGVsZXRlcyBwcm9qZWN0IGZyb20gc2lkZWJvYXJkIGFuZCBkaXNwbGF5cyBmaXJzdCBwcm9qZWN0IGluIGxpc3QgaWYgYXBwbGljYWJsZS4gT3RoZXJ3aXNlIGl0IGNsZWFycyB0aGUgbWFpbiBET00uXG4gICAgICAgIGRlbEVudHJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgICAgICAgICAgaWYgKHByb2plY3QuZmF2b3JpdGVkKSB7XG4gICAgICAgICAgICAgICAgLy9SZW1vdmVzIHByb2plY3QgZnJvbSBGYXZvcml0ZXMgc2VjdGlvbiBvZiBzaWRlYmFyXG4gICAgICAgICAgICAgICAgSW5ib3guZmF2b3JpdGVzQXJyYXkuc3BsaWNlKEluYm94LmZhdm9yaXRlc0FycmF5LmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnByb2plY3RBcnJheS5zcGxpY2UodGhpcy5wcm9qZWN0QXJyYXkuaW5kZXhPZihwcm9qZWN0KSwgMSk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlQcm9qZWN0cyhlbnRyeUxpc3QpO1xuXG4gICAgICAgICAgICB3aGlsZSAobWFpbi5maXJzdENoaWxkICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvamVjdEFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKHByb2ouZGlzcGxheVByb2plY3REYXRhKHRoaXMucHJvamVjdEFycmF5WzBdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICBlbnRyeUNvbi5hcHBlbmRDaGlsZChkZWxFbnRyeSk7XG5cbiAgICAgICAgY29uc3QgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBlbnRyeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVudHJ5XCIpO1xuICAgICAgICBlbnRyeS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0LmlkKTtcbiAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIGVudHJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aGlsZSAobWFpbi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qLmRpc3BsYXlQcm9qZWN0RGF0YShwcm9qZWN0KSk7XG4gICAgICAgIH0pXG4gICAgICAgIGVudHJ5Q29uLmFwcGVuZENoaWxkKGVudHJ5KTtcblxuICAgICAgICBjb25zdCBzdGFyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGlmICghcHJvamVjdC5mYXZvcml0ZWQpIHsgIFxuICAgICAgICAgICAgc3Rhci5zcmMgPSBVbmZpbGxlZFN0YXI7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXIuc3JjID0gU3RhcjtcblxuICAgICAgICB9XG5cbiAgICAgICAgZW50cnlDb24uYXBwZW5kQ2hpbGQoc3Rhcik7XG4gICAgICAgIGVudHJ5TGlzdC5hcHBlbmRDaGlsZChlbnRyeUNvbik7XG4gICAgICAgIFxuXG4gICAgICAgIC8vQWRkcyAvIHJlbW92ZXMgZW50cnkgZnJvbSB0aGUgZmF2b3JpdGVzIHNlY3Rpb25cbiAgICAgICAgc3Rhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2plY3QuZmF2b3JpdGVkKSB7ICBcbiAgICAgICAgICAgICAgICBzdGFyLnNyYyA9IFVuZmlsbGVkU3RhcjtcbiAgICAgICAgICAgICAgICBJbmJveC5mYXZvcml0ZXNBcnJheS5zcGxpY2UoSW5ib3guZmF2b3JpdGVzQXJyYXkuaW5kZXhPZihwcm9qZWN0KSwgMSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXIuc3JjID0gU3RhcjtcbiAgICAgICAgICAgICAgICBJbmJveC5mYXZvcml0ZXNBcnJheS5wdXNoKHByb2plY3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgcHJvamVjdC5mYXZvcml0ZWQgPSAhcHJvamVjdC5mYXZvcml0ZWQ7XG4gICAgICAgICAgICAvL3JlZnJlc2hlcyBjdXJyZW50IHNlY3Rpb25cbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVByb2plY3RzKGVudHJ5TGlzdCk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy9SZW5kZXJzIGFsbCBwcm9qZWN0cyBpbiB0aGUgUHJvamVjdHMgc2VjdGlvbiBvZiB0aGUgc2lkZWJhclxuICAgIC8vICogUGFyYW06IGVudHJ5TGlzdCA9IHRoZSBQcm9qZWN0cyBzZWN0aW9uIG9mIHRoZSBzaWRlYmFyIHRoYXQgd2lsbCBiZSByZW5kZXJlZFxuICAgIGRpc3BsYXlQcm9qZWN0cyhlbnRyeUxpc3QpIHtcblxuICAgICAgICB3aGlsZSAoZW50cnlMaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGVudHJ5TGlzdC5yZW1vdmVDaGlsZChlbnRyeUxpc3QuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9Qb3B1bGF0ZXMgUHJvamVjdHMgc2VjdGlvbiBvZiBzaWRlYmFyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RBcnJheVtpXTtcbiAgICAgICAgICAgIHRoaXMuI2Rpc3BsYXlQcm9qZWN0KGVudHJ5TGlzdCwgcHJvamVjdCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vUG9wdWxhdGVzIEZhdm9yaXRlcyBzZWN0aW9uIG9mIHNpZGViYXJcbiAgICAgICAgdGhpcy4jZGlzcGxheUZhdm9yaXRlcyhlbnRyeUxpc3QpO1xuXG4gICAgICAgIC8vU3luYydzIGxvY2FsU3RvcmFnZVxuICAgICAgICBpZiAoTG9jYWwuc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICAgICAgICAgIExvY2FsLnBvcHVsYXRlQXJyYXkoSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9qZWN0QXJyYXkpKTtcbiAgICAgICAgICAgIExvY2FsLnBvcHVsYXRlRmF2b3JpdGVzKEpTT04uc3RyaW5naWZ5KEluYm94LmZhdm9yaXRlc0FycmF5KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL1JlbmRlcnMgYSBzaW5nbGUgZmF2b3JpdGUgZW50cnkgaW4gdGhlIEZhdm9yaXRlcyBzZWN0aW9uIG9mIHRoZSBzaWRlYmFyXG4gICAgLy8gKiBQYXJhbTogZW50cnlMaXN0ID0gdGhlIGVudHJ5TGlzdCBmcm9tIHRoZSBkaXNwbGF5UHJvamVjdHMgbWV0aG9kXG4gICAgLy8gKiBQYXJhbTogcHJvamVjdCA9IFRoZSBwcm9qZWN0IGZyb20gdGhlIEluYm94LmZhdm9yaXRlc0FycmF5IHRoYXQgd2lsbCBiZSByZW5kZXJlZFxuICAgICNkaXNwbGF5RmF2b3JpdGUoZW50cnlMaXN0LCBwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IGZhdm9yaXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmF2b3JpdGVzXCIpO1xuICAgICAgICBjb25zdCBwcm9qID0gbmV3IFByb2plY3REb20oKTtcblxuICAgICAgICBjb25zdCBlbnRyeUNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGVudHJ5Q29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZW50cnktY29udGFpbmVyXCIpO1xuICAgICAgICBlbnRyeUNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgaWQke3Byb2plY3QuaWR9YCk7XG4gICAgICAgIGNvbnN0IGRlbEVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGRlbEVudHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVsLXByb2plY3RcIik7XG4gICAgICAgIGRlbEVudHJ5LnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgIC8vRGVsZXRlcyBwcm9qZWN0IGZyb20gc2lkZWJvYXJkIGFuZCBkaXNwbGF5cyBmaXJzdCBwcm9qZWN0IGluIGxpc3QgaWYgYXBwbGljYWJsZS4gT3RoZXJ3aXNlIGl0IGNsZWFycyB0aGUgbWFpbiBET00uXG4gICAgICAgIGRlbEVudHJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgICAgICAgICAgLy9mYXZvcml0ZXMucmVtb3ZlQ2hpbGQoZmF2b3JpdGVzLnF1ZXJ5U2VsZWN0b3IoYCNpZCR7cHJvamVjdC5pZH1gKSk7XG4gICAgICAgICAgICAvL1JlbW92ZXMgcHJvamVjdCBmcm9tIEZhdm9yaXRlcyBzZWN0aW9uIG9mIHNpZGViYXJcbiAgICAgICAgICAgIEluYm94LmZhdm9yaXRlc0FycmF5LnNwbGljZShJbmJveC5mYXZvcml0ZXNBcnJheS5pbmRleE9mKHByb2plY3QpLCAxKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0QXJyYXkuc3BsaWNlKHRoaXMucHJvamVjdEFycmF5LmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5UHJvamVjdHMoZW50cnlMaXN0KTtcblxuICAgICAgICAgICAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb2plY3RBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qLmRpc3BsYXlQcm9qZWN0RGF0YSh0aGlzLnByb2plY3RBcnJheVswXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgZW50cnlDb24uYXBwZW5kQ2hpbGQoZGVsRW50cnkpO1xuXG4gICAgICAgIGNvbnN0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlbnRyeVwiKTtcbiAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvamVjdC5pZCk7XG4gICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBlbnRyeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvai5kaXNwbGF5UHJvamVjdERhdGEocHJvamVjdCkpO1xuICAgICAgICB9KVxuICAgICAgICBlbnRyeUNvbi5hcHBlbmRDaGlsZChlbnRyeSk7XG5cbiAgICAgICAgY29uc3Qgc3RhciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBzdGFyLnNyYyA9IFN0YXI7XG4gICAgICAgIFxuXG4gICAgICAgIGVudHJ5Q29uLmFwcGVuZENoaWxkKHN0YXIpO1xuICAgICAgICBmYXZvcml0ZXMuYXBwZW5kQ2hpbGQoZW50cnlDb24pO1xuICAgICAgICBcblxuICAgICAgICAvL1JlbW92ZXMgZW50cnkgZnJvbSB0aGUgRmF2b3JpdGVzIGFuZCBQcm9qZWN0cyBzZWN0aW9uc1xuICAgICAgICBzdGFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHN0YXIuc3JjID0gVW5maWxsZWRTdGFyO1xuICAgICAgICAgICAgSW5ib3guZmF2b3JpdGVzQXJyYXkuc3BsaWNlKEluYm94LmZhdm9yaXRlc0FycmF5LmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwcm9qZWN0LmZhdm9yaXRlZCA9ICFwcm9qZWN0LmZhdm9yaXRlZDtcbiAgICAgICAgICAgIC8vcmVmcmVzaGVzIHNpZGViYXJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVByb2plY3RzKGVudHJ5TGlzdCk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICAvL1JlbmRlcnMgRmF2b3JpdGUgZW50cmllcyBpbiBGYXZvcml0ZXMgc2VjdGlvbiBvZiB0aGUgc2lkZWJhci5cbiAgICAvLyAqIFBhcmFtOiBlbnRyeUxpc3QgPSBlbnRyeUxpc3QgdXNlZCBpbiB0aGUgZGlzcGxheVByb2plY3RzIG1ldGhvZCB0byByZW5kZXIgUHJvamVjdHMgc2VjdGlvbiBvZiB0aGUgc2lkZWJhclxuICAgICNkaXNwbGF5RmF2b3JpdGVzKGVudHJ5TGlzdCkge1xuXG4gICAgICAgIGNvbnN0IGZhdm9yaXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmF2b3JpdGVzXCIpO1xuICAgICAgICB3aGlsZSAoZmF2b3JpdGVzLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGZhdm9yaXRlcy5yZW1vdmVDaGlsZChmYXZvcml0ZXMuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL1BvcHVsYXRlcyBGYXZvcml0ZXMgc2lkZWJhclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEluYm94LmZhdm9yaXRlc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBmYXZvcml0ZSA9IEluYm94LmZhdm9yaXRlc0FycmF5W2ldO1xuICAgICAgICAgICAgdGhpcy4jZGlzcGxheUZhdm9yaXRlKGVudHJ5TGlzdCwgZmF2b3JpdGUpO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmJveDsiLCJjbGFzcyBMb2NhbCB7XG4gICAgLy9kZXRlY3RzIHdoZXRoZXIgb3Igbm90IHN0b3JhZ2UgaXMgYXZhaWxhYmxlXG4gICAgc3RhdGljIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgICAgICBsZXQgc3RvcmFnZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgICAgICBjb25zdCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXG4gICAgICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgcG9wdWxhdGVBcnJheShhcnJheSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdEFycmF5JywgYXJyYXkpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBzdGF0aWMgcG9wdWxhdGVGYXZvcml0ZXMoYXJyYXkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zhdm9yaXRlc0FycmF5JywgYXJyYXkpO1xuICAgIH1cblxuICAgIHN0YXRpYyB1cGRhdGVBcnJheXMocHJvamVjdCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdEFycmF5XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0QXJyYXlbaV0uaWQgPT09IHByb2plY3QuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0QXJyYXlbaV0gPSBwcm9qZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvY2FsLnBvcHVsYXRlQXJyYXkoSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycmF5KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdC5mYXZvcml0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhdm9yaXRlc0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm9yaXRlc0FycmF5XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmF2b3JpdGVzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmF2b3JpdGVzQXJyYXlbaV0uaWQgPT09IHByb2plY3QuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGVzQXJyYXlbaV0gPSBwcm9qZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2NhbC5wb3B1bGF0ZUZhdm9yaXRlcyhKU09OLnN0cmluZ2lmeShmYXZvcml0ZXNBcnJheSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsOyIsImNsYXNzIFByb2plY3Qge1xuICAgIHN0YXRpYyBpZCA9IDE7XG4gICAgY29uc3RydWN0b3IobmFtZSwgdGFza0FycmF5PVtdLCBmYXZvcml0ZWQ9ZmFsc2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrQXJyYXkgPSB0YXNrQXJyYXk7XG4gICAgICAgIHRoaXMuZmF2b3JpdGVkID0gZmF2b3JpdGVkO1xuICAgICAgICB0aGlzLmlkID0gUHJvamVjdC5pZDtcbiAgICAgICAgUHJvamVjdC5pZCArPSAxO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCJpbXBvcnQgRWRpdCBmcm9tICcuL3RleHQtYm94LWVkaXQtb3V0bGluZS5wbmcnO1xuaW1wb3J0IENQbHVzIGZyb20gJy4vcGx1cy1jaXJjbGUucG5nJztcbmltcG9ydCBUYXNrRG9tIGZyb20gJy4vVGFza0RvbS5qcyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QuanMnO1xuaW1wb3J0IGlzQWZ0ZXIgZnJvbSAnZGF0ZS1mbnMvaXNBZnRlcic7XG5pbXBvcnQgTG9jYWwgZnJvbSAnLi9Mb2NhbC5qcyc7XG5cbi8vTWFrZXMgY2hhbmdlcyB0byB0aGUgRE9NIGluIG9yZGVyIHRvIGRpc3BsYXkgdGFza3Mgb2YgYSBwcm9qZWN0XG5cbmNsYXNzIFByb2plY3REb20ge1xuICAgIFxuXG4gICAgLy9EaXNwbGF5cyB0YXNrIGZvciBhIGdpdmVuIHByb2plY3RcbiAgICBkaXNwbGF5VGFza0NhcmQocHJvamVjdCwgdGFzaykge1xuICAgICAgICBjb25zdCB0YXNrRG9tID0gbmV3IFRhc2tEb20oKTtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcblxuICAgICAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tDYXJkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay1jYXJkXCIpO1xuICAgICAgICB0YXNrQ2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0YXNrLmlkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YXNrOiBcIiArIHRhc2sucHJlc3NlZCk7XG5cbiAgICAgICAgY29uc3QgdGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHRhc2tCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWJ1dHRvblwiKTtcbiAgICAgICAgdGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXRhc2suY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgdGFza0Rlc2Muc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xuICAgICAgICAgICAgICAgIHRhc2tCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDkwLCAwLCAxNDAsIDEpXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhc2tEZXNjLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgdGFza0J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXNrLmNvbXBsZXRlZCA9ICF0YXNrLmNvbXBsZXRlZDtcbiAgICAgICAgICAgIGlmIChMb2NhbC5zdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICAgICAgICAgICAgTG9jYWwudXBkYXRlQXJyYXlzKHByb2plY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0Rlc2Muc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWRlc2NcIik7XG4gICAgICAgIHRhc2tEZXNjLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgICAgICAgdGFza0Rlc2MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHdoaWxlIChtYWluLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRhc2tEb20uZGlzcGxheVRhc2socHJvamVjdCwgdGFzaykpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza0Rlc2MpO1xuXG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgdGFza0Rlc2Muc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xuICAgICAgICAgICAgdGFza0J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoOTAsIDAsIDE0MCwgMSlcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tEZXNjLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XG4gICAgICAgICAgICB0YXNrQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhc2tFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0VkaXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWVkaXRcIik7XG5cbiAgICAgICAgY29uc3QgdGFza1Rvb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza1Rvb2xzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay10b29sXCIpO1xuXG4gICAgICAgIFxuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IHRhc2suZHVlRGF0ZS5zcGxpdChcIi1cIik7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZHVlRGF0ZS5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHt0YXNrLmR1ZURhdGV9YDtcbiAgICAgICAgLy9zZXRzIGR1ZSBkYXRlIGZpZWxkIHRvIHJlZCBpZiBpdCdzIHBhc3QgZHVlLlxuICAgICAgICBpZiAoaXNBZnRlcihuZXcgRGF0ZSgpLCBuZXcgRGF0ZSh0YXNrRGF0ZVswXSwgdGFza0RhdGVbMV0tMSwgdGFza0RhdGVbMl0pKSkge1xuICAgICAgICAgICAgZHVlRGF0ZS5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGFza1Rvb2xzLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgICAgIGNvbnN0IGVkaXQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgZWRpdC5zcmMgPSBFZGl0O1xuICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB3aGlsZSAobWFpbi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0YXNrRG9tLmVkaXRUYXNrKHByb2plY3QsIHRhc2spKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICB0YXNrVG9vbHMuYXBwZW5kQ2hpbGQoZWRpdCk7XG5cbiAgICAgICAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGRlbC50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgICAgICBkZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRlbC5jbG9zZXN0KFwiLnRhc2stY2FyZC1jb250YWluZXJcIikucmVtb3ZlQ2hpbGQodGFza0NhcmQpO1xuICAgICAgICAgICAgcHJvamVjdC50YXNrQXJyYXkuc3BsaWNlKHByb2plY3QudGFza0FycmF5LmluZGV4T2YodGFzayksIDEpO1xuICAgICAgICAgICAgaWYgKExvY2FsLnN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgICAgICAgICAgICBMb2NhbC51cGRhdGVBcnJheXMocHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRhc2tUb29scy5hcHBlbmRDaGlsZChkZWwpO1xuICAgICAgICB0YXNrRWRpdC5hcHBlbmRDaGlsZCh0YXNrVG9vbHMpO1xuXG5cbiAgICAgICAgY29uc3QgcHJpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHByaS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG4gICAgICAgIHN3aXRjaCAocHJpLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICBjYXNlIFwiTWVkaXVtIFByaW9yaXR5XCI6XG4gICAgICAgICAgICAgICAgdGFza0NhcmQuY2xhc3NOYW1lICs9IFwiIG1lZC1wcmlvcml0eVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkhpZ2ggUHJpb3JpdHlcIjpcbiAgICAgICAgICAgICAgICB0YXNrQ2FyZC5jbGFzc05hbWUgKz0gXCIgaGlnaC1wcmlvcml0eVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0YXNrQ2FyZC5jbGFzc05hbWUgKz0gXCIgbG93LXByaW9yaXR5XCI7XG5cbiAgICAgICAgfVxuICAgICAgICB0YXNrRWRpdC5hcHBlbmRDaGlsZChwcmkpO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrRWRpdCk7XG5cbiAgICAgICAgcmV0dXJuIHRhc2tDYXJkO1xuICAgIH1cblxuICAgIGRpc3BsYXlQcm9qZWN0RGF0YShwcm9qZWN0KSB7XG4gICAgICAgIC8vUHJvamVjdCBhbmQgdGFza3MgZGFzaGJvYXJkXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay1jYXJkLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgcHJvakhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwcm9qSGVhZGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJwcm9qLWhlYWRlclwiKTtcbiAgICAgICAgcHJvakhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qSGVhZGVyKTtcblxuICAgICAgICBjb25zdCBjUGx1cyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBjUGx1cy5zcmMgPSBDUGx1cztcbiAgICAgICAgY1BsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFza0RvbSgpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChtYWluLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRhc2suY3JlYXRlVGFzayhwcm9qZWN0KSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjUGx1cyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmRpc3BsYXlUYXNrQ2FyZChwcm9qZWN0LCBwcm9qZWN0LnRhc2tBcnJheVtpXSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmRpc3BsYXlUYXNrQ2FyZChuZXcgVGFzayhcIlRhc2tOYW1lXCIsIFwiVGhpcyBpcyBhIHRlc3QgZGVzY3JpcHRpb25cIiwgXCIxMi8xMS8yMDIyXCIsIFwiTG93IFByaW9yaXR5XCIpKSk7XG5cblxuICAgICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xuICAgIH1cbiAgICBcbiAgICBjcmVhdGVQcm9qZWN0KGluYm94LCBlbnRyeUxpc3QpIHtcbiAgICAgICAgIC8vTmV3IFByb2plY3QgRGFzaGJvYXJkXG4gICAgICAgIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdQcm9qLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdC1jYXJkXCIpO1xuXG4gICAgICAgIGNvbnN0IHByb2pUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwcm9qVGl0bGUudGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCI7XG4gICAgICAgIG5ld1Byb2ouYXBwZW5kQ2hpbGQocHJvalRpdGxlKTtcblxuICAgICAgICBjb25zdCBwcm9qRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBwcm9qTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHByb2pMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBOYW1lOiBcIjtcbiAgICAgICAgcHJvakxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5ldy1wcm9qXCIpO1xuICAgICAgICBwcm9qRmllbGQuYXBwZW5kQ2hpbGQocHJvakxhYmVsKTtcblxuICAgICAgICBjb25zdCBwcm9qSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHByb2pJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy1wcm9qXCIpO1xuICAgICAgICBwcm9qSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJNYXggMjAgY2hhcnNcIik7XG4gICAgICAgIHByb2pJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIyMFwiKTtcbiAgICAgICAgcHJvaklucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgcHJvakZpZWxkLmFwcGVuZENoaWxkKHByb2pJbnB1dCk7XG4gICAgICAgIG5ld1Byb2ouYXBwZW5kQ2hpbGQocHJvakZpZWxkKTtcblxuXG4gICAgICAgIC8vUHJvamVjdCBCdXR0b25zXG4gICAgICAgIGNvbnN0IHByb2pCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvakJ1dHRvbnMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuZXctYnV0dG9uc1wiKTtcbiAgICAgICAgY29uc3QgbmV3UHJvakJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIG5ld1Byb2pCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb25maXJtXCIpO1xuICAgICAgICBuZXdQcm9qQnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGUgUHJvamVjdFwiO1xuICAgICAgICAvL0NyZWF0ZXMgbmV3IHByb2plY3QgYW5kIGFkZHMgaXQgdG8gY29ycmVzcG9uZGluZyBlbnRyeUxpc3QgaW4gdGhlIHNpZGViYXJcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgICAgICAgbmV3UHJvakJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFwcm9qSW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgICAgICAgICBwcm9qSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2pJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaW5ib3gucHJvamVjdEFycmF5LnB1c2gocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgaW5ib3guZGlzcGxheVByb2plY3RzKGVudHJ5TGlzdCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodGhpcy5kaXNwbGF5UHJvamVjdERhdGEocHJvamVjdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICBwcm9qQnV0dG9ucy5hcHBlbmRDaGlsZChuZXdQcm9qQnV0dG9uKTtcblxuICAgICAgICBjb25zdCBjYW5jZWxQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY2FuY2VsUHJvai5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhbmNlbFwiKTtcbiAgICAgICAgY2FuY2VsUHJvai50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgICAgIC8vQ2FuY2VscyBwcm9qZWN0IGNyZWF0aW9uIGFuZCBnb2VzIGJhY2sgdG8gZGVmYXVsdCBwcm9qZWN0LCBpZiBhcHBsaWNhYmxlXG4gICAgICAgIGNhbmNlbFByb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHdoaWxlIChtYWluLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5ib3gucHJvamVjdEFycmF5Lmxlbmd0aCk7XG4gICAgICAgICAgICBpZiAoaW5ib3gucHJvamVjdEFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRoaXMuZGlzcGxheVByb2plY3REYXRhKGluYm94LnByb2plY3RBcnJheVswXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBwcm9qQnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWxQcm9qKTtcblxuICAgICAgICBuZXdQcm9qLmFwcGVuZENoaWxkKHByb2pCdXR0b25zKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXdQcm9qO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0RG9tOyIsImNsYXNzIFRhc2sge1xuICAgIHN0YXRpYyBpZCA9IDE7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb249XCJcIiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZD1mYWxzZSkge1xuICAgICAgICB0aGlzLmlkID0gVGFzay5pZDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgICAgICBUYXNrLmlkICs9IDE7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrOyIsIi8vTWFrZXMgY2hhbmdlcyB0byB0aGUgRE9NIGluIG9yZGVyIHRvIGRpc3BsYXkgdGhlIGNyZWF0ZS9lZGl0IHRhc2sgc2NyZWVuXG5cbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2suanNcIjtcbmltcG9ydCBQcm9qZWN0RG9tIGZyb20gXCIuL1Byb2plY3REb20uanNcIjtcbmltcG9ydCBMb2NhbCBmcm9tICcuL0xvY2FsLmpzJztcblxuY2xhc3MgVGFza0RvbSB7XG4gICAgY3JlYXRlVGFzayhwcm9qZWN0KSB7XG5cbiAgICBjb25zdCBwcm9qID0gbmV3IFByb2plY3REb20oKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgIC8vTmV3IFRhc2sgRGFzaGJvYXJkXG4gICAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3VGFzay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5ldy10YXNrLWNhcmRcIik7XG5cbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBcIk5ldyBUYXNrXCI7XG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuXG4gICAgLy9UYXNrIE5hbWVcbiAgICBjb25zdCB0YXNrTmFtZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0YXNrTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRhc2tOYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2sgTmFtZTogXCI7XG4gICAgdGFza05hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLW5hbWVcIik7XG4gICAgdGFza05hbWVGaWVsZC5hcHBlbmRDaGlsZCh0YXNrTmFtZUxhYmVsKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stbmFtZVwiKTtcbiAgICB0YXNrTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTWF4IDMwIGNoYXJzXCIpO1xuICAgIHRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMzBcIik7XG4gICAgdGFza05hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgdGFza05hbWVGaWVsZC5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0KTtcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHRhc2tOYW1lRmllbGQpO1xuXG4gICAgLy9UYXNrIER1ZSBEYXRlXG4gICAgY29uc3QgdGFza0R1ZURhdGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGFza0R1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0YXNrRHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTogXCI7XG4gICAgdGFza0R1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWR1ZS1kYXRlXCIpO1xuICAgIHRhc2tEdWVEYXRlRmllbGQuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGVMYWJlbCk7XG5cbiAgICBjb25zdCB0YXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tEdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWR1ZS1kYXRlXCIpO1xuICAgIHRhc2tEdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgdGFza0R1ZURhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgdGFza0R1ZURhdGVGaWVsZC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZUlucHV0KTtcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlRmllbGQpO1xuXG4gICAgLy9UYXNrIERlc2NyaXB0aW9uXG4gICAgY29uc3QgdGFza0Rlc2NGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0Rlc2NGaWVsZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRleHQtYXJlYVwiKTtcbiAgICBjb25zdCB0YXNrRGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRhc2tEZXNjTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2sgRGVzY3JpcHRpb246IFwiO1xuICAgIHRhc2tEZXNjTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1kZXNjXCIpO1xuICAgIHRhc2tEZXNjRmllbGQuYXBwZW5kQ2hpbGQodGFza0Rlc2NMYWJlbCk7XG5cbiAgICBjb25zdCB0YXNrRGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRBcmVhXCIpO1xuICAgIHRhc2tEZXNjSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWRlc2NcIik7XG4gICAgdGFza0Rlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIxNTBcIik7XG4gICAgdGFza0Rlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk1heCAxNTAgY2hhcnMgKG9wdGlvbmFsKVwiKTtcbiAgICB0YXNrRGVzY0ZpZWxkLmFwcGVuZENoaWxkKHRhc2tEZXNjSW5wdXQpO1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGFza0Rlc2NGaWVsZCk7XG5cbiAgICAvL1ByaW9yaXRpZXNcbiAgICBjb25zdCBwcmlvcml0aWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcmlvcml0aWVzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdGllc1wiKTtcbiAgICBcbiAgICAvL0xvd1xuICAgIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBsb3cuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgIGxvdy5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwidHJ1ZVwiKTtcbiAgICBsb3cudmFsdWUgPSBcIkxvdyBQcmlvcml0eVwiO1xuICAgIGxvdy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicFwiKTtcbiAgICBwcmlvcml0aWVzLmFwcGVuZENoaWxkKGxvdyk7XG5cbiAgICBjb25zdCBsb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsb3dMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJsb3dcIik7XG4gICAgbG93TGFiZWwudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICAgIHByaW9yaXRpZXMuYXBwZW5kQ2hpbGQobG93TGFiZWwpO1xuXG4gICAgLy9NZWRpdW1cbiAgICBjb25zdCBtZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbWVkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICBtZWQudmFsdWUgPSBcIk1lZGl1bSBQcmlvcml0eVwiO1xuICAgIG1lZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicFwiKTtcbiAgICBwcmlvcml0aWVzLmFwcGVuZENoaWxkKG1lZCk7XG5cbiAgICBjb25zdCBtZWRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBtZWRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJtZWRpdW1cIik7XG4gICAgbWVkTGFiZWwudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICAgIHByaW9yaXRpZXMuYXBwZW5kQ2hpbGQobWVkTGFiZWwpO1xuXG4gICAgLy9IaWdoXG4gICAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBoaWdoLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICBoaWdoLnZhbHVlID0gXCJIaWdoIFByaW9yaXR5XCI7XG4gICAgaGlnaC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicFwiKTtcbiAgICBwcmlvcml0aWVzLmFwcGVuZENoaWxkKGhpZ2gpO1xuXG4gICAgY29uc3QgaGlnaExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGhpZ2hMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJoaWdoXCIpO1xuICAgIGhpZ2hMYWJlbC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgIHByaW9yaXRpZXMuYXBwZW5kQ2hpbGQoaGlnaExhYmVsKTtcblxuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQocHJpb3JpdGllcyk7XG5cbiAgICAvL1Rhc2sgQnV0dG9uc1xuICAgIGNvbnN0IHRhc2tCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQnV0dG9ucy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5ldy1idXR0b25zXCIpO1xuICAgIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5ld1Rhc2tCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb25maXJtXCIpO1xuICAgIG5ld1Rhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBUYXNrXCI7XG4gICAgLy9DcmVhdGVzIG5ldyB0YXNrIGFuZCBkaXNwbGF5cyBpdCBpbiB0aGUgcHJvamVjdCBkb21cbiAgICBuZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmICghdGFza05hbWVJbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAgICAgdGFza05hbWVJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9IGVsc2UgaWYgKCF0YXNrRHVlRGF0ZUlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgICAgICB0YXNrRHVlRGF0ZUlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tBcnJheS5wdXNoKG5ldyBUYXNrKHRhc2tOYW1lSW5wdXQudmFsdWUsIHRhc2tEZXNjSW5wdXQudmFsdWUsIHRhc2tEdWVEYXRlSW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3AnXTpjaGVja2VkXCIpLnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgLy9SZWZyZXNoZXMgbG9jYWxTdG9yYWdlIGRhdGFcbiAgICAgICAgICAgICAgICBpZiAoTG9jYWwuc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICBMb2NhbC51cGRhdGVBcnJheXMocHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvai5kaXNwbGF5UHJvamVjdERhdGEocHJvamVjdCkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pO1xuICAgIHRhc2tCdXR0b25zLmFwcGVuZENoaWxkKG5ld1Rhc2tCdXR0b24pO1xuXG4gICAgY29uc3QgY2FuY2VsVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsVGFzay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhbmNlbFwiKTtcbiAgICBjYW5jZWxUYXNrLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHdoaWxlIChtYWluLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHByb2ouZGlzcGxheVByb2plY3REYXRhKHByb2plY3QpKTtcbiAgICB9KVxuICAgIHRhc2tCdXR0b25zLmFwcGVuZENoaWxkKGNhbmNlbFRhc2spO1xuXG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZCh0YXNrQnV0dG9ucyk7XG5cbiAgICByZXR1cm4gbmV3VGFzaztcbiAgICB9XG5cbiAgICAvL0FsbG93cyB0YXNrIHRvIGJlIGVkaXRlZFxuICAgIGVkaXRUYXNrKHByb2plY3QsIHRhc2spIHtcblxuICAgICAgICBjb25zdCBwcm9qID0gbmV3IFByb2plY3REb20oKTtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgICAgICAgLy9FZGl0IFRhc2sgRGFzaGJvYXJkXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdUYXNrLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmV3LXRhc2stY2FyZFwiKTtcblxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gXCJFZGl0IFRhc2tcIjtcbiAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuXG4gICAgICAgIC8vVGFzayBOYW1lXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCB0YXNrTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICB0YXNrTmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrIE5hbWU6IFwiO1xuICAgICAgICB0YXNrTmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stbmFtZVwiKTtcbiAgICAgICAgdGFza05hbWVGaWVsZC5hcHBlbmRDaGlsZCh0YXNrTmFtZUxhYmVsKTtcblxuICAgICAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0YXNrTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1uYW1lXCIpO1xuICAgICAgICB0YXNrTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTWF4IDMwIGNoYXJzXCIpO1xuICAgICAgICB0YXNrTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjMwXCIpO1xuICAgICAgICB0YXNrTmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coYGRhdGU6ICR7dGFzay5kdWVEYXRlfWApO1xuICAgICAgICB0YXNrTmFtZUlucHV0LnZhbHVlID0gdGFzay5uYW1lO1xuICAgICAgICB0YXNrTmFtZUZpZWxkLmFwcGVuZENoaWxkKHRhc2tOYW1lSW5wdXQpO1xuICAgICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHRhc2tOYW1lRmllbGQpO1xuXG4gICAgICAgIC8vVGFzayBEdWUgRGF0ZVxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgdGFza0R1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6IFwiO1xuICAgICAgICB0YXNrRHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stZHVlLWRhdGVcIik7XG4gICAgICAgIHRhc2tEdWVEYXRlRmllbGQuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGVMYWJlbCk7XG5cbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGFza0R1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stZHVlLWRhdGVcIik7XG4gICAgICAgIHRhc2tEdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgICAgIHRhc2tEdWVEYXRlSW5wdXQudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgIHRhc2tEdWVEYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICB0YXNrRHVlRGF0ZUZpZWxkLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlSW5wdXQpO1xuICAgICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlRmllbGQpO1xuXG4gICAgICAgIC8vVGFzayBEZXNjcmlwdGlvblxuICAgICAgICBjb25zdCB0YXNrRGVzY0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0Rlc2NGaWVsZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRleHQtYXJlYVwiKTtcbiAgICAgICAgY29uc3QgdGFza0Rlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgdGFza0Rlc2NMYWJlbC50ZXh0Q29udGVudCA9IFwiVGFzayBEZXNjcmlwdGlvbjogXCI7XG4gICAgICAgIHRhc2tEZXNjTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1kZXNjXCIpO1xuICAgICAgICB0YXNrRGVzY0ZpZWxkLmFwcGVuZENoaWxkKHRhc2tEZXNjTGFiZWwpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dEFyZWFcIik7XG4gICAgICAgIHRhc2tEZXNjSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWRlc2NcIik7XG4gICAgICAgIHRhc2tEZXNjSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMTUwXCIpO1xuICAgICAgICB0YXNrRGVzY0lucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTWF4IDE1MCBjaGFycyAob3B0aW9uYWwpXCIpO1xuICAgICAgICB0YXNrRGVzY0lucHV0LnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGFza0Rlc2NGaWVsZC5hcHBlbmRDaGlsZCh0YXNrRGVzY0lucHV0KTtcbiAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZCh0YXNrRGVzY0ZpZWxkKTtcblxuICAgICAgICAvL1ByaW9yaXRpZXNcbiAgICAgICAgY29uc3QgcHJpb3JpdGllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByaW9yaXRpZXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0aWVzXCIpO1xuICAgICAgICBcbiAgICAgICAgLy9Mb3dcbiAgICAgICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBsb3cuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgICAgICBsb3cudmFsdWUgPSBcIkxvdyBQcmlvcml0eVwiO1xuICAgICAgICBsb3cuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInBcIik7XG4gICAgICAgIHByaW9yaXRpZXMuYXBwZW5kQ2hpbGQobG93KTtcblxuICAgICAgICBjb25zdCBsb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbG93TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibG93XCIpO1xuICAgICAgICBsb3dMYWJlbC50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gICAgICAgIHByaW9yaXRpZXMuYXBwZW5kQ2hpbGQobG93TGFiZWwpO1xuXG4gICAgICAgIC8vTWVkaXVtXG4gICAgICAgIGNvbnN0IG1lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgbWVkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICAgICAgbWVkLnZhbHVlID0gXCJNZWRpdW0gUHJpb3JpdHlcIjtcbiAgICAgICAgbWVkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwXCIpO1xuICAgICAgICBwcmlvcml0aWVzLmFwcGVuZENoaWxkKG1lZCk7XG5cbiAgICAgICAgY29uc3QgbWVkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIG1lZExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm1lZGl1bVwiKTtcbiAgICAgICAgbWVkTGFiZWwudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICAgICAgICBwcmlvcml0aWVzLmFwcGVuZENoaWxkKG1lZExhYmVsKTtcblxuICAgICAgICAvL0hpZ2hcbiAgICAgICAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaGlnaC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gICAgICAgIGhpZ2gudmFsdWUgPSBcIkhpZ2ggUHJpb3JpdHlcIjtcbiAgICAgICAgaGlnaC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicFwiKTtcbiAgICAgICAgcHJpb3JpdGllcy5hcHBlbmRDaGlsZChoaWdoKTtcblxuICAgICAgICBjb25zdCBoaWdoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGhpZ2hMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJoaWdoXCIpO1xuICAgICAgICBoaWdoTGFiZWwudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgICAgICAgcHJpb3JpdGllcy5hcHBlbmRDaGlsZChoaWdoTGFiZWwpO1xuXG4gICAgICAgIHN3aXRjaCAodGFzay5wcmlvcml0eSkge1xuICAgICAgICAgICAgY2FzZSBcIk1lZGl1bSBQcmlvcml0eVwiOlxuICAgICAgICAgICAgICAgIG1lZC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJIaWdoIFByaW9yaXR5XCI6XG4gICAgICAgICAgICAgICAgaGlnaC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgbG93LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZChwcmlvcml0aWVzKTtcblxuICAgICAgICAvL1Rhc2sgQnV0dG9uc1xuICAgICAgICBjb25zdCB0YXNrQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tCdXR0b25zLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmV3LWJ1dHRvbnNcIik7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1FZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY29uZmlybUVkaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb25maXJtXCIpO1xuICAgICAgICBjb25maXJtRWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2F2ZSBDaGFuZ2VzXCI7XG4gICAgICAgIC8vQ3JlYXRlcyBuZXcgdGFzayBhbmQgZGlzcGxheXMgaXQgaW4gdGhlIHByb2plY3QgZG9tXG4gICAgICAgIGNvbmZpcm1FZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRhc2tOYW1lSW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0YXNrTmFtZUlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0YXNrRHVlRGF0ZUlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGFza0R1ZURhdGVJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXNrLm5hbWUgPSB0YXNrTmFtZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSB0YXNrRGVzY0lucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgIHRhc2suZHVlRGF0ZSA9IHRhc2tEdWVEYXRlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwJ106Y2hlY2tlZFwiKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAvL3JlZnJlc2hlcyBsb2NhbFN0b3JhZ2UgZGF0YVxuICAgICAgICAgICAgICAgIGlmIChMb2NhbC5zdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIExvY2FsLnVwZGF0ZUFycmF5cyhwcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvai5kaXNwbGF5UHJvamVjdERhdGEocHJvamVjdCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgICB0YXNrQnV0dG9ucy5hcHBlbmRDaGlsZChjb25maXJtRWRpdEJ1dHRvbik7XG5cbiAgICAgICAgY29uc3QgY2FuY2VsVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNhbmNlbFRhc2suc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYW5jZWxcIik7XG4gICAgICAgIGNhbmNlbFRhc2sudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgICAgICBjYW5jZWxUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB3aGlsZSAobWFpbi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qLmRpc3BsYXlQcm9qZWN0RGF0YShwcm9qZWN0KSk7XG4gICAgICAgIH0pXG4gICAgICAgIHRhc2tCdXR0b25zLmFwcGVuZENoaWxkKGNhbmNlbFRhc2spO1xuXG4gICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGFza0J1dHRvbnMpO1xuXG4gICAgICAgIHJldHVybiBuZXdUYXNrO1xuXG4gICAgfVxuXG4gICAgLy9EaXNwbGF5cyBkZXRhaWxzIG9mIGEgY2xhc3NcbiAgICBkaXNwbGF5VGFzayhwcm9qZWN0LCB0YXNrKSB7XG4gICAgICAgIGNvbnN0IHByb2ogPSBuZXcgUHJvamVjdERvbSgpO1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgICAgICAvL0Rpc3BsYXkgVGFzayBEYXNoYm9hcmRcbiAgICAgICAgY29uc3QgZGlzcGxheVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXNwbGF5VGFzay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpc3BsYXktdGFzay1jYXJkXCIpO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjbG9zZVRhc2sudGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgICAgY2xvc2VUYXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1jbG9zZVwiKTtcbiAgICAgICAgY2xvc2VUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB3aGlsZSAobWFpbi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qLmRpc3BsYXlQcm9qZWN0RGF0YShwcm9qZWN0KSk7XG4gICAgICAgIH0pXG4gICAgICAgIGRpc3BsYXlUYXNrLmFwcGVuZENoaWxkKGNsb3NlVGFzayk7XG5cbiAgICAgICAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWU6IFwiO1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG4gICAgICAgIG5hbWVEaXYuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICAgICAgbmFtZURpdi5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgICAgZGlzcGxheVRhc2suYXBwZW5kQ2hpbGQobmFtZURpdik7XG5cbiAgICAgICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBkYXRlOiBcIjtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgICAgICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgICAgIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIGRpc3BsYXlUYXNrLmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgICAgICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBkaXNwbGF5VGFzay5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb25zdCB0YXNrUCA9IHRhc2sucHJpb3JpdHkuc3BsaXQoXCIgXCIpWzBdO1xuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2tQO1xuICAgICAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICAgICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHkpXG4gICAgICAgIGRpc3BsYXlUYXNrLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcblxuICAgICAgICByZXR1cm4gZGlzcGxheVRhc2s7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrRG9tOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgSW5ib3ggZnJvbSAnLi9JbmJveC5qcyc7XG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUuc3ZnJztcbmltcG9ydCBQbHVzIGZyb20gJy4vcGx1cy5wbmcnO1xuaW1wb3J0IFByb2plY3REb20gZnJvbSAnLi9Qcm9qZWN0RG9tLmpzJztcbmltcG9ydCBMb2NhbCBmcm9tICcuL0xvY2FsLmpzJztcblxuLy9SZW5kZXJzIHRoZSBpbml0aWFsIGxheW91dCBvZiB0aGUgd2VicGFnZVxuZnVuY3Rpb24gd2VicGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29udGVudFwiKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IG1lbnUgPSBuZXcgSW1hZ2UoKTtcbiAgICBtZW51LnNyYyA9IE1lbnU7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhlYWRlci1oYW1idXJnZXJcIik7XG4gICAgbGV0IGNsaWNrZWQgPSBmYWxzZTtcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmICghY2xpY2tlZCkge1xuICAgICAgICAgICAgc2lkZWJhci5pZCArPSBcInNpZGViYXItbWVudVwiO1xuICAgICAgICAgICAgbWFpbi5pZCArPSBcIm1haW4tc2lkZWJhclwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2lkZWJhci5pZCA9IFwiXCI7XG4gICAgICAgICAgICBtYWluLmlkID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBjbGlja2VkID0gIWNsaWNrZWQ7XG4gICAgfSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgY29uc3QgaGVhZGVyUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGhlYWRlclAudGV4dENvbnRlbnQgPSBcIlRvLURvIExpc3RcIjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyUCk7XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2lkZWJhclwiKTtcblxuICAgIFxuXG4gICAgXG4gICAgXG4gICAgLy9jb25zdCB0ZXN0UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiVGVzdFwiLCBbXSk7XG4gICAgLy9QdXNoZXMgdGVzdCBwcm9qZWN0IHRvIGluYm94IHRvIGRpc3BsYXkgYmVsb3dcbiAgICAvL3Byb2plY3RzLnByb2plY3RBcnJheS5wdXNoKHRlc3RQcm9qZWN0KTtcbiAgICBjb25zdCBwcm9qZWN0ID0gSW5ib3gubWFrZUluYm94KFwiaW5ib3hcIiwgXCJBbGwgUHJvamVjdHNcIik7XG4gICAgY29uc3QgZmF2b3JpdGVzID0gSW5ib3gubWFrZUluYm94KFwiZmF2b3JpdGVzXCIsIFwiRmF2b3JpdGVzXCIpO1xuXG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW5cIik7XG5cblxuICAgIFxuICAgIC8vcHJvamVjdHMuZGlzcGxheVByb2plY3RzKHByb2plY3QuZW50cnlMaXN0KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3QuaW5ib3gpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZmF2b3JpdGVzLmluYm94KTtcbiAgICBcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgICBcbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuLy9SZW5kZXJzIHRoZSBkYXRhIGluIHRoZSBzaWRlYmFyIG9uY2UgdGhlIG91dGxpbmUgb2YgdGhlIHBhZ2UgaGFzIGJlZW4gcmVuZGVyZWRcbmZ1bmN0aW9uIHBvcHVsYXRlU2lkZWJhcigpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IG5ldyBJbmJveCgpO1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luYm94XCIpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgY29uc3QgcHJvaiA9IG5ldyBQcm9qZWN0RG9tKCk7XG4gICAgXG5cbiAgICBpZiAoTG9jYWwuc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdEFycmF5XCIpKSB7XG4gICAgICAgICAgICBMb2NhbC5wb3B1bGF0ZUFycmF5KEpTT04uc3RyaW5naWZ5KHByb2plY3RzLnByb2plY3RBcnJheSkpO1xuICAgICAgICAgICAgTG9jYWwucG9wdWxhdGVGYXZvcml0ZXMoSlNPTi5zdHJpbmdpZnkoSW5ib3guZmF2b3JpdGVzQXJyYXkpKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0cy5wcm9qZWN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdEFycmF5XCIpKTtcbiAgICAgICAgICAgIEluYm94LmZhdm9yaXRlc0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm9yaXRlc0FycmF5XCIpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBwbHVzID0gbmV3IEltYWdlKCk7XG4gICAgcGx1cy5zcmMgPSBQbHVzO1xuICAgIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB3aGlsZSAobWFpbi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qLmNyZWF0ZVByb2plY3QocHJvamVjdHMsIGluYm94KSk7XG4gICAgfSlcblxuICAgIHNpZGViYXIuaW5zZXJ0QmVmb3JlKHBsdXMsIHNpZGViYXIuZmlyc3RDaGlsZCk7XG5cbiAgICBwcm9qZWN0cy5kaXNwbGF5UHJvamVjdHMoaW5ib3gpO1xuXG4gICAgaWYgKHByb2plY3RzLnByb2plY3RBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvai5kaXNwbGF5UHJvamVjdERhdGEocHJvamVjdHMucHJvamVjdEFycmF5WzBdKSk7XG4gICAgfVxuXG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod2VicGFnZSgpKTtcbnBvcHVsYXRlU2lkZWJhcigpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=