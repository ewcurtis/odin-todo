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
___CSS_LOADER_EXPORT___.push([module.id, "::-webkit-scrollbar {\n    height: 12px;\n    width: 12px;\n    background: rgba(50,0,80,1);\n}\n\n::-webkit-scrollbar-thumb {\n    background: rgba(100,0,150,1);\n    -webkit-border-radius: 5px;\n    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 18rem 4fr;\n    grid-template-rows: 4rem minmax(calc(100vh - 4rem), auto);\n    grid-auto-flow: row;\n    grid-auto-rows: 1fr;\n}\n\n.header {\n    \n    background-color: rgba(50, 0, 100, 1);\n    font-weight: bold;\n    grid-area: 1 / 1 / 2 / 3;\n    display: grid;\n    \n    \n    align-items: center;\n\n    \n}\n\n.header, .proj-header {\n    text-align: center;\n    font-size: 2rem;\n    color: white;\n}\n\n.header p {\n    padding: 0;\n    margin: 0;\n}\n\n.header-hamburger {\n    height: 2rem;\n    width: auto;\n    display: none;\n}\n\n/***SIDEBAR***/\n\n.sidebar {\n    grid-area: 2 / 1 / -1 / 2;\n    background-color: rgba(60, 0, 110, 1);\n    display: flex;\n    flex-direction: column;\n}\n\n.sidebar > img {\n    height: 2rem;\n    width: auto;\n    align-self: end;\n    margin: 1rem;\n}\n\n.sidebar > img:hover {\n    cursor: pointer;\n}\n\n.sidebar-header {\n    \n    margin: 0 0.5rem;\n    padding: 0 0 0 1rem;\n    \n    border-bottom: 1px solid white;\n    font-weight: bolder;\n    font-size: 2rem;\n    \n}\n\n.sidebar-header:first-child {\n    margin-top: 2rem;\n}\n\n.entryList {\n    padding: 0 3rem;\n    margin: 1rem 0 1.5rem 0;\n    overflow: auto;\n    max-height: 4.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n}\n\n.entry-container {\n    position: relative;\n    align-self: stretch;\n    display:flex;\n    justify-content: space-between;\n   \n}\n\n.entryList img {\n    height: 1.2rem;\n    width: auto;\n    position: relative;\n    top: 0.15rem;\n    flex: 0;\n}\n\n.entryList img:hover {\n    cursor:pointer;\n}\n\n.del-project {\n    color: black;\n    cursor: pointer;\n    font-size: 0.8rem;\n    align-self: center;\n    font-weight: bolder;\n    \n}\n\n.entry {\n    background: none;\n    border: none;\n    font-size: 1.2rem;\n    text-decoration: underline;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    \n    \n}\n\n.entry:hover {\n    cursor:pointer;\n}\n\n.entry:active {\n    text-decoration: none;\n}\n\n.sidebar-header, .entry {\n    color: white;\n}\n\n.main {\n    grid-area: 2 / 2 / -1 / 3;\n    background-color: rgb(44, 40, 44);\n    display: flex;\n    justify-content: center;\n    \n}\n/***PROJECT AND TASK DISPLAY***/\n.task-card-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.task-card-container > img {\n    height: 2.5rem;\n    width: 2.5rem;\n    align-self: end;\n    margin-right: 1.2rem;\n}\n\n.task-card-container > img:hover {\n    cursor: pointer;\n}\n\n.proj-header {\n    align-self: stretch;\n}\n\n\n\n.task-card {\n    height: 5.2rem;\n    margin: 0.5rem 1rem;\n    background-color: rgba(28,28,30,1);\n    color: white;\n    border-radius: 5px;\n    display: grid;\n    grid-template-columns: 2rem 2fr 1fr;\n    align-items: center;\n    gap: 1rem;\n\n}\n\n.low-priority {\n    border-left: 3px solid green;\n}\n\n.med-priority {\n    border-left: 3px solid orange;\n}\n\n.high-priority {\n    border-left: 3px solid red;\n}\n\n.task-button {\n    border-radius: 100px;\n    height: 1.5rem;\n    width: 1.5rem;\n    grid-column: 1 / 2;\n    margin: 0 0.75rem;\n    cursor: pointer;\n}\n\n.task-desc {\n    grid-column: 2 / 3;\n    justify-self: start;\n    font-size: 1.2rem;\n}\n\n.task-edit {\n    grid-column: 3 / 4;\n    display: flex;\n    justify-content: end;\n    flex-direction: column;\n    align-items: end;\n    margin: 0.75rem 1rem;\n}\n\n.task-tool {\n    display: flex;\n    justify-content: end;\n    \n    gap: 0.75rem;\n\n}\n\n.task-tool img {\n    height: 1.2rem;\n    width: auto;\n    cursor: pointer;\n    \n}\n\n.task-tool p {\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n}\n\n/***NEW PROJECT***/\n.project-card {\n    height: 12rem;\n    width: max(30vw, 20rem);\n    margin: 4rem;\n    background-color: rgba(50,0,90,1);\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.project-card > p, .new-task-card > p {\n    font-size: 2rem;\n    font-weight: bolder;\n    margin: 0;\n    padding: 0;\n}\n\n.new-buttons {\n    display: flex;\n    gap: 0.5rem;\n}\n\n.new-buttons button {\n    flex: 1;\n}\n\n.confirm {\n    background-color: green;\n}\n\n.cancel {\n    background-color: red;\n}\n\n.confirm, .cancel {\n    color: white;\n    font-weight: bolder;\n    border-radius: 5px;\n}\n\n/***NEW TASK***/\n\n.new-task-card {\n    height: 28rem;\n    width: max(60vw, 20rem);\n    margin: 4rem;\n    background-color: rgba(50,0,90,1);\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.text-area {\n    display: flex;\n    flex-direction: column;\n}\n\n.text-area > textarea {\n    height: 8rem;\n    width: 16rem;\n    resize: none;\n}\n\n#priorities > label {\n    font-weight: bolder;\n}\n\n#priorities > label:first-of-type {\n    color: green;\n}\n\n#priorities > label:nth-of-type(2) {\n    color: yellow;\n}\n\n#priorities > label:nth-of-type(3) {\n    color: red;\n}\n\n\n\n@media screen and (max-width: 500px) {\n    .content {\n        grid-template-columns: 1fr;\n        \n    }\n\n    .header {\n        grid-template-columns: 2rem 5fr;\n    }\n    .header-hamburger {\n        display: block;\n    }\n    .sidebar {\n        display: none;\n        \n    }\n\n    #sidebar-menu {\n        display: flex;\n    }\n\n    .main {\n        grid-area: 2 / 1 / -1 / 3;\n        \n    }\n\n    #main-sidebar {\n        grid-area: 3 / 1 / -1 / 3;\n\n    } \n\n    .new-task-card {\n        margin: 1rem;\n    }\n\n    .text-area > textarea {\n        width: 12rem;\n    }\n\n    .task-card {\n        grid-template-columns: 2rem 1fr 1fr;\n        height: calc(15rem - 20vh);\n    }\n\n    /*.content {\n        grid-template-columns: 30vw 4fr;\n    }\n\n    .sidebar-header {\n        font-size: 1.2rem;\n        margin: 0 0.25rem;\n        padding: 0 0 0 0.5rem;\n    }\n\n    .entryList {\n        padding: 0 1.5rem;\n        margin: 0.5rem 0 0.75rem 0;\n    }\n\n    .entry {\n        font-size: 0.8rem;\n    }\n\n    .entryList img {\n        height: 0.8rem;\n    }*/\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["::-webkit-scrollbar {\n    height: 12px;\n    width: 12px;\n    background: rgba(50,0,80,1);\n}\n\n::-webkit-scrollbar-thumb {\n    background: rgba(100,0,150,1);\n    -webkit-border-radius: 5px;\n    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 18rem 4fr;\n    grid-template-rows: 4rem minmax(calc(100vh - 4rem), auto);\n    grid-auto-flow: row;\n    grid-auto-rows: 1fr;\n}\n\n.header {\n    \n    background-color: rgba(50, 0, 100, 1);\n    font-weight: bold;\n    grid-area: 1 / 1 / 2 / 3;\n    display: grid;\n    \n    \n    align-items: center;\n\n    \n}\n\n.header, .proj-header {\n    text-align: center;\n    font-size: 2rem;\n    color: white;\n}\n\n.header p {\n    padding: 0;\n    margin: 0;\n}\n\n.header-hamburger {\n    height: 2rem;\n    width: auto;\n    display: none;\n}\n\n/***SIDEBAR***/\n\n.sidebar {\n    grid-area: 2 / 1 / -1 / 2;\n    background-color: rgba(60, 0, 110, 1);\n    display: flex;\n    flex-direction: column;\n}\n\n.sidebar > img {\n    height: 2rem;\n    width: auto;\n    align-self: end;\n    margin: 1rem;\n}\n\n.sidebar > img:hover {\n    cursor: pointer;\n}\n\n.sidebar-header {\n    \n    margin: 0 0.5rem;\n    padding: 0 0 0 1rem;\n    \n    border-bottom: 1px solid white;\n    font-weight: bolder;\n    font-size: 2rem;\n    \n}\n\n.sidebar-header:first-child {\n    margin-top: 2rem;\n}\n\n.entryList {\n    padding: 0 3rem;\n    margin: 1rem 0 1.5rem 0;\n    overflow: auto;\n    max-height: 4.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n}\n\n.entry-container {\n    position: relative;\n    align-self: stretch;\n    display:flex;\n    justify-content: space-between;\n   \n}\n\n.entryList img {\n    height: 1.2rem;\n    width: auto;\n    position: relative;\n    top: 0.15rem;\n    flex: 0;\n}\n\n.entryList img:hover {\n    cursor:pointer;\n}\n\n.del-project {\n    color: black;\n    cursor: pointer;\n    font-size: 0.8rem;\n    align-self: center;\n    font-weight: bolder;\n    \n}\n\n.entry {\n    background: none;\n    border: none;\n    font-size: 1.2rem;\n    text-decoration: underline;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    \n    \n}\n\n.entry:hover {\n    cursor:pointer;\n}\n\n.entry:active {\n    text-decoration: none;\n}\n\n.sidebar-header, .entry {\n    color: white;\n}\n\n.main {\n    grid-area: 2 / 2 / -1 / 3;\n    background-color: rgb(44, 40, 44);\n    display: flex;\n    justify-content: center;\n    \n}\n/***PROJECT AND TASK DISPLAY***/\n.task-card-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.task-card-container > img {\n    height: 2.5rem;\n    width: 2.5rem;\n    align-self: end;\n    margin-right: 1.2rem;\n}\n\n.task-card-container > img:hover {\n    cursor: pointer;\n}\n\n.proj-header {\n    align-self: stretch;\n}\n\n\n\n.task-card {\n    height: 5.2rem;\n    margin: 0.5rem 1rem;\n    background-color: rgba(28,28,30,1);\n    color: white;\n    border-radius: 5px;\n    display: grid;\n    grid-template-columns: 2rem 2fr 1fr;\n    align-items: center;\n    gap: 1rem;\n\n}\n\n.low-priority {\n    border-left: 3px solid green;\n}\n\n.med-priority {\n    border-left: 3px solid orange;\n}\n\n.high-priority {\n    border-left: 3px solid red;\n}\n\n.task-button {\n    border-radius: 100px;\n    height: 1.5rem;\n    width: 1.5rem;\n    grid-column: 1 / 2;\n    margin: 0 0.75rem;\n    cursor: pointer;\n}\n\n.task-desc {\n    grid-column: 2 / 3;\n    justify-self: start;\n    font-size: 1.2rem;\n}\n\n.task-edit {\n    grid-column: 3 / 4;\n    display: flex;\n    justify-content: end;\n    flex-direction: column;\n    align-items: end;\n    margin: 0.75rem 1rem;\n}\n\n.task-tool {\n    display: flex;\n    justify-content: end;\n    \n    gap: 0.75rem;\n\n}\n\n.task-tool img {\n    height: 1.2rem;\n    width: auto;\n    cursor: pointer;\n    \n}\n\n.task-tool p {\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n}\n\n/***NEW PROJECT***/\n.project-card {\n    height: 12rem;\n    width: max(30vw, 20rem);\n    margin: 4rem;\n    background-color: rgba(50,0,90,1);\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.project-card > p, .new-task-card > p {\n    font-size: 2rem;\n    font-weight: bolder;\n    margin: 0;\n    padding: 0;\n}\n\n.new-buttons {\n    display: flex;\n    gap: 0.5rem;\n}\n\n.new-buttons button {\n    flex: 1;\n}\n\n.confirm {\n    background-color: green;\n}\n\n.cancel {\n    background-color: red;\n}\n\n.confirm, .cancel {\n    color: white;\n    font-weight: bolder;\n    border-radius: 5px;\n}\n\n/***NEW TASK***/\n\n.new-task-card {\n    height: 28rem;\n    width: max(60vw, 20rem);\n    margin: 4rem;\n    background-color: rgba(50,0,90,1);\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.text-area {\n    display: flex;\n    flex-direction: column;\n}\n\n.text-area > textarea {\n    height: 8rem;\n    width: 16rem;\n    resize: none;\n}\n\n#priorities > label {\n    font-weight: bolder;\n}\n\n#priorities > label:first-of-type {\n    color: green;\n}\n\n#priorities > label:nth-of-type(2) {\n    color: yellow;\n}\n\n#priorities > label:nth-of-type(3) {\n    color: red;\n}\n\n\n\n@media screen and (max-width: 500px) {\n    .content {\n        grid-template-columns: 1fr;\n        \n    }\n\n    .header {\n        grid-template-columns: 2rem 5fr;\n    }\n    .header-hamburger {\n        display: block;\n    }\n    .sidebar {\n        display: none;\n        \n    }\n\n    #sidebar-menu {\n        display: flex;\n    }\n\n    .main {\n        grid-area: 2 / 1 / -1 / 3;\n        \n    }\n\n    #main-sidebar {\n        grid-area: 3 / 1 / -1 / 3;\n\n    } \n\n    .new-task-card {\n        margin: 1rem;\n    }\n\n    .text-area > textarea {\n        width: 12rem;\n    }\n\n    .task-card {\n        grid-template-columns: 2rem 1fr 1fr;\n        height: calc(15rem - 20vh);\n    }\n\n    /*.content {\n        grid-template-columns: 30vw 4fr;\n    }\n\n    .sidebar-header {\n        font-size: 1.2rem;\n        margin: 0 0.25rem;\n        padding: 0 0 0 0.5rem;\n    }\n\n    .entryList {\n        padding: 0 1.5rem;\n        margin: 0.5rem 0 0.75rem 0;\n    }\n\n    .entry {\n        font-size: 0.8rem;\n    }\n\n    .entryList img {\n        height: 0.8rem;\n    }*/\n}\n"],"sourceRoot":""}]);
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




class Inbox {

    projectArray = [];

    constructor(id, title) {
        this.id = id;
        this.title = title;
        
    }

    makeInbox() {
        
        
        const inbox = document.createElement("div");
    
        const inboxTitle = document.createElement("p");
        inboxTitle.setAttribute("class", "sidebar-header");
        inboxTitle.textContent = this.title;
        inbox.appendChild(inboxTitle);
    
        const entryList = document.createElement("div");
        entryList.setAttribute("class", "entryList");
        entryList.setAttribute("id", this.id);
        inbox.appendChild(entryList);
    
        return {inbox: inbox, entryList: entryList};
    
    }

    //Displays a single project in the sidebar
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
                const favorites = document.querySelector("#favorites");
                favorites.removeChild(favorites.querySelector(`#id${project.id}`));
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
            const favorites = document.querySelector("#favorites");
            if (project.favorited) {  
                star.src = _star_four_points_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
                favorites.removeChild(favorites.querySelector(`#id${project.id}`));
                
            } else {
                star.src = _star_four_points_png__WEBPACK_IMPORTED_MODULE_1__;
                favorites.appendChild(entryCon);
                
            }

            project.favorited = !project.favorited;
            this.displayProjects(entryList);

            
        })
        
        
        
        
    }

    displayProjects(entryList) {

        while (entryList.firstChild) {
            entryList.removeChild(entryList.firstChild);
        }
        for (let i = 0; i < this.projectArray.length; i++) {
            const project = this.projectArray[i];
            this.#displayProject(entryList, project);

        }
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inbox);

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
/* harmony import */ var date_fns_isAfter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/isAfter */ "./node_modules/date-fns/esm/isAfter/index.js");






//Makes changes to the DOM in order to display tasks of a project

class ProjectDom {
    

    //Displays task for a given project
    displayTaskCard(project, task) {
        const taskCard = document.createElement("div");
        taskCard.setAttribute("class", "task-card");
        taskCard.setAttribute("id", task.id);

        let pressed = false;
        const taskButton = document.createElement("button");
        taskButton.setAttribute("class", "task-button");
        taskButton.addEventListener("click", () => {
            if (!pressed) {
                taskDesc.style.textDecoration = "line-through";
                taskButton.style.backgroundColor = "rgba(90, 0, 140, 1)";
                pressed = !pressed;
            } else {
                taskDesc.style.textDecoration = "none";
                taskButton.style.backgroundColor = "white";
                pressed = !pressed;

            }
        })
        taskCard.appendChild(taskButton);

        const taskDesc = document.createElement("div");
        taskDesc.setAttribute("class", "task-desc");
        taskDesc.textContent = task.name;
        taskCard.appendChild(taskDesc);

        const taskEdit = document.createElement("div");
        taskEdit.setAttribute("class", "task-edit");

        const taskTools = document.createElement("div");
        taskTools.setAttribute("class", "task-tool");

        
        const taskDate = task.dueDate.split("-");
        const dueDate = document.createElement("p");
        dueDate.textContent = `Due Date: ${task.dueDate}`;
        //sets due date field to red if it's past due.
        if ((0,date_fns_isAfter__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), new Date(taskDate[0], taskDate[1]-1, taskDate[2]))) {
            dueDate.style.color = "red";
        }
        taskTools.appendChild(dueDate);

        const edit = new Image();
        edit.src = _text_box_edit_outline_png__WEBPACK_IMPORTED_MODULE_0__;
        edit.addEventListener("click", () => {
            const taskDom = new _TaskDom_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
            const main = document.querySelector(".main");
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
            const project = new _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"](projInput.value);
            inbox.projectArray.push(project);
            inbox.displayProjects(entryList);
            
            while (main.firstChild) {
                main.removeChild(main.firstChild);
            }
            main.appendChild(this.displayProjectData(project));
        })
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
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/Task.js");
/* harmony import */ var _ProjectDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectDom */ "./src/ProjectDom.js");
//Makes changes to the DOM in order to display the create/edit task screen




class TaskDom {
    createTask(project) {

    const proj = new _ProjectDom__WEBPACK_IMPORTED_MODULE_1__["default"]();
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
        project.taskArray.push(new _Task__WEBPACK_IMPORTED_MODULE_0__["default"](taskNameInput.value, taskDescInput.value, taskDueDateInput.value,
             document.querySelector("input[name='p']:checked").value));
             while (main.firstChild) {
                main.removeChild(main.firstChild);
            }
            main.appendChild(proj.displayProjectData(project));

    })
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

    editTask(project, task) {

        const proj = new _ProjectDom__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const main = document.querySelector(".main");
    //New Task Dashboard
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
        task.name = taskNameInput.value;
        task.description = taskDescInput.value;
        task.dueDate = taskDueDateInput.value;
        task.priority = document.querySelector("input[name='p']:checked").value;

             while (main.firstChild) {
                main.removeChild(main.firstChild);
            }
            main.appendChild(proj.displayProjectData(project));

    })
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
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");
/* harmony import */ var _ProjectDom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectDom.js */ "./src/ProjectDom.js");








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
    
    const proj = new _ProjectDom_js__WEBPACK_IMPORTED_MODULE_5__["default"]();

    const sidebar = document.createElement("div");
    sidebar.setAttribute("class", "sidebar");

    const plus = new Image();
    plus.src = _plus_png__WEBPACK_IMPORTED_MODULE_3__;
    plus.addEventListener("click", () => {
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
        main.appendChild(proj.createProject(projects, project.entryList));
    })

    sidebar.appendChild(plus);

    const projects = new _Inbox_js__WEBPACK_IMPORTED_MODULE_1__["default"]("inbox", "All Projects");
    const testProject = new _Project_js__WEBPACK_IMPORTED_MODULE_4__["default"]("Test", []);
    //Pushes test project to inbox to display below
    projects.projectArray.push(testProject);
    const project = projects.makeInbox();
    projects.displayProjects(project.entryList);
    sidebar.appendChild(project.inbox);

    const favorites = new _Inbox_js__WEBPACK_IMPORTED_MODULE_1__["default"]("favorites", "Favorites");
    const favorite = favorites.makeInbox();
    sidebar.appendChild(favorite.inbox);


    const main = document.createElement('div');
    main.setAttribute("class", "main");

    content.appendChild(header);
    content.appendChild(sidebar);
    content.appendChild(main);

    
    
    return content;
}

