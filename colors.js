const theSection = document.getElementById("clickBox");
function getNewColorValues() {let red = Math.floor(Math.random()*256); let green = Math.floor(Math.random()*256); let blue = Math.floor(Math.random()*256); return {red, green, blue};};
function newColor() {let {red, green, blue} = getNewColorValues(); theSection.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;};
theSection.onclick = newColor;
