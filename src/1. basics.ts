function add(n1: number,n2: number, printResult:boolean){
	if(printResult) {
		console.log(n1+n2)
	} else {
		return n1+n2;
	}
}

const num1 = 5;
const num2 = 2.8;
const printResult = true;
let number1 = 5;
//number1="hello"; wont work

const result = add(num1,num2, printResult);
console.log(result);