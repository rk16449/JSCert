/*
Return true if the given string is a palindrome. Otherwise, return false.

You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
and turn everything into the same case (lower or upper case) in order to check for palindromes.
*/

function palindrome(str) {
	
	// Create a new string, remove non-alphanumeric and convert to lowercase
	var newStr = str.replace(/[^0-9a-z]/gi, '')
	newStr = newStr.toLowerCase();
	
	// Split the string into an array
	var splitArray = newStr.split("");
	
	// Reverse the array
	var reverseArray = splitArray.reverse();
	
	// Join all elements in array to a string
	var joinArray = reverseArray.join("");
	
	// Check if it equals to newStr
	return newStr === joinArray;
}



palindrome("eye");