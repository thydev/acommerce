
window.onload = () => {
    const spotlight = document.querySelector(".spotlight");
    // var box = document.getElementsByClassName("box").style.backgroundImage ='url("https://images.unsplash.com/photo-1519677100203-a0e668c92439") no-repeat center;'
    // var box = document.getElementsByClassName("box").style.background ='red'

    let spotlightSize = "transparent 100px, rgba(0, 0, 0, 0.85) 150px)";

    window.addEventListener("mousemove", e => {
        updateSpotlight(e);
    });

    window.addEventListener("mousedown", e => {
        if (e.which === 1) {
            spotlightSize = "transparent 80px, rgba(0, 0, 0, 0.95) 150px)";
            updateSpotlight(e);
        }
    });

    window.addEventListener("mouseup", e => {
        spotlightSize = "transparent 100px, rgba(0, 0, 0, 0.85) 150px)";
        updateSpotlight(e);
    });

    function updateSpotlight(e) {
        spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;
    }
}
