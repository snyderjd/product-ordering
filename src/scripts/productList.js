import productData from "./productData.js";
import product from "./product.js";

const productList = Object.create({
    displayProducts: () => {
        const productContainer = document.querySelector(".product__container");

        productData.getProducts().then(parsedProducts => {
            parsedProducts.forEach(prod => {
                console.log(prod);
                const HTMLRepresentation = product.createHTML(prod);
                product.addToDOM(productContainer, HTMLRepresentation);
            });
        });
    }
});

export default productList;