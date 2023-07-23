function toggleIntroduction() {
    const introduction = document.getElementById("introduction");
    if (introduction.style.display === "none") {
        introduction.style.display = "block";
    } else {
        introduction.style.display = "none";
    }
}