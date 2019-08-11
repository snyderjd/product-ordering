const nav = Object.create({
    renderNav: () => {
        const navContainer = document.querySelector(".navbar");

        navContainer.innerHTML +=  `<ul class="nav__list">
                                        <li class="nav__item"><h4>Betsy</h4></li>
                                        <li class="nav__item"><a href="#">Categories</a></li>
                                        <li class="nav__item"><a href="#">Orders</a></li>
                                        <li class="nav__item"><a href="#">Log Out</a></li>
                                    </ul>`;
    }
});

export default nav;