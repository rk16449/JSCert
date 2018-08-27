// Returns true if a valid usa phone number format was entered

function telephoneCheck(str) {
	
	// The minimum length a string is 5555555555 long
	
	if(str.length < 10) return false;
	
	
  return true;
}

telephoneCheck("555-555-5555");