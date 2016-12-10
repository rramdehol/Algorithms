// function leetSpeak(paragraph){
// 	var lengthOfParagraph = paragraph.length;
// 	var paragraphToUpperCase = paragraph.toUpperCase();
// 	// var checkerArray = ["A","E"."G","I","O","S","T"];
// 	// console.log(lengthOfParagraph);
// 	for(var i=0; i<=lengthOfParagraph;i++){
// 		var elementInString = paragraph[i];
// 		// console.log(elementInString);
// 		if(elementInString === "A"){

// 		}

// 	}
// }
function leetSpeak(paragraph){
	var checkerArray = ["A","E","G","I","O","S","T"];
	var replaceWith = ["4","3","6","1","0","5","7"];
	var paragraphToUpperCase = paragraph.toUpperCase();
	var counterLength = replaceWith.length;
	for(var i=0; i<counterLength;i++){
		for(var j=0; j<paragraph.length;j++){
			console.log(paragraphToUpperCase);
			var updatedParagraph = paragraphToUpperCase.replace(checkerArray[i], replaceWith[i]);
			paragraphToUpperCase = updatedParagraph; 
		}
	}
	 console.log(paragraphToUpperCase);
}

// var paragraph = "Given a paragraph".toUpperCase();
// paragraph[1];
// console.log(paragraph);
// leetSpeak(paragraph);
