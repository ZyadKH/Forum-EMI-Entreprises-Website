const openPopupButtonConférences = document.getElementById("openPopupButton-Conférences");
const popupOverlayConférences = document.getElementById("popupOverlay-Conférences");
const closeButtonConférences = document.getElementById("closeButton-Conférences");
const sliderImageConférences = document.getElementById("sliderImage-Conférences");
const prevButtonConférences = document.getElementById("prevButton-Conférences");
const nextButtonConférences = document.getElementById("nextButton-Conférences");
const imagesConférences = ["./images/ForumImages/EspaceConference/EspaceConferences1.JPG", "./images/ForumImages/EspaceConference/EspaceConferences2.JPG", "./images/ForumImages/EspaceConference/EspaceConferences3.JPG", "./images/ForumImages/EspaceConference/EspaceConferences4.JPG"]; 

let currentIndexConférences = 0;

openPopupButtonConférences.addEventListener("click", () => {
    popupOverlayConférences.style.display = "block";
    updateSliderImageConférences();
});

closeButtonConférences.addEventListener("click", () => {
    popupOverlayConférences.style.display = "none";
});

prevButtonConférences.addEventListener("click", () => {
    currentIndexConférences = (currentIndexConférences - 1 + imagesConférences.length) % imagesConférences.length;
    updateSliderImageConférences();
});

nextButtonConférences.addEventListener("click", () => {
    currentIndexConférences = (currentIndexConférences + 1) % imagesConférences.length;
    updateSliderImageConférences();
});

function updateSliderImageConférences() {
    sliderImageConférences.src = imagesConférences[currentIndexConférences];
}