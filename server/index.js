const express = require("express");
const cors = require("cors");
const { faker } = require("@faker-js/faker");

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
    const notifications_count = faker.number.int({ min: 16, max: 16 });

    for (let idx = 0; idx < notifications_count; idx++) {
        notifications.push({
            "id": idx,
            "type": faker.helpers.arrayElement(["Stock", "Orders"]),
            "title": `New Order #${faker.number.int({ min: 10000 + idx, max: 90000 + idx })}`,
            "description": faker.lorem.sentence({ min: 16, max: 128 }),
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