document.body.appendChild(webpage());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLGFBQWEsYUFBYSxlQUFlLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxhQUFhLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksU0FBUyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FB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Ozs7Ozs7OztBQ0FzQjtBQUNTO0FBQ0Q7QUFDQTtBQUNLO0FBQ007OztBQUd6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQ0FBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzREFBVTs7QUFFL0I7QUFDQTs7QUFFQTtBQUNBLGVBQWUsc0NBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUEseUJBQXlCLGlEQUFLO0FBQzlCLDRCQUE0QixtREFBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixpREFBSztBQUMvQjtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzQWZ0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9JbmJveC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvUHJvamVjdERvbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvVGFzay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvVGFza0RvbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTAsMCw4MCwxKTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAwLDAsMTUwLDEpO1xcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMThyZW0gNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gbWlubWF4KGNhbGMoMTAwdmggLSA0cmVtKSwgYXV0byk7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwgMCwgMTAwLCAxKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgXFxuICAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBcXG59XFxuXFxuLmhlYWRlciwgLnByb2otaGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhlYWRlciBwIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVhZGVyLWhhbWJ1cmdlciB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKipTSURFQkFSKioqL1xcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIC0xIC8gMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MCwgMCwgMTEwLCAxKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNpZGViYXIgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLnNpZGViYXIgPiBpbWc6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlYmFyLWhlYWRlciB7XFxuICAgIFxcbiAgICBtYXJnaW46IDAgMC41cmVtO1xcbiAgICBwYWRkaW5nOiAwIDAgMCAxcmVtO1xcbiAgICBcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIFxcbn1cXG5cXG4uc2lkZWJhci1oZWFkZXI6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uZW50cnlMaXN0IHtcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcbiAgICBtYXJnaW46IDFyZW0gMCAxLjVyZW0gMDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDQuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4uZW50cnktY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICBcXG59XFxuXFxuLmVudHJ5TGlzdCBpbWcge1xcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwLjE1cmVtO1xcbiAgICBmbGV4OiAwO1xcbn1cXG5cXG4uZW50cnlMaXN0IGltZzpob3ZlciB7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4uZGVsLXByb2plY3Qge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgXFxufVxcblxcbi5lbnRyeSB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4uZW50cnk6aG92ZXIge1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuLmVudHJ5OmFjdGl2ZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnNpZGViYXItaGVhZGVyLCAuZW50cnkge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0xIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ0LCA0MCwgNDQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxufVxcbi8qKipQUk9KRUNUIEFORCBUQVNLIERJU1BMQVkqKiovXFxuLnRhc2stY2FyZC1jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stY2FyZC1jb250YWluZXIgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcXG59XFxuXFxuLnRhc2stY2FyZC1jb250YWluZXIgPiBpbWc6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qLWhlYWRlciB7XFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxufVxcblxcblxcblxcbi50YXNrLWNhcmQge1xcbiAgICBoZWlnaHQ6IDUuMnJlbTtcXG4gICAgbWFyZ2luOiAwLjVyZW0gMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOCwyOCwzMCwxKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMnJlbSAyZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuXFxufVxcblxcbi5sb3ctcHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4ubWVkLXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBvcmFuZ2U7XFxufVxcblxcbi5oaWdoLXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZWQ7XFxufVxcblxcbi50YXNrLWJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBtYXJnaW46IDAgMC43NXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1kZXNjIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnRhc2stZWRpdCB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIG1hcmdpbjogMC43NXJlbSAxcmVtO1xcbn1cXG5cXG4udGFzay10b29sIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIFxcbiAgICBnYXA6IDAuNzVyZW07XFxuXFxufVxcblxcbi50YXNrLXRvb2wgaW1nIHtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIFxcbn1cXG5cXG4udGFzay10b29sIHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyoqKk5FVyBQUk9KRUNUKioqL1xcbi5wcm9qZWN0LWNhcmQge1xcbiAgICBoZWlnaHQ6IDEycmVtO1xcbiAgICB3aWR0aDogbWF4KDMwdncsIDIwcmVtKTtcXG4gICAgbWFyZ2luOiA0cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLDAsOTAsMSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQgPiBwLCAubmV3LXRhc2stY2FyZCA+IHAge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLm5ldy1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5uZXctYnV0dG9ucyBidXR0b24ge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uY29uZmlybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uY29uZmlybSwgLmNhbmNlbCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4vKioqTkVXIFRBU0sqKiovXFxuXFxuLm5ldy10YXNrLWNhcmQge1xcbiAgICBoZWlnaHQ6IDI4cmVtO1xcbiAgICB3aWR0aDogbWF4KDYwdncsIDIwcmVtKTtcXG4gICAgbWFyZ2luOiA0cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLDAsOTAsMSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi50ZXh0LWFyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGV4dC1hcmVhID4gdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIHdpZHRoOiAxNnJlbTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4jcHJpb3JpdGllcyA+IGxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuI3ByaW9yaXRpZXMgPiBsYWJlbDpmaXJzdC1vZi10eXBlIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4jcHJpb3JpdGllcyA+IGxhYmVsOm50aC1vZi10eXBlKDIpIHtcXG4gICAgY29sb3I6IHllbGxvdztcXG59XFxuXFxuI3ByaW9yaXRpZXMgPiBsYWJlbDpudGgtb2YtdHlwZSgzKSB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJyZW0gNWZyO1xcbiAgICB9XFxuICAgIC5oZWFkZXItaGFtYnVyZ2VyIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICAgIC5zaWRlYmFyIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAjc2lkZWJhci1tZW51IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgLm1haW4ge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIC0xIC8gMztcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgICNtYWluLXNpZGViYXIge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAzIC8gMSAvIC0xIC8gMztcXG5cXG4gICAgfSBcXG5cXG4gICAgLm5ldy10YXNrLWNhcmQge1xcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIC50ZXh0LWFyZWEgPiB0ZXh0YXJlYSB7XFxuICAgICAgICB3aWR0aDogMTJyZW07XFxuICAgIH1cXG5cXG4gICAgLnRhc2stY2FyZCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJyZW0gMWZyIDFmcjtcXG4gICAgICAgIGhlaWdodDogY2FsYygxNXJlbSAtIDIwdmgpO1xcbiAgICB9XFxuXFxuICAgIC8qLmNvbnRlbnQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHZ3IDRmcjtcXG4gICAgfVxcblxcbiAgICAuc2lkZWJhci1oZWFkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgICBtYXJnaW46IDAgMC4yNXJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDAuNXJlbTtcXG4gICAgfVxcblxcbiAgICAuZW50cnlMaXN0IHtcXG4gICAgICAgIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gMCAwLjc1cmVtIDA7XFxuICAgIH1cXG5cXG4gICAgLmVudHJ5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB9XFxuXFxuICAgIC5lbnRyeUxpc3QgaW1nIHtcXG4gICAgICAgIGhlaWdodDogMC44cmVtO1xcbiAgICB9Ki9cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsbURBQW1EO0FBQ3ZEOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMseURBQXlEO0lBQ3pELG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUkscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsYUFBYTs7O0lBR2IsbUJBQW1COzs7QUFHdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0FBQ2pC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QUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUEsZUFBZTs7QUFFZjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7O0FBSUE7SUFDSTtRQUNJLDBCQUEwQjs7SUFFOUI7O0lBRUE7UUFDSSwrQkFBK0I7SUFDbkM7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7O0lBRWpCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHlCQUF5Qjs7SUFFN0I7O0lBRUE7UUFDSSx5QkFBeUI7O0lBRTdCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxtQ0FBbUM7UUFDbkMsMEJBQTBCO0lBQzlCOztJQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFxQkU7QUFDTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgaGVpZ2h0OiAxMnB4O1xcbiAgICB3aWR0aDogMTJweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg1MCwwLDgwLDEpO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDAsMCwxNTAsMSk7XFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxOHJlbSA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSBtaW5tYXgoY2FsYygxMDB2aCAtIDRyZW0pLCBhdXRvKTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCAwLCAxMDAsIDEpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBcXG4gICAgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIFxcbn1cXG5cXG4uaGVhZGVyLCAucHJvai1oZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGVhZGVyIHAge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5oZWFkZXItaGFtYnVyZ2VyIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqKlNJREVCQVIqKiovXFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gLTEgLyAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYwLCAwLCAxMTAsIDEpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2lkZWJhciA+IGltZyB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uc2lkZWJhciA+IGltZzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGViYXItaGVhZGVyIHtcXG4gICAgXFxuICAgIG1hcmdpbjogMCAwLjVyZW07XFxuICAgIHBhZGRpbmc6IDAgMCAwIDFyZW07XFxuICAgIFxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgXFxufVxcblxcbi5zaWRlYmFyLWhlYWRlcjpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi5lbnRyeUxpc3Qge1xcbiAgICBwYWRkaW5nOiAwIDNyZW07XFxuICAgIG1hcmdpbjogMXJlbSAwIDEuNXJlbSAwO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgbWF4LWhlaWdodDogNC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbi5lbnRyeS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgIFxcbn1cXG5cXG4uZW50cnlMaXN0IGltZyB7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDAuMTVyZW07XFxuICAgIGZsZXg6IDA7XFxufVxcblxcbi5lbnRyeUxpc3QgaW1nOmhvdmVyIHtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbi5kZWwtcHJvamVjdCB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBcXG59XFxuXFxuLmVudHJ5IHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBcXG4gICAgXFxufVxcblxcbi5lbnRyeTpob3ZlciB7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4uZW50cnk6YWN0aXZlIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uc2lkZWJhci1oZWFkZXIsIC5lbnRyeSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gLTEgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDQsIDQwLCA0NCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBcXG59XFxuLyoqKlBST0pFQ1QgQU5EIFRBU0sgRElTUExBWSoqKi9cXG4udGFzay1jYXJkLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udGFzay1jYXJkLWNvbnRhaW5lciA+IGltZyB7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICB3aWR0aDogMi41cmVtO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIG1hcmdpbi1yaWdodDogMS4ycmVtO1xcbn1cXG5cXG4udGFzay1jYXJkLWNvbnRhaW5lciA+IGltZzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2otaGVhZGVyIHtcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG59XFxuXFxuXFxuXFxuLnRhc2stY2FyZCB7XFxuICAgIGhlaWdodDogNS4ycmVtO1xcbiAgICBtYXJnaW46IDAuNXJlbSAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI4LDI4LDMwLDEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAycmVtIDJmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG5cXG59XFxuXFxuLmxvdy1wcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgZ3JlZW47XFxufVxcblxcbi5tZWQtcHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIG9yYW5nZTtcXG59XFxuXFxuLmhpZ2gtcHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnRhc2stYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIG1hcmdpbjogMCAwLjc1cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWRlc2Mge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4udGFzay1lZGl0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgbWFyZ2luOiAwLjc1cmVtIDFyZW07XFxufVxcblxcbi50YXNrLXRvb2wge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgXFxuICAgIGdhcDogMC43NXJlbTtcXG5cXG59XFxuXFxuLnRhc2stdG9vbCBpbWcge1xcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgXFxufVxcblxcbi50YXNrLXRvb2wgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKioqTkVXIFBST0pFQ1QqKiovXFxuLnByb2plY3QtY2FyZCB7XFxuICAgIGhlaWdodDogMTJyZW07XFxuICAgIHdpZHRoOiBtYXgoMzB2dywgMjByZW0pO1xcbiAgICBtYXJnaW46IDRyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsMCw5MCwxKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnByb2plY3QtY2FyZCA+IHAsIC5uZXctdGFzay1jYXJkID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubmV3LWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLm5ldy1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5jb25maXJtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5jb25maXJtLCAuY2FuY2VsIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qKipORVcgVEFTSyoqKi9cXG5cXG4ubmV3LXRhc2stY2FyZCB7XFxuICAgIGhlaWdodDogMjhyZW07XFxuICAgIHdpZHRoOiBtYXgoNjB2dywgMjByZW0pO1xcbiAgICBtYXJnaW46IDRyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsMCw5MCwxKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnRleHQtYXJlYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50ZXh0LWFyZWEgPiB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gICAgd2lkdGg6IDE2cmVtO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbiNwcmlvcml0aWVzID4gbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4jcHJpb3JpdGllcyA+IGxhYmVsOmZpcnN0LW9mLXR5cGUge1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbiNwcmlvcml0aWVzID4gbGFiZWw6bnRoLW9mLXR5cGUoMikge1xcbiAgICBjb2xvcjogeWVsbG93O1xcbn1cXG5cXG4jcHJpb3JpdGllcyA+IGxhYmVsOm50aC1vZi10eXBlKDMpIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMnJlbSA1ZnI7XFxuICAgIH1cXG4gICAgLmhlYWRlci1oYW1idXJnZXIge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgLnNpZGViYXIge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgICNzaWRlYmFyLW1lbnUge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICAubWFpbiB7XFxuICAgICAgICBncmlkLWFyZWE6IDIgLyAxIC8gLTEgLyAzO1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgI21haW4tc2lkZWJhciB7XFxuICAgICAgICBncmlkLWFyZWE6IDMgLyAxIC8gLTEgLyAzO1xcblxcbiAgICB9IFxcblxcbiAgICAubmV3LXRhc2stY2FyZCB7XFxuICAgICAgICBtYXJnaW46IDFyZW07XFxuICAgIH1cXG5cXG4gICAgLnRleHQtYXJlYSA+IHRleHRhcmVhIHtcXG4gICAgICAgIHdpZHRoOiAxMnJlbTtcXG4gICAgfVxcblxcbiAgICAudGFzay1jYXJkIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMnJlbSAxZnIgMWZyO1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDE1cmVtIC0gMjB2aCk7XFxuICAgIH1cXG5cXG4gICAgLyouY29udGVudCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwdncgNGZyO1xcbiAgICB9XFxuXFxuICAgIC5zaWRlYmFyLWhlYWRlciB7XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgIG1hcmdpbjogMCAwLjI1cmVtO1xcbiAgICAgICAgcGFkZGluZzogMCAwIDAgMC41cmVtO1xcbiAgICB9XFxuXFxuICAgIC5lbnRyeUxpc3Qge1xcbiAgICAgICAgcGFkZGluZzogMCAxLjVyZW07XFxuICAgICAgICBtYXJnaW46IDAuNXJlbSAwIDAuNzVyZW0gMDtcXG4gICAgfVxcblxcbiAgICAuZW50cnkge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIH1cXG5cXG4gICAgLmVudHJ5TGlzdCBpbWcge1xcbiAgICAgICAgaGVpZ2h0OiAwLjhyZW07XFxuICAgIH0qL1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0FmdGVyXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBmaXJzdCBkYXRlIGFmdGVyIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGFmdGVyIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMTAgSnVseSAxOTg5IGFmdGVyIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiBjb25zdCByZXN1bHQgPSBpc0FmdGVyKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBZnRlcihkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpID4gZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBVbmZpbGxlZFN0YXIgZnJvbSAnLi9zdGFyLWZvdXItcG9pbnRzLW91dGxpbmUuc3ZnJztcbmltcG9ydCBTdGFyIGZyb20gJy4vc3Rhci1mb3VyLXBvaW50cy5wbmcnO1xuaW1wb3J0IFByb2plY3REb20gZnJvbSAnLi9Qcm9qZWN0RG9tLmpzJztcblxuY2xhc3MgSW5ib3gge1xuXG4gICAgcHJvamVjdEFycmF5ID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIFxuICAgIH1cblxuICAgIG1ha2VJbmJveCgpIHtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgXG4gICAgICAgIGNvbnN0IGluYm94VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgaW5ib3hUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNpZGViYXItaGVhZGVyXCIpO1xuICAgICAgICBpbmJveFRpdGxlLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcbiAgICAgICAgaW5ib3guYXBwZW5kQ2hpbGQoaW5ib3hUaXRsZSk7XG4gICAgXG4gICAgICAgIGNvbnN0IGVudHJ5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGVudHJ5TGlzdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVudHJ5TGlzdFwiKTtcbiAgICAgICAgZW50cnlMaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIHRoaXMuaWQpO1xuICAgICAgICBpbmJveC5hcHBlbmRDaGlsZChlbnRyeUxpc3QpO1xuICAgIFxuICAgICAgICByZXR1cm4ge2luYm94OiBpbmJveCwgZW50cnlMaXN0OiBlbnRyeUxpc3R9O1xuICAgIFxuICAgIH1cblxuICAgIC8vRGlzcGxheXMgYSBzaW5nbGUgcHJvamVjdCBpbiB0aGUgc2lkZWJhclxuICAgICNkaXNwbGF5UHJvamVjdChlbnRyeUxpc3QsIHByb2plY3QpIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2ogPSBuZXcgUHJvamVjdERvbSgpO1xuXG5cbiAgICAgICAgY29uc3QgZW50cnlDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBlbnRyeUNvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVudHJ5LWNvbnRhaW5lclwiKTtcbiAgICAgICAgZW50cnlDb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGlkJHtwcm9qZWN0LmlkfWApO1xuICAgICAgICBjb25zdCBkZWxFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBkZWxFbnRyeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlbC1wcm9qZWN0XCIpO1xuICAgICAgICBkZWxFbnRyeS50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgICAgICAvL0RlbGV0ZXMgcHJvamVjdCBmcm9tIHNpZGVib2FyZCBhbmQgZGlzcGxheXMgZmlyc3QgcHJvamVjdCBpbiBsaXN0IGlmIGFwcGxpY2FibGUuIE90aGVyd2lzZSBpdCBjbGVhcnMgdGhlIG1haW4gRE9NLlxuICAgICAgICBkZWxFbnRyeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmZhdm9yaXRlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZhdm9yaXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmF2b3JpdGVzXCIpO1xuICAgICAgICAgICAgICAgIGZhdm9yaXRlcy5yZW1vdmVDaGlsZChmYXZvcml0ZXMucXVlcnlTZWxlY3RvcihgI2lkJHtwcm9qZWN0LmlkfWApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0QXJyYXkuc3BsaWNlKHRoaXMucHJvamVjdEFycmF5LmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5UHJvamVjdHMoZW50cnlMaXN0KTtcblxuICAgICAgICAgICAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb2plY3RBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qLmRpc3BsYXlQcm9qZWN0RGF0YSh0aGlzLnByb2plY3RBcnJheVswXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgZW50cnlDb24uYXBwZW5kQ2hpbGQoZGVsRW50cnkpO1xuXG4gICAgICAgIGNvbnN0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlbnRyeVwiKTtcbiAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvamVjdC5pZCk7XG4gICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBlbnRyeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvai5kaXNwbGF5UHJvamVjdERhdGEocHJvamVjdCkpO1xuICAgICAgICB9KVxuICAgICAgICBlbnRyeUNvbi5hcHBlbmRDaGlsZChlbnRyeSk7XG5cbiAgICAgICAgY29uc3Qgc3RhciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpZiAoIXByb2plY3QuZmF2b3JpdGVkKSB7ICBcbiAgICAgICAgICAgIHN0YXIuc3JjID0gVW5maWxsZWRTdGFyO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGFyLnNyYyA9IFN0YXI7XG4gICAgICAgIH1cblxuICAgICAgICBlbnRyeUNvbi5hcHBlbmRDaGlsZChzdGFyKTtcbiAgICAgICAgZW50cnlMaXN0LmFwcGVuZENoaWxkKGVudHJ5Q29uKTtcblxuICAgICAgICAvL0FkZHMgLyByZW1vdmVzIGVudHJ5IGZyb20gdGhlIGZhdm9yaXRlcyBzZWN0aW9uXG4gICAgICAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZhdm9yaXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmF2b3JpdGVzXCIpO1xuICAgICAgICAgICAgaWYgKHByb2plY3QuZmF2b3JpdGVkKSB7ICBcbiAgICAgICAgICAgICAgICBzdGFyLnNyYyA9IFVuZmlsbGVkU3RhcjtcbiAgICAgICAgICAgICAgICBmYXZvcml0ZXMucmVtb3ZlQ2hpbGQoZmF2b3JpdGVzLnF1ZXJ5U2VsZWN0b3IoYCNpZCR7cHJvamVjdC5pZH1gKSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXIuc3JjID0gU3RhcjtcbiAgICAgICAgICAgICAgICBmYXZvcml0ZXMuYXBwZW5kQ2hpbGQoZW50cnlDb24pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm9qZWN0LmZhdm9yaXRlZCA9ICFwcm9qZWN0LmZhdm9yaXRlZDtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVByb2plY3RzKGVudHJ5TGlzdCk7XG5cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICBkaXNwbGF5UHJvamVjdHMoZW50cnlMaXN0KSB7XG5cbiAgICAgICAgd2hpbGUgKGVudHJ5TGlzdC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBlbnRyeUxpc3QucmVtb3ZlQ2hpbGQoZW50cnlMaXN0LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RBcnJheVtpXTtcbiAgICAgICAgICAgIHRoaXMuI2Rpc3BsYXlQcm9qZWN0KGVudHJ5TGlzdCwgcHJvamVjdCk7XG5cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmJveDsiLCJjbGFzcyBQcm9qZWN0IHtcbiAgICBzdGF0aWMgaWQgPSAxO1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHRhc2tBcnJheT1bXSwgZmF2b3JpdGVkPWZhbHNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGFza0FycmF5ID0gdGFza0FycmF5O1xuICAgICAgICB0aGlzLmZhdm9yaXRlZCA9IGZhdm9yaXRlZDtcbiAgICAgICAgdGhpcy5pZCA9IFByb2plY3QuaWQ7XG4gICAgICAgIFByb2plY3QuaWQgKz0gMTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7IiwiaW1wb3J0IEVkaXQgZnJvbSAnLi90ZXh0LWJveC1lZGl0LW91dGxpbmUucG5nJztcbmltcG9ydCBDUGx1cyBmcm9tICcuL3BsdXMtY2lyY2xlLnBuZyc7XG5pbXBvcnQgVGFza0RvbSBmcm9tICcuL1Rhc2tEb20uanMnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0LmpzJztcbmltcG9ydCBpc0FmdGVyIGZyb20gJ2RhdGUtZm5zL2lzQWZ0ZXInO1xuXG4vL01ha2VzIGNoYW5nZXMgdG8gdGhlIERPTSBpbiBvcmRlciB0byBkaXNwbGF5IHRhc2tzIG9mIGEgcHJvamVjdFxuXG5jbGFzcyBQcm9qZWN0RG9tIHtcbiAgICBcblxuICAgIC8vRGlzcGxheXMgdGFzayBmb3IgYSBnaXZlbiBwcm9qZWN0XG4gICAgZGlzcGxheVRhc2tDYXJkKHByb2plY3QsIHRhc2spIHtcbiAgICAgICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrQ2FyZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stY2FyZFwiKTtcbiAgICAgICAgdGFza0NhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgdGFzay5pZCk7XG5cbiAgICAgICAgbGV0IHByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgdGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHRhc2tCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWJ1dHRvblwiKTtcbiAgICAgICAgdGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFwcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgdGFza0Rlc2Muc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xuICAgICAgICAgICAgICAgIHRhc2tCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDkwLCAwLCAxNDAsIDEpXCI7XG4gICAgICAgICAgICAgICAgcHJlc3NlZCA9ICFwcmVzc2VkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXNrRGVzYy5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIHRhc2tCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgICAgIHByZXNzZWQgPSAhcHJlc3NlZDtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uKTtcblxuICAgICAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tEZXNjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay1kZXNjXCIpO1xuICAgICAgICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza0Rlc2MpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0VkaXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWVkaXRcIik7XG5cbiAgICAgICAgY29uc3QgdGFza1Rvb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza1Rvb2xzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay10b29sXCIpO1xuXG4gICAgICAgIFxuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IHRhc2suZHVlRGF0ZS5zcGxpdChcIi1cIik7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHt0YXNrLmR1ZURhdGV9YDtcbiAgICAgICAgLy9zZXRzIGR1ZSBkYXRlIGZpZWxkIHRvIHJlZCBpZiBpdCdzIHBhc3QgZHVlLlxuICAgICAgICBpZiAoaXNBZnRlcihuZXcgRGF0ZSgpLCBuZXcgRGF0ZSh0YXNrRGF0ZVswXSwgdGFza0RhdGVbMV0tMSwgdGFza0RhdGVbMl0pKSkge1xuICAgICAgICAgICAgZHVlRGF0ZS5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGFza1Rvb2xzLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgICAgIGNvbnN0IGVkaXQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgZWRpdC5zcmMgPSBFZGl0O1xuICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrRG9tID0gbmV3IFRhc2tEb20oKTtcbiAgICAgICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodGFza0RvbS5lZGl0VGFzayhwcm9qZWN0LCB0YXNrKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgdGFza1Rvb2xzLmFwcGVuZENoaWxkKGVkaXQpO1xuXG4gICAgICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkZWwudGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkZWwuY2xvc2VzdChcIi50YXNrLWNhcmQtY29udGFpbmVyXCIpLnJlbW92ZUNoaWxkKHRhc2tDYXJkKTtcbiAgICAgICAgICAgIHByb2plY3QudGFza0FycmF5LnNwbGljZShwcm9qZWN0LnRhc2tBcnJheS5pbmRleE9mKHRhc2spLCAxKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGFza1Rvb2xzLmFwcGVuZENoaWxkKGRlbCk7XG4gICAgICAgIHRhc2tFZGl0LmFwcGVuZENoaWxkKHRhc2tUb29scyk7XG5cblxuICAgICAgICBjb25zdCBwcmkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcHJpLnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcbiAgICAgICAgc3dpdGNoIChwcmkudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJNZWRpdW0gUHJpb3JpdHlcIjpcbiAgICAgICAgICAgICAgICB0YXNrQ2FyZC5jbGFzc05hbWUgKz0gXCIgbWVkLXByaW9yaXR5XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiSGlnaCBQcmlvcml0eVwiOlxuICAgICAgICAgICAgICAgIHRhc2tDYXJkLmNsYXNzTmFtZSArPSBcIiBoaWdoLXByaW9yaXR5XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRhc2tDYXJkLmNsYXNzTmFtZSArPSBcIiBsb3ctcHJpb3JpdHlcIjtcblxuICAgICAgICB9XG4gICAgICAgIHRhc2tFZGl0LmFwcGVuZENoaWxkKHByaSk7XG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tFZGl0KTtcblxuICAgICAgICByZXR1cm4gdGFza0NhcmQ7XG4gICAgfVxuXG4gICAgZGlzcGxheVByb2plY3REYXRhKHByb2plY3QpIHtcbiAgICAgICAgLy9Qcm9qZWN0IGFuZCB0YXNrcyBkYXNoYm9hcmRcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWNhcmQtY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBwcm9qSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHByb2pIZWFkZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInByb2otaGVhZGVyXCIpO1xuICAgICAgICBwcm9qSGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2pIZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IGNQbHVzID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGNQbHVzLnNyYyA9IENQbHVzO1xuICAgICAgICBjUGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrRG9tKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodGFzay5jcmVhdGVUYXNrKHByb2plY3QpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNQbHVzKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QudGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZGlzcGxheVRhc2tDYXJkKHByb2plY3QsIHByb2plY3QudGFza0FycmF5W2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy90YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZGlzcGxheVRhc2tDYXJkKG5ldyBUYXNrKFwiVGFza05hbWVcIiwgXCJUaGlzIGlzIGEgdGVzdCBkZXNjcmlwdGlvblwiLCBcIjEyLzExLzIwMjJcIiwgXCJMb3cgUHJpb3JpdHlcIikpKTtcblxuXG4gICAgICAgcmV0dXJuIHRhc2tDb250YWluZXI7XG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZVByb2plY3QoaW5ib3gsIGVudHJ5TGlzdCkge1xuICAgICAgICAgLy9OZXcgUHJvamVjdCBEYXNoYm9hcmRcbiAgICAgICAgY29uc3QgbmV3UHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5ld1Byb2ouc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0LWNhcmRcIik7XG5cbiAgICAgICAgY29uc3QgcHJvalRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHByb2pUaXRsZS50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIjtcbiAgICAgICAgbmV3UHJvai5hcHBlbmRDaGlsZChwcm9qVGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IHByb2pGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHByb2pMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgcHJvakxhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IE5hbWU6IFwiO1xuICAgICAgICBwcm9qTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmV3LXByb2pcIik7XG4gICAgICAgIHByb2pGaWVsZC5hcHBlbmRDaGlsZChwcm9qTGFiZWwpO1xuXG4gICAgICAgIGNvbnN0IHByb2pJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgcHJvaklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LXByb2pcIik7XG4gICAgICAgIHByb2pJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk1heCAyMCBjaGFyc1wiKTtcbiAgICAgICAgcHJvaklucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjIwXCIpO1xuICAgICAgICBwcm9qRmllbGQuYXBwZW5kQ2hpbGQocHJvaklucHV0KTtcbiAgICAgICAgbmV3UHJvai5hcHBlbmRDaGlsZChwcm9qRmllbGQpO1xuXG5cbiAgICAgICAgLy9Qcm9qZWN0IEJ1dHRvbnNcbiAgICAgICAgY29uc3QgcHJvakJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qQnV0dG9ucy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5ldy1idXR0b25zXCIpO1xuICAgICAgICBjb25zdCBuZXdQcm9qQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgbmV3UHJvakJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbmZpcm1cIik7XG4gICAgICAgIG5ld1Byb2pCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBQcm9qZWN0XCI7XG4gICAgICAgIC8vQ3JlYXRlcyBuZXcgcHJvamVjdCBhbmQgYWRkcyBpdCB0byBjb3JyZXNwb25kaW5nIGVudHJ5TGlzdCBpbiB0aGUgc2lkZWJhclxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgICAgICBuZXdQcm9qQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvaklucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIGluYm94LnByb2plY3RBcnJheS5wdXNoKHByb2plY3QpO1xuICAgICAgICAgICAgaW5ib3guZGlzcGxheVByb2plY3RzKGVudHJ5TGlzdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdoaWxlIChtYWluLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRoaXMuZGlzcGxheVByb2plY3REYXRhKHByb2plY3QpKTtcbiAgICAgICAgfSlcbiAgICAgICAgcHJvakJ1dHRvbnMuYXBwZW5kQ2hpbGQobmV3UHJvakJ1dHRvbik7XG5cbiAgICAgICAgY29uc3QgY2FuY2VsUHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNhbmNlbFByb2ouc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYW5jZWxcIik7XG4gICAgICAgIGNhbmNlbFByb2oudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgICAgICAvL0NhbmNlbHMgcHJvamVjdCBjcmVhdGlvbiBhbmQgZ29lcyBiYWNrIHRvIGRlZmF1bHQgcHJvamVjdCwgaWYgYXBwbGljYWJsZVxuICAgICAgICBjYW5jZWxQcm9qLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB3aGlsZSAobWFpbi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluYm94LnByb2plY3RBcnJheS5sZW5ndGgpO1xuICAgICAgICAgICAgaWYgKGluYm94LnByb2plY3RBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0aGlzLmRpc3BsYXlQcm9qZWN0RGF0YShpbmJveC5wcm9qZWN0QXJyYXlbMF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcHJvakJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsUHJvaik7XG5cbiAgICAgICAgbmV3UHJvai5hcHBlbmRDaGlsZChwcm9qQnV0dG9ucyk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3UHJvajtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdERvbTsiLCJjbGFzcyBUYXNrIHtcbiAgICBzdGF0aWMgaWQgPSAxO1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uPVwiXCIsIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQ9ZmFsc2UpIHtcbiAgICAgICAgdGhpcy5pZCA9IFRhc2suaWQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICAgICAgVGFzay5pZCArPSAxO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCIvL01ha2VzIGNoYW5nZXMgdG8gdGhlIERPTSBpbiBvcmRlciB0byBkaXNwbGF5IHRoZSBjcmVhdGUvZWRpdCB0YXNrIHNjcmVlblxuXG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XG5pbXBvcnQgUHJvamVjdERvbSBmcm9tIFwiLi9Qcm9qZWN0RG9tXCI7XG5cbmNsYXNzIFRhc2tEb20ge1xuICAgIGNyZWF0ZVRhc2socHJvamVjdCkge1xuXG4gICAgY29uc3QgcHJvaiA9IG5ldyBQcm9qZWN0RG9tKCk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgICAvL05ldyBUYXNrIERhc2hib2FyZFxuICAgIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Rhc2suc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuZXctdGFzay1jYXJkXCIpO1xuXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gXCJOZXcgVGFza1wiO1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuICAgIC8vVGFzayBOYW1lXG4gICAgY29uc3QgdGFza05hbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGFza05hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0YXNrTmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrIE5hbWU6IFwiO1xuICAgIHRhc2tOYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1uYW1lXCIpO1xuICAgIHRhc2tOYW1lRmllbGQuYXBwZW5kQ2hpbGQodGFza05hbWVMYWJlbCk7XG5cbiAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLW5hbWVcIik7XG4gICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk1heCAzMCBjaGFyc1wiKTtcbiAgICB0YXNrTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjMwXCIpO1xuICAgIHRhc2tOYW1lRmllbGQuYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dCk7XG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZCh0YXNrTmFtZUZpZWxkKTtcblxuICAgIC8vVGFzayBEdWUgRGF0ZVxuICAgIGNvbnN0IHRhc2tEdWVEYXRlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGFza0R1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6IFwiO1xuICAgIHRhc2tEdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1kdWUtZGF0ZVwiKTtcbiAgICB0YXNrRHVlRGF0ZUZpZWxkLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlTGFiZWwpO1xuXG4gICAgY29uc3QgdGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1kdWUtZGF0ZVwiKTtcbiAgICB0YXNrRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgIHRhc2tEdWVEYXRlRmllbGQuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGVJbnB1dCk7XG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZUZpZWxkKTtcblxuICAgIC8vVGFzayBEZXNjcmlwdGlvblxuICAgIGNvbnN0IHRhc2tEZXNjRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tEZXNjRmllbGQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0ZXh0LWFyZWFcIik7XG4gICAgY29uc3QgdGFza0Rlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0YXNrRGVzY0xhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrIERlc2NyaXB0aW9uOiBcIjtcbiAgICB0YXNrRGVzY0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stZGVzY1wiKTtcbiAgICB0YXNrRGVzY0ZpZWxkLmFwcGVuZENoaWxkKHRhc2tEZXNjTGFiZWwpO1xuXG4gICAgY29uc3QgdGFza0Rlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0QXJlYVwiKTtcbiAgICB0YXNrRGVzY0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1kZXNjXCIpO1xuICAgIHRhc2tEZXNjRmllbGQuYXBwZW5kQ2hpbGQodGFza0Rlc2NJbnB1dCk7XG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZCh0YXNrRGVzY0ZpZWxkKTtcblxuICAgIC8vUHJpb3JpdGllc1xuICAgIGNvbnN0IHByaW9yaXRpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByaW9yaXRpZXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0aWVzXCIpO1xuICAgIFxuICAgIC8vTG93XG4gICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGxvdy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gICAgbG93LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xuICAgIGxvdy52YWx1ZSA9IFwiTG93IFByaW9yaXR5XCI7XG4gICAgbG93LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwXCIpO1xuICAgIHByaW9yaXRpZXMuYXBwZW5kQ2hpbGQobG93KTtcblxuICAgIGNvbnN0IGxvd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxvd0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvd1wiKTtcbiAgICBsb3dMYWJlbC50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gICAgcHJpb3JpdGllcy5hcHBlbmRDaGlsZChsb3dMYWJlbCk7XG5cbiAgICAvL01lZGl1bVxuICAgIGNvbnN0IG1lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBtZWQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgIG1lZC52YWx1ZSA9IFwiTWVkaXVtIFByaW9yaXR5XCI7XG4gICAgbWVkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwXCIpO1xuICAgIHByaW9yaXRpZXMuYXBwZW5kQ2hpbGQobWVkKTtcblxuICAgIGNvbnN0IG1lZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIG1lZExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm1lZGl1bVwiKTtcbiAgICBtZWRMYWJlbC50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gICAgcHJpb3JpdGllcy5hcHBlbmRDaGlsZChtZWRMYWJlbCk7XG5cbiAgICAvL0hpZ2hcbiAgICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGhpZ2guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgIGhpZ2gudmFsdWUgPSBcIkhpZ2ggUHJpb3JpdHlcIjtcbiAgICBoaWdoLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwXCIpO1xuICAgIHByaW9yaXRpZXMuYXBwZW5kQ2hpbGQoaGlnaCk7XG5cbiAgICBjb25zdCBoaWdoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgaGlnaExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImhpZ2hcIik7XG4gICAgaGlnaExhYmVsLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gICAgcHJpb3JpdGllcy5hcHBlbmRDaGlsZChoaWdoTGFiZWwpO1xuXG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChwcmlvcml0aWVzKTtcblxuICAgIC8vVGFzayBCdXR0b25zXG4gICAgY29uc3QgdGFza0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tCdXR0b25zLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmV3LWJ1dHRvbnNcIik7XG4gICAgY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbmV3VGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbmZpcm1cIik7XG4gICAgbmV3VGFza0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFRhc2tcIjtcbiAgICAvL0NyZWF0ZXMgbmV3IHRhc2sgYW5kIGRpc3BsYXlzIGl0IGluIHRoZSBwcm9qZWN0IGRvbVxuICAgIG5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJvamVjdC50YXNrQXJyYXkucHVzaChuZXcgVGFzayh0YXNrTmFtZUlucHV0LnZhbHVlLCB0YXNrRGVzY0lucHV0LnZhbHVlLCB0YXNrRHVlRGF0ZUlucHV0LnZhbHVlLFxuICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwJ106Y2hlY2tlZFwiKS52YWx1ZSkpO1xuICAgICAgICAgICAgIHdoaWxlIChtYWluLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKHByb2ouZGlzcGxheVByb2plY3REYXRhKHByb2plY3QpKTtcblxuICAgIH0pXG4gICAgdGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQobmV3VGFza0J1dHRvbik7XG5cbiAgICBjb25zdCBjYW5jZWxUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxUYXNrLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FuY2VsXCIpO1xuICAgIGNhbmNlbFRhc2sudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIGNhbmNlbFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvai5kaXNwbGF5UHJvamVjdERhdGEocHJvamVjdCkpO1xuICAgIH0pXG4gICAgdGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsVGFzayk7XG5cbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHRhc2tCdXR0b25zKTtcblxuICAgIHJldHVybiBuZXdUYXNrO1xuICAgIH1cblxuICAgIGVkaXRUYXNrKHByb2plY3QsIHRhc2spIHtcblxuICAgICAgICBjb25zdCBwcm9qID0gbmV3IFByb2plY3REb20oKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgIC8vTmV3IFRhc2sgRGFzaGJvYXJkXG4gICAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3VGFzay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5ldy10YXNrLWNhcmRcIik7XG5cbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBcIkVkaXQgVGFza1wiO1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuICAgIC8vVGFzayBOYW1lXG4gICAgY29uc3QgdGFza05hbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGFza05hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0YXNrTmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrIE5hbWU6IFwiO1xuICAgIHRhc2tOYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1uYW1lXCIpO1xuICAgIHRhc2tOYW1lRmllbGQuYXBwZW5kQ2hpbGQodGFza05hbWVMYWJlbCk7XG5cbiAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLW5hbWVcIik7XG4gICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk1heCAzMCBjaGFyc1wiKTtcbiAgICB0YXNrTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjMwXCIpO1xuICAgIGNvbnNvbGUubG9nKGBkYXRlOiAke3Rhc2suZHVlRGF0ZX1gKTtcbiAgICB0YXNrTmFtZUlucHV0LnZhbHVlID0gdGFzay5uYW1lO1xuICAgIHRhc2tOYW1lRmllbGQuYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dCk7XG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZCh0YXNrTmFtZUZpZWxkKTtcblxuICAgIC8vVGFzayBEdWUgRGF0ZVxuICAgIGNvbnN0IHRhc2tEdWVEYXRlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGFza0R1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6IFwiO1xuICAgIHRhc2tEdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1kdWUtZGF0ZVwiKTtcbiAgICB0YXNrRHVlRGF0ZUZpZWxkLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlTGFiZWwpO1xuXG4gICAgY29uc3QgdGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1kdWUtZGF0ZVwiKTtcbiAgICB0YXNrRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgIHRhc2tEdWVEYXRlSW5wdXQudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgdGFza0R1ZURhdGVGaWVsZC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZUlucHV0KTtcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlRmllbGQpO1xuXG4gICAgLy9UYXNrIERlc2NyaXB0aW9uXG4gICAgY29uc3QgdGFza0Rlc2NGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0Rlc2NGaWVsZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRleHQtYXJlYVwiKTtcbiAgICBjb25zdCB0YXNrRGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRhc2tEZXNjTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2sgRGVzY3JpcHRpb246IFwiO1xuICAgIHRhc2tEZXNjTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1kZXNjXCIpO1xuICAgIHRhc2tEZXNjRmllbGQuYXBwZW5kQ2hpbGQodGFza0Rlc2NMYWJlbCk7XG5cbiAgICBjb25zdCB0YXNrRGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRBcmVhXCIpO1xuICAgIHRhc2tEZXNjSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWRlc2NcIik7XG4gICAgdGFza0Rlc2NJbnB1dC52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgdGFza0Rlc2NGaWVsZC5hcHBlbmRDaGlsZCh0YXNrRGVzY0lucHV0KTtcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHRhc2tEZXNjRmllbGQpO1xuXG4gICAgLy9Qcmlvcml0aWVzXG4gICAgY29uc3QgcHJpb3JpdGllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJpb3JpdGllcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXRpZXNcIik7XG4gICAgXG4gICAgLy9Mb3dcbiAgICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbG93LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICBsb3cudmFsdWUgPSBcIkxvdyBQcmlvcml0eVwiO1xuICAgIGxvdy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicFwiKTtcbiAgICBwcmlvcml0aWVzLmFwcGVuZENoaWxkKGxvdyk7XG5cbiAgICBjb25zdCBsb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsb3dMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJsb3dcIik7XG4gICAgbG93TGFiZWwudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICAgIHByaW9yaXRpZXMuYXBwZW5kQ2hpbGQobG93TGFiZWwpO1xuXG4gICAgLy9NZWRpdW1cbiAgICBjb25zdCBtZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbWVkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICBtZWQudmFsdWUgPSBcIk1lZGl1bSBQcmlvcml0eVwiO1xuICAgIG1lZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicFwiKTtcbiAgICBwcmlvcml0aWVzLmFwcGVuZENoaWxkKG1lZCk7XG5cbiAgICBjb25zdCBtZWRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBtZWRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJtZWRpdW1cIik7XG4gICAgbWVkTGFiZWwudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICAgIHByaW9yaXRpZXMuYXBwZW5kQ2hpbGQobWVkTGFiZWwpO1xuXG4gICAgLy9IaWdoXG4gICAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBoaWdoLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICBoaWdoLnZhbHVlID0gXCJIaWdoIFByaW9yaXR5XCI7XG4gICAgaGlnaC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicFwiKTtcbiAgICBwcmlvcml0aWVzLmFwcGVuZENoaWxkKGhpZ2gpO1xuXG4gICAgY29uc3QgaGlnaExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGhpZ2hMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJoaWdoXCIpO1xuICAgIGhpZ2hMYWJlbC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgIHByaW9yaXRpZXMuYXBwZW5kQ2hpbGQoaGlnaExhYmVsKTtcblxuICAgIHN3aXRjaCAodGFzay5wcmlvcml0eSkge1xuICAgICAgICBjYXNlIFwiTWVkaXVtIFByaW9yaXR5XCI6XG4gICAgICAgICAgICBtZWQuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcInRydWVcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkhpZ2ggUHJpb3JpdHlcIjpcbiAgICAgICAgICAgIGhpZ2guc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcInRydWVcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGxvdy5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwidHJ1ZVwiKTtcbiAgICB9XG5cbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHByaW9yaXRpZXMpO1xuXG4gICAgLy9UYXNrIEJ1dHRvbnNcbiAgICBjb25zdCB0YXNrQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0J1dHRvbnMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuZXctYnV0dG9uc1wiKTtcbiAgICBjb25zdCBjb25maXJtRWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uZmlybUVkaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb25maXJtXCIpO1xuICAgIGNvbmZpcm1FZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZlIENoYW5nZXNcIjtcbiAgICAvL0NyZWF0ZXMgbmV3IHRhc2sgYW5kIGRpc3BsYXlzIGl0IGluIHRoZSBwcm9qZWN0IGRvbVxuICAgIGNvbmZpcm1FZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRhc2submFtZSA9IHRhc2tOYW1lSW5wdXQudmFsdWU7XG4gICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSB0YXNrRGVzY0lucHV0LnZhbHVlO1xuICAgICAgICB0YXNrLmR1ZURhdGUgPSB0YXNrRHVlRGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICB0YXNrLnByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3AnXTpjaGVja2VkXCIpLnZhbHVlO1xuXG4gICAgICAgICAgICAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvai5kaXNwbGF5UHJvamVjdERhdGEocHJvamVjdCkpO1xuXG4gICAgfSlcbiAgICB0YXNrQnV0dG9ucy5hcHBlbmRDaGlsZChjb25maXJtRWRpdEJ1dHRvbik7XG5cbiAgICBjb25zdCBjYW5jZWxUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxUYXNrLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FuY2VsXCIpO1xuICAgIGNhbmNlbFRhc2sudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIGNhbmNlbFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvai5kaXNwbGF5UHJvamVjdERhdGEocHJvamVjdCkpO1xuICAgIH0pXG4gICAgdGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsVGFzayk7XG5cbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHRhc2tCdXR0b25zKTtcblxuICAgIHJldHVybiBuZXdUYXNrO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrRG9tOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgSW5ib3ggZnJvbSAnLi9JbmJveC5qcyc7XG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUuc3ZnJztcbmltcG9ydCBQbHVzIGZyb20gJy4vcGx1cy5wbmcnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0LmpzJztcbmltcG9ydCBQcm9qZWN0RG9tIGZyb20gJy4vUHJvamVjdERvbS5qcyc7XG5cblxuZnVuY3Rpb24gd2VicGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29udGVudFwiKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IG1lbnUgPSBuZXcgSW1hZ2UoKTtcbiAgICBtZW51LnNyYyA9IE1lbnU7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhlYWRlci1oYW1idXJnZXJcIik7XG4gICAgbGV0IGNsaWNrZWQgPSBmYWxzZTtcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmICghY2xpY2tlZCkge1xuICAgICAgICAgICAgc2lkZWJhci5pZCArPSBcInNpZGViYXItbWVudVwiO1xuICAgICAgICAgICAgbWFpbi5pZCArPSBcIm1haW4tc2lkZWJhclwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2lkZWJhci5pZCA9IFwiXCI7XG4gICAgICAgICAgICBtYWluLmlkID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBjbGlja2VkID0gIWNsaWNrZWQ7XG4gICAgfSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgY29uc3QgaGVhZGVyUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGhlYWRlclAudGV4dENvbnRlbnQgPSBcIlRvLURvIExpc3RcIjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyUCk7XG4gICAgXG4gICAgY29uc3QgcHJvaiA9IG5ldyBQcm9qZWN0RG9tKCk7XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2lkZWJhclwiKTtcblxuICAgIGNvbnN0IHBsdXMgPSBuZXcgSW1hZ2UoKTtcbiAgICBwbHVzLnNyYyA9IFBsdXM7XG4gICAgcGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB3aGlsZSAobWFpbi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qLmNyZWF0ZVByb2plY3QocHJvamVjdHMsIHByb2plY3QuZW50cnlMaXN0KSk7XG4gICAgfSlcblxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocGx1cyk7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IG5ldyBJbmJveChcImluYm94XCIsIFwiQWxsIFByb2plY3RzXCIpO1xuICAgIGNvbnN0IHRlc3RQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJUZXN0XCIsIFtdKTtcbiAgICAvL1B1c2hlcyB0ZXN0IHByb2plY3QgdG8gaW5ib3ggdG8gZGlzcGxheSBiZWxvd1xuICAgIHByb2plY3RzLnByb2plY3RBcnJheS5wdXNoKHRlc3RQcm9qZWN0KTtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMubWFrZUluYm94KCk7XG4gICAgcHJvamVjdHMuZGlzcGxheVByb2plY3RzKHByb2plY3QuZW50cnlMaXN0KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3QuaW5ib3gpO1xuXG4gICAgY29uc3QgZmF2b3JpdGVzID0gbmV3IEluYm94KFwiZmF2b3JpdGVzXCIsIFwiRmF2b3JpdGVzXCIpO1xuICAgIGNvbnN0IGZhdm9yaXRlID0gZmF2b3JpdGVzLm1ha2VJbmJveCgpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZmF2b3JpdGUuaW5ib3gpO1xuXG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW5cIik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgXG4gICAgXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod2VicGFnZSgpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=