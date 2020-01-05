// import { ROOT_HEADER }      from '/constants/root.js';
// import { shoppingPage }     from 'components/Shopping/Shopping.js';
// import { localStorageUtil } from 'utils/localStorageUtil.js';

class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
            <div class="header-container">
                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                    🔥 ${count}
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
};

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);
