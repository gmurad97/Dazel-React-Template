const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const { faker, fakerAZ, fakerEN, fakerRU } = require("@faker-js/faker");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

/* MIDDLEWARE - START */
const apiKeyMiddleware = (request, response, next) => {
    const apiKey = request.query.api_key;
    if (!apiKey)
        return response.status(400).json({ error: "API key is missing" });
    else if (apiKey !== "a3f5d1e4-89b0-4129-8b1a-0e3c6d9589a7")
        return response.status(403).json({ error: 'Invalid API key' });
    else
        next();
}
/* MIDDLEWARE - ENDED */

/* ROUTES - START */
app.get("/api/statistics", (request, response) => {
    response.json({
        "statistic": {
            "badge": [
                {
                    "name": {
                        "en": "Total Revenue",
                        "ru": "Общая выручка",
                        "az": "Ümumi gəlir"
                    },
                    "style": {
                        "icon": "fi fi-sr-money",
                        "linear_gradient": [
                            "#3250FF",
                            "#2BB2FE"
                        ]
                    },
                    "date_data": {
                        "all_date": {
                            "total_revenue": Math.floor(Math.random() * 100000),
                            "percent_change": parseFloat((Math.random() * 20).toFixed(1)),
                            "daily_change": Math.floor(Math.random() * 500),
                            "is_money_eq": true
                        },
                        "12_months": {
                            "total_revenue": Math.floor(Math.random() * 100000),
                            "percent_change": parseFloat((Math.random() * 20).toFixed(1)),
                            "daily_change": Math.floor(Math.random() * 500),
                            "is_money_eq": true
                        },
                        "30_days": {
                            "total_revenue": Math.floor(Math.random() * 100000),
                            "percent_change": parseFloat((Math.random() * 20).toFixed(1)),
                            "daily_change": Math.floor(Math.random() * 500),
                            "is_money_eq": true
                        },
                        "7_days": {
                            "total_revenue": Math.floor(Math.random() * 100000),
                            "percent_change": parseFloat((Math.random() * 20).toFixed(1)),
                            "daily_change": Math.floor(Math.random() * 500),
                            "is_money_eq": true
                        },
                        "24_hour": {
                            "total_revenue": Math.floor(Math.random() * 100000),
                            "percent_change": parseFloat((Math.random() * 20).toFixed(1)),
                            "daily_change": Math.floor(Math.random() * 500),
                            "is_money_eq": true
                        }
                    }
                },
                {
                    "name": {
                        "en": "Total Order",
                        "ru": "Общее количество заказов",
                        "az": "Ümumi sifariş"
                    },
                    "style": {
                        "icon": "fi fi-sr-shopping-cart-check",
                        "linear_gradient": [
                            "#2BB2FE",
                            "#22CAAD"
                        ]
                    },
                    "date_data": {
                        "all_date": {
                            "total_revenue": Math.floor(Math.random() * 100000),
                            "percent_change": parseFloat((Math.random() * 20).toFixed(1)),
                            "daily_change": Math.floor(Math.random() * 500),
                            "is_money_eq": false
                        },
                        "12_months": {
                            "total_revenue": Math.floor(Math.random() * 100000),
                            "percent_change": parseFloat((Math.random() * 20).toFixed(1)),
                            "daily_change": Math.floor(Math.random() * 500),
                            "is_money_eq": false
                        },
                        "30_days": {
                            "total_revenue": Math.floor(Math.random() * 100000),
                            "percent_change": parseFloat((Math.random() * 20).toFixed(1)),
                            "daily_change": Math.floor(Math.random() * 500),
                            "is_money_eq": false
                        },
                        "7_days": {
                            "total_revenue": Math.floor(Math.random() * 100000),
                            "percent_change": parseFloat((Math.random() * 20).toFixed(1)),
                            "daily_change": Math.floor(Math.random() * 500),
                            "is_money_eq": false
                        },
                        "24_hour": {
                            "total_revenue": Math.floor(Math.random() * 100000),
                            "percent_change": parseFloat((Math.random() * 20).toFixed(1)),
                            "daily_change": Math.floor(Math.random() * 500),
                            "is_money_eq": false
                        }
                    }
                },
                {
                    "name": {
                        "en": "Total Customer",
                        "ru": "Общее количество клиентов",
                        "az": "Ümumi müştəri"
                    },
                    "style": {
                        "icon": "fi fi-sr-user-add",
                        "linear_gradient": [
                            "#EB3D4D",
                            "#FBA37C"
                        ]
                    },
                    "date_data": {
                        "all_date": {
                            "total_revenue": Math.floor(Math.random() * 100000),
                            "percent_change": parseFloat((Math.random() * 20).toFixed(1)),
                            "daily_change": Math.floor(Math.random() * 500),
                            "is_money_eq": false
                        },
                        "12_months": {
                            "total_revenue": Math.floor(Math.random() * 100000),
                            "percent_change": parseFloat((Math.random() * 20).toFixed(1)),
                            "daily_change": Math.floor(Math.random() * 500),
                            "is_money_eq": false
                        },
                        "30_days": {
                            "total_revenue": Math.floor(Math.random() * 100000),
                            "percent_change": parseFloat((Math.random() * 20).toFixed(1)),
                            "daily_change": Math.floor(Math.random() * 500),
                            "is_money_eq": false
                        },
                        "7_days": {
                            "total_revenue": Math.floor(Math.random() * 100000),
                            "percent_change": parseFloat((Math.random() * 20).toFixed(1)),
                            "daily_change": Math.floor(Math.random() * 500),
                            "is_money_eq": false
                        },
                        "24_hour": {
                            "total_revenue": Math.floor(Math.random() * 100000),
                            "percent_change": parseFloat((Math.random() * 20).toFixed(1)),
                            "daily_change": Math.floor(Math.random() * 500),
                            "is_money_eq": false
                        }
                    }
                },
                {
                    "name": {
                        "en": "Total Product",
                        "ru": "Общее количество продуктов",
                        "az": "Ümumi məhsul"
                    },
                    "style": {
                        "icon": "fi fi-sr-box",
                        "linear_gradient": [
                            "#3250FF",
                            "#2BB2FE"
                        ]
                    },
                    "date_data": {
                        "all_date": {
                            "total_revenue": Math.floor(Math.random() * 100000),
                            "percent_change": parseFloat((Math.random() * 20).toFixed(1)),
                            "daily_change": Math.floor(Math.random() * 500),
                            "is_money_eq": false
                        },
                        "12_months": {
                            "total_revenue": Math.floor(Math.random() * 100000),
                            "percent_change": parseFloat((Math.random() * 20).toFixed(1)),
                            "daily_change": Math.floor(Math.random() * 500),
                            "is_money_eq": false
                        },
                        "30_days": {
                            "total_revenue": Math.floor(Math.random() * 100000),
                            "percent_change": parseFloat((Math.random() * 20).toFixed(1)),
                            "daily_change": Math.floor(Math.random() * 500),
                            "is_money_eq": false
                        },
                        "7_days": {
                            "total_revenue": Math.floor(Math.random() * 100000),
                            "percent_change": parseFloat((Math.random() * 20).toFixed(1)),
                            "daily_change": Math.floor(Math.random() * 500),
                            "is_money_eq": false
                        },
                        "24_hour": {
                            "total_revenue": Math.floor(Math.random() * 100000),
                            "percent_change": parseFloat((Math.random() * 20).toFixed(1)),
                            "daily_change": Math.floor(Math.random() * 500),
                            "is_money_eq": false
                        }
                    }
                }
            ]
        }
    });
});


