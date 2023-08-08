const Silverroot = document.documentElement;
const SilvercarouselElementsDisplayed = getComputedStyle(Silverroot).getPropertyValue("--carousel-Silver-elements-displayed");
const SilvercarouselContent = document.querySelector("ul.carousel-Silver-content");

Silverroot.style.setProperty("--carousel-Silver-elements", SilvercarouselContent.children.length);

for(let i=0; i<SilvercarouselElementsDisplayed; i++) {
    SilvercarouselContent.appendChild(SilvercarouselContent.children[i].cloneNode(true));
}
