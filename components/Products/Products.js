// import { ROOT_PRODUCTS }    from '/constants/root.js';
// import { CATALOG }          from '/constants/catalog.js';
// import { localStorageUtil } from 'utils/localStorageUtil.js';

class Products {
    constructor() {
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handlerSetLocatStorage(element, id) {
        const result = localStorageUtil.putProducts(id);

        if (result.pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerText = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerText = this.labelAdd;
        }

        headerPage.render(result.products.length);
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, price, img }) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' ' + this.classNameActive;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
                <li class="products-element">
                    <div class="products-element__name">${name}</div>
                    <img class="products-element__img" src="${img}" />
                    <span class="products-element__price">
                        ⚡️ ${price.toLocaleString()} USD
                    </span>
                    <button class="products-element__btn${activeClass}" onclick="productsPage.handlerSetLocatStorage(this, '${id}');">
                        ${activeText}
                    </button>
                </li>
            `;
        });

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
};

const productsPage = new Products();
productsPage.render();
