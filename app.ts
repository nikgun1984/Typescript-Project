const person:{
	name:string;
	age:number;
	hobbies:string[];
	role:[number,string];
} = {
	name: "Nick",
	age: 37,
	hobbies:['Sports','Cooking','Programming'], // type of string[]
	role:[1,'author'] // tuple
}

// console.log(person.nickname); won't work