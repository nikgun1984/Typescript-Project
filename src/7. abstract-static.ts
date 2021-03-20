abstract class Department2{
	static fiscalYear = 2021;
	// protected name fields <--- will be accessible in derived class
	protected employees: string[] = [];
	// constructor
	constructor(private readonly id: number, public name: string){}

	static createDepartment(id:number, depName:string){
		return new Department(id, depName)
	}

	abstract describe(this: Department2):void;

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

	constructor(id: number, admins: string[], private reports: string[]){
		super(id,'IT');
		this.admins = admins;
		this.lastReport = reports[0];
	}

	//getter won't be access as function but property 
	// E.g: accounting.mostRecentReport
	get mostRecentReport(){
		if(this.lastReport){
			return this.lastReport;
		}
		throw new Error('No report found.');
	}
    
	// implement describe method from parent class
	describe(this: ITDepartment){
		// accessing static variables in non-static methods
		console.log(Department2.fiscalYear);
		console.log(`Department: ${this.name}`);
	}
    
	// setter won't be access as function but property 
	// E.g: accounting.mostRecentReport = 'New Report: blah blah'
	set mostRecentReport(value: string){
		if(!value){
			throw new Error('Please specify report!!!');
		}
		this.addReport(value);
	}

	addEmployee(employee: string){
		this.employees.push(employee);
	}

	addReport(text: string){
		this.reports.push(text);
		this.lastReport = text;
	}
}

const employees: string[] = ['Pete', 'Luo', 'Chen'];
const reports: string[] = [];
const accounting = new ITDepartment(1, employees, reports);
accounting.addEmployee("Max");
accounting.addEmployee('Alex');
accounting.describe();