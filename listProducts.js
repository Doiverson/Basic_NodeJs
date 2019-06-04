let faker = require('faker');

const {productName, price} = faker.commerce

const fn = (num) => {
    for(let i = 0; i<num; i++){

        console.log(`${productName()} - $${price()}`);

    }
}

fn(10)
