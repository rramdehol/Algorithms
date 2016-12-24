
function countDownFrom (number){
	if(number ===0){
		return 0;
	}
	countDownFrom(number-1);
}

countDownFrom(10);


function fibonnaci(number){
	if(number ===1){
		return 1;
	}
	if(number ===2){
		return 1;
	}
	fibonnaci(number-1)+fibonnaci(number-2);
}
fibonnaci(8);

function recursiveSort(array){
	lengthArray = array.length();
	if(lengthArray ===0){
		return [];
	}
	return recursiveSort(array)
}