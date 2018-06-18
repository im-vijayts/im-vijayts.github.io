css = document.getElementById("disp-color");
color1 = document.querySelector(".color1");
color2 = document.querySelector(".color2");
body = document.getElementById("gradient");

function colorChange(){
	body.style.background = 
	"linear-gradient(to right, " + color1.value + "," + color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", colorChange);
color2.addEventListener("input", colorChange);