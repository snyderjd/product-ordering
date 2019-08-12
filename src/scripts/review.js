const review = Object.create({
    createHTML: (reviewObject) => {
        return `<section class="review">
                    <h4>${reviewObject.name}</h4>
                    <h4>Rating: ${reviewObject.rating}</h4>
                    <p>${reviewObject.content}</p>
                </section>`;
    },
    addToDOM: (container, HTMLString) => {
        container.innerHTML += HTMLString;
    }
});

export default review;