import './style.css';
import {initWebsite} from './loadPage.js';
import {loadHome} from './home.js';

export function setActiveButton(button) {
    let buttons = document.querySelectorAll ('.button-nav');
    buttons.forEach(button => {
        if (button !== this) {
            button.classList.remove('active');
        }
    });
    button.classList.add("active");
}
initWebsite();


