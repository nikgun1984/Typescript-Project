class Department{
	//name fields
	// public is by default, no need to add
	// private readonly id: number;
	// readonly <--------- cannot change it
	/*name: string;   <------- THIS WAY OR BELOW */
	// private name fields
	private employees: string[] = [];
	// constructor
	constructor(private readonly id: number, private name: string){  // <-------- OR THIS WAY
		// this.name = n;  INCLUDING ACCESS MODIFIER in constructor 
		//                 ELIMINATE USING THESE INITIALIZATIONS
	}

	describe(this: Department){
		console.log(`Department: ${this.name}`);
	}

	addEmployee(employee: string){
		this.employees.push(employee);
	}

	printEmployeeInformation(){
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

const accounting1 = new Department(1, "Accounting");
accounting.addEmployee("Max");
accounting.addEmployee('Alex');
accounting.describe();

// const accountingCopy = {name:"Copy of Accounting", describe: accounting.describe};

// accountingCopy.describe();