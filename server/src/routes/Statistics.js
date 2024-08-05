const express = require("express");
const router = express.Router();
const Badges = require("../json/Badges.js");
const Target = require("../json/Target.js");
const Statistic = require("../json/Statistic.js");
const TopSellingProduct = require("../json/TopSellingProduct.js");
const SalesByLocation = require("../json/SalesByLocation.js");
const RecentOrders = require("../json/RecentOrders.js");

router.get("/statistics", (request, response) => {
    response.json({
        "badges": Badges(),
/*         "target": Target(),
        "statistic": Statistic(),
        "sales_by_location": SalesByLocation(), */
    });
})

module.exports = router;
