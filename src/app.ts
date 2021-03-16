class Department2{
	// protected name fields <--- will be accessible in derived class
	protected employees: string[] = [];
	// constructor
	constructor(private readonly id: number, public name: string){}

	describe(this: Department2){
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
//can only inherit from one class like in Java
class ITDepartment extends Department2 {
// will inherit everything what base class has
	admins: string[];
	private lastReport: string;

	//getter won't be access as function but property 
	// E.g: accounting.mostRecentReport
	get mostRecentReport(){
		if(this.lastReport){
			return this.lastReport;
		}
		throw new Error('No report found.');
	}
    
	// setter won't be access as function but property 
	// E.g: accounting.mostRecentReport = 'New Report: blah blah'
	set mostRecentReport(value: string){
		if(!value){
			throw new Error('Please specify report!!!');
		}
		this.addReport(value);
	}

	constructor(id: number, admins: string[], private reports: string[]){
		super(id,'IT');
		this.admins = admins;
		this.lastReport = reports[0];
	}

	addEmployee(employee: string){
		this.employees.push(employee);
	}

	addReport(text: string){
		this.reports.push(text);
		this.lastReport = text;
	}
}

const accounting = new Department2(1, "Accounting");
accounting.addEmployee("Max");
accounting.addEmployee('Alex');
accounting.describe();

// const accountingCopy = {name:"Copy of Accounting", describe: accounting.describe};

// accountingCopy.describe();