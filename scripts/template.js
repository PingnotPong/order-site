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

function getMenuCardTemplate(dishName, dishContents, dishPrice) {
    return `
    <div class="menucard">
                    <div>
                        <h3>${dishName}</h3>
                        <span>${dishContents}</span>
                        <span class="menu-card-price">${dishPrice}</span>
                    </div>
                    <button class="fa fa-plus"></button>
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
                    <div><span>zwischensumme</span><span>1986</span></div>
                    <div><span>lieferkosten</span><span>27</span></div>
                    <div><span>gesamt</span><span>832ß139</span></div>
                </div>`
}

function getBasketItemTemplate() {
    return `
                        <div class="basket-item">
                        <h3>Ein Gericht</h3>
                        <div><button class="fa fa-minus"></button><span class="basket-count">1</span><button
                                class="fa fa-plus"></button><span class="basket-price">13,50€</span><button
                                class="fa fa-trash-o"></button></div>
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
