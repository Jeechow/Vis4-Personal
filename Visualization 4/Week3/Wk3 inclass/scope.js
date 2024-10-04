console.log("test");

let thisIsAGlobalVariable = "I am global";

function testingDaScope() {
	let thisIsALocalVariable = "I am local you all";

	console.log(thisIsAGlobalVariable); //Accessing global variable
	console.log(thisIsALocalVariable); //Accessing local variable
}

testingDaScope();