<script type="text/javascript">
function fibonacci(){
	// Loop that runs until Boolean
	// Inside the loop....
	// 	add the previous number to the current number to get the new number 
	// 	once we have the new number, check to see if it's even
	// if it's even, throw it on the sum pile;
	var belowFourMil = true;
	var a = 1;
	var b =2; 
	var sum =0;
	var temp= 0;
	while (belowFourMil){
		var newNumber = a+b;
		a = b;
		b = newNumber;
		if(newNumber%2 === 0){
			sum += number;
		}
		if(newNumber > 4000000){
			belowFourMil = false;
		}
	console.log(sum);
	}

</script>
}