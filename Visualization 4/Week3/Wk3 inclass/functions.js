//traditional function
function calculateAgeInDays(age){
	return 'My age in days is: ' + age * 365;
}

//variable style function
var calculateAgeInDays = function(age){
	return 'My age in days is: ' + age * 365
}

//ES6 style funtion
var calculateAgeInDays = (age) => 'My age in days is: ' + (age * 365)

console.log(
	calculateAgeInDays(23)
);