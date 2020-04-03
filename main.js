document.getElementById("fireButton").style.display = "none";

var wood = 0;
var flint = false;

function gather(number){
	wood = wood + number;
	flint = true;
	document.getElementById("wood").innerHTML = wood;
	document.getElementById("flint").innerHTML = flint;
	if(wood>= 5 && flint== true){
		document.getElementById("fireButton").style.display = "block";
	};
		
};

var fire = false;
var fireSize = 10;

function fire(fuel){
	if(fuel > 0){
		fuel;

	};

};

function buildFire(){
	var fireCost = Math.floor(10 * Math.pow(1.1, fireSize));
	if(wood >= fireCost){
		fire = true;
		wood = wood - fireCost;
		fireSize = fireSize + 1;
		document.getElementById('fire').innerHTML = fire;
		document.getElementById('wood').innerHTML = wood;

	};
	var nextCost = Math.floor(10 * Math.pow(1.1, fireSize));
	document.getElementById('fireCost').innerHTML = nextCost;
};

window.setInterval(function(){
	// gatherWood(golems);
	fire(fireSize)

}, 1000);