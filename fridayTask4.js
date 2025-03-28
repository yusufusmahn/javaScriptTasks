const inventory = {
    apple: 10,
    banana: 5,
    orange: 8,
    mango: 12,

}

for(let values in inventory){
    console.log(`${values}: ${inventory[values]} `)
};

let totalNumberOfFruits = 0;
for(let value in inventory){
    totalNumberOfFruits += inventory[value];
}
console.log("total quantity is: ", totalNumberOfFruits);