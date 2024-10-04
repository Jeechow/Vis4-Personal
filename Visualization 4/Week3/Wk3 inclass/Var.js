var name = 'Zhichao'
var age = 23
var hobbies = ['hotwheels', 'sleeping', 'billiards']


var personsInfo = {
	name: name,
	age: age,
	hobbies: hobbies,
}

personsInfo.hobbies.push('dying');

console.log(personsInfo.hobbies)

personsInfo.hobbies.pop('dying')

console.log(personsInfo.hobbies)

console.log('Middle two:', personsInfo.hobbies.slice(1,3));