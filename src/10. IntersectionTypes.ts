// Intersection types

type Admin = {
	name:string;
	privileges: string[];   // WE CAN ALSO USE INTERFACES INSTEAD TYPES HERE
};

type Employee = {
	name: string;           // WE CAN ALSO USE INTERFACES INSTEAD TYPES HERE
	startDate: Date;
}

// then we would extend our interfaces

// interface ElevatedEmployee extends Admin, Employee {}

type ElevatedEmployee = Admin & Employee; 

const e1: ElevatedEmployee = {
	name: 'Max',
	privileges: ['create-server'],
	startDate: new Date()
}

// Optional Chaining

//console.log(e1?.meetingDates); // ? used instead of chaining like with "&&" operator
							   // e1.meetingDates && e1.meetingDates.month

////////////////////////////////////////////////////////////////

// NULLish Coalescing

const input = '';

const storedData = input ?? 'DEFAULT'; // will print ""
// const storedData = input || 'DEFAULT'; // will print "DEFAULT"

// ABOUT TYPE GUARDS

type CombinableType = string | number;
type NumericType = number | boolean;

type Universal = CombinableType & NumericType;

function printEmployee(emp:ElevatedEmployee){
	// typeof is only used on built-in types like string, number etc
	// whereas objects will be object even if its array
	// or object because they are all objects so
	// we can use JS 'in' operator
	if('privileges' in emp){
		console.log('Privileges: '+emp.privileges)
	}
	if('startDate' in emp){
		console.log('Start date: '+emp.startDate)
	}
}

// Type Guard for custom classes with 'instanceof'
// NOTE: instanceof DOES NOT WORK WITH ''interfaces'' only with classes

class Car {
	drive(){
		console.log('Driving...')
	}
}

class Truck {
	drive(){
		console.log('Driving a truck...')
	}

	loadCargo(amount: number){
		console.log('Loading cargo ...'+amount);
	}
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
	 vehicle.drive();
	 if (vehicle instanceof Truck){ // NOTE:: 'in' can be used here as well without problem
		 vehicle.loadCargo(1000);
	 }
}


// Discriminated Unions

interface Bird {
	type: 'bird',
	flyingSpeed: number
}

interface Horse{
	type: 'horse'
	runningSpeed: number
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
	let speed;
	switch(animal.type){
		case 'bird':
			speed = animal.flyingSpeed;
			break;
		case 'horse':
			speed = animal.runningSpeed;
			break;
	}
	console.log('Moving at speed: '+speed);
}

moveAnimal({type:"bird", flyingSpeed: 10});

// Type Casting

// THIS IS ONE WAY: const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; // exclamation sign is telling to TypeScript that expression def not NULL
// ALTERNATIVE:

// const userInputElement = document.getElementById('user-input')! as HTMLInputElement; // exclamation sign is telling to TypeScript that expression def not NULL

// userInputElement.value = 'Hi there!';

const userInputElement = document.getElementById('user-input'); // exclamation sign is telling to TypeScript that expression def not NULL

if(userInputElement){
	(userInputElement as HTMLInputElement).value = 'Hi there!';
}

// Index Properties

interface ErrorContainer { // {email: "Not a valid email", username:"Must start with..."}
	[prop:string]: string;
}

const errorBag: ErrorContainer = {
	email: 'Not a valid email!',
	username: "Must start with a capital character!"
}

// Function Overloading

function addTypes(a:number, b:number):number;
function addTypes(a:string, b:string):string;

// now based what function you have above it will be used to return number in below function
function addTypes(a: CombinableType, b: CombinableType){
	if(typeof a ==='string' || typeof b === 'string'){
		return a.toString()+b.toString();
	}
	return a+b
}

// Now Typescript will know which type result will be -- string or number
const res = addTypes('Nick', 'Gundobin');
res.split(' '); // this line would not work if we did not overload our function because
				// typescript does not know without overloading what will return in "addTypes"

