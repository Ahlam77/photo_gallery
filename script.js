
// Add event listeners for focus and blur events
document.addEventListener("DOMContentLoaded", function () {
    const figures = document.querySelectorAll("figure");

    figures.forEach((figure) => {
        figure.addEventListener("focus", function () {
            this.style.border = "2px solid blue";
            console.log("Figure focused: ", this.querySelector("img").alt);
        });

        figure.addEventListener("blur", function () {
            this.style.border = "1px solid #ccc";
            console.log("Figure blurred: ", this.querySelector("img").alt);
        });

        figure.addEventListener("mouseover", function () {
            this.style.border = "2px solid green";
            console.log("Mouse over: ", this.querySelector("img").alt);
        });

        figure.addEventListener("mouseleave", function () {
            this.style.border = "1px solid #ccc";
            console.log("Mouse left: ", this.querySelector("img").alt);
        });
    });

    // Add tabindex dynamically (if not already added in HTML)
    figures.forEach((figure, index) => {
        figure.setAttribute("tabindex", index + 1);
    });
});
