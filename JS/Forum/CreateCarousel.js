function createCarousel(containerClassName, contentClassName, elementsDisplayed) {
    const root = document.documentElement;
    const carouselElementsDisplayed = getComputedStyle(root).getPropertyValue(elementsDisplayed);
    const carouselContents = document.querySelectorAll(`.${containerClassName} ul.${contentClassName}`);

    carouselContents.forEach(carouselContent => {
        const numElements = carouselContent.children.length;
        root.style.setProperty(`--${containerClassName}-elements`, numElements);

        for (let i = 0; i < carouselElementsDisplayed; i++) {
            carouselContent.appendChild(carouselContent.children[i].cloneNode(true));
        }

        const animationDuration = numElements * 3; // Adjust the factor as needed
        carouselContent.style.animationDuration = `${animationDuration}s`;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    createCarousel("carousel-Official", "carousel-Official-content", "--carousel-Official-elements-displayed");
    createCarousel("carousel-Platinum", "carousel-Platinum-content", "--carousel-Platinum-elements-displayed");
    createCarousel("carousel-Gold", "carousel-Gold-content", "--carousel-Gold-elements-displayed");
    createCarousel("carousel-Silver", "carousel-Silver-content", "--carousel-Silver-elements-displayed");
});
