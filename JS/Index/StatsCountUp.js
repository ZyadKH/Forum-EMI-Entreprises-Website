//For the Number of editions 

// Calculate the number of years since 1994
function getYearsSince1994() {
    const currentYear = new Date().getFullYear();
    return currentYear - 1994;
}

//Formatting for the Visitors Number 

// Function to format the number with the European style (dot as thousand separator, comma as decimal separator)
function formatNumberEuropeanStyle(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}



// Function to animate the stats
function animateStats(element, targetValue, duration) {
    const startValue = 0;
    const increment = targetValue / (duration / 16); // Divide by 16 for smoother animation
    let currentValue = startValue;

    const isSpecialNumber = element.classList.contains("special-number");

    function updateStats() {
        currentValue += increment;

        let currentFormattedValue;
        if (isSpecialNumber) {
            currentFormattedValue =
                formatNumberEuropeanStyle(currentValue.toFixed(1)).replace(".", ",");
            // Add "M" to the formatted value
            currentFormattedValue += " M";
        } else {
            currentFormattedValue = formatNumberEuropeanStyle(
                Math.floor(currentValue)
            );
        }

        if (currentValue >= targetValue) {
            element.textContent = isSpecialNumber
                ? "2,7 M"
                : formatNumberEuropeanStyle(Math.floor(targetValue));
        } else {
            element.textContent = currentFormattedValue;
            requestAnimationFrame(updateStats);
        }
    }

    requestAnimationFrame(updateStats);
}




// The Animation Part


// Set up the Intersection Observer to trigger animation for the Edition box
document.addEventListener("DOMContentLoaded", function () {
    const statsElement = document.querySelector(".merged-box .stats");
    const targetValue = getYearsSince1994();
    animateStats(statsElement, targetValue, 2000);
});


// Start the animation once when the element is in the viewport
function startAnimationOnceOnScroll(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const statsElement = entry.target.querySelector(".stats");
            const targetValue = statsElement.textContent.replace(/[^\d,.]/g, "");
            animateStats(
                statsElement,
                parseFloat(targetValue.replace(",", ".")),
                2000
            );
            observer.unobserve(entry.target);
        }
    });
}

// Set up the Intersection Observer to trigger animation
const statsElements = document.querySelectorAll(".box");
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
}; 0

const statsObserver = new IntersectionObserver(
    startAnimationOnceOnScroll,
    observerOptions
);
statsElements.forEach((element) => statsObserver.observe(element));
