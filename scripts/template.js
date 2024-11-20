function getKategorieNavTemplate(categoryID, categoryName) {
    return `
            <a href="#${categoryID}">${categoryName}</a>
    `
}

function getKategorieTemplate(categoryID, categoryName) {
    return `
    <h3 id="${categoryID}">${categoryName}</h3>
    `
}

function getMenuCardTemplate(dishName, dishContents, dishPrice, cat, i) {
    return `
    <div class="menucard">
                    <div>
                        <h3>${dishName}</h3>
                        <span>${dishContents}</span>
                        <span class="menu-card-price">${dishPrice}</span>
                    </div>
                    <button class="fa fa-plus" onclick="editBasket('plus', '${cat}', '${i}')"></button>
                </div>
                `
}

function getBasketBaseTemplate() {
    return `
                    <div class="basket-header">
                    <h2>Warenkorb</h2>
                </div>
                <div id="basket">
                </div>
                <div class="basket-sum">
                    <div><span>Zwischensumme</span><span id="subtotal"></span></div>
                    <div><span>Lieferkosten</span><span id="deliveryCosts"></span></div>
                    <div><span>Gesamt Summe</span><span id="totalSum"></span></div>
                </div>
                <div class="submit-order-button">
                <button onclick="editBasket('buy')">Jetzt Bestellen</button>
                </div
                `
}

function getBasketItemTemplate(dName, dPrice, dCount, cat, i) {
    return `
                    <div class="basket-item">
                        <h3>${dName}</h3>
                        <div><button class="fa fa-minus" onclick="editBasket('minus', '${cat}', '${i}')"></button><span class="basket-count">${dCount}</span><button
                                class="fa fa-plus" onclick="editBasket('plus', '${cat}', '${i}')"></button><span class="basket-price">${dPrice}</span><button
                                class="fa fa-trash-o" onclick="editBasket('delete', '${cat}', '${i}')"></button></div>
                    </div>
                    `
}

function getBasketPlaceholderTemplate() {
    return `
                    <div class="placeholder">
                <h3>Ich rieche deinen Hunger</h3>
                <i class="fa fa-shopping-cart"></i> 
                </div>`
}
