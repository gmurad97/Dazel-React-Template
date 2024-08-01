const express = require("express");
const { faker } = require("@faker-js/faker");
const router = express.Router();

router.get("/status", (request, response) => {
    response.json({
        "status": "ok",
        "version": "0.0.5",
        "health_checks": "",
        "health_checks": {
            "api": "up",
            "cache": "down",
            "database": "down"
        }
    });
});

module.exports = router;