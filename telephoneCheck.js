// Returns true if a valid usa phone number format was entered


/*
Valid inputs

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
1(555)555-5555 <-- biggest string length
*/

function telephoneCheck(str) {
	
	// The minimum length a string is 5555555555 long and max is 1(555)555-5555
	if(str.length < 10 && str.length > 14) return false;
	
	// Now that we have enough string values do a regEx check
	
	// Check that there is a 1 or there isn'tags
	
	// Check for 3 digits either surrounded by brackets or a dash or a space
	
	// same again
	
	// check for 4 digits
	
	
	
	return true;
}

telephoneCheck("555-555-5555");