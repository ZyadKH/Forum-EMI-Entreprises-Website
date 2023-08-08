const Platinumroot = document.documentElement;
const PlatinumcarouselElementsDisplayed = getComputedStyle(Platinumroot).getPropertyValue("--carousel-Platinum-elements-displayed");
const PlatinumcarouselContent = document.querySelector("ul.carousel-Platinum-content");

Platinumroot.style.setProperty("--carousel-Platinum-elements", PlatinumcarouselContent.children.length);

for(let i=0; i<PlatinumcarouselElementsDisplayed; i++) {
    PlatinumcarouselContent.appendChild(PlatinumcarouselContent.children[i].cloneNode(true));
}
