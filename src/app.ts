// Generic Classes

class DataStorage<T extends number | string | boolean> { // only will work with primitive data type, not reference
	private data:T[] = [];   // like object

	addItem(item: T){
		this.data.push(item)
	}

	removeItem(item: T){
		this.data.splice(this.data.indexOf(item), 1)
	}

	getItems(){
		return [...this.data];
	}
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Nick');
textStorage.addItem('Programmer');
textStorage.removeItem('Nick');
console.log(textStorage.getItems())