app.post("/api/auth", apiKeyMiddleware, (request, response) => {
    response.json({
        "is_logged": true,
        "user_data": {
            "first_name": faker.person.firstName(),
            "last_name": faker.person.lastName(),
            "position": {
                "en": faker.helpers.arrayElement(["Administrator", "Moderator", "Manager"]),
                "ru": faker.helpers.arrayElement(["Администратор", "Модератор", "Менеджер"]),
                "az": faker.helpers.arrayElement(["Administrator", "Moderator", "Menecer"]),
            },
            "profile_image": faker.image.avatarLegacy(),
            "is_online": true
        },
        "token": crypto.randomBytes(16).toString("hex"),
        "error": ""
    });
});

app.get("/api/status", apiKeyMiddleware, (request, response) => {
    response.json({
        "status": "ok",
        "version": "0.0.5",
        "health_checks": {
            "api": "up",
            "database": "down"
        }
    });
});

app.get('/api/envelope', apiKeyMiddleware, (request, response) => {
    const chat = faker.number.int({ min: 0, max: 256 });
    const discussion = faker.number.int({ min: 0, max: 64 });
    const reviews = faker.number.int({ min: 0, max: 2 });
    const support = faker.number.int({ min: 0, max: 2 });

    const totalCount = [chat, discussion, reviews, support].filter(count => count !== 0).length;

    response.json({
        "total_count": totalCount,
        "data": {
            "chat": chat,
            "discussion": discussion,
            "reviews": reviews,
            "support": support
        }
    });
});

app.get('/api/notifications', apiKeyMiddleware, (request, response) => {
    const notifications = [];
    const notifications_count = faker.number.int({ min: 0, max: 16 });

    for (let idx = 0; idx < notifications_count; idx++) {
        notifications.push({
            "id": idx,
            "type": faker.helpers.arrayElement(["Stock", "Orders"]),

            "title": {
                "en": `New Order #${faker.number.int({ min: 10000 + idx, max: 90000 + idx })}`,
                "ru": `Новый Заказ #${faker.number.int({ min: 10000 + idx, max: 90000 + idx })}`,
                "az": `Yeni Sifariş #${faker.number.int({ min: 10000 + idx, max: 90000 + idx })}`,
            },
            "description": {
                "en": fakerEN.lorem.sentence({ min: 16, max: 128 }),
                "ru": fakerRU.lorem.sentence({ min: 16, max: 128 }),
                "az": fakerAZ.lorem.sentence({ min: 16, max: 128 })
            },
            "is_readed": faker.datatype.boolean(),
            "timestamp": Math.floor(Date.now() / 1000) - faker.number.int({ min: 1, max: 256000 })
        });
    }

    response.json({
        total_count: notifications.length,
        data: notifications
    });
});
/* ROUTES - ENDED */

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});