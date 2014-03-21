var numberOfVictims = prompt("# of disaster victims?");
	console.log(numberOfVictims);

var arrObjects = [];

	for(var i=0; i<numberOfVictims; i++) {
		var vicObject = {}
		vicObject.firstName = prompt("Enter Name");
		vicObject.phoneNum = prompt("Enter Phone Number");
		vicObject.streetName = prompt("Enter Street Address");
		arrObjects.push(vicObject);
		console.log(arrObjects);
}

	var arr = [];
for(var i =0; i<arrObjects.length; i++) {
	arr.push(arrObjects[i].firstName);
	console.log(arr);
}


// var numberOfVolunteers = prompt("# of disaster volunteers?");
// 	console.log(numberOfVolunteers);

// var arrVolName = []
// var arrVolPhone = []
// var arrVolStreet = []

// for (var i=0; i<numberOfVolunteers; i++){
// 	var volunteerName= prompt("What is your name?");
// 	var volunteerPhone= prompt("What is your phone?");
// 	var volunteerStreet= prompt("Where is your home?");
// 	arrVolName.push(volunteerName);
// 	arrVolPhone.push(volunteerPhone);
// 	arrVolStreet.push(volunteerStreet); 
// 	console.log(arrVolName);
// 	console.log(arrVolPhone);
// 	console.log(arrVolStreet);
// }

alert("Number of victims: " + numberOfVictims + "\n" +  "Victims names: " + arr.join(", "));

