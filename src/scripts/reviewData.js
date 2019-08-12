const reviewData = Object.create({
    getReviews: () => {
        return fetch("http://localhost:8088/reviews")
            .then(response => response.json());
    }
});

export default reviewData;

