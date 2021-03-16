// arrow function with what returns

const printOutput: (a: number | string) => void = output => console.log(output);

// default arguments and they have to be last default arguments
// we can skip passing them if we want default values

const addNumsExample = (a:number, b:number=1) => a+b;

//rest
// number[] -- accept any number of number elements
// if you want limited use TUPLE [number, number, number] accept only 3 numbers
const addrest = (...numbers: number[])=>{
	return numbers.reduce((accum:number,val:number)=>{
		return accum+val;
	},0);
}