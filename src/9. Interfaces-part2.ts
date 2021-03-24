/*

Both attributes of below interfaces should be implemented

*/

interface Named {
	// readonly will only allow you to initialize attribute
	// only once
	readonly name: string;
}

interface Greetable extends Named {
	// optional it is not mandatory to initialize it/ same ? can be for methods
	greeting?: string;
	greet(phrase: string):void;
}

class PersonClass implements Greetable{
	name: string;
	// optional can present also inside of the class
    greeting?: string;
	constructor(n:string){
		this.name = n;
	}

	greet(phrase:string){
		console.log('What a '+phrase+'!!!')
	}
}