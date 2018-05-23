var spotlight = document.querySelector(".spotlight");
var spotlightSize = "transparent 160px, rgba(0, 0, 0, 0.85) 200px)";
window.addEventListener("mousemove", function (e) {
    updateSpotlight(e);
});
window.addEventListener("mousedown", function (e) {
    if (e.which === 1) {
        spotlightSize = "transparent 130px, rgba(0, 0, 0, 0.95) 150px)";
        updateSpotlight(e);
    }
});
window.addEventListener("mouseup", function (e) {
    spotlightSize = "transparent 160px, rgba(0, 0, 0, 0.85) 200px)";
    updateSpotlight(e);
});
function updateSpotlight(e) {
    spotlight.backgroundImage = "radial-gradient(circle at " + e.pageX / window.innerWidth * 100 + "% " + e.pageY / window.innerHeight * 100 + "%, " + spotlightSize;
}
