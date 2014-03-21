// /* Letter Capitalize */
var  letterCapitalize = function(str) {
 	var arr = str.split(" ")
	for(var i=0; i <arr.length; i++) {
		arr[i] = oneWordCapitalize(arr[i])
	}
	return arr.join(" ")
}


var oneWordCapitalize = function(word) {
	var arr = word.split("");
	arr[0] = arr[0].toUpperCase();
	return arr.join("");
}

var string = "help"
string.split("")


// /* Word Count */

var sentence = "Here we go again"

var wordCount = function(str) {
 	 var arr = str.split(" ")
	 console.log(arr.length)
}
 wordCount(sentence)


 /* Prime Time */

 var primeTime = function(num) {
	if (num < 2 ) {
		return num + " is not a prime number";
	}
 	else if (num === 2) {
 		return "2 is a prime number";
 	}
 	else {
 		for(var i = 2; i < num/2; i++) {
 			if(num % i === 0) {
 				return num + " is not a prime number";
 			}
 			else {
 				return num + " is a prime number";
 			}
 		} 
 	}
 }

/* First Reverse */

 var firstReverse = function(str) {
 	var newstring = str.split("").reverse().join("")
 	return newstring
 	}


/* Swap Case */

var swapCase = function(str) {
	var newStr = "";
	for(var i=0; i<str.length; i++) {
		if (str[i] === str[i].toUpperCase()) {
			newStr += str[i].toLowerCase()
		} 
		else if  (str[i] === str[i].toLowerCase()) {
			newStr += str[i].toUpperCase()
		}
		else {
			newStr += str[i]
		}
		
	}
	return newStr
}


// 	var newStr  = str.substring(1).toUpperCase()
// 	console.log(newStr)
// 	var firstChar= str.charAt(0).toLowerCase()
// 	console.log(firstChar)
// 	console.log(firstChar + newStr)
// }



// PROBLEM SET #3

/* Palindrome */

var Palindrome = function(str) {
	var newArr = []
	var strArr = str.split("")
	for(var i=strArr.length-1; i>-1; i--) {
		newArr.push(strArr[i])
	}
	if(newArr.join("") === strArr.join("")) {
		return true
	}
	else {
		return false
	}

}


/* Dash Insert */

var dashInsert = function(num) {
	var number = num 
	var newArr = []
	var numArr = number.toString().split("")
	for(var i=0; i<numArr.length; i++) {
		if(numArr[i]%2 !== 0 && numArr[i+1]%2 !== 0 /*&& numArr[i] !== (numArr.length-1) */) {
			newArr.push(numArr[i]+"-")
		}
		else {
			newArr.push(numArr[i])	
		}
	}
	return newArr.join("")
}



/* Caesar Cipher */

var caesarCipher = function(str, num) {
	var alphabet = "abcdefghijklmnopqrstuvwxyz"
	for(var i=0; i<str.length; i++) {
		console.log(str[i])
		var index = alphabet.indexOf(str[i])
		console.log(index)
		var newstr = str.replace(str[i], alphabet[index+num])
	}
	return newstr
}






















































