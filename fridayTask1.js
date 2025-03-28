const student = {
    name: "john doe",
    age: 22,
    courses: ["maths", "physics","computer science"],
    address: {city:"new york", zip: 10001}
            
};

const {name} = student;
console.log(name);
const {courses} = student;
console.log(courses[1]);
const {address} = student;
console.log(student.address.zip);

student.age = 23;
console.log(student.age);

student.GPA = 3.8;
console.log(student.GPA)





const getDetails = function(){

    let student2 = {
        name: "john doe",
        age: 23,
        courses: ["maths", "physics","computer science"],
        address: {city:"new york", zip: 10001},
        GPA: 3.8
                
    };


    return `${student2.name} is ${student2.age} years old and has a GPA of ${student2.GPA}`;
}

console.log(getDetails());

