
const products = [
    {id: 1, name: "laptop", price: 1200},
    {id: 2, name: "phone", price: 800},
    {id: 3, name: "tablet", price: 500},
    {id: 4, name: "desktop", price: 700},

]


let thresholdAmount = 700;
const findExpensiveProducts = function(products, threshold){
    let result = [];
    for(let item in products){
        if (products[item].price > threshold){
            result.push(`${products[item].name}  ${products[item].price}`);
        }
    }

    return result;
    
}

//console.log(findExpensiveProducts(products, thresholdAmount));
module.exports = findExpensiveProducts;
