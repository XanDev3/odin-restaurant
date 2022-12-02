import {createDiv,createP} from './home.js';

function createMenu(){
    const menuDiv = createDiv('menu');
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
    let descrip = createP('item-content',`${description}`);
    item.appendChild(descrip);

    return item;
}
export function loadMenu() {
    let main = document.querySelector('main');
    main.innerHTML='';
    main.setAttribute('id','menu');
    main.classList.remove('home','contact');
    main.classList.add('menu');
    let menu = createMenu();
    
    
    main.appendChild(menu);
}


