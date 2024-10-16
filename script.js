// Toggle visibility of overlay and main content
document.getElementById("enter-button").addEventListener("click", function() {
    const overlay = document.getElementById("overlay");
    const mainContent = document.getElementById("main-content");
    
    overlay.style.display = "none";  // Hide overlay
    mainContent.style.display = "block";  // Show main content

    // Optional: Smooth transition effect
    mainContent.style.opacity = 0;
    setTimeout(() => {
        mainContent.style.transition = "opacity 1s";
        mainContent.style.opacity = 1;
    }, 10);
});
