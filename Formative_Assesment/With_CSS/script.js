
// Scroll to top button
const topBtn = document.getElementById("topBtn");
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Add hover effect on icons
document.querySelectorAll(".social-icons i").forEach(icon => {
    icon.addEventListener("mouseover", () => {
        icon.style.transform = "scale(1.3)";
    });
    icon.addEventListener("mouseout", () => {
        icon.style.transform = "scale(1)";
    });
});
