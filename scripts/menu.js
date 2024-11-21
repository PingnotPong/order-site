let basket = [];
const basketContRef = document.getElementById("basketContainer");
const navRef = document.getElementById("nav");
const menuRef = document.getElementById("menu");
const buttonSumRef = document.getElementById("displaySum");

function getBasketElements() {
    basketRef = document.getElementById("basket");
    subtotalRef = document.getElementById("subtotal")
    deliveryCostsRef = document.getElementById("deliveryCosts")
    totalSumRef = document.getElementById("totalSum")
}

function renderMenu() {
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
            menuRef.innerHTML += getMenuCardTemplate(dName, dContents, dPrice.toFixed(2) + "€", x, y);
        }
    }
    renderBasket();
}

function renderBasket() {
    basketContRef.innerHTML = "";
    if(basket.length > 0) {
        basketContRef.innerHTML += getBasketBaseTemplate();
        getBasketElements()
        for (let i = 0; i < basket.length; i++) {
            dName = basket[i]["name"]
            dPrice = basket[i]["price"]
            dCount = basket[i]["count"]
            dI = basket[i]["index"]
            dCat = basket[i]["category"]
            basketRef.innerHTML += getBasketItemTemplate(dName, dPrice.toFixed(2) + "€", dCount, dCat, dI);
        } 
        sum = 0;
        delcost = restaurants["bombay-mirchi"]["liefergebühr"];
        for (let y = 0; y < basket.length; y++) {
            sum = sum + (basket[y]["count"] * basket[y]["price"]);
        }
        subtotalRef.innerHTML = sum.toFixed(2) + "€";
        deliveryCostsRef.innerHTML = delcost.toFixed(2) + "€";
        totalSumRef.innerHTML = (sum + delcost).toFixed(2) + "€";
        buttonSumRef.innerHTML = "(" + (sum + delcost).toFixed(2) + "€" + ")";
    } else {
        basketContRef.innerHTML = getBasketPlaceholderTemplate()
        buttonSumRef.innerHTML = "(0.00€)";
    }
}

function editBasket(action, cat, i) {
    if (cat == undefined) {} else {
        nameTest = restaurants["bombay-mirchi"]["kategorien"][cat];
        nameTest = nameTest[i]["name"];        
    }
    switch (action) {
        case "plus":
            result = false;
            for (let y = 0; y < basket.length; y++) {
                if (basket[y]["name"] == nameTest) {
                    result = true;
                    basket[y]["count"]++;
                    break;
                } else {
                    result = false
                }
            }
            if (result == false) {
                basket.push({
                    "name" : restaurants["bombay-mirchi"]["kategorien"][cat][i]["name"], 
                    "price" : restaurants["bombay-mirchi"]["kategorien"][cat][i]["price"],
                    "count" : 1,
                    "index" : i,
                    "category" : cat
                    });
            }
            break;
        case "minus":
            for (let y = 0; y < basket.length; y++) {
                if (nameTest == basket[y]["name"]) {
                    if(basket[y]["count"] > 1) {
                        basket[y]["count"]--;
                        break;    
                    } else {
                        basket.splice(y, 1)
                    }
                } else{}
            }
            break;
        case "delete":
            for (let y = 0; y < basket.length; y++) {
                if (nameTest == basket[y]["name"]) {
                    basket.splice(y, 1)
                } else{}             
            }
            break;
        case "buy":
            basket = [];
            renderBasket();
            // window.location.replace("/pages/ordered.html")
            window.location.href = "/pages/ordered.html";
            break;
        default:
            break;
    }
    renderBasket();
}