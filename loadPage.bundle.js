"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["loadPage"],{

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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/loadPage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZFBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ25DO0FBQ0Esb0JBQW9CLG1EQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9ETztBQUNQO0FBQ0EseUJBQXlCLFVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLHVCQUF1QixLQUFLO0FBQzVCLHVCQUF1QixVQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc05BQXNOLGNBQWMsdUJBQXVCO0FBQzNQOztBQUVBO0FBQ0EsK01BQStNLGNBQWMsdUJBQXVCO0FBQ3BQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQSxVQUFVLGlCQUFpQjtBQUNRO0FBQ0E7QUFDSzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQVE7QUFDaEIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQVE7QUFDaEIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQVc7QUFDbkIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGtEQUFRO0FBQ1o7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RzRDOztBQUU1QztBQUNBLG9CQUFvQixtREFBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFNBQVM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsS0FBSztBQUMvQjtBQUNBLDhCQUE4QixNQUFNO0FBQ3BDO0FBQ0Esa0JBQWtCLGlEQUFPLG1CQUFtQixZQUFZO0FBQ3hEOztBQUVBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2xvYWRQYWdlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlRGl2fSBmcm9tICcuL2hvbWUuanMnXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCl7XG4gICAgY29uc3QgY29udGFjdCA9IGNyZWF0ZURpdignY29udGFjdCcpO1xuICAgIGNvbnRhY3QuaW5uZXJIVE1MID0gYFxuICAgIDxoMT5Db250YWN0IHVzPC9oMT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb250YWN0LWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWRkcmVzc1wiPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8aSBjbGFzcz1cImZpLXhuc3V4bC1tYXAtbWFya2VyLXNvbGlkXCI+PC9pPjM5MDEgRWxtIERyaXZlPGJyIC8+TmV3IFlvcmssIE5ZIDEwMDA0XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImhvdXJzXCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmktY25zdWhsLWNsb2NrLXNvbGlkXCI+PC9pXG4gICAgICAgICAgPjxzcGFuPk1vbi1UaHVyczo8L3NwYW4+N2FtLTdwbTxiciAvPjxzcGFuPkZyaS1TdW46PC9zcGFuXG4gICAgICAgICAgPjdhbS0xMXBtXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBob25lXCI+XG4gICAgICAgIDxwPjxpIGNsYXNzPVwiZmkteG5zcnhsLXBob25lLXNvbGlkXCI+PC9pPigxMjMpIDQ1Ni03ODkxPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1mb3JtXCI+XG4gICAgICAgIDxmb3JtIG9uc3VibWl0PVwicmV0dXJuIGZhbHNlXCI+XG4gICAgICAgICAgPGgzPjxpIGNsYXNzPVwiZmkteHdzdXhsLWVudmVsb3BlLXNvbGlkXCI+PC9pPk1lc3NhZ2UgdXM8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICA8c3Bhbj5GdWxsIE5hbWU8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWJveFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgIDxzcGFuPkVtYWlsPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSByZXF1aXJlZD48L3RleHRhcmVhPlxuICAgICAgICAgICAgPHNwYW4+VHlwZSB5b3VyIG1lc3NhZ2UuLi48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmRcIiAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8aWZyYW1lXG4gICAgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxOTM1OTUuMTU4MzA4NTQ5OTYhMmQtNzQuMTE5NzY0MDQ5NDk3NTkhM2Q0MC42OTc2NjM3NDg3OTM5OCEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ODljMjU5YTliMzExNzQ2OSUzQTB4ZDEzNGUxOTlhNDA1YTE2MyEyc0VtcGlyZSUyMFN0YXRlJTIwQnVpbGRpbmchNWUwITNtMiExc2VuITJzdXMhNHYxNjY5OTI5NDA2MTE1ITVtMiExc2VuITJzdXNcIiBcbiAgICB3aWR0aD1cIjYwMFwiIFxuICAgIGhlaWdodD1cIjQ1MFwiIFxuICAgIHN0eWxlPVwiYm9yZGVyOjA7XCIgYVxuICAgIGxsb3dmdWxsc2NyZWVuPVwiXCIgXG4gICAgbG9hZGluZz1cImxhenlcIiBcbiAgICByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCI+XG4gICAgPC9pZnJhbWU+XG4gIDwvZGl2PlxuICAgIGA7XG5cbiAgICByZXR1cm4gY29udGFjdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ29udGFjdCgpe1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIG1haW4uaW5uZXJIVE1MPScnO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRhY3QnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2hvbWUnLCdtZW51Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XG59XG4iLCJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXYoY2xhc3NuYW1lKXtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NuYW1lfWApO1xuICAgIFxuICAgIHJldHVybiBkaXY7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUChjbGFzc25hbWUsIHRleHQpe1xuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAudGV4dENvbnRlbnQgPSBgJHt0ZXh0fWA7XG4gICAgcC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzbmFtZX1gKTtcbiAgICByZXR1cm4gcDtcbn0gIFxuZnVuY3Rpb24gY3JlYXRlV2VsY29tZVRleHQoKXtcbiAgICBsZXQgd2VsY29tZVRleHQgPSBjcmVhdGVEaXYoJ3dlbGNvbWUtdGV4dCcpO1xuICAgIGxldCBoMlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyVGV4dC5jbGFzc0xpc3QuYWRkKCdwbWFpbicpO1xuICAgIGgyVGV4dC50ZXh0Q29udGVudD1cIkNvbWUgam9pbiB1cyBhdCB0aGUgaW50ZXJuZXQncyBiZXN0IGNvZmZlZSBzaG9wIVwiO1xuICAgIGxldCBwVGV4dCA9IGNyZWF0ZVAoJ3BtYWluJywnR3JhYiBhIHNvb3RoaW5nIHNpcCB0b2RheScpO1xuICAgIHdlbGNvbWVUZXh0LmFwcGVuZENoaWxkKGgyVGV4dCk7XG4gICAgd2VsY29tZVRleHQuYXBwZW5kQ2hpbGQocFRleHQpO1xuICAgIHJldHVybiB3ZWxjb21lVGV4dDtcbiAgICBcbn1cbmZ1bmN0aW9uIGNyZWF0ZUluZm8oKXtcbiAgICBsZXQgaW5mbyA9IGNyZWF0ZURpdignaW5mbycpO1xuICAgIGxldCBhZGRyZXNzID0gY3JlYXRlRGl2KCdhZGRyZXNzJyk7XG4gICAgYWRkcmVzcy5pbm5lckhUTUwgPWA8c3Bhbj48aSBjbGFzcz1cImZpLXhuc3V4bC1tYXAtbWFya2VyLXNvbGlkXCI+PHN2ZyBjbGFzcz1cImZpLXBhZGRpbmdcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTAwMG1tXCIgaGVpZ2h0PVwiMTAwMG1tXCIgdmlld0JveD1cIjAgMCAxMDAwIDEwMDBcIiBzdHlsZT1cIndpZHRoOjEuMzNlbTsgaGVpZ2h0OjEuMzNlbTt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiPjxwYXRoIGlkPVwicGF0aFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiIE0gNTAwIDg4QyA1NjQgODggNjI4IDEwOCA2ODAgMTQ0QyA3OTQgMjIyIDg0MyAzNzkgNzk0IDUwN0MgNzQ0IDYxMiA2OTMgNzE2IDY0MyA4MjFDIDYxNyA4NzAgNjAxIDkzMCA1NDggOTU3QyA0OTQgOTg4IDQyNiA5NTYgMzk4IDkwNEMgMzQwIDc4OCAyODUgNjcwIDIyOCA1NTNDIDE4NyA0ODAgMTc2IDM5MCAyMDEgMzA5QyAyMzcgMTgyIDM2MiA4OCA0OTQgODhDIDQ5NiA4OCA0OTggODggNTAwIDg4QyA1MDAgODggNTAwIDg4IDUwMCA4OE0gMzg3IDQwMEMgMzg3IDQ2MiA0MzggNTEyIDUwMCA1MTJDIDU2MiA1MTIgNjEzIDQ2MiA2MTMgNDAwQyA2MTMgMzM4IDU2MiAyODcgNTAwIDI4N0MgNDM4IDI4NyAzODcgMzM4IDM4NyA0MDBDIDM4NyA0MDAgMzg3IDQwMCAzODcgNDAwXCIgdHJhbnNmb3JtPVwiXCI+PC9wYXRoPjwvc3ZnPjwvaT48L3NwYW4+PHA+MzkwMSBFbG0gRHJpdmU8YnI+TmV3IFlvcmssIE5ZIDEwMDA0PC9wPmA7XG4gICAgaW5mby5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICAgIGxldCBob3VycyA9IGNyZWF0ZURpdignaG91cnMnKTtcbiAgICBob3Vycy5pbm5lckhUTUwgPWA8c3Bhbj48aSBjbGFzcz1cImZpLWNuc3VobC1jbG9jay1zb2xpZFwiPjxzdmcgY2xhc3M9XCJmaS1wYWRkaW5nXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwMDBtbVwiIGhlaWdodD1cIjEwMDBtbVwiIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCIgc3R5bGU9XCJ3aWR0aDoxLjMzZW07IGhlaWdodDoxLjMzZW07dmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj48cGF0aCBpZD1cInBhdGhcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0gNTAwIDBDIDIyNCAwIDAgMjI0IDAgNTAwQyAwIDc3NiAyMjQgMTAwMCA1MDAgMTAwMEMgNzc2IDEwMDAgMTAwMCA3NzYgMTAwMCA1MDBDIDEwMDAgMjI0IDc3NiAwIDUwMCAwQyA1MDAgMCA1MDAgMCA1MDAgMCBNIDU1MCAyNTBDIDU1MCAyNTAgNTUwIDQ0NSA1NTAgNDQ1QyA1NjUgNDU4IDU3NSA0NzggNTc1IDUwMEMgNTc1IDU0MSA1NDEgNTc1IDUwMCA1NzVDIDQ5OSA1NzUgNDk3IDU3NSA0OTYgNTc1QyA0OTYgNTc1IDI4NSA3ODUgMjg1IDc4NUMgMjY2IDgwNSAyMzQgODA2IDIxNCA3ODZDIDE5NCA3NjYgMTk1IDczNCAyMTUgNzE1QyAyMTUgNzE1IDQyNSA1MDQgNDI1IDUwNEMgNDI1IDUwMyA0MjUgNTAxIDQyNSA1MDBDIDQyNSA0NzggNDM1IDQ1OCA0NTAgNDQ1QyA0NTAgNDQ1IDQ1MCAyNTAgNDUwIDI1MEMgNDUwIDIyMiA0NzIgMjAwIDQ5OSAxOTlDIDUyNyAxOTkgNTUwIDIyMiA1NTAgMjUwQyA1NTAgMjUwIDU1MCAyNTAgNTUwIDI1MFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDAwLDApIHNjYWxlKC0xLDEpIFwiPjwvcGF0aD48L3N2Zz48L2k+PC9zcGFuPlxuICAgIDxwPlxuICAgIDxzcGFuPk1vbi1UaHVyczogPC9zcGFuPjdhbS03cG08YnI+PHNwYW4+RnJpLVN1bjogPC9zcGFuPjdhbS0xMXBtXG4gICAgPC9wPmBcbiAgICBpbmZvLmFwcGVuZENoaWxkKGhvdXJzKTtcbiAgICByZXR1cm4gaW5mbztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsJ2hvbWUnKTtcbiAgICBtYWluLnRleHRDb250ZW50PSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlV2VsY29tZVRleHQoKSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVJbmZvKCkpO1xuICAgIFxufVxuXG5cbiIsIi8vaW1wb3J0IHtzZXRBY3RpdmVCdXR0b259IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IHtsb2FkSG9tZX0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCB7bG9hZE1lbnV9IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQge2xvYWRDb250YWN0fSBmcm9tICcuL2NvbnRhY3QuanMnXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQ2FzdGxlIENvZmZlZSc7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSlcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGxldCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tbmF2Jyk7XG4gICAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpe1xuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihob21lQnV0dG9uKTtcbiAgICAgICAgbG9hZEhvbWUoKTsgXG4gICAgfSk7XG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuXG4gICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXYnKTtcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSl7XG4gICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKG1lbnVCdXR0b24pO1xuICAgICAgICBsb2FkTWVudSgpO1xuICAgIH0pO1xuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcblxuICAgIGxldCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tbmF2Jyk7XG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpe1xuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihjb250YWN0QnV0dG9uKTtcbiAgICAgICAgbG9hZENvbnRhY3QoKVxuICAgIH0pO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcblxuICAgIHJldHVybiBuYXY7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0QWN0aXZlQnV0dG9uKGJ1dHRvbikge1xuICAgIGxldCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCAoJy5idXR0b24tbmF2Jyk7XG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGlmIChidXR0b24gIT09IHRoaXMpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsJ2hvbWUnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcblxuICAgIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgcEZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBnaHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBnaHViTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20veGFuZGVybmVzdGEvb2Rpbi1yZXN0YXVyYW50L1wiO1xuICAgIC8vZ2h1YkxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICBwRm9vdGVyLmFwcGVuZENoaWxkKGdodWJMaW5rKTtcbiAgICBwRm9vdGVyLmlubmVySHRtbCA9ICcmbmJzcDsnO1xuICAgIHBGb290ZXIudGV4dENvbnRlbnQgPSBcIlhhbmRlclwiO1xuICAgIHBGb290ZXIuaW5uZXJIdG1sICs9ICcmbmJzcDsnO1xuICAgIHBGb290ZXIudGV4dENvbnRlbnQgKz1cIsKpIDIwMjJcIjtcbiAgICBjb25zdCBnaHViSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGdodWJJbWcuY2xhc3NMaXN0LmFkZCgnZmEtZ2l0aHViJyk7XG4gICAgZ2h1YkltZy5jbGFzc0xpc3QuYWRkKCdmYS1icmFuZHMnKTtcbiAgICBnaHViSW1nLnNldEF0dHJpYnV0ZT0oJ2FsdCcsJ2dpdGh1YiBpY29uJyk7XG4gICAgcEZvb3Rlci5hcHBlbmRDaGlsZChnaHViSW1nKTtcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChwRm9vdGVyKTtcbiAgICByZXR1cm4gZm9vdGVyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluaXRXZWJzaXRlKCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gICAgbG9hZEhvbWUoKTtcbiAgICAvL2xvYWRDb250YWN0KCk7XG4gICAgc2V0QWN0aXZlQnV0dG9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLW5hdlwiKSk7XG4gICAgXG5cblxufVxuXG4iLCJpbXBvcnQge2NyZWF0ZURpdixjcmVhdGVQfSBmcm9tICcuL2hvbWUuanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCl7XG4gICAgY29uc3QgbWVudURpdiA9IGNyZWF0ZURpdignbWVudScpO1xuICAgIGNvbnN0IGNhdGVnb3J5MSA9IGNyZWF0ZU1lbnVIMygnQ29mZmVlJyk7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjYXRlZ29yeTEpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ0RyaXAnLCckMy41MCcsICdZb3VyIGNob2ljZSBvZiBkZWxpY2lvdXMgc21vb3RoLCBibG9uZGUsIG1lZGl1bSwgb3IgZGFyayByb2FzdHMuJykpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ0VzcHJlc3NvJywnJDIuNzUnLCBcIkJlc3Qgc2luZ2xlIHNob3QgeW91J2xsIGV2ZXIgdGFzdGVcIikpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ0xhdHRlJywnJDQuNTAnLCBcIk91ciBzaWduYXR1cmUgZXNwcmVzc28sIHRvcHBlZCB3aXRoIHNpbGt5IHNtb290aCBtaWxrIG9yIG5vbi1kYWlyeSBzdWJzdGl0dXRlLCBhbmQgYSBmbHVmZnkgbGF5ZXIgb2YgZm9hbVwiKSk7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnQ2FwcHVjaW5vJywnJDQuNzUnLCBcIkVzcHJlc3NvIHcvIHN0ZWFtZWQgbWlsayBhbmQgZm9hbSwgdG9wIHdpdGggY2lubmFtb24gc3VnYXJcIikpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ01vY2hhJywnJDUuMDAnLCBcIkRlbGljaW91cyBjb21ibyBvZiBvdXIgZmluZXN0IGNvZmZlZSwgY2hvY29sYXRlIGFuZCBtaWxrXCIpKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdDb2xkIEJyZXcnLCckNC41MCcsIFwiU2xvdyByb2FzdGVkIHJvYnVzdCBibGVuZCBzdGVlcGVkIG92ZXJuaWdodCBhdCBzdWJ0aGVybWFsIHRlbXBlcmF0dXJlc1wiKSk7XG5cbiAgICBjb25zdCBjYXRlZ29yeTIgPSBjcmVhdGVNZW51SDMoJ1Bhc3RyeScpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkyKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdCdXR0ZXIgQ3JvaXNzYW50JyAsJyQzLjAwJyxcIkNsYXNzaWMgZmxha3kgYW5kIHNtb3RoZXJlZCBpbiBidXR0ZXIgY3JvaXNzYW50XCIpKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdQYWluIEF1IENob2NvbGF0JywnJDMuMjUnLFwiRmxha3kgYW5kIGJ1dHRlcnkgcGFzdHJ5IGZpbGxlZCB3aXRoIHRoZSBmaW5lc3QgY2hvY29sYXRlXCIpKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdTbmlja2VyRG9vZGxlJywnJDIuNTAnLFwiU29mdCwgY2hld3ksIGFkZGljdGl2ZSBzd2VldCBjb29raWUgdHJlYXRcIikpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ0JsdWViZXJyeSBNdWZmaW4nLCckMy4yNScsXCJIYW5kcGlja2VkIGJsdWViZXJyaWVzIG1peGVkIGluIHNvZnQgcGlsbG93eSBtdWZmaW5zIHRoYXQgbWVsdCBpbiB5b3VyIG1vdXRoXCIpKTtcblxuICAgIHJldHVybiBtZW51RGl2O1xufVxuZnVuY3Rpb24gY3JlYXRlTWVudUgzKGNhdGVnb3J5KXtcbiAgICBsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGgzLmNsYXNzTGlzdC5hZGQoJ21lbnUtaDMnKTtcbiAgICBoMy50ZXh0Q29udGVudCA9IGAke2NhdGVnb3J5fWA7XG5cbiAgICByZXR1cm4gaDM7XG59XG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pe1xuICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpXG4gICAgaXRlbS50ZXh0Q29udGVudCA9IGAke25hbWV9YDtcbiAgICBsZXQgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudD0gYCR7cHJpY2V9YDtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgbGV0IGRlc2NyaXAgPSBjcmVhdGVQKCdpdGVtLWNvbnRlbnQnLGAke2Rlc2NyaXB0aW9ufWApO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcCk7XG5cbiAgICByZXR1cm4gaXRlbTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBtYWluLmlubmVySFRNTD0nJztcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCdtZW51Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdob21lJywnY29udGFjdCcpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIGxldCBtZW51ID0gY3JlYXRlTWVudSgpO1xuICAgIFxuICAgIFxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudSk7XG59XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9