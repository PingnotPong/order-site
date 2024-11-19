let basket = {};

function renderMenu() {
    navRef = document.getElementById("nav");
    menuRef = document.getElementById("menu");
    navRef.innerHTML = "";
    menuRef.innerHTML = "";
    for (x in restaurants["bombay-mirchi"]["kategorien"]) {
        navRef.innerHTML += getKategorieNavTemplate(x, x);
        menuRef.innerHTML += getKategorieTemplate(x, x);
        categoryDishList = restaurants["bombay-mirchi"]["kategorien"][x];
        for (let y = 0; y < categoryDishList.length; y++) {
            dName = categoryDishList[y]["name"];
            dContents = categoryDishList[y]["info"];
            dPrice = categoryDishList[y]["price"];
            menuRef.innerHTML += getMenuCardTemplate(dName, dContents, dPrice);
        }
    }
}

function renderBasket() {

}

function editBasket(action) {
    // action = plus minus delete
}

// ids nav menu basketContainer
