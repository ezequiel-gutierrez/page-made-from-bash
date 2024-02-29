let music = new Audio("./resources/The Amazing Digital Circus - Main Theme.mp3");
let button = document.getElementById("musicButton");
music.currentTime = 15;
button.onclick = function() {music.play();};
