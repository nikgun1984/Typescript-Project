function addNums(num1: number, num2: number):number{ // if not indicated will be inferred
	return num1+num2;
}

// undefined VS void

function printResults(num: number){
	console.log('Result: '+num);
	return;
} // can be void and undefined

function printResults2(num: number){
	console.log('Result: '+num);
} // just void as a return type

// type of functions

let combineValues: (a: number, b: number, callback: (num: number)=> void) => number; // returning value
					// more specific values of params
combineValues = addNums;

// unknown types

let userInput: unknown;
let userName: string;

userInput = 5; // it is now number
userInput = 'pokemon'; // it is now string
// userName = userInput; <-------  unknown is not assignable to string
if(typeof userInput === 'string'){  // <---------- solution
	userName = userInput;
}

// never type

function generateError(message: string, code: number): never{
	throw {message,errorCode: code};
}

generateError('An error has occured!', 500);