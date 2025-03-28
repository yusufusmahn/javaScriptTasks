const company  = {
    name: "TechCorp",
    location: "San Francisco",
    employee: []
}

company.employee[0] = {id: 2222, name: "tony", department: "HR"};
company.employee[1] = {id: 3333, name: "thomas", department: "Engineering"};
company.employee[2] = {id: 1111, name: "ola", department: "Marketting"};
company.employee[3] = {id: 4444, name: "tunji", department: "EnginAccountingeering"}



console.log(company.employee[1].name);
const {name, location} = company
console.log(`Name of company: ${name} \nLocation: ${location}`);

const getDetails = function(){
    for(let employee of company.employee){
        console.log(`\n${employee.name}:  ${employee.department}`)
    }

}

getDetails();

