/*
const book = {
	title:'The Great Gatsby',
	author: 'F. Scott Fitzgerald',
	yearPublished: 1925

};

const {title, author} = book;
console.log(`${title} by ${author}`);


*/





const car = {
	make: 'Toyota',
	model: 'Camry',
	year: 2021

}


const getCarProperties = function(car){

	for(let key in car){
		console.log(car[key]);
	}
}

getCarProperties(car); 