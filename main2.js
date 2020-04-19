class Material { //Matl = Material
	constructor(nameMatl, amountMatl, percentageMatl) { //Make wood
		this.nameMatl = nameMatl;
		this.amountMatl = amountMatl;
		this.percentageMatl = percentageMatl;
	}

	set Matl (number) {
		this.amountMatl += number; //math.Floor(math.Random()*percentageMatl)
		document.getElementById(nameMatl).innerHTML = nameMatl;
	}

	get Matl () {
		document.getElementById(nameMatl).innerHTML = nameMatl;//return this.amountMatl;
	}
}

const wood = new Material("wood", 0, 4);
wood = 


