
// A method that rotates characters 13 letters across
function rot13(str) { // LBH QVQ VG!

	var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	var newVal 	 = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];

	// Convert String to Uppercase
	var newStr = str.toUpperCase();
	
	// Convert the String into an Array
	var stringArray = newStr.split("");
	
	
	var posLeft = 13;
	
	
	
	// Loop through each letter in stringArray
	for(var i=0; i<stringArray.length; i++){
		
		// Loop through the alphabet to see if theres a match
		for(var z=0; z<alphabet.length; z++){

			// If this value is found, replace it with its counter part and exit the loop
			if(stringArray[i] === alphabet[z]){
				stringArray[i] = newVal[z];
				break;
			}
		}
	}
	
	// Join all elements in array to a string
	var joinArray = stringArray.join("");
	
	return joinArray;
}

// Change the inputs below to test
alert(rot13("SERR PBQR PNZC"));