const root = document.documentElement;
const carouselElementsDisplayed = getComputedStyle(root).getPropertyValue("--carousel-elements-displayed");
const carouselContent = document.querySelector("ul.carousel-content");
const carouselContentPlat = document.querySelector("ul.carousel-content-Plat");


root.style.setProperty("--carousel-elements", carouselContent.children.length);

for(let i=0; i<carouselElementsDisplayed; i++) {
  carouselContent.appendChild(carouselContent.children[i].cloneNode(true));
}

root.style.setProperty("--carousel-elements", carouselContentPlat.children.length);

for(let i=0; i<carouselElementsDisplayed; i++) {
  carouselContentPlat.appendChild(carouselContentPlat.children[i].cloneNode(true));
}