const badges = () => {
    return [
        {
            "name": {
                "en": "Total Revenue",
                "ru": "Общее количество выручки",
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
                "all_time": {
                    "total_revenue": Math.floor(Math.random() * (120000 - 50000 + 1)) + 50000,
                    "percent_change": (Math.random() * (15 - 5) + 5).toFixed(1),
                    "daily_change": Math.floor(Math.random() * (2000 - 500 + 1)) + 500,
                    "is_money_eq": true
                },
                "12_months": {
                    "total_revenue": Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000,
                    "percent_change": (Math.random() * (12 - 5) + 5).toFixed(1),
                    "daily_change": Math.floor(Math.random() * (1200 - 300 + 1)) + 300,
                    "is_money_eq": true
                },
                "30_days": {
                    "total_revenue": Math.floor(Math.random() * (30000 - 8000 + 1)) + 8000,
                    "percent_change": (Math.random() * (15 - 8) + 8).toFixed(1),
                    "daily_change": Math.floor(Math.random() * (300 - 100 + 1)) + 100,
                    "is_money_eq": true
                },
                "7_days": {
                    "total_revenue": Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
                    "percent_change": (Math.random() * (8 - 5) + 5).toFixed(1),
                    "daily_change": Math.floor(Math.random() * (400 - 100 + 1)) + 100,
                    "is_money_eq": true
                },
                "24_hour": {
                    "total_revenue": Math.floor(Math.random() * (1500 - 300 + 1)) + 300,
                    "percent_change": (Math.random() * (20 - 10) + 10).toFixed(1),
                    "daily_change": Math.floor(Math.random() * (100 - 20 + 1)) + 20,
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
                "all_time": {
                    "total_revenue": Math.floor(Math.random() * (48000 - 20000 + 1)) + 20000,
                    "percent_change": (Math.random() * (15 - 10) + 10).toFixed(1),
                    "daily_change": Math.floor(Math.random() * (600 - 200 + 1)) + 200,
                    "is_money_eq": false
                },
                "12_months": {
                    "total_revenue": Math.floor(Math.random() * (40000 - 15000 + 1)) + 15000,
                    "percent_change": (Math.random() * (14 - 9) + 9).toFixed(1),
                    "daily_change": Math.floor(Math.random() * (500 - 150 + 1)) + 150,
                    "is_money_eq": false
                },
                "30_days": {
                    "total_revenue": Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000,
                    "percent_change": (Math.random() * (12 - 7) + 7).toFixed(1),
                    "daily_change": Math.floor(Math.random() * (250 - 100 + 1)) + 100,
                    "is_money_eq": false
                },
                "7_days": {
                    "total_revenue": Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000,
                    "percent_change": (Math.random() * (10 - 6) + 6).toFixed(1),
                    "daily_change": Math.floor(Math.random() * (200 - 50 + 1)) + 50,
                    "is_money_eq": false
                },
                "24_hour": {
                    "total_revenue": Math.floor(Math.random() * (700 - 200 + 1)) + 200,
                    "percent_change": (Math.random() * (7 - 4) + 4).toFixed(1),
                    "daily_change": Math.floor(Math.random() * (80 - 20 + 1)) + 20,
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
                "all_time": {
                    "total_revenue": Math.floor(Math.random() * (35000 - 15000 + 1)) + 15000,
                    "percent_change": (Math.random() * (12 - 8) + 8).toFixed(1),
                    "daily_change": Math.floor(Math.random() * (150 - 50 + 1)) + 50,
                    "is_money_eq": false
                },
                "12_months": {
                    "total_revenue": Math.floor(Math.random() * (30000 - 12000 + 1)) + 12000,
                    "percent_change": (Math.random() * (11 - 7) + 7).toFixed(1),
                    "daily_change": Math.floor(Math.random() * (120 - 40 + 1)) + 40,
                    "is_money_eq": false
                },
                "30_days": {
                    "total_revenue": Math.floor(Math.random() * (9000 - 3000 + 1)) + 3000,
                    "percent_change": (Math.random() * (9 - 5) + 5).toFixed(1),
                    "daily_change": Math.floor(Math.random() * (100 - 30 + 1)) + 30,
                    "is_money_eq": false
                },
                "7_days": {
                    "total_revenue": Math.floor(Math.random() * (2500 - 800 + 1)) + 800,
                    "percent_change": (Math.random() * (8 - 4) + 4).toFixed(1),
                    "daily_change": Math.floor(Math.random() * (80 - 20 + 1)) + 20,
                    "is_money_eq": false
                },
                "24_hour": {
                    "total_revenue": Math.floor(Math.random() * (600 - 200 + 1)) + 200,
                    "percent_change": (Math.random() * (7 - 3) + 3).toFixed(1),
                    "daily_change": Math.floor(Math.random() * (60 - 10 + 1)) + 10,
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
                "all_time": {
                    "total_revenue": Math.floor(Math.random() * (50000 - 20000 + 1)) + 20000,
                    "percent_change": (Math.random() * (10 - 5) + 5).toFixed(1),
                    "daily_change": Math.floor(Math.random() * (150 - 50 + 1)) + 50,
                    "is_money_eq": false
                },
                "12_months": {
                    "total_revenue": Math.floor(Math.random() * (40000 - 15000 + 1)) + 15000,
                    "percent_change": (Math.random() * (9 - 6) + 6).toFixed(1),
                    "daily_change": Math.floor(Math.random() * (120 - 40 + 1)) + 40,
                    "is_money_eq": false
                },
                "30_days": {
                    "total_revenue": Math.floor(Math.random() * (12000 - 5000 + 1)) + 5000,
                    "percent_change": (Math.random() * (8 - 4) + 4).toFixed(1),
                    "daily_change": Math.floor(Math.random() * (100 - 30 + 1)) + 30,
                    "is_money_eq": false
                },
                "7_days": {
                    "total_revenue": Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000,
                    "percent_change": (Math.random() * (7 - 4) + 4).toFixed(1),
                    "daily_change": Math.floor(Math.random() * (80 - 20 + 1)) + 20,
                    "is_money_eq": false
                },
                "24_hour": {
                    "total_revenue": Math.floor(Math.random() * (700 - 200 + 1)) + 200,
                    "percent_change": (Math.random() * (6 - 3) + 3).toFixed(1),
                    "daily_change": Math.floor(Math.random() * (60 - 10 + 1)) + 10,
                    "is_money_eq": false
                }
            }
        }
    ];
}

module.exports = badges;