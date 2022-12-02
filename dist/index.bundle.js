"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! images/coffee1.jpg */ "./src/images/coffee1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Inter:wght@100;400;500;600&family=Mochiy+Pop+One&family=Permanent+Marker&family=Roboto:ital,wght@0,100;0,500;0,700;1,100&family=Fraunces&family=Poppins:ital,wght@0,400;0,600;1,400&family=Josefin+Sans:ital,wght@0,200;0,300;0,400;1,200;1,400&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* import fonts: 'Cinzel' , 'Inter', 'Mochiy Pop One', 'Permanent Marker', \n'Roboto', 'Fraunces', 'Poppins', 'Josefin Sans' */\n:root {\n    --dark-font-color: black;\n    --light-font-color: rgb(238, 238, 238);\n    --home-h2-font-color: rgb(9, 61, 107);\n    --home-h2-background:rgba(165, 96, 55, 0.5);\n    --home-p-font-color: rgb(218, 92, 42);\n    --home-p-background:rgb(14, 100, 100, .9);\n    --price-font-color: rgb(219, 81, 27);\n    --menu-h4-color: rgb(7, 33, 56);\n    --border-color: #222;\n    --background-dark: rgba(0, 0, 0, 0.9);\n    --background-light: rgba(0, 0, 0, 0.65);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-attachment:fixed;\n    background-size: cover;\n}\n\nbutton {\n  font-family: 'Josefin Sans';\n  color: var(--light-font-color);\n  cursor: pointer;\n  border-style: none;\n  outline: none;\n}\n/* img.center-img {\n    display: block;\n    width: 60%;\n    opacity: 0.9;\n    border-radius: 25px;\n} */\n\n/* Content */\n.content {    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-items:center;\n    justify-content: space-between;\n    height: 70vh;\n}\n\n/* Header */\nh1 {\n    color: var(--light-font-color);\n    font-size: 64px;\n    font-family: 'Inter';\n    font-weight: 500;\n}\n\n.header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 1rem;\n    background-color: var(--background-dark);\n    border-color: 1px solid var(--border-color);\n}\n\n.button-nav {\n  padding: .5rem;\n  font-size: 1.2rem;\n  background-color: transparent;\n  border-bottom: 2px solid transparent;\n  transition: transform 0.3s;\n}\n/* Todo add active tab elements in the JS */\n.button-nav.active {\n  border-bottom: 2px solid var(--light-font-color);\n}\n\n.button-nav:hover {\n  transform: translateY(-10%);\n}\n\n/* Main */\n\n#home {\n    max-width: 75%;\n    min-width: 708px;\n    height: calc(13rem + 5vw);\n    padding-bottom: 4rem;\n    margin-bottom: 2rem;\n    font-size: 2rem;\n    color: var(--dark-font-color);\n    display: flex;\n    flex-direction: column;\n}\n\n.welcome-text {\n  padding-bottom: 4rem;\n  margin-bottom: 2rem;\n  display: flex;\n  flex-direction: column; \n  align-self: center;\n  justify-self: center;\n}\n\n.welcome-text p.pmain {\n  padding: .25rem 1rem;\n  align-content: center; \n  text-align: center;\n}\n\nh2.pmain {\n  font-family: 'Josefin Sans';\n  font-style: italic;\n  font-size: 56px;\n  text-align: center;\n  border-radius: .8rem;\n  color: var(--home-h2-font-color);\n  background-color:var(--home-h2-background);\n  display: table; /* keep the background color wrapped tight */\n  padding: .3rem 1rem 0 .5rem;\n  margin-bottom: .5rem;\n}\n  \np.pmain {\n  font-family: 'Josefin Sans';\n  font-style: italic;\n  color: var(--home-p-font-color);\n  background: var( --home-p-background);\n  border-radius: 1.3rem;\n  display: table; /* keep the background color wrapped tight */\n  margin: 0px auto 0px auto; /* keep the table centered */\n}\n.info{\n  flex-basis:content;\n  flex-shrink: 0;\n}  \n\n#home .info {\n  background-color: var(--background-light);\n  border: 2px solid var(--border-color);\n  position: absolute;\n  top: 71%;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: 400px;\n  height: 212px;\n  background: rgba(0, 0, 0, 0.8);\n  border-radius: 6px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-items: center;\n}\n\n\n#home .address,\n#home .hours {\n  font-size: 1.8rem;\n  font-weight: 400;\n  font-family: 'Cinzel';\n  display: flex;\n  color: var(--light-font-color);\n  padding: 0 .2rem 0 1rem;\n  text-align: left;\n  align-items: center;\n  justify-items: center;\n}\n\nspan,\n.address,\n.hours{\n  gap: 1rem;\n}\n\n/*Menu*/\n\n#menu {\n  width: 46%;\n  background: rgb(14, 100, 100, .5);\n  padding: calc(2rem + 2vw);\n  border-radius: 1.2rem;\n  margin: 4rem auto;\n  display: grid;\n  grid-template-columns: repeat(2, 4fr);\n  grid-gap: 4rem;\n\n}\n.menu{\n  width: 36vw;\n}\n#menu h3{\n  font-size: calc(2rem + 1vw);\n  font-family: 'Josefin Sans';\n  text-align: center;\n  margin-bottom: 1rem;\n}\n#menu h4{\n  font-family: 'Permanent Marker';\n  font-size: calc(2rem + 0.5vw);\n  margin-left: 0;\n}\n.menu-item {\n  flex-basis: 20rem;\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.menu-item span{\n  justify-self: end;\n}\n\n.item-content {\n  /* padding: 0 1rem; */\n  font-family: 'Inter';\n  font-size: calc(1rem + .5vw);\n  color: var(--dark-font-color);\n  flex-grow: 2;\n}\n\n#menu .item-content span {\n  font-size: calc(1rem + 1vw);\n  \n}\n\n#menu h4{\n  color:var(--menu-h4-color);\n}\n#menu span{\n  color: var(--price-font-color);\n  margin-left: 4rem;\n  \n}\n/*Contact*/\n\n#contact h1{\n  color: var(--menu-h4-color);\n}\n#contact .info p {\n  font-family: 'Poppins';\n  text-align: justify;\n  font-size: 1.5rem;\n  margin: 1.5rem 0;\n}\n\n#contact .info i {\n  font-size: 1.5rem;\n  padding-right: 1rem;\n  color: var(--price-font-color);\n}\n\n\n/*Footer*/\na {\n    display: inline-block;\n    text-decoration:none;\n    color: inherit\n  }\n.footer {\n    font-family: 'Mochiy Pop One';\n    position: bottom;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    font-size: 18px;\n  }\n  \n  .fa-github {\n    font-size: 1.5rem;\n    transition: transform 0.3s ease-in-out;\n    margin-bottom: -4px;\n    margin-left: 4px;\n  }\n  \n  .fa-github:hover {\n    transform: /* rotate(360deg)  */ scale(1.1); /* Don't want it to rotate on this page */\n    color: var(--light-font-color);\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Inter:wght@100;400;500;600&family=Mochiy+Pop+One&family=Permanent+Marker&family=Roboto:ital,wght@0,100;0,500;0,700;1,100&family=Fraunces&family=Poppins:ital,wght@0,400;0,600;1,400&family=Josefin+Sans:ital,wght@0,200;0,300;0,400;1,200;1,400&display=swap');\n/* import fonts: 'Cinzel' , 'Inter', 'Mochiy Pop One', 'Permanent Marker', \n'Roboto', 'Fraunces', 'Poppins', 'Josefin Sans' */\n:root {\n    --dark-font-color: black;\n    --light-font-color: rgb(238, 238, 238);\n    --home-h2-font-color: rgb(9, 61, 107);\n    --home-h2-background:rgba(165, 96, 55, 0.5);\n    --home-p-font-color: rgb(218, 92, 42);\n    --home-p-background:rgb(14, 100, 100, .9);\n    --price-font-color: rgb(219, 81, 27);\n    --menu-h4-color: rgb(7, 33, 56);\n    --border-color: #222;\n    --background-dark: rgba(0, 0, 0, 0.9);\n    --background-light: rgba(0, 0, 0, 0.65);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n    background-image: url('images/coffee1.jpg');\n    background-attachment:fixed;\n    background-size: cover;\n}\n\nbutton {\n  font-family: 'Josefin Sans';\n  color: var(--light-font-color);\n  cursor: pointer;\n  border-style: none;\n  outline: none;\n}\n/* img.center-img {\n    display: block;\n    width: 60%;\n    opacity: 0.9;\n    border-radius: 25px;\n} */\n\n/* Content */\n.content {    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-items:center;\n    justify-content: space-between;\n    height: 70vh;\n}\n\n/* Header */\nh1 {\n    color: var(--light-font-color);\n    font-size: 64px;\n    font-family: 'Inter';\n    font-weight: 500;\n}\n\n.header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 1rem;\n    background-color: var(--background-dark);\n    border-color: 1px solid var(--border-color);\n}\n\n.button-nav {\n  padding: .5rem;\n  font-size: 1.2rem;\n  background-color: transparent;\n  border-bottom: 2px solid transparent;\n  transition: transform 0.3s;\n}\n/* Todo add active tab elements in the JS */\n.button-nav.active {\n  border-bottom: 2px solid var(--light-font-color);\n}\n\n.button-nav:hover {\n  transform: translateY(-10%);\n}\n\n/* Main */\n\n#home {\n    max-width: 75%;\n    min-width: 708px;\n    height: calc(13rem + 5vw);\n    padding-bottom: 4rem;\n    margin-bottom: 2rem;\n    font-size: 2rem;\n    color: var(--dark-font-color);\n    display: flex;\n    flex-direction: column;\n}\n\n.welcome-text {\n  padding-bottom: 4rem;\n  margin-bottom: 2rem;\n  display: flex;\n  flex-direction: column; \n  align-self: center;\n  justify-self: center;\n}\n\n.welcome-text p.pmain {\n  padding: .25rem 1rem;\n  align-content: center; \n  text-align: center;\n}\n\nh2.pmain {\n  font-family: 'Josefin Sans';\n  font-style: italic;\n  font-size: 56px;\n  text-align: center;\n  border-radius: .8rem;\n  color: var(--home-h2-font-color);\n  background-color:var(--home-h2-background);\n  display: table; /* keep the background color wrapped tight */\n  padding: .3rem 1rem 0 .5rem;\n  margin-bottom: .5rem;\n}\n  \np.pmain {\n  font-family: 'Josefin Sans';\n  font-style: italic;\n  color: var(--home-p-font-color);\n  background: var( --home-p-background);\n  border-radius: 1.3rem;\n  display: table; /* keep the background color wrapped tight */\n  margin: 0px auto 0px auto; /* keep the table centered */\n}\n.info{\n  flex-basis:content;\n  flex-shrink: 0;\n}  \n\n#home .info {\n  background-color: var(--background-light);\n  border: 2px solid var(--border-color);\n  position: absolute;\n  top: 71%;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: 400px;\n  height: 212px;\n  background: rgba(0, 0, 0, 0.8);\n  border-radius: 6px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-items: center;\n}\n\n\n#home .address,\n#home .hours {\n  font-size: 1.8rem;\n  font-weight: 400;\n  font-family: 'Cinzel';\n  display: flex;\n  color: var(--light-font-color);\n  padding: 0 .2rem 0 1rem;\n  text-align: left;\n  align-items: center;\n  justify-items: center;\n}\n\nspan,\n.address,\n.hours{\n  gap: 1rem;\n}\n\n/*Menu*/\n\n#menu {\n  width: 46%;\n  background: rgb(14, 100, 100, .5);\n  padding: calc(2rem + 2vw);\n  border-radius: 1.2rem;\n  margin: 4rem auto;\n  display: grid;\n  grid-template-columns: repeat(2, 4fr);\n  grid-gap: 4rem;\n\n}\n.menu{\n  width: 36vw;\n}\n#menu h3{\n  font-size: calc(2rem + 1vw);\n  font-family: 'Josefin Sans';\n  text-align: center;\n  margin-bottom: 1rem;\n}\n#menu h4{\n  font-family: 'Permanent Marker';\n  font-size: calc(2rem + 0.5vw);\n  margin-left: 0;\n}\n.menu-item {\n  flex-basis: 20rem;\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.menu-item span{\n  justify-self: end;\n}\n\n.item-content {\n  /* padding: 0 1rem; */\n  font-family: 'Inter';\n  font-size: calc(1rem + .5vw);\n  color: var(--dark-font-color);\n  flex-grow: 2;\n}\n\n#menu .item-content span {\n  font-size: calc(1rem + 1vw);\n  \n}\n\n#menu h4{\n  color:var(--menu-h4-color);\n}\n#menu span{\n  color: var(--price-font-color);\n  margin-left: 4rem;\n  \n}\n/*Contact*/\n\n#contact h1{\n  color: var(--menu-h4-color);\n}\n#contact .info p {\n  font-family: 'Poppins';\n  text-align: justify;\n  font-size: 1.5rem;\n  margin: 1.5rem 0;\n}\n\n#contact .info i {\n  font-size: 1.5rem;\n  padding-right: 1rem;\n  color: var(--price-font-color);\n}\n\n\n/*Footer*/\na {\n    display: inline-block;\n    text-decoration:none;\n    color: inherit\n  }\n.footer {\n    font-family: 'Mochiy Pop One';\n    position: bottom;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    font-size: 18px;\n  }\n  \n  .fa-github {\n    font-size: 1.5rem;\n    transition: transform 0.3s ease-in-out;\n    margin-bottom: -4px;\n    margin-left: 4px;\n  }\n  \n  .fa-github:hover {\n    transform: /* rotate(360deg)  */ scale(1.1); /* Don't want it to rotate on this page */\n    color: var(--light-font-color);\n  }"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContact": () => (/* binding */ loadContact)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");

function createContact(){
    const contact = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('contact');
    contact.innerHTML = `
    <h1>Contact us</h1>
  </div>
  <div class="contact-container">
    <div class="info">
      <div class="address">
        <p>
          <i class="fi-xnsuxl-map-marker-solid"></i>3901 Elm Drive<br />New York, NY 10004
        </p>
      </div>
      <div class="hours">
        <p>
          <i class="fi-cnsuhl-clock-solid"></i
          ><span>Mon-Thurs:</span>7am-7pm<br /><span>Fri-Sun:</span
          >7am-11pm
        </p>
      </div>
      <div class="phone">
        <p><i class="fi-xnsrxl-phone-solid"></i>(123) 456-7891</p>
      </div>
      <div class="contact-form">
        <form onsubmit="return false">
          <h3><i class="fi-xwsuxl-envelope-solid"></i>Message us</h3>
          <div class="input-box">
            <input type="text" required />
            <span>Full Name</span>
          </div>
          <div class="input-box">
            <input type="text" required />
            <span>Email</span>
          </div>
          <div class="input-box">
            <textarea required></textarea>
            <span>Type your message...</span>
          </div>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
    <iframe
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830854996!2d-74.11976404949759!3d40.69766374879398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1669929406115!5m2!1sen!2sus" 
    width="600" 
    height="450" 
    style="border:0;" a
    llowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
    `;

    return contact;
}
function loadContact(){
    let main = document.querySelector('main');
    main.innerHTML='';
    main.setAttribute('id','contact');
    main.classList.remove('home','menu');
    main.classList.add('contact');

    main.appendChild(createContact());
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDiv": () => (/* binding */ createDiv),
/* harmony export */   "createP": () => (/* binding */ createP),
/* harmony export */   "loadHome": () => (/* binding */ loadHome)
/* harmony export */ });

