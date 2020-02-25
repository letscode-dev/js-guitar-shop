function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}

let CATALOG = [];

// https://api.myjson.com/bins/esicc
fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        render();
    })
    .catch(error => {
        console.log(error);
    });
