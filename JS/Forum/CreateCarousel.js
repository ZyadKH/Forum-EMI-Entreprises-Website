function createCarousel(containerClassName, contentClassName, elementsDisplayed) {
    const root = document.documentElement;
    const carouselElementsDisplayed = getComputedStyle(root).getPropertyValue(elementsDisplayed);
    const carouselContents = document.querySelectorAll(`.${containerClassName} ul.${contentClassName}`);

    carouselContents.forEach(carouselContent => {
        root.style.setProperty(`--${containerClassName}-elements`, carouselContent.children.length);

        for (let i = 0; i < carouselElementsDisplayed; i++) {
            carouselContent.appendChild(carouselContent.children[i].cloneNode(true));
        }

        carouselContent.style.animationDuration = `calc(var(--${containerClassName}-elements) * 3s)`;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    createCarousel("carousel-Official", "carousel-Official-content", "--carousel-Official-elements-displayed");
    createCarousel("carousel-Platinum", "carousel-Platinum-content", "--carousel-Platinum-elements-displayed");
    createCarousel("carousel-Gold", "carousel-Gold-content", "--carousel-Gold-elements-displayed");
    createCarousel("carousel-Silver", "carousel-Silver-content", "--carousel-Silver-elements-displayed");
});
