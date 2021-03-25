// Generics

const names: Array<string | number> = []; // we can also define it as
								 // const names: string[]

const promise: Promise<string> = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve('This is done!')
	},2000)
});

// because we know exactly the data that yields we can apply methods on it

promise.then(data => {
	data.split(' ');
})


/// Generic Functions and Constraints

function merge<T extends object, U extends object>(objA: T, objB: U){
	return Object.assign(objA,objB);
}

const mergedObj = merge({name: 'Max'}, {age: 30});
console.log(mergedObj.age);

interface Lengthy{
	length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string]{
	let description = 'Got no value';
	if(element.length>0){
		description = `Got ${element.length} elements`
	}
	return [element, description]; // returns tuple
}

// keyof will help to avoid situations where key does not exist

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
	return 'Value: '+obj[key];
}

extractAndConvert({name:'Max'}, 'name');

/*
NOTE::: DIFFERENCE BETWEEN Generic and Union types:

With union type, your type can be any mentioned type you would use string | boolean | number which is flexibility
It will cause problems later in the code. With generic types by using <T extends string | number>,
you will lock the type in you will use. Let's say if you choose string u have to use string type somewhere in the 
function or class.

*/