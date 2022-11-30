"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/*     let createDiv = (classname) =>{
        let div = document.createElement('div');
        div.classList.add(`${classname}`);
        
        return div;
    } */
function createWelcomeText(){
    let welcomeText = document.createElement('p'); //createDiv('welcome-text')
    welcomeText.classList.add('welcometext');
    return welcomeText;
    
/*     let h2Home = document.createElement('h2');
    h2Home.classList.add('pmain');
    h2Home.textContent = "Come join us at the internet's best coffee shop!";
    welcomeText.appendChild(h2Home); */
}
function createInfo(){
    let info = document.createElement('div');
    info.classList.add('info');

    let address = document.createElement('div');
    address.classList.add('address');
    info.appendChild(address);

    return info;
}

function loadHome() {
    let main = document.createElement('main');
    main.classList.add('home');
    main.setAttribute('id','home');
    main.textContent= "";
    main.appendChild(createWelcomeText());
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixVQUFVO0FBQ3ZDO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qICAgICBsZXQgY3JlYXRlRGl2ID0gKGNsYXNzbmFtZSkgPT57XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NuYW1lfWApO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9ICovXG5mdW5jdGlvbiBjcmVhdGVXZWxjb21lVGV4dCgpe1xuICAgIGxldCB3ZWxjb21lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTsgLy9jcmVhdGVEaXYoJ3dlbGNvbWUtdGV4dCcpXG4gICAgd2VsY29tZVRleHQuY2xhc3NMaXN0LmFkZCgnd2VsY29tZXRleHQnKTtcbiAgICByZXR1cm4gd2VsY29tZVRleHQ7XG4gICAgXG4vKiAgICAgbGV0IGgySG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDJIb21lLmNsYXNzTGlzdC5hZGQoJ3BtYWluJyk7XG4gICAgaDJIb21lLnRleHRDb250ZW50ID0gXCJDb21lIGpvaW4gdXMgYXQgdGhlIGludGVybmV0J3MgYmVzdCBjb2ZmZWUgc2hvcCFcIjtcbiAgICB3ZWxjb21lVGV4dC5hcHBlbmRDaGlsZChoMkhvbWUpOyAqL1xufVxuZnVuY3Rpb24gY3JlYXRlSW5mbygpe1xuICAgIGxldCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG5cbiAgICBsZXQgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZHJlc3MuY2xhc3NMaXN0LmFkZCgnYWRkcmVzcycpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgICByZXR1cm4gaW5mbztcbn1cblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywnaG9tZScpO1xuICAgIG1haW4udGV4dENvbnRlbnQ9IFwiXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVXZWxjb21lVGV4dCgpKTtcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=