const { faker } = require("@faker-js/faker");

const TopSellingProduct = () => {
    return {
        "id": faker.string.uuid(),
        "product_name": {
            "en": faker.commerce.productName(),
            "ru": faker.commerce.productName(), // Можно добавить локализацию, если нужно
            "az": faker.commerce.productName()  // Можно добавить локализацию, если нужно
        },
        "sku": faker.string.numeric({ length: 6 }),
        "amount": faker.number.int({ min: 1, max: 10000 }),
        "price": faker.number.float({ min: 10, max: 1000, precision: 0.01 }),
        "status": {
            "en": faker.helpers.arrayElement(["In Stock", "Low Stock", "Out of Stock"]),
            "ru": faker.helpers.arrayElement(["В наличии", "Мало на складе", "Нет в наличии"]),
            "az": faker.helpers.arrayElement(["Mövcuddur", "Az var", "Stokda yoxdur"])
        },
        "thumbnail": faker.image.urlPicsumPhotos()
    };
}

module.exports = TopSellingProduct;






/* 


const top_selling_product = () => {
    return {
        "badge": "DEVELOPMENT STAGE (TESTING API)",
        "date_data": {
            "all_date": [
                {
                    "id": "1",
                    "product_name": {
                        "en": "Handmade Pouch(en)",
                        "ru": "Handmade Pouch(ru)",
                        "az": "Handmade Pouch(az)"
                    },
                    "sku": "302012",
                    "amount": 1001,
                    "price": 150,
                    "status": {
                        "en": "Low Stock (en)",
                        "ru": "Low Stock (ru)",
                        "az": "Low Stock (az)"
                    },
                    "thumbnail": "https://avatars.githubusercontent.com/u/87978787"
                },
                {
                    "id": "2",
                    "product_name": {
                        "en": "Handmade Pouch(en)",
                        "ru": "Handmade Pouch(ru)",
                        "az": "Handmade Pouch(az)"
                    },
                    "sku": "302012",
                    "amount": 1001,
                    "price": 150,
                    "status": {
                        "en": "Low Stock (en)",
                        "ru": "Low Stock (ru)",
                        "az": "Low Stock (az)"
                    },
                    "thumbnail": "https://avatars.githubusercontent.com/u/87978787"
                }
            ],
            "12_months": [
                {
                    "id": "1",
                    "product_name": {
                        "en": "Handmade Pouch(en)",
                        "ru": "Handmade Pouch(ru)",
                        "az": "Handmade Pouch(az)"
                    },
                    "sku": "302012",
                    "amount": 1001,
                    "price": 150,
                    "status": {
                        "en": "Low Stock (en)",
                        "ru": "Low Stock (ru)",
                        "az": "Low Stock (az)"
                    },
                    "thumbnail": "https://avatars.githubusercontent.com/u/87978787"
                },
                {
                    "id": "2",
                    "product_name": {
                        "en": "Handmade Pouch(en)",
                        "ru": "Handmade Pouch(ru)",
                        "az": "Handmade Pouch(az)"
                    },
                    "sku": "302012",
                    "amount": 1001,
                    "price": 150,
                    "status": {
                        "en": "Low Stock (en)",
                        "ru": "Low Stock (ru)",
                        "az": "Low Stock (az)"
                    },
                    "thumbnail": "https://avatars.githubusercontent.com/u/87978787"
                }
            ],
            "30_days": [
                {
                    "id": "1",
                    "product_name": {
                        "en": "Handmade Pouch(en)",
                        "ru": "Handmade Pouch(ru)",
                        "az": "Handmade Pouch(az)"
                    },
                    "sku": "302012",
                    "amount": 1001,
                    "price": 150,
                    "status": {
                        "en": "Low Stock (en)",
                        "ru": "Low Stock (ru)",
                        "az": "Low Stock (az)"
                    },
                    "thumbnail": "https://avatars.githubusercontent.com/u/87978787"
                },
                {
                    "id": "2",
                    "product_name": {
                        "en": "Handmade Pouch(en)",
                        "ru": "Handmade Pouch(ru)",
                        "az": "Handmade Pouch(az)"
                    },
                    "sku": "302012",
                    "amount": 1001,
                    "price": 150,
                    "status": {
                        "en": "Low Stock (en)",
                        "ru": "Low Stock (ru)",
                        "az": "Low Stock (az)"
                    },
                    "thumbnail": "https://avatars.githubusercontent.com/u/87978787"
                }
            ],
            "7_days": [
                {
                    "id": "1",
                    "product_name": {
                        "en": "Handmade Pouch(en)",
                        "ru": "Handmade Pouch(ru)",
                        "az": "Handmade Pouch(az)"
                    },
                    "sku": "302012",
                    "amount": 1001,
                    "price": 150,
                    "status": {
                        "en": "Low Stock (en)",
                        "ru": "Low Stock (ru)",
                        "az": "Low Stock (az)"
                    },
                    "thumbnail": "https://avatars.githubusercontent.com/u/87978787"
                },
                {
                    "id": "2",
                    "product_name": {
                        "en": "Handmade Pouch(en)",
                        "ru": "Handmade Pouch(ru)",
                        "az": "Handmade Pouch(az)"
                    },
                    "sku": "302012",
                    "amount": 1001,
                    "price": 150,
                    "status": {
                        "en": "Low Stock (en)",
                        "ru": "Low Stock (ru)",
                        "az": "Low Stock (az)"
                    },
                    "thumbnail": "https://avatars.githubusercontent.com/u/87978787"
                }
            ],
            "24_hour": [
                {
                    "id": "1",
                    "product_name": {
                        "en": "Handmade Pouch(en)",
                        "ru": "Handmade Pouch(ru)",
                        "az": "Handmade Pouch(az)"
                    },
                    "sku": "302012",
                    "amount": 1001,
                    "price": 150,
                    "status": {
                        "en": "Low Stock (en)",
                        "ru": "Low Stock (ru)",
                        "az": "Low Stock (az)"
                    },
                    "thumbnail": "https://avatars.githubusercontent.com/u/87978787"
                },
                {
                    "id": "2",
                    "product_name": {
                        "en": "Handmade Pouch(en)",
                        "ru": "Handmade Pouch(ru)",
                        "az": "Handmade Pouch(az)"
                    },
                    "sku": "302012",
                    "amount": 1001,
                    "price": 150,
                    "status": {
                        "en": "Low Stock (en)",
                        "ru": "Low Stock (ru)",
                        "az": "Low Stock (az)"
                    },
                    "thumbnail": "https://avatars.githubusercontent.com/u/87978787"
                }
            ]
        }
    };
}

module.exports = top_selling_product; */