function createDiv(classname){
    let div = document.createElement('div');
    div.classList.add(`${classname}`);
    
    return div;
}
function createP(classname, text){
    let p = document.createElement('p');
    p.textContent = `${text}`;
    p.classList.add(`${classname}`);
    return p;
}  
function createWelcomeText(){
    let welcomeText = createDiv('welcome-text');
    let h2Text = document.createElement('h2');
    h2Text.classList.add('pmain');
    h2Text.textContent="Come join us at the internet's best coffee shop!";
    let pText = createP('pmain','Grab a soothing sip today');
    welcomeText.appendChild(h2Text);
    welcomeText.appendChild(pText);
    return welcomeText;
    
}
function createInfo(){
    let info = createDiv('info');
    let address = createDiv('address');
    address.innerHTML =`<span><i class="fi-xnsuxl-map-marker-solid"><svg class="fi-padding" role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d=" M 500 88C 564 88 628 108 680 144C 794 222 843 379 794 507C 744 612 693 716 643 821C 617 870 601 930 548 957C 494 988 426 956 398 904C 340 788 285 670 228 553C 187 480 176 390 201 309C 237 182 362 88 494 88C 496 88 498 88 500 88C 500 88 500 88 500 88M 387 400C 387 462 438 512 500 512C 562 512 613 462 613 400C 613 338 562 287 500 287C 438 287 387 338 387 400C 387 400 387 400 387 400" transform=""></path></svg></i></span><p>3901 Elm Drive<br>New York, NY 10004</p>`;
    info.appendChild(address);

    let hours = createDiv('hours');
    hours.innerHTML =`<span><i class="fi-cnsuhl-clock-solid"><svg class="fi-padding" role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d="M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0 M 550 250C 550 250 550 445 550 445C 565 458 575 478 575 500C 575 541 541 575 500 575C 499 575 497 575 496 575C 496 575 285 785 285 785C 266 805 234 806 214 786C 194 766 195 734 215 715C 215 715 425 504 425 504C 425 503 425 501 425 500C 425 478 435 458 450 445C 450 445 450 250 450 250C 450 222 472 200 499 199C 527 199 550 222 550 250C 550 250 550 250 550 250" transform="translate(1000,0) scale(-1,1) "></path></svg></i></span>
    <p>
    <span>Mon-Thurs: </span>7am-7pm<br><span>Fri-Sun: </span>7am-11pm
    </p>`
    info.appendChild(hours);
    return info;
}

