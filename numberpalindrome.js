// A palindromic number reads the same both ways. 
// The largest palindrome made from the product of 
// two 2-digit numbers is 9009 = 91 × 99. Find the 
// largest palindrome made from the product of two 3-digit numbers. 
// (We will do this in class, so don’t get too worked up if you 
// can’t get it)

function highestPalindrome(lowerLimit, upperLimit){
	var palindromeArray = [];
	for(var i=lowerLimit; i<=upperLimit; i++){
		for(var j=lowerLimit; j<=upperLimit; j++){
			var numberToString = (i*j).toString();
			var numberToStringLength = numberToString.length;
			var newNumberToString = "";
			for(var k = numberToStringLength-1;k >=0;k--){
				newNumberToString += numberToString[k];
				// console.log(k);
			}
			if(newNumberToString === numberToString){
				var stringToNumber = Number(numberToString)
				palindromeArray.push(stringToNumber);
			}	
		}
	}
	// console.log(palindromeArray);
	var sortedPalindromeArray = palindromeArray.sort(function(a, b){return b-a});
	var highestPalindrome = sortedPalindromeArray[0];
	// console.log(sortedPalindromeArray);
	// console.log(highestPalindrome);
	return highestPalindrome;
}

highestPalindrome(100,999);

