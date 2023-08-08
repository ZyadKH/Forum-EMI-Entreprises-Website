const Officialroot = document.documentElement;
const OfficialcarouselElementsDisplayed = getComputedStyle(Officialroot).getPropertyValue("--carousel-Official-elements-displayed");
const OfficialcarouselContent = document.querySelector("ul.carousel-Official-content");

Officialroot.style.setProperty("--carousel-Official-elements", OfficialcarouselContent.children.length);

for(let i=0; i<OfficialcarouselElementsDisplayed; i++) {
  OfficialcarouselContent.appendChild(OfficialcarouselContent.children[i].cloneNode(true));
}
