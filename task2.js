const car = {
	make: 'Toyota',
	model: 'Camry',
	year: 2021

}


const getCarProperties = function(car){

	for(let key in car){
		console.log(`car[key]`);
	}
}

getCarProperties(car);

