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
___CSS_LOADER_EXPORT___.push([module.id, "::-webkit-scrollbar {\n    height: 12px;\n    width: 12px;\n    background: rgba(50,0,80,1);\n}\n\n::-webkit-scrollbar-thumb {\n    background: rgba(100,0,150,1);\n    -webkit-border-radius: 5px;\n    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 18rem 4fr;\n    grid-template-rows: 4rem minmax(calc(100vh - 4rem), auto);\n    grid-auto-flow: row;\n    grid-auto-rows: 1fr;\n}\n\n.header {\n    \n    background-color: rgba(50, 0, 100, 1);\n    font-weight: bold;\n    grid-area: 1 / 1 / 2 / 3;\n    display: grid;\n    \n    \n    align-items: center;\n\n    \n}\n\n.header, .task-header {\n    text-align: center;\n    font-size: 2rem;\n    color: white;\n}\n\n.header p {\n    padding: 0;\n    margin: 0;\n}\n\n.header-hamburger {\n    height: 2rem;\n    width: auto;\n    display: none;\n}\n\n/***SIDEBAR***/\n\n.sidebar {\n    grid-area: 2 / 1 / -1 / 2;\n    background-color: rgba(60, 0, 110, 1);\n    display: flex;\n    flex-direction: column;\n}\n\n.sidebar > img {\n    height: 2rem;\n    width: auto;\n    align-self: end;\n    margin: 1rem;\n}\n\n.sidebar > img:hover {\n    cursor: pointer;\n}\n\n.sidebar-header {\n    \n    margin: 0 0.5rem;\n    padding: 0 0 0 1rem;\n    \n    border-bottom: 1px solid white;\n    font-weight: bolder;\n    font-size: 2rem;\n    \n}\n\n.sidebar-header:first-child {\n    margin-top: 2rem;\n}\n\n.entryList {\n    padding: 0 3rem;\n    margin: 1rem 0 1.5rem 0;\n    overflow: auto;\n    max-height: 4.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n}\n\n.entry-container {\n    position: relative;\n    align-self: stretch;\n    display:flex;\n    justify-content: space-between;\n   \n}\n\n.entryList img {\n    height: 1.2rem;\n    width: auto;\n    position: relative;\n    top: 0.15rem;\n    flex: 0;\n}\n\n.entryList img:hover {\n    cursor:pointer;\n}\n\n.entry {\n    background: none;\n    border: none;\n    font-size: 1.2rem;\n    text-decoration: underline;\n    flex: 0;\n    \n}\n\n.entry:hover {\n    cursor:pointer;\n}\n\n.entry:active {\n    text-decoration: none;\n}\n\n.sidebar-header, .entry {\n    color: white;\n}\n\n.main {\n    grid-area: 2 / 2 / -1 / 3;\n    background-color: rgb(44, 40, 44);\n    display: flex;\n    justify-content: center;\n    \n}\n/***PROJECT AND TASK DISPLAY***/\n.task-card-container {\n    flex: 1;\n    display: none;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.task-card-container > img {\n    height: 2.5rem;\n    width: 2.5rem;\n    align-self: end;\n    margin-right: 1.2rem;\n}\n\n.task-card-container > img:hover {\n    cursor: pointer;\n}\n\n.task-header {\n    align-self: stretch;\n}\n\n\n\n.task-card {\n    height: 5rem;\n    margin: 1rem;\n    background-color: rgba(28,28,30,1);\n    color: white;\n    border-radius: 5px;\n    border-left: 3px solid green;\n    display: grid;\n    grid-template-columns: 2rem 2fr 1fr;\n    align-items: center;\n    gap: 1rem;\n\n}\n\n.task-button {\n    border-radius: 100px;\n    height: 1.5rem;\n    width: 1.5rem;\n    grid-column: 1 / 2;\n    margin: 0 0.75rem;\n}\n\n.task-desc {\n    grid-column: 2 / 3;\n    justify-self: start;\n    font-size: 1.2rem;\n}\n\n.task-edit {\n    grid-column: 3 / 4;\n    display: flex;\n    justify-content: end;\n    flex-direction: column;\n    align-items: end;\n    margin: 0.75rem 1rem;\n}\n\n.task-tool {\n    display: flex;\n    justify-content: end;\n    \n    gap: 0.75rem;\n\n}\n\n.task-tool img {\n    height: 1.2rem;\n    width: auto;\n    \n}\n\n.task-tool p {\n    margin: 0;\n    padding: 0;\n}\n\n/***NEW PROJECT***/\n.project-card {\n    height: 12rem;\n    width: max(30vw, 20rem);\n    margin: 1rem;\n    background-color: rgba(50,0,90,1);\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.project-card > p {\n    font-size: 2rem;\n    font-weight: bolder;\n    margin: 0;\n    padding: 0;\n}\n\n.new-proj-buttons {\n    display: flex;\n    gap: 0.5rem;\n}\n\n.new-proj-buttons button {\n    flex: 1;\n}\n\n.confirm {\n    background-color: green;\n}\n\n.cancel {\n    background-color: red;\n}\n\n.confirm, .cancel {\n    color: white;\n    font-weight: bolder;\n    border-radius: 10px;\n}\n\n/***NEW TASK***/\n\n@media screen and (max-width: 500px) {\n\n    .header {\n        grid-template-columns: 2rem 5fr;\n    }\n    .header-hamburger {\n        display: block;\n    }\n    .sidebar {\n        display: none;\n    }\n\n    .main {\n        grid-area: 2 / 1 / -1 / 3;\n        \n    }\n\n    /*.content {\n        grid-template-columns: 30vw 4fr;\n    }\n\n    .sidebar-header {\n        font-size: 1.2rem;\n        margin: 0 0.25rem;\n        padding: 0 0 0 0.5rem;\n    }\n\n    .entryList {\n        padding: 0 1.5rem;\n        margin: 0.5rem 0 0.75rem 0;\n    }\n\n    .entry {\n        font-size: 0.8rem;\n    }\n\n    .entryList img {\n        height: 0.8rem;\n    }*/\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["::-webkit-scrollbar {\n    height: 12px;\n    width: 12px;\n    background: rgba(50,0,80,1);\n}\n\n::-webkit-scrollbar-thumb {\n    background: rgba(100,0,150,1);\n    -webkit-border-radius: 5px;\n    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 18rem 4fr;\n    grid-template-rows: 4rem minmax(calc(100vh - 4rem), auto);\n    grid-auto-flow: row;\n    grid-auto-rows: 1fr;\n}\n\n.header {\n    \n    background-color: rgba(50, 0, 100, 1);\n    font-weight: bold;\n    grid-area: 1 / 1 / 2 / 3;\n    display: grid;\n    \n    \n    align-items: center;\n\n    \n}\n\n.header, .task-header {\n    text-align: center;\n    font-size: 2rem;\n    color: white;\n}\n\n.header p {\n    padding: 0;\n    margin: 0;\n}\n\n.header-hamburger {\n    height: 2rem;\n    width: auto;\n    display: none;\n}\n\n/***SIDEBAR***/\n\n.sidebar {\n    grid-area: 2 / 1 / -1 / 2;\n    background-color: rgba(60, 0, 110, 1);\n    display: flex;\n    flex-direction: column;\n}\n\n.sidebar > img {\n    height: 2rem;\n    width: auto;\n    align-self: end;\n    margin: 1rem;\n}\n\n.sidebar > img:hover {\n    cursor: pointer;\n}\n\n.sidebar-header {\n    \n    margin: 0 0.5rem;\n    padding: 0 0 0 1rem;\n    \n    border-bottom: 1px solid white;\n    font-weight: bolder;\n    font-size: 2rem;\n    \n}\n\n.sidebar-header:first-child {\n    margin-top: 2rem;\n}\n\n.entryList {\n    padding: 0 3rem;\n    margin: 1rem 0 1.5rem 0;\n    overflow: auto;\n    max-height: 4.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n}\n\n.entry-container {\n    position: relative;\n    align-self: stretch;\n    display:flex;\n    justify-content: space-between;\n   \n}\n\n.entryList img {\n    height: 1.2rem;\n    width: auto;\n    position: relative;\n    top: 0.15rem;\n    flex: 0;\n}\n\n.entryList img:hover {\n    cursor:pointer;\n}\n\n.entry {\n    background: none;\n    border: none;\n    font-size: 1.2rem;\n    text-decoration: underline;\n    flex: 0;\n    \n}\n\n.entry:hover {\n    cursor:pointer;\n}\n\n.entry:active {\n    text-decoration: none;\n}\n\n.sidebar-header, .entry {\n    color: white;\n}\n\n.main {\n    grid-area: 2 / 2 / -1 / 3;\n    background-color: rgb(44, 40, 44);\n    display: flex;\n    justify-content: center;\n    \n}\n/***PROJECT AND TASK DISPLAY***/\n.task-card-container {\n    flex: 1;\n    display: none;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.task-card-container > img {\n    height: 2.5rem;\n    width: 2.5rem;\n    align-self: end;\n    margin-right: 1.2rem;\n}\n\n.task-card-container > img:hover {\n    cursor: pointer;\n}\n\n.task-header {\n    align-self: stretch;\n}\n\n\n\n.task-card {\n    height: 5rem;\n    margin: 1rem;\n    background-color: rgba(28,28,30,1);\n    color: white;\n    border-radius: 5px;\n    border-left: 3px solid green;\n    display: grid;\n    grid-template-columns: 2rem 2fr 1fr;\n    align-items: center;\n    gap: 1rem;\n\n}\n\n.task-button {\n    border-radius: 100px;\n    height: 1.5rem;\n    width: 1.5rem;\n    grid-column: 1 / 2;\n    margin: 0 0.75rem;\n}\n\n.task-desc {\n    grid-column: 2 / 3;\n    justify-self: start;\n    font-size: 1.2rem;\n}\n\n.task-edit {\n    grid-column: 3 / 4;\n    display: flex;\n    justify-content: end;\n    flex-direction: column;\n    align-items: end;\n    margin: 0.75rem 1rem;\n}\n\n.task-tool {\n    display: flex;\n    justify-content: end;\n    \n    gap: 0.75rem;\n\n}\n\n.task-tool img {\n    height: 1.2rem;\n    width: auto;\n    \n}\n\n.task-tool p {\n    margin: 0;\n    padding: 0;\n}\n\n/***NEW PROJECT***/\n.project-card {\n    height: 12rem;\n    width: max(30vw, 20rem);\n    margin: 1rem;\n    background-color: rgba(50,0,90,1);\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.project-card > p {\n    font-size: 2rem;\n    font-weight: bolder;\n    margin: 0;\n    padding: 0;\n}\n\n.new-proj-buttons {\n    display: flex;\n    gap: 0.5rem;\n}\n\n.new-proj-buttons button {\n    flex: 1;\n}\n\n.confirm {\n    background-color: green;\n}\n\n.cancel {\n    background-color: red;\n}\n\n.confirm, .cancel {\n    color: white;\n    font-weight: bolder;\n    border-radius: 10px;\n}\n\n/***NEW TASK***/\n\n@media screen and (max-width: 500px) {\n\n    .header {\n        grid-template-columns: 2rem 5fr;\n    }\n    .header-hamburger {\n        display: block;\n    }\n    .sidebar {\n        display: none;\n    }\n\n    .main {\n        grid-area: 2 / 1 / -1 / 3;\n        \n    }\n\n    /*.content {\n        grid-template-columns: 30vw 4fr;\n    }\n\n    .sidebar-header {\n        font-size: 1.2rem;\n        margin: 0 0.25rem;\n        padding: 0 0 0 0.5rem;\n    }\n\n    .entryList {\n        padding: 0 1.5rem;\n        margin: 0.5rem 0 0.75rem 0;\n    }\n\n    .entry {\n        font-size: 0.8rem;\n    }\n\n    .entryList img {\n        height: 0.8rem;\n    }*/\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _star_four_points_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./star-four-points-outline.svg */ "./src/star-four-points-outline.svg");
/* harmony import */ var _star_four_points_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./star-four-points.png */ "./src/star-four-points.png");
/* harmony import */ var _menu_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.svg */ "./src/menu.svg");
/* harmony import */ var _text_box_edit_outline_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text-box-edit-outline.png */ "./src/text-box-edit-outline.png");
/* harmony import */ var _plus_circle_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plus-circle.png */ "./src/plus-circle.png");
/* harmony import */ var _plus_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plus.png */ "./src/plus.png");









