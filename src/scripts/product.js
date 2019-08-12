const product = Object.create({

    createHTML: (product) => {
        return `<section class="product">
                    <h1>${product.title}</h1>
                    <p>${product.description}</p>
                    <h4>Price: ${product.price}</h4>
                    <h4>Quantity: ${product.quantity}</h4>
                    <img src="${product.image}" alt="product.title" picture>
                    <h4>Reviews</h4>
                    <article class="reviews__container"></article>
                </section>`;
    },
    addToDOM: (container, HTMLString) => {
        container.innerHTML += HTMLString;
    }
});

export default product;