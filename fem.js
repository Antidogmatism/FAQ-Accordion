let image = document.getElementById("image");

let toggleAccordion = function () {
    let accordion = document.getElementById("accordion");

    if (!accordion) {
        console.error("Accordion element not found");
        return;
    }

    if (accordion.style.display === "") {
        accordion.style.display = "none";
    }
    let shouldIShowIt = accordion.style.display === "none";

    if (shouldIShowIt) {
        accordion.style.display = "block";
    } else {
        accordion.style.display = "none";
    }
}
if (image) {
    image.addEventListener("click", () => toggleAccordion());
} else {
    console.error("Image element not found");
}
