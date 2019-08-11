const productData = Object.create({
    getProducts: () => {
        return fetch("http://localhost:8088/products")
            .then(response => response.json());
    }
});

export default productData;