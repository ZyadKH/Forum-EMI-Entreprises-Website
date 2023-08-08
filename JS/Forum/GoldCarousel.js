const Goldroot = document.documentElement;
const GoldcarouselElementsDisplayed = getComputedStyle(Goldroot).getPropertyValue("--carousel-Gold-elements-displayed");
const GoldcarouselContent = document.querySelector("ul.carousel-Gold-content");

Goldroot.style.setProperty("--carousel-Gold-elements", GoldcarouselContent.children.length);

for(let i=0; i<GoldcarouselElementsDisplayed; i++) {
  GoldcarouselContent.appendChild(GoldcarouselContent.children[i].cloneNode(true));
}