function makeInbox(title, id) {

    const inbox = document.createElement("div");

    const inboxTitle = document.createElement("p");
    inboxTitle.setAttribute("class", "sidebar-header");
    inboxTitle.textContent = title;
    inbox.appendChild(inboxTitle);

    const entryList = document.createElement("div");
    entryList.setAttribute("class", "entryList");
    entryList.setAttribute("id", id);
    inbox.appendChild(entryList);

    return inbox;

}

function webpage() {
    const content = document.createElement("div");
    content.setAttribute("class", "content");

    const header = document.createElement("header");
    header.setAttribute("class", "header");
    const menu = new Image();
    menu.src = _menu_svg__WEBPACK_IMPORTED_MODULE_3__;
    menu.setAttribute("class", "header-hamburger");
    header.appendChild(menu);
    const headerP = document.createElement("p");
    headerP.textContent = "To-Do List";
    header.appendChild(headerP);
    
    

    const sidebar = document.createElement("div");
    sidebar.setAttribute("class", "sidebar");

    const plus = new Image();
    plus.src = _plus_png__WEBPACK_IMPORTED_MODULE_6__;
    sidebar.appendChild(plus);

    sidebar.appendChild(makeInbox("All Projects", "inbox"));
    

    const inbox = sidebar.querySelector("#inbox");
    const entryCon = document.createElement("div");
    entryCon.setAttribute("class", "entry-container");
    const entry = document.createElement("button");
    entry.setAttribute("class", "entry");
    entry.textContent = "Test";
    entryCon.appendChild(entry);

    const unfilledStar = new Image();
    unfilledStar.src = _star_four_points_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
    entryCon.appendChild(unfilledStar);
    inbox.appendChild(entryCon);
    

    sidebar.appendChild(makeInbox("High Priority", "high-priority"));
    sidebar.appendChild(makeInbox("Medium Priority", "med-priority"));
    sidebar.appendChild(makeInbox("Low Priority", "low-priority"));
    sidebar.appendChild(makeInbox("Favorites", "favorites"));



    const main = document.createElement('div');
    main.setAttribute("class", "main");

    //Project and tasks dashboard
    const taskContainer = document.createElement("div");
    taskContainer.setAttribute("class", "task-card-container");
    const taskHeader = document.createElement("p");
    taskHeader.setAttribute("class","task-header");
    taskHeader.textContent = "Test";
    taskContainer.appendChild(taskHeader);
    main.appendChild(taskContainer);

    const cPlus = new Image();
    cPlus.src = _plus_circle_png__WEBPACK_IMPORTED_MODULE_5__;
    taskContainer.appendChild(cPlus);

    const taskCard = document.createElement("div");
    taskCard.setAttribute("class", "task-card");
    taskContainer.appendChild(taskCard);

    const taskButton = document.createElement("button");
    taskButton.setAttribute("class", "task-button");
    taskCard.appendChild(taskButton);

    const taskDesc = document.createElement("div");
    taskDesc.setAttribute("class", "task-desc");
    taskDesc.textContent = "This is a test description.";
    taskCard.appendChild(taskDesc);

    const taskEdit = document.createElement("div");
    taskEdit.setAttribute("class", "task-edit");

    const taskTools = document.createElement("div");
    taskTools.setAttribute("class", "task-tool")
    const edit = new Image();
    edit.src = _text_box_edit_outline_png__WEBPACK_IMPORTED_MODULE_4__;
    taskTools.appendChild(edit);

    const del = document.createElement("p");
    del.textContent = "X";
    taskTools.appendChild(del);
    taskEdit.appendChild(taskTools);


    const pri = document.createElement("p");
    pri.textContent = "Low Priority";
    taskEdit.appendChild(pri);
    taskCard.appendChild(taskEdit);

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
    projInput.setAttribute("placeholder", "Max 25 chars");
    projInput.setAttribute("maxlength", "25");
    projField.appendChild(projInput);

    newProj.appendChild(projField);

    const projButtons = document.createElement("div");
    projButtons.setAttribute("class", "new-proj-buttons");
    const newProjButton = document.createElement("button");
    newProjButton.setAttribute("class", "confirm");
    newProjButton.textContent = "Create Project";
    projButtons.appendChild(newProjButton);

    const cancelProj = document.createElement("button");
    cancelProj.setAttribute("class", "cancel");
    cancelProj.textContent = "Cancel";
    projButtons.appendChild(cancelProj);

    newProj.appendChild(projButtons);



    main.appendChild(newProj);

    //New Task Dashboard



    content.appendChild(header);
    content.appendChild(sidebar);
    content.appendChild(main);
    
    return content;
}

