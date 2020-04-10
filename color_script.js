var ansColor = randomColor();

var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var color3 = document.getElementById("color3");
var color4 = document.getElementById("color4");
var color5 = document.getElementById("color5");
var color6 = document.getElementById("color6");
 
var gameOver = false;

console.log(ansColor);

var color = [
randomColor(), 
randomColor(),
randomColor(),
randomColor(),
randomColor(),
randomColor()];

color[Math.floor(Math.random()*6)] = ansColor;

console.log(color);

document.getElementById("anscolor").textContent = ansColor;

function randomColor(){
	var x = Math.floor(Math.random()*256);
	var y = Math.floor(Math.random()*256);
	var z = Math.floor(Math.random()*256);
	var rgbcolor = "rgb(" + x +", " + y + ", " + z + ")"
	return rgbcolor;
}


var square = document.querySelectorAll(".square");

for(var i = 0; i < 6; i++){
	square[i].style.backgroundColor = color[i];
}

function colorChecker(){
	if(gameOver){
		alert("Game is Over ! Please refresh to restart the Game !");
	}
	else{
		if(this.style.backgroundColor == ansColor){
		document.getElementById("ansOutput").textContent = "Correct";
		document.getElementById("ansOutput").style.color= "green" ;
		gameOver = true;
		}
		else{
			this.style.visibility = "hidden";
			document.getElementById("ansOutput").textContent = "Wrong";
			document.getElementById("ansOutput").style.color= "red" ;
		}
	}
}

color1.addEventListener("click",colorChecker);
color2.addEventListener("click",colorChecker);
color3.addEventListener("click",colorChecker);
color4.addEventListener("click",colorChecker);
color5.addEventListener("click",colorChecker);
color6.addEventListener("click",colorChecker);