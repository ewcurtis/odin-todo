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
___CSS_LOADER_EXPORT___.push([module.id, "::-webkit-scrollbar {\n    height: 12px;\n    width: 12px;\n    background: rgba(50,0,80,1);\n}\n\n::-webkit-scrollbar-thumb {\n    background: rgba(100,0,150,1);\n    -webkit-border-radius: 5px;\n    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 18rem 4fr;\n    grid-template-rows: 4rem minmax(calc(100vh - 4rem), auto);\n    grid-auto-flow: row;\n    grid-auto-rows: 1fr;\n}\n\n.header {\n    \n    background-color: rgba(50, 0, 100, 1);\n    font-weight: bold;\n    grid-area: 1 / 1 / 2 / 3;\n    display: grid;\n    \n    \n    align-items: center;\n\n    \n}\n\n.header, .proj-header {\n    text-align: center;\n    font-size: 2rem;\n    color: white;\n}\n\n.header p {\n    padding: 0;\n    margin: 0;\n}\n\n.header-hamburger {\n    height: 2rem;\n    width: auto;\n    display: none;\n}\n\n/***SIDEBAR***/\n\n.sidebar {\n    grid-area: 2 / 1 / -1 / 2;\n    background-color: rgba(60, 0, 110, 1);\n    display: flex;\n    flex-direction: column;\n}\n\n.sidebar > img {\n    height: 2rem;\n    width: auto;\n    align-self: end;\n    margin: 1rem;\n}\n\n.sidebar > img:hover {\n    cursor: pointer;\n}\n\n.sidebar-header {\n    \n    margin: 0 0.5rem;\n    padding: 0 0 0 1rem;\n    \n    border-bottom: 1px solid white;\n    font-weight: bolder;\n    font-size: 2rem;\n    \n}\n\n.sidebar-header:first-child {\n    margin-top: 2rem;\n}\n\n.entryList {\n    padding: 0 3rem;\n    margin: 1rem 0 1.5rem 0;\n    overflow: auto;\n    max-height: 4.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n}\n\n.entry-container {\n    position: relative;\n    align-self: stretch;\n    display:flex;\n    justify-content: space-between;\n   \n}\n\n.entryList img {\n    height: 1.2rem;\n    width: auto;\n    position: relative;\n    top: 0.15rem;\n    flex: 0;\n}\n\n.entryList img:hover {\n    cursor:pointer;\n}\n\n.entry {\n    background: none;\n    border: none;\n    font-size: 1.2rem;\n    text-decoration: underline;\n    flex: 0;\n    \n}\n\n.entry:hover {\n    cursor:pointer;\n}\n\n.entry:active {\n    text-decoration: none;\n}\n\n.sidebar-header, .entry {\n    color: white;\n}\n\n.main {\n    grid-area: 2 / 2 / -1 / 3;\n    background-color: rgb(44, 40, 44);\n    display: flex;\n    justify-content: center;\n    \n}\n/***PROJECT AND TASK DISPLAY***/\n.task-card-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.task-card-container > img {\n    height: 2.5rem;\n    width: 2.5rem;\n    align-self: end;\n    margin-right: 1.2rem;\n}\n\n.task-card-container > img:hover {\n    cursor: pointer;\n}\n\n.proj-header {\n    align-self: stretch;\n}\n\n\n\n.task-card {\n    height: 5rem;\n    margin: 1rem;\n    background-color: rgba(28,28,30,1);\n    color: white;\n    border-radius: 5px;\n    border-left: 3px solid green;\n    display: grid;\n    grid-template-columns: 2rem 2fr 1fr;\n    align-items: center;\n    gap: 1rem;\n\n}\n\n.task-button {\n    border-radius: 100px;\n    height: 1.5rem;\n    width: 1.5rem;\n    grid-column: 1 / 2;\n    margin: 0 0.75rem;\n}\n\n.task-desc {\n    grid-column: 2 / 3;\n    justify-self: start;\n    font-size: 1.2rem;\n}\n\n.task-edit {\n    grid-column: 3 / 4;\n    display: flex;\n    justify-content: end;\n    flex-direction: column;\n    align-items: end;\n    margin: 0.75rem 1rem;\n}\n\n.task-tool {\n    display: flex;\n    justify-content: end;\n    \n    gap: 0.75rem;\n\n}\n\n.task-tool img {\n    height: 1.2rem;\n    width: auto;\n    \n}\n\n.task-tool p {\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n}\n\n/***NEW PROJECT***/\n.project-card {\n    height: 12rem;\n    width: max(30vw, 20rem);\n    margin: 4rem;\n    background-color: rgba(50,0,90,1);\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.project-card > p, .new-task-card > p {\n    font-size: 2rem;\n    font-weight: bolder;\n    margin: 0;\n    padding: 0;\n}\n\n.new-buttons {\n    display: flex;\n    gap: 0.5rem;\n}\n\n.new-buttons button {\n    flex: 1;\n}\n\n.confirm {\n    background-color: green;\n}\n\n.cancel {\n    background-color: red;\n}\n\n.confirm, .cancel {\n    color: white;\n    font-weight: bolder;\n    border-radius: 5px;\n}\n\n/***NEW TASK***/\n\n.new-task-card {\n    height: 28rem;\n    width: max(60vw, 20rem);\n    margin: 4rem;\n    background-color: rgba(50,0,90,1);\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.text-area {\n    display: flex;\n    flex-direction: column;\n}\n\n.text-area > textarea {\n    height: 8rem;\n    width: 16rem;\n    resize: none;\n}\n\n#priorities > label {\n    font-weight: bolder;\n}\n\n#priorities > label:first-of-type {\n    color: green;\n}\n\n#priorities > label:nth-of-type(2) {\n    color: yellow;\n}\n\n#priorities > label:nth-of-type(3) {\n    color: red;\n}\n\n@media screen and (max-width: 500px) {\n\n    .header {\n        grid-template-columns: 2rem 5fr;\n    }\n    .header-hamburger {\n        display: block;\n    }\n    .sidebar {\n        display: none;\n    }\n\n    .main {\n        grid-area: 2 / 1 / -1 / 3;\n        \n    }\n\n    .new-task-card {\n        margin: 1rem;\n    }\n\n    .text-area > textarea {\n        width: 12rem;\n    }\n\n    /*.content {\n        grid-template-columns: 30vw 4fr;\n    }\n\n    .sidebar-header {\n        font-size: 1.2rem;\n        margin: 0 0.25rem;\n        padding: 0 0 0 0.5rem;\n    }\n\n    .entryList {\n        padding: 0 1.5rem;\n        margin: 0.5rem 0 0.75rem 0;\n    }\n\n    .entry {\n        font-size: 0.8rem;\n    }\n\n    .entryList img {\n        height: 0.8rem;\n    }*/\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["::-webkit-scrollbar {\n    height: 12px;\n    width: 12px;\n    background: rgba(50,0,80,1);\n}\n\n::-webkit-scrollbar-thumb {\n    background: rgba(100,0,150,1);\n    -webkit-border-radius: 5px;\n    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 18rem 4fr;\n    grid-template-rows: 4rem minmax(calc(100vh - 4rem), auto);\n    grid-auto-flow: row;\n    grid-auto-rows: 1fr;\n}\n\n.header {\n    \n    background-color: rgba(50, 0, 100, 1);\n    font-weight: bold;\n    grid-area: 1 / 1 / 2 / 3;\n    display: grid;\n    \n    \n    align-items: center;\n\n    \n}\n\n.header, .proj-header {\n    text-align: center;\n    font-size: 2rem;\n    color: white;\n}\n\n.header p {\n    padding: 0;\n    margin: 0;\n}\n\n.header-hamburger {\n    height: 2rem;\n    width: auto;\n    display: none;\n}\n\n/***SIDEBAR***/\n\n.sidebar {\n    grid-area: 2 / 1 / -1 / 2;\n    background-color: rgba(60, 0, 110, 1);\n    display: flex;\n    flex-direction: column;\n}\n\n.sidebar > img {\n    height: 2rem;\n    width: auto;\n    align-self: end;\n    margin: 1rem;\n}\n\n.sidebar > img:hover {\n    cursor: pointer;\n}\n\n.sidebar-header {\n    \n    margin: 0 0.5rem;\n    padding: 0 0 0 1rem;\n    \n    border-bottom: 1px solid white;\n    font-weight: bolder;\n    font-size: 2rem;\n    \n}\n\n.sidebar-header:first-child {\n    margin-top: 2rem;\n}\n\n.entryList {\n    padding: 0 3rem;\n    margin: 1rem 0 1.5rem 0;\n    overflow: auto;\n    max-height: 4.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n}\n\n.entry-container {\n    position: relative;\n    align-self: stretch;\n    display:flex;\n    justify-content: space-between;\n   \n}\n\n.entryList img {\n    height: 1.2rem;\n    width: auto;\n    position: relative;\n    top: 0.15rem;\n    flex: 0;\n}\n\n.entryList img:hover {\n    cursor:pointer;\n}\n\n.entry {\n    background: none;\n    border: none;\n    font-size: 1.2rem;\n    text-decoration: underline;\n    flex: 0;\n    \n}\n\n.entry:hover {\n    cursor:pointer;\n}\n\n.entry:active {\n    text-decoration: none;\n}\n\n.sidebar-header, .entry {\n    color: white;\n}\n\n.main {\n    grid-area: 2 / 2 / -1 / 3;\n    background-color: rgb(44, 40, 44);\n    display: flex;\n    justify-content: center;\n    \n}\n/***PROJECT AND TASK DISPLAY***/\n.task-card-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.task-card-container > img {\n    height: 2.5rem;\n    width: 2.5rem;\n    align-self: end;\n    margin-right: 1.2rem;\n}\n\n.task-card-container > img:hover {\n    cursor: pointer;\n}\n\n.proj-header {\n    align-self: stretch;\n}\n\n\n\n.task-card {\n    height: 5rem;\n    margin: 1rem;\n    background-color: rgba(28,28,30,1);\n    color: white;\n    border-radius: 5px;\n    border-left: 3px solid green;\n    display: grid;\n    grid-template-columns: 2rem 2fr 1fr;\n    align-items: center;\n    gap: 1rem;\n\n}\n\n.task-button {\n    border-radius: 100px;\n    height: 1.5rem;\n    width: 1.5rem;\n    grid-column: 1 / 2;\n    margin: 0 0.75rem;\n}\n\n.task-desc {\n    grid-column: 2 / 3;\n    justify-self: start;\n    font-size: 1.2rem;\n}\n\n.task-edit {\n    grid-column: 3 / 4;\n    display: flex;\n    justify-content: end;\n    flex-direction: column;\n    align-items: end;\n    margin: 0.75rem 1rem;\n}\n\n.task-tool {\n    display: flex;\n    justify-content: end;\n    \n    gap: 0.75rem;\n\n}\n\n.task-tool img {\n    height: 1.2rem;\n    width: auto;\n    \n}\n\n.task-tool p {\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n}\n\n/***NEW PROJECT***/\n.project-card {\n    height: 12rem;\n    width: max(30vw, 20rem);\n    margin: 4rem;\n    background-color: rgba(50,0,90,1);\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.project-card > p, .new-task-card > p {\n    font-size: 2rem;\n    font-weight: bolder;\n    margin: 0;\n    padding: 0;\n}\n\n.new-buttons {\n    display: flex;\n    gap: 0.5rem;\n}\n\n.new-buttons button {\n    flex: 1;\n}\n\n.confirm {\n    background-color: green;\n}\n\n.cancel {\n    background-color: red;\n}\n\n.confirm, .cancel {\n    color: white;\n    font-weight: bolder;\n    border-radius: 5px;\n}\n\n/***NEW TASK***/\n\n.new-task-card {\n    height: 28rem;\n    width: max(60vw, 20rem);\n    margin: 4rem;\n    background-color: rgba(50,0,90,1);\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.text-area {\n    display: flex;\n    flex-direction: column;\n}\n\n.text-area > textarea {\n    height: 8rem;\n    width: 16rem;\n    resize: none;\n}\n\n#priorities > label {\n    font-weight: bolder;\n}\n\n#priorities > label:first-of-type {\n    color: green;\n}\n\n#priorities > label:nth-of-type(2) {\n    color: yellow;\n}\n\n#priorities > label:nth-of-type(3) {\n    color: red;\n}\n\n@media screen and (max-width: 500px) {\n\n    .header {\n        grid-template-columns: 2rem 5fr;\n    }\n    .header-hamburger {\n        display: block;\n    }\n    .sidebar {\n        display: none;\n    }\n\n    .main {\n        grid-area: 2 / 1 / -1 / 3;\n        \n    }\n\n    .new-task-card {\n        margin: 1rem;\n    }\n\n    .text-area > textarea {\n        width: 12rem;\n    }\n\n    /*.content {\n        grid-template-columns: 30vw 4fr;\n    }\n\n    .sidebar-header {\n        font-size: 1.2rem;\n        margin: 0 0.25rem;\n        padding: 0 0 0 0.5rem;\n    }\n\n    .entryList {\n        padding: 0 1.5rem;\n        margin: 0.5rem 0 0.75rem 0;\n    }\n\n    .entry {\n        font-size: 0.8rem;\n    }\n\n    .entryList img {\n        height: 0.8rem;\n    }*/\n}"],"sourceRoot":""}]);
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
        this.makeInbox = this.makeInbox.bind(this);
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
        
        const entryCon = document.createElement("div");
        entryCon.setAttribute("class", "entry-container");
        const entry = document.createElement("button");
        entry.setAttribute("class", "entry");
        entry.setAttribute("id", project.id);
        entry.textContent = project.name;
        entry.addEventListener("click", () => {
            const proj = new _ProjectDom_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
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
/* harmony import */ var _Inbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Inbox.js */ "./src/Inbox.js");
/* harmony import */ var _TaskDom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskDom.js */ "./src/TaskDom.js");
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Task */ "./src/Task.js");







//Makes changes to the DOM in order to display tasks of a project

class ProjectDom {
    

    //Displays task for a given project
    displayTaskCard(task) {
        const taskCard = document.createElement("div");
        taskCard.setAttribute("class", "task-card");
        taskCard.setAttribute("id", task.id);

        const taskButton = document.createElement("button");
        taskButton.setAttribute("class", "task-button");
        taskCard.appendChild(taskButton);

        const taskDesc = document.createElement("div");
        taskDesc.setAttribute("class", "task-desc");
        taskDesc.textContent = task.description;
        taskCard.appendChild(taskDesc);

        const taskEdit = document.createElement("div");
        taskEdit.setAttribute("class", "task-edit");

        const taskTools = document.createElement("div");
        taskTools.setAttribute("class", "task-tool")
        const edit = new Image();
        edit.src = _text_box_edit_outline_png__WEBPACK_IMPORTED_MODULE_0__;
        taskTools.appendChild(edit);

        const del = document.createElement("p");
        del.textContent = "X";
        del.addEventListener("click", () => {
            del.closest(".task-card-container").removeChild(taskCard);
        })
        taskTools.appendChild(del);
        taskEdit.appendChild(taskTools);


        const pri = document.createElement("p");
        pri.textContent = task.priority;
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
            const task = new _TaskDom_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
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
            taskContainer.appendChild(this.displayTaskCard(project.taskArray[i]));
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
        projInput.setAttribute("placeholder", "Max 13 chars");
        projInput.setAttribute("maxlength", "13");
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
            const project = new _Project_js__WEBPACK_IMPORTED_MODULE_4__["default"](projInput.value);
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
    constructor(name, description="", duedate, priority, completed=false) {
        this.id = Task.id;
        this.name = name;
        this.description = description;
        this.duedate = duedate;
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
//Makes changes to the DOM in order to display the create/edit task screen

class TaskDom {
    createTask(project) {
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
    taskNameInput.setAttribute("placeholder", "Max 25 chars");
    taskNameInput.setAttribute("maxlength", "25");
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
    low.setAttribute("id", "low");
    low.setAttribute("name", "p");
    priorities.appendChild(low);

    const lowLabel = document.createElement("label");
    lowLabel.setAttribute("for", "low");
    lowLabel.textContent = "Low";
    priorities.appendChild(lowLabel);

    //Medium
    const med = document.createElement("input");
    med.setAttribute("type", "radio");
    med.setAttribute("id", "medium");
    med.setAttribute("name", "p");
    priorities.appendChild(med);

    const medLabel = document.createElement("label");
    medLabel.setAttribute("for", "medium");
    medLabel.textContent = "Medium";
    priorities.appendChild(medLabel);

    //High
    const high = document.createElement("input");
    high.setAttribute("type", "radio");
    high.setAttribute("id", "high");
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
    taskButtons.appendChild(newTaskButton);

    const cancelTask = document.createElement("button");
    cancelTask.setAttribute("class", "cancel");
    cancelTask.textContent = "Cancel";
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

   // main.appendChild(proj.displayProject(entry.getAttribute("id")));

   

    content.appendChild(header);
    content.appendChild(sidebar);
    content.appendChild(main);

    
    
    return content;
}

document.body.appendChild(webpage());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNTO0FBQ0Q7QUFDQTtBQUNLO0FBQ007OztBQUd6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQ0FBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0RBQVU7O0FBRS9CO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHNDQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBLHlCQUF5QixpREFBSztBQUM5Qiw0QkFBNEIsbURBQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsaURBQUs7QUFDL0I7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvSW5ib3guanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL1Byb2plY3REb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL1Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL1Rhc2tEb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBoZWlnaHQ6IDEycHg7XFxuICAgIHdpZHRoOiAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDUwLDAsODAsMSk7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwMCwwLDE1MCwxKTtcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE4cmVtIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIG1pbm1heChjYWxjKDEwMHZoIC0gNHJlbSksIGF1dG8pO1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDAsIDEwMCwgMSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIFxcbiAgICBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgXFxufVxcblxcbi5oZWFkZXIsIC5wcm9qLWhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oZWFkZXIgcCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmhlYWRlci1oYW1idXJnZXIge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKioqU0lERUJBUioqKi9cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAtMSAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjAsIDAsIDExMCwgMSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaWRlYmFyID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBtYXJnaW46IDFyZW07XFxufVxcblxcbi5zaWRlYmFyID4gaW1nOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhci1oZWFkZXIge1xcbiAgICBcXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gICAgcGFkZGluZzogMCAwIDAgMXJlbTtcXG4gICAgXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBcXG59XFxuXFxuLnNpZGViYXItaGVhZGVyOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLmVudHJ5TGlzdCB7XFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXG4gICAgbWFyZ2luOiAxcmVtIDAgMS41cmVtIDA7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiA0LjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuLmVudHJ5LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgXFxufVxcblxcbi5lbnRyeUxpc3QgaW1nIHtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMC4xNXJlbTtcXG4gICAgZmxleDogMDtcXG59XFxuXFxuLmVudHJ5TGlzdCBpbWc6aG92ZXIge1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuLmVudHJ5IHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGZsZXg6IDA7XFxuICAgIFxcbn1cXG5cXG4uZW50cnk6aG92ZXIge1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuLmVudHJ5OmFjdGl2ZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnNpZGViYXItaGVhZGVyLCAuZW50cnkge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0xIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ0LCA0MCwgNDQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxufVxcbi8qKipQUk9KRUNUIEFORCBUQVNLIERJU1BMQVkqKiovXFxuLnRhc2stY2FyZC1jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stY2FyZC1jb250YWluZXIgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcXG59XFxuXFxuLnRhc2stY2FyZC1jb250YWluZXIgPiBpbWc6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qLWhlYWRlciB7XFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxufVxcblxcblxcblxcbi50YXNrLWNhcmQge1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOCwyOCwzMCwxKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgZ3JlZW47XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMnJlbSAyZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuXFxufVxcblxcbi50YXNrLWJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBtYXJnaW46IDAgMC43NXJlbTtcXG59XFxuXFxuLnRhc2stZGVzYyB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50YXNrLWVkaXQge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBtYXJnaW46IDAuNzVyZW0gMXJlbTtcXG59XFxuXFxuLnRhc2stdG9vbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBcXG4gICAgZ2FwOiAwLjc1cmVtO1xcblxcbn1cXG5cXG4udGFzay10b29sIGltZyB7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgXFxufVxcblxcbi50YXNrLXRvb2wgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKioqTkVXIFBST0pFQ1QqKiovXFxuLnByb2plY3QtY2FyZCB7XFxuICAgIGhlaWdodDogMTJyZW07XFxuICAgIHdpZHRoOiBtYXgoMzB2dywgMjByZW0pO1xcbiAgICBtYXJnaW46IDRyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsMCw5MCwxKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnByb2plY3QtY2FyZCA+IHAsIC5uZXctdGFzay1jYXJkID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubmV3LWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLm5ldy1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5jb25maXJtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5jb25maXJtLCAuY2FuY2VsIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qKipORVcgVEFTSyoqKi9cXG5cXG4ubmV3LXRhc2stY2FyZCB7XFxuICAgIGhlaWdodDogMjhyZW07XFxuICAgIHdpZHRoOiBtYXgoNjB2dywgMjByZW0pO1xcbiAgICBtYXJnaW46IDRyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsMCw5MCwxKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnRleHQtYXJlYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50ZXh0LWFyZWEgPiB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gICAgd2lkdGg6IDE2cmVtO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbiNwcmlvcml0aWVzID4gbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4jcHJpb3JpdGllcyA+IGxhYmVsOmZpcnN0LW9mLXR5cGUge1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbiNwcmlvcml0aWVzID4gbGFiZWw6bnRoLW9mLXR5cGUoMikge1xcbiAgICBjb2xvcjogeWVsbG93O1xcbn1cXG5cXG4jcHJpb3JpdGllcyA+IGxhYmVsOm50aC1vZi10eXBlKDMpIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG5cXG4gICAgLmhlYWRlciB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJyZW0gNWZyO1xcbiAgICB9XFxuICAgIC5oZWFkZXItaGFtYnVyZ2VyIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICAgIC5zaWRlYmFyIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLm1haW4ge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIC0xIC8gMztcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5uZXctdGFzay1jYXJkIHtcXG4gICAgICAgIG1hcmdpbjogMXJlbTtcXG4gICAgfVxcblxcbiAgICAudGV4dC1hcmVhID4gdGV4dGFyZWEge1xcbiAgICAgICAgd2lkdGg6IDEycmVtO1xcbiAgICB9XFxuXFxuICAgIC8qLmNvbnRlbnQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHZ3IDRmcjtcXG4gICAgfVxcblxcbiAgICAuc2lkZWJhci1oZWFkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgICBtYXJnaW46IDAgMC4yNXJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDAuNXJlbTtcXG4gICAgfVxcblxcbiAgICAuZW50cnlMaXN0IHtcXG4gICAgICAgIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gMCAwLjc1cmVtIDA7XFxuICAgIH1cXG5cXG4gICAgLmVudHJ5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB9XFxuXFxuICAgIC5lbnRyeUxpc3QgaW1nIHtcXG4gICAgICAgIGhlaWdodDogMC44cmVtO1xcbiAgICB9Ki9cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsbURBQW1EO0FBQ3ZEOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMseURBQXlEO0lBQ3pELG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUkscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsYUFBYTs7O0lBR2IsbUJBQW1COzs7QUFHdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBLGNBQWM7O0FBRWQ7SUFDSSx5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixzQkFB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dkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTs7SUFFSTtRQUNJLCtCQUErQjtJQUNuQztJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHlCQUF5Qjs7SUFFN0I7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BcUJFO0FBQ05cIixcInNvdXJjZXNDb250ZW50XCI6W1wiOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTAsMCw4MCwxKTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAwLDAsMTUwLDEpO1xcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMThyZW0gNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gbWlubWF4KGNhbGMoMTAwdmggLSA0cmVtKSwgYXV0byk7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwgMCwgMTAwLCAxKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgXFxuICAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBcXG59XFxuXFxuLmhlYWRlciwgLnByb2otaGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhlYWRlciBwIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVhZGVyLWhhbWJ1cmdlciB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKipTSURFQkFSKioqL1xcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIC0xIC8gMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MCwgMCwgMTEwLCAxKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNpZGViYXIgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLnNpZGViYXIgPiBpbWc6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlYmFyLWhlYWRlciB7XFxuICAgIFxcbiAgICBtYXJnaW46IDAgMC41cmVtO1xcbiAgICBwYWRkaW5nOiAwIDAgMCAxcmVtO1xcbiAgICBcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIFxcbn1cXG5cXG4uc2lkZWJhci1oZWFkZXI6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uZW50cnlMaXN0IHtcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcbiAgICBtYXJnaW46IDFyZW0gMCAxLjVyZW0gMDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDQuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4uZW50cnktY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICBcXG59XFxuXFxuLmVudHJ5TGlzdCBpbWcge1xcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwLjE1cmVtO1xcbiAgICBmbGV4OiAwO1xcbn1cXG5cXG4uZW50cnlMaXN0IGltZzpob3ZlciB7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4uZW50cnkge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZmxleDogMDtcXG4gICAgXFxufVxcblxcbi5lbnRyeTpob3ZlciB7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4uZW50cnk6YWN0aXZlIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uc2lkZWJhci1oZWFkZXIsIC5lbnRyeSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gLTEgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDQsIDQwLCA0NCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBcXG59XFxuLyoqKlBST0pFQ1QgQU5EIFRBU0sgRElTUExBWSoqKi9cXG4udGFzay1jYXJkLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udGFzay1jYXJkLWNvbnRhaW5lciA+IGltZyB7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICB3aWR0aDogMi41cmVtO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIG1hcmdpbi1yaWdodDogMS4ycmVtO1xcbn1cXG5cXG4udGFzay1jYXJkLWNvbnRhaW5lciA+IGltZzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2otaGVhZGVyIHtcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG59XFxuXFxuXFxuXFxuLnRhc2stY2FyZCB7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI4LDI4LDMwLDEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBncmVlbjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAycmVtIDJmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG5cXG59XFxuXFxuLnRhc2stYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIG1hcmdpbjogMCAwLjc1cmVtO1xcbn1cXG5cXG4udGFzay1kZXNjIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnRhc2stZWRpdCB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIG1hcmdpbjogMC43NXJlbSAxcmVtO1xcbn1cXG5cXG4udGFzay10b29sIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIFxcbiAgICBnYXA6IDAuNzVyZW07XFxuXFxufVxcblxcbi50YXNrLXRvb2wgaW1nIHtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBcXG59XFxuXFxuLnRhc2stdG9vbCBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qKipORVcgUFJPSkVDVCoqKi9cXG4ucHJvamVjdC1jYXJkIHtcXG4gICAgaGVpZ2h0OiAxMnJlbTtcXG4gICAgd2lkdGg6IG1heCgzMHZ3LCAyMHJlbSk7XFxuICAgIG1hcmdpbjogNHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwwLDkwLDEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkID4gcCwgLm5ldy10YXNrLWNhcmQgPiBwIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5uZXctYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ubmV3LWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmNvbmZpcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmNvbmZpcm0sIC5jYW5jZWwge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLyoqKk5FVyBUQVNLKioqL1xcblxcbi5uZXctdGFzay1jYXJkIHtcXG4gICAgaGVpZ2h0OiAyOHJlbTtcXG4gICAgd2lkdGg6IG1heCg2MHZ3LCAyMHJlbSk7XFxuICAgIG1hcmdpbjogNHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwwLDkwLDEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4udGV4dC1hcmVhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRleHQtYXJlYSA+IHRleHRhcmVhIHtcXG4gICAgaGVpZ2h0OiA4cmVtO1xcbiAgICB3aWR0aDogMTZyZW07XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuI3ByaW9yaXRpZXMgPiBsYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbiNwcmlvcml0aWVzID4gbGFiZWw6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuI3ByaW9yaXRpZXMgPiBsYWJlbDpudGgtb2YtdHlwZSgyKSB7XFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbiNwcmlvcml0aWVzID4gbGFiZWw6bnRoLW9mLXR5cGUoMykge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcblxcbiAgICAuaGVhZGVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMnJlbSA1ZnI7XFxuICAgIH1cXG4gICAgLmhlYWRlci1oYW1idXJnZXIge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgLnNpZGViYXIge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAubWFpbiB7XFxuICAgICAgICBncmlkLWFyZWE6IDIgLyAxIC8gLTEgLyAzO1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLm5ldy10YXNrLWNhcmQge1xcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIC50ZXh0LWFyZWEgPiB0ZXh0YXJlYSB7XFxuICAgICAgICB3aWR0aDogMTJyZW07XFxuICAgIH1cXG5cXG4gICAgLyouY29udGVudCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwdncgNGZyO1xcbiAgICB9XFxuXFxuICAgIC5zaWRlYmFyLWhlYWRlciB7XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgIG1hcmdpbjogMCAwLjI1cmVtO1xcbiAgICAgICAgcGFkZGluZzogMCAwIDAgMC41cmVtO1xcbiAgICB9XFxuXFxuICAgIC5lbnRyeUxpc3Qge1xcbiAgICAgICAgcGFkZGluZzogMCAxLjVyZW07XFxuICAgICAgICBtYXJnaW46IDAuNXJlbSAwIDAuNzVyZW0gMDtcXG4gICAgfVxcblxcbiAgICAuZW50cnkge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIH1cXG5cXG4gICAgLmVudHJ5TGlzdCBpbWcge1xcbiAgICAgICAgaGVpZ2h0OiAwLjhyZW07XFxuICAgIH0qL1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFVuZmlsbGVkU3RhciBmcm9tICcuL3N0YXItZm91ci1wb2ludHMtb3V0bGluZS5zdmcnO1xuaW1wb3J0IFN0YXIgZnJvbSAnLi9zdGFyLWZvdXItcG9pbnRzLnBuZyc7XG5pbXBvcnQgUHJvamVjdERvbSBmcm9tICcuL1Byb2plY3REb20uanMnO1xuXG5jbGFzcyBJbmJveCB7XG5cbiAgICBwcm9qZWN0QXJyYXkgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5tYWtlSW5ib3ggPSB0aGlzLm1ha2VJbmJveC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG1ha2VJbmJveCgpIHtcbiAgICAgICAgXG5cbiAgICAgICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIFxuICAgICAgICBjb25zdCBpbmJveFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGluYm94VGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaWRlYmFyLWhlYWRlclwiKTtcbiAgICAgICAgaW5ib3hUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG4gICAgICAgIGluYm94LmFwcGVuZENoaWxkKGluYm94VGl0bGUpO1xuICAgIFxuICAgICAgICBjb25zdCBlbnRyeUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBlbnRyeUxpc3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlbnRyeUxpc3RcIik7XG4gICAgICAgIGVudHJ5TGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0aGlzLmlkKTtcbiAgICAgICAgaW5ib3guYXBwZW5kQ2hpbGQoZW50cnlMaXN0KTtcbiAgICBcbiAgICAgICAgcmV0dXJuIHtpbmJveDogaW5ib3gsIGVudHJ5TGlzdDogZW50cnlMaXN0fTtcbiAgICBcbiAgICB9XG5cbiAgICAvL0Rpc3BsYXlzIGEgc2luZ2xlIHByb2plY3QgaW4gdGhlIHNpZGViYXJcbiAgICAjZGlzcGxheVByb2plY3QoZW50cnlMaXN0LCBwcm9qZWN0KSB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBlbnRyeUNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGVudHJ5Q29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZW50cnktY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGVudHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZW50cnlcIik7XG4gICAgICAgIGVudHJ5LnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3QuaWQpO1xuICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgZW50cnkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2ogPSBuZXcgUHJvamVjdERvbSgpO1xuICAgICAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgICAgICAgICAgIHdoaWxlIChtYWluLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKHByb2ouZGlzcGxheVByb2plY3REYXRhKHByb2plY3QpKTtcbiAgICAgICAgfSlcbiAgICAgICAgZW50cnlDb24uYXBwZW5kQ2hpbGQoZW50cnkpO1xuXG4gICAgICAgIGNvbnN0IHN0YXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaWYgKCFwcm9qZWN0LmZhdm9yaXRlZCkgeyAgXG4gICAgICAgICAgICBzdGFyLnNyYyA9IFVuZmlsbGVkU3RhcjtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3Rhci5zcmMgPSBTdGFyO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlbnRyeUNvbi5hcHBlbmRDaGlsZChzdGFyKTtcbiAgICAgICAgZW50cnlMaXN0LmFwcGVuZENoaWxkKGVudHJ5Q29uKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZGlzcGxheVByb2plY3RzKGVudHJ5TGlzdCkge1xuXG4gICAgICAgIHdoaWxlIChlbnRyeUxpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgZW50cnlMaXN0LnJlbW92ZUNoaWxkKGVudHJ5TGlzdC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0QXJyYXlbaV07XG4gICAgICAgICAgICB0aGlzLiNkaXNwbGF5UHJvamVjdChlbnRyeUxpc3QsIHByb2plY3QpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5ib3g7IiwiY2xhc3MgUHJvamVjdCB7XG4gICAgc3RhdGljIGlkID0gMTtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0YXNrQXJyYXk9W10sIGZhdm9yaXRlZD1mYWxzZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRhc2tBcnJheSA9IHRhc2tBcnJheTtcbiAgICAgICAgdGhpcy5mYXZvcml0ZWQgPSBmYXZvcml0ZWQ7XG4gICAgICAgIHRoaXMuaWQgPSBQcm9qZWN0LmlkO1xuICAgICAgICBQcm9qZWN0LmlkICs9IDE7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyIsImltcG9ydCBFZGl0IGZyb20gJy4vdGV4dC1ib3gtZWRpdC1vdXRsaW5lLnBuZyc7XG5pbXBvcnQgQ1BsdXMgZnJvbSAnLi9wbHVzLWNpcmNsZS5wbmcnO1xuaW1wb3J0IEluYm94IGZyb20gJy4vSW5ib3guanMnO1xuaW1wb3J0IFRhc2tEb20gZnJvbSAnLi9UYXNrRG9tLmpzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdC5qcyc7XG5pbXBvcnQgVGFzayBmcm9tICcuL1Rhc2snO1xuXG4vL01ha2VzIGNoYW5nZXMgdG8gdGhlIERPTSBpbiBvcmRlciB0byBkaXNwbGF5IHRhc2tzIG9mIGEgcHJvamVjdFxuXG5jbGFzcyBQcm9qZWN0RG9tIHtcbiAgICBcblxuICAgIC8vRGlzcGxheXMgdGFzayBmb3IgYSBnaXZlbiBwcm9qZWN0XG4gICAgZGlzcGxheVRhc2tDYXJkKHRhc2spIHtcbiAgICAgICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrQ2FyZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stY2FyZFwiKTtcbiAgICAgICAgdGFza0NhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgdGFzay5pZCk7XG5cbiAgICAgICAgY29uc3QgdGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHRhc2tCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWJ1dHRvblwiKTtcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza0J1dHRvbik7XG5cbiAgICAgICAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrRGVzYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stZGVzY1wiKTtcbiAgICAgICAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrRGVzYyk7XG5cbiAgICAgICAgY29uc3QgdGFza0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrRWRpdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stZWRpdFwiKTtcblxuICAgICAgICBjb25zdCB0YXNrVG9vbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrVG9vbHMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLXRvb2xcIilcbiAgICAgICAgY29uc3QgZWRpdCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBlZGl0LnNyYyA9IEVkaXQ7XG4gICAgICAgIHRhc2tUb29scy5hcHBlbmRDaGlsZChlZGl0KTtcblxuICAgICAgICBjb25zdCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGVsLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZGVsLmNsb3Nlc3QoXCIudGFzay1jYXJkLWNvbnRhaW5lclwiKS5yZW1vdmVDaGlsZCh0YXNrQ2FyZCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRhc2tUb29scy5hcHBlbmRDaGlsZChkZWwpO1xuICAgICAgICB0YXNrRWRpdC5hcHBlbmRDaGlsZCh0YXNrVG9vbHMpO1xuXG5cbiAgICAgICAgY29uc3QgcHJpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHByaS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG4gICAgICAgIHRhc2tFZGl0LmFwcGVuZENoaWxkKHByaSk7XG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tFZGl0KTtcblxuICAgICAgICByZXR1cm4gdGFza0NhcmQ7XG4gICAgfVxuXG4gICAgZGlzcGxheVByb2plY3REYXRhKHByb2plY3QpIHtcbiAgICAgICAgLy9Qcm9qZWN0IGFuZCB0YXNrcyBkYXNoYm9hcmRcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWNhcmQtY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBwcm9qSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHByb2pIZWFkZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInByb2otaGVhZGVyXCIpO1xuICAgICAgICBwcm9qSGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2pIZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IGNQbHVzID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGNQbHVzLnNyYyA9IENQbHVzO1xuICAgICAgICBjUGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrRG9tKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodGFzay5jcmVhdGVUYXNrKHByb2plY3QpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNQbHVzKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QudGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZGlzcGxheVRhc2tDYXJkKHByb2plY3QudGFza0FycmF5W2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy90YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZGlzcGxheVRhc2tDYXJkKG5ldyBUYXNrKFwiVGFza05hbWVcIiwgXCJUaGlzIGlzIGEgdGVzdCBkZXNjcmlwdGlvblwiLCBcIjEyLzExLzIwMjJcIiwgXCJMb3cgUHJpb3JpdHlcIikpKTtcblxuICAgICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xuICAgIH1cbiAgICBcbiAgICBjcmVhdGVQcm9qZWN0KGluYm94LCBlbnRyeUxpc3QpIHtcbiAgICAgICAgIC8vTmV3IFByb2plY3QgRGFzaGJvYXJkXG4gICAgICAgIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdQcm9qLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdC1jYXJkXCIpO1xuXG4gICAgICAgIGNvbnN0IHByb2pUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwcm9qVGl0bGUudGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCI7XG4gICAgICAgIG5ld1Byb2ouYXBwZW5kQ2hpbGQocHJvalRpdGxlKTtcblxuICAgICAgICBjb25zdCBwcm9qRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBwcm9qTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHByb2pMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBOYW1lOiBcIjtcbiAgICAgICAgcHJvakxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5ldy1wcm9qXCIpO1xuICAgICAgICBwcm9qRmllbGQuYXBwZW5kQ2hpbGQocHJvakxhYmVsKTtcblxuICAgICAgICBjb25zdCBwcm9qSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHByb2pJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy1wcm9qXCIpO1xuICAgICAgICBwcm9qSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJNYXggMTMgY2hhcnNcIik7XG4gICAgICAgIHByb2pJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIxM1wiKTtcbiAgICAgICAgcHJvakZpZWxkLmFwcGVuZENoaWxkKHByb2pJbnB1dCk7XG4gICAgICAgIG5ld1Byb2ouYXBwZW5kQ2hpbGQocHJvakZpZWxkKTtcblxuXG4gICAgICAgIC8vUHJvamVjdCBCdXR0b25zXG4gICAgICAgIGNvbnN0IHByb2pCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvakJ1dHRvbnMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuZXctYnV0dG9uc1wiKTtcbiAgICAgICAgY29uc3QgbmV3UHJvakJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIG5ld1Byb2pCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb25maXJtXCIpO1xuICAgICAgICBuZXdQcm9qQnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGUgUHJvamVjdFwiO1xuICAgICAgICAvL0NyZWF0ZXMgbmV3IHByb2plY3QgYW5kIGFkZHMgaXQgdG8gY29ycmVzcG9uZGluZyBlbnRyeUxpc3QgaW4gdGhlIHNpZGViYXJcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgICAgICAgbmV3UHJvakJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2pJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICBpbmJveC5wcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0KTtcbiAgICAgICAgICAgIGluYm94LmRpc3BsYXlQcm9qZWN0cyhlbnRyeUxpc3QpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aGlsZSAobWFpbi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0aGlzLmRpc3BsYXlQcm9qZWN0RGF0YShwcm9qZWN0KSk7XG4gICAgICAgIH0pXG4gICAgICAgIHByb2pCdXR0b25zLmFwcGVuZENoaWxkKG5ld1Byb2pCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IGNhbmNlbFByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjYW5jZWxQcm9qLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FuY2VsXCIpO1xuICAgICAgICBjYW5jZWxQcm9qLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICAgICAgLy9DYW5jZWxzIHByb2plY3QgY3JlYXRpb24gYW5kIGdvZXMgYmFjayB0byBkZWZhdWx0IHByb2plY3QsIGlmIGFwcGxpY2FibGVcbiAgICAgICAgY2FuY2VsUHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmJveC5wcm9qZWN0QXJyYXkubGVuZ3RoKTtcbiAgICAgICAgICAgIGlmIChpbmJveC5wcm9qZWN0QXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodGhpcy5kaXNwbGF5UHJvamVjdERhdGEoaW5ib3gucHJvamVjdEFycmF5WzBdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHByb2pCdXR0b25zLmFwcGVuZENoaWxkKGNhbmNlbFByb2opO1xuXG4gICAgICAgIG5ld1Byb2ouYXBwZW5kQ2hpbGQocHJvakJ1dHRvbnMpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ld1Byb2o7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3REb207IiwiY2xhc3MgVGFzayB7XG4gICAgc3RhdGljIGlkID0gMTtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbj1cIlwiLCBkdWVkYXRlLCBwcmlvcml0eSwgY29tcGxldGVkPWZhbHNlKSB7XG4gICAgICAgIHRoaXMuaWQgPSBUYXNrLmlkO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlZGF0ZSA9IGR1ZWRhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgICAgIFRhc2suaWQgKz0gMTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7IiwiLy9NYWtlcyBjaGFuZ2VzIHRvIHRoZSBET00gaW4gb3JkZXIgdG8gZGlzcGxheSB0aGUgY3JlYXRlL2VkaXQgdGFzayBzY3JlZW5cblxuY2xhc3MgVGFza0RvbSB7XG4gICAgY3JlYXRlVGFzayhwcm9qZWN0KSB7XG4gICAgLy9OZXcgVGFzayBEYXNoYm9hcmRcbiAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdUYXNrLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmV3LXRhc2stY2FyZFwiKTtcblxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IFwiTmV3IFRhc2tcIjtcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG5cbiAgICAvL1Rhc2sgTmFtZVxuICAgIGNvbnN0IHRhc2tOYW1lRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRhc2tOYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGFza05hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGFzayBOYW1lOiBcIjtcbiAgICB0YXNrTmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stbmFtZVwiKTtcbiAgICB0YXNrTmFtZUZpZWxkLmFwcGVuZENoaWxkKHRhc2tOYW1lTGFiZWwpO1xuXG4gICAgY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1uYW1lXCIpO1xuICAgIHRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJNYXggMjUgY2hhcnNcIik7XG4gICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIyNVwiKTtcbiAgICB0YXNrTmFtZUZpZWxkLmFwcGVuZENoaWxkKHRhc2tOYW1lSW5wdXQpO1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGFza05hbWVGaWVsZCk7XG5cbiAgICAvL1Rhc2sgRHVlIERhdGVcbiAgICBjb25zdCB0YXNrRHVlRGF0ZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRhc2tEdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOiBcIjtcbiAgICB0YXNrRHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stZHVlLWRhdGVcIik7XG4gICAgdGFza0R1ZURhdGVGaWVsZC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZUxhYmVsKTtcblxuICAgIGNvbnN0IHRhc2tEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza0R1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stZHVlLWRhdGVcIik7XG4gICAgdGFza0R1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICB0YXNrRHVlRGF0ZUZpZWxkLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlSW5wdXQpO1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGFza0R1ZURhdGVGaWVsZCk7XG5cbiAgICAvL1Rhc2sgRGVzY3JpcHRpb25cbiAgICBjb25zdCB0YXNrRGVzY0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRGVzY0ZpZWxkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGV4dC1hcmVhXCIpO1xuICAgIGNvbnN0IHRhc2tEZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGFza0Rlc2NMYWJlbC50ZXh0Q29udGVudCA9IFwiVGFzayBEZXNjcmlwdGlvbjogXCI7XG4gICAgdGFza0Rlc2NMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWRlc2NcIik7XG4gICAgdGFza0Rlc2NGaWVsZC5hcHBlbmRDaGlsZCh0YXNrRGVzY0xhYmVsKTtcblxuICAgIGNvbnN0IHRhc2tEZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dEFyZWFcIik7XG4gICAgdGFza0Rlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stZGVzY1wiKTtcbiAgICB0YXNrRGVzY0ZpZWxkLmFwcGVuZENoaWxkKHRhc2tEZXNjSW5wdXQpO1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGFza0Rlc2NGaWVsZCk7XG5cbiAgICAvL1ByaW9yaXRpZXNcbiAgICBjb25zdCBwcmlvcml0aWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcmlvcml0aWVzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdGllc1wiKTtcbiAgICBcbiAgICAvL0xvd1xuICAgIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBsb3cuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgIGxvdy5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwidHJ1ZVwiKTtcbiAgICBsb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb3dcIik7XG4gICAgbG93LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwXCIpO1xuICAgIHByaW9yaXRpZXMuYXBwZW5kQ2hpbGQobG93KTtcblxuICAgIGNvbnN0IGxvd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxvd0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvd1wiKTtcbiAgICBsb3dMYWJlbC50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gICAgcHJpb3JpdGllcy5hcHBlbmRDaGlsZChsb3dMYWJlbCk7XG5cbiAgICAvL01lZGl1bVxuICAgIGNvbnN0IG1lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBtZWQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgIG1lZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lZGl1bVwiKTtcbiAgICBtZWQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInBcIik7XG4gICAgcHJpb3JpdGllcy5hcHBlbmRDaGlsZChtZWQpO1xuXG4gICAgY29uc3QgbWVkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbWVkTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibWVkaXVtXCIpO1xuICAgIG1lZExhYmVsLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgICBwcmlvcml0aWVzLmFwcGVuZENoaWxkKG1lZExhYmVsKTtcblxuICAgIC8vSGlnaFxuICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaGlnaC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gICAgaGlnaC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhpZ2hcIik7XG4gICAgaGlnaC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicFwiKTtcbiAgICBwcmlvcml0aWVzLmFwcGVuZENoaWxkKGhpZ2gpO1xuXG4gICAgY29uc3QgaGlnaExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGhpZ2hMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJoaWdoXCIpO1xuICAgIGhpZ2hMYWJlbC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgIHByaW9yaXRpZXMuYXBwZW5kQ2hpbGQoaGlnaExhYmVsKTtcblxuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQocHJpb3JpdGllcyk7XG5cbiAgICAvL1Rhc2sgQnV0dG9uc1xuICAgIGNvbnN0IHRhc2tCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQnV0dG9ucy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5ldy1idXR0b25zXCIpO1xuICAgIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5ld1Rhc2tCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb25maXJtXCIpO1xuICAgIG5ld1Rhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBUYXNrXCI7XG4gICAgdGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQobmV3VGFza0J1dHRvbik7XG5cbiAgICBjb25zdCBjYW5jZWxUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxUYXNrLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FuY2VsXCIpO1xuICAgIGNhbmNlbFRhc2sudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIHRhc2tCdXR0b25zLmFwcGVuZENoaWxkKGNhbmNlbFRhc2spO1xuXG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZCh0YXNrQnV0dG9ucyk7XG5cbiAgICByZXR1cm4gbmV3VGFzaztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tEb207IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBJbmJveCBmcm9tICcuL0luYm94LmpzJztcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudS5zdmcnO1xuaW1wb3J0IFBsdXMgZnJvbSAnLi9wbHVzLnBuZyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QuanMnO1xuaW1wb3J0IFByb2plY3REb20gZnJvbSAnLi9Qcm9qZWN0RG9tLmpzJztcblxuXG5mdW5jdGlvbiB3ZWJwYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250ZW50XCIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoZWFkZXJcIik7XG4gICAgY29uc3QgbWVudSA9IG5ldyBJbWFnZSgpO1xuICAgIG1lbnUuc3JjID0gTWVudTtcbiAgICBtZW51LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGVhZGVyLWhhbWJ1cmdlclwiKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgY29uc3QgaGVhZGVyUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGhlYWRlclAudGV4dENvbnRlbnQgPSBcIlRvLURvIExpc3RcIjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyUCk7XG4gICAgXG4gICAgY29uc3QgcHJvaiA9IG5ldyBQcm9qZWN0RG9tKCk7XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2lkZWJhclwiKTtcblxuICAgIGNvbnN0IHBsdXMgPSBuZXcgSW1hZ2UoKTtcbiAgICBwbHVzLnNyYyA9IFBsdXM7XG4gICAgcGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB3aGlsZSAobWFpbi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qLmNyZWF0ZVByb2plY3QocHJvamVjdHMsIHByb2plY3QuZW50cnlMaXN0KSk7XG4gICAgfSlcblxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocGx1cyk7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IG5ldyBJbmJveChcImluYm94XCIsIFwiQWxsIFByb2plY3RzXCIpO1xuICAgIGNvbnN0IHRlc3RQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJUZXN0XCIsIFtdKTtcbiAgICAvL1B1c2hlcyB0ZXN0IHByb2plY3QgdG8gaW5ib3ggdG8gZGlzcGxheSBiZWxvd1xuICAgIHByb2plY3RzLnByb2plY3RBcnJheS5wdXNoKHRlc3RQcm9qZWN0KTtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMubWFrZUluYm94KCk7XG4gICAgcHJvamVjdHMuZGlzcGxheVByb2plY3RzKHByb2plY3QuZW50cnlMaXN0KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3QuaW5ib3gpO1xuXG4gICAgY29uc3QgZmF2b3JpdGVzID0gbmV3IEluYm94KFwiZmF2b3JpdGVzXCIsIFwiRmF2b3JpdGVzXCIpO1xuICAgIGNvbnN0IGZhdm9yaXRlID0gZmF2b3JpdGVzLm1ha2VJbmJveCgpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZmF2b3JpdGUuaW5ib3gpO1xuXG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW5cIik7XG5cbiAgIC8vIG1haW4uYXBwZW5kQ2hpbGQocHJvai5kaXNwbGF5UHJvamVjdChlbnRyeS5nZXRBdHRyaWJ1dGUoXCJpZFwiKSkpO1xuXG4gICBcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgICBcbiAgICBcbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3ZWJwYWdlKCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==