// Function for playing sound when button is click
function playSound() {
    var audio = new Audio('./audio/cannon.mp3');
    audio.play();
}

// Function for playing and making the video visible upon button click
function playVideo() {
    document.getElementById("video").play();
    document.getElementById("video").style.visibility = "visible";
}