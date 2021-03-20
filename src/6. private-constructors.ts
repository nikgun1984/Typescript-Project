// private constructors

class DepartmentStore{
	static fiscalYear = 2021;
	// needed to check if instance already exists
	// if so just return it otherwise create it --- SINGLETON Design Pattern
	private static instance: DepartmentStore;
	// protected name fields <--- will be accessible in derived class
	protected employees: string[] = [];
	// constructor
	constructor(private readonly id: number, public name: string){}
    
	// BY CREATING STATIC METHOD WE CAN USE TO CONSTRUCT 
	// OBJECT WITHOUT ACCESSING CONSTRUCTOR FROM OUTSIDE
	// OF THIS CLASS
	static createDepartment(id:number, depName:string){
		if(DepartmentStore.instance){
			return this.instance;
		}
		DepartmentStore.instance = new DepartmentStore(id, depName);
		return DepartmentStore.instance;
	}

	addEmployee(employee: string){
		this.employees.push(employee);
	}

	printEmployeeInformation(){
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

const department = DepartmentStore.createDepartment(13, 'Grocery');
const department2 = DepartmentStore.createDepartment(14, 'Dairy');
console.log(department);
console.log(department2); // will return same Grocery Store because constructor of the class can be
							// called only once