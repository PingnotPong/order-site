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

function getMenuCardTemplate() {
    return `
    <div class="menucard">
                    <div>
                        <h3>${dishName}</h3>
                        <span>${dishContents}</span>
                        <span class="menu-card-price">${dishPrice}</span>
                    </div>
                    <button class="fa fa-plus"></button>
                </div>`
}