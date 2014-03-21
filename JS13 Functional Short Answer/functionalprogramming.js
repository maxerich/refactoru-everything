/* Original */

var pluralize = function (word, number) {
 if(number === 1) {
  return word;
 }
 else {
  return word + "s";
 }
};


/* Ternary Operator */

var pluralize = function(word, number) {
	 return number === 1 ? word :  word + "s"
	
}




/* Original #2 */

var getVictimInfo = function() {
	var victim = {};
 victim.name = prompt("Please enter your name:");
 victim.phone = prompt("Please enter your phone number:");
 victim.street = prompt("Please enter your street:");
 alert('Thank you! Victim entered: \n' +
 victim.name + ", " +
 victim.phone + ", " +
 victim.street);
};

getVictimInfo();


/* Functional Programming */
var getVictimInfo = function() {
	var victim = {};
 	victim.name = prompt("Please enter your name:");
 	victim.phone = prompt("Please enter your phone number:");
 	victim.street = prompt("Please enter your street:");
 	return victim 
};

var tempFunc = function () {
	var v = getVictimInfo()
	alert('Thank you! Victim entered: \n' +
 	v.name + ", " +
 	v.phone + ", " +
 	v.street);
}

tempFunc();








