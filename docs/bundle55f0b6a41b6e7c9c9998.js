/* eslint-disable */

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;1,100&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Work Sans\", sans-serif;\n}\n\n:root {\n  --background: #d4ecdd;\n  --backgroundSecond: #acd3bb;\n  --text_color: #112031;\n  --hover: #345b63;\n  --hold: #152d35;\n  --success: #1a8a7b;\n  --fail: #b42626;\n}\n\nbody {\n  background-color: var(--background);\n  color: var(--text_color);\n}\n\nh1 {\n  font-size: 3rem;\n  text-align: center;\n  padding: 1rem;\n  margin-bottom: 10rem;\n  text-shadow: -2px 5px 2px var(--backgroundSecond);\n}\n\nh2 {\n  font-size: 2rem;\n  text-align: center;\n}\n\nbutton {\n  border: none;\n  padding: 0.5rem 1rem;\n  background: var(--text_color);\n  color: var(--background);\n  transition: all 0.2s ease-out;\n}\n\nbutton:hover {\n  background: var(--hover);\n}\n\nbutton:active {\n  background: var(--hold);\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  gap: 5rem;\n  flex-flow: row wrap;\n}\n\n.scores {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: 40%;\n  min-width: 380px;\n  box-shadow: 0 0 60px var(--backgroundSecond);\n}\n\n.scores-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.recent-scores {\n  border: 2px solid var(--text_color);\n  width: 100%;\n  min-height: 300px;\n  max-height: 400px;\n  overflow-y: scroll;\n}\n\n.score {\n  padding: 1rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n\n.score:nth-child(even) {\n  background-color: var(--backgroundSecond);\n}\n\nmain > div {\n  padding: 1rem;\n}\n\n.add-score {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.add-score form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\ninput {\n  border: none;\n  padding: 0.5rem 1rem;\n  background: var(--text_color);\n  color: #fff;\n  transition: all 0.3s ease-out;\n}\n\ninput:focus {\n  outline: none;\n  background: var(--hover);\n}\n\n.prompt-message {\n  display: none;\n}\n\n/* Utilities */\n.add-score form button {\n  align-self: flex-end;\n}\n\n::-webkit-scrollbar {\n  width: 5px;\n}\n\n::-webkit-scrollbar-track {\n  background: var(--backgroundSecond);\n}\n\n::-webkit-scrollbar-thumb {\n  background: var(--text_color);\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: var(--hover);\n}\n\n::placeholder {\n  color: var(--backgroundSecond);\n}\n\n.success {\n  display: block;\n  font-size: 12px;\n  border-radius: 5px;\n  padding: 7px 5px;\n  color: var(--background);\n  background-color: var(--success);\n}\n\n.fail {\n  display: block;\n  font-size: 12px;\n  border-radius: 5px;\n  padding: 7px 5px;\n  background-color: var(--fail);\n  color: var(--background);\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;EACA,oCAAA;AAAF;;AAGA;EACE,qBAAA;EACA,2BAAA;EACA,qBAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,eAAA;AAAF;;AAGA;EACE,mCAAA;EACA,wBAAA;AAAF;;AAGA;EACE,eAAA;EACA,kBAAA;EACA,aAAA;EACA,oBAAA;EACA,iDAAA;AAAF;;AAGA;EACE,eAAA;EACA,kBAAA;AAAF;;AAGA;EACE,YAAA;EACA,oBAAA;EACA,6BAAA;EACA,wBAAA;EACA,6BAAA;AAAF;;AAGA;EACE,wBAAA;AAAF;;AAGA;EACE,uBAAA;AAAF;;AAGA;EACE,aAAA;EACA,uBAAA;EACA,SAAA;EACA,mBAAA;AAAF;;AAGA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,4CAAA;AAAF;;AAGA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;AAAF;;AAGA;EACE,mCAAA;EACA,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,aAAA;EACA,iBAAA;EACA,gBAAA;AAAF;;AAGA;EACE,yCAAA;AAAF;;AAGA;EACE,aAAA;AAAF;;AAGA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAAF;;AAGA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAAF;;AAGA;EACE,YAAA;EACA,oBAAA;EACA,6BAAA;EACA,WAAA;EACA,6BAAA;AAAF;;AAGA;EACE,aAAA;EACA,wBAAA;AAAF;;AAGA;EACE,aAAA;AAAF;;AAGA,cAAA;AAEA;EACE,oBAAA;AADF;;AAIA;EACE,UAAA;AADF;;AAIA;EACE,mCAAA;AADF;;AAIA;EACE,6BAAA;AADF;;AAIA;EACE,wBAAA;AADF;;AAIA;EACE,8BAAA;AADF;;AAIA;EACE,cAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,wBAAA;EACA,gCAAA;AADF;;AAIA;EACE,cAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,6BAAA;EACA,wBAAA;AADF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;1,100&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Work Sans', sans-serif;\r\n}\r\n\r\n:root {\r\n  --background: #d4ecdd;\r\n  --backgroundSecond: #acd3bb;\r\n  --text_color: #112031;\r\n  --hover: #345b63;\r\n  --hold: #152d35;\r\n  --success: #1a8a7b;\r\n  --fail: #b42626;\r\n}\r\n\r\nbody {\r\n  background-color: var(--background);\r\n  color: var(--text_color);\r\n}\r\n\r\nh1 {\r\n  font-size: 3rem;\r\n  text-align: center;\r\n  padding: 1rem;\r\n  margin-bottom: 10rem;\r\n  text-shadow: -2px 5px 2px var(--backgroundSecond);\r\n}\r\n\r\nh2 {\r\n  font-size: 2rem;\r\n  text-align: center;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  padding: 0.5rem 1rem;\r\n  background: var(--text_color);\r\n  color: var(--background);\r\n  transition: all 0.2s ease-out;\r\n}\r\n\r\nbutton:hover {\r\n  background: var(--hover);\r\n}\r\n\r\nbutton:active {\r\n  background: var(--hold);\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 5rem;\r\n  flex-flow: row wrap;\r\n}\r\n\r\n.scores {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  width: 40%;\r\n  min-width: 380px;\r\n  box-shadow: 0 0 60px var(--backgroundSecond);\r\n}\r\n\r\n.scores-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 1rem;\r\n}\r\n\r\n.recent-scores {\r\n  border: 2px solid var(--text_color);\r\n  width: 100%;\r\n  min-height: 300px;\r\n  max-height: 400px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.score {\r\n  padding: 1rem;\r\n  font-size: 1.1rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.score:nth-child(even) {\r\n  background-color: var(--backgroundSecond);\r\n}\r\n\r\nmain > div {\r\n  padding: 1rem;\r\n}\r\n\r\n.add-score {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.add-score form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  padding: 0.5rem 1rem;\r\n  background: var(--text_color);\r\n  color: #fff;\r\n  transition: all 0.3s ease-out;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n  background: var(--hover);\r\n}\r\n\r\n.prompt-message {\r\n  display: none;\r\n}\r\n\r\n/* Utilities */\r\n\r\n.add-score form button {\r\n  align-self: flex-end;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background: var(--backgroundSecond);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: var(--text_color) \r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: var(--hover); \r\n}\r\n\r\n::placeholder {\r\n  color: var(--backgroundSecond);\r\n}\r\n\r\n.success {\r\n  display: block;\r\n  font-size: 12px;\r\n  border-radius: 5px;\r\n  padding: 7px 5px;\r\n  color: var(--background);\r\n  background-color: var(--success);\r\n}\r\n\r\n.fail {\r\n  display: block;\r\n  font-size: 12px;\r\n  border-radius: 5px;\r\n  padding: 7px 5px;\r\n  background-color: var(--fail);\r\n  color: var(--background);\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/modules/addScore.js":
/*!*********************************!*\
  !*** ./src/modules/addScore.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ user, score }) => {
  const mainWrapper = document.querySelector('.recent-scores');
  const scoreWrapper = document.createElement('div');
  scoreWrapper.classList.add('score');
  const text = document.createElement('span');
  text.innerText = `${user}: ${score}`;
  scoreWrapper.appendChild(text);
  mainWrapper.appendChild(scoreWrapper);
});

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addScore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addScore.js */ "./src/modules/addScore.js");
/* harmony import */ var _getScores_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getScores.js */ "./src/modules/getScores.js");
/* harmony import */ var _postScore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postScore.js */ "./src/modules/postScore.js");




