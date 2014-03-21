// This function is not yet implemented, and should initially make the tests fail.
// TODO: Make the tests pass!
/**
		@param arr 						An array
		@param start 					The index to start removing items
		@param numToReplace		The number of items to remove from the array
		@param ...						Items to insert
		@returns							A new array
*/
var splice = function(arr, start, numToReplace, replace) {
	var arr = arr;
	var newarr = [];
	if(start > 0 && replace) {
		if(start > arr.length && arguments.length > 4) {
			for(var i=0; i<arr.length; i++) {
			newarr.push(arr[i]);
		}
			for(var i=3; i<arguments.length; i++)
			newarr.push(arguments[i])		
	}
		else if(start > arr.length) {
			for(var i=0; i<arr.length; i++) {
			newarr.push(arr[i]);
		}
			newarr.push(replace)		
	}
		else{
			for(var i=0; i<start; i++) {
			newarr.push(arr[i]);
		}
			newarr.push(replace)
			for(var i=start+numToReplace; i<arr.length; i++) {
			newarr.push(arr[i]);
		}
	}

	}
	else if(start > 0) {
		for(var i=0; i<start; i++) {
			newarr.push(arr[i]);
		}
		for(var i=start+numToReplace; i<arr.length; i++) {
			newarr.push(arr[i]);
		}
	}
	return newarr;
};
