const {calculateArea, convertToFahrenheit, isEven, isLeapYear, countVowels} = require("./task11.js"); 


test("area of rectangle", ()=>{

	let width = 2;
	let height = 2;
	const result = calculateArea(width, height);
	let answer = 4;
	expect(result).toBe(answer);

})


test ("temperature in farenheit", ()=>{

	let temperature = 2;
	const result = convertToFahrenheit(temperature);
	let answer = 35.6;
	expect(result).toBe(answer);

})




test("check if number is even", ()=>{
	let number = 4;
	const result = isEven(number);
	let answer = true;
	expect(result).toBe(answer);

})



test("is year a leap year", ()=>{
	let year = 2025;
	const result = isLeapYear(year);
	let answer = false;
	expect(result).toBe(answer);

})



test ("count the vowel", ()=>{
	let word = "telephone";
	const result = countVowels(word);
	let answer = 4;
	expect(result).toBe(answer);


})











