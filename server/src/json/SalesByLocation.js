const { faker } = require("@faker-js/faker");

const SalesByLocation = () => {
    const generateDateData = (minRevenue, maxRevenue, minSales, maxSales) => {
        const revenue = faker.number.int({ min: minRevenue, max: maxRevenue });
        const salesCount = faker.number.int({ min: minSales, max: maxSales });
        const percentage = parseFloat(((salesCount / maxSales) * 100).toFixed(2));

        return {
            sales_count: salesCount,
            revenue: revenue,
            percentage: percentage
        };
    };

    return [
        {
            "id": 1,
            "country_name": {
                "en": "United Kingdom",
                "ru": "Соединённое Королевство",
                "az": "Birləşmiş Krallıq"
            },
            "country_flag": "http://127.0.0.1:5000/assets/flag/flag_uk.png",
            "date_data": {
                "all_date": generateDateData(30000, 60000, 800, 1000),
                "12_months": generateDateData(15000, 30000, 500, 800),
                "30_days": generateDateData(7500, 15000, 300, 500),
                "7_days": generateDateData(3750, 7500, 150, 300),
                "24_hour": generateDateData(1875, 3750, 20, 150)
            }
        }
    ];
};

module.exports = SalesByLocation;




/* const sales_by_location = () => {
    return [
        {

            "country_flag": "https://avatars.githubusercontent.com/u/93165061",
            "date_data": {
                "all_date": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "12_months": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "30_days": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "7_days": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "24_hour": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                }
            }
        },
        {
            "country_name": {
                "en": "Spain",
                "ru": "Испания",
                "az": "İspaniya"
            },
            "country_flag": "https://avatars.githubusercontent.com/u/93165061",
            "date_data": {
                "all_date": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "12_months": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "30_days": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "7_days": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "24_hour": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                }
            }
        },
        {
            "country_name": {
                "en": "Indonesia",
                "ru": "Индонезия",
                "az": "İndoneziya"
            },
            "country_flag": "https://avatars.githubusercontent.com/u/93165061",
            "date_data": {
                "all_date": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "12_months": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "30_days": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "7_days": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "24_hour": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                }
            }
        },
        {
            "country_name": {
                "en": "France",
                "ru": "Франция",
                "az": "Fransa"
            },
            "country_flag": "https://avatars.githubusercontent.com/u/93165061",
            "date_data": {
                "all_date": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "12_months": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "30_days": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "7_days": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "24_hour": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                }
            }
        },
        {
            "country_name": {
                "en": "Germany",
                "ru": "Германия",
                "az": "Almaniya"
            },
            "country_flag": "https://avatars.githubusercontent.com/u/93165061",
            "date_data": {
                "all_date": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "12_months": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "30_days": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "7_days": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "24_hour": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                }
            }
        },
        {
            "country_name": {
                "en": "United Arab Emirates",
                "ru": "Объединённые Арабские Эмираты",
                "az": "Birləşmiş Ərəb Əmirlikləri"
            },
            "country_flag": "https://avatars.githubusercontent.com/u/93165061",
            "date_data": {
                "all_date": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "12_months": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "30_days": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "7_days": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "24_hour": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                }
            }
        },
        {
            "country_name": {
                "en": "Turkey",
                "ru": "Турция",
                "az": "Türkiyə"
            },
            "country_flag": "https://avatars.githubusercontent.com/u/93165061",
            "date_data": {
                "all_date": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "12_months": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "30_days": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "7_days": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "24_hour": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                }
            }
        },
        {
            "country_name": {
                "en": "United States",
                "ru": "Соединённые Штаты",
                "az": "Birləşmiş Ştatlar"
            },
            "country_flag": "https://avatars.githubusercontent.com/u/93165061",
            "date_data": {
                "all_date": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "12_months": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "30_days": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "7_days": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "24_hour": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                }
            }
        },
        {
            "country_name": {
                "en": "Japan",
                "ru": "Япония",
                "az": "Yaponiya"
            },
            "country_flag": "https://avatars.githubusercontent.com/u/93165061",
            "date_data": {
                "all_date": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "12_months": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "30_days": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "7_days": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                },
                "24_hour": {
                    "sales_count": 340,
                    "revenue": 17678,
                    "percentage": 12
                }
            }
        }
    ];
}

module.exports = sales_by_location; */