let student2 = {
    name: "john doe",
    age: 23,
    courses: ["maths", "physics","computer science"],
    address: {city:"new york", zip: 10001},
    GPA: 3.8
            
};

const getDetails = function(){

    return `${student2.name} is ${student2.age} years old and has a GPA of ${student2.GPA}`;
}

console.log(getDetails());

