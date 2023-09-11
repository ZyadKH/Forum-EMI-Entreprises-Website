const openPopupButtonStands = document.getElementById("openPopupButton-Stands");
const popupOverlayStands = document.getElementById("popupOverlay-Stands");
const closeButtonStands = document.getElementById("closeButton-Stands");
const sliderImageStands = document.getElementById("sliderImage-Stands");
const prevButtonStands = document.getElementById("prevButton-Stands");
const nextButtonStands = document.getElementById("nextButton-Stands");
const imagesStands = ["./images/ForumImages/EspaceStand/EspaceStands1.JPG", "./images/ForumImages/EspaceStand/EspaceStands2.JPG", "./images/ForumImages/EspaceStand/EspaceStands3.JPG", "./images/ForumImages/EspaceStand/EspaceStands4.JPG"]; 

let currentIndexStands = 0;

openPopupButtonStands.addEventListener("click", () => {
    popupOverlayStands.style.display = "block";
    updateSliderImageStands();
});

closeButtonStands.addEventListener("click", () => {
    popupOverlayStands.style.display = "none";
});

prevButtonStands.addEventListener("click", () => {
    currentIndexStands = (currentIndexStands - 1 + imagesStands.length) % imagesStands.length;
    updateSliderImageStands();
});

nextButtonStands.addEventListener("click", () => {
    currentIndexStands = (currentIndexStands + 1) % imagesStands.length;
    updateSliderImageStands();
});

function updateSliderImageStands() {
    sliderImageStands.src = imagesStands[currentIndexStands];
}