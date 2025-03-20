
function calculateArea(width, height){
	let area = width * width;
	return area;

}


function convertToFahrenheit(temperature){
	let farenheit = (temperature * 9/5) + 32;
	return farenheit;
}



function isEven(number){
	if(number % 2 === 0){
		return true;

	}else{
		return false;
	}
}



function isLeapYear(year){
	if (year % 4 === 0){
		return true;

	}else if (year % 100 === 0){
		return false;

	}else if (year % 100 === 0 && year % 400 === 0){
		return true;
	}
	
	else{
		return false;
	}

	return false;
}


function countVowels(word){
	let vowels = "aeiouAEIOU";
	let count = 0;
	for(let temp of word){
		if(vowels.includes(temp)){
			count++;
		}
	}
	return count;

}




module.exports = {calculateArea, convertToFahrenheit, isEven, isLeapYear, countVowels};

