import {setActiveButton} from './index.js';
import {loadHome} from './home.js';
import {loadMenu} from './menu.js';
import {loadContact} from './contact.js'

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
        loadHome(); 
    });
    nav.appendChild(homeButton);

    let menuButton = document.createElement('button');
    menuButton.classList.add('button-nav');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', function (e){
        if(e.target.classList.contains('active')) return;
        setActiveButton(menuButton);
        loadMenu();
    });
    nav.appendChild(menuButton);

    let contactButton = document.createElement('button');
    contactButton.classList.add('button-nav');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', function (e){
        if(e.target.classList.contains('active')) return;
        setActiveButton(contactButton);
        loadContact()
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
export function initWebsite() {
    let content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    loadHome();
    //loadContact();
    setActiveButton(document.querySelector(".button-nav"));
    


}

