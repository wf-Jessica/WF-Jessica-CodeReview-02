function calculateInsurance(){
	var countrys = document.getElementById("Country").value;
	var insurance;
	var horse_power= document.getElementById("hp").value;
	var age = document.getElementById("ag").value;
	var name = document.getElementById("name").value;
switch (countrys) {
	case "0":
	insurance = 0;
	break;
	case "1":
	insurance = horse_power*100/age +50;
	break;
	case "2":
	insurance = horse_power*120/age +100;
	break;
	case "3":
	insurance = horse_power*150/(age+3)+50;
	break;
	}
	document.getElementById("insur").innerHTML = name +" , your insurance costs " +  Math.round(insurance)+ " €";
}
