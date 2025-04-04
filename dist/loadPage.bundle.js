"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["loadPage"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "/* import fonts: 'Cinzel' , 'Inter', 'Mochiy Pop One', 'Permanent Marker', \n'Roboto', 'Fraunces', 'Poppins', 'Josefin Sans' */\n:root {\n    --dark-font-color: black;\n    --light-font-color: rgb(238, 238, 238);\n    --home-h2-font-color: rgb(9, 61, 107);\n    --home-h2-background:rgba(165, 96, 55, 0.5);\n    --home-p-font-color: rgb(218, 92, 42);\n    --home-p-background:rgb(14, 100, 100, .9);\n    --price-font-color: rgb(219, 81, 27);\n    --menu-h4-color: rgb(7, 33, 56);\n    --border-color: #222;\n    --background-dark: rgba(0, 0, 0, 0.9);\n    --background-light: rgba(0, 0, 0, 0.65);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml, \nbody {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-attachment:fixed;\n    background-size: cover;\n    margin:0;\n}\n\nbutton {\n  font-family: 'Josefin Sans';\n  color: var(--light-font-color);\n  cursor: pointer;\n  border-style: none;\n  outline: none;\n}\n/* img.center-img {\n    display: block;\n    width: 60%;\n    opacity: 0.9;\n    border-radius: 25px;\n} */\n\n/* Content */\n/* from https://matthewjamestaylor.com/bottom-footer */\n.content {    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-items:center;\n    justify-content: space-between;\n    height: 100vh;\n   \n}\n\n/* Header */\nh1 {\n    color: var(--light-font-color);\n    font-size: 64px;\n    font-family: 'Inter';\n    font-weight: 500;\n}\n\n.header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 1rem;\n    background-color: var(--background-dark);\n    border-color: 1px solid var(--border-color);\n}\n\n.button-nav {\n  padding: .5rem;\n  font-size: 1.2rem;\n  background-color: transparent;\n  border-bottom: 2px solid transparent;\n  transition: transform 0.3s;\n}\n/* Todo add active tab elements in the JS */\n.button-nav.active {\n  border-bottom: 2px solid var(--light-font-color);\n}\n\n.button-nav:hover {\n  transform: translateY(-10%);\n}\n\n/* Main */\nmain{\n padding-bottom: 30px;\n}\n#home {\n    max-width: 75%;\n    min-width: 708px;\n    height: calc(10rem + 14vw);\n    padding-bottom: 2rem;\n    margin-bottom: 1rem;\n    font-size: 2rem;\n    color: var(--dark-font-color);\n    display: flex;\n    flex-direction: column;\n    flex-grow:0;\n}\n\n.welcome-text {\n  padding-bottom: 4rem;\n  margin-bottom: 2rem;\n  display: flex;\n  flex-direction: column; \n  align-self: center;\n  justify-self: center;\n}\n\n.welcome-text p.pmain {\n  padding: .25rem 1rem;\n  align-content: center; \n  text-align: center;\n}\n\nh2.pmain {\n  font-family: 'Josefin Sans';\n  font-style: italic;\n  font-size: 56px;\n  text-align: center;\n  border-radius: .8rem;\n  color: var(--home-h2-font-color);\n  background-color:var(--home-h2-background);\n  display: table; /* keep the background color wrapped tight */\n  padding: .3rem 1rem 0 .5rem;\n  margin-bottom: .5rem;\n}\n  \np.pmain {\n  font-family: 'Josefin Sans';\n  font-style: italic;\n  color: var(--home-p-font-color);\n  background: var( --home-p-background);\n  border-radius: 1.3rem;\n  display: table; /* keep the background color wrapped tight */\n  margin: 0px auto 0px auto; /* keep the table centered */\n}\n/* .info{\n  flex-basis:content;\n  flex-shrink: 0;\n}   */\n\n#home .info {\n  background-color: var(--background-light);\n  border: 2px solid var(--border-color);\n  position: relative;\n  padding: 1rem;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: 1rem auto;\n  width: 400px;\n  height: 210px;\n  background: rgba(0, 0, 0, 0.8);\n  border-radius: 6px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-items: center;\n}\n\n\n#home .address,\n#home .hours {\n  font-size: 1.6rem;\n  font-weight: 400;\n  font-family: 'Cinzel';\n  display: flex;\n  color: var(--light-font-color);\n  padding: .4rem .2rem 0 1rem;\n  text-align: left;\n  align-items: center;\n  justify-items: center;\n}\n\nspan,\n.address,\n.hours{\n  gap: .8rem;\n}\n\n/*Menu*/\n\n#menu {\n  width: 46%;\n  background: rgb(14, 100, 100, .5);\n  padding: calc(2rem + 2vw);\n  border-radius: 1.2rem;\n  margin: 4rem auto;\n  display: grid;\n  grid-template-columns: repeat(2, 4fr);\n  grid-gap: 4rem;\n  \n  \n}\n.menu{\n  width: 36vw;\n  margin-bottom: 26px;\n}\n#menu h3{\n  font-size: calc(2rem + 1vw);\n  font-family: 'Josefin Sans';\n  text-align: center;\n  margin-bottom: 1rem;\n}\n#menu h4{\n  font-family: 'Permanent Marker';\n  font-size: calc(2rem + 0.5vw);\n  margin-left: 0;\n}\n.menu-item {\n  flex-basis: 20rem;\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.menu-item span{\n  justify-self: end;\n}\n\n.item-content {\n  /* padding: 0 1rem; */\n  font-family: 'Inter';\n  font-size: calc(1rem + .5vw);\n  color: var(--dark-font-color);\n  flex-grow: 2;\n}\n\n#menu .item-content span {\n  font-size: calc(1rem + 1vw);\n  \n}\n\n#menu h4{\n  color:var(--menu-h4-color);\n}\n#menu span{\n  color: var(--price-font-color);\n  margin-left: 4rem;\n  \n}\n/*Contact*/\n\n#contact h1{\n  color: var(--home-h2-font-color);\n  text-align: center;\n  font-family: 'Poppins';\n  font-size: 3rem;\n}\n#contact h3{\n  font-size: calc(2rem + 1vw);\n  font-family: 'Josefin Sans';\n  color: var(--home-h2-font-color);\n  text-align: center;\n  margin-bottom: 1rem;\n}\n#contact .contact-container {\n  margin-top: 0rem;\n  background: var(--background-dark);\n  width: 100%;\n  border-radius: 1.2rem;\n  padding: 2rem calc(3rem + 2vw) ;\n  margin: 2rem auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n#contact .info p {\n  font-family: 'Poppins';\n  text-align: justify;\n  font-size: 1.5rem;\n  margin: 1.5rem 0;\n  color: var(--light-font-color);\n}\n\n#contact .info i {\n  font-size: 1.5rem;\n  padding-right: 1rem;\n  color: var(--price-font-color);\n}\n/*imported */\n\n#contact .contact-container .input-box {\n  position: relative;\n  margin-top: 1rem;\n}\n\n#contact .contact-container .input-box input,\n#contact .contact-container .input-box textarea {\n  width: 98%;\n  padding: 0.5rem 0;\n  margin: 1rem 0;\n  font-size: 1.6rem;\n  border: none;\n  outline: none;\n  border-bottom: 2px solid var(--border-color);\n  resize: none;\n  background: rgba(243, 55, 55, 0);\n}\n\n#contact .contact-container .input-box span {\n  position: absolute;\n  left: 0;\n  padding: 0.5rem 0;\n  margin: 1rem 0;\n  font-size: 1.6rem;\n  pointer-events: none;\n  transition: 0.3s;\n  color: var(--home-h2-font-color);\n  font-family: 'Poppins';\n}\n\n#contact .contact-container .input-box input:focus ~ span,\n#contact .contact-container .input-box input:valid ~ span,\n#contact .contact-container .input-box textarea:focus ~ span,\n#contact .contact-container .input-box textarea:valid ~ span {\n  color: var(--home-h2-font-color);\n  font-size: 1.2rem;\n  transform: translateY(-2rem);\n}\n\n#contact .contact-container textarea,\n#contact .contact-container input[type=\"text\"] {\n  font-family: 'Poppins';\n  color: var(--light-font-color);\n}\n\n#contact .contact-container input[type=\"submit\"] {\n  width: 10rem;\n  font-size: 1.6rem;\n  background: var(--home-h2-font-color);\n  padding: 8px 22px;\n  color: var(--background-light);\n  border: none;\n  outline: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n#contact .contact-container input[type=\"submit\"]:hover {\n  background: var(--home-p-background);\n}\n\n\n/*Footer*/\n\n  #footer{\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n  }\n.footer {\n    font-family: 'Mochiy Pop One';\n    font-size: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n\n  }\n  a {\n    display: inline-block;\n    text-decoration:none;\n    color: inherit\n  }\n  \n  .fa-github {\n    font-size: 1.5rem;\n    transition: transform 0.3s ease-in-out;\n    /* margin-bottom: -4rem; */\n    margin-left: 4px;\n  }\n  \n  .fa-github:hover {\n    transform: /* rotate(360deg)  */ scale(1.1); /* Don't want it to rotate on this page */\n    color: var(--light-font-color);\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Inter:wght@100;400;500;600&family=Mochiy+Pop+One&family=Permanent+Marker&family=Roboto:ital,wght@0,100;0,500;0,700;1,100&family=Fraunces&family=Poppins:ital,wght@0,400;0,600;1,400&family=Josefin+Sans:ital,wght@0,200;0,300;0,400;1,200;1,400&display=swap');\n/* import fonts: 'Cinzel' , 'Inter', 'Mochiy Pop One', 'Permanent Marker', \n'Roboto', 'Fraunces', 'Poppins', 'Josefin Sans' */\n:root {\n    --dark-font-color: black;\n    --light-font-color: rgb(238, 238, 238);\n    --home-h2-font-color: rgb(9, 61, 107);\n    --home-h2-background:rgba(165, 96, 55, 0.5);\n    --home-p-font-color: rgb(218, 92, 42);\n    --home-p-background:rgb(14, 100, 100, .9);\n    --price-font-color: rgb(219, 81, 27);\n    --menu-h4-color: rgb(7, 33, 56);\n    --border-color: #222;\n    --background-dark: rgba(0, 0, 0, 0.9);\n    --background-light: rgba(0, 0, 0, 0.65);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml, \nbody {\n    background-image: url('images/coffee1.jpg');\n    background-attachment:fixed;\n    background-size: cover;\n    margin:0;\n}\n\nbutton {\n  font-family: 'Josefin Sans';\n  color: var(--light-font-color);\n  cursor: pointer;\n  border-style: none;\n  outline: none;\n}\n/* img.center-img {\n    display: block;\n    width: 60%;\n    opacity: 0.9;\n    border-radius: 25px;\n} */\n\n/* Content */\n/* from https://matthewjamestaylor.com/bottom-footer */\n.content {    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-items:center;\n    justify-content: space-between;\n    height: 100vh;\n   \n}\n\n/* Header */\nh1 {\n    color: var(--light-font-color);\n    font-size: 64px;\n    font-family: 'Inter';\n    font-weight: 500;\n}\n\n.header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 1rem;\n    background-color: var(--background-dark);\n    border-color: 1px solid var(--border-color);\n}\n\n.button-nav {\n  padding: .5rem;\n  font-size: 1.2rem;\n  background-color: transparent;\n  border-bottom: 2px solid transparent;\n  transition: transform 0.3s;\n}\n/* Todo add active tab elements in the JS */\n.button-nav.active {\n  border-bottom: 2px solid var(--light-font-color);\n}\n\n.button-nav:hover {\n  transform: translateY(-10%);\n}\n\n/* Main */\nmain{\n padding-bottom: 30px;\n}\n#home {\n    max-width: 75%;\n    min-width: 708px;\n    height: calc(10rem + 14vw);\n    padding-bottom: 2rem;\n    margin-bottom: 1rem;\n    font-size: 2rem;\n    color: var(--dark-font-color);\n    display: flex;\n    flex-direction: column;\n    flex-grow:0;\n}\n\n.welcome-text {\n  padding-bottom: 4rem;\n  margin-bottom: 2rem;\n  display: flex;\n  flex-direction: column; \n  align-self: center;\n  justify-self: center;\n}\n\n.welcome-text p.pmain {\n  padding: .25rem 1rem;\n  align-content: center; \n  text-align: center;\n}\n\nh2.pmain {\n  font-family: 'Josefin Sans';\n  font-style: italic;\n  font-size: 56px;\n  text-align: center;\n  border-radius: .8rem;\n  color: var(--home-h2-font-color);\n  background-color:var(--home-h2-background);\n  display: table; /* keep the background color wrapped tight */\n  padding: .3rem 1rem 0 .5rem;\n  margin-bottom: .5rem;\n}\n  \np.pmain {\n  font-family: 'Josefin Sans';\n  font-style: italic;\n  color: var(--home-p-font-color);\n  background: var( --home-p-background);\n  border-radius: 1.3rem;\n  display: table; /* keep the background color wrapped tight */\n  margin: 0px auto 0px auto; /* keep the table centered */\n}\n/* .info{\n  flex-basis:content;\n  flex-shrink: 0;\n}   */\n\n#home .info {\n  background-color: var(--background-light);\n  border: 2px solid var(--border-color);\n  position: relative;\n  padding: 1rem;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: 1rem auto;\n  width: 400px;\n  height: 210px;\n  background: rgba(0, 0, 0, 0.8);\n  border-radius: 6px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-items: center;\n}\n\n\n#home .address,\n#home .hours {\n  font-size: 1.6rem;\n  font-weight: 400;\n  font-family: 'Cinzel';\n  display: flex;\n  color: var(--light-font-color);\n  padding: .4rem .2rem 0 1rem;\n  text-align: left;\n  align-items: center;\n  justify-items: center;\n}\n\nspan,\n.address,\n.hours{\n  gap: .8rem;\n}\n\n/*Menu*/\n\n#menu {\n  width: 46%;\n  background: rgb(14, 100, 100, .5);\n  padding: calc(2rem + 2vw);\n  border-radius: 1.2rem;\n  margin: 4rem auto;\n  display: grid;\n  grid-template-columns: repeat(2, 4fr);\n  grid-gap: 4rem;\n  \n  \n}\n.menu{\n  width: 36vw;\n  margin-bottom: 26px;\n}\n#menu h3{\n  font-size: calc(2rem + 1vw);\n  font-family: 'Josefin Sans';\n  text-align: center;\n  margin-bottom: 1rem;\n}\n#menu h4{\n  font-family: 'Permanent Marker';\n  font-size: calc(2rem + 0.5vw);\n  margin-left: 0;\n}\n.menu-item {\n  flex-basis: 20rem;\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.menu-item span{\n  justify-self: end;\n}\n\n.item-content {\n  /* padding: 0 1rem; */\n  font-family: 'Inter';\n  font-size: calc(1rem + .5vw);\n  color: var(--dark-font-color);\n  flex-grow: 2;\n}\n\n#menu .item-content span {\n  font-size: calc(1rem + 1vw);\n  \n}\n\n#menu h4{\n  color:var(--menu-h4-color);\n}\n#menu span{\n  color: var(--price-font-color);\n  margin-left: 4rem;\n  \n}\n/*Contact*/\n\n#contact h1{\n  color: var(--home-h2-font-color);\n  text-align: center;\n  font-family: 'Poppins';\n  font-size: 3rem;\n}\n#contact h3{\n  font-size: calc(2rem + 1vw);\n  font-family: 'Josefin Sans';\n  color: var(--home-h2-font-color);\n  text-align: center;\n  margin-bottom: 1rem;\n}\n#contact .contact-container {\n  margin-top: 0rem;\n  background: var(--background-dark);\n  width: 100%;\n  border-radius: 1.2rem;\n  padding: 2rem calc(3rem + 2vw) ;\n  margin: 2rem auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n#contact .info p {\n  font-family: 'Poppins';\n  text-align: justify;\n  font-size: 1.5rem;\n  margin: 1.5rem 0;\n  color: var(--light-font-color);\n}\n\n#contact .info i {\n  font-size: 1.5rem;\n  padding-right: 1rem;\n  color: var(--price-font-color);\n}\n/*imported */\n\n#contact .contact-container .input-box {\n  position: relative;\n  margin-top: 1rem;\n}\n\n#contact .contact-container .input-box input,\n#contact .contact-container .input-box textarea {\n  width: 98%;\n  padding: 0.5rem 0;\n  margin: 1rem 0;\n  font-size: 1.6rem;\n  border: none;\n  outline: none;\n  border-bottom: 2px solid var(--border-color);\n  resize: none;\n  background: rgba(243, 55, 55, 0);\n}\n\n#contact .contact-container .input-box span {\n  position: absolute;\n  left: 0;\n  padding: 0.5rem 0;\n  margin: 1rem 0;\n  font-size: 1.6rem;\n  pointer-events: none;\n  transition: 0.3s;\n  color: var(--home-h2-font-color);\n  font-family: 'Poppins';\n}\n\n#contact .contact-container .input-box input:focus ~ span,\n#contact .contact-container .input-box input:valid ~ span,\n#contact .contact-container .input-box textarea:focus ~ span,\n#contact .contact-container .input-box textarea:valid ~ span {\n  color: var(--home-h2-font-color);\n  font-size: 1.2rem;\n  transform: translateY(-2rem);\n}\n\n#contact .contact-container textarea,\n#contact .contact-container input[type=\"text\"] {\n  font-family: 'Poppins';\n  color: var(--light-font-color);\n}\n\n#contact .contact-container input[type=\"submit\"] {\n  width: 10rem;\n  font-size: 1.6rem;\n  background: var(--home-h2-font-color);\n  padding: 8px 22px;\n  color: var(--background-light);\n  border: none;\n  outline: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n#contact .contact-container input[type=\"submit\"]:hover {\n  background: var(--home-p-background);\n}\n\n\n/*Footer*/\n\n  #footer{\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n  }\n.footer {\n    font-family: 'Mochiy Pop One';\n    font-size: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n\n  }\n  a {\n    display: inline-block;\n    text-decoration:none;\n    color: inherit\n  }\n  \n  .fa-github {\n    font-size: 1.5rem;\n    transition: transform 0.3s ease-in-out;\n    /* margin-bottom: -4rem; */\n    margin-left: 4px;\n  }\n  \n  .fa-github:hover {\n    transform: /* rotate(360deg)  */ scale(1.1); /* Don't want it to rotate on this page */\n    color: var(--light-font-color);\n  }"],"sourceRoot":""}]);
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
    const contact = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('contact-container');
    contact.innerHTML = `
  <h1>Contact us</h1>
    <div class="info">
      <div class="address">
        <p>
        🏠&nbsp;3901 Elm Drive<br/> New York, NY 10004
        </p>
      </div>
      <div class="phone">
      <p>📞&nbsp;(123) 456-7891</p>
    </div>
      <div class="hours">
        <p>
        <i style="font-size:26px" class="fa">&#xf017;</i>
        <span>Mon-Thurs: </span>7am-7pm
        <br/><span>&emsp;&ensp;&ensp;Fri-Sun:&nbsp;</span>
        &nbsp;7am-11pm
        </p>
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setActiveButton": () => (/* binding */ setActiveButton)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _loadPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadPage.js */ "./src/loadPage.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");




function setActiveButton(button) {
    let buttons = document.querySelectorAll ('.button-nav');
    buttons.forEach(button => {
        if (button !== this) {
            button.classList.remove('active');
        }
    });
    button.classList.add("active");
}
(0,_loadPage_js__WEBPACK_IMPORTED_MODULE_1__.initWebsite)();




/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initWebsite": () => (/* binding */ initWebsite)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





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
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setActiveButton)(homeButton);
        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHome)(); 
    });
    nav.appendChild(homeButton);

    let menuButton = document.createElement('button');
    menuButton.classList.add('button-nav');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', function (e){
        if(e.target.classList.contains('active')) return;
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setActiveButton)(menuButton);
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();
    });
    nav.appendChild(menuButton);

    let contactButton = document.createElement('button');
    contactButton.classList.add('button-nav');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', function (e){
        if(e.target.classList.contains('active')) return;
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setActiveButton)(contactButton);
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.loadContact)()
    });
    nav.appendChild(contactButton);

    return nav;
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
    pFooter.innerHtml = '&nbsp;';
    pFooter.textContent = "Xander";
    pFooter.innerHtml += '&nbsp;';
    pFooter.textContent +="© 2022";
    footer.appendChild(pFooter);
    //add link and icon after text
    const ghubLink = document.createElement('a');
    ghubLink.href = "https://github.com/xandev3/odin-restaurant/";
    const ghubImg = document.createElement('i');
    ghubImg.classList.add('fa-github');
    ghubImg.classList.add('fa-brands');
    ghubImg.setAttribute=('alt','github icon');
    ghubLink.appendChild(ghubImg);
    footer.appendChild(ghubLink);
   
    
    return footer;
}
function initWebsite() {
    let content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHome)();
    //loadContact();
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setActiveButton)(document.querySelector(".button-nav"));
    


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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/loadPage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsdUJBQXVCLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLHVCQUF1Qix5QkFBeUIsTUFBTSxPQUFPLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFFBQVEsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxNQUFNLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGNBQWMsTUFBTSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sV0FBVyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sUUFBUSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksZUFBZSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLHdCQUF3QixhQUFhLGdHQUFnRyxJQUFJLDBCQUEwQixJQUFJLElBQUksZ0ZBQWdGLE1BQU0sTUFBTSxxREFBcUQsTUFBTSwwQ0FBMEMsTUFBTSxNQUFNLE1BQU0scUJBQXFCLDBJQUEwSSwrQkFBK0IsNkNBQTZDLDRDQUE0QyxrREFBa0QsNENBQTRDLGdEQUFnRCwyQ0FBMkMsc0NBQXNDLDJCQUEyQiw0Q0FBNEMsOENBQThDLEdBQUcsOEJBQThCLDJCQUEyQixlQUFlLGNBQWMsR0FBRyxrQkFBa0Isa0RBQWtELGtDQUFrQyw2QkFBNkIsZUFBZSxHQUFHLFlBQVksZ0NBQWdDLG1DQUFtQyxvQkFBb0IsdUJBQXVCLGtCQUFrQixHQUFHLHFCQUFxQixxQkFBcUIsaUJBQWlCLG1CQUFtQiwwQkFBMEIsSUFBSSw0RkFBNEYsb0JBQW9CLDZCQUE2QiwwQkFBMEIsMkJBQTJCLHFDQUFxQyxvQkFBb0IsUUFBUSxzQkFBc0IscUNBQXFDLHNCQUFzQiwyQkFBMkIsdUJBQXVCLEdBQUcsYUFBYSxvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsa0JBQWtCLG9CQUFvQiwrQ0FBK0Msa0RBQWtELEdBQUcsaUJBQWlCLG1CQUFtQixzQkFBc0Isa0NBQWtDLHlDQUF5QywrQkFBK0IsR0FBRyxvRUFBb0UscURBQXFELEdBQUcsdUJBQXVCLGdDQUFnQyxHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxTQUFTLHFCQUFxQix1QkFBdUIsaUNBQWlDLDJCQUEyQiwwQkFBMEIsc0JBQXNCLG9DQUFvQyxvQkFBb0IsNkJBQTZCLGtCQUFrQixHQUFHLG1CQUFtQix5QkFBeUIsd0JBQXdCLGtCQUFrQiw0QkFBNEIsdUJBQXVCLHlCQUF5QixHQUFHLDJCQUEyQix5QkFBeUIsMkJBQTJCLHVCQUF1QixHQUFHLGNBQWMsZ0NBQWdDLHVCQUF1QixvQkFBb0IsdUJBQXVCLHlCQUF5QixxQ0FBcUMsK0NBQStDLG9CQUFvQiw2RUFBNkUseUJBQXlCLEdBQUcsZUFBZSxnQ0FBZ0MsdUJBQXVCLG9DQUFvQywwQ0FBMEMsMEJBQTBCLG9CQUFvQiw0RUFBNEUsZ0NBQWdDLFdBQVcsdUJBQXVCLG1CQUFtQixNQUFNLG1CQUFtQiw4Q0FBOEMsMENBQTBDLHVCQUF1QixrQkFBa0IsV0FBVyxZQUFZLGFBQWEsc0JBQXNCLGlCQUFpQixrQkFBa0IsbUNBQW1DLHVCQUF1QixrQkFBa0Isd0JBQXdCLG9CQUFvQiwwQkFBMEIsR0FBRyxxQ0FBcUMsc0JBQXNCLHFCQUFxQiwwQkFBMEIsa0JBQWtCLG1DQUFtQyxnQ0FBZ0MscUJBQXFCLHdCQUF3QiwwQkFBMEIsR0FBRyw2QkFBNkIsZUFBZSxHQUFHLHVCQUF1QixlQUFlLHNDQUFzQyw4QkFBOEIsMEJBQTBCLHNCQUFzQixrQkFBa0IsMENBQTBDLG1CQUFtQixXQUFXLFFBQVEsZ0JBQWdCLHdCQUF3QixHQUFHLFdBQVcsZ0NBQWdDLGdDQUFnQyx1QkFBdUIsd0JBQXdCLEdBQUcsV0FBVyxvQ0FBb0Msa0NBQWtDLG1CQUFtQixHQUFHLGNBQWMsc0JBQXNCLHdCQUF3Qix5QkFBeUIsa0JBQWtCLHdCQUF3Qix3QkFBd0IsbUNBQW1DLG9CQUFvQixHQUFHLGtCQUFrQixzQkFBc0IsR0FBRyxtQkFBbUIsd0JBQXdCLDJCQUEyQixpQ0FBaUMsa0NBQWtDLGlCQUFpQixHQUFHLDhCQUE4QixnQ0FBZ0MsT0FBTyxhQUFhLCtCQUErQixHQUFHLGFBQWEsbUNBQW1DLHNCQUFzQixPQUFPLDZCQUE2QixxQ0FBcUMsdUJBQXVCLDJCQUEyQixvQkFBb0IsR0FBRyxjQUFjLGdDQUFnQyxnQ0FBZ0MscUNBQXFDLHVCQUF1Qix3QkFBd0IsR0FBRywrQkFBK0IscUJBQXFCLHVDQUF1QyxnQkFBZ0IsMEJBQTBCLG9DQUFvQyxzQkFBc0Isa0JBQWtCLDJCQUEyQixtQ0FBbUMsb0JBQW9CLEdBQUcsb0JBQW9CLDJCQUEyQix3QkFBd0Isc0JBQXNCLHFCQUFxQixtQ0FBbUMsR0FBRyxzQkFBc0Isc0JBQXNCLHdCQUF3QixtQ0FBbUMsR0FBRywyREFBMkQsdUJBQXVCLHFCQUFxQixHQUFHLG9HQUFvRyxlQUFlLHNCQUFzQixtQkFBbUIsc0JBQXNCLGlCQUFpQixrQkFBa0IsaURBQWlELGlCQUFpQixxQ0FBcUMsR0FBRyxpREFBaUQsdUJBQXVCLFlBQVksc0JBQXNCLG1CQUFtQixzQkFBc0IseUJBQXlCLHFCQUFxQixxQ0FBcUMsMkJBQTJCLEdBQUcseVBBQXlQLHFDQUFxQyxzQkFBc0IsaUNBQWlDLEdBQUcsNkZBQTZGLDJCQUEyQixtQ0FBbUMsR0FBRyx3REFBd0QsaUJBQWlCLHNCQUFzQiwwQ0FBMEMsc0JBQXNCLG1DQUFtQyxpQkFBaUIsa0JBQWtCLHVCQUF1QixvQkFBb0IscUJBQXFCLEdBQUcsOERBQThELHlDQUF5QyxHQUFHLDhCQUE4QixrQkFBa0IseUJBQXlCLGdCQUFnQixjQUFjLEtBQUssV0FBVyxvQ0FBb0Msc0JBQXNCLG9CQUFvQiwwQkFBMEIsOEJBQThCLFNBQVMsT0FBTyw0QkFBNEIsMkJBQTJCLHlCQUF5QixvQkFBb0Isd0JBQXdCLDZDQUE2QywrQkFBK0IseUJBQXlCLEtBQUssMEJBQTBCLG1EQUFtRCwrRUFBK0UsS0FBSyxtQkFBbUI7QUFDN29vQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1gxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDZm1DO0FBQ25DO0FBQ0Esb0JBQW9CLG1EQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBLHlCQUF5QixNQUFNLE1BQU0sY0FBYztBQUNuRCxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURPO0FBQ1A7QUFDQSx5QkFBeUIsVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsdUJBQXVCLEtBQUs7QUFDNUIsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzTkFBc04sY0FBYyx1QkFBdUI7QUFDM1A7O0FBRUE7QUFDQSwrTUFBK00sY0FBYyx1QkFBdUI7QUFDcFA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ3FCO0FBQ3FCO0FBQ1A7O0FBRTVCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EseURBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JnQztBQUNSO0FBQ0E7QUFDSzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBEQUFlO0FBQ3ZCLFFBQVEsa0RBQVE7QUFDaEIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBEQUFlO0FBQ3ZCLFFBQVEsa0RBQVE7QUFDaEIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBEQUFlO0FBQ3ZCLFFBQVEsd0RBQVc7QUFDbkIsS0FBSztBQUNMOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUksa0RBQVE7QUFDWjtBQUNBLElBQUksMERBQWU7QUFDbkI7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHNEM7O0FBRTVDO0FBQ0Esb0JBQW9CLG1EQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixLQUFLO0FBQy9CO0FBQ0EsOEJBQThCLE1BQU07QUFDcEM7QUFDQSxrQkFBa0IsaURBQU8sbUJBQW1CLFlBQVk7QUFDeEQ7O0FBRUE7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2xvYWRQYWdlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvY29mZmVlMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNpbnplbDp3Z2h0QDQwMDs1MDA7NjAwJmZhbWlseT1JbnRlcjp3Z2h0QDEwMDs0MDA7NTAwOzYwMCZmYW1pbHk9TW9jaGl5K1BvcCtPbmUmZmFtaWx5PVBlcm1hbmVudCtNYXJrZXImZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCw1MDA7MCw3MDA7MSwxMDAmZmFtaWx5PUZyYXVuY2VzJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDQwMDswLDYwMDsxLDQwMCZmYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDsxLDIwMDsxLDQwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaW1wb3J0IGZvbnRzOiAnQ2luemVsJyAsICdJbnRlcicsICdNb2NoaXkgUG9wIE9uZScsICdQZXJtYW5lbnQgTWFya2VyJywgXFxuJ1JvYm90bycsICdGcmF1bmNlcycsICdQb3BwaW5zJywgJ0pvc2VmaW4gU2FucycgKi9cXG46cm9vdCB7XFxuICAgIC0tZGFyay1mb250LWNvbG9yOiBibGFjaztcXG4gICAgLS1saWdodC1mb250LWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XFxuICAgIC0taG9tZS1oMi1mb250LWNvbG9yOiByZ2IoOSwgNjEsIDEwNyk7XFxuICAgIC0taG9tZS1oMi1iYWNrZ3JvdW5kOnJnYmEoMTY1LCA5NiwgNTUsIDAuNSk7XFxuICAgIC0taG9tZS1wLWZvbnQtY29sb3I6IHJnYigyMTgsIDkyLCA0Mik7XFxuICAgIC0taG9tZS1wLWJhY2tncm91bmQ6cmdiKDE0LCAxMDAsIDEwMCwgLjkpO1xcbiAgICAtLXByaWNlLWZvbnQtY29sb3I6IHJnYigyMTksIDgxLCAyNyk7XFxuICAgIC0tbWVudS1oNC1jb2xvcjogcmdiKDcsIDMzLCA1Nik7XFxuICAgIC0tYm9yZGVyLWNvbG9yOiAjMjIyO1xcbiAgICAtLWJhY2tncm91bmQtZGFyazogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbiAgICAtLWJhY2tncm91bmQtbGlnaHQ6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sLCBcXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OmZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBtYXJnaW46MDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJztcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi8qIGltZy5jZW50ZXItaW1nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59ICovXFxuXFxuLyogQ29udGVudCAqL1xcbi8qIGZyb20gaHR0cHM6Ly9tYXR0aGV3amFtZXN0YXlsb3IuY29tL2JvdHRvbS1mb290ZXIgKi9cXG4uY29udGVudCB7ICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgIFxcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5oMSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiA2NHB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJztcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1kYXJrKTtcXG4gICAgYm9yZGVyLWNvbG9yOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLmJ1dHRvbi1uYXYge1xcbiAgcGFkZGluZzogLjVyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcbi8qIFRvZG8gYWRkIGFjdGl2ZSB0YWIgZWxlbWVudHMgaW4gdGhlIEpTICovXFxuLmJ1dHRvbi1uYXYuYWN0aXZlIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcXG59XFxuXFxuLmJ1dHRvbi1uYXY6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xcbn1cXG5cXG4vKiBNYWluICovXFxubWFpbntcXG4gcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcbiNob21lIHtcXG4gICAgbWF4LXdpZHRoOiA3NSU7XFxuICAgIG1pbi13aWR0aDogNzA4cHg7XFxuICAgIGhlaWdodDogY2FsYygxMHJlbSArIDE0dncpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1mb250LWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC1ncm93OjA7XFxufVxcblxcbi53ZWxjb21lLXRleHQge1xcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi53ZWxjb21lLXRleHQgcC5wbWFpbiB7XFxuICBwYWRkaW5nOiAuMjVyZW0gMXJlbTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmgyLnBtYWluIHtcXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogNTZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IC44cmVtO1xcbiAgY29sb3I6IHZhcigtLWhvbWUtaDItZm9udC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWhvbWUtaDItYmFja2dyb3VuZCk7XFxuICBkaXNwbGF5OiB0YWJsZTsgLyoga2VlcCB0aGUgYmFja2dyb3VuZCBjb2xvciB3cmFwcGVkIHRpZ2h0ICovXFxuICBwYWRkaW5nOiAuM3JlbSAxcmVtIDAgLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG59XFxuICBcXG5wLnBtYWluIHtcXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiB2YXIoLS1ob21lLXAtZm9udC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kOiB2YXIoIC0taG9tZS1wLWJhY2tncm91bmQpO1xcbiAgYm9yZGVyLXJhZGl1czogMS4zcmVtO1xcbiAgZGlzcGxheTogdGFibGU7IC8qIGtlZXAgdGhlIGJhY2tncm91bmQgY29sb3Igd3JhcHBlZCB0aWdodCAqL1xcbiAgbWFyZ2luOiAwcHggYXV0byAwcHggYXV0bzsgLyoga2VlcCB0aGUgdGFibGUgY2VudGVyZWQgKi9cXG59XFxuLyogLmluZm97XFxuICBmbGV4LWJhc2lzOmNvbnRlbnQ7XFxuICBmbGV4LXNocmluazogMDtcXG59ICAgKi9cXG5cXG4jaG9tZSAuaW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDIxMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbiNob21lIC5hZGRyZXNzLFxcbiNob21lIC5ob3VycyB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LWZhbWlseTogJ0NpbnplbCc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZzogLjRyZW0gLjJyZW0gMCAxcmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnNwYW4sXFxuLmFkZHJlc3MsXFxuLmhvdXJze1xcbiAgZ2FwOiAuOHJlbTtcXG59XFxuXFxuLypNZW51Ki9cXG5cXG4jbWVudSB7XFxuICB3aWR0aDogNDYlO1xcbiAgYmFja2dyb3VuZDogcmdiKDE0LCAxMDAsIDEwMCwgLjUpO1xcbiAgcGFkZGluZzogY2FsYygycmVtICsgMnZ3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEuMnJlbTtcXG4gIG1hcmdpbjogNHJlbSBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDRmcik7XFxuICBncmlkLWdhcDogNHJlbTtcXG4gIFxcbiAgXFxufVxcbi5tZW51e1xcbiAgd2lkdGg6IDM2dnc7XFxuICBtYXJnaW4tYm90dG9tOiAyNnB4O1xcbn1cXG4jbWVudSBoM3tcXG4gIGZvbnQtc2l6ZTogY2FsYygycmVtICsgMXZ3KTtcXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbiNtZW51IGg0e1xcbiAgZm9udC1mYW1pbHk6ICdQZXJtYW5lbnQgTWFya2VyJztcXG4gIGZvbnQtc2l6ZTogY2FsYygycmVtICsgMC41dncpO1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcbi5tZW51LWl0ZW0ge1xcbiAgZmxleC1iYXNpczogMjByZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5tZW51LWl0ZW0gc3BhbntcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uaXRlbS1jb250ZW50IHtcXG4gIC8qIHBhZGRpbmc6IDAgMXJlbTsgKi9cXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xcbiAgZm9udC1zaXplOiBjYWxjKDFyZW0gKyAuNXZ3KTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWZvbnQtY29sb3IpO1xcbiAgZmxleC1ncm93OiAyO1xcbn1cXG5cXG4jbWVudSAuaXRlbS1jb250ZW50IHNwYW4ge1xcbiAgZm9udC1zaXplOiBjYWxjKDFyZW0gKyAxdncpO1xcbiAgXFxufVxcblxcbiNtZW51IGg0e1xcbiAgY29sb3I6dmFyKC0tbWVudS1oNC1jb2xvcik7XFxufVxcbiNtZW51IHNwYW57XFxuICBjb2xvcjogdmFyKC0tcHJpY2UtZm9udC1jb2xvcik7XFxuICBtYXJnaW4tbGVmdDogNHJlbTtcXG4gIFxcbn1cXG4vKkNvbnRhY3QqL1xcblxcbiNjb250YWN0IGgxe1xcbiAgY29sb3I6IHZhcigtLWhvbWUtaDItZm9udC1jb2xvcik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG4jY29udGFjdCBoM3tcXG4gIGZvbnQtc2l6ZTogY2FsYygycmVtICsgMXZ3KTtcXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJztcXG4gIGNvbG9yOiB2YXIoLS1ob21lLWgyLWZvbnQtY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuI2NvbnRhY3QgLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDByZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWRhcmspO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAxLjJyZW07XFxuICBwYWRkaW5nOiAycmVtIGNhbGMoM3JlbSArIDJ2dykgO1xcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuI2NvbnRhY3QgLmluZm8gcCB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luOiAxLjVyZW0gMDtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcXG59XFxuXFxuI2NvbnRhY3QgLmluZm8gaSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICBjb2xvcjogdmFyKC0tcHJpY2UtZm9udC1jb2xvcik7XFxufVxcbi8qaW1wb3J0ZWQgKi9cXG5cXG4jY29udGFjdCAuY29udGFjdC1jb250YWluZXIgLmlucHV0LWJveCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4jY29udGFjdCAuY29udGFjdC1jb250YWluZXIgLmlucHV0LWJveCBpbnB1dCxcXG4jY29udGFjdCAuY29udGFjdC1jb250YWluZXIgLmlucHV0LWJveCB0ZXh0YXJlYSB7XFxuICB3aWR0aDogOTglO1xcbiAgcGFkZGluZzogMC41cmVtIDA7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgcmVzaXplOiBub25lO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNDMsIDU1LCA1NSwgMCk7XFxufVxcblxcbiNjb250YWN0IC5jb250YWN0LWNvbnRhaW5lciAuaW5wdXQtYm94IHNwYW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGNvbG9yOiB2YXIoLS1ob21lLWgyLWZvbnQtY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG59XFxuXFxuI2NvbnRhY3QgLmNvbnRhY3QtY29udGFpbmVyIC5pbnB1dC1ib3ggaW5wdXQ6Zm9jdXMgfiBzcGFuLFxcbiNjb250YWN0IC5jb250YWN0LWNvbnRhaW5lciAuaW5wdXQtYm94IGlucHV0OnZhbGlkIH4gc3BhbixcXG4jY29udGFjdCAuY29udGFjdC1jb250YWluZXIgLmlucHV0LWJveCB0ZXh0YXJlYTpmb2N1cyB+IHNwYW4sXFxuI2NvbnRhY3QgLmNvbnRhY3QtY29udGFpbmVyIC5pbnB1dC1ib3ggdGV4dGFyZWE6dmFsaWQgfiBzcGFuIHtcXG4gIGNvbG9yOiB2YXIoLS1ob21lLWgyLWZvbnQtY29sb3IpO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJyZW0pO1xcbn1cXG5cXG4jY29udGFjdCAuY29udGFjdC1jb250YWluZXIgdGV4dGFyZWEsXFxuI2NvbnRhY3QgLmNvbnRhY3QtY29udGFpbmVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtY29sb3IpO1xcbn1cXG5cXG4jY29udGFjdCAuY29udGFjdC1jb250YWluZXIgaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ob21lLWgyLWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZzogOHB4IDIycHg7XFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuI2NvbnRhY3QgLmNvbnRhY3QtY29udGFpbmVyIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWhvbWUtcC1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuXFxuLypGb290ZXIqL1xcblxcbiAgI2Zvb3RlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgfVxcbi5mb290ZXIge1xcbiAgICBmb250LWZhbWlseTogJ01vY2hpeSBQb3AgT25lJztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXG4gIH1cXG4gIGEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdFxcbiAgfVxcbiAgXFxuICAuZmEtZ2l0aHViIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAtNHJlbTsgKi9cXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gIH1cXG4gIFxcbiAgLmZhLWdpdGh1Yjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogLyogcm90YXRlKDM2MGRlZykgICovIHNjYWxlKDEuMSk7IC8qIERvbid0IHdhbnQgaXQgdG8gcm90YXRlIG9uIHRoaXMgcGFnZSAqL1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1jb2xvcik7XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtpREFDaUQ7QUFDakQ7SUFDSSx3QkFBd0I7SUFDeEIsc0NBQXNDO0lBQ3RDLHFDQUFxQztJ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QUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLDRDQUE0QztFQUM1QyxZQUFZO0VBQ1osZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7RUFJRSxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLDRCQUE0QjtBQUM5Qjs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOzs7QUFHQSxTQUFTOztFQUVQO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztFQUNUO0FBQ0Y7SUFDSSw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCOzs7RUFHekI7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEI7RUFDRjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixzQ0FBc0M7SUFDdEMsMEJBQTBCO0lBQzFCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLDJDQUEyQyxFQUFFLHlDQUF5QztJQUN0Riw4QkFBOEI7RUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2luemVsOndnaHRANDAwOzUwMDs2MDAmZmFtaWx5PUludGVyOndnaHRAMTAwOzQwMDs1MDA7NjAwJmZhbWlseT1Nb2NoaXkrUG9wK09uZSZmYW1pbHk9UGVybWFuZW50K01hcmtlciZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDUwMDswLDcwMDsxLDEwMCZmYW1pbHk9RnJhdW5jZXMmZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsNDAwOzAsNjAwOzEsNDAwJmZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzEsMjAwOzEsNDAwJmRpc3BsYXk9c3dhcCcpO1xcbi8qIGltcG9ydCBmb250czogJ0NpbnplbCcgLCAnSW50ZXInLCAnTW9jaGl5IFBvcCBPbmUnLCAnUGVybWFuZW50IE1hcmtlcicsIFxcbidSb2JvdG8nLCAnRnJhdW5jZXMnLCAnUG9wcGlucycsICdKb3NlZmluIFNhbnMnICovXFxuOnJvb3Qge1xcbiAgICAtLWRhcmstZm9udC1jb2xvcjogYmxhY2s7XFxuICAgIC0tbGlnaHQtZm9udC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xcbiAgICAtLWhvbWUtaDItZm9udC1jb2xvcjogcmdiKDksIDYxLCAxMDcpO1xcbiAgICAtLWhvbWUtaDItYmFja2dyb3VuZDpyZ2JhKDE2NSwgOTYsIDU1LCAwLjUpO1xcbiAgICAtLWhvbWUtcC1mb250LWNvbG9yOiByZ2IoMjE4LCA5MiwgNDIpO1xcbiAgICAtLWhvbWUtcC1iYWNrZ3JvdW5kOnJnYigxNCwgMTAwLCAxMDAsIC45KTtcXG4gICAgLS1wcmljZS1mb250LWNvbG9yOiByZ2IoMjE5LCA4MSwgMjcpO1xcbiAgICAtLW1lbnUtaDQtY29sb3I6IHJnYig3LCAzMywgNTYpO1xcbiAgICAtLWJvcmRlci1jb2xvcjogIzIyMjtcXG4gICAgLS1iYWNrZ3JvdW5kLWRhcms6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG4gICAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCwgXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL2NvZmZlZTEuanBnJyk7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDpmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgbWFyZ2luOjA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2Fucyc7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4vKiBpbWcuY2VudGVyLWltZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufSAqL1xcblxcbi8qIENvbnRlbnQgKi9cXG4vKiBmcm9tIGh0dHBzOi8vbWF0dGhld2phbWVzdGF5bG9yLmNvbS9ib3R0b20tZm9vdGVyICovXFxuLmNvbnRlbnQgeyAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczpjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICBcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaDEge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogNjRweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcic7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZGFyayk7XFxuICAgIGJvcmRlci1jb2xvcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxufVxcblxcbi5idXR0b24tbmF2IHtcXG4gIHBhZGRpbmc6IC41cmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbn1cXG4vKiBUb2RvIGFkZCBhY3RpdmUgdGFiIGVsZW1lbnRzIGluIHRoZSBKUyAqL1xcbi5idXR0b24tbmF2LmFjdGl2ZSB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbGlnaHQtZm9udC1jb2xvcik7XFxufVxcblxcbi5idXR0b24tbmF2OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcXG59XFxuXFxuLyogTWFpbiAqL1xcbm1haW57XFxuIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbn1cXG4jaG9tZSB7XFxuICAgIG1heC13aWR0aDogNzUlO1xcbiAgICBtaW4td2lkdGg6IDcwOHB4O1xcbiAgICBoZWlnaHQ6IGNhbGMoMTByZW0gKyAxNHZ3KTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZm9udC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtZ3JvdzowO1xcbn1cXG5cXG4ud2VsY29tZS10ZXh0IHtcXG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ud2VsY29tZS10ZXh0IHAucG1haW4ge1xcbiAgcGFkZGluZzogLjI1cmVtIDFyZW07XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMi5wbWFpbiB7XFxuICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2Fucyc7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDU2cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAuOHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1ob21lLWgyLWZvbnQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ob21lLWgyLWJhY2tncm91bmQpO1xcbiAgZGlzcGxheTogdGFibGU7IC8qIGtlZXAgdGhlIGJhY2tncm91bmQgY29sb3Igd3JhcHBlZCB0aWdodCAqL1xcbiAgcGFkZGluZzogLjNyZW0gMXJlbSAwIC41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxufVxcbiAgXFxucC5wbWFpbiB7XFxuICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2Fucyc7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogdmFyKC0taG9tZS1wLWZvbnQtY29sb3IpO1xcbiAgYmFja2dyb3VuZDogdmFyKCAtLWhvbWUtcC1iYWNrZ3JvdW5kKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEuM3JlbTtcXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiBrZWVwIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHdyYXBwZWQgdGlnaHQgKi9cXG4gIG1hcmdpbjogMHB4IGF1dG8gMHB4IGF1dG87IC8qIGtlZXAgdGhlIHRhYmxlIGNlbnRlcmVkICovXFxufVxcbi8qIC5pbmZve1xcbiAgZmxleC1iYXNpczpjb250ZW50O1xcbiAgZmxleC1zaHJpbms6IDA7XFxufSAgICovXFxuXFxuI2hvbWUgLmluZm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAyMTBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4jaG9tZSAuYWRkcmVzcyxcXG4jaG9tZSAuaG91cnMge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1mYW1pbHk6ICdDaW56ZWwnO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmc6IC40cmVtIC4ycmVtIDAgMXJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5zcGFuLFxcbi5hZGRyZXNzLFxcbi5ob3Vyc3tcXG4gIGdhcDogLjhyZW07XFxufVxcblxcbi8qTWVudSovXFxuXFxuI21lbnUge1xcbiAgd2lkdGg6IDQ2JTtcXG4gIGJhY2tncm91bmQ6IHJnYigxNCwgMTAwLCAxMDAsIC41KTtcXG4gIHBhZGRpbmc6IGNhbGMoMnJlbSArIDJ2dyk7XFxuICBib3JkZXItcmFkaXVzOiAxLjJyZW07XFxuICBtYXJnaW46IDRyZW0gYXV0bztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA0ZnIpO1xcbiAgZ3JpZC1nYXA6IDRyZW07XFxuICBcXG4gIFxcbn1cXG4ubWVudXtcXG4gIHdpZHRoOiAzNnZ3O1xcbiAgbWFyZ2luLWJvdHRvbTogMjZweDtcXG59XFxuI21lbnUgaDN7XFxuICBmb250LXNpemU6IGNhbGMoMnJlbSArIDF2dyk7XFxuICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2Fucyc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4jbWVudSBoNHtcXG4gIGZvbnQtZmFtaWx5OiAnUGVybWFuZW50IE1hcmtlcic7XFxuICBmb250LXNpemU6IGNhbGMoMnJlbSArIDAuNXZ3KTtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG4ubWVudS1pdGVtIHtcXG4gIGZsZXgtYmFzaXM6IDIwcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4ubWVudS1pdGVtIHNwYW57XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLml0ZW0tY29udGVudCB7XFxuICAvKiBwYWRkaW5nOiAwIDFyZW07ICovXFxuICBmb250LWZhbWlseTogJ0ludGVyJztcXG4gIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgLjV2dyk7XFxuICBjb2xvcjogdmFyKC0tZGFyay1mb250LWNvbG9yKTtcXG4gIGZsZXgtZ3JvdzogMjtcXG59XFxuXFxuI21lbnUgLml0ZW0tY29udGVudCBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMXZ3KTtcXG4gIFxcbn1cXG5cXG4jbWVudSBoNHtcXG4gIGNvbG9yOnZhcigtLW1lbnUtaDQtY29sb3IpO1xcbn1cXG4jbWVudSBzcGFue1xcbiAgY29sb3I6IHZhcigtLXByaWNlLWZvbnQtY29sb3IpO1xcbiAgbWFyZ2luLWxlZnQ6IDRyZW07XFxuICBcXG59XFxuLypDb250YWN0Ki9cXG5cXG4jY29udGFjdCBoMXtcXG4gIGNvbG9yOiB2YXIoLS1ob21lLWgyLWZvbnQtY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuI2NvbnRhY3QgaDN7XFxuICBmb250LXNpemU6IGNhbGMoMnJlbSArIDF2dyk7XFxuICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2Fucyc7XFxuICBjb2xvcjogdmFyKC0taG9tZS1oMi1mb250LWNvbG9yKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbiNjb250YWN0IC5jb250YWN0LWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAwcmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1kYXJrKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xcbiAgcGFkZGluZzogMnJlbSBjYWxjKDNyZW0gKyAydncpIDtcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbiNjb250YWN0IC5pbmZvIHAge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbjogMS41cmVtIDA7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1jb2xvcik7XFxufVxcblxcbiNjb250YWN0IC5pbmZvIGkge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLXByaWNlLWZvbnQtY29sb3IpO1xcbn1cXG4vKmltcG9ydGVkICovXFxuXFxuI2NvbnRhY3QgLmNvbnRhY3QtY29udGFpbmVyIC5pbnB1dC1ib3gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuI2NvbnRhY3QgLmNvbnRhY3QtY29udGFpbmVyIC5pbnB1dC1ib3ggaW5wdXQsXFxuI2NvbnRhY3QgLmNvbnRhY3QtY29udGFpbmVyIC5pbnB1dC1ib3ggdGV4dGFyZWEge1xcbiAgd2lkdGg6IDk4JTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQzLCA1NSwgNTUsIDApO1xcbn1cXG5cXG4jY29udGFjdCAuY29udGFjdC1jb250YWluZXIgLmlucHV0LWJveCBzcGFuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBjb2xvcjogdmFyKC0taG9tZS1oMi1mb250LWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxufVxcblxcbiNjb250YWN0IC5jb250YWN0LWNvbnRhaW5lciAuaW5wdXQtYm94IGlucHV0OmZvY3VzIH4gc3BhbixcXG4jY29udGFjdCAuY29udGFjdC1jb250YWluZXIgLmlucHV0LWJveCBpbnB1dDp2YWxpZCB+IHNwYW4sXFxuI2NvbnRhY3QgLmNvbnRhY3QtY29udGFpbmVyIC5pbnB1dC1ib3ggdGV4dGFyZWE6Zm9jdXMgfiBzcGFuLFxcbiNjb250YWN0IC5jb250YWN0LWNvbnRhaW5lciAuaW5wdXQtYm94IHRleHRhcmVhOnZhbGlkIH4gc3BhbiB7XFxuICBjb2xvcjogdmFyKC0taG9tZS1oMi1mb250LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycmVtKTtcXG59XFxuXFxuI2NvbnRhY3QgLmNvbnRhY3QtY29udGFpbmVyIHRleHRhcmVhLFxcbiNjb250YWN0IC5jb250YWN0LWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcXG59XFxuXFxuI2NvbnRhY3QgLmNvbnRhY3QtY29udGFpbmVyIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0taG9tZS1oMi1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmc6IDhweCAyMnB4O1xcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbiNjb250YWN0IC5jb250YWN0LWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ob21lLXAtYmFja2dyb3VuZCk7XFxufVxcblxcblxcbi8qRm9vdGVyKi9cXG5cXG4gICNmb290ZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gIH1cXG4uZm9vdGVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb2NoaXkgUG9wIE9uZSc7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFxuICB9XFxuICBhIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXRcXG4gIH1cXG4gIFxcbiAgLmZhLWdpdGh1YiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG4gICAgLyogbWFyZ2luLWJvdHRvbTogLTRyZW07ICovXFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICB9XFxuICBcXG4gIC5mYS1naXRodWI6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IC8qIHJvdGF0ZSgzNjBkZWcpICAqLyBzY2FsZSgxLjEpOyAvKiBEb24ndCB3YW50IGl0IHRvIHJvdGF0ZSBvbiB0aGlzIHBhZ2UgKi9cXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtY29sb3IpO1xcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2NyZWF0ZURpdn0gZnJvbSAnLi9ob21lLmpzJ1xuZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpe1xuICAgIGNvbnN0IGNvbnRhY3QgPSBjcmVhdGVEaXYoJ2NvbnRhY3QtY29udGFpbmVyJyk7XG4gICAgY29udGFjdC5pbm5lckhUTUwgPSBgXG4gIDxoMT5Db250YWN0IHVzPC9oMT5cbiAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImFkZHJlc3NcIj5cbiAgICAgICAgPHA+XG4gICAgICAgIPCfj6AmbmJzcDszOTAxIEVsbSBEcml2ZTxici8+IE5ldyBZb3JrLCBOWSAxMDAwNFxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwaG9uZVwiPlxuICAgICAgPHA+8J+TniZuYnNwOygxMjMpIDQ1Ni03ODkxPC9wPlxuICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImhvdXJzXCI+XG4gICAgICAgIDxwPlxuICAgICAgICA8aSBzdHlsZT1cImZvbnQtc2l6ZToyNnB4XCIgY2xhc3M9XCJmYVwiPiYjeGYwMTc7PC9pPlxuICAgICAgICA8c3Bhbj5Nb24tVGh1cnM6IDwvc3Bhbj43YW0tN3BtXG4gICAgICAgIDxici8+PHNwYW4+JmVtc3A7JmVuc3A7JmVuc3A7RnJpLVN1bjombmJzcDs8L3NwYW4+XG4gICAgICAgICZuYnNwOzdhbS0xMXBtXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZm9ybVwiPlxuICAgICAgICA8Zm9ybSBvbnN1Ym1pdD1cInJldHVybiBmYWxzZVwiPlxuICAgICAgICAgIDxoMz48aSBjbGFzcz1cImZpLXh3c3V4bC1lbnZlbG9wZS1zb2xpZFwiPjwvaT5NZXNzYWdlIHVzPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtYm94XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgPHNwYW4+RnVsbCBOYW1lPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICA8c3Bhbj5FbWFpbDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtYm94XCI+XG4gICAgICAgICAgICA8dGV4dGFyZWEgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxzcGFuPlR5cGUgeW91ciBtZXNzYWdlLi4uPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZW5kXCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGlmcmFtZVxuICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMTkzNTk1LjE1ODMwODU0OTk2ITJkLTc0LjExOTc2NDA0OTQ5NzU5ITNkNDAuNjk3NjYzNzQ4NzkzOTghMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg5YzI1OWE5YjMxMTc0NjklM0EweGQxMzRlMTk5YTQwNWExNjMhMnNFbXBpcmUlMjBTdGF0ZSUyMEJ1aWxkaW5nITVlMCEzbTIhMXNlbiEyc3VzITR2MTY2OTkyOTQwNjExNSE1bTIhMXNlbiEyc3VzXCIgXG4gICAgd2lkdGg9XCI2MDBcIiBcbiAgICBoZWlnaHQ9XCI0NTBcIiBcbiAgICBzdHlsZT1cImJvcmRlcjowO1wiIGFcbiAgICBsbG93ZnVsbHNjcmVlbj1cIlwiIFxuICAgIGxvYWRpbmc9XCJsYXp5XCIgXG4gICAgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiPlxuICAgIDwvaWZyYW1lPlxuICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgcmV0dXJuIGNvbnRhY3Q7XG59XG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKXtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBtYWluLmlubmVySFRNTD0nJztcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCdjb250YWN0Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdob21lJywnbWVudScpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xufVxuIiwiXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGl2KGNsYXNzbmFtZSl7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKGAke2NsYXNzbmFtZX1gKTtcbiAgICBcbiAgICByZXR1cm4gZGl2O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVAoY2xhc3NuYW1lLCB0ZXh0KXtcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLnRleHRDb250ZW50ID0gYCR7dGV4dH1gO1xuICAgIHAuY2xhc3NMaXN0LmFkZChgJHtjbGFzc25hbWV9YCk7XG4gICAgcmV0dXJuIHA7XG59ICBcbmZ1bmN0aW9uIGNyZWF0ZVdlbGNvbWVUZXh0KCl7XG4gICAgbGV0IHdlbGNvbWVUZXh0ID0gY3JlYXRlRGl2KCd3ZWxjb21lLXRleHQnKTtcbiAgICBsZXQgaDJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMlRleHQuY2xhc3NMaXN0LmFkZCgncG1haW4nKTtcbiAgICBoMlRleHQudGV4dENvbnRlbnQ9XCJDb21lIGpvaW4gdXMgYXQgdGhlIGludGVybmV0J3MgYmVzdCBjb2ZmZWUgc2hvcCFcIjtcbiAgICBsZXQgcFRleHQgPSBjcmVhdGVQKCdwbWFpbicsJ0dyYWIgYSBzb290aGluZyBzaXAgdG9kYXknKTtcbiAgICB3ZWxjb21lVGV4dC5hcHBlbmRDaGlsZChoMlRleHQpO1xuICAgIHdlbGNvbWVUZXh0LmFwcGVuZENoaWxkKHBUZXh0KTtcbiAgICByZXR1cm4gd2VsY29tZVRleHQ7XG4gICAgXG59XG5mdW5jdGlvbiBjcmVhdGVJbmZvKCl7XG4gICAgbGV0IGluZm8gPSBjcmVhdGVEaXYoJ2luZm8nKTtcbiAgICBsZXQgYWRkcmVzcyA9IGNyZWF0ZURpdignYWRkcmVzcycpO1xuICAgIGFkZHJlc3MuaW5uZXJIVE1MID1gPHNwYW4+PGkgY2xhc3M9XCJmaS14bnN1eGwtbWFwLW1hcmtlci1zb2xpZFwiPjxzdmcgY2xhc3M9XCJmaS1wYWRkaW5nXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwMDBtbVwiIGhlaWdodD1cIjEwMDBtbVwiIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCIgc3R5bGU9XCJ3aWR0aDoxLjMzZW07IGhlaWdodDoxLjMzZW07dmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj48cGF0aCBpZD1cInBhdGhcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIiBNIDUwMCA4OEMgNTY0IDg4IDYyOCAxMDggNjgwIDE0NEMgNzk0IDIyMiA4NDMgMzc5IDc5NCA1MDdDIDc0NCA2MTIgNjkzIDcxNiA2NDMgODIxQyA2MTcgODcwIDYwMSA5MzAgNTQ4IDk1N0MgNDk0IDk4OCA0MjYgOTU2IDM5OCA5MDRDIDM0MCA3ODggMjg1IDY3MCAyMjggNTUzQyAxODcgNDgwIDE3NiAzOTAgMjAxIDMwOUMgMjM3IDE4MiAzNjIgODggNDk0IDg4QyA0OTYgODggNDk4IDg4IDUwMCA4OEMgNTAwIDg4IDUwMCA4OCA1MDAgODhNIDM4NyA0MDBDIDM4NyA0NjIgNDM4IDUxMiA1MDAgNTEyQyA1NjIgNTEyIDYxMyA0NjIgNjEzIDQwMEMgNjEzIDMzOCA1NjIgMjg3IDUwMCAyODdDIDQzOCAyODcgMzg3IDMzOCAzODcgNDAwQyAzODcgNDAwIDM4NyA0MDAgMzg3IDQwMFwiIHRyYW5zZm9ybT1cIlwiPjwvcGF0aD48L3N2Zz48L2k+PC9zcGFuPjxwPjM5MDEgRWxtIERyaXZlPGJyPk5ldyBZb3JrLCBOWSAxMDAwNDwvcD5gO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgICBsZXQgaG91cnMgPSBjcmVhdGVEaXYoJ2hvdXJzJyk7XG4gICAgaG91cnMuaW5uZXJIVE1MID1gPHNwYW4+PGkgY2xhc3M9XCJmaS1jbnN1aGwtY2xvY2stc29saWRcIj48c3ZnIGNsYXNzPVwiZmktcGFkZGluZ1wiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMDAwbW1cIiBoZWlnaHQ9XCIxMDAwbW1cIiB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiIHN0eWxlPVwid2lkdGg6MS4zM2VtOyBoZWlnaHQ6MS4zM2VtO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+PHBhdGggaWQ9XCJwYXRoXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNIDUwMCAwQyAyMjQgMCAwIDIyNCAwIDUwMEMgMCA3NzYgMjI0IDEwMDAgNTAwIDEwMDBDIDc3NiAxMDAwIDEwMDAgNzc2IDEwMDAgNTAwQyAxMDAwIDIyNCA3NzYgMCA1MDAgMEMgNTAwIDAgNTAwIDAgNTAwIDAgTSA1NTAgMjUwQyA1NTAgMjUwIDU1MCA0NDUgNTUwIDQ0NUMgNTY1IDQ1OCA1NzUgNDc4IDU3NSA1MDBDIDU3NSA1NDEgNTQxIDU3NSA1MDAgNTc1QyA0OTkgNTc1IDQ5NyA1NzUgNDk2IDU3NUMgNDk2IDU3NSAyODUgNzg1IDI4NSA3ODVDIDI2NiA4MDUgMjM0IDgwNiAyMTQgNzg2QyAxOTQgNzY2IDE5NSA3MzQgMjE1IDcxNUMgMjE1IDcxNSA0MjUgNTA0IDQyNSA1MDRDIDQyNSA1MDMgNDI1IDUwMSA0MjUgNTAwQyA0MjUgNDc4IDQzNSA0NTggNDUwIDQ0NUMgNDUwIDQ0NSA0NTAgMjUwIDQ1MCAyNTBDIDQ1MCAyMjIgNDcyIDIwMCA0OTkgMTk5QyA1MjcgMTk5IDU1MCAyMjIgNTUwIDI1MEMgNTUwIDI1MCA1NTAgMjUwIDU1MCAyNTBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTAwMCwwKSBzY2FsZSgtMSwxKSBcIj48L3BhdGg+PC9zdmc+PC9pPjwvc3Bhbj5cbiAgICA8cD5cbiAgICA8c3Bhbj5Nb24tVGh1cnM6IDwvc3Bhbj43YW0tN3BtPGJyPjxzcGFuPkZyaS1TdW46IDwvc3Bhbj43YW0tMTFwbVxuICAgIDwvcD5gXG4gICAgaW5mby5hcHBlbmRDaGlsZChob3Vycyk7XG4gICAgcmV0dXJuIGluZm87XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCdob21lJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudD0gXCJcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZVdlbGNvbWVUZXh0KCkpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSW5mbygpKTtcbiAgICBcbn1cblxuXG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7aW5pdFdlYnNpdGV9IGZyb20gJy4vbG9hZFBhZ2UuanMnO1xuaW1wb3J0IHtsb2FkSG9tZX0gZnJvbSAnLi9ob21lLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFjdGl2ZUJ1dHRvbihidXR0b24pIHtcbiAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgKCcuYnV0dG9uLW5hdicpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBpZiAoYnV0dG9uICE9PSB0aGlzKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cbmluaXRXZWJzaXRlKCk7XG5cblxuIiwiaW1wb3J0IHtzZXRBY3RpdmVCdXR0b259IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IHtsb2FkSG9tZX0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCB7bG9hZE1lbnV9IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQge2xvYWRDb250YWN0fSBmcm9tICcuL2NvbnRhY3QuanMnXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQ2FzdGxlIENvZmZlZSc7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSlcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGxldCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tbmF2Jyk7XG4gICAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpe1xuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihob21lQnV0dG9uKTtcbiAgICAgICAgbG9hZEhvbWUoKTsgXG4gICAgfSk7XG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuXG4gICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXYnKTtcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSl7XG4gICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKG1lbnVCdXR0b24pO1xuICAgICAgICBsb2FkTWVudSgpO1xuICAgIH0pO1xuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcblxuICAgIGxldCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tbmF2Jyk7XG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpe1xuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihjb250YWN0QnV0dG9uKTtcbiAgICAgICAgbG9hZENvbnRhY3QoKVxuICAgIH0pO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcblxuICAgIHJldHVybiBuYXY7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCdob21lJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG5cbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICAgIGNvbnN0IHBGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcEZvb3Rlci5pbm5lckh0bWwgPSAnJm5ic3A7JztcbiAgICBwRm9vdGVyLnRleHRDb250ZW50ID0gXCJYYW5kZXJcIjtcbiAgICBwRm9vdGVyLmlubmVySHRtbCArPSAnJm5ic3A7JztcbiAgICBwRm9vdGVyLnRleHRDb250ZW50ICs9XCLCqSAyMDIyXCI7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHBGb290ZXIpO1xuICAgIC8vYWRkIGxpbmsgYW5kIGljb24gYWZ0ZXIgdGV4dFxuICAgIGNvbnN0IGdodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGdodWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS94YW5kZXJuZXN0YS9vZGluLXJlc3RhdXJhbnQvXCI7XG4gICAgY29uc3QgZ2h1YkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBnaHViSW1nLmNsYXNzTGlzdC5hZGQoJ2ZhLWdpdGh1YicpO1xuICAgIGdodWJJbWcuY2xhc3NMaXN0LmFkZCgnZmEtYnJhbmRzJyk7XG4gICAgZ2h1YkltZy5zZXRBdHRyaWJ1dGU9KCdhbHQnLCdnaXRodWIgaWNvbicpO1xuICAgIGdodWJMaW5rLmFwcGVuZENoaWxkKGdodWJJbWcpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChnaHViTGluayk7XG4gICBcbiAgICBcbiAgICByZXR1cm4gZm9vdGVyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluaXRXZWJzaXRlKCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gICAgbG9hZEhvbWUoKTtcbiAgICAvL2xvYWRDb250YWN0KCk7XG4gICAgc2V0QWN0aXZlQnV0dG9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLW5hdlwiKSk7XG4gICAgXG5cblxufVxuXG4iLCJpbXBvcnQge2NyZWF0ZURpdixjcmVhdGVQfSBmcm9tICcuL2hvbWUuanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCl7XG4gICAgY29uc3QgbWVudURpdiA9IGNyZWF0ZURpdignbWVudScpO1xuICAgIGNvbnN0IGNhdGVnb3J5MSA9IGNyZWF0ZU1lbnVIMygnQ29mZmVlJyk7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjYXRlZ29yeTEpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ0RyaXAnLCckMy41MCcsICdZb3VyIGNob2ljZSBvZiBkZWxpY2lvdXMgc21vb3RoLCBibG9uZGUsIG1lZGl1bSwgb3IgZGFyayByb2FzdHMuJykpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ0VzcHJlc3NvJywnJDIuNzUnLCBcIkJlc3Qgc2luZ2xlIHNob3QgeW91J2xsIGV2ZXIgdGFzdGVcIikpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ0xhdHRlJywnJDQuNTAnLCBcIk91ciBzaWduYXR1cmUgZXNwcmVzc28sIHRvcHBlZCB3aXRoIHNpbGt5IHNtb290aCBtaWxrIG9yIG5vbi1kYWlyeSBzdWJzdGl0dXRlLCBhbmQgYSBmbHVmZnkgbGF5ZXIgb2YgZm9hbVwiKSk7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnQ2FwcHVjaW5vJywnJDQuNzUnLCBcIkVzcHJlc3NvIHcvIHN0ZWFtZWQgbWlsayBhbmQgZm9hbSwgdG9wIHdpdGggY2lubmFtb24gc3VnYXJcIikpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ01vY2hhJywnJDUuMDAnLCBcIkRlbGljaW91cyBjb21ibyBvZiBvdXIgZmluZXN0IGNvZmZlZSwgY2hvY29sYXRlIGFuZCBtaWxrXCIpKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdDb2xkIEJyZXcnLCckNC41MCcsIFwiU2xvdyByb2FzdGVkIHJvYnVzdCBibGVuZCBzdGVlcGVkIG92ZXJuaWdodCBhdCBzdWJ0aGVybWFsIHRlbXBlcmF0dXJlc1wiKSk7XG5cbiAgICBjb25zdCBjYXRlZ29yeTIgPSBjcmVhdGVNZW51SDMoJ1Bhc3RyeScpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkyKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdCdXR0ZXIgQ3JvaXNzYW50JyAsJyQzLjAwJyxcIkNsYXNzaWMgZmxha3kgYW5kIHNtb3RoZXJlZCBpbiBidXR0ZXIgY3JvaXNzYW50XCIpKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdQYWluIEF1IENob2NvbGF0JywnJDMuMjUnLFwiRmxha3kgYW5kIGJ1dHRlcnkgcGFzdHJ5IGZpbGxlZCB3aXRoIHRoZSBmaW5lc3QgY2hvY29sYXRlXCIpKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdTbmlja2VyRG9vZGxlJywnJDIuNTAnLFwiU29mdCwgY2hld3ksIGFkZGljdGl2ZSBzd2VldCBjb29raWUgdHJlYXRcIikpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ0JsdWViZXJyeSBNdWZmaW4nLCckMy4yNScsXCJIYW5kcGlja2VkIGJsdWViZXJyaWVzIG1peGVkIGluIHNvZnQgcGlsbG93eSBtdWZmaW5zIHRoYXQgbWVsdCBpbiB5b3VyIG1vdXRoXCIpKTtcblxuICAgIHJldHVybiBtZW51RGl2O1xufVxuZnVuY3Rpb24gY3JlYXRlTWVudUgzKGNhdGVnb3J5KXtcbiAgICBsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGgzLmNsYXNzTGlzdC5hZGQoJ21lbnUtaDMnKTtcbiAgICBoMy50ZXh0Q29udGVudCA9IGAke2NhdGVnb3J5fWA7XG5cbiAgICByZXR1cm4gaDM7XG59XG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pe1xuICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpXG4gICAgaXRlbS50ZXh0Q29udGVudCA9IGAke25hbWV9YDtcbiAgICBsZXQgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudD0gYCR7cHJpY2V9YDtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgbGV0IGRlc2NyaXAgPSBjcmVhdGVQKCdpdGVtLWNvbnRlbnQnLGAke2Rlc2NyaXB0aW9ufWApO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcCk7XG5cbiAgICByZXR1cm4gaXRlbTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBtYWluLmlubmVySFRNTD0nJztcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCdtZW51Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdob21lJywnY29udGFjdCcpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIGxldCBtZW51ID0gY3JlYXRlTWVudSgpO1xuICAgIFxuICAgIFxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudSk7XG59XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9