/*
1. Variables in interface cannot be initialized
*/

interface Person {
	name: string;
	age: number;

	greet(phrase: string):void;
}
// S  A  M  E   THING AS INTERFACE IN THIS CASE
//   ||  type Person {
//   ||     name: string;
//   ||     age: number;
//  =  =    
//  \  /    greet(phrase: string):void;
//   \/  }

// then implement the object

let user1: Person;

user1 = {
	name: 'Andre',
	age: 32,

	greet(phrase: string){
		console.log(`'${phrase}' is cool`);
	}
}