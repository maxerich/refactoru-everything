var numberOfVictims = prompt("# of disaster victims?");
	console.log(numberOfVictims);

var arrName = [];
var arrPhone =[];
var arrStreet = [];

	for(var i=0; i<numberOfVictims; i++) {
	var victimName = prompt("Enter Name");
	var victimPhone = prompt("Enter Phone Number");
	var victimStreet = prompt("Enter Street Address");
	arrName.push(victimName);
	arrPhone.push(victimPhone);
	arrStreet.push(victimStreet);
	console.log(arrName);
	console.log(arrPhone);
	console.log(arrStreet);
}


var numberOfVolunteers = prompt("# of disaster volunteers?");
	console.log(numberOfVolunteers);

var arrVolName = []
var arrVolPhone = []
var arrVolStreet = []

for (var i=0; i<numberOfVolunteers; i++){
	var volunteerName= prompt("What is your name?");
	var volunteerPhone= prompt("What is your phone?");
	var volunteerStreet= prompt("Where is your home?");
	arrVolName.push(volunteerName);
	arrVolPhone.push(volunteerPhone);
	arrVolStreet.push(volunteerStreet); 
	console.log(arrVolName);
	console.log(arrVolPhone);
	console.log(arrVolStreet);
}

alert("Number of victims: " + numberOfVictims + "\n" + "Number of Volunteers: " + numberOfVolunteers + "\n" + "Victims names: " + arrName.join(", ") + "\n" + "Volunteers name: " + arrVolName.join(", "));