const nameField = document.getElementById('userName');
const scoreField = document.getElementById('userScore');
const submitScore = document.getElementById('submitScore');
const refreshButton = document.getElementById('refresh');
const clearList = () => {
  const allScores = document.querySelectorAll('.score');
  allScores.forEach((each) => each.remove());
};

refreshButton.addEventListener('click', async () => {
  const promptMessage = document.getElementById('prompt');
  clearList();
  let userScores = [];
  try {
    userScores = await (0,_getScores_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    promptMessage.classList.toggle('success');
    promptMessage.textContent = 'List has been updated successfully';
  } catch (e) {
    promptMessage.classList.toggle('fail');
    promptMessage.textContent = 'Something went wrong while updating the list';
    return `Error! ${e}`;
  }
  if (userScores.result.length > 0) {
    userScores.result.forEach((arr) => {
      (0,_addScore_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
        user: arr.user,
        score: arr.score,
      });
    });
  }
  return 'Added scores';
});

submitScore.addEventListener('click', (e) => {
  e.preventDefault();
  const user = nameField.value;
  const score = scoreField.value;
  if (user && score) {
    (0,_addScore_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      user,
      score,
    });
    (0,_postScore_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
      user,
      score,
    });
    scoreField.value = '';
    nameField.value = '';
  }
});

/***/ }),

/***/ "./src/modules/getScores.js":
/*!**********************************!*\
  !*** ./src/modules/getScores.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/t49nM0xxQMcedjKnsxRS/scores';
  return (await fetch(url)).json();
});

/***/ }),

/***/ "./src/modules/postScore.js":
/*!**********************************!*\
  !*** ./src/modules/postScore.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ user, score }) => {
  const promptMessage = document.getElementById('prompt');
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/t49nM0xxQMcedjKnsxRS/scores';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  }).then(() => {
    promptMessage.classList.toggle('success');
    promptMessage.textContent = 'Scores has been updated successfully';
  }).catch(() => {
    promptMessage.classList.toggle('fail');
    promptMessage.textContent = 'Can\'t post the score. Something went wrong';
  });
});

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
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/app.js */ "./src/modules/app.js");


})();

/******/ })()
;
//# sourceMappingURL=bundle55f0b6a41b6e7c9c9998.js.map