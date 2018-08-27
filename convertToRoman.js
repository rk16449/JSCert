function convertToRoman(num) {
	
	// two arrays holding roman numerals and their respective number value
	var numerals = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
	var values = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];

	// the String to return
	var romanized = '';
	
	// Loop through values array
	for (var i = 0; i < values.length; i++) {
		
		// Check whether or not this number fits inside num
		while (values[i] <= num) {
			// If it does then add the roman numeral and take away the value (repeat if values[i] is still <= num)
			romanized += numerals[i];
			num -= values[i];
		}
	}
	
	return romanized;
}

convertToRoman(36);