function loadHome() {
    let main = document.querySelector('main');
    main.classList.add('home');
    main.setAttribute('id','home');
    main.textContent= "";
    main.appendChild(createWelcomeText());
    main.appendChild(createInfo());
    
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _loadPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadPage.js */ "./src/loadPage.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");





/* //Make sure page doesn't refresh on form submit
document.querySelector(`[type="submit"]`).addEventListener("click", () => {
    document.querySelector("form").reset();
}); */
(0,_loadPage_js__WEBPACK_IMPORTED_MODULE_1__.initWebsite)();




/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initWebsite": () => (/* binding */ initWebsite),
/* harmony export */   "setActiveButton": () => (/* binding */ setActiveButton)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
//import {setActiveButton} from './index.js';




function createHeader() {
    let header = document.createElement('header');
    header.classList.add('header');
    let title = document.createElement('h1');
    title.textContent = 'Castle Coffee';
    title.classList.add('title');
    header.appendChild(title);
    header.appendChild(createNav())

    return header;
}
function createNav() {
    let nav = document.createElement('nav');
    let homeButton = document.createElement('button');
    homeButton.classList.add('button-nav');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', function (e){
        if(e.target.classList.contains('active')) return;
        setActiveButton(homeButton);
        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)(); 
    });
    nav.appendChild(homeButton);

    let menuButton = document.createElement('button');
    menuButton.classList.add('button-nav');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', function (e){
        if(e.target.classList.contains('active')) return;
        setActiveButton(menuButton);
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();
    });
    nav.appendChild(menuButton);

    let contactButton = document.createElement('button');
    contactButton.classList.add('button-nav');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', function (e){
        if(e.target.classList.contains('active')) return;
        setActiveButton(contactButton);
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.loadContact)()
    });
    nav.appendChild(contactButton);

    return nav;
}
function setActiveButton(button) {
    let buttons = document.querySelectorAll ('.button-nav');
    buttons.forEach(button => {
        if (button !== this) {
            button.classList.remove('active');
        }
    });
    button.classList.add("active");
}

function createMain() {
    let main = document.createElement('main');
    main.setAttribute('id','home');
    main.classList.add('home');

    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const pFooter = document.createElement('p');
    const ghubLink = document.createElement('a');
    ghubLink.href = "https://github.com/xandernesta/odin-restaurant/";
    //ghubLink.target = "_blank";
    pFooter.appendChild(ghubLink);
    pFooter.innerHtml = '&nbsp;';
    pFooter.textContent = "Xander";
    pFooter.innerHtml += '&nbsp;';
    pFooter.textContent +="© 2022";
    const ghubImg = document.createElement('i');
    ghubImg.classList.add('fa-github');
    ghubImg.classList.add('fa-brands');
    ghubImg.setAttribute=('alt','github icon');
    pFooter.appendChild(ghubImg);

    footer.appendChild(pFooter);
    return footer;
}
function initWebsite() {
    let content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();
    //loadContact();
    setActiveButton(document.querySelector(".button-nav"));
    


}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");


function createMenu(){
    const menuDiv = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('menu');
    const category1 = createMenuH3('Coffee');
    menuDiv.appendChild(category1);
    menuDiv.appendChild(createMenuItem('Drip','$3.50', 'Your choice of delicious smooth, blonde, medium, or dark roasts.'));
    menuDiv.appendChild(createMenuItem('Espresso','$2.75', "Best single shot you'll ever taste"));
    menuDiv.appendChild(createMenuItem('Latte','$4.50', "Our signature espresso, topped with silky smooth milk or non-dairy substitute, and a fluffy layer of foam"));
    menuDiv.appendChild(createMenuItem('Cappucino','$4.75', "Espresso w/ steamed milk and foam, top with cinnamon sugar"));
    menuDiv.appendChild(createMenuItem('Mocha','$5.00', "Delicious combo of our finest coffee, chocolate and milk"));
    menuDiv.appendChild(createMenuItem('Cold Brew','$4.50', "Slow roasted robust blend steeped overnight at subthermal temperatures"));

    const category2 = createMenuH3('Pastry');
    menuDiv.appendChild(category2);
    menuDiv.appendChild(createMenuItem('Butter Croissant' ,'$3.00',"Classic flaky and smothered in butter croissant"));
    menuDiv.appendChild(createMenuItem('Pain Au Chocolat','$3.25',"Flaky and buttery pastry filled with the finest chocolate"));
    menuDiv.appendChild(createMenuItem('SnickerDoodle','$2.50',"Soft, chewy, addictive sweet cookie treat"));
    menuDiv.appendChild(createMenuItem('Blueberry Muffin','$3.25',"Handpicked blueberries mixed in soft pillowy muffins that melt in your mouth"));

    return menuDiv;
}
function createMenuH3(category){
    let h3 = document.createElement('h3');
    h3.classList.add('menu-h3');
    h3.textContent = `${category}`;

    return h3;
}
function createMenuItem(name, price, description){
    let item = document.createElement('h4');
    item.classList.add('menu-item')
    item.textContent = `${name}`;
    let itemPrice = document.createElement('span');
    itemPrice.textContent= `${price}`;
    item.appendChild(itemPrice);
    let descrip = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createP)('item-content',`${description}`);
    item.appendChild(descrip);

    return item;
}
function loadMenu() {
    let main = document.querySelector('main');
    main.innerHTML='';
    main.setAttribute('id','menu');
    main.classList.remove('home','contact');
    main.classList.add('menu');
    let menu = createMenu();
    
    
    main.appendChild(menu);
}




