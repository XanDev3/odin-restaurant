"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["home"],{

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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNPO0FBQ1A7QUFDQSx5QkFBeUIsVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsdUJBQXVCLEtBQUs7QUFDNUIsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzTkFBc04sY0FBYyx1QkFBdUI7QUFDM1A7O0FBRUE7QUFDQSwrTUFBK00sY0FBYyx1QkFBdUI7QUFDcFA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpdihjbGFzc25hbWUpe1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChgJHtjbGFzc25hbWV9YCk7XG4gICAgXG4gICAgcmV0dXJuIGRpdjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQKGNsYXNzbmFtZSwgdGV4dCl7XG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC50ZXh0Q29udGVudCA9IGAke3RleHR9YDtcbiAgICBwLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NuYW1lfWApO1xuICAgIHJldHVybiBwO1xufSAgXG5mdW5jdGlvbiBjcmVhdGVXZWxjb21lVGV4dCgpe1xuICAgIGxldCB3ZWxjb21lVGV4dCA9IGNyZWF0ZURpdignd2VsY29tZS10ZXh0Jyk7XG4gICAgbGV0IGgyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDJUZXh0LmNsYXNzTGlzdC5hZGQoJ3BtYWluJyk7XG4gICAgaDJUZXh0LnRleHRDb250ZW50PVwiQ29tZSBqb2luIHVzIGF0IHRoZSBpbnRlcm5ldCdzIGJlc3QgY29mZmVlIHNob3AhXCI7XG4gICAgbGV0IHBUZXh0ID0gY3JlYXRlUCgncG1haW4nLCdHcmFiIGEgc29vdGhpbmcgc2lwIHRvZGF5Jyk7XG4gICAgd2VsY29tZVRleHQuYXBwZW5kQ2hpbGQoaDJUZXh0KTtcbiAgICB3ZWxjb21lVGV4dC5hcHBlbmRDaGlsZChwVGV4dCk7XG4gICAgcmV0dXJuIHdlbGNvbWVUZXh0O1xuICAgIFxufVxuZnVuY3Rpb24gY3JlYXRlSW5mbygpe1xuICAgIGxldCBpbmZvID0gY3JlYXRlRGl2KCdpbmZvJyk7XG4gICAgbGV0IGFkZHJlc3MgPSBjcmVhdGVEaXYoJ2FkZHJlc3MnKTtcbiAgICBhZGRyZXNzLmlubmVySFRNTCA9YDxzcGFuPjxpIGNsYXNzPVwiZmkteG5zdXhsLW1hcC1tYXJrZXItc29saWRcIj48c3ZnIGNsYXNzPVwiZmktcGFkZGluZ1wiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMDAwbW1cIiBoZWlnaHQ9XCIxMDAwbW1cIiB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiIHN0eWxlPVwid2lkdGg6MS4zM2VtOyBoZWlnaHQ6MS4zM2VtO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+PHBhdGggaWQ9XCJwYXRoXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCIgTSA1MDAgODhDIDU2NCA4OCA2MjggMTA4IDY4MCAxNDRDIDc5NCAyMjIgODQzIDM3OSA3OTQgNTA3QyA3NDQgNjEyIDY5MyA3MTYgNjQzIDgyMUMgNjE3IDg3MCA2MDEgOTMwIDU0OCA5NTdDIDQ5NCA5ODggNDI2IDk1NiAzOTggOTA0QyAzNDAgNzg4IDI4NSA2NzAgMjI4IDU1M0MgMTg3IDQ4MCAxNzYgMzkwIDIwMSAzMDlDIDIzNyAxODIgMzYyIDg4IDQ5NCA4OEMgNDk2IDg4IDQ5OCA4OCA1MDAgODhDIDUwMCA4OCA1MDAgODggNTAwIDg4TSAzODcgNDAwQyAzODcgNDYyIDQzOCA1MTIgNTAwIDUxMkMgNTYyIDUxMiA2MTMgNDYyIDYxMyA0MDBDIDYxMyAzMzggNTYyIDI4NyA1MDAgMjg3QyA0MzggMjg3IDM4NyAzMzggMzg3IDQwMEMgMzg3IDQwMCAzODcgNDAwIDM4NyA0MDBcIiB0cmFuc2Zvcm09XCJcIj48L3BhdGg+PC9zdmc+PC9pPjwvc3Bhbj48cD4zOTAxIEVsbSBEcml2ZTxicj5OZXcgWW9yaywgTlkgMTAwMDQ8L3A+YDtcbiAgICBpbmZvLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gICAgbGV0IGhvdXJzID0gY3JlYXRlRGl2KCdob3VycycpO1xuICAgIGhvdXJzLmlubmVySFRNTCA9YDxzcGFuPjxpIGNsYXNzPVwiZmktY25zdWhsLWNsb2NrLXNvbGlkXCI+PHN2ZyBjbGFzcz1cImZpLXBhZGRpbmdcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTAwMG1tXCIgaGVpZ2h0PVwiMTAwMG1tXCIgdmlld0JveD1cIjAgMCAxMDAwIDEwMDBcIiBzdHlsZT1cIndpZHRoOjEuMzNlbTsgaGVpZ2h0OjEuMzNlbTt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiPjxwYXRoIGlkPVwicGF0aFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTSA1MDAgMEMgMjI0IDAgMCAyMjQgMCA1MDBDIDAgNzc2IDIyNCAxMDAwIDUwMCAxMDAwQyA3NzYgMTAwMCAxMDAwIDc3NiAxMDAwIDUwMEMgMTAwMCAyMjQgNzc2IDAgNTAwIDBDIDUwMCAwIDUwMCAwIDUwMCAwIE0gNTUwIDI1MEMgNTUwIDI1MCA1NTAgNDQ1IDU1MCA0NDVDIDU2NSA0NTggNTc1IDQ3OCA1NzUgNTAwQyA1NzUgNTQxIDU0MSA1NzUgNTAwIDU3NUMgNDk5IDU3NSA0OTcgNTc1IDQ5NiA1NzVDIDQ5NiA1NzUgMjg1IDc4NSAyODUgNzg1QyAyNjYgODA1IDIzNCA4MDYgMjE0IDc4NkMgMTk0IDc2NiAxOTUgNzM0IDIxNSA3MTVDIDIxNSA3MTUgNDI1IDUwNCA0MjUgNTA0QyA0MjUgNTAzIDQyNSA1MDEgNDI1IDUwMEMgNDI1IDQ3OCA0MzUgNDU4IDQ1MCA0NDVDIDQ1MCA0NDUgNDUwIDI1MCA0NTAgMjUwQyA0NTAgMjIyIDQ3MiAyMDAgNDk5IDE5OUMgNTI3IDE5OSA1NTAgMjIyIDU1MCAyNTBDIDU1MCAyNTAgNTUwIDI1MCA1NTAgMjUwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwMDAsMCkgc2NhbGUoLTEsMSkgXCI+PC9wYXRoPjwvc3ZnPjwvaT48L3NwYW4+XG4gICAgPHA+XG4gICAgPHNwYW4+TW9uLVRodXJzOiA8L3NwYW4+N2FtLTdwbTxicj48c3Bhbj5GcmktU3VuOiA8L3NwYW4+N2FtLTExcG1cbiAgICA8L3A+YFxuICAgIGluZm8uYXBwZW5kQ2hpbGQoaG91cnMpO1xuICAgIHJldHVybiBpbmZvO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywnaG9tZScpO1xuICAgIG1haW4udGV4dENvbnRlbnQ9IFwiXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVXZWxjb21lVGV4dCgpKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUluZm8oKSk7XG4gICAgXG59XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9