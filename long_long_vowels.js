function longLongVowels(string){
	var vowelArray = ["a","e","i","o","u","A","E","I","O","U"];
	var vowelArrayLength = vowelArray.length;
	var stringLength = string.length;
	for(var i = 0; i<vowelArrayLength; i++){
		for(var j=0; j< stringLength; j++){
			if((string[j].toUpperCase() === vowelArray[i])&&(string[j+1].toUpperCase() === vowelArray[i])){
				// return true;
				// console.log(vowelArray[i]);
				// console.log(vowelArray[i].repeat(4));
				var updatedString = string.replace(vowelArray[i], vowelArray[i].toLowerCase().repeat(4));
			}
		}
	}
// 	console.log(updatedString);
	return updatedString.replace(updatedString[0],updatedString[0].toUpperCase());
}
string = "Aardvark"
var updatedString = longLongVowels(string);
console.log(updatedString);