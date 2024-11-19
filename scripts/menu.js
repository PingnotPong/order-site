let basket = [];

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
            menuRef.innerHTML += getMenuCardTemplate(dName, dContents, dPrice.toFixed(2) + "€", x, y);
        }
    }
    renderBasket();
}

function renderBasket() {
    basketRef = document.getElementById("basketContainer")
    basketRef.innerHTML = "";
    if(basket.length > 0) {
        basketRef.innerHTML += getBasketBaseTemplate();
        basketRef = document.getElementById("basket");
        subtotalRef = document.getElementById("subtotal")
        deliveryCostsRef = document.getElementById("deliveryCosts")
        totalSumRef = document.getElementById("totalSum")
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
    
    } else {
        basketRef.innerHTML = getBasketPlaceholderTemplate()
    }
}

function editBasket(action, cat, i) {
    nameTest = restaurants["bombay-mirchi"]["kategorien"][cat];
    nameTest = nameTest[i]["name"];
    switch (action) {
        case "plus":
            result = false;
            for (let y = 0; y < basket.length; y++) {
                if (basket[y]["name"] == nameTest) {
                    result = true;
                    basket[y]["count"]++;
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
        default:
            break;
    }
    renderBasket();
}