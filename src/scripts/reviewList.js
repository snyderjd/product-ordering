import reviewData from "./reviewData.js";
import review from "./review.js";

const reviewList = Object.create({
    displayReviews: () => {

        reviewData.getReviews().then(parsedReviews => {
            // Reference to container that holds the product cards
            const products = document.querySelector(".product__container").childNodes;

            // Iterate through the product cards
            products.forEach(product => {
                // Reference to the product name and the reviews container for each product
                const productName = product.childNodes[1];
                const reviewContainer = product.childNodes[13];

                // Iterate through the reviews and render into the current product's reviews container if product.name matches review.product
                parsedReviews.forEach(rev => {
                    if (rev.product === productName.textContent) {
                        const reviewHTML = review.createHTML(rev);
                        review.addToDOM(reviewContainer, reviewHTML);
                    }
                });
            });
        });
    }
});

export default reviewList;