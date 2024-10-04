console.log("test")

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

console.log("The numbers array is: " + numbers);

//loop through the numbers array from start to end
for (var i = 0; i < numbers.length; i++) {
	numbers[i]

	//want to determine if current index is even

	if (numbers[i] % 2 == 0){
		//log that it is even
		console.log(numbers[i] + " is even")

	} else {
		console.log(numbers[i] + " is odd")
		//log that it is odd

	}
}