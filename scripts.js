document.addEventListener("DOMContentLoaded", function () {
    // Create the overlay dynamically
    const overlay = document.createElement("div");
    overlay.classList.add("transition-overlay");
    document.body.appendChild(overlay);

    // Fade the overlay OUT when the page loads
    setTimeout(() => {
        overlay.style.opacity = "0";
    }, 50);

    // Add event listeners to all links
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            const target = this.getAttribute("href");

            // Ignore anchor links and new tab links
            if (target.startsWith("#") || this.target === "_blank") {
                return;
            }

            e.preventDefault(); // Prevent default navigation

            // Fade the overlay IN before navigating
            overlay.style.opacity = "1";

            setTimeout(() => {
                window.location.href = target; // Navigate after the fade-in
            }, 500); // Match the transition duration (0.5s)
        });
    });
});
