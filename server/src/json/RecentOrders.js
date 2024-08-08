const { faker } = require("@faker-js/faker");

const RecentOrders = () => {
    const orders = [];
    const numOrders = faker.number.int({ min: 16, max: 128 });

    for (let idx = 0; idx < numOrders; idx++) {
        orders.push({
            "id": idx,
            "orderId": `#${faker.number.int({ min: 100000, max: 999999 }).toString()}`,
            "image": faker.image.urlLoremFlickr(40, 40, 'product', true),
            "productName": faker.commerce.productName(),
            "subtext": `+${faker.number.int({ min: 1, max: 5 })} other products`,
            "date": faker.date.past().getTime(),
            "customer": `${faker.person.firstName()} ${faker.person.lastName()}`,
            "customer_email": faker.internet.email(),
            "total": `$${faker.number.float({ min: 20, max: 1000 }).toFixed(2)}`,
            "payment": faker.helpers.arrayElement(["Mastercard", "Visa", "PayPal", "American Express"]),
            "status": faker.helpers.arrayElement(["Processing", "Shipped", "Delivered", "Canceled"]),
        });
    }
    return orders;

}

module.exports = RecentOrders;