/***/ }),

/***/ "./src/images/coffee1.jpg":
/*!********************************!*\
  !*** ./src/images/coffee1.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "00d1807429024cad4ef4.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbG9hZFBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImltYWdlcy9jb2ZmZWUxLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2luemVsOndnaHRANDAwOzUwMDs2MDAmZmFtaWx5PUludGVyOndnaHRAMTAwOzQwMDs1MDA7NjAwJmZhbWlseT1Nb2NoaXkrUG9wK09uZSZmYW1pbHk9UGVybWFuZW50K01hcmtlciZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDUwMDswLDcwMDsxLDEwMCZmYW1pbHk9RnJhdW5jZXMmZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsNDAwOzAsNjAwOzEsNDAwJmZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzEsMjAwOzEsNDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBpbXBvcnQgZm9udHM6ICdDaW56ZWwnICwgJ0ludGVyJywgJ01vY2hpeSBQb3AgT25lJywgJ1Blcm1hbmVudCBNYXJrZXInLCBcXG4nUm9ib3RvJywgJ0ZyYXVuY2VzJywgJ1BvcHBpbnMnLCAnSm9zZWZpbiBTYW5zJyAqL1xcbjpyb290IHtcXG4gICAgLS1kYXJrLWZvbnQtY29sb3I6IGJsYWNrO1xcbiAgICAtLWxpZ2h0LWZvbnQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcXG4gICAgLS1ob21lLWgyLWZvbnQtY29sb3I6IHJnYig5LCA2MSwgMTA3KTtcXG4gICAgLS1ob21lLWgyLWJhY2tncm91bmQ6cmdiYSgxNjUsIDk2LCA1NSwgMC41KTtcXG4gICAgLS1ob21lLXAtZm9udC1jb2xvcjogcmdiKDIxOCwgOTIsIDQyKTtcXG4gICAgLS1ob21lLXAtYmFja2dyb3VuZDpyZ2IoMTQsIDEwMCwgMTAwLCAuOSk7XFxuICAgIC0tcHJpY2UtZm9udC1jb2xvcjogcmdiKDIxOSwgODEsIDI3KTtcXG4gICAgLS1tZW51LWg0LWNvbG9yOiByZ2IoNywgMzMsIDU2KTtcXG4gICAgLS1ib3JkZXItY29sb3I6ICMyMjI7XFxuICAgIC0tYmFja2dyb3VuZC1kYXJrOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxuICAgIC0tYmFja2dyb3VuZC1saWdodDogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6Zml4ZWQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2Fucyc7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4vKiBpbWcuY2VudGVyLWltZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufSAqL1xcblxcbi8qIENvbnRlbnQgKi9cXG4uY29udGVudCB7ICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDcwdmg7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbmgxIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDY0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWRhcmspO1xcbiAgICBib3JkZXItY29sb3I6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4uYnV0dG9uLW5hdiB7XFxuICBwYWRkaW5nOiAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG59XFxuLyogVG9kbyBhZGQgYWN0aXZlIHRhYiBlbGVtZW50cyBpbiB0aGUgSlMgKi9cXG4uYnV0dG9uLW5hdi5hY3RpdmUge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uYnV0dG9uLW5hdjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxufVxcblxcbi8qIE1haW4gKi9cXG5cXG4jaG9tZSB7XFxuICAgIG1heC13aWR0aDogNzUlO1xcbiAgICBtaW4td2lkdGg6IDcwOHB4O1xcbiAgICBoZWlnaHQ6IGNhbGMoMTNyZW0gKyA1dncpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1mb250LWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLndlbGNvbWUtdGV4dCB7XFxuICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLndlbGNvbWUtdGV4dCBwLnBtYWluIHtcXG4gIHBhZGRpbmc6IC4yNXJlbSAxcmVtO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyOyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDIucG1haW4ge1xcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiA1NnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogLjhyZW07XFxuICBjb2xvcjogdmFyKC0taG9tZS1oMi1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0taG9tZS1oMi1iYWNrZ3JvdW5kKTtcXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiBrZWVwIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHdyYXBwZWQgdGlnaHQgKi9cXG4gIHBhZGRpbmc6IC4zcmVtIDFyZW0gMCAuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbn1cXG4gIFxcbnAucG1haW4ge1xcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6IHZhcigtLWhvbWUtcC1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQ6IHZhciggLS1ob21lLXAtYmFja2dyb3VuZCk7XFxuICBib3JkZXItcmFkaXVzOiAxLjNyZW07XFxuICBkaXNwbGF5OiB0YWJsZTsgLyoga2VlcCB0aGUgYmFja2dyb3VuZCBjb2xvciB3cmFwcGVkIHRpZ2h0ICovXFxuICBtYXJnaW46IDBweCBhdXRvIDBweCBhdXRvOyAvKiBrZWVwIHRoZSB0YWJsZSBjZW50ZXJlZCAqL1xcbn1cXG4uaW5mb3tcXG4gIGZsZXgtYmFzaXM6Y29udGVudDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn0gIFxcblxcbiNob21lIC5pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNzElO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDIxMnB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbiNob21lIC5hZGRyZXNzLFxcbiNob21lIC5ob3VycyB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LWZhbWlseTogJ0NpbnplbCc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZzogMCAuMnJlbSAwIDFyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuc3BhbixcXG4uYWRkcmVzcyxcXG4uaG91cnN7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi8qTWVudSovXFxuXFxuI21lbnUge1xcbiAgd2lkdGg6IDQ2JTtcXG4gIGJhY2tncm91bmQ6IHJnYigxNCwgMTAwLCAxMDAsIC41KTtcXG4gIHBhZGRpbmc6IGNhbGMoMnJlbSArIDJ2dyk7XFxuICBib3JkZXItcmFkaXVzOiAxLjJyZW07XFxuICBtYXJnaW46IDRyZW0gYXV0bztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA0ZnIpO1xcbiAgZ3JpZC1nYXA6IDRyZW07XFxuXFxufVxcbi5tZW51e1xcbiAgd2lkdGg6IDM2dnc7XFxufVxcbiNtZW51IGgze1xcbiAgZm9udC1zaXplOiBjYWxjKDJyZW0gKyAxdncpO1xcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuI21lbnUgaDR7XFxuICBmb250LWZhbWlseTogJ1Blcm1hbmVudCBNYXJrZXInO1xcbiAgZm9udC1zaXplOiBjYWxjKDJyZW0gKyAwLjV2dyk7XFxuICBtYXJnaW4tbGVmdDogMDtcXG59XFxuLm1lbnUtaXRlbSB7XFxuICBmbGV4LWJhc2lzOiAyMHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLm1lbnUtaXRlbSBzcGFue1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5pdGVtLWNvbnRlbnQge1xcbiAgLyogcGFkZGluZzogMCAxcmVtOyAqL1xcbiAgZm9udC1mYW1pbHk6ICdJbnRlcic7XFxuICBmb250LXNpemU6IGNhbGMoMXJlbSArIC41dncpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstZm9udC1jb2xvcik7XFxuICBmbGV4LWdyb3c6IDI7XFxufVxcblxcbiNtZW51IC5pdGVtLWNvbnRlbnQgc3BhbiB7XFxuICBmb250LXNpemU6IGNhbGMoMXJlbSArIDF2dyk7XFxuICBcXG59XFxuXFxuI21lbnUgaDR7XFxuICBjb2xvcjp2YXIoLS1tZW51LWg0LWNvbG9yKTtcXG59XFxuI21lbnUgc3BhbntcXG4gIGNvbG9yOiB2YXIoLS1wcmljZS1mb250LWNvbG9yKTtcXG4gIG1hcmdpbi1sZWZ0OiA0cmVtO1xcbiAgXFxufVxcbi8qQ29udGFjdCovXFxuXFxuI2NvbnRhY3QgaDF7XFxuICBjb2xvcjogdmFyKC0tbWVudS1oNC1jb2xvcik7XFxufVxcbiNjb250YWN0IC5pbmZvIHAge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbjogMS41cmVtIDA7XFxufVxcblxcbiNjb250YWN0IC5pbmZvIGkge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLXByaWNlLWZvbnQtY29sb3IpO1xcbn1cXG5cXG5cXG4vKkZvb3RlciovXFxuYSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0XFxuICB9XFxuLmZvb3RlciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9jaGl5IFBvcCBPbmUnO1xcbiAgICBwb3NpdGlvbjogYm90dG9tO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcbiAgXFxuICAuZmEtZ2l0aHViIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtNHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgfVxcbiAgXFxuICAuZmEtZ2l0aHViOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiAvKiByb3RhdGUoMzYwZGVnKSAgKi8gc2NhbGUoMS4xKTsgLyogRG9uJ3Qgd2FudCBpdCB0byByb3RhdGUgb24gdGhpcyBwYWdlICovXFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO2lEQUNpRDtBQUNqRDtJQUNJLHdCQUF3QjtJQUN4QixzQ0FBc0M7SUFDdEMscUNBQXFDO0lBQ3JDLDJDQUEyQztJQUMzQyxxQ0FBcUM7SUFDckMseUNBQXlDO0lBQ3pDLG9DQUFvQztJQUNwQywrQkFBK0I7SUFDL0Isb0JBQW9CO0lBQ3BCLHFDQUFxQztJQUNyQyx1Q0FBdUM7QUFDM0M7O0FBRUE7OztFQUdFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0lBQ0kseURBQTJDO0lBQzNDLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7Ozs7O0dBS0c7O0FBRUgsWUFBWTtBQUNaO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCOztBQUVBLFdBQVc7QUFDWDtJQUNJLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFB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Qiw4QkFBOEI7QUFDaEM7OztBQUdBLFNBQVM7QUFDVDtJQUNJLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEI7RUFDRjtBQUNGO0lBQ0ksNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsT0FBTztJQUNQLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsMkNBQTJDLEVBQUUseUNBQXlDO0lBQ3RGLDhCQUE4QjtFQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DaW56ZWw6d2dodEA0MDA7NTAwOzYwMCZmYW1pbHk9SW50ZXI6d2dodEAxMDA7NDAwOzUwMDs2MDAmZmFtaWx5PU1vY2hpeStQb3ArT25lJmZhbWlseT1QZXJtYW5lbnQrTWFya2VyJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsNTAwOzAsNzAwOzEsMTAwJmZhbWlseT1GcmF1bmNlcyZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCw0MDA7MCw2MDA7MSw0MDAmZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MSwyMDA7MSw0MDAmZGlzcGxheT1zd2FwJyk7XFxuLyogaW1wb3J0IGZvbnRzOiAnQ2luemVsJyAsICdJbnRlcicsICdNb2NoaXkgUG9wIE9uZScsICdQZXJtYW5lbnQgTWFya2VyJywgXFxuJ1JvYm90bycsICdGcmF1bmNlcycsICdQb3BwaW5zJywgJ0pvc2VmaW4gU2FucycgKi9cXG46cm9vdCB7XFxuICAgIC0tZGFyay1mb250LWNvbG9yOiBibGFjaztcXG4gICAgLS1saWdodC1mb250LWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XFxuICAgIC0taG9tZS1oMi1mb250LWNvbG9yOiByZ2IoOSwgNjEsIDEwNyk7XFxuICAgIC0taG9tZS1oMi1iYWNrZ3JvdW5kOnJnYmEoMTY1LCA5NiwgNTUsIDAuNSk7XFxuICAgIC0taG9tZS1wLWZvbnQtY29sb3I6IHJnYigyMTgsIDkyLCA0Mik7XFxuICAgIC0taG9tZS1wLWJhY2tncm91bmQ6cmdiKDE0LCAxMDAsIDEwMCwgLjkpO1xcbiAgICAtLXByaWNlLWZvbnQtY29sb3I6IHJnYigyMTksIDgxLCAyNyk7XFxuICAgIC0tbWVudS1oNC1jb2xvcjogcmdiKDcsIDMzLCA1Nik7XFxuICAgIC0tYm9yZGVyLWNvbG9yOiAjMjIyO1xcbiAgICAtLWJhY2tncm91bmQtZGFyazogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbiAgICAtLWJhY2tncm91bmQtbGlnaHQ6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvY29mZmVlMS5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OmZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLyogaW1nLmNlbnRlci1pbWcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn0gKi9cXG5cXG4vKiBDb250ZW50ICovXFxuLmNvbnRlbnQgeyAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczpjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgaGVpZ2h0OiA3MHZoO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5oMSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiA2NHB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJztcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1kYXJrKTtcXG4gICAgYm9yZGVyLWNvbG9yOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLmJ1dHRvbi1uYXYge1xcbiAgcGFkZGluZzogLjVyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcbi8qIFRvZG8gYWRkIGFjdGl2ZSB0YWIgZWxlbWVudHMgaW4gdGhlIEpTICovXFxuLmJ1dHRvbi1uYXYuYWN0aXZlIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcXG59XFxuXFxuLmJ1dHRvbi1uYXY6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xcbn1cXG5cXG4vKiBNYWluICovXFxuXFxuI2hvbWUge1xcbiAgICBtYXgtd2lkdGg6IDc1JTtcXG4gICAgbWluLXdpZHRoOiA3MDhweDtcXG4gICAgaGVpZ2h0OiBjYWxjKDEzcmVtICsgNXZ3KTtcXG4gICAgcGFkZGluZy1ib3R0b206IDRyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZm9udC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi53ZWxjb21lLXRleHQge1xcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi53ZWxjb21lLXRleHQgcC5wbWFpbiB7XFxuICBwYWRkaW5nOiAuMjVyZW0gMXJlbTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmgyLnBtYWluIHtcXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogNTZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IC44cmVtO1xcbiAgY29sb3I6IHZhcigtLWhvbWUtaDItZm9udC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWhvbWUtaDItYmFja2dyb3VuZCk7XFxuICBkaXNwbGF5OiB0YWJsZTsgLyoga2VlcCB0aGUgYmFja2dyb3VuZCBjb2xvciB3cmFwcGVkIHRpZ2h0ICovXFxuICBwYWRkaW5nOiAuM3JlbSAxcmVtIDAgLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG59XFxuICBcXG5wLnBtYWluIHtcXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiB2YXIoLS1ob21lLXAtZm9udC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kOiB2YXIoIC0taG9tZS1wLWJhY2tncm91bmQpO1xcbiAgYm9yZGVyLXJhZGl1czogMS4zcmVtO1xcbiAgZGlzcGxheTogdGFibGU7IC8qIGtlZXAgdGhlIGJhY2tncm91bmQgY29sb3Igd3JhcHBlZCB0aWdodCAqL1xcbiAgbWFyZ2luOiAwcHggYXV0byAwcHggYXV0bzsgLyoga2VlcCB0aGUgdGFibGUgY2VudGVyZWQgKi9cXG59XFxuLmluZm97XFxuICBmbGV4LWJhc2lzOmNvbnRlbnQ7XFxuICBmbGV4LXNocmluazogMDtcXG59ICBcXG5cXG4jaG9tZSAuaW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDcxJTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAyMTJweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4jaG9tZSAuYWRkcmVzcyxcXG4jaG9tZSAuaG91cnMge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1mYW1pbHk6ICdDaW56ZWwnO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmc6IDAgLjJyZW0gMCAxcmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnNwYW4sXFxuLmFkZHJlc3MsXFxuLmhvdXJze1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4vKk1lbnUqL1xcblxcbiNtZW51IHtcXG4gIHdpZHRoOiA0NiU7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTQsIDEwMCwgMTAwLCAuNSk7XFxuICBwYWRkaW5nOiBjYWxjKDJyZW0gKyAydncpO1xcbiAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xcbiAgbWFyZ2luOiA0cmVtIGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNGZyKTtcXG4gIGdyaWQtZ2FwOiA0cmVtO1xcblxcbn1cXG4ubWVudXtcXG4gIHdpZHRoOiAzNnZ3O1xcbn1cXG4jbWVudSBoM3tcXG4gIGZvbnQtc2l6ZTogY2FsYygycmVtICsgMXZ3KTtcXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbiNtZW51IGg0e1xcbiAgZm9udC1mYW1pbHk6ICdQZXJtYW5lbnQgTWFya2VyJztcXG4gIGZvbnQtc2l6ZTogY2FsYygycmVtICsgMC41dncpO1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcbi5tZW51LWl0ZW0ge1xcbiAgZmxleC1iYXNpczogMjByZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5tZW51LWl0ZW0gc3BhbntcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uaXRlbS1jb250ZW50IHtcXG4gIC8qIHBhZGRpbmc6IDAgMXJlbTsgKi9cXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xcbiAgZm9udC1zaXplOiBjYWxjKDFyZW0gKyAuNXZ3KTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWZvbnQtY29sb3IpO1xcbiAgZmxleC1ncm93OiAyO1xcbn1cXG5cXG4jbWVudSAuaXRlbS1jb250ZW50IHNwYW4ge1xcbiAgZm9udC1zaXplOiBjYWxjKDFyZW0gKyAxdncpO1xcbiAgXFxufVxcblxcbiNtZW51IGg0e1xcbiAgY29sb3I6dmFyKC0tbWVudS1oNC1jb2xvcik7XFxufVxcbiNtZW51IHNwYW57XFxuICBjb2xvcjogdmFyKC0tcHJpY2UtZm9udC1jb2xvcik7XFxuICBtYXJnaW4tbGVmdDogNHJlbTtcXG4gIFxcbn1cXG4vKkNvbnRhY3QqL1xcblxcbiNjb250YWN0IGgxe1xcbiAgY29sb3I6IHZhcigtLW1lbnUtaDQtY29sb3IpO1xcbn1cXG4jY29udGFjdCAuaW5mbyBwIHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW46IDEuNXJlbSAwO1xcbn1cXG5cXG4jY29udGFjdCAuaW5mbyBpIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1wcmljZS1mb250LWNvbG9yKTtcXG59XFxuXFxuXFxuLypGb290ZXIqL1xcbmEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdFxcbiAgfVxcbi5mb290ZXIge1xcbiAgICBmb250LWZhbWlseTogJ01vY2hpeSBQb3AgT25lJztcXG4gICAgcG9zaXRpb246IGJvdHRvbTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG4gIFxcbiAgLmZhLWdpdGh1YiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTRweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gIH1cXG4gIFxcbiAgLmZhLWdpdGh1Yjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogLyogcm90YXRlKDM2MGRlZykgICovIHNjYWxlKDEuMSk7IC8qIERvbid0IHdhbnQgaXQgdG8gcm90YXRlIG9uIHRoaXMgcGFnZSAqL1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1jb2xvcik7XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7Y3JlYXRlRGl2fSBmcm9tICcuL2hvbWUuanMnXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCl7XG4gICAgY29uc3QgY29udGFjdCA9IGNyZWF0ZURpdignY29udGFjdCcpO1xuICAgIGNvbnRhY3QuaW5uZXJIVE1MID0gYFxuICAgIDxoMT5Db250YWN0IHVzPC9oMT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb250YWN0LWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWRkcmVzc1wiPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8aSBjbGFzcz1cImZpLXhuc3V4bC1tYXAtbWFya2VyLXNvbGlkXCI+PC9pPjM5MDEgRWxtIERyaXZlPGJyIC8+TmV3IFlvcmssIE5ZIDEwMDA0XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImhvdXJzXCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmktY25zdWhsLWNsb2NrLXNvbGlkXCI+PC9pXG4gICAgICAgICAgPjxzcGFuPk1vbi1UaHVyczo8L3NwYW4+N2FtLTdwbTxiciAvPjxzcGFuPkZyaS1TdW46PC9zcGFuXG4gICAgICAgICAgPjdhbS0xMXBtXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBob25lXCI+XG4gICAgICAgIDxwPjxpIGNsYXNzPVwiZmkteG5zcnhsLXBob25lLXNvbGlkXCI+PC9pPigxMjMpIDQ1Ni03ODkxPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1mb3JtXCI+XG4gICAgICAgIDxmb3JtIG9uc3VibWl0PVwicmV0dXJuIGZhbHNlXCI+XG4gICAgICAgICAgPGgzPjxpIGNsYXNzPVwiZmkteHdzdXhsLWVudmVsb3BlLXNvbGlkXCI+PC9pPk1lc3NhZ2UgdXM8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICA8c3Bhbj5GdWxsIE5hbWU8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWJveFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgIDxzcGFuPkVtYWlsPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSByZXF1aXJlZD48L3RleHRhcmVhPlxuICAgICAgICAgICAgPHNwYW4+VHlwZSB5b3VyIG1lc3NhZ2UuLi48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmRcIiAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8aWZyYW1lXG4gICAgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxOTM1OTUuMTU4MzA4NTQ5OTYhMmQtNzQuMTE5NzY0MDQ5NDk3NTkhM2Q0MC42OTc2NjM3NDg3OTM5OCEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ODljMjU5YTliMzExNzQ2OSUzQTB4ZDEzNGUxOTlhNDA1YTE2MyEyc0VtcGlyZSUyMFN0YXRlJTIwQnVpbGRpbmchNWUwITNtMiExc2VuITJzdXMhNHYxNjY5OTI5NDA2MTE1ITVtMiExc2VuITJzdXNcIiBcbiAgICB3aWR0aD1cIjYwMFwiIFxuICAgIGhlaWdodD1cIjQ1MFwiIFxuICAgIHN0eWxlPVwiYm9yZGVyOjA7XCIgYVxuICAgIGxsb3dmdWxsc2NyZWVuPVwiXCIgXG4gICAgbG9hZGluZz1cImxhenlcIiBcbiAgICByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCI+XG4gICAgPC9pZnJhbWU+XG4gIDwvZGl2PlxuICAgIGA7XG5cbiAgICByZXR1cm4gY29udGFjdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ29udGFjdCgpe1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIG1haW4uaW5uZXJIVE1MPScnO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRhY3QnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2hvbWUnLCdtZW51Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XG59XG4iLCJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXYoY2xhc3NuYW1lKXtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NuYW1lfWApO1xuICAgIFxuICAgIHJldHVybiBkaXY7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUChjbGFzc25hbWUsIHRleHQpe1xuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAudGV4dENvbnRlbnQgPSBgJHt0ZXh0fWA7XG4gICAgcC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzbmFtZX1gKTtcbiAgICByZXR1cm4gcDtcbn0gIFxuZnVuY3Rpb24gY3JlYXRlV2VsY29tZVRleHQoKXtcbiAgICBsZXQgd2VsY29tZVRleHQgPSBjcmVhdGVEaXYoJ3dlbGNvbWUtdGV4dCcpO1xuICAgIGxldCBoMlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyVGV4dC5jbGFzc0xpc3QuYWRkKCdwbWFpbicpO1xuICAgIGgyVGV4dC50ZXh0Q29udGVudD1cIkNvbWUgam9pbiB1cyBhdCB0aGUgaW50ZXJuZXQncyBiZXN0IGNvZmZlZSBzaG9wIVwiO1xuICAgIGxldCBwVGV4dCA9IGNyZWF0ZVAoJ3BtYWluJywnR3JhYiBhIHNvb3RoaW5nIHNpcCB0b2RheScpO1xuICAgIHdlbGNvbWVUZXh0LmFwcGVuZENoaWxkKGgyVGV4dCk7XG4gICAgd2VsY29tZVRleHQuYXBwZW5kQ2hpbGQocFRleHQpO1xuICAgIHJldHVybiB3ZWxjb21lVGV4dDtcbiAgICBcbn1cbmZ1bmN0aW9uIGNyZWF0ZUluZm8oKXtcbiAgICBsZXQgaW5mbyA9IGNyZWF0ZURpdignaW5mbycpO1xuICAgIGxldCBhZGRyZXNzID0gY3JlYXRlRGl2KCdhZGRyZXNzJyk7XG4gICAgYWRkcmVzcy5pbm5lckhUTUwgPWA8c3Bhbj48aSBjbGFzcz1cImZpLXhuc3V4bC1tYXAtbWFya2VyLXNvbGlkXCI+PHN2ZyBjbGFzcz1cImZpLXBhZGRpbmdcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTAwMG1tXCIgaGVpZ2h0PVwiMTAwMG1tXCIgdmlld0JveD1cIjAgMCAxMDAwIDEwMDBcIiBzdHlsZT1cIndpZHRoOjEuMzNlbTsgaGVpZ2h0OjEuMzNlbTt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiPjxwYXRoIGlkPVwicGF0aFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiIE0gNTAwIDg4QyA1NjQgODggNjI4IDEwOCA2ODAgMTQ0QyA3OTQgMjIyIDg0MyAzNzkgNzk0IDUwN0MgNzQ0IDYxMiA2OTMgNzE2IDY0MyA4MjFDIDYxNyA4NzAgNjAxIDkzMCA1NDggOTU3QyA0OTQgOTg4IDQyNiA5NTYgMzk4IDkwNEMgMzQwIDc4OCAyODUgNjcwIDIyOCA1NTNDIDE4NyA0ODAgMTc2IDM5MCAyMDEgMzA5QyAyMzcgMTgyIDM2MiA4OCA0OTQgODhDIDQ5NiA4OCA0OTggODggNTAwIDg4QyA1MDAgODggNTAwIDg4IDUwMCA4OE0gMzg3IDQwMEMgMzg3IDQ2MiA0MzggNTEyIDUwMCA1MTJDIDU2MiA1MTIgNjEzIDQ2MiA2MTMgNDAwQyA2MTMgMzM4IDU2MiAyODcgNTAwIDI4N0MgNDM4IDI4NyAzODcgMzM4IDM4NyA0MDBDIDM4NyA0MDAgMzg3IDQwMCAzODcgNDAwXCIgdHJhbnNmb3JtPVwiXCI+PC9wYXRoPjwvc3ZnPjwvaT48L3NwYW4+PHA+MzkwMSBFbG0gRHJpdmU8YnI+TmV3IFlvcmssIE5ZIDEwMDA0PC9wPmA7XG4gICAgaW5mby5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICAgIGxldCBob3VycyA9IGNyZWF0ZURpdignaG91cnMnKTtcbiAgICBob3Vycy5pbm5lckhUTUwgPWA8c3Bhbj48aSBjbGFzcz1cImZpLWNuc3VobC1jbG9jay1zb2xpZFwiPjxzdmcgY2xhc3M9XCJmaS1wYWRkaW5nXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwMDBtbVwiIGhlaWdodD1cIjEwMDBtbVwiIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCIgc3R5bGU9XCJ3aWR0aDoxLjMzZW07IGhlaWdodDoxLjMzZW07dmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj48cGF0aCBpZD1cInBhdGhcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0gNTAwIDBDIDIyNCAwIDAgMjI0IDAgNTAwQyAwIDc3NiAyMjQgMTAwMCA1MDAgMTAwMEMgNzc2IDEwMDAgMTAwMCA3NzYgMTAwMCA1MDBDIDEwMDAgMjI0IDc3NiAwIDUwMCAwQyA1MDAgMCA1MDAgMCA1MDAgMCBNIDU1MCAyNTBDIDU1MCAyNTAgNTUwIDQ0NSA1NTAgNDQ1QyA1NjUgNDU4IDU3NSA0NzggNTc1IDUwMEMgNTc1IDU0MSA1NDEgNTc1IDUwMCA1NzVDIDQ5OSA1NzUgNDk3IDU3NSA0OTYgNTc1QyA0OTYgNTc1IDI4NSA3ODUgMjg1IDc4NUMgMjY2IDgwNSAyMzQgODA2IDIxNCA3ODZDIDE5NCA3NjYgMTk1IDczNCAyMTUgNzE1QyAyMTUgNzE1IDQyNSA1MDQgNDI1IDUwNEMgNDI1IDUwMyA0MjUgNTAxIDQyNSA1MDBDIDQyNSA0NzggNDM1IDQ1OCA0NTAgNDQ1QyA0NTAgNDQ1IDQ1MCAyNTAgNDUwIDI1MEMgNDUwIDIyMiA0NzIgMjAwIDQ5OSAxOTlDIDUyNyAxOTkgNTUwIDIyMiA1NTAgMjUwQyA1NTAgMjUwIDU1MCAyNTAgNTUwIDI1MFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDAwLDApIHNjYWxlKC0xLDEpIFwiPjwvcGF0aD48L3N2Zz48L2k+PC9zcGFuPlxuICAgIDxwPlxuICAgIDxzcGFuPk1vbi1UaHVyczogPC9zcGFuPjdhbS03cG08YnI+PHNwYW4+RnJpLVN1bjogPC9zcGFuPjdhbS0xMXBtXG4gICAgPC9wPmBcbiAgICBpbmZvLmFwcGVuZENoaWxkKGhvdXJzKTtcbiAgICByZXR1cm4gaW5mbztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsJ2hvbWUnKTtcbiAgICBtYWluLnRleHRDb250ZW50PSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlV2VsY29tZVRleHQoKSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVJbmZvKCkpO1xuICAgIFxufVxuXG5cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtpbml0V2Vic2l0ZX0gZnJvbSAnLi9sb2FkUGFnZS5qcyc7XG5pbXBvcnQge2xvYWRIb21lfSBmcm9tICcuL2hvbWUuanMnO1xuXG5cbi8qIC8vTWFrZSBzdXJlIHBhZ2UgZG9lc24ndCByZWZyZXNoIG9uIGZvcm0gc3VibWl0XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbdHlwZT1cInN1Ym1pdFwiXWApLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIikucmVzZXQoKTtcbn0pOyAqL1xuaW5pdFdlYnNpdGUoKTtcblxuXG4iLCIvL2ltcG9ydCB7c2V0QWN0aXZlQnV0dG9ufSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCB7bG9hZEhvbWV9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQge2xvYWRNZW51fSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHtsb2FkQ29udGFjdH0gZnJvbSAnLi9jb250YWN0LmpzJ1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0Nhc3RsZSBDb2ZmZWUnO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpXG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICAgIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBsZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLW5hdicpO1xuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKXtcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24oaG9tZUJ1dHRvbik7XG4gICAgICAgIGxvYWRIb21lKCk7IFxuICAgIH0pO1xuICAgIG5hdi5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcblxuICAgIGxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tbmF2Jyk7XG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpe1xuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihtZW51QnV0dG9uKTtcbiAgICAgICAgbG9hZE1lbnUoKTtcbiAgICB9KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG5cbiAgICBsZXQgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLW5hdicpO1xuICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKXtcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24oY29udGFjdEJ1dHRvbik7XG4gICAgICAgIGxvYWRDb250YWN0KClcbiAgICB9KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG5cbiAgICByZXR1cm4gbmF2O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldEFjdGl2ZUJ1dHRvbihidXR0b24pIHtcbiAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgKCcuYnV0dG9uLW5hdicpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBpZiAoYnV0dG9uICE9PSB0aGlzKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCdob21lJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG5cbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICAgIGNvbnN0IHBGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZ2h1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZ2h1YkxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL3hhbmRlcm5lc3RhL29kaW4tcmVzdGF1cmFudC9cIjtcbiAgICAvL2dodWJMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgcEZvb3Rlci5hcHBlbmRDaGlsZChnaHViTGluayk7XG4gICAgcEZvb3Rlci5pbm5lckh0bWwgPSAnJm5ic3A7JztcbiAgICBwRm9vdGVyLnRleHRDb250ZW50ID0gXCJYYW5kZXJcIjtcbiAgICBwRm9vdGVyLmlubmVySHRtbCArPSAnJm5ic3A7JztcbiAgICBwRm9vdGVyLnRleHRDb250ZW50ICs9XCLCqSAyMDIyXCI7XG4gICAgY29uc3QgZ2h1YkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBnaHViSW1nLmNsYXNzTGlzdC5hZGQoJ2ZhLWdpdGh1YicpO1xuICAgIGdodWJJbWcuY2xhc3NMaXN0LmFkZCgnZmEtYnJhbmRzJyk7XG4gICAgZ2h1YkltZy5zZXRBdHRyaWJ1dGU9KCdhbHQnLCdnaXRodWIgaWNvbicpO1xuICAgIHBGb290ZXIuYXBwZW5kQ2hpbGQoZ2h1YkltZyk7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQocEZvb3Rlcik7XG4gICAgcmV0dXJuIGZvb3Rlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbml0V2Vic2l0ZSgpIHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICAgIGxvYWRIb21lKCk7XG4gICAgLy9sb2FkQ29udGFjdCgpO1xuICAgIHNldEFjdGl2ZUJ1dHRvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1uYXZcIikpO1xuICAgIFxuXG5cbn1cblxuIiwiaW1wb3J0IHtjcmVhdGVEaXYsY3JlYXRlUH0gZnJvbSAnLi9ob21lLmpzJztcblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpe1xuICAgIGNvbnN0IG1lbnVEaXYgPSBjcmVhdGVEaXYoJ21lbnUnKTtcbiAgICBjb25zdCBjYXRlZ29yeTEgPSBjcmVhdGVNZW51SDMoJ0NvZmZlZScpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkxKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdEcmlwJywnJDMuNTAnLCAnWW91ciBjaG9pY2Ugb2YgZGVsaWNpb3VzIHNtb290aCwgYmxvbmRlLCBtZWRpdW0sIG9yIGRhcmsgcm9hc3RzLicpKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdFc3ByZXNzbycsJyQyLjc1JywgXCJCZXN0IHNpbmdsZSBzaG90IHlvdSdsbCBldmVyIHRhc3RlXCIpKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdMYXR0ZScsJyQ0LjUwJywgXCJPdXIgc2lnbmF0dXJlIGVzcHJlc3NvLCB0b3BwZWQgd2l0aCBzaWxreSBzbW9vdGggbWlsayBvciBub24tZGFpcnkgc3Vic3RpdHV0ZSwgYW5kIGEgZmx1ZmZ5IGxheWVyIG9mIGZvYW1cIikpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ0NhcHB1Y2lubycsJyQ0Ljc1JywgXCJFc3ByZXNzbyB3LyBzdGVhbWVkIG1pbGsgYW5kIGZvYW0sIHRvcCB3aXRoIGNpbm5hbW9uIHN1Z2FyXCIpKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdNb2NoYScsJyQ1LjAwJywgXCJEZWxpY2lvdXMgY29tYm8gb2Ygb3VyIGZpbmVzdCBjb2ZmZWUsIGNob2NvbGF0ZSBhbmQgbWlsa1wiKSk7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnQ29sZCBCcmV3JywnJDQuNTAnLCBcIlNsb3cgcm9hc3RlZCByb2J1c3QgYmxlbmQgc3RlZXBlZCBvdmVybmlnaHQgYXQgc3VidGhlcm1hbCB0ZW1wZXJhdHVyZXNcIikpO1xuXG4gICAgY29uc3QgY2F0ZWdvcnkyID0gY3JlYXRlTWVudUgzKCdQYXN0cnknKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNhdGVnb3J5Mik7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnQnV0dGVyIENyb2lzc2FudCcgLCckMy4wMCcsXCJDbGFzc2ljIGZsYWt5IGFuZCBzbW90aGVyZWQgaW4gYnV0dGVyIGNyb2lzc2FudFwiKSk7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnUGFpbiBBdSBDaG9jb2xhdCcsJyQzLjI1JyxcIkZsYWt5IGFuZCBidXR0ZXJ5IHBhc3RyeSBmaWxsZWQgd2l0aCB0aGUgZmluZXN0IGNob2NvbGF0ZVwiKSk7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnU25pY2tlckRvb2RsZScsJyQyLjUwJyxcIlNvZnQsIGNoZXd5LCBhZGRpY3RpdmUgc3dlZXQgY29va2llIHRyZWF0XCIpKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdCbHVlYmVycnkgTXVmZmluJywnJDMuMjUnLFwiSGFuZHBpY2tlZCBibHVlYmVycmllcyBtaXhlZCBpbiBzb2Z0IHBpbGxvd3kgbXVmZmlucyB0aGF0IG1lbHQgaW4geW91ciBtb3V0aFwiKSk7XG5cbiAgICByZXR1cm4gbWVudURpdjtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVIMyhjYXRlZ29yeSl7XG4gICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoMy5jbGFzc0xpc3QuYWRkKCdtZW51LWgzJyk7XG4gICAgaDMudGV4dENvbnRlbnQgPSBgJHtjYXRlZ29yeX1gO1xuXG4gICAgcmV0dXJuIGgzO1xufVxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uKXtcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKVxuICAgIGl0ZW0udGV4dENvbnRlbnQgPSBgJHtuYW1lfWA7XG4gICAgbGV0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQ9IGAke3ByaWNlfWA7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xuICAgIGxldCBkZXNjcmlwID0gY3JlYXRlUCgnaXRlbS1jb250ZW50JyxgJHtkZXNjcmlwdGlvbn1gKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGRlc2NyaXApO1xuXG4gICAgcmV0dXJuIGl0ZW07XG59XG5leHBvcnQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgbWFpbi5pbm5lckhUTUw9Jyc7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywnbWVudScpO1xuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnaG9tZScsJ2NvbnRhY3QnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICBsZXQgbWVudSA9IGNyZWF0ZU1lbnUoKTtcbiAgICBcbiAgICBcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnUpO1xufVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==