document.body.appendChild(webpage());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSwrREFBK0QsbUJBQW1CLGtCQUFrQixrQ0FBa0MsR0FBRywrQkFBK0Isb0NBQW9DLGlDQUFpQywwREFBMEQsR0FBRyxVQUFVLGdCQUFnQixpQkFBaUIsR0FBRyxjQUFjLG9CQUFvQix1Q0FBdUMsZ0VBQWdFLDBCQUEwQiwwQkFBMEIsR0FBRyxhQUFhLGtEQUFrRCx3QkFBd0IsK0JBQStCLG9CQUFvQixzQ0FBc0MsV0FBVywyQkFBMkIseUJBQXlCLHNCQUFzQixtQkFBbUIsR0FBRyxlQUFlLGlCQUFpQixnQkFBZ0IsR0FBRyx1QkFBdUIsbUJBQW1CLGtCQUFrQixvQkFBb0IsR0FBRyxpQ0FBaUMsZ0NBQWdDLDRDQUE0QyxvQkFBb0IsNkJBQTZCLEdBQUcsb0JBQW9CLG1CQUFtQixrQkFBa0Isc0JBQXNCLG1CQUFtQixHQUFHLDBCQUEwQixzQkFBc0IsR0FBRyxxQkFBcUIsNkJBQTZCLDBCQUEwQiwyQ0FBMkMsMEJBQTBCLHNCQUFzQixTQUFTLGlDQUFpQyx1QkFBdUIsR0FBRyxnQkFBZ0Isc0JBQXNCLDhCQUE4QixxQkFBcUIseUJBQXlCLG9CQUFvQiw2QkFBNkIseUJBQXlCLEdBQUcsc0JBQXNCLHlCQUF5QiwwQkFBMEIsbUJBQW1CLHFDQUFxQyxRQUFRLG9CQUFvQixxQkFBcUIsa0JBQWtCLHlCQUF5QixtQkFBbUIsY0FBYyxHQUFHLDBCQUEwQixxQkFBcUIsR0FBRyxZQUFZLHVCQUF1QixtQkFBbUIsd0JBQXdCLGlDQUFpQyxjQUFjLFNBQVMsa0JBQWtCLHFCQUFxQixHQUFHLG1CQUFtQiw0QkFBNEIsR0FBRyw2QkFBNkIsbUJBQW1CLEdBQUcsV0FBVyxnQ0FBZ0Msd0NBQXdDLG9CQUFvQiw4QkFBOEIsU0FBUywwREFBMEQsY0FBYyxvQkFBb0IsNkJBQTZCLGtCQUFrQixHQUFHLGdDQUFnQyxxQkFBcUIsb0JBQW9CLHNCQUFzQiwyQkFBMkIsR0FBRyxzQ0FBc0Msc0JBQXNCLEdBQUcsa0JBQWtCLDBCQUEwQixHQUFHLG9CQUFvQixtQkFBbUIsbUJBQW1CLHlDQUF5QyxtQkFBbUIseUJBQXlCLG1DQUFtQyxvQkFBb0IsMENBQTBDLDBCQUEwQixnQkFBZ0IsS0FBSyxrQkFBa0IsMkJBQTJCLHFCQUFxQixvQkFBb0IseUJBQXlCLHdCQUF3QixHQUFHLGdCQUFnQix5QkFBeUIsMEJBQTBCLHdCQUF3QixHQUFHLGdCQUFnQix5QkFBeUIsb0JBQW9CLDJCQUEyQiw2QkFBNkIsdUJBQXVCLDJCQUEyQixHQUFHLGdCQUFnQixvQkFBb0IsMkJBQTJCLHlCQUF5QixLQUFLLG9CQUFvQixxQkFBcUIsa0JBQWtCLFNBQVMsa0JBQWtCLGdCQUFnQixpQkFBaUIsR0FBRyx3Q0FBd0Msb0JBQW9CLDhCQUE4QixtQkFBbUIsd0NBQXdDLG1CQUFtQixvQkFBb0IsNkJBQTZCLDBCQUEwQixvQ0FBb0MsR0FBRyx1QkFBdUIsc0JBQXNCLDBCQUEwQixnQkFBZ0IsaUJBQWlCLEdBQUcsdUJBQXVCLG9CQUFvQixrQkFBa0IsR0FBRyw4QkFBOEIsY0FBYyxHQUFHLGNBQWMsOEJBQThCLEdBQUcsYUFBYSw0QkFBNEIsR0FBRyx1QkFBdUIsbUJBQW1CLDBCQUEwQiwwQkFBMEIsR0FBRyw4REFBOEQsaUJBQWlCLDBDQUEwQyxPQUFPLHlCQUF5Qix5QkFBeUIsT0FBTyxnQkFBZ0Isd0JBQXdCLE9BQU8sZUFBZSxvQ0FBb0MsaUJBQWlCLG9CQUFvQiwwQ0FBMEMsT0FBTyx5QkFBeUIsNEJBQTRCLDRCQUE0QixnQ0FBZ0MsT0FBTyxvQkFBb0IsNEJBQTRCLHFDQUFxQyxPQUFPLGdCQUFnQiw0QkFBNEIsT0FBTyx3QkFBd0IseUJBQXlCLE9BQU8sS0FBSyxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksY0FBYyxhQUFhLGFBQWEsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLGFBQWEsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxTQUFTLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtB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Y2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTAsMCw4MCwxKTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAwLDAsMTUwLDEpO1xcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMThyZW0gNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gbWlubWF4KGNhbGMoMTAwdmggLSA0cmVtKSwgYXV0byk7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwgMCwgMTAwLCAxKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgXFxuICAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBcXG59XFxuXFxuLmhlYWRlciwgLnRhc2staGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhlYWRlciBwIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVhZGVyLWhhbWJ1cmdlciB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKipTSURFQkFSKioqL1xcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIC0xIC8gMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MCwgMCwgMTEwLCAxKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNpZGViYXIgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLnNpZGViYXIgPiBpbWc6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlYmFyLWhlYWRlciB7XFxuICAgIFxcbiAgICBtYXJnaW46IDAgMC41cmVtO1xcbiAgICBwYWRkaW5nOiAwIDAgMCAxcmVtO1xcbiAgICBcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIFxcbn1cXG5cXG4uc2lkZWJhci1oZWFkZXI6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uZW50cnlMaXN0IHtcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcbiAgICBtYXJnaW46IDFyZW0gMCAxLjVyZW0gMDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDQuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4uZW50cnktY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICBcXG59XFxuXFxuLmVudHJ5TGlzdCBpbWcge1xcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwLjE1cmVtO1xcbiAgICBmbGV4OiAwO1xcbn1cXG5cXG4uZW50cnlMaXN0IGltZzpob3ZlciB7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4uZW50cnkge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZmxleDogMDtcXG4gICAgXFxufVxcblxcbi5lbnRyeTpob3ZlciB7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4uZW50cnk6YWN0aXZlIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uc2lkZWJhci1oZWFkZXIsIC5lbnRyeSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gLTEgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDQsIDQwLCA0NCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBcXG59XFxuLyoqKlBST0pFQ1QgQU5EIFRBU0sgRElTUExBWSoqKi9cXG4udGFzay1jYXJkLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udGFzay1jYXJkLWNvbnRhaW5lciA+IGltZyB7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICB3aWR0aDogMi41cmVtO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIG1hcmdpbi1yaWdodDogMS4ycmVtO1xcbn1cXG5cXG4udGFzay1jYXJkLWNvbnRhaW5lciA+IGltZzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG59XFxuXFxuXFxuXFxuLnRhc2stY2FyZCB7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI4LDI4LDMwLDEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBncmVlbjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAycmVtIDJmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG5cXG59XFxuXFxuLnRhc2stYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIG1hcmdpbjogMCAwLjc1cmVtO1xcbn1cXG5cXG4udGFzay1kZXNjIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnRhc2stZWRpdCB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIG1hcmdpbjogMC43NXJlbSAxcmVtO1xcbn1cXG5cXG4udGFzay10b29sIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIFxcbiAgICBnYXA6IDAuNzVyZW07XFxuXFxufVxcblxcbi50YXNrLXRvb2wgaW1nIHtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBcXG59XFxuXFxuLnRhc2stdG9vbCBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKioqTkVXIFBST0pFQ1QqKiovXFxuLnByb2plY3QtY2FyZCB7XFxuICAgIGhlaWdodDogMTJyZW07XFxuICAgIHdpZHRoOiBtYXgoMzB2dywgMjByZW0pO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsMCw5MCwxKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnByb2plY3QtY2FyZCA+IHAge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLm5ldy1wcm9qLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLm5ldy1wcm9qLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmNvbmZpcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmNvbmZpcm0sIC5jYW5jZWwge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi8qKipORVcgVEFTSyoqKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcblxcbiAgICAuaGVhZGVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMnJlbSA1ZnI7XFxuICAgIH1cXG4gICAgLmhlYWRlci1oYW1idXJnZXIge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgLnNpZGViYXIge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAubWFpbiB7XFxuICAgICAgICBncmlkLWFyZWE6IDIgLyAxIC8gLTEgLyAzO1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLyouY29udGVudCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwdncgNGZyO1xcbiAgICB9XFxuXFxuICAgIC5zaWRlYmFyLWhlYWRlciB7XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgIG1hcmdpbjogMCAwLjI1cmVtO1xcbiAgICAgICAgcGFkZGluZzogMCAwIDAgMC41cmVtO1xcbiAgICB9XFxuXFxuICAgIC5lbnRyeUxpc3Qge1xcbiAgICAgICAgcGFkZGluZzogMCAxLjVyZW07XFxuICAgICAgICBtYXJnaW46IDAuNXJlbSAwIDAuNzVyZW0gMDtcXG4gICAgfVxcblxcbiAgICAuZW50cnkge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIH1cXG5cXG4gICAgLmVudHJ5TGlzdCBpbWcge1xcbiAgICAgICAgaGVpZ2h0OiAwLjhyZW07XFxuICAgIH0qL1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQixtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFn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QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBLGVBQWU7O0FBRWY7O0lBRUk7UUFDSSwrQkFBK0I7SUFDbkM7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSx5QkFBeUI7O0lBRTdCOztJQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFxQkU7QUFDTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgaGVpZ2h0OiAxMnB4O1xcbiAgICB3aWR0aDogMTJweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg1MCwwLDgwLDEpO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDAsMCwxNTAsMSk7XFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxOHJlbSA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSBtaW5tYXgoY2FsYygxMDB2aCAtIDRyZW0pLCBhdXRvKTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCAwLCAxMDAsIDEpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBcXG4gICAgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIFxcbn1cXG5cXG4uaGVhZGVyLCAudGFzay1oZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGVhZGVyIHAge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5oZWFkZXItaGFtYnVyZ2VyIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqKlNJREVCQVIqKiovXFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gLTEgLyAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYwLCAwLCAxMTAsIDEpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2lkZWJhciA+IGltZyB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uc2lkZWJhciA+IGltZzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGViYXItaGVhZGVyIHtcXG4gICAgXFxuICAgIG1hcmdpbjogMCAwLjVyZW07XFxuICAgIHBhZGRpbmc6IDAgMCAwIDFyZW07XFxuICAgIFxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgXFxufVxcblxcbi5zaWRlYmFyLWhlYWRlcjpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi5lbnRyeUxpc3Qge1xcbiAgICBwYWRkaW5nOiAwIDNyZW07XFxuICAgIG1hcmdpbjogMXJlbSAwIDEuNXJlbSAwO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgbWF4LWhlaWdodDogNC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbi5lbnRyeS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgIFxcbn1cXG5cXG4uZW50cnlMaXN0IGltZyB7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDAuMTVyZW07XFxuICAgIGZsZXg6IDA7XFxufVxcblxcbi5lbnRyeUxpc3QgaW1nOmhvdmVyIHtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbi5lbnRyeSB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBmbGV4OiAwO1xcbiAgICBcXG59XFxuXFxuLmVudHJ5OmhvdmVyIHtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbi5lbnRyeTphY3RpdmUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyLWhlYWRlciwgLmVudHJ5IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAtMSAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NCwgNDAsIDQ0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbn1cXG4vKioqUFJPSkVDVCBBTkQgVEFTSyBESVNQTEFZKioqL1xcbi50YXNrLWNhcmQtY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50YXNrLWNhcmQtY29udGFpbmVyID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHdpZHRoOiAyLjVyZW07XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjJyZW07XFxufVxcblxcbi50YXNrLWNhcmQtY29udGFpbmVyID4gaW1nOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1oZWFkZXIge1xcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbn1cXG5cXG5cXG5cXG4udGFzay1jYXJkIHtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjgsMjgsMzAsMSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIGdyZWVuO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJyZW0gMmZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcblxcbn1cXG5cXG4udGFzay1idXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgbWFyZ2luOiAwIDAuNzVyZW07XFxufVxcblxcbi50YXNrLWRlc2Mge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4udGFzay1lZGl0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgbWFyZ2luOiAwLjc1cmVtIDFyZW07XFxufVxcblxcbi50YXNrLXRvb2wge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgXFxuICAgIGdhcDogMC43NXJlbTtcXG5cXG59XFxuXFxuLnRhc2stdG9vbCBpbWcge1xcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIFxcbn1cXG5cXG4udGFzay10b29sIHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKipORVcgUFJPSkVDVCoqKi9cXG4ucHJvamVjdC1jYXJkIHtcXG4gICAgaGVpZ2h0OiAxMnJlbTtcXG4gICAgd2lkdGg6IG1heCgzMHZ3LCAyMHJlbSk7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwwLDkwLDEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubmV3LXByb2otYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ubmV3LXByb2otYnV0dG9ucyBidXR0b24ge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uY29uZmlybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uY29uZmlybSwgLmNhbmNlbCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyoqKk5FVyBUQVNLKioqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuXFxuICAgIC5oZWFkZXIge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAycmVtIDVmcjtcXG4gICAgfVxcbiAgICAuaGVhZGVyLWhhbWJ1cmdlciB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5tYWluIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDEgLyAtMSAvIDM7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAvKi5jb250ZW50IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzB2dyA0ZnI7XFxuICAgIH1cXG5cXG4gICAgLnNpZGViYXItaGVhZGVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgbWFyZ2luOiAwIDAuMjVyZW07XFxuICAgICAgICBwYWRkaW5nOiAwIDAgMCAwLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLmVudHJ5TGlzdCB7XFxuICAgICAgICBwYWRkaW5nOiAwIDEuNXJlbTtcXG4gICAgICAgIG1hcmdpbjogMC41cmVtIDAgMC43NXJlbSAwO1xcbiAgICB9XFxuXFxuICAgIC5lbnRyeSB7XFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgfVxcblxcbiAgICAuZW50cnlMaXN0IGltZyB7XFxuICAgICAgICBoZWlnaHQ6IDAuOHJlbTtcXG4gICAgfSovXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IFVuZmlsbGVkU3RhciBmcm9tICcuL3N0YXItZm91ci1wb2ludHMtb3V0bGluZS5zdmcnO1xuaW1wb3J0IFN0YXIgZnJvbSAnLi9zdGFyLWZvdXItcG9pbnRzLnBuZyc7XG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUuc3ZnJztcbmltcG9ydCBFZGl0IGZyb20gJy4vdGV4dC1ib3gtZWRpdC1vdXRsaW5lLnBuZyc7XG5pbXBvcnQgQ1BsdXMgZnJvbSAnLi9wbHVzLWNpcmNsZS5wbmcnO1xuaW1wb3J0IFBsdXMgZnJvbSAnLi9wbHVzLnBuZyc7XG5cblxuZnVuY3Rpb24gbWFrZUluYm94KHRpdGxlLCBpZCkge1xuXG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgaW5ib3hUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGluYm94VGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaWRlYmFyLWhlYWRlclwiKTtcbiAgICBpbmJveFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQoaW5ib3hUaXRsZSk7XG5cbiAgICBjb25zdCBlbnRyeUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVudHJ5TGlzdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVudHJ5TGlzdFwiKTtcbiAgICBlbnRyeUxpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgIGluYm94LmFwcGVuZENoaWxkKGVudHJ5TGlzdCk7XG5cbiAgICByZXR1cm4gaW5ib3g7XG5cbn1cblxuZnVuY3Rpb24gd2VicGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29udGVudFwiKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IG1lbnUgPSBuZXcgSW1hZ2UoKTtcbiAgICBtZW51LnNyYyA9IE1lbnU7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhlYWRlci1oYW1idXJnZXJcIik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIGNvbnN0IGhlYWRlclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBoZWFkZXJQLnRleHRDb250ZW50ID0gXCJUby1EbyBMaXN0XCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclApO1xuICAgIFxuICAgIFxuXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZWJhci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNpZGViYXJcIik7XG5cbiAgICBjb25zdCBwbHVzID0gbmV3IEltYWdlKCk7XG4gICAgcGx1cy5zcmMgPSBQbHVzO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocGx1cyk7XG5cbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG1ha2VJbmJveChcIkFsbCBQcm9qZWN0c1wiLCBcImluYm94XCIpKTtcbiAgICBcblxuICAgIGNvbnN0IGluYm94ID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yKFwiI2luYm94XCIpO1xuICAgIGNvbnN0IGVudHJ5Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlbnRyeUNvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVudHJ5LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZW50cnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlbnRyeVwiKTtcbiAgICBlbnRyeS50ZXh0Q29udGVudCA9IFwiVGVzdFwiO1xuICAgIGVudHJ5Q29uLmFwcGVuZENoaWxkKGVudHJ5KTtcblxuICAgIGNvbnN0IHVuZmlsbGVkU3RhciA9IG5ldyBJbWFnZSgpO1xuICAgIHVuZmlsbGVkU3Rhci5zcmMgPSBVbmZpbGxlZFN0YXI7XG4gICAgZW50cnlDb24uYXBwZW5kQ2hpbGQodW5maWxsZWRTdGFyKTtcbiAgICBpbmJveC5hcHBlbmRDaGlsZChlbnRyeUNvbik7XG4gICAgXG5cbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG1ha2VJbmJveChcIkhpZ2ggUHJpb3JpdHlcIiwgXCJoaWdoLXByaW9yaXR5XCIpKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG1ha2VJbmJveChcIk1lZGl1bSBQcmlvcml0eVwiLCBcIm1lZC1wcmlvcml0eVwiKSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChtYWtlSW5ib3goXCJMb3cgUHJpb3JpdHlcIiwgXCJsb3ctcHJpb3JpdHlcIikpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobWFrZUluYm94KFwiRmF2b3JpdGVzXCIsIFwiZmF2b3JpdGVzXCIpKTtcblxuXG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW5cIik7XG5cbiAgICAvL1Byb2plY3QgYW5kIHRhc2tzIGRhc2hib2FyZFxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWNhcmQtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRhc2tIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YXNrSGVhZGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJ0YXNrLWhlYWRlclwiKTtcbiAgICB0YXNrSGVhZGVyLnRleHRDb250ZW50ID0gXCJUZXN0XCI7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSGVhZGVyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuXG4gICAgY29uc3QgY1BsdXMgPSBuZXcgSW1hZ2UoKTtcbiAgICBjUGx1cy5zcmMgPSBDUGx1cztcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNQbHVzKTtcblxuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ2FyZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stY2FyZFwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcblxuICAgIGNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHRhc2tCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWJ1dHRvblwiKTtcbiAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uKTtcblxuICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRGVzYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stZGVzY1wiKTtcbiAgICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IFwiVGhpcyBpcyBhIHRlc3QgZGVzY3JpcHRpb24uXCI7XG4gICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza0Rlc2MpO1xuXG4gICAgY29uc3QgdGFza0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tFZGl0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay1lZGl0XCIpO1xuXG4gICAgY29uc3QgdGFza1Rvb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrVG9vbHMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLXRvb2xcIilcbiAgICBjb25zdCBlZGl0ID0gbmV3IEltYWdlKCk7XG4gICAgZWRpdC5zcmMgPSBFZGl0O1xuICAgIHRhc2tUb29scy5hcHBlbmRDaGlsZChlZGl0KTtcblxuICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlbC50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgIHRhc2tUb29scy5hcHBlbmRDaGlsZChkZWwpO1xuICAgIHRhc2tFZGl0LmFwcGVuZENoaWxkKHRhc2tUb29scyk7XG5cblxuICAgIGNvbnN0IHByaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByaS50ZXh0Q29udGVudCA9IFwiTG93IFByaW9yaXR5XCI7XG4gICAgdGFza0VkaXQuYXBwZW5kQ2hpbGQocHJpKTtcbiAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrRWRpdCk7XG5cbiAgICAvL05ldyBQcm9qZWN0IERhc2hib2FyZFxuICAgIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2ouc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0LWNhcmRcIik7XG5cbiAgICBjb25zdCBwcm9qVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9qVGl0bGUudGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCI7XG4gICAgbmV3UHJvai5hcHBlbmRDaGlsZChwcm9qVGl0bGUpO1xuXG4gICAgY29uc3QgcHJvakZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwcm9qTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJvakxhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IE5hbWU6IFwiO1xuICAgIHByb2pMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuZXctcHJvalwiKTtcbiAgICBwcm9qRmllbGQuYXBwZW5kQ2hpbGQocHJvakxhYmVsKTtcblxuICAgIGNvbnN0IHByb2pJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwcm9qSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctcHJvalwiKTtcbiAgICBwcm9qSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJNYXggMjUgY2hhcnNcIik7XG4gICAgcHJvaklucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjI1XCIpO1xuICAgIHByb2pGaWVsZC5hcHBlbmRDaGlsZChwcm9qSW5wdXQpO1xuXG4gICAgbmV3UHJvai5hcHBlbmRDaGlsZChwcm9qRmllbGQpO1xuXG4gICAgY29uc3QgcHJvakJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2pCdXR0b25zLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmV3LXByb2otYnV0dG9uc1wiKTtcbiAgICBjb25zdCBuZXdQcm9qQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBuZXdQcm9qQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29uZmlybVwiKTtcbiAgICBuZXdQcm9qQnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGUgUHJvamVjdFwiO1xuICAgIHByb2pCdXR0b25zLmFwcGVuZENoaWxkKG5ld1Byb2pCdXR0b24pO1xuXG4gICAgY29uc3QgY2FuY2VsUHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsUHJvai5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhbmNlbFwiKTtcbiAgICBjYW5jZWxQcm9qLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBwcm9qQnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWxQcm9qKTtcblxuICAgIG5ld1Byb2ouYXBwZW5kQ2hpbGQocHJvakJ1dHRvbnMpO1xuXG5cblxuICAgIG1haW4uYXBwZW5kQ2hpbGQobmV3UHJvaik7XG5cbiAgICAvL05ldyBUYXNrIERhc2hib2FyZFxuXG5cblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod2VicGFnZSgpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=