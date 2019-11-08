
// require packages
var faker = require('faker');

for (var i = 1; i <= 10; i++) {
    
    console.log("***");
    console.log("Name:" + faker.commerce.productName());
    console.log("Price:" + faker.commerce.price());
}

