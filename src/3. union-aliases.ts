enum Role {ADMIN=5, READ_ONLY, AUTHOR='AUT'}; // starting with 5
const person:{
	name:string;
	age:number;
	hobbies:string[];
	role:[number,string];
	role2: number | string;
} = {
	name: "Nick",
	age: 37,
	hobbies:['Sports','Cooking','Programming'], // type of string[]
	role:[1,'author'], // tuple
	role2: Role.ADMIN
}

// console.log(person.nickname); won't work
console.log(typeof Role.AUTHOR);

// UNIONs

//Aliases
type Combinable = number | string;
type ConversionDescriptor = 'to-number'|'to-string';

function combine(input1: Combinable, input2: Combinable, typeConversion: ConversionDescriptor){
	let result;
	if(typeof input1 === 'number' && typeof input2 === 'number' || typeConversion === 'to-number'){
		result = +input1 + +input2;
	} else {
		result = input1.toString()+input2.toString();
	}
	return result;
	// if(typeConversion ==="to-number"){
	// 	return +result;
	// } else {
	// 	return result.toString()
	// }
}

const combineAges = combine(9,12, 'to-number');
console.log(combineAges)
const combineNames = combine('9', "12", 'to-number');
console.log(combineNames)

// Type Aliases and Object Types

type User = {name: string; age: number};

function greet(user: User){
	console.log('Hi, I am '+ user.name);
}

function isOlder(user: User, checkAge: number){
	return checkAge > user.age;
}