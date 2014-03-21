var fs = require('fs');

console.log(process.argv)

var outputFile = process.argv[3];
var copiedFile = process.argv[2];

fs.readFile(copiedFil e, function(err, copyFileData) {
	var destinationfile = copyFileData;

	fs.writeFile(outputFile, destinationfile, function(err) {
		if(err) {
			console.log(err);
		}
		else {
			console.log("success");
		}
	})
});