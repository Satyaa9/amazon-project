// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Search Bar Functionality
    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".search-icon");

    searchButton.addEventListener("click", function () {
        let searchQuery = searchInput.value.trim();
        if (searchQuery !== "") {
            alert(`Searching for: ${searchQuery}`);
            // Simulate search action (redirect or console log)
            console.log(`Searching for: ${searchQuery}`);
        } else {
            alert("Please enter a search term.");
        }
    });

    // Mobile Menu Toggle
    const menuButton = document.querySelector(".panel-all");
    menuButton.addEventListener("click", function () {
        alert("Navigation menu clicked! (You can implement a dropdown here.)");
    });

    // Add to Cart Alert
    const cartButton = document.querySelector(".nav-cart");
    cartButton.addEventListener("click", function () {
        alert("Your cart is empty! Add some products.");
    });

    // Scroll to Top Functionality
    const scrollToTop = document.createElement("div");
    scrollToTop.innerText = "▲";
    scrollToTop.style.cssText = `
        position: fixed; bottom: 20px; right: 20px;
        background: #f90; color: white; padding: 10px;
        border-radius: 50%; cursor: pointer; font-size: 20px;
        display: none; text-align: center;
    `;
    document.body.appendChild(scrollToTop);

    // Show/hide button on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTop.style.display = "block";
        } else {
            scrollToTop.style.display = "none";
        }
    });

    // Scroll to top on click
    scrollToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    console.log("Amazon clone script loaded successfully